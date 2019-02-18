import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Comment from '../Comment';

const CommentSection = (props) => {
	return (
		<div className="comments">
			{props.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
		</div>
	);
}

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.shape({
		username: PropTypes.string,
		text: PropTypes.string
	}))
}

export default CommentSection;