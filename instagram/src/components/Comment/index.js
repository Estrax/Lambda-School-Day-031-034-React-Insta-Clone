import React from 'react';
import PropTypes from 'prop-types';
// import './index.css';
import styled from 'styled-components';

const Username = styled.span`
	font-weight: 700;
`;

const Content = styled.span`
	margin-left: .5rem;
	word-wrap: wrap;
`;

const Comment = (props) => {
	return (
		<div className="comment">
			<p>
				<Username>
					{props.comment.username}
				</Username>
				<Content>
					{props.comment.text}
				</Content>
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