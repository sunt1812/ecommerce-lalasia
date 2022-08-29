import React, { useState } from 'react'
import { Swiper ,SwiperSlide } from 'swiper/react'
import { Navigation ,Pagination } from 'swiper'
import { SectionHeading } from '../components/section'
import filter from '../assets/icon/sort.svg'
import arrowRight from '../assets/icon/arrow-right.svg'
import Cta from '../components/Cta'
import articleSlideData from '../assets/pake-data/articleSlideData'
import ArticleSlideItem from '../components/article/ArticleSlideItem'
import { postItemData } from '../assets/pake-data/posts'
import PostItem from '../components/post/PostItem'
import Button from '../components/Button'

const allCategorys = ["All",...new Set(postItemData.map(item => item.category))]
const Article = () => {
	const [itemTabs,setItemTabs] = useState(postItemData)
	const [categories] = useState(allCategorys);
	const [activeTabs,setActiveTabs] = useState(0);
	const [limit,setLimit] = useState(5);

	const handleOnclickTabs = (category,index) => {
		setActiveTabs(index)
		if(category === "All") {
			setItemTabs(postItemData)
			return;
		}
		const newItem = postItemData.filter(item => item.category === category)
		setItemTabs(newItem)
	}
	const handleItemLoader = () => {
		setLimit(prev => {
			return prev + 2
		})
	}
	return (
		<div className="article container">
			<SectionHeading 
				className="article-slide"
				title="article"
				desc="We display products based on the latest products we have, if you want to see our old products please enter the name of the item"
				>
				<Swiper
					slidesPerView={1}
					grabCursor={true}
					loop={true}
					modules={[Navigation,Pagination]}
					navigation
					pagination={{ clickable: true }}
					>
						{articleSlideData.map((item,index) => (
							<SwiperSlide key={index}>
								<ArticleSlideItem {...item} />
							</SwiperSlide>
						))}
				</Swiper>
			</SectionHeading>
			<SectionHeading
				className="article-dally"
				subtitle="Daily News"
				title="Today top headlines"
			>
				<div className="article-dally__content">
					{postItemData.slice(0,2).map(item => (
						<PostItem 
							key={item.id}
							{...item}
							className="article-dally__content-item"
						/>
					))}
				</div>
			</SectionHeading>
			<SectionHeading
				className="article-trending"
				subtitle="Trending Topics"
				title="Popular last week"
			>
				<div className="article-trending__tabs">
					<div className="article-trending__tabs-btns">
						{categories.map((item,index) => (
							<button className={`article-trending__tabs-btn ${activeTabs === index? "active" :""}`} key={index} onClick={()=> handleOnclickTabs(item,index)}>{item}</button>
						))}
					</div>
					<div className="article-trending__tabs-filter">
						<img src={filter} alt="" className="article-trending__tabs-icon" />
						<h5 className="article-trending__tabs-text">Filter</h5>
					</div>
				</div>
				<div className="article-trending__content">
					{itemTabs.slice(0,limit).map(item => (
						<PostItem 
							key={item.id}
							{...item}
							className="article-trending__content-item"
						/>
					))}
					<div className="article-trending__content-btn">
						<Button className="btn-outside" onClick={handleItemLoader}>Loader</Button>
					</div>
				</div>
			</SectionHeading>
			<Cta  
				title="Subscribe our newsletter" 
				textBtn="Let’s Talk"
				icon={arrowRight}
			/>
		</div>
	)
}

export default Article