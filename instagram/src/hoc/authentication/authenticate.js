import React, { Component } from 'react';

const Authenticate = (App) => (LoginPage) =>
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
			return <LoginPage />
		}
	}

export default Authenticate;