import React from 'react';
import CommentSectionContainer from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';


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
            <CommentSectionContainer comments={props.post.comments} postId={props.post.imageUrl}/>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};


export default Post;


