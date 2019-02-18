import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';

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
				<PostContainer />
			</div>
		);
	}
}

export default App;
