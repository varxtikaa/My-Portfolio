import React from 'react'
import './About.css'
// import AboutPic from '../../assets/avatar-1.svg';
import AboutPic from '../../assets/newLogo.png';
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">
        About Me
      </h2>

      <div className="about__container grid"> 
        <img src={AboutPic} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hey, I'm Vartika Yadav, a soon-to-be Computer Science Engineer. I'm passionate about full-stack development and enjoy blending creativity with code. I'm also into art and calligraphy, which adds a unique touch to my projects!
            </p>
            <a href="../../public/Resume.pdf" download = "Resume.pdf" className="btn">Download Resume</a>
          </div>

          <div className="about__skills grid">

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number ">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Data Structures & Algorithm</h3>
                <span className="skills__number">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage DSA"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Database Managment System</h3>
                <span className="skills__number ">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage DBMS"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Art & Design</h3>
                <span className="skills__number ">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage art"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About
