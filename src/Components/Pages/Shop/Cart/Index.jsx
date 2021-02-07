import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import { connect } from "react-redux"

const Index = ({ cart }) => {
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);
	const shipping = 0;

	useEffect(() => {
		let items = 0;
		let price = 0;
		let shipping = 0;

		cart.forEach(item => {
			items += item.qty;
			price += item.qty * item.price + shipping;
		})

		setTotalPrice(price);
		setTotalItems(items);
	},[cart, totalPrice, totalItems, setTotalPrice, setTotalItems])
  return (
    <div className="Cart container">
      
	  <div className="Cart__item">
		{cart.map((item) => (
			 <CartItems key={item.id} itemData={item}/>
		))} 
	  </div>
      
	  <div className="Cart__total">
		<div>
			<div><h6>Subtotal</h6><p><span>({totalItems} Books) </span> ${totalPrice}</p></div>
			<div><h6>Shipping</h6><p>${shipping}</p></div>
			<hr />
			<div><h6>Total</h6><p>${totalPrice + shipping}</p></div>
			<div>
			<Link to="/checkout">PROCEED TO CHECKOUT</Link>
			</div>
		</div>
	  </div>
    </div>
  );
};
const mapStateToProps = (state) => {
	return {
	  cart: state.shop.cart,
	};
};
export default connect(mapStateToProps)(Index);
