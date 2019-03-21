import React from 'react';
import CommentSectionContainer from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';

const Post = props => {
    return (
        <div>
            <PostHeader 
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}  
            />
            <div>
                <img src={props.post.imageUrl} />
            </div>
            <CommentSectionContainer comments={props.post.comments} />
        </div>
    );
};

export default Post;


