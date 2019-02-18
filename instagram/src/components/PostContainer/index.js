import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import CommentSection from '../CommentSection';

const PostContainer = (props) => {
	return (
		<div>
			<div>
				<img src={props.post.thumbnailUrl} alt="thumbnail" />
				<p>{props.post.username}</p>
			</div>
            <CommentSection comments={props.post.comments} />
		</div>
	);
}

PostContainer.propTypes = {
	post: PropTypes.shape({
		username: PropTypes.string,
		imageUrl: PropTypes.string,
		likes: PropTypes.number,
		timestamp: PropTypes.string
	})
}

export default PostContainer;