import uuid from 'uuid';
import * as actionTypes from './actionTypes';
import {updateObject} from '../shared/utility';


const initialState = {
		items: [
			{id: uuid(), name: 'Eggs'},
			{id: uuid(), name: 'Milk'},
			{id: uuid(), name: 'Steak'},
			{id: uuid(), name: 'Water'}
			]
}


const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.GET_ITEMS: return updateObject(state, {error: null});

		default:
			return state
	}
}

export default reducer;