import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

const Post = (props) => {
	const timestamp = moment(props.post.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow();

	return (
		<div className="post">
			<div className="post-top">
				<img src={props.post.thumbnailUrl} alt="thumbnail" />
				<p>{props.post.username}</p>
			</div>
			<div className="post-mid">
				<img src={props.post.imageUrl} alt='post' />
			</div>
			<div className="post-bottom">
				<FontAwesomeIcon icon={faHeart} className="icon" />
				<FontAwesomeIcon icon={faComment} className="icon" />
        		<p className='likes'>{props.post.likes} likes</p>
			</div>
            <CommentSection comments={props.post.comments} />

			<div className="time">
				<p>{timestamp.toUpperCase()}</p>
			</div>

			<div className="new-comment">
				<input
					placeholder="Add a comment..."
					name="newComment"
				/>
			</div>
		</div>
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