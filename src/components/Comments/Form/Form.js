import React from 'react';

import Input from './Input/Input';

import style from './Form.module.scss';

const Form = ({ setComments, comments }) => {

    // const postComment = async () => {
    //     const response = await fetch (URL,{
    //         method: "POST",
    //         headers: {
    //             'content type': 'aplication/json'
    //         },
    //         body: JSON.stringify()
    //     });
    //     const responseJSON = await response.json();

    //     return responseJSON
    // }

    const fake = () => {
        const fakeComment = [ {}, {}, {}, {}]
        comments.push({ text: "some comment" })
        setComments(fakeComment);
    }

    return (
        <form className={style.form} onSubmit={fake}>
            <h2 className={style.title}>Add a comment</h2>
            <textarea className={style.comment}></textarea>
            <div className={style.wrapper}>
                <Input title="User Name" type="name"/>
                <Input title="Email" type="email"/>
            </div>
            <input className={style.button} type="submit" value="Add Comment" />
        </form>
    )
}

export default Form
