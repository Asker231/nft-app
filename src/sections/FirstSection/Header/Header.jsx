import React, { useState } from 'react'
import style from './header.module.css';
import { leftnavItems } from './Nav/nav.props';
import { rightanvItems } from './Nav/nav.props';
import NavItems from './Nav/NavItems';
import logo from '../Header/Logo.svg';
import burger  from './24px.svg';
import iconArrow from './Icon - R.svg';




const Header = () => {
  const[isTrue,setIstrue] = useState(false)
  return (
    <header className={style.header}>
         <NavItems
         itemFirst={leftnavItems[0]}
         itemSeconde={leftnavItems[1]}
         itemNext={leftnavItems[2]}
         />
        {isTrue==false?<img
         onClick={()=>setIstrue(!isTrue)}
          className={style.burger}
          src={burger} 
          alt="tab" />:null}

          <div style={{opacity:isTrue?"1":"0",top:isTrue?"10px" : "720px", }} className={style.menu}>
            <header><span onClick={()=>setIstrue(!isTrue)}>&times;</span></header>
          </div>

          
          <img  src={logo} alt="logo" />

          <NavItems
         itemFirst={rightanvItems[0]}
         itemSeconde={rightanvItems[1]}
         itemNext={rightanvItems[2]}
         />

    </header>
  )
}

export default Header