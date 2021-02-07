import React from "react";
import Rating from '@material-ui/lab/Rating';
import { connect } from "react-redux";
import { addToCart } from "../../../store/actions/books";
import { Link } from "react-router-dom";
import SliderBook from "./SliderBook";

const SingleItem = ({ bookData, addToCart }) => {
  return (
    <div className="SingleItem container">
      <div className="SingleItemC">
	  <div className="SingleItemC__img">
		  <div className={`SingleItemC${bookData.img} BG`}/>
	  </div>
      <div className="SingleItemC__body">
		  <h1>{bookData.title}</h1>
		  <h2>{bookData.desc}</h2>
		  <div>
			<p>{bookData.rating}</p>
			<Rating name="half-rating" defaultValue={bookData.rating} precision={0.2} readOnly />
			<h2>({bookData.NumberRating})</h2>
		  </div>
		  <p>Release Date: <span> {bookData.date}</span></p>
		  <div>
			  <button href="/shop">#1 Best Seller</button>
			  <p>in <span>Technology</span></p>
		  </div>
		  <hr/>
			<div>
				<button>
					<p>Hard Copy</p>
					<h2>${bookData.price}</h2>
				</button>
				<button>
					<p>Virtual Copy</p>
					<h2>${bookData.price-15}</h2>
				</button>
				<button>
					<p>Audio</p>
					<h2>${bookData.price-25}</h2>
				</button>
			</div>
		  <hr/>
			<div>
				<button onClick={() => addToCart(bookData.id)} >Add to Cart</button>
				<Link to="/cart" >Go to Cart</Link>
			</div>
	  </div>
      <div className="SingleItemC__side">
		  <div>
				<div className="SingleItemC__side--img1 BG"/>
				<h1>{bookData.nrPages}</h1>
				<p>Pages</p>
		  </div>
		  <div>
		  		<div className="SingleItemC__side--img2 BG"/>
				<h1>2.0 Million</h1>
				<p>Units Sold</p>
		  </div>
	  </div>
	  </div>
	<SliderBook />
    </div>
  );
};

const mapStateToProps = (state) => {
	return {
		bookData: state.shop.currentItem.id,
	};
  };
  
  const mapDispatchToProps = (dispatch) => {
	return {
	  addToCart: (id) => dispatch(addToCart(id)),
	};
  };

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
