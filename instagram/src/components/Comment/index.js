import React from 'react';
import PropTypes from 'prop-types';
// import './index.css';
import styled from 'styled-components';

const CommentDiv = styled.div`
	display: block;
`;

const CommentP = styled.p`
	display: inline-block;
`;

const Username = styled.span`
	font-weight: 700;
`;

const Content = styled.span`
	margin-left: .5rem;
	word-wrap: wrap;
`;

const DeleteComment = styled.button`
	border-radius: 50%;
	background: none;
	float: right;
	width: 28px;
	height: 28px;
`;

const Comment = (props) => {
	const deleteBtn = localStorage.getItem('username')===props.comment.username ? <DeleteComment onClick={(e) => props.deleteComment(e, props.postID, props.commentID)}>X</DeleteComment> : "";
	return (
		<CommentDiv>
			<CommentP>
				<Username>
					{props.comment.username}
				</Username>
				<Content>
					{props.comment.text}
				</Content>
			</CommentP>
			{deleteBtn}
		</CommentDiv>
	);
}

Comment.propTypes = {
	comment: PropTypes.shape({
		username: PropTypes.string,
		text: PropTypes.string
	})
}

export default Comment;