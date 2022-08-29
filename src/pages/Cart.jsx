import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from '../components/Button'
import { useCartContext } from "../context/CartContext";
const Cart = () => {
	const { cart,removeCart , increaseCart , decreaseCart ,total} = useCartContext()

	useEffect(() => {
		window.scrollTo(0,0)
	},[])

	return (
		cart.length === 0 ? 
		<h2 className="cart section container">Your cart is empty</h2> : 
		(<div className="cart section container">
			<table className="cart__table">
				<thead>
					<tr>
						<th>Image</th>
						<th>Product Title</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{cart.map((item) => {
						const totalPrice = item.amount * item.price
						return (
							<tr key={item.id}>
							<td className="cart__img-box"><img src={item.img} alt=""/></td>
							<td>{item.title}</td>
							<td>$ {totalPrice.toFixed(2)}</td>
							<td>
							<div className="cart-modal__item-btn">
								<span className="cart-modal__item-decrease" onClick={()=>decreaseCart(item.id)}>-</span>
								<span className="cart-modal__item-quantity">{item.amount}</span>
								<span className="cart-modal__item-increase"  onClick={()=>increaseCart(item.id)}>+</span>
							</div>
							</td>
							<td className=" cart__item-del" onClick={() => removeCart(item.id)}>x</td>
						</tr>
						)
					})}
				</tbody>
			</table>
			<div className="cart__pay">
				<h4 className="cart__pay-total">
					Subtotal: $
					<span className="cart__pay-subtotal">{total}</span>
				</h4>
				<p className="cart__pay-desc"> Taxes and shipping will calculate at checkout</p>
				<div className="cart__pay-btn">
					<Button className="btn-primary btn-block">
						<Link to="/product">Continue Shopping</Link>
					</Button>
					<Button className="btn-outside btn-block">
						<Link to="/checkout">Proceed to checkout</Link>
					</Button>
				</div>
			</div>
		</div>)
	);
};


export default Cart;
