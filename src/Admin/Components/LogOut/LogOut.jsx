import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as Logout } from "../../../Assets/Admin/nav/logout.svg";
import { ReactComponent as Arrow } from "../../../Assets/Admin/dashboard/leftArrow.svg";
import { ReactComponent as Close } from "../../../Assets/Admin/dashboard/x.svg";
import Modal from "@material-ui/core/Modal";
import Button from "../Shared/UI/Button";
import { Link } from "react-router-dom";

/* function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
} */

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  title: {
    paddingBottom: "15px",
	paddingTop:"10px",
    "& > span": {
      fontWeight: "bold",
    },
  },
  BtnContainer:{
	  display:"flex",
	  justifyContent:"center"
  },
/*   [theme.breakpoints.down("xs")]: {
	title:{
		fontSize:"20px",
	}
  } */
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={`${classes.paper} LogOutModal`}>
      <h2 className={classes.title} id="simple-modal-title">
        Are you sure you want to <span> Log Out?</span>
      </h2>
      <div className={classes.BtnContainer} id="simple-modal-description">
        <div onClick={handleClose}>
		<Button
          to="#"
          name="Cancel"
          icon={`LogOutModal__Btn__icon BG`}
          style={`LogOutModal__Btn`}
        />
		</div>
        <Button
          to="#"
          name="Continue"
          icon={`LogOutModal__Btn2__icon BG`}
          style={`LogOutModal__Btn2`}
        />
      </div>
    </div>
  );

  return (
    <div>
      <a to="#" className="nav__link" onClick={handleOpen}>
        <Logout className="nav__icon stroke-style" />
        <span className="nav__name">Log Out</span>
      </a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
