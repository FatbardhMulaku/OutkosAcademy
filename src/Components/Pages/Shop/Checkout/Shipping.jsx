import React, { useState } from 'react';
import Select from "../../../Shared/Form/Select";
import Input from "../../../Shared/Form/Input";

function Shipping() {
	const [input, setInput] = useState({
		address: "",
		city: "",
		province: "",
		ZIPcode:"",
	  });
	  const handleChange = (input, setInput, event) => {
		event.persist();
		setInput({ ...input, [event.target.name]: event.target.value });
	  };

	  const [state, setState] = useState({
		value: "xk",
		label: "Kosovo",
	  });
	
	  const selectItems = [
		{
		  value: "xk",
		  label: "Kosovo",
		  onClick: setState.bind(null, { value: "xk", label: "Kosovo" }),
		},
		{
		  value: "al",
		  label: "Albania",
		  onClick: setState.bind(null, { value: "al", label: "Albania" }),
		},
		{
		  value: "mac",
		  label: "Macedonia",
		  onClick: setState.bind(null, { value: "mac", label: "Macedonia" }),
		},
	  ];

	return (
		<div className="Shipping">
			<h1>Shipping Address</h1>
			<Input
				type="text"
				label="Address"
				value={input.address}
				name="address"
				id="address"
				onChange={(e) => handleChange(input, setInput, e)}
			/>
			<Input
				type="text"
				label="City"
				value={input.city}
				name="city"
				id="city"
				onChange={(e) => handleChange(input, setInput, e)}
			/>
			<div>
			<Select category="Country / Region" handleChange={setState}>
				{selectItems.map((o, i) => {
				return (
					<div className="smth" value={o.value} key={i}>
					{o.label}
					</div>
				);
				})}
			</Select>
			<Input
				type="text"
				label="State / Province"
				value={input.province}
				name="province"
				id="province"
				onChange={(e) => handleChange(input, setInput, e)}
			/>
			</div>
				<Input
					type="number"
					label="ZIP Code"
					value={input.ZIPcode}
					name="ZIPcode"
					id="ZIPcode"
					onChange={(e) => handleChange(input, setInput, e)}
				/>
			
		</div>
	)
}

export default Shipping
