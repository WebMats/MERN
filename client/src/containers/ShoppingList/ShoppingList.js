import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

import * as actions from '../../store/actions';
import {connect} from 'react-redux';


class ShoppingList extends Component {

	render() {
		const { items } = this.props.item
		const list = items.map(({id, name}) => (
			<CSSTransition key={id} timeout={500} classNames="fade">
				<ListGroupItem>
				<Button
					className="remove-btn"
					color="danger"
					size="sm"
					onClick={() => {
						this.setState(state => ({
							items: state.items.filter(item => item.id !== id)
						}))
					}}
				>&times;</Button>
				{name}
				</ListGroupItem>
			</CSSTransition>
			))

		return (
			<Container>
				<Button 
					color="dark" 
					style={{marginButtom:'2rem'}} 
					onClick={() => {
						const name = prompt('Enter Item');
						if (name) {
							this.setState(state => ({
								items: [...state.items, {id: uuid(), name}]
							}))
						}
					}}
				>Add Item</Button>
				<ListGroup>
					<TransitionGroup className="shopping-list">
						{list.reverse()}
					</TransitionGroup>
				</ListGroup>
			</Container>

			);
	}
}

const mapStateToProps = state => {
	return {
		item: state
	}
}

const mapDispatchToProps = dispatch => {
	return {

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);