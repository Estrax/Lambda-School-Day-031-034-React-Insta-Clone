import React from 'react';
import PostContainer from '../PostContainer';

const PostsPage = (props) => {
    return (
        <div>
            <PostContainer posts={props.posts} likePost={props.likePost} addNewComment={props.addNewComment} deleteComment={props.deleteComment} />
        </div>
    );
}

export default PostsPage;
