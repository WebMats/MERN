export const updateObject = (oldObject, incomingObject) => {
	return {
		...oldObject,
		...incomingObject
	}
};

export const propTypesCheck = (component, prop, type) => {
	return component.propTypes = {
		prop: type
	}
}