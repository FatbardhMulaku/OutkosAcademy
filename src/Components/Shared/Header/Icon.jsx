import React, {useState, useEffect} from 'react';
import  { connect } from "react-redux"
import { Link } from 'react-router-dom';

const Icon = ({cart}) => {

	const [cartCount, setCartCount] = useState(0)
	useEffect(() => {
	  let count = 0;
	  cart.forEach((item) => {
		count += item.qty;
	  });
	  setCartCount(count);
	},[cart, setCartCount])

	return (
		<div>
			<div className="Heart__icon BG"></div>
			<Link to="/cart">
			<div className="Store__icon BG"><p>{cartCount}</p></div>
			</Link>
          	
		</div>
	)
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  }
}
export default connect(mapStateToProps)(Icon)
