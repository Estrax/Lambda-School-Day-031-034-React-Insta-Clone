import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';

class App extends Component {
	constructor() {
		super();

		this.state = {
			posts: [],
			search: ''
		}

		this.handleInput = this.handleInput.bind(this);
	}

	componentDidMount() {
		this.fetchComments();
	}

	fetchComments() {
		this.setState({
			posts: dummyData
		});
	}

	handleInput(event) {
		event.preventDefault();
		this.setState({
			...this.state,
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<PostContainer />
			</div>
		);
	}
}

export default App;
