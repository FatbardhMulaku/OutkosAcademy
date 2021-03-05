import React from "react";
/* import Footer from "../components/Shared/Footer"; */
import SideNav from "../Components/Shared/SideMenu/SideMenu"

const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <div id="back-to-top-anchor"></div>
      {/* <main>{children}</main>
      <Footer />  */}
      <SideNav>{ children }</SideNav>
    </div>
  );
};

export default DefaultLayout;