import React from 'react'
import './Pricing.css';
import Image1 from '../../assets/stratMgmt.png';
import Image2 from '../../assets/productDesign.png';
import Image3 from '../../assets/startLeadership.png';

const Pricing = () => {
  return (
    <section className="certification container section" id='certificates'>
      <h2 className="section__title">Certifications</h2>

      <div className="certificate__container grid">
        <div className="certificate__item">
          <img src={Image1} alt="" className="certificate__img" />
          <h3 className="certificate__plan">Strategising: Management
            for Global Competitive
            Advantage</h3>
          <p className="certificate__title">September 2023</p>
          <p className="certificate__support">This specialization sharpened my skills in strategy, supply chains, innovation, and CSR to drive business growth.</p>
          <a href="../../../public/Strat1Coursera.pdf" target='_blank' className="btn">View Certificate</a>
        </div>


        <div className="certificate__item best">
          <img src={Image2} alt="" className="certificate__img" />
          <h3 className="certificate__plan">Product Ideation, Design,
            and Management</h3>
          <p className="certificate__title">October 2023</p>
          <p className="certificate__support">I’ve honed skills in product ideation, customer insight, value propositions, team leadership, and financial strategies for successful product delivery.
          </p>
          <a href="../../../public/productCoursera.pdf" target='_blank' className="btn">View Certificate</a>
        </div>


        <div className="certificate__item">
          <img src={Image3} alt="" className="certificate__img" />
          <h3 className="certificate__plan">Strategic Leadership:
            Impact, Change, and
            Decision-Making</h3>
          <p className="certificate__title">January 2024</p>
          <p className="certificate__support">Sharpened leadership skills in decision-making, talent management, and confident leadership to drive a positive impact.</p>
          <a href="../../../public/Strat2Coursera.pdf" target='_blank' className="btn">View Certificate</a>
        </div>
      </div>
    </section>
  )
}

export default Pricing
