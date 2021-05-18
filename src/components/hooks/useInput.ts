import React, { useState } from 'react';

type UseInputType = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function useInput(initialValue: string | number | boolean): UseInputType {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <UseInputType>{
    value,
    onChange,
  };
}
