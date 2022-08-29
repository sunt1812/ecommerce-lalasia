import React from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonials = ({ data }) => {

  return (
    <div className="testimonials__container">
            <Swiper
                grabCursor={true}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    768: {
                    width: 768,
                    slidesPerView: 2,
                    },
                    1023: {
                    width: 1023,
                    slidesPerView: 2,
                    },
                }}
                >
                    {data.map(item => (
                        <SwiperSlide key={item.id}>
                            <TestimonialItem {...item}/>
                        </SwiperSlide>

                    ))}
            </Swiper>
        </div>
  )
}

Testimonials.propTypes = {
    data:PropTypes.array
}

const TestimonialItem = ({quote,desc,avatar,name,star,number }) => {

    return (
        <div className="testimonial">
            <img src={quote} alt="" className="testimonial__quote" />
            <p className="testimonial__desc">{desc}</p>
            <div className="testimonial__cta">
                <div className="testimonial__box">
                    <img src={avatar} alt="" className="testimonial__avatar" />
                    <div className="testimonial__name">{name}</div>
                </div>
                <div className="testimonial__body">
                    <img src={star} alt="" className="testimonial__start" />
                    <div className="testimonial__number">{number}</div>
                </div>
            </div>
        </div>
    )
}

TestimonialItem.propTypes = {
    quote:PropTypes.string,
    desc:PropTypes.string,
    avatar:PropTypes.string,
    star:PropTypes.string,
    name:PropTypes.string,
    number:PropTypes.number,
}
export default Testimonials