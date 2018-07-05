export const updateObject = (oldObject, incomingObject) => {
	return {
		...oldObject,
		...incomingObject
	}
};