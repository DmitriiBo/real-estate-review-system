import React from 'react';
import Container from '@material-ui/core/Container';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';

import { HouseIcon } from './assets/HouseIcon';
import { WomanIcon } from './assets/WomanIcon';
import { cnStoryTelling } from './cn-StoryTelling';

import './index.css';

type StoryTellingProps = {
  isLogged: boolean;
};

function getSteps() {
  return [
    'Воспользуйтесь поиском',
    'Получите все отзывы про арендодателя',
    'Примите взвешенное решениие',
  ];
}

const StoryTelling: React.FunctionComponent<StoryTellingProps> = (isLogged) => {
  const steps = getSteps();

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return `Введите адрес в поисковую строку на нашем сайте или найдите подходящий объект на карте`;
      case 1:
        return `В нашей базе собраны отзывы с нескольких источников`;
      case 2:
        return `Мы поможем вам принять правильное решение по размещению вашего бизнеса или аренде жилого помещения`;
      default:
        return 'Real Estate Review System';
    }
  }

  return (
    isLogged && (
      <div className={cnStoryTelling()}>
        <Container>
          <h2 className={cnStoryTelling('title')}>Ищете отзывы об арендодателе?</h2>
          <Stepper orientation="vertical">
            <StepLabel className={cnStoryTelling('headers')}>{steps[0]}</StepLabel>
            <p className={cnStoryTelling('paragraph')}>{getStepContent(0)}</p>
            <HouseIcon />
            <StepLabel className={cnStoryTelling('headers')}>{steps[1]}</StepLabel>
            <p className={cnStoryTelling('paragraph')}>{getStepContent(1)}</p>
            <WomanIcon />
            <StepLabel className={cnStoryTelling('headers')}>{steps[2]}</StepLabel>
            <p className={cnStoryTelling('paragraph')}>{getStepContent(2)}</p>
          </Stepper>
        </Container>
      </div>
    )
  );
};

export default StoryTelling;
