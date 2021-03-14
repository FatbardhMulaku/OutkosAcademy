import React, { lazy } from "react";
import WrapSuspense from "../../Components/Shared/WrapSuspense";

const LazyLoaded = lazy(() =>
  import("../Components/Dashboard/index")
);

const Dashboard = () => {
  return (
    <WrapSuspense>
      <LazyLoaded />
    </WrapSuspense>
  );
};

export default Dashboard;