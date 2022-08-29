import React from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import PostItem from './PostItem';
import PostSlide from './PostSlide';

const Posts = ({ postItemData , postSlideData }) => {
  return (
    <section className="posts section">
        <div className="posts__container container">
            <div className="posts__left">
                <h5 className="posts__left-subtitle subheading">Articles</h5>
                <h2 className="posts__left-title heading">The best furniture comes from Lalasia</h2>
                <p className="posts__left-desc">Pellentesque etiam blandit in tincidunt at donec.</p>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    modules={[Navigation]}
                    navigation
                    >
                        {postSlideData.map(item => (
                            <SwiperSlide key={item.id}>
                                <PostSlide
                                    img={item.img}
                                    {...item}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <div className="posts__right">
                {postItemData.slice(0,3).map(item => (
                    <PostItem 
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

Posts.propTypes = {
    postItemData:PropTypes.array,
    postSlideData:PropTypes.array
}

export default Posts