import React, { useState } from 'react';
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../../store/actions/books";

const CartItems = ({itemData, adjustQty, removeFromCart}) => {
	const [input, setInput] = useState(itemData.qty);

	const onChangeHandler = (e) => {
	  setInput(e.target.value);
	  adjustQty(itemData.id, e.target.value);
	};
	return (
		<div className="CartItems">
			<div>
				<div className={`CartItems${itemData.img} BG`} />
			</div>
			<div>
				<div>
					<h1 className="line-clamp-1">{itemData.title}</h1>
					<h2 className="line-clamp-1">{itemData.desc}</h2>
					<h4>${itemData.price}</h4>
					<label htmlFor="qty">Quantity:</label>
					<input
						min="1"
						type="number"
						id="qty"
						name="qty"
						value={input}
						onChange={onChangeHandler}
					/>
				</div>
				<p  onClick={() => removeFromCart(itemData.id)}>Remove</p>
			</div>
			
			 
		</div>
	)	
}
const mapDispatchToProps = (dispatch) => {
	return {
	  adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
	  removeFromCart: (id) => dispatch(removeFromCart(id)),
	};
  };

export default connect(null, mapDispatchToProps)(CartItems);
