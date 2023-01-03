import React, { useState ,useEffect} from 'react'
import style from './provide.module.css';
import CardTeams from '../TeamSection/Card/CardTeams';
import {provideCard} from './provide.prop.js';

const ProvideSection = () => {

    const[card,setCard] = useState([]);

    useEffect(()=>{
          setCard(provideCard)
    }, [])
    

  return (
    <div className={style.provide}>
        <header>
            <h1>We Provide</h1>
            <p>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat<br/>
             scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
        </header>
         <section className={style.section}>
                  {
                    card.map((el)=>{
                        return <CardTeams bg={"white"} image={el.image} title={el.title} text={el.text}/>
                    })
                  }
         </section>
    </div>
  )
}

export default ProvideSection