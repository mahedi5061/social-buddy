import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {id}=useParams();
    const [post,setPost]=useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
    return (
        <div>
            <h2>This is Post detail:{id}</h2>
            <h3>Title: {post.title}</h3>
            <h4>Description: {post.body}</h4>
        </div>
    );
};

export default Details;