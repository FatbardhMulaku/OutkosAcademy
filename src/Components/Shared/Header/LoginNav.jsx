import React from "react";
import { Route } from "react-router-dom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
/*   root:{
    [theme.breakpoints.down("lg")]: {
      display:"none"
    },
  }, */
  klasa1: {
    backgroundColor: "transparent",
    padding: "7px 18px 9px 18px",
    color: "#EB8341",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "30px",
    border: "2px solid #EB8341",
    "&:hover": {
      borderColor: "black",
      color: "black",
      backgroundColor: "white",
    },
  },
  klasa1a: {
    border: "2px solid #EB8341",
    padding: "7px 18px 9px 18px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "30px",
    color: "#EB8341",
    "&:hover": {
      borderColor: "black",
      color: "black",
      backgroundColor: "white",
    },
  },
  klasa2: {
    backgroundColor: "#EB8341",
    padding: "7px 18px 9px 18px",
    color: "white",
    fontWeight: "bold",
    marginLeft: "10px",
    cursor: "pointer",
    borderRadius: "30px",
    border: "2px solid #EB8341",
    "&:hover": {
      borderColor: "#000",
      backgroundColor: "black",
      color: "#fff",
    },
  },
  klasa2a: {
    backgroundColor: "#EB8341",
    padding: "7px 18px 9px 18px",
    cursor: "pointer",
    borderRadius: "30px",
    border: "2px solid #EB8341",
    marginLeft: "10px",
    fontWeight: "bold",
    color: "white",
    "&:hover": {
      borderColor: "#000",
      backgroundColor: "black",
      color: "#fff",
    },
  },
  [theme.breakpoints.down("md")]: {
    backgroundColor: "red",
    border: "none",
  },
}));

/* function URLLogin() {
  window.location = '/Login';
}
function URLSignup() {
  window.location = '/SignUp';
}
 */
const LoginNav = (props) => {
  const classes = useStyles(props);
  const { windowp } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: windowp ? window() : undefined,
  });

  return (
    <div className="LoginNav my-auto">
      <ul className="nav-login p-0 my-auto">
        <li className={trigger ? classes.klasa1a : classes.klasa1}>
          <Route
            render={({ history }) => (
              <p
                onClick={() => {
                  history.push("/login");
                }}
              >
                <FormattedMessage id="header.loginNaw.1" defaultMessage="Login"/>
              </p>
            )}
          />
        </li>

        <li className={trigger ? classes.klasa2a : classes.klasa2}>
          <Route
            render={({ history }) => (
              <p
                onClick={() => {
                  history.push("/signup");
                }}
              >
                <FormattedMessage id="header.loginNaw.2" defaultMessage="Register"/>
              </p>
            )}
          />
        </li>
      </ul>
    </div>
  );
};

export default LoginNav;
