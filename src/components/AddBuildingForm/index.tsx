import React, { FormEvent, useLayoutEffect, useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  Switch,
} from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone';

import Loader from '../../App/loader';
import realEstateApi from '../../utils/RealEstateApi';
import useInput from '../hooks/useInput';

import { cnAddBuildingForm } from './cn-building';

import './index.css';

export const AddBuildingForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorOverallFloor, setErrorOverallFloor] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const name = useInput('');
  const address = useInput('');
  const buildingType = useInput('');
  const overallSquare = useInput(10.0);
  const livingSquare = useInput(10.0);
  const kitchenSquare = useInput(10.0);
  const view = useInput('');
  const [decoration, setDecoration] = useState(false);
  const [balcony, setBalcony] = useState(false);

  const [inputState, setInputState] = useState({
    overallFloors: 3,
    floor: 2,
    buildingPhoto: '',
    open: false,
    files: [],
  });

  useLayoutEffect(() => {
    const isAdded = localStorage.getItem(`BuildingAdded`);
    if (isAdded) {
      setFormSubmit(true);
    }
  }, [formSubmit]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setErrorOverallFloor(false);

    realEstateApi
      .postData('api/v1/properties/', {
        body: {
          name: name.value,
          address: address.value,
          building_type: buildingType.value,
          overall_floors: inputState.overallFloors,
          floor: inputState.floor,
          overall_square: overallSquare.value,
          living_square: livingSquare.value,
          kitchen_square: kitchenSquare.value,
          view: view.value,
          decoration,
          balcony,
        },
      })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          setFormSubmit(true);
        }
        setError(true);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));

    setInputState({
      buildingPhoto: '',
      open: false,
      files: [],
      overallFloors: 3,
      floor: 2,
    });
  };

  const handleDecoration = () => {
    setDecoration((prevState) => !prevState);
  };
  const handleBalcony = () => {
    setBalcony((prevState) => !prevState);
  };
  const handleOverallFloor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({ ...inputState, overallFloors: (event.target.value as unknown) as number });
    if (+inputState.floor > +inputState.overallFloors) {
      return setErrorOverallFloor(true);
    }
    return setErrorOverallFloor(false);
  };
  const handleFloor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({ ...inputState, floor: (event.target.value as unknown) as number });
    if (+inputState.floor > +inputState.overallFloors) {
      return setErrorOverallFloor(true);
    }
    return setErrorOverallFloor(false);
  };
  const handleSavePhoto = (files: File[]): File[] => {
    return files;
  };

  return (
    <Container maxWidth="md">
      <h1>Добавьте недвижимость</h1>
      {formSubmit ? (
        <div>
          <h2>Спасибо за размещение объекта!</h2>
          <a href="/">
            <Button>ПЕРЕЙТИ НА ГЛАВНУЮ</Button>
          </a>
        </div>
      ) : (
        <div className={cnAddBuildingForm()}>
          {error && <h4 style={{ color: '#DC143C' }}>{error} Ошибка при отправке запроса</h4>}
          {loading ? (
            <Loader />
          ) : (
            <form onSubmit={handleSubmit}>
              <FormControl>
                <InputLabel htmlFor="name">Название объекта</InputLabel>
                <Input id="name" type="text" {...name} required aria-describedby="my-helper-text" />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel htmlFor="address">Адрес</InputLabel>
                <Input
                  id="address"
                  type="text"
                  {...address}
                  required
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel htmlFor="buildingType">Тип дома</InputLabel>
                <Input
                  id="buildingType"
                  type="text"
                  {...buildingType}
                  required
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <br />

              <FormControl>
                <Button
                  variant="outlined"
                  style={{ width: 110 }}
                  color="primary"
                  size="small"
                  onClick={() => setInputState({ ...inputState, open: true })}
                >
                  Добавить изображения
                </Button>
                <DropzoneDialog
                  clearOnUnmount
                  dialogTitle="Загрузить изображения"
                  dropzoneText="Загрузите изображения объекта"
                  open={inputState.open}
                  onSave={handleSavePhoto}
                  acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                  showPreviews
                  maxFileSize={5000000}
                  onClose={() => setInputState({ ...inputState, open: false })}
                />
              </FormControl>
              <br />

              <FormControl>
                <InputLabel htmlFor="OverallFloors">Общее кол-во этажей</InputLabel>
                <Input
                  id="OverallFloors"
                  type="number"
                  value={inputState.overallFloors}
                  onChange={handleOverallFloor}
                  error={errorOverallFloor}
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <br />

              <FormControl>
                <InputLabel htmlFor="Floor">Этаж</InputLabel>
                <Input
                  id="Floor"
                  type="number"
                  value={inputState.floor}
                  onChange={handleFloor}
                  required
                  aria-describedby="my-helper-text"
                />
              </FormControl>

              <br />

              <FormControl>
                <InputLabel htmlFor="overallSquare">Общая площадь в м2</InputLabel>
                <Input
                  id="overallSquare"
                  type="text"
                  {...overallSquare}
                  required
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <br />

              <FormControl>
                <InputLabel htmlFor="livingSquare">Жилая площадь в м2</InputLabel>
                <Input
                  id="livingSquare"
                  type="text"
                  {...livingSquare}
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <br />

              <FormControl>
                <InputLabel htmlFor="kitchenSquare">Кухонная площадь в м2</InputLabel>
                <Input
                  id="kitchenSquare"
                  type="text"
                  {...kitchenSquare}
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel htmlFor="view">Вид из окна</InputLabel>
                <Input id="view" type="text" {...view} aria-describedby="my-helper-text" />
              </FormControl>
              <br />

              <FormControl>
                <FormControlLabel
                  control={
                    <Switch color="primary" checked={decoration} onChange={handleDecoration} />
                  }
                  label="Отделка"
                  labelPlacement="end"
                />
                <FormControlLabel
                  control={<Switch color="primary" checked={balcony} onChange={handleBalcony} />}
                  label="Балкон или лоджия"
                  labelPlacement="end"
                />
              </FormControl>
              <br />
              <Button
                style={{ width: 150 }}
                variant="contained"
                size="medium"
                color="primary"
                type="submit"
              >
                Разместить объект
              </Button>
            </form>
          )}
        </div>
      )}
    </Container>
  );
};
