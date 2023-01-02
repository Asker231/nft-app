    import React from 'react'
    import style from './first.module.css';
    import Header from './Header/Header';
    import firstImage from './Background shape.png';
    import secondImage from './nevidno.png';
    import nextimage from './nevidno2.png';
    import lastimage from './podkova.png';
    import Button from './button/Button';


    const FirstSection = () => {
    return (
        <div className={style.firstSection}>
        <Header/>
        <section >

            <div className={style.leftSide}>
           
            <img id={style.last} src={lastimage} alt="first"/>
            <img id={style.next} src={secondImage} alt="first"/>
            </div>
        
            <div className={style.middleSide}>
            <h1>Create & sell<br/> your NFTs today</h1> 
            <p>Velit, odio bibendum eu, viverra sit laoreet posuere. Ut scelerisque posuere massa amet. Ornare <br/>
            lacinia vitae at vestibulum morbi. Volutpat libero curabitur feugiat risus dui pulvinar. Elementum.</p>
            <Button v={10} h={20} id={style.btn} fs={20} title="Let's sell"/>
            </div>
        

            <div className={style.rightSide}>
                <img id={style.second} src={nextimage} alt="first"/>
                <img id={style.first} src={firstImage} alt="first"/>
               
            </div>
        </section>
        </div>
    )
    }

    export default FirstSection