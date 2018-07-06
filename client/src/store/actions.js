import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loadingItems = () => {
	return {
		type: actionTypes.LOADING_ITEMS
	}
}

export const setItems = data => {
	return{
		type: actionTypes.INIT_ITEMS,
		items: data
	}
}

export const initItems = () => {
	return dispatch => {
		dispatch(loadingItems());
		axios.get('/api/items')
			.then(response => dispatch(setItems(response.data)))
			.catch(err => console.log(err))
	}
}

export const deleteItem = (id) => {
	return {
		type: actionTypes.DELETE_ITEM,
		id: id
	}
}

export const addItem = newItem => {
	return {
		type: actionTypes.ADD_ITEM,
		newItem: newItem
	}
}
export const deleteItemFromDB = (id) => {
	return dispatch => {
		axios.delete(`/api/items/${id}`)
			.then(response => {
				dispatch(deleteItem(id))
			})
	}
}

export const postItem = newItem => {
	return dispatch => {
		axios.post('/api/items', newItem)
			.then(response => {
				dispatch(addItem(response.data))
			})
	}
}

export const toggleSideDrawerHandler = () => {
	return {
		type: actionTypes.TOGGLE_SIDEDRAWER
	}
}

