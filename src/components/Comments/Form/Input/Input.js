import React from 'react'

import style from './Input.module.scss'

const Input = ({ title, type }) => {
    return (
            <div className={style.container}>
                <h2 className={style.title}>{title}</h2>
                <input className={style.input} type={type} />
            </div>
    )
}

export default Input
