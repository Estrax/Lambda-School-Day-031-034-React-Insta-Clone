import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CommentSection = () => {
	return (
		<div>
			COMMENT
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