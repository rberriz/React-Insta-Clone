import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

    componentDidMount(){
        const id = this.props.postId;
        if (localStorage.getItem(id)) {
            alert('Sucess!');
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.postId))
            });
        } else {
            this.setComments();
        }
    }

    componentWillUnmount() {
        this.setComments();
    }

    setComments = () => {
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        );
    };

    commentHandler = e => {
        this.setState({ comment: e.target.value })
    };

    handleCommentSubmit = e => {
        e.preventDefault();
        const newComment = {username: 'rberriz', text: this.state.comment};
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: '' });
        setTimeout(() => {
            this.setComments();
        }, 1000);
    };

    render() {
        return (
            <div>
                {this.state.comments.map((k, c) => <Comment key={k} comment={c} />)}
                <CommentInput comment={this.state.comment} submitContent={this.state.handleCommentSubmit} changeComment={this.state.commentHandler} />
            </div>
        );
    }
}

CommentSectionContainer.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })
    )
};



 export default CommentSectionContainer;
 