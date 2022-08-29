import React, { memo } from 'react'
import PropTypes from 'prop-types'

const ProductCart = ({ img ,subtitle, title , desc , price}) => {
  return (
    <div className="product-cart">
        <div className="product-cart__zoom">
          <img src={img} alt="" className="product-cart__img" />
        </div>
        <h5 className="product-cart__subtitle">{subtitle}</h5>
        <h4 className="product-cart__title">{title}</h4>
        <p className="product-cart__desc">{desc}</p>
        <span className="product-cart__price">${price}</span>
    </div>
  )
}

ProductCart.propTypes = {
  img : PropTypes.string,
  subtitle : PropTypes.string,
  title : PropTypes.string,
  desc : PropTypes.string,
  price : PropTypes.number
}

export default memo(ProductCart)