import React, { lazy } from "react";
import WrapSuspense from "../Components/Shared/WrapSuspense";

const LazyLoaded = lazy(() =>
  import("../Components/Pages/About/index")
);

const About = () => {
  return (
    <WrapSuspense>
      <LazyLoaded />
    </WrapSuspense>
  );
};

export default About;