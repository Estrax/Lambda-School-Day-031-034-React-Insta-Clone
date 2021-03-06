import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Authenticate from './hoc/authentication/authenticate';
import LoginPage from './components/Login';
import NavbarComponent from './components/Navbar';
import PostsPage from './components/PostsPage';
import { Switch, Route } from 'react-router-dom';
import SinglePost from './components/SinglePost';

class App extends Component {
	constructor() {
		super();

		this.state = {
			posts: [],
			search: '',
			filteredPosts: [],
		}

		this.handleInput = this.handleInput.bind(this);
		this.searchPosts = this.searchPosts.bind(this);
		this.likePost = this.likePost.bind(this);
		this.addNewComment = this.addNewComment.bind(this);
		this.deleteComment = this.deleteComment.bind(this);
		this.getPost = this.getPost.bind(this);
	}

	encode(todos) {
		return JSON.stringify(todos);
	}

	decode(str) {
		return JSON.parse(str);
	}

	localStorageSave(str) {
		localStorage.setItem('posts', str);
	}

	localStorageFetch() {
		return localStorage.getItem('posts');
	}


	componentDidMount() {
		this.fetchComments();
	}

	fetchComments() {
		let posts = this.decode(this.localStorageFetch());
		if(posts === "[]" || posts === null || posts === undefined || posts === [] || posts.length === 0){
			this.localStorageSave(this.encode(dummyData));
		}

		this.setState({
			...this.state,
			posts: this.decode(this.localStorageFetch())
		});
	}

	handleInput(event) {
		event.preventDefault();
		this.setState({
			...this.state,
			[event.target.name]: event.target.value
		});
	}

	searchPosts(event) {
		event.preventDefault();

		const posts = this.state.posts.filter(post => post.username.includes(event.target.value)===true)
		this.setState({
			...this.state,
			filteredPosts: posts
		});
	}

	likePost(event, index) {
		event.preventDefault();
		this.state.posts.filter(post => post.timestamp === index)[0].likes += 1;

		this.localStorageSave(this.encode(this.state.posts));
		this.setState({
			...this.state,
			posts: this.decode(this.localStorageFetch())
		});
	}

	addNewComment(event, index) {
		event.preventDefault();
		this.state.posts.filter(post => post.timestamp === index)[0].comments.push({
			username: localStorage.getItem('username'),
			text: event.target.newComment.value
		});

		this.localStorageSave(this.encode(this.state.posts));

		event.target.newComment.value = "";

		this.setState({
			...this.state,
			posts: this.decode(this.localStorageFetch())
		});
	}

	deleteComment(event, postTS, commentID) {
		event.preventDefault();
		this.state.posts.filter(post => post.timestamp === postTS)[0].comments.splice(commentID, 1);
		this.localStorageSave(this.encode(this.state.posts));

		this.setState({
			...this.state,
			posts: this.decode(this.localStorageFetch())
		});
	}

	getPost(index) {
		return this.state.posts.filter(post => post.username === index)[0];
	}

	render() {
		const posts = this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts;
		return (
			<div>
				<NavbarComponent
					handleInput={this.handleInput}
					handleSearch={this.searchPosts}
					search={this.state.search}
				/>
				<div className="posts">
				<Switch>
					<Route exact path='/' component={() => <PostsPage posts={posts} likePost={this.likePost} addNewComment={this.addNewComment} deleteComment={this.deleteComment} />}/>
					<Route exact path='/single-post/:username' component={(props) => <SinglePost username={props.match.params.username} likePost={this.likePost} addNewComment={this.addNewComment} deleteComment={this.deleteComment} getPost={this.getPost} />}/>
				</Switch>
				</div>
			</div>
		);
	}
}

export default Authenticate(App)(LoginPage);
