import React, {Component} from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container
} from 'reactstrap';

import Aux from '../../hoc/Aux/Aux';

class AppNavbar extends Component {
	state = {
		isOpen: false
	}
toggle = () => {
	this.setState({isOpen: !this.state.isOpen})
}

	render() {

		return (
		<Aux>
			<Navbar color="dark" dark expand="sm" className="mb-5">
				<Container>
					<NavbarBrand href="/">Shopping List</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="https://github.com/WebMats">GitHub</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</Aux>
		);
	}
}

export default AppNavbar ;