import React, { useRef, useState, useEffect } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
/* import "./index.css"; */
import { ClickAwayListener, Popper, Zoom, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    maxWidth: "50%",
    width: props.width,
    marginLeft: "-50px",
  }),
  paper: {
    borderRadius: "20px",
    padding: "1.4rem",
    boxShadow: "0 2px 8px 2px rgba(51,51,51,0.25)",
  },
}));

const PopperBox = (props) => {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [arrowRef, setarrowRef] = useState(null);

  const handleArrowRef = (node) => {
    setarrowRef(node);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <li className="navigation_link " onMouseLeave={handleClose}>
        <button
          ref={anchorRef}
          aria-haspopup="true"
          onClick={handleToggle}
          className="button a_black"
          // onMouseOver={handleToggle}
        >
          {props.name}
          <span className="icon_dropdown">
            {open ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
          </span>
        </button>
      </li>

      <Popper
        placement="bottom-start"
        className={classes.root}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        modifiers={{
          flip: {
            enabled: true,
          },
          arrow: {
            enabled: true,
            element: arrowRef,
          },
          preventOverflow: {
            enabled: "true",
            boundariesElement: "scrollParent",
          },
        }}
      >
        <Zoom in={open}>
          <div>
            {open && (
              <span
                className={`arrow ${
                  props.trigger ? "arrow_blue" : "arrow_white"
                }`}
                ref={handleArrowRef}
              />
            )}
            <Paper
              className={classes.paper}
              elevation={props.trigger ? 5 : 0}
              onMouseLeave={handleClose}
            >
              <ClickAwayListener onClickAway={handleClose}>
                {props.children}
              </ClickAwayListener>
            </Paper>
          </div>
        </Zoom>
      </Popper>
    </div>
  );
};

export default PopperBox;
