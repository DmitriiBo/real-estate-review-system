import React, { FormEvent, useState } from 'react';
import { Button, Container, Input, InputLabel, MenuItem, Select } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      maxWidth: 620,
      display: 'flex',
      flexDirection: 'row',
      flexBasis: '200px',
      justifyContent: 'center',
      background: '#33509926',
      borderRadius: '8px',
      fontStyle: 'white',
      padding: '10px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const InputMain: React.FC = () => {
  const [FormState, setFormState] = useState({
    input: '',
    houseType: 'studio',
    persons: '1 person',
  });
  const classes = useStyles();

  const handleChange = (e: string, formField: string) => {
    if (formField === 'input') {
      setFormState({ ...FormState, input: e });
    }
    if (formField === 'houseType') {
      setFormState({ ...FormState, houseType: e });
    } else {
      setFormState({ ...FormState, persons: e });
    }
    console.log(e, formField);
  };

  const handleInputChange = (e: string) => {
    setFormState({ ...FormState, input: e });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    console.log(FormState);
    setFormState({ ...FormState, input: '' });
    return alert(`Данные отправлены ${JSON.stringify(FormState)}`);
  };

  return (
    <Container>
      <h1>Ищете жилье?</h1>
      <form onSubmit={handleFormSubmit} className={classes.formControl}>
        <div style={{ width: 'auto', padding: '10px' }}>
          <InputLabel id="input-adress">Адрес</InputLabel>
          <Input
            type="text"
            value={FormState.input}
            onChange={(event) => handleInputChange(event.target.value)}
            placeholder="Введите адрес или фамилию арендодателя..."
          />
        </div>
        <div style={{ width: 'auto', padding: '10px' }}>
          <InputLabel id="select-house">Тип жилья</InputLabel>
          <Select
            labelId="select-house"
            name="houseType"
            value={FormState.houseType}
            onChange={(event) => handleChange(event.target.value as string, 'houseType')}
          >
            <MenuItem value="studio">Студия</MenuItem>
            <MenuItem value="oneRoom">Однокомнатная</MenuItem>
            <MenuItem value="twoRoom">2х комнатная</MenuItem>
          </Select>
        </div>
        <div style={{ width: 'auto', padding: '10px' }}>
          <InputLabel id="select-persons">Кол-во человек</InputLabel>
          <Select
            labelId="select-persons"
            value={FormState.persons}
            onChange={(event) => handleChange(event.target.value as string, 'persons')}
          >
            <MenuItem value="1 person">1 человек</MenuItem>
            <MenuItem value="2 person">2 человека</MenuItem>
            <MenuItem value="family">Семья</MenuItem>
          </Select>
          <Button variant="contained" color="primary" type="submit">
            Найти
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default InputMain;
