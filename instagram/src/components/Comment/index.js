import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Comment = (props) => {
	return (
		<div className="comment">
			<p>
				<span className="username">
					{props.comment.username}
				</span>
				<span className="content">
					{props.comment.text}
				</span>
			</p>
		</div>
	);
}

Comment.propTypes = {
	comment: PropTypes.shape({
		username: PropTypes.string,
		text: PropTypes.string
	})
}

export default Comment;