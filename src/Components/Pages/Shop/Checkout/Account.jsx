import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Input from "../../../Shared/Form/Input";

function Account() {
	const [input, setInput] = useState({
		firstname: "",
		lastname: "",
		email: "",
		number:"",
		password: "",
		confirm_password: "",
	  });
	  const handleChange = (input, setInput, event) => {
		event.persist();
		setInput({ ...input, [event.target.name]: event.target.value });
	  };
	return (
		<div className="Account">
			<div>
				<h1>Your Account</h1>
				<p>Already have an account?<span><Link to="/login">Log in</Link></span></p>
			</div>
			<form>
				<div>
					<Input
					type="text"
					label="First Name"
					value={input.firstname}
					name="firstname"
					id="firstname"
					onChange={(e) => handleChange(input, setInput, e)}
					/>
					<Input
					type="text"
					label="Last Name"
					value={input.lastname}
					name="lastname"
					id="lastname"
					onChange={(e) => handleChange(input, setInput, e)}
					/>
				</div>
				<Input
					type="number"
					label="Phone Number"
					value={input.number}
					name="number"
					id="number"
					onChange={(e) => handleChange(input, setInput, e)}
				/>
				<Input
				type="email"
				label="Email Address"
				value={input.email}
				name="email"
				id="email"
				onChange={(e) => handleChange(input, setInput, e)}
				/>
				
				<div>
					<Input
					type="password"
					label="Password"
					value={input.password}
					name="password"
					id="password"
					onChange={(e) => handleChange(input, setInput, e)}
					/>
					<Input
					type="password"
					label="Confirm Password"
					value={input.confirm_password}
					name="confirm_password"
					id="confirm_password"
					onChange={(e) => handleChange(input, setInput, e)}
					/>
				</div>
				
				{/* <button className="styled-link sm bg-primary" type="submit">
				Create Account
				</button>  */}
			</form>
		</div>
	)
}

export default Account
