import React, { useState } from "react";
import BookCard from "./BookCard";
import Filters from "./Filters";
import { ReactComponent as Desc } from "../../../Assets/Svg/descending-sort.svg";
import Select from "../../Shared/Form/Select";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Index({ products }) {
		const [state, setState] = useState({
		  value: "best",
		  label: "Best Rated",
		});
	  
		const selectItems = [
		  {
			value: "best",
			label: "Best Rated",
			onClick: setState.bind(null, { value: "best", label: "Best Rated" }),
		  },
		  {
			value: "new",
			label: "Newest",
			onClick: setState.bind(null, { value: "new", label: "Newest" }),
		  },
		  {
			value: "price",
			label: "Price",
			onClick: setState.bind(null, { value: "price", label: "Price" }),
		  },
		];
  return (
    <div className="Shop container">
      <div className="Shop__filter">
        <Filters />
      </div>
      <div className="Shop__books">
        <div>
          <Select icon={<Desc />} category="Sort by" handleChange={setState}>
            {selectItems.map((o, i) => {
              return (
                <div className="smth" value={o.value} key={i}>
                  {o.label}
                </div>
              );
            })}
          </Select>
          <Link to="/cart">Go to Cart</Link>
        </div>

        <div className="Shop__books--item">
          {products.map((item) => (
            <BookCard key={item.id} bookData={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};
export default connect(mapStateToProps)(Index);
