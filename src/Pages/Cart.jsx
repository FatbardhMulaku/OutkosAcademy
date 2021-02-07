import React, { lazy } from "react";
import WrapSuspense from "../Components/Shared/WrapSuspense";

const LazyLoaded = lazy(() =>
  import("../Components/Pages/Shop/Cart/Index")
);

const Cart = () => {
  return (
    <WrapSuspense>
      <LazyLoaded />
    </WrapSuspense>
  );
};

export default Cart;