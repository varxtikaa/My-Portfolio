import React from 'react'
import './Services.css'
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Quizzify",
    link: "https://vardhman0000.github.io/Quizzify/",
    description:
      "A quiz application developed using HTML, CSS, and JavaScript that allows users to take quizzes, track scores, and see correct answers after completion.",
  },
  {
    id: 2,
    image: Image2,
    title: "Navira - Academic Planner & Tutor Platform",
    link: "https://my-portfolio-iota-two-96.vercel.app/#about",
    description:
      "Managed the development of an academic planner and tutor platform, overseeing both student and tutor functionalities, including course management, schedules, and progress tracking.",
  },
  //{
  //   id: 3,
  //   image: Image3,
  //   title: "TaskMaster",
  //   link: "",
  //   description:
  //     "A task management application built with React and Node.js that helps users organize tasks, set deadlines, and track progress with a user-friendly interface and real-time updates.",
  // },
];



const Services = () => {
  return (
    <section className="services container section" id='projects'>
      <h2 className="section__title">Projects</h2>

      <div className="services__container grid">
        {data.map(({id, image , title ,link , description }) => {
          return(
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
              <a href={link} className="btn" target='_blank'>Visit</a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
