import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Post from '../Post';

const PostContainer = (props) => {
	return (
		<div>
			{props.posts.map(post => <Post key={post.timestamp} post={post} likePost={props.likePost} addNewComment={props.addNewComment} />)}
		</div>
	);
}

PostContainer.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.shape({
			username: PropTypes.string,
			imageUrl: PropTypes.string,
			likes: PropTypes.number,
			timestamp: PropTypes.string
		})
	)
}

export default PostContainer;