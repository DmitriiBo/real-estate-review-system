import React, { FormEvent, useCallback, useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { debounce } from 'lodash';

import { mockReviews } from '../../mocks/review-mock-data';
import validateSearch from '../../utils/validation';
import LastReviewsCarousel from '../LastReviewsCarousel';

import { cnSearch } from './cn-Search';

import './index.css';

const VALIDATE_INPUT_DEBOUNCE_TIME = 800;
const PLACEHOLDER = 'метро Гостиный двор';

type formState = {
  inputValue: string;
  buildingType: 'Residential' | 'Commercial' | unknown;
};

const Search: React.FC = () => {
  const [validationError, setValidationError] = useState(false);

  const [formState, setFormState] = useState<formState>({
    inputValue: '',
    buildingType: 'Residential',
  });

  const validate = (inputValue: string) => {
    if (!inputValue) {
      return;
    }

    const isValid = validateSearch(inputValue);

    if (!isValid) {
      setValidationError(true);
    } else {
      setValidationError(false);
    }
  };

  // функция debounce, задержка перед проверкой данных
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedValidation = useCallback(
    debounce((inputValue) => validate(inputValue), VALIDATE_INPUT_DEBOUNCE_TIME),
    [],
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setValidationError(false);
    setFormState({ ...formState, inputValue: value });

    debouncedValidation(value);
  };

  const handleBuildingTypeChange = (
    event: React.ChangeEvent<{ value: 'Residential' | 'Commercial' | unknown }>,
  ) => {
    setFormState({ ...formState, buildingType: event.target.value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!formState.inputValue) {
      setValidationError(true);
      return;
    }

    if (validationError) {
      return;
    }

    console.log(`Данные успешно отправлены ${JSON.stringify(formState)}`);

    setFormState({ ...formState, inputValue: '' });
  };

  return (
    <Container maxWidth="md">
      <h1>Узнайте больше об арендодателе</h1>

      <form onSubmit={handleSubmit} className={cnSearch()}>
        <div className={cnSearch('formElement')}>
          <FormControl>
            <InputLabel htmlFor="search-input">Адрес, район или метро</InputLabel>
            <Input
              id="search-input"
              type="text"
              error={validationError}
              value={formState.inputValue}
              onChange={handleInputChange}
              placeholder={PLACEHOLDER}
            />

            {validationError && 'обнаружена ошибка ввода'}
          </FormControl>
        </div>

        <div className={cnSearch('formElement')}>
          <InputLabel id="select-house">Тип недвижимости</InputLabel>

          <Select
            labelId="select-house"
            name="buildingType"
            value={formState.buildingType}
            onChange={handleBuildingTypeChange}
          >
            <MenuItem value="Residential">Жилая</MenuItem>
            <MenuItem value="Commercial">Коммерческая</MenuItem>
          </Select>
        </div>

        <div style={{ marginTop: '22px' }}>
          <Button variant="outlined" size="medium" color="primary" type="submit">
            Найти
          </Button>
        </div>
      </form>
      <LastReviewsCarousel reviews={mockReviews} />
    </Container>
  );
};

export default Search;
