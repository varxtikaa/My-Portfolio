import React from 'react'
import './Testimonials.css';
import Image1 from '../../assets/vanshika.png'
import Image2 from '../../assets/anya.png'
import Image3 from '../../assets/yuktika.png'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: Image1,
    title: "Vanshika Garg",
    subtitle: "Backend & Blender Enthusiast",
    comment: "Working with them has been an amazing experience, always delivering solid results!"
  },
  {
    id: 2,
    image: Image2,
    title: "Anya Anand",
    subtitle: "Frontend Developer",
    comment: "A great peer to collaborate with, always bringing creative solutions to the table."
  },
  {
    id: 3,
    image: Image3,
    title: "Yuktika Sood",
    subtitle: "Designer & Figma Expert",
    comment: "Their attention to detail and design sense make working together a seamless experience."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials container section" id="testimonials">
      <h2 className="section__title">Peer Reviews</h2>

      <Swiper className="testimonials__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonial__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
