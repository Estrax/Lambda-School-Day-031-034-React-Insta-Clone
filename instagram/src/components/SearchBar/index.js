import React, { Component } from 'react';
import './index.css';
// import logo from '../../assets/iglogo.png';
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

const NavbarBrandStyled = styled(NavbarBrand)`
	font-family: 'Grand Hotel';
	font-size: 24px !important;
`;

const NavbarStyled = styled(Navbar)`
	margin-bottom: 5rem;
	border-bottom: 1px solid lightgray;
`;


const NavbarInput = styled.input`
	width: 200px;
	text-align: center;
	box-sizing: border-box;
	background: url(https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_search_48px-128.png);
	background-color: rgb(250, 250, 250);
	background-size: 16px;
	background-repeat: no-repeat;
	background-position: 54px 50%;

	&:focus {
		background-position: 0;
	}
`;

const Divider = styled.span`
	margin: 0 .5rem;
	color: lightgrey;
`;

const Icon = styled(FontAwesomeIcon)`
	font-size: 1.5rem;
`;

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			...this.state,
			isOpen: !this.state.isOpen
		});
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
							<NavbarInput
								name="search"
								placeholder="Search"
								onChange={this.props.handleSearch}
								// onChange={this.props.handleInput}
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
							<NavLink href="">
								<Icon icon={faUser}/>
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</NavbarStyled>
		);
	}
}

export default SearchBar;