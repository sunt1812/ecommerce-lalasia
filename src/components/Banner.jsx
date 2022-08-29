import React from 'react'
import banner from '../assets/images/product_slide.jpg'
import PropTypes from 'prop-types'

const Banner =({title}) => {
  return (
    <div className="banner">
        <img src={banner} alt="" className="banner__img" />
        <h2 className="banner__title">{title}</h2>
    </div>
  )
}

Banner.propTypes = {
    title:PropTypes.string
}

export default Banner