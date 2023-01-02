import React from 'react'
import style from './linecontent.module.css';
import one from './01.png';
import two from './02.png';
import tree from './04.png';
import foor from './27.png' ;
import six from './28.png';
import logo from './Logo.png';
const LineContent = () => {
  return (
    <div className={style.line}>
        <a href="#"><img src={one} alt="one" /></a>
        <a href="#"><img src={two} alt="two" /></a>
        <a href="#"><img src={tree} alt="tree" /></a>
        <a href="#"><img src={foor} alt="for" /></a>
        <a href="#"><img src={six} alt="five" /></a>
        <a href="#"><img src={logo} alt="six" /></a>

    </div>
  )
}

export default LineContent