import React, { FormEvent, useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import realEstateApi from '../../utils/RealEstateApi';

import { cnReviewForm } from './cn-ReviewForm';

import './index.css';

const PLACEHOLDER = 'например, Гостиный двор';

type formState = {
  inputValue: string;
  buildingType: 'Residential' | 'Commercial' | unknown;
};

const Search: React.FC = () => {
  const [formState, setFormState] = useState<formState>({
    inputValue: '',
    buildingType: 'Residential',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setFormState({ ...formState, inputValue: value });
  };

  const handleBuildingTypeChange = (
    event: React.ChangeEvent<{ value: 'Residential' | 'Commercial' | unknown }>,
  ) => {
    setFormState({ ...formState, buildingType: event.target.value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    realEstateApi
      .postData(`reviews/${'tenant' || 'landlord'}`, {
        body: {
          title: 'title',
          description: 'description',
          rating: 5,
          buildingType: formState.buildingType,
          author: 'tenant' || 'landlord',
        },
      })
      .then(() => {
        setFormState({ ...formState, inputValue: '' });
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('запрос на создание не ушёл');
      });
  };

  return (
    <Container maxWidth="md">
      <h1>Оставьте отзыв об объекте недвижимости</h1>

      <form onSubmit={handleSubmit} className={cnReviewForm()}>
        <div className={cnReviewForm('formElement')}>
          <FormControl>
            <InputLabel htmlFor="search-input">Адрес, район или метро</InputLabel>
            <Input
              id="search-input"
              type="text"
              value={formState.inputValue}
              onChange={handleInputChange}
              placeholder={PLACEHOLDER}
            />
          </FormControl>
        </div>

        <div className={cnReviewForm('formElement')}>
          <InputLabel style={{ minWidth: '300px' }} id="select-house">
            Тип недвижимости
          </InputLabel>

          <Select
            autoWidth
            labelId="select-house"
            name="buildingType"
            value={formState.buildingType}
            onChange={handleBuildingTypeChange}
          >
            <MenuItem value="Residential">Жилая</MenuItem>
            <MenuItem value="Commercial">Коммерческая</MenuItem>
          </Select>
        </div>

        <Rating name="pristine" value={null} />

        <TextField
          style={{ marginTop: '22px' }}
          id="outlined-textarea"
          label="Текст отзыва"
          placeholder=""
          multiline
          variant="outlined"
        />

        <Button
          style={{ marginTop: '22px', width: 'min-content' }}
          variant="outlined"
          size="medium"
          color="primary"
          type="submit"
        >
          Опубликовать
        </Button>
      </form>
    </Container>
  );
};

export default Search;
