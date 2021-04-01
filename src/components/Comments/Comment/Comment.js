import React from 'react';

import style from './Comment.module.scss';

const Comment = ( { postId,
    commentId, 
    userId,
    text,
    eMail,
    time }) => {
                                                                                                                                                                     console.log(postId, commentId, userId, text, eMail, time);
    return (                                        
        <div className={style.container}>
            <img className={style.avatarImg} src="../../../assets/avatar.jpeg" alt="avatar" ></img>
            <div className={style.wrapper}>
                <h2 className={style.name}>Nick Name</h2>
                <h5 className={style.date}>01.04.2021 at 14:00</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet purus at metus feugiat, ac semper metus mollis. Etiam dapibus massa eu augue mattis faucibus. Sed ultrices quis felis ut commodo. Ut non tortor nisl. Ut bibendum convallis odio ac ultrices. Quisque eleifend urna at nisi pharetra accumsan.</p>
            </div>
        </div>
    )
}

export default Comment;