import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CommentSection = (props) => {
	return (
		<div>
			{props.comments.map((comment, i) => <p key={i}>{comment.text}</p>)}
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