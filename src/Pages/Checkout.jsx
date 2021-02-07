import React, { lazy } from "react";
import WrapSuspense from "../Components/Shared/WrapSuspense";

const LazyLoaded = lazy(() =>
  import("../Components/Pages/Shop/Checkout/Checkout")
);

const Checkout = () => {
  return (
    <WrapSuspense>
      <LazyLoaded />
    </WrapSuspense>
  );
};

export default Checkout;