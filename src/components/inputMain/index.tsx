import React, { FormEvent, useState } from 'react';

const InputMain: React.FC = () => {
  const [FormState, setFormState] = useState({
    input: '',
    houseType: '',
    persons: '1',
  });

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
    <div className="form-main-group">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={FormState.input}
          onChange={(event) => handleInputChange(event.target.value)}
          placeholder="Введите адрес или фамилию арендодателя..."
        />
        <select
          name="houseType"
          onChange={(event) => handleChange(event.target.value, 'houseType')}
        >
          <option defaultValue="empty">выберите</option>
          <option value="studio">Студия</option>
          <option value="oneRoom">Однокомнатная</option>
          <option value="twoRoom">2х комнатная</option>
        </select>
        <select onChange={(event) => handleChange(event.target.value, 'persons')}>
          <option defaultValue="1 person">1</option>
          <option value="2 person">2</option>
          <option value="family">Семья</option>
        </select>
        <button type="submit">Найти</button>
      </form>
    </div>
  );
};

export default InputMain;
