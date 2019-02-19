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
		this.likePost = this.likePost.bind(this);
		this.addNewComment = this.addNewComment.bind(this);
	}

	componentDidMount() {
		this.fetchComments();
	}

	fetchComments() {
		setTimeout(() => {
			this.setState({
				...this.state,
				posts: dummyData
			})}, 2000
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

	likePost(event, index) {
		event.preventDefault();
		this.state.posts.filter(post => post.timestamp === index)[0].likes += 1;

		this.setState({
			...this.state,
			posts: this.state.posts
		});
	}

	addNewComment(event, index) {
		event.preventDefault();
		this.state.posts.filter(post => post.timestamp === index)[0].comments.push({
			username: 'lukaszsiatka',
			text: event.target.newComment.value
		});

		event.target.newComment.value = "";

		this.setState({
			...this.state,
			posts: this.state.posts
		});
	}

	render() {
		const posts = this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts;
		return (
			<div>
				<SearchBar
					handleInput={this.handleInput}
					handleSearch={this.searchPosts}
					search={this.state.search}
				/>
				<div className="posts">
					<PostContainer
						posts={posts}
						likePost={this.likePost}
						addNewComment={this.addNewComment}
					/>
				</div>
			</div>
		);
	}
}

export default App;
