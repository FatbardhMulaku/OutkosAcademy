import React from "react";
/* import "./styles/NavList.css";
import "./styles/NavigationLink.css"; */
import NavigationLink from "./NavigationLink";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import CareertDropdown from "../Popper/Career/Career";
import { mainMenu } from "./data";

function NavList(props) {
  const { window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });
  return (
    <div className="nav_list">
      <ul>
        <CareertDropdown trigger={trigger} />
        {mainMenu.map(({ link, name }, index) => (
          <NavigationLink link={`/${link}`} key={index} trigger={trigger}>
            {name}
          </NavigationLink>
        ))}
      </ul>
    </div>
  );
}

export default NavList;
