import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import StyledLink from "../../../Shared/StyledLink/StyledLink";
import BookCard from "../BookCard";

const Index = ({ cart, products }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const shipping = 0;

  useEffect(() => {
    let items = 0;
    let price = 0;
    let shipping = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price + shipping;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  if (!cart.length) {
    return (
      <div className="Empty-cart container">
		  <h2 className="shadow-sm">
			<FormattedMessage
				id="emptyCart.title.cart"
				defaultMessage="Your Cart"
			/>
		  </h2>
        <h1>
          <FormattedMessage
            id="emptyCart.title"
            defaultMessage="Looks like your Cart is Empty."
          />
        </h1>
        <div>
          <StyledLink to="/shop" styles={`md bg-primary`}>
            <FormattedMessage
              id="emptyCart.btn"
              defaultMessage="Continue Shopping"
            />
          </StyledLink>
        </div>

		
		<div className="SliderBook">
			<h2> You Might Like </h2>
			<div className="SliderBook__books">
				{products.map((item) => (
					<BookCard key={item.id} bookData={item}/>
				))}
			</div>
		</div>
		
      </div>
    );
  } else {
    return (
      <div className="Cart container">
        <h2 className="shadow-sm">
			<FormattedMessage
				id="emptyCart.title.cart"
				defaultMessage="Your Cart"
			/></h2>
        <div className="Cart__item">
          {cart.map((item) => (
            <CartItems key={item.id} itemData={item} />
          ))}
        </div>

        <div className="Cart__total">
          <div>
            <div>
              <h6>Subtotal</h6>
              <p>
                <span>({totalItems} Books) </span> ${totalPrice}
              </p>
            </div>
            <div>
              <h6>Shipping</h6>
              <p>${shipping}</p>
            </div>
            <hr />
            <div>
              <h6>Total</h6>
              <p>${totalPrice + shipping}</p>
            </div>
            <div>
              <Link to="/checkout">PROCEED TO CHECKOUT</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
	products: state.shop.products,
  };
};
export default connect(mapStateToProps)(Index);
