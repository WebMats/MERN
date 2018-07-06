import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {propTypesCheck} from '../../shared/utility.js';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import * as actions from '../../store/actions';
import ItemModal from '../../components/ItemModal/ItemModal';


class ShoppingList extends Component {
	state = {
		modal: false,
		name: ''
	}
	componentDidMount() {
		this.props.onInitItems()
	}
	toggle = () => {
		this.setState({modal: !this.state.modal})
		// this.state.modal === true ? document.querySelector('#item').focus() : null;
	}
	onChangeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}
	onSubmitHandler = (e) => {
		e.preventDefault();
		const newItem = {
			name: this.state.name
		}
		this.props.onPostItem(newItem);
		this.toggle();
	}


	render() {
		const { items } = this.props.item;
		let list = [];
		if (items) {
				list = items.map(({_id, name}) => (
				<CSSTransition key={_id} timeout={500} classNames="fade">
					<ListGroupItem>
					<Button
						className="remove-btn"
						color="danger"
						size="sm"
						onClick={() => this.props.onDeleteItem(_id)}
					>&times;</Button>
					{name}
					</ListGroupItem>
				</CSSTransition>
				))
		}

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
propTypesCheck(ShoppingList, actions.initItems, PropTypes.func)
// prop type checker section end


const mapStateToProps = state => {
	return {
		item: state
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onInitItems: () => dispatch(actions.initItems()),
		onDeleteItem: (id) => dispatch(actions.deleteItemFromDB(id)),
		onPostItem: (newItem) => dispatch(actions.postItem(newItem))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);