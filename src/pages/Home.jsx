import React from 'react'
import benefistCradData from '../assets/pake-data/benefistCard'
import { postItemData, postSlideData } from '../assets/pake-data/posts'
import productData from '../assets/pake-data/product'
import testimonialData from '../assets/pake-data/testimonials'
import Benefits from '../components/Benefits'
import Cta from '../components/Cta'
import Hero from '../components/Hero'
import { OutProduct } from '../components/out-product'
import Posts from '../components/post/Posts'
import { SectionHeading, SectionHeadingGrid } from '../components/section'
import Slide from '../components/Slide'
import Testimonials from '../components/Testimonials'
import arrowRight from '../assets/icon/arrow-right.svg'


const Home = () => {
  	return (
		  <>
			{/* =========start section hero ========== */}
			<Hero />
			{/* =========end section hero ========== */}

			{/* =========start section Benefits ========== */}
			<SectionHeadingGrid
				className="benefits container"
				subtitle="benefits"
				title="Benefits when using our services"
				desc="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
			>  
				<Benefits data={benefistCradData}/>
			</SectionHeadingGrid>
			{/* =========end section Benefits ========== */}

			{/* =========start section Slide ========== */}
			<SectionHeading 
				className="slide"
				subtitle="Product"
				title="Our popular product"
				desc="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
			>
				<Slide data={productData}/>
			</SectionHeading>
			{/* =========end section Slide ========== */}

			{/* =========start section OutProduct ========== */}
			<OutProduct />
			{/* ========= end section OutProduct ========== */}

			{/* =========start section Testimonials ========== */}
			<SectionHeading 
				className="testimonials"
				subtitle="Testimonials"
				title="Our popular product"
				desc="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
			>
				<Testimonials data={testimonialData} />
			</SectionHeading>
			{/* =========end section Testimonials ========== */}

			{/* =========start section Posts ========== */}
			<Posts postItemData={postItemData} postSlideData={postSlideData}/>
			{/* =========start section Posts ========== */}

			{/* =========start section Cta ========== */}
			<Cta  title="Join with me to get special discount" className="container" textBtn="Read More" icon={arrowRight}/>
			{/* =========end section Cta ========== */}

		</>
  	)
}

export default Home