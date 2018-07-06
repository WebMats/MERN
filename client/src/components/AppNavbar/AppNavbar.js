import React from 'react';
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

const appNavbar = (props) => (
		<Aux>
			<Navbar color="dark" dark expand="sm" className="mb-5">
				<Container>
					<NavbarBrand href="/">Shopping List</NavbarBrand>
					<NavbarToggler onClick={props.toggle} />
					<Collapse isOpen={props.isOpen} navbar>
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
export default appNavbar ;