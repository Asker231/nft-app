import React from 'react'
import style from './cardstyle.module.css';

const Card = ({cardImage,title,text}) => {
  return (
    <div className={style.card}>
        <img src={cardImage} alt="image"/>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Card