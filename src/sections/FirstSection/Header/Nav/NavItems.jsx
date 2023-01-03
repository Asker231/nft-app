import React from 'react'
import style from './nav.module.css';
import { Link } from 'react-router-dom';

const NavItems = ({itemFirst,itemSeconde,itemNext,opton}) => {
  return (
    <div className={style.nav}>
         <Link to="#">{itemFirst}</Link>
         <Link to='#'>{itemSeconde}</Link>
         <Link to='#'>{itemNext}</Link>
    </div>
  )
}

export default NavItems