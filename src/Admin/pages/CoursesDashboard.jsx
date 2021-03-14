import React, { lazy } from "react";
import WrapSuspense from "../../Components/Shared/WrapSuspense";

const LazyLoaded = lazy(() =>
  import("../Components/Courses/Courses")
);

const CoursesDashboard = () => {
  return (
    <WrapSuspense>
      <LazyLoaded />
    </WrapSuspense>
  );
};

export default CoursesDashboard;