import React from 'react';
import Container from '@material-ui/core/Container';
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
  return [
    'Воспользуйтесь поиском',
    'Получите все отзывы про арендодателя',
    'Примите взвешенное решениие',
  ];
}

const ClientStepper: React.FunctionComponent<ClientStepperProps> = (isLogged) => {
  const classes = useStyles();
  const steps = getSteps();

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return `Введите адрес в поисковую строку на нашем сайте или найдите подходящий объект на карте`;
      case 1:
        return `В нашей базе собраны отзывы с нескольких источников`;
      case 2:
        return `Отзывы помогут вам принять правильное решение по размещению вашего бизнеса или аренде жилого помещения`;
      default:
        return 'Real Estate Review System';
    }
  }

  return (
    isLogged && (
      <div className={cnClientStepper()}>
        <Container>
          <h2>Ищете отзывы об арендодателе?</h2>
          <Stepper orientation="vertical">
            <Step active>
              <StepLabel>{steps[0]}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(0)}</Typography>
                <img
                  className={classes.img}
                  src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                />
              </StepContent>
            </Step>
            <Step active>
              <StepLabel>{steps[1]}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(1)}</Typography>
                <img
                  className={classes.imgWithStars}
                  // src="https://images.unsplash.com/photo-1578176688096-16db2edc04e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  src="https://images.unsplash.com/photo-1501812215031-48016ad31549?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt=""
                />
              </StepContent>
            </Step>
            <Step active>
              <StepLabel>{steps[2]}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(2)}</Typography>
                <img
                  className={classes.img}
                  src="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80"
                  alt=""
                />
              </StepContent>
            </Step>
            <Step />
          </Stepper>
        </Container>
      </div>
    )
  );
};

export default ClientStepper;
