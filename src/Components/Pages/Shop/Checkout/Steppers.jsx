import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Account from "./Account";
import Shipping from "./Shipping";
import Payment from "./Payment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    "& .MuiStepIcon-root.MuiStepIcon-completed":{
      color:"#eb8341"
    },
    "& .MuiStepIcon-root.MuiStepIcon-active":{
      color:"#eb8341"
    },
    "& .MuiButton-containedPrimary":{
      backgroundColor:"#eb8341",
    }
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  final:{
    textAlign:"center",
    padding:"50px 0",
    fontSize:"22px"
  }
}));

function getSteps() {
	return ['Account', 'Shipping', 'Payment'];
  }

  function getStepContent(stepIndex) {
	switch (stepIndex) {
	  case 0:
		return <Account/>;
	  case 1:
		return <Shipping />;
	  case 2:
		return <Payment />;
	  default:
		return 'Unknown stepIndex';
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
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.final}>Your order successfully completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>{getStepContent(activeStep)}</div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" type="submit" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
	)
}

export default Steppers;
