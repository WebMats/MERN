import uuid from 'uuid';
import * as actionTypes from './actionTypes';
import {updateObject} from '../shared/utility';


const initialState = {
		items: [
			{id: uuid(), name: 'Eggs'},
			{id: uuid(), name: 'Milk'},
			{id: uuid(), name: 'Steak'},
			{id: uuid(), name: 'Candy'}
			]
}

const deleteItemHandler = (state, id) => {
	const updatedState = {
		items: state.items.filter(item => item.id !== id)
	}
	return updateObject(state, updatedState)
}

const addItemHandler = (state, Item) => {
	const newState = state.items.push(Item);
	return updateObject(state, newState);
}


const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.GET_ITEMS: return updateObject(state, {error:null});

		case actionTypes.DELETE_ITEM: return deleteItemHandler(state, action.id);

		case actionTypes.ADD_ITEM: return addItemHandler(state, action.newItem)

		default:
			return state
	}
}

export default reducer;