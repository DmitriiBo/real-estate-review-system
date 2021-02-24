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

import validateSearch from '../../utils/validation';

import { cnSearch } from './cn-Search';

import './index.css';

const VALIDATE_INPUT_DEBOUNCE_TIME = 800;
const PLACEHOLDER = 'метро Гостиный двор';

const Search: React.FC = () => {
  const [validationError, setValidationError] = useState(false);

  const [FormState, setFormState] = useState({
    input: '',
    buildingType: 'Residental',
  });

  const validate = (inputValue: string) => {
    const isValid = validateSearch(inputValue);

    if (isValid === false) {
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValidationError(false);
    setFormState({ ...FormState, input: event.target.value });
    debouncedValidation(event.target.value);
  };

  const handleBuildingTypeChange = (event: React.ChangeEvent<{ value: string | unknown }>) => {
    setFormState({ ...FormState, buildingType: event.target.value as string });
    console.log(event);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (validationError) {
      console.log(`обнаружена ошибка ввода`);
    }
    setFormState({ ...FormState, input: '' });
    console.log(`Данные успешно отправлены ${JSON.stringify(FormState)}`);
  };

  return (
    <Container>
      <h1>Узнайте больше об арендодателе</h1>
      <form onSubmit={handleSubmit} className={cnSearch()}>
        <div className={cnSearch('formBlock')}>
          <FormControl>
            <InputLabel id="input-adress">Адрес, район или метро</InputLabel>
            <Input
              type="text"
              error={validationError}
              value={FormState.input}
              onChange={handleInputChange}
              placeholder={PLACEHOLDER}
              style={{ minWidth: '300px' }}
            />
          </FormControl>
        </div>

        <div className={cnSearch('formBlock')}>
          <InputLabel id="select-house">Тип недвижимости</InputLabel>
          <Select
            labelId="select-house"
            name="buildingType"
            value={FormState.buildingType}
            onChange={handleBuildingTypeChange}
          >
            <MenuItem value="Residental">Жилая</MenuItem>
            <MenuItem value="Commercial">Коммерческая</MenuItem>
          </Select>
        </div>
        <div style={{ marginTop: '22px' }}>
          <Button variant="outlined" size="medium" color="primary" type="submit">
            Найти
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Search;
