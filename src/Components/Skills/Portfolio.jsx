import React, { useState } from 'react'
import './Portfolio.css'
import skillsArray from './SkillList';

const Portfolio = () => {
  const [items , setItems] = useState(skillsArray.filter((curr) => {
    return curr.category === "Core Technologies";
  }));
  const filterItem = (categoryItem) => {
    const updatedItems = skillsArray.filter((curr) => {
      return curr.category === categoryItem;
    })

    setItems(updatedItems);
  }
  return (
    <section className="portfolio container section" id='skills'>
      <h2 className="section__title">Skills</h2>

      <div className="skills__filters">
        <span className="skill__item" onClick={() => filterItem("Core Technologies")}>Core Technologies</span>
        <span className="skill__item" onClick={() => filterItem("Development Tools")}>Development Tools</span>
        <span className="skill__item" onClick={() => filterItem("Soft Skills")}>Soft Skills</span>
      </div>

      <div className="skills__container grid">
          {items.map((ele) => {
            const{id , image , title, category , proficiency} = ele;
            return (
              <div className="skill__card" key = {id}>
                <div className="skill__thumbnail">
                  <img src={image} alt="" className="skill__img" />
                  <div className="skill__mask"></div>
                </div>

                {/* <span className="skill__category">{category}</span> */}
                <h3 className="skill__title">{title}</h3>
                <h2 className="skill__level">{proficiency}</h2>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default Portfolio
