import React from 'react';
import styled from 'styled-components';

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

const SearchBar = (props) => {
	return (
		<NavbarInput
			name="search"
			placeholder="Search"
			onChange={props.handleSearch}
			value={props.value}
		/>
	);
}

export default SearchBar;