import React from 'react';
import BookCard from "./BookCard";
import { connect } from "react-redux"

const SliderBook = ({products}) => {
	
	return (
		<div className="SliderBook">
			<h2> You Might Like </h2>
			<div className="SliderBook__books">
				{products.map((item) => (
					<BookCard key={item.id} bookData={item}/>
				))}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
	  products: state.shop.products,
	};
  };

export default connect(mapStateToProps)(SliderBook);
