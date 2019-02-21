import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './index.css';
import Comment from '../Comment';
import styled from 'styled-components';

const Comments = styled.div`
	margin: 0 1rem;
`;

class CommentSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: this.props.comments
		}
	}
	render() {
		return (
			<Comments>
				{this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
			</Comments>
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