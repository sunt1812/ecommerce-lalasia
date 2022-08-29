import React, { useState } from "react";
import Banner from "../components/Banner";
import Button from "../components/Button";
import { useCartContext } from "../context/CartContext";
const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const { total } = useCartContext();
  const shippingCost = 15;

  const totalAmount = total + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

    return (
        <div className="checkout section">
            <Banner title="Checkout"/>
            <div className="checkout__container container">
                <div className="checkout__form">
                    <h3 className="checkout__left-title">Shipping Address</h3>
                    <form className="form" onSubmit={submitHandler}>
                        <div className="form__group">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                required
                                onChange={(e) => setEnterName(e.target.value)}
                            />
                        </div>

                        <div className="form__group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                onChange={(e) => setEnterEmail(e.target.value)}
                            />
                        </div>
                        <div className="form__group">
                            <input
                                type="number"
                                placeholder="Phone number"
                                required
                                onChange={(e) => setEnterNumber(e.target.value)}
                            />
                        </div>
                        <div className="form__group">
                            <input
                                type="text"
                                placeholder="Country"
                                required
                                onChange={(e) => setEnterCountry(e.target.value)}
                            />
                        </div>
                        <div className="form__group">
                            <input
                                type="text"
                                placeholder="City"
                                required
                                onChange={(e) => setEnterCity(e.target.value)}
                            />
                        </div>
                        <div className="form__group">
                            <input
                                type="number"
                                placeholder="Postal code"
                                required
                                onChange={(e) => setPostalCode(e.target.value)}
                            />
                        </div>
                    </form>
                    <Button className="btn-primary btn-block">Payment</Button>
                </div>
                <div className="checkout__bill">
                    <div className="checkout__bill-content">
                        <h6 className="checkout__bill-subtotal">
                            Subtotal: $<span>{total}</span>
                        </h6>
                        <h6 className="checkout__bill-shipping">
                            Shipping: $<span>{shippingCost}</span>
                        </h6>
                        <h6 className="checkout__bill-total">
                            Total: $<span>{totalAmount}</span>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Checkout;