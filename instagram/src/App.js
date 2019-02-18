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
				<SearchBar handleInput={this.handleInput} search={this.state.search} />
				{this.state.posts.map(post =>
					<PostContainer
						post={post}
						key={post.timestamp}
					/>
				)}
			</div>
		);
	}
}

export default App;
