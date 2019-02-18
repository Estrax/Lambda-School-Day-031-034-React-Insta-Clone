import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import dummyData from './dummy-data';

class App extends Component {
	constructor() {
		super();

		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		this.fetchComments();
	}

	fetchComments() {
		this.setState({
			posts: dummyData
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

export default App;
