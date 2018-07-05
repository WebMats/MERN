import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap';


const itemModal = (props) => {


	return (
	<Aux>
		<Button 
			color="dark" 
			style={{marginBottom: '2rem'}}
			onClick={props.toggle}
		>Add Item</Button>
		<Modal isOpen={props.modal} toggle={props.toggle}>
			<ModalHeader toggle={props.toggle}>Add To Shopping List</ModalHeader>
			<ModalBody>
				<Form onSubmit={props.submit}>
					<FormGroup>
						<Label for="item">Item</Label>
						<Input type="text" name="name" id="item" placeholder="Add Shopping Item"
							onChange={props.changed}
						 />
						 <Button
							outline color="dark" 
							style={{marginTop: '2rem'}}
							block
						 >Add Item</Button>
					</FormGroup>
				</Form>
			</ModalBody>
		</Modal>
	</Aux>
	)
};

export default itemModal ;