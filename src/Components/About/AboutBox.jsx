import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className=" about__icon icon-fire"></i>

            <div>
                <h3 className='about__title'>200+</h3>
                <span className="about__subtitle">Leetcode questions solved</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-graph"></i>

            <div>
                <h3 className='about__title'>50+ Hours</h3>
                <span className="about__subtitle">Practice on Coding Platforms</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-screen-desktop"></i>

            <div>
                <h3 className='about__title'>40+ Hours</h3>
                <span className="about__subtitle">Completed on web development and programming courses</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-screen-desktop"></i>

            <div>
                <h3 className='about__title'>3+ languages</h3>
                <span className="about__subtitle">learned, on a journey to perfect them.</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox
