import React, { useState } from 'react';
import Input from "../../../Shared/Form/Input";

function Payment() {
	const [input, setInput] = useState({
		NameOnCard: "",
		CardNumber: "",
		expiration: "",
		securityCode:"",
	  });
	  const handleChange = (input, setInput, event) => {
		event.persist();
		setInput({ ...input, [event.target.name]: event.target.value });
	  };
	return (
		<div className="Payment">
			<h1>Payment Details</h1>
			<div>
				<h2>Credit Card</h2>
				<div>
					<div className="Payment__visa BG"/>
					<div className="Payment__master BG"/>
					<div className="Payment__amex BG"/>
					<div className="Payment__discover BG"/>
				</div>
			</div>
			<Input
				type="text"
				label="Name on Card"
				value={input.NameOnCard}
				name="NameOnCard"
				id="NameOnCard"
				onChange={(e) => handleChange(input, setInput, e)}
			/>
			<Input
				type="number"
				label="Card Number"
				value={input.CardNumber}
				name="CardNumber"
				id="CardNumber"
				onChange={(e) => handleChange(input, setInput, e)}
			/>
			<div>
				<Input
					type="text"
					label="Expiration Date (MM / YY)"
					value={input.expiration}
					name="expiration"
					id="expiration"
					onChange={(e) => handleChange(input, setInput, e)}
				/>
				<Input
					type="number"
					label="Security Code (CVV)"
					value={input.securityCode}
					name="securityCode"
					id="securityCode"
					onChange={(e) => handleChange(input, setInput, e)}
				/>
			</div>

		</div>
	)
}

export default Payment;
