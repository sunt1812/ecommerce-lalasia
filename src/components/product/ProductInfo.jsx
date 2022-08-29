import React, {  useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import { useCartContext } from '../../context/CartContext'
import { useGlobalContext } from '../../context/StateContext'
import { useNavigate } from 'react-router-dom'

const ProductInfo = props => {
    const {img , title ,desc ,price ,paragraph,colors,id,amount} = props.product

    const [readMore, setReadMore] = useState(false);
    const [color, setColor] = useState(undefined);
    const { addToCart}= useCartContext()
    const { setModalCart }= useGlobalContext()
    const navigate = useNavigate()
    
    const check = () => {
        if(color === undefined) {
            alert('Vui lòng chọn màu sắc!')
            return false
        }
        return true
    }
    const handleAddToCart = () => {
        if(check()) {
            const newItem = {
                id,
                img,
                title,
                price,
                amount,
                colors:color
            }
            addToCart(newItem)
            setModalCart(true)
        }
    }

    const handleGoToCart = () => {
        if(check()) {
            const newItem = {
                id,
                img,
                title,
                price,
                amount,
                colors:color
            }
            addToCart(newItem)
            navigate(`/cart`)
        }
    }
  return (
    <div className="product-detail__info grid">
        <div className="product-detail__images">
            <img src={img} alt="erorr images" className="product-detail__img"  />
        </div>
        <div className="product-detail__content">
            <h3 className="product-detail__content-title">{title}</h3>
            <p className="product-detail__content-subtitle">{desc}</p>
            <div className="product-detail__content-colors">
                <h6 className="product-detail__content-name">Clors</h6>
                {colors.map((item,index) => (
                    <div key={index} className={`product-detail__content-color ${color === item ? 'active' : ''} bg-${item}`} onClick={() =>setColor(item)}></div>
                ))}
            </div>
            <p className="product-detail__content-desc">
                    {readMore ? paragraph : `${paragraph.substring(0, 150)}...`}
                    <span className="product-detail__content-show" onClick={() => setReadMore(!readMore)}>
                        {readMore ? ' show less' : 'read more'}
                    </span>
            </p>
            <h4 className="product-detail__content-price">$<span>{price}</span> </h4>
            <Button className="btn-outside btn-block" onClick={handleGoToCart}>Buy Now</Button>
            <Button className="btn-primary btn-block" onClick={handleAddToCart}>Add to Chart</Button>
        </div>
    </div>
  )
}

ProductInfo.propTypes = {
    product:PropTypes.object,
    img : PropTypes.string,
    paragraph : PropTypes.string,
    title : PropTypes.string,
    desc : PropTypes.string,
    price : PropTypes.number,
    colors:PropTypes.array
}

export default ProductInfo