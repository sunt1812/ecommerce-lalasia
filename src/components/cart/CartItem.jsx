import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";

const CartItem = ({title,amount,price,img ,id}) => {
	const { removeCart , increaseCart , decreaseCart } = useCartContext()
	const [totalItem, setTotalItem] = useState()
	useEffect(()=>{
		const totalItem = amount * price
		setTotalItem(totalItem.toFixed(2))
	},[amount,price])
	return (
		<div className="cart-modal__item">
			<img src={img} alt="" className="cart-modal__item-img"/>
			<div className="cart-modal__item-info">
				<div className="cart-modal__item-modal">
					<h3 className="cart-modal__item-title">{title}</h3>
					<div className="cart-modal__item-price">{amount}<span>${totalItem}</span></div>
					<div className="cart-modal__item-btn">
						<span className="cart-modal__item-decrease" onClick={()=>decreaseCart(id)}>-</span>
						<span className="cart-modal__item-quantity">{amount}</span>
						<span className="cart-modal__item-increase"  onClick={()=>increaseCart(id)}>+</span>
					</div>
				</div>
				<span className="cart-modal__item-delete" onClick={()=>removeCart(id)}>x</span>
			</div>
		</div>
	);
};
CartItem.propTypes = {
    id: PropTypes.number,
    amount:PropTypes.number,
	price:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
}
export default CartItem;
