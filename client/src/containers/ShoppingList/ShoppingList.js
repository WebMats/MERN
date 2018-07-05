import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {propTypesCheck} from '../../shared/utility.js';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import * as actions from '../../store/actions';
import ItemModal from '../../components/ItemModal/ItemModal';
import uuid from 'uuid';


class ShoppingList extends Component {
	state = {
		modal: false,
		name: ''
	}
	componentDidMount() {
		this.props.onGetItems()
	}
	toggle = () => {
		this.setState({modal: !this.state.modal})
	}
	onChangeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}
	onSubmitHandler = (e) => {
		e.preventDefault();
		const newItem = {
			id: uuid(),
			name: this.state.name
		}
		this.props.onAddItem(newItem);
		this.toggle();
	}


	render() {
		const { items } = this.props.item
		const list = items.map(({id, name}) => (
			<CSSTransition key={id} timeout={500} classNames="fade">
				<ListGroupItem>
				<Button
					className="remove-btn"
					color="danger"
					size="sm"
					onClick={() => this.props.onDeleteItem(id)}
				>&times;</Button>
				{name}
				</ListGroupItem>
			</CSSTransition>
			))

		return (
			<Container>
				<ItemModal
					submit={(e) => this.onSubmitHandler(e)}
					toggle = {this.toggle}
					modal = {this.state.modal}
					changed = {(e) => this.onChangeHandler(e)}
				 />
				<ListGroup>
					<TransitionGroup className="shopping-list">
						{list.reverse()}
					</TransitionGroup>
				</ListGroup>
			</Container>

			);
	}
}
// prop type checker section start
propTypesCheck(ShoppingList, actions.getItems, PropTypes.func)
// prop type checker section end


const mapStateToProps = state => {
	return {
		item: state
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onGetItems: () => dispatch(actions.getItems()),
		onDeleteItem: (id) => dispatch(actions.deleteItem(id)),
		onAddItem: (newItem) => dispatch(actions.addItem(newItem))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);