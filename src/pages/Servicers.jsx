import React, { useEffect } from 'react'
import serviceImage from '../assets/images/services.jpg'
import portofolioData from '../assets/pake-data/portofolioData'
import serviceItemData from '../assets/pake-data/servicesData'
import arrowRight from '../assets/icon/arrow-right.svg'
import Cta from '../components/Cta'
import { SectionHeading, SectionHeadingGrid } from '../components/section'

const Servicers = () => {
	return (
		<div className="services container">
			{/* =========start section service ========== */}
			<SectionHeading 
				className="service"
				title="Services"
				desc="The product crafted by talented crafter and using high quality material with love inside"
				>
				<img src={serviceImage} alt="error image" className="service__image" />
				<div className="service__content">
					{serviceItemData.map((item,index) => (
						<div className="service__item" key={index}>
							<div className="service__item-number">{item.number}</div>
							<h3 className="service__item-title">{item.title}</h3>
							<p className="service__item-desc">{item.desc}</p>
						</div>
					))}
				</div>
			</SectionHeading>
			{/* =========end section service ========== */}
			{/* =========start section Portofolio ========== */}
			<SectionHeadingGrid
				className="portofolio"
				subtitle="Portofolio"
				title="Amazing project we’ve done before"
				desc="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non."
				textbtn="View Portofolio"
			>  
				<div className="portofolio__content">
					{portofolioData.map((item,index) => (
						<div className={`portofolio__item portofolio__${item.class}`} key={index}>
							<img src={item.img} alt="" className="portofolio__item-image" />
							<div className="portofolio__item-text">
								<h4 className="portofolio__item-title">{item.title}</h4>
								<p className="portofolio__item-desc">{item.desc}</p>
								<span className="portofolio__item-detail">{item.subtitle}</span>
							</div>
						</div>
					))}
				</div>
			</SectionHeadingGrid>
			{/* =========end section Portofolio ========== */}
			{/* =========start section Cta ========== */}
			<Cta  
				title="Are you interested work with us?" 
				textBtn="Let’s Talk"
				icon={arrowRight}
			/>
			{/* =========end section Cta ========== */}
		</div>
	)
}

export default Servicers