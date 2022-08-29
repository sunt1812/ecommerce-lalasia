import React from 'react'
import outProductData from '../assets/pake-data/outProductData'
import { OutProductBox } from '../components/out-product'
import { SectionHeading, SectionHeadingGrid } from '../components/section'
import callIcon from '../assets/icon/call.svg'
import messages from '../assets/icon/messages.svg'
import award from '../assets/icon/award.svg'
import arrowRight from '../assets/icon/arrow-right.svg'
import teamData from '../assets/pake-data/teamData'
import Cta from '../components/Cta'
const dataContact = [
	{
		icon:callIcon,
		title:"24/7 Supports",
		desc:"24/7 support means a support service that is provided 24 hours a day and 7 days a week. "
	},
	{
		icon:messages,
		title:"Free Consultation",
		desc:"A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible "
	},
	{
		icon:award,
		title:"Overall Guarantee",
		desc:"The comprehensive guarantee is required for import, warehousing, transit, processing and specific use. "
	}
]
const AboutUs = () => {
	return (
		<div className="about-us container">
			<SectionHeading 
				className="video"
				title="About Us"
				desc="We display products based on the latest products we have, if you want to see our old products please enter the name of the item"
			>
				<div className='video__container'>
					<iframe className="video__iframe" src={`https://youtube.com/embed/89rlL3Ik9-I?autoplay=0`} width="100%"></iframe>
				</div>
			</SectionHeading>
			<section className="mission section">
				<div className="mission__left">
					<h5 className="mission__left-subtitle subheading">Our Mission</h5>
					<h2 className="mission__left-title heading">Our team dedicated to help find  smart home product</h2>
					<OutProductBox data={outProductData} />
				</div>
				<div className="mission__right">
					{dataContact.map((item,index) => (
						<div className="mission__item" key={index}>
							<Contact {...item}/>
						</div>
					))}
				</div>
			</section>
			<SectionHeadingGrid
				className="team"
				subtitle="Our Team"
				title="Meet our leading and strong team"
				desc="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
			>  
			<div className="team__content">
				{teamData.map((item,index)=> (
					<div className="team-item" key={index}>
						<img src={item.img} alt="" className="team-item__img" />
						<h4 className="team-item__name">{item.name}</h4>
						<p className="team-item__subtitle">{item.subtitle}</p>
					</div>
				))}
			</div>
			</SectionHeadingGrid>
			<Cta  
				title="Are you interested work with us?" 
				textBtn="Let’s Talk"
				icon={arrowRight}
			/>
		</div>
	)
}

const Contact = ({icon ,title,desc}) => {
	return (
		<div className="contact">
			<div className="contact__left">
				<img src={icon} alt="" className="contact__icon" />
			</div>
			<div className="contact__right">
				<h4 className="contact__title">{title}</h4>
				<p className="contact__desc">{desc}</p>
			</div>
		</div>
	)
}
export default AboutUs