import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, Divider, IconButton } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Route } from "react-router-dom";
import MobileMenuItem from "./MobileMenuItem";
import DropItem from "./DropItem";
import { mainMenu } from "../data";
import {Career} from "../../Popper/data";

const useStyles = makeStyles((theme) => ({
  drawer: {
    "& > .MuiDrawer-paper": {
      width: "245px !important",
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    "& > button": {
      outline: "none",
    },
  },
  list: {
    display: "flex",
    flexFlow: "column",
    "& >div:nth-child(2)": {
      order: "1 !important",
    },
    "& >div:nth-child(3)": {
      order: "2 !important",
    },
  },
  klasa1: {
    backgroundColor: "transparent",
    padding: "6px 18px",
    color: "EB8341 !important",
    fontWeight: "normal",
    cursor: "pointer",
    borderRadius: "15px",
    border: "2px solid #EB8341",
    "&:hover": {
      borderColor: "black",
    },
  },
  klasa2: {
    backgroundColor: "#EB8341",
    padding: "6px 18px",
    color: "#fff",
    fontWeight: "normal",
    marginLeft: "10px",
    cursor: "pointer",
    borderRadius: "15px",
    border: "2px solid #fff",
    "&:hover": {
      borderColor: "black",
      backgroundColor: "white",
      color: "black",
    },
  },
}));

const dropDownItems = ["Career"];

const MobileMenu = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Drawer
      open={props.isToggled}
      onClose={props.drawerToggle}
      anchor="left"
      className={classes.drawer}
      transitionDuration={1200}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.drawerToggle}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      <List className={classes.list}>
      {dropDownItems.map((item, index) => {
          return (
            <DropItem
              key={index}
              drawerToggle={props.drawerToggle}
              name="Career"
              items={Career}
              panel={item}
              expanded={expanded}
              handleChange={handleChange}
            />
          );
        })}
        {mainMenu.map(({ link, name }, index) => (
          <MobileMenuItem
            key={index}
            link={link}
            name={name}
            drawerToggle={props.drawerToggle}
          />
        ))}
        
      </List>

      <Divider />
            <ul className="nav-login-menu">
        <li className={classes.klasa1}>
          <Route
            render={({ history }) => (
              <p
                onClick={() => {
                  history.push("/login");
                }}
              > Login
              </p>
            )}
          />
        </li>

        <li className={classes.klasa2}>
          <Route
            render={({ history }) => (
              <p
                onClick={() => {
                  history.push("/signup");
                }}
              >
                Register
              </p>
            )}
          />
        </li>
      </ul>
    
      <Divider />
    </Drawer>
  );
};

export default MobileMenu;
