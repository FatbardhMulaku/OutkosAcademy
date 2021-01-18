import React, { Suspense } from "react";
import Spinner from "./Spinner";

const WrapSuspense = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
};

export default WrapSuspense;
