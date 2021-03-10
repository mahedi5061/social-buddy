import React from 'react';
import { useHistory } from 'react-router';
import './Post.css';

const Post = (props) => {
    const { id, title } = props.post;
    const history = useHistory();
    const showDetail = (postId) => {
        const url = `/post/${postId}`;
        history.push(url);
    }
    return (
        <div className="post-container">
            <h4>id: {id}</h4>
            <p>title: {title}</p>
            <button onClick={() => showDetail(id)}>Show Details</button>
        </div>
    );
};

export default Post;