import React, { Component } from 'react';
import './index.css';
import logo from '../../assets/iglogo.png';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.setState({
			isOpen: false
		});
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
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">Instagram</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={true} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<input
								name="search"
								placeholder="Search"
								onChange={this.props.handleInput}
								value={this.props.value}
							/>
						</NavItem>
					</Nav>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="">
								<FontAwesomeIcon icon="compass" />
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="">
								<FontAwesomeIcon icon="heart" />
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="">
								<FontAwesomeIcon icon="user" />
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

export default SearchBar;