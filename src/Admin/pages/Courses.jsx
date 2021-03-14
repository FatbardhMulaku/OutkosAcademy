import React, { lazy } from "react";
import WrapSuspense from "../../Components/Shared/WrapSuspense";

const LazyLoaded = lazy(() =>
  import("../Components/Courses/index")
);

const Courses = () => {
  return (
    <WrapSuspense>
      <LazyLoaded />
    </WrapSuspense>
  );
};

export default Courses;