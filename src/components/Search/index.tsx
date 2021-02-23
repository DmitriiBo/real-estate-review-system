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

const Search: React.FC = () => {
  const [validationError, setValidationError] = useState(false);

  const [FormState, setFormState] = useState({
    input: '',
    buildingType: 'forLiving',
    error: false,
  });

  const validate = (inputValue: string) => {
    const isValid = validateSearch(inputValue);

    if (isValid === false) {
      setValidationError(true);
      setFormState({ ...FormState, input: inputValue, error: true });
    } else {
      setValidationError(false);
      setFormState({ ...FormState, input: inputValue, error: false });
    }
  };

  // функция debounce, задержка перед проверкой данных
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedInput = useCallback(
    debounce((inputValue) => validate(inputValue), 800),
    [],
  );

  const handleInputChange = (inputValue: string) => {
    setValidationError(false);
    setFormState({ ...FormState, input: inputValue });
    debouncedInput(inputValue);
  };

  const handleOtherFields = (inputValue: string, formField: string) => {
    setFormState({ ...FormState, buildingType: inputValue });
    console.log(inputValue, formField);
  };

  const handleSubmit = (inputValue: FormEvent) => {
    inputValue.preventDefault();
    if (FormState.error) {
      return console.log(`обнаружена ошибка ввода`);
    }
    setFormState({ ...FormState, input: '' });
    return console.log(`Данные успешно отправлены ${JSON.stringify(FormState)}`);
  };

  const getPlaceholder = () => {
    if (validationError) {
      return 'введите корректные данные';
    }

    return 'метро Гостиный двор';
  };

  // если ошибка в input
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
              onChange={(event) => handleInputChange(event.target.value)}
              placeholder={getPlaceholder()}
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
            onChange={(event) => handleOtherFields(event.target.value as string, 'buildingType')}
          >
            <MenuItem value="forLiving">Жилая</MenuItem>
            <MenuItem value="forWork">Коммерческая</MenuItem>
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
