import React, { lazy } from "react";
import WrapSuspense from "../../Components/Shared/WrapSuspense";

const LazyLoaded = lazy(() =>
  import("../Components/Students/index")
);

const Students = () => {
  return (
    <WrapSuspense>
      <LazyLoaded />
    </WrapSuspense>
  );
};

export default Students;