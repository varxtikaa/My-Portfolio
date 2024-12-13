import React from 'react'
import './Home.css'
import Me from '../../assets/—Pngtree—work from home with girl_5392465.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';


const Home = () => {
  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={Me} alt="profile picture" className="home__img moving-image" />
        <h1 className="home__name">Vartika Yadav</h1>
        <span className="home__education">I'm a Full Stack Developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me!</a>
        
        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home
