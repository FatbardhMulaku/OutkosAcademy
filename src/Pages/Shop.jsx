import React, { lazy } from "react";
import WrapSuspense from "../Components/Shared/WrapSuspense";

const LazyLoaded = lazy(() =>
  import("../Components/Pages/Shop/Index")
);

const Shop = () => {
  return (
    <WrapSuspense>
      <LazyLoaded />
    </WrapSuspense>
  );
};

export default Shop;