import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';

import { cnClientStepper } from './cn-client-stepper';
import { useStyles } from './use-styles';

type ClientStepperProps = {
  isLogged: boolean;
};

function getSteps() {
  return ['Шаг 1', 'Шаг 2', 'Шаг 3'];
}

const ClientStepper: React.FunctionComponent<ClientStepperProps> = (isLogged) => {
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

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return `Заинтересоваться объектом недвижимости или найти его на карте`;
      case 1:
        return 'Ввести адрес в поисковую строку на нашем сайте Real Estate Review System';
      case 2:
        return `Узнать шокирующие подробности. Вы прекрасны!`;
      default:
        return 'Unknown step';
    }
  }

  return (
    isLogged && (
      <div className={cnClientStepper()}>
        <Container className={classes.clientStepperContainer}>
          <h2>Почему вам необходим наш ресурс? %)</h2>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        </Container>
      </div>
    )
  );
};

export default ClientStepper;
