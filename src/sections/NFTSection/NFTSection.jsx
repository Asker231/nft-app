import React, { useEffect, useState } from 'react'
import style from './nftsection.module.css';
import { cardInfo } from './card.prop';
import Card from './Card/Card';
import { Link } from 'react-router-dom';

const NFTSection = () => {
    const[cardinfo,setCardInfo] = useState([])
    useEffect(()=>{
     setCardInfo(cardInfo)
    },[])
  return (
    <div className={style.wrap}>
        <div className={style.title}>
               <h1>Hottest Collections</h1>
               <p>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi<br/>
                rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
        </div>
        <div className={style.cards}>
              {
                cardinfo.map((el,ind)=>{
                    return<Link to="#"> <Card 
                    key={ind}
                    cardImage={el.image}
                    title={el.title}
                    text={el.description}
                     /></Link>
                })
              }
        </div>
    </div>
  )
}

export default NFTSection