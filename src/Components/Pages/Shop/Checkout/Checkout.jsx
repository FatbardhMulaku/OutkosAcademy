import React from 'react';
import Steppers from "./Steppers";
import Cart from "../Cart/Index";

const Checkout = () => {
	return (
		<div className="Checkout container">
			<div className="Checkout__info">
				<Steppers />
				<hr/>
				<p>Express Checkout</p>
				<div>
					<div className="Checkout__Paypal BG"/>
					<div className="Checkout__GooglePay BG"/>
					<div className="Checkout__ApplePay BG"/>
				</div>
			</div>
			<div className="Checkout__cart">
				<Cart />
			</div>
		</div>
	)
}

export default Checkout;
