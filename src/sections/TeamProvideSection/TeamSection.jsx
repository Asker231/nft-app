import React, { useEffect, useState } from 'react'
import style from './team.module.css';
import { CardPropTeam } from './card.prop';
import CardTeams from './Card/CardTeams';


const TeamSection = () => {
    const[teamCard,setTeamCard] = useState([]);

    useEffect(()=>{
       setTeamCard(CardPropTeam)
    },[])
  return (
    <div className={style.team}>
    <div className={style.titleSection}>
        <h1>Our Team</h1>
        <p>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat<br/>
         scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
    </div>
    <div className={style.gridSection}>
         {
            teamCard.map((el,ind)=>{
                return <CardTeams
                image={el.image}
                title={el.title}
                text={el.text}
                />
            })
         }
    </div>
    </div>
  )
}

export default TeamSection