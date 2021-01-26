import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
/* import "./MobileMenu.css"; */
import { ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles({
  litsItem: {
    padding: "5px 10px",
  },
  listText: {
    backgroundColor: "rgb(236, 236, 236) !important",
    padding: "5px 15px",
    borderRadius:"15px",
  },
});

const MobileMenuItem = (props) => {
  const classes = useStyles();
  const { drawerToggle } = props;

  return (
    <ListItem button className={classes.litsItem}>
      <ListItemText className={classes.listText}>
        <NavLink
          exact
          to={`/${props.link}`}
          className="link"
          activeClassName="activeMobile"
          onClick={drawerToggle}
        >
          {props.name}
        </NavLink>
      </ListItemText>
    </ListItem>
  );
};

export default MobileMenuItem;
