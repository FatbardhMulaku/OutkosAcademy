import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    border: 0,
    height: "3px",
    margin:"auto",
    backgroundColor: "#EB8341",
    width: (props) => props.width,
    [theme.breakpoints.down("xs")]: {
      /* padding: "8px 10px ", */
    },
  },
}));

const Diver = (props) => {
  const classes = useStyles(props);
  return <hr className={`${classes.root}`} />;
};

export default Diver;
