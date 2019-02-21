import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faUser, faHeart } from '@fortawesome/free-regular-svg-icons';

import styled from 'styled-components';
import SearchBar from '../SearchBar';

const NavbarBrandStyled = styled(NavbarBrand)`
	font-family: 'Grand Hotel';
	font-size: 24px !important;
`;

const NavbarStyled = styled(Navbar)`
	margin-bottom: 5rem;
	border-bottom: 1px solid lightgray;
`;

const Divider = styled.span`
	margin: 0 .5rem;
	color: lightgrey;
`;

const Icon = styled(FontAwesomeIcon)`
	font-size: 1.5rem;
`;

class NavbarComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};
		this.toggle = this.toggle.bind(this);
		this.signOut = this.signOut.bind(this);
	}

	toggle() {
		this.setState({
			...this.state,
			isOpen: !this.state.isOpen
		});
	}

	signOut() {
		localStorage.setItem('username', '');
	}

	render() {
		return (
			<NavbarStyled color="white" light expand="md">
				<NavbarBrandStyled href="/">
					<Icon icon={faInstagram} />
					<Divider>|</Divider>
					Instagram
				</NavbarBrandStyled>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<SearchBar
								handleSearch={this.props.handleSearch}
								value={this.props.value}
							/>
						</NavItem>
					</Nav>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="">
								<Icon icon={faCompass} />
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="">
								<Icon icon={faHeart} />
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="" onClick={this.signOut}>
								<Icon icon={faUser}/>
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</NavbarStyled>
		);
	}
}

export default NavbarComponent;