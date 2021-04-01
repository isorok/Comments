import React, { useEffect, useState } from 'react'

import Comment from './Comment/Comment';
import Form from './Form/Form';

import style from './Comments.module.scss';

const URL = `${process.env.REACT_APP_BASE_URL}/comments`;

const Comments = () => {
    let [comments, setComments] = useState([]);
   
    useEffect(() => {
        const fetchComments = async (url) => {
            const response = await fetch(url);
            const responseJSON = await response.json();
            setComments(responseJSON);
        };
        fetchComments(URL);
    });
    
    const renderDropdownItem = ({ postId, ...commentProps }) => (
            <Comment key={postId} {...commentProps} />
      );
   
    return (
        <div className={style.container}>
            { comments.map(renderDropdownItem)}
            <Form comments={comments} setComments={setComments} />
        </div>
    )
}

export default Comments
