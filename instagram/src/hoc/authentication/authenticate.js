import React, { Component } from 'react';

import Login from '../../components/Login';

const Authenticate = (App) => 
	class extends Component {
		constructor() {
			super();
			this.state = {
				loggedIn: false
			}
		}

		componentDidMount() {
			let username = localStorage.getItem('username');
			if(username === null || username === undefined) username = "";
			this.setState({ loggedIn: Boolean(username.trim())});
		}

		render() {
			if(this.state.loggedIn){
				return <App />
			}
			return <Login />
		}
	}

export default Authenticate;