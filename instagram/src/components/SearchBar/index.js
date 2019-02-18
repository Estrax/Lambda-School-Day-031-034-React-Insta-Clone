import React from 'react';
import './index.css';
import logo from '../../assets/iglogo.png';

const SearchBar = (props) => {
	return (
		<div>
			<div className="logo-wrapper">
				<i className="fab fa-instagram" />
				<img src={logo} className="logo" alt="Instagram logo" />
			</div>

			<div>
				<input
					type="text"
					placeholder="Search"
					name="search"
					onChange={props.handleInput}
				/>
			</div>

			<div>
				<div>
					<i className="far fa-compass" />
				</div>
				<div>
					<i className="far fa-heart" />
				</div>
				<div>
					<i className="far fa-user" />
				</div>
			</div>
		</div>
	);
}

export default SearchBar;