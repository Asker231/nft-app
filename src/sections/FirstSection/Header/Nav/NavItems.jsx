import React from 'react'
import style from './nav.module.css';

const NavItems = ({itemFirst,itemSeconde,itemNext,opton}) => {
  return (
    <div className={style.nav}>
         <a href='#'>{itemFirst}</a>
         <a href='#'>{itemSeconde}</a>
         <a href='#'>{itemNext}</a>
    </div>
  )
}

export default NavItems