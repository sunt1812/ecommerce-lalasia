import React from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'
import { Link } from 'react-router-dom';
import { ProductCart } from './product';

const Slide = ({ data }) => {

	return (
		<div className="slide__container">
			<Swiper
				spaceBetween={30}
				slidesPerView={2}
				loop={true}
				modules={[Navigation]}
				navigation
				breakpoints={{
					768: {
					width: 768,
					slidesPerView: 3,
					},
					1023: {
					width: 1023,
					slidesPerView: 3,
					},
				}}
				>
					{data.map(item => (
						<SwiperSlide key={item.id}>
							<Link to="/product">
								<ProductCart 
									img={item.img}
									subtitle={item.subtitle}
									title={item.title}
									desc={item.desc}
									price={item.price}
								/>
							</Link>
						</SwiperSlide>

					))}
			</Swiper>
		</div>
	)
}
Slide.prototype = {
    data: PropTypes.array
}
export default Slide