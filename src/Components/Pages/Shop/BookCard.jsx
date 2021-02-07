import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, loadCurrentItem } from "../../../store/actions/books";

const BookCard = ({bookData, addToCart, loadCurrentItem}) => {
  return (
    
      <div className="BookCard">
        <Link to={`/book/${bookData.id}`} onClick={() => loadCurrentItem(bookData)}>
        <div className={`BookCard${bookData.img} BG`} />
        <h1 className="line-clamp-1">{bookData.title}</h1>
        <h2 className="line-clamp-1">{bookData.desc}</h2>
        <div>
          <p>• {bookData.nrPages} Pages</p>
          <p>• {bookData.category}y</p>
        </div>
        </Link>
        <div>
          <h4>${bookData.price}</h4>
           <button onClick={() => addToCart(bookData.id)}>  Add to Cart </button>
        </div>
      </div>
   
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(BookCard);
