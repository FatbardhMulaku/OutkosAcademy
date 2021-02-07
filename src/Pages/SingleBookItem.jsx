import React, { lazy } from "react";
import WrapSuspense from "../Components/Shared/WrapSuspense";

const LazyLoaded = lazy(() =>
  import("../Components/Pages/Shop/SingleItem")
);

const SingleBookItem = () => {
  return (
    <WrapSuspense>
      <LazyLoaded />
    </WrapSuspense>
  );
};

export default SingleBookItem;