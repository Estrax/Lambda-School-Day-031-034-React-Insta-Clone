import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Post from '../Post';

const PostContainer = (props) => {
	return (
		<div>
			{props.posts.map(post => <Post key={post.timestamp} post={post} />)}
		</div>
	);
}

PostContainer.propTypes = {
	posts: PropTypes.array
}

export default PostContainer;