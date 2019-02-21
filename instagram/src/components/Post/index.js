import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

import styled from 'styled-components';
import { Username } from '../../styles/reusables/username';

const PostDiv = styled.div`
	border: 2px solid lightgrey;
	margin: 1rem auto 3rem;
	height: auto;
	width: 50%;
	color: black;
`;

const PostTop = styled.div`
	display: table;
	margin: 1rem 0;
`;

const PostTopImg = styled.img`
	margin: 0 1rem 0 2rem;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	vertical-align: middle;
	display: inline-block;
`;

const PostMid = styled.div`

`;

const PostMidImg = styled.img`
	width: 100%;
`;

const PostBottom = styled.div`
	padding-top: 1rem;
	margin: 0 1rem;
`;

const PostBottomP = styled.p`
	font-weight: 500;
`;

const Time = styled.div`
	font-size: .8rem;
	color: grey;
	margin-left: 1rem;
`;

const TimeP = styled.p`

`;

const NewComment = styled.form`
	width: 100%;
`;

const NewCommentInput = styled.input`
	width: 100%;
	height: 3rem;
	border: 1px solid lightgray;
	padding-left: 1rem;
`;

const Icon = styled(FontAwesomeIcon)`
	margin: 0 .5rem;
	font-size: 1.5rem;

	&:first-child(){
		margin-left: 0;
	}
`;

const Post = (props) => {
	const timestamp = moment(props.post.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow();
	const [liked, setLiked] = useState(false);
	return (
		<PostDiv>
			<PostTop>
				<PostTopImg src={props.post.thumbnailUrl} alt="thumbnail" />
				<Username top>{props.post.username}</Username>
			</PostTop>
			<PostMid>
				<PostMidImg src={props.post.imageUrl} alt='post' />
			</PostMid>
			<PostBottom>
				<Icon icon={faHeart}
					onClick={(e) => {
						if(!liked){
							setLiked(true);
							props.likePost(e, props.post.timestamp);
						}
					}
				} />
				<Icon icon={faComment} />
				<PostBottomP>{props.post.likes} likes</PostBottomP>
			</PostBottom>
			<CommentSection comments={props.post.comments} deleteComment={props.deleteComment} postID={props.post.timestamp} />

			<Time>
				<TimeP>{timestamp.toUpperCase()}</TimeP>
			</Time>

			<NewComment onSubmit={(e) => props.addNewComment(e, props.post.timestamp)}>
				<NewCommentInput
					placeholder="Add a comment..."
					name="newComment"
				/>
			</NewComment>
		</PostDiv>
	);
}

Post.propTypes = {
	post: PropTypes.shape({
		username: PropTypes.string,
		imageUrl: PropTypes.string,
		likes: PropTypes.number,
		timestamp: PropTypes.string
	})
}

export default Post;