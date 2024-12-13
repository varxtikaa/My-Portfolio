import React from 'react'
import './Resume.css'
import Card from './Card'

const academicData = [
  {
    id: 1,
    year: "2022 - present",
    title: "B.E. in Computer Science Engineering",
    placeOfStudy: "Chitkara University, Patiala",
    desc: "Currently pursuing B.E. in Computer Science Engineering as a 3rd-year student.",
    score: "9.4 CGPA"
  },
  {
    id: 2,
    year: "2022",
    title: "12th Grade",
    placeOfStudy: "Dr. V. S. E. C. Panki, Kanpur",
    desc: "Graduated in 2022 with a focus on Science stream.",
    score: "88.2%"
  },
];



const Resume = () => {
  return (
    <section className="resume container section" id="academics">
      <h2 className="section__title">Academics</h2>

      <div className="resume__container grid">
        
          {academicData.map((val , id) => {
            return <div className="timeline grid">
              <Card key = {id} year = {val.year} title = {val.title} desc = {val.desc} score = {val.score} placeOfStudy = {val.placeOfStudy}/>
              </div>
          })}
        
      </div>
    </section>
  )
}

export default Resume
