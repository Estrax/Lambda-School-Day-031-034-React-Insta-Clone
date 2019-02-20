import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Comment from '../Comment';

class CommentSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: this.props.comments
		}
	}
	render() {
		return (
			<div className="comments">
				{this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
			</div>
		);
	}
}

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.shape({
		username: PropTypes.string,
		text: PropTypes.string
	}))
}

export default CommentSection;