import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Category from "./Stepper/Category";
import SearchCourse from "./Stepper/SearchCourse";
import Questions from "./Stepper/Questions";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "50px",
    width: "100%",
    [theme.breakpoints.down('md')]: {
      paddingTop: "20px",
    },
    "& .MuiStepIcon-root.MuiStepIcon-completed": {
      color: "#eb8341",
    },
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      color: "#eb8341",
    },
    "& .MuiButton-containedPrimary": {
      backgroundColor: "#eb8341",
    },
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  final: {
    textAlign: "center",
    padding: "50px 0",
    fontSize: "22px",
  },
}));

function getSteps() {
  return ["", "", ""];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Category key={1}/>;
    case 1:
      return <SearchCourse key={2}/>;
    case 2:
      return <Questions key={3}/>;
    default:
      return "Unknown stepIndex";
  }
}

function Steppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div >
            <Typography className={classes.final}>
              Your order successfully completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div >
            <div className={classes.instructions}>
              {getStepContent(activeStep)}
            </div>
            <div className="Stepper__btns">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <div>
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.href='/dashboard/course-dashboard';
                      }}
                  >
                    Finish
                  </Button>
                ) : (
                  <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  onClick={handleNext}
                >
                  Continue
                </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Steppers;
