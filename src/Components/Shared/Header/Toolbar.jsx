import React from "react";
import { AppBar, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavList from "./NavList";
import LoginNav from "./LoginNav";
import Logo from "../Logo/Logo";
import DrawerToggle from "./DrawerToggle";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Icon from "./Icon";
/* import "./Toolbar.css"; */

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 70px",
    alignItems: "center",
    color: "black",
    maxWidth: "1800px",
    [theme.breakpoints.down("lg")]: {
      padding: "5px",
    },
  },
  box1: {
    boxShadow: "0 2px 8px 0px rgba(51,51,51,0.2)",
    backgroundColor: "white",
    transition: "all 0.6s ease-out",
    padding: "10px",
    color: "black",
  },
  [theme.breakpoints.down("xs")]: {
    box1: {
      padding: "0 0 5px !important",
    },
    appBar: {
      padding: "3px 0",
    },
  },
}));

const Toolbar = (props) => {
  const classes = useStyles(props);
  const { windowp } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: windowp ? window() : undefined,
  });

  return (
    <AppBar className={classes.box1}>
      <Container className={classes.appBar}>
        <div className="DrawerToggle">
          <DrawerToggle clicked={props.drawerToggle} />
        </div>

        <Logo />

        <div className="DesktopOnly col_black">
          <NavList />
        </div>

        <div className="searchIcon">
          <Icon />

          <div className="d-login">
            <LoginNav trigger={trigger} />
          </div>
        </div>
      </Container>
    </AppBar>
  );
};


export default Toolbar;
