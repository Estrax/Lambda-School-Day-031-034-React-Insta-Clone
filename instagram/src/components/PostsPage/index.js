import React from 'react';
import PostContainer from '../PostContainer';

const PostsPage = (props) => {
    return (
        <div>
            <PostContainer posts={props.posts} likePost={props.likePost} addNewComment={props.addNewComment} />
        </div>
    );
}

export default PostsPage;
