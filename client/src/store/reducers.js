import * as actionTypes from './actionTypes';
import {updateObject} from '../shared/utility';


const initialState = {
		items: [],
		loading: false,
		isOpen: false
}

const deleteItemHandler = (state, id) => {
	const updatedState = {
		items: state.items.filter(item => item._id !== id)
	}
	return updateObject(state, updatedState)
}

const addItemHandler = (state, Item) => {
	const newState = state.items.push(Item);
	return updateObject(state, newState);
}


const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.INIT_ITEMS: return updateObject(state, {items: action.items, loading: false});

		case actionTypes.DELETE_ITEM: return deleteItemHandler(state, action.id);

		case actionTypes.ADD_ITEM: return addItemHandler(state, action.newItem);

		case actionTypes.ITEMS_LOADING: return updateObject(state, {loading: true});

		case actionTypes.TOGGLE_SIDEDRAWER: return updateObject(state, {isOpen: !state.isOpen});

		case actionTypes.LOADING_ITEMS: return updateObject(state, {loading: true});

		default:
			return state
	}
}

export default reducer;