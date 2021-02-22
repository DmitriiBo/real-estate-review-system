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
  const [FormState, setFormState] = useState({
    input: '',
    buildingType: 'forLiving',
    error: false,
  });

  // функция debounce, задержка перед проверкой данных
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounced = useCallback(
    debounce((e) => validateSearch(e), 2000),
    [],
  );

  const handleInputChange = (e: string) => {
    setFormState({ ...FormState, input: e });
    debounced(e);
  };

  const handleOtherFields = (e: string, formField: string) => {
    setFormState({ ...FormState, buildingType: e });
    console.log(e, formField);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (FormState.error) {
      return alert(`обнаружена ошибка ввода`);
    }
    setFormState({ ...FormState, input: '' });
    return alert(`Данные успешно отправлены ${JSON.stringify(FormState)}`);
  };

  // если ошибка в input
  if (FormState.error === true) {
    return (
      <Container>
        <h1>Узнайте больше об арендодателе</h1>
        <form onSubmit={handleSubmit} className={cnSearch()}>
          <div className={cnSearch('formBlockError')}>
            <FormControl>
              <InputLabel id="input-adress">Адрес, район или метро</InputLabel>
              <Input
                type="text"
                value={FormState.input}
                onChange={(event) => handleInputChange(event.target.value)}
                placeholder="введите правильные данные"
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
  }
  // если ошибок нет
  return (
    <Container>
      <h1>Узнайте больше об арендодателе</h1>
      <form onSubmit={handleSubmit} className={cnSearch()}>
        <div className={cnSearch('formBlock')}>
          <InputLabel id="input-adress">Адрес, район или метро</InputLabel>
          <Input
            type="text"
            value={FormState.input}
            onChange={(event) => handleInputChange(event.target.value)}
            placeholder="метро Гостиный двор"
            style={{ minWidth: '300px' }}
          />
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
