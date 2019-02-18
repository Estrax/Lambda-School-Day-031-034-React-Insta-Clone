import React from 'react';
import './index.css';
import logo from '../../assets/iglogo.png';

const SearchBar = () => {
	return (
		<div>
			<div className="logo-wrapper">
				<img src={logo} className="logo" alt="Instagram logo" />
			</div>

			<div>
				<input type="text" placeholder="Search" />
			</div>

			<div>
				<div>
					<i className="fa fa-compass" />
				</div>
				<div>
					<i className="fa fa-heart" />
				</div>
				<div>
					<i className="fa fa-user-circle" />
				</div>
			</div>
		</div>
	);
}

export default SearchBar;