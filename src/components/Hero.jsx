import React from 'react'
import homeImg from '../assets/images/home.jpg'
import imgBgLeft from '../assets/images/Sketch-arrow-down-5.png'
import imgBgRight from '../assets/images/Sketch.png'
import Search from './Search'

const Hero = () => {
	return (
		<section className="hero section">
			<div className="hero__container container">
				<div className="hero__info">
					<img src={imgBgLeft} alt="" className="hero__info-bg1" />
					<img src={imgBgRight} alt="" className="hero__info-bg2" />
					<h1 className="hero__info-title">Discover Furniture With <br /> High Quality Wood</h1>
					<p className="hero__info-desc">Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.</p>
					<Search />
				</div>
				<div className="hero__image">
					<img src={homeImg} alt="hero-img"className="hero__img"/>
				</div>
			</div>
		</section>
	)
}

export default Hero