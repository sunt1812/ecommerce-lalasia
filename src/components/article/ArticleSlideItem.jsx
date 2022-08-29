import React from 'react'
import PropTypes from 'prop-types'

const ArticleSlideItem = ({img,subtitle,title,name,date,avatar}) => {
	return (
		<div className="article-slide__item">
			<img src={img} alt="" className="article-slide__item-img" />
			<div className="article-slide__item-content">
				<p className="article-slide__item-subtitle">{subtitle}</p>
				<h2 className="article-slide__item-title">{title}</h2>
				<div className="article-slide__item-box">
					<div className="article-slide__item-body">
						<img src={avatar} alt="" className="article-slide__item-avatar" />
						<h6 className="article-slide__item-name">{name}</h6>
					</div>
					<span className="article-slide__item-date">{date}</span>
				</div>
			</div>
		</div>
	)
}
ArticleSlideItem.propsTypes = {
	img:PropTypes.string,
	subtitle:PropTypes.string,
	title:PropTypes.string,
	name:PropTypes.string,
	date:PropTypes.string,
	avatar:PropTypes.string,
}

export default ArticleSlideItem