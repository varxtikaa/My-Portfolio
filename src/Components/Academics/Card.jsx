import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline__item">
        <i className="icon-graduation"></i>
        <span className="timeline__date">{props.year}</span>
        <h3 className="timeline__title">{props.title}</h3>
        <h4 className="timeline__place">{props.placeOfStudy}</h4>
        <p className="timeline__text">{props.desc}</p>
        <span className='timeline__score'>{props.score}</span>
    </div>
  )
}

export default Card
