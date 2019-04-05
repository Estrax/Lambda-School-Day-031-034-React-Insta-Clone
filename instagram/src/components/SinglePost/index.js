import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';

const SinglePost = (props) => {
    const singlePost = props.getPost(props.username);
	return (
		<div>
			<Post post={singlePost} likePost={props.likePost} addNewComment={props.addNewComment} deleteComment={props.deleteComment} />
		</div>
	);
}

SinglePost.propTypes = {
	post: PropTypes.shape({
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string
    })
}

export default SinglePost;