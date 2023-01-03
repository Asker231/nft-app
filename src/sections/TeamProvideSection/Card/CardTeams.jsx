import React from 'react'
import style from './cardTeam.module.css';

const CardTeams = ({image,title,text}) => {
  return (
    <div className={style.card}>
        <img src={image} alt="image"/>
        <h2>{title}</h2>
        <span>{text}</span>
    </div>
  )
}

export default CardTeams