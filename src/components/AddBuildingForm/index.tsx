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

// type PhotoFiles = {
//   File: {
//     lastModified: number;
//     lastModifiedDate: Date;
//     name: string;
//     path: string;
//     size: number;
//     type: string;
//     webkitRelativePath: string;
//   };
// };

export const AddBuildingForm: React.FC = () => {
  const [inputState, setInputState] = useState({
    buildingPhoto: '',
    open: false,
    files: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const name = useInput('');
  const address = useInput('');
  const buildingType = useInput('');
  const overallFloors = useInput(1);
  const floor = useInput(2);
  const overallSquare = useInput(10.0);
  const livingSquare = useInput(10.0);
  const kitchenSquare = useInput(10.0);
  const view = useInput('');
  const [decoration, setDecoration] = useState(false);
  const [balcony, setBalcony] = useState(false);

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

    realEstateApi
      .postData('api/v1/properties/', {
        body: {
          name: name.value,
          address: address.value,
          building_type: buildingType.value,
          overall_floors: overallFloors.value,
          floor: floor.value,
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
    });
  };

  const handleDecoration = () => {
    setDecoration((prevState) => !prevState);
  };
  const handleBalcony = () => {
    setBalcony((prevState) => !prevState);
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
                  type="text"
                  {...overallFloors}
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <br />

              <FormControl>
                <InputLabel htmlFor="Floor">Этаж</InputLabel>
                <Input
                  id="Floor"
                  type="text"
                  {...floor}
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
