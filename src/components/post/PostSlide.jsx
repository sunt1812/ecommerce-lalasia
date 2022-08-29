import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PostSlide = ({img , subtitle , title , desc }) => {
    return (
        <div className="posts__slide">
            <img src={img} alt="" className="posts__slide-img" />
            <div className="posts__slide-content">
                <h6 className="posts__slide-subtitle">{subtitle}</h6>
                <h4 className="posts__slide-title">{title}</h4>
                <p className="posts__slide-desc">{desc}</p>
                <Link to="/" className="posts__slide-btn">Read Mode</Link>
            </div>
        </div>
    )
}
PostSlide.propTypes = {
    img:PropTypes.string,
    subtitle:PropTypes.string,
    title:PropTypes.string,
    desc:PropTypes.string,
}

export default PostSlide