import React, { lazy } from "react";
import WrapSuspense from "../../Components/Shared/WrapSuspense";

const LazyLoaded = lazy(() =>
  import("../../Components/Pages/TeacherProfile/Rrezon")
);

const Rrezon = () => {
  return (
    <WrapSuspense>
      <LazyLoaded />
    </WrapSuspense>
  );
};

export default Rrezon;