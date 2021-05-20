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
  titleValue: string;
  buildingType: 'Residential' | 'Commercial' | unknown;
  descriptionValue: string;
  ratingValue: number;
};

const Search: React.FC = () => {
  const [ratingValue, setRatingValue] = React.useState<number | null>(0);
  const [formState, setFormState] = useState<formState>({
    titleValue: '',
    buildingType: 'Residential',
    descriptionValue: '',
    ratingValue: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setFormState({ ...formState, titleValue: value });
  };
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setFormState({ ...formState, descriptionValue: value });
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
          title: formState.titleValue,
          description: formState.descriptionValue,
          rating: ratingValue,
          buildingType: formState.buildingType,
          reviewer: 1, // айдишник выбранной из списка недвижимости
          review_on: true,
        },
      })
      .then(() => {
        setFormState({ ...formState, titleValue: '', descriptionValue: '' });
        setRatingValue(0);
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
              value={formState.titleValue}
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

        {/* <div className={cnReviewForm('formElement')}>
          <InputLabel style={{ minWidth: '300px' }} id="adress">
            Выбрать адрес из списка
          </InputLabel>

          <Select
            autoWidth
            labelId="adress"
            name="adressList"
            value={formState.adressList}
            onChange={handleAdressListTypeChange}
          >
            { .map(() => <MenuItem value="Residential" key={}/> )}
          </Select>
        </div> */}

        <Rating
          onChange={(event, newRatingValue) => {
            setRatingValue(newRatingValue);
          }}
          name="pristine"
          value={ratingValue}
        />

        <TextField
          style={{ marginTop: '22px' }}
          id="outlined-textarea"
          label="Текст отзыва"
          placeholder=""
          multiline
          variant="outlined"
          value={formState.descriptionValue}
          onChange={handleDescriptionChange}
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
