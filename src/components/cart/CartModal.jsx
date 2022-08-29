import React from "react";

import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useGlobalContext } from "../../context/StateContext";
import Button from "../Button";
import CartItem from "./CartItem";
// import CartItem from "./CartItem";

const CartModal = () => {
	const { setModalCart } = useGlobalContext()
	const { cart,total} = useCartContext()

	const handleToggleCart = () => {
		setModalCart(false)
	}
	return (
		<div className="cart-modal">
			<div className="cart-modal__container">
				<div className="cart-modal__close" onClick={()=> setModalCart(false)}>
					<span >x</span>
				</div>
				<div className="cart-modal__list">
					{cart.length === 0 ? <h2 className="section">Your cart is empty</h2>: (
						cart.map((item) => (
							<CartItem {...item} key={item.id}/>
						))
					)}
				</div>
				<div className="cart-modal__bottom">
					<div className="cart-modal__bottom-subtotal">
						Subtotal :$<span>{total}</span>
					</div>
					<Button className="btn-outside">
						<Link to="/checkout" onClick={()=>handleToggleCart()}>
							Checkout
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CartModal;
