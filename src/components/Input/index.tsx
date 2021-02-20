import React, { useState } from 'react';
import { Input as InputWithUI, InputLabel } from '@material-ui/core';

import { cnInput } from './cn-input';

import './index.css';

interface StandardProps {
  label?: string;
  placeholder: string;
  checking?: boolean;
}

const Input: React.FC<StandardProps> = ({ ...props }: StandardProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event: string) => {
    setInputValue(event);
  };

  if (props.label) {
    return (
      <div className={cnInput()}>
        <InputLabel>{props.label}</InputLabel>
        <InputWithUI
          value={inputValue as string}
          id={props.label}
          placeholder={props.placeholder}
          onChange={(event) => {
            handleInput(event.target.value);
          }}
        />
      </div>
    );
  }
  return (
    <div className={cnInput()}>
      <InputWithUI
        value={inputValue as string}
        id={`${Math.random()}`}
        placeholder={props.placeholder}
        onChange={(event) => {
          handleInput(event.target.value);
        }}
      />
    </div>
  );
};

Input.defaultProps = {
  label: '',
  checking: false,
};

export default Input;
