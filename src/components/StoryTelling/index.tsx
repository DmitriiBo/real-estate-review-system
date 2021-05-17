import React from 'react';
import Container from '@material-ui/core/Container';

import { HouseIcon } from '../../assets/story-telling-svg/HouseIcon';
import { ManIcon } from '../../assets/story-telling-svg/ManIcon';
import { PhoneIcon } from '../../assets/story-telling-svg/PhoneIcon';
import { WomanIcon } from '../../assets/story-telling-svg/WomanIcon';
import StoryTellingItem from '../StoryTellingItem/index';

import { cnStoryTelling } from './cn-StoryTelling';

import './index.css';

type StoryTellingProps = {
  // isLogged: boolean;
};

const StoryTelling: React.FunctionComponent<StoryTellingProps> = () => {
  const steps = [
    'Воспользуйтесь нашим сайтом',
    'Получите все отзывы об арендодателе',
    'Примите взвешенное решение!',
    'Выбирайте лучшее',
  ];

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return `Введите адрес в поисковую строку или найдите подходящий объект на карте`;
      case 1:
        return `В нашей базе собраны отзывы с нескольких источников`;
      case 2:
        return `Мы поможем вам принять правильное решение по размещению вашего бизнеса или аренде жилого помещения`;
      case 3:
        return 'Зарегистрируйтесь на сайте для доступа к нашей базе данных';
      default:
        return 0;
    }
  }

  return (
    <div className={cnStoryTelling()}>
      <Container maxWidth="md">
        <h2 className={cnStoryTelling('title')}>Ищете отзывы об арендодателе?</h2>

        <StoryTellingItem id={1} paragraph={`${getStepContent(0)}`} header={steps[0]}>
          <HouseIcon />
        </StoryTellingItem>

        <StoryTellingItem id={2} paragraph={`${getStepContent(1)}`} header={steps[1]}>
          <ManIcon />
        </StoryTellingItem>

        <StoryTellingItem id={3} paragraph={`${getStepContent(2)}`} header={steps[2]}>
          <WomanIcon />
        </StoryTellingItem>

        <StoryTellingItem id={4} paragraph={`${getStepContent(3)}`} header={steps[3]}>
          <PhoneIcon />
        </StoryTellingItem>
      </Container>
    </div>
  );
};

export default StoryTelling;
