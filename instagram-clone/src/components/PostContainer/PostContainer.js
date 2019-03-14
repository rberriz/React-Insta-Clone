import React from 'react';
import CommentSection from './CommentSection/commentSection';



function PostContainer(props) {
    return (
        <>
            {props.posts.map(x => (
                <imageUrl={x.imageUrl} 
            ))}
        </>
    )
}

export default PostContainer;