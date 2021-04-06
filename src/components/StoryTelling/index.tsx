import React from 'react';
import Container from '@material-ui/core/Container';

import { HouseIcon } from './assets/HouseIcon';
import { ManIcon } from './assets/ManIcon';
import { PhoneIcon } from './assets/PhoneIcon';
import { WomanIcon } from './assets/WomanIcon';
import { cnStoryTelling } from './cn-StoryTelling';

import './index.css';

type StoryTellingProps = {
  isLogged: boolean;
};

const StoryTelling: React.FunctionComponent<StoryTellingProps> = (isLogged) => {
  function getSteps() {
    return [
      'Воспользуйтесь нашим сайтом',
      'Получите все отзывы об арендодателе',
      'Примите взвешенное решение!',
      'Выбирайте лучшее',
    ];
  }

  const steps = getSteps();

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
    isLogged && (
      <div className={cnStoryTelling()}>
        <Container>
          <h2 className={cnStoryTelling('title')}>Ищете отзывы об арендодателе?</h2>
          <div className={cnStoryTelling('leftdiv')}>
            <h3 className={cnStoryTelling('headers')}>{steps[0]}</h3>
            <p className={cnStoryTelling('paragraph')}>{getStepContent(0)}</p>
            <HouseIcon />
          </div>

          <div className={cnStoryTelling('rightdiv')}>
            <h3 className={cnStoryTelling('headers')}>{steps[1]}</h3>
            <p
              className={cnStoryTelling('paragraph_right')}
              // className={cnStoryTelling('paragraph')} как добавить мод к эл?
            >
              {getStepContent(1)}
            </p>
            <ManIcon />
          </div>

          <div className={cnStoryTelling('leftdiv')}>
            <h3 className={cnStoryTelling('headers')}>{steps[2]}</h3>
            <p className={cnStoryTelling('paragraph')}>{getStepContent(2)}</p>
            <WomanIcon />
          </div>

          <div className={cnStoryTelling('rightdiv')}>
            <h3 className={cnStoryTelling('headers')}>{steps[3]}</h3>
            <p className={cnStoryTelling('paragraph')}>{getStepContent(3)}</p>
            <PhoneIcon />
          </div>
        </Container>
      </div>
    )
  );
};

export default StoryTelling;
