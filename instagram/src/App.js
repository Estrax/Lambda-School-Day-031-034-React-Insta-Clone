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
			search: '',
			filteredPosts: []
		}

		this.handleInput = this.handleInput.bind(this);
		this.searchPosts = this.searchPosts.bind(this);
	}

	componentDidMount() {
		this.fetchComments();
	}

	fetchComments() {
		setTimeout(() => {
			this.setState({
				...this.state,
				posts: dummyData
			})}, 3000
		);
	}

	handleInput(event) {
		event.preventDefault();
		this.setState({
			...this.state,
			[event.target.name]: event.target.value
		});
	}

	searchPosts(event) {
		const posts = this.state.posts.filter(post => post.username.includes(event.target.value)===true)
		this.setState({
			...this.state,
			filteredPosts: posts
		});
	}

	render() {
		const posts = this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts;
		return (
			<div>
				<SearchBar
					handleInput={this.searchPosts}
					search={this.state.search}
				/>
				<div className="posts">
					{posts.map(post =>
						<PostContainer
							post={post}
							key={post.timestamp}
						/>
					)}
				</div>
			</div>
		);
	}
}

export default App;
