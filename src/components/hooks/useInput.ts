import React, { useState } from 'react';

type UseInputType = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function useInput(initialValue: string | number | null): UseInputType {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <UseInputType>{
    value,
    onChange,
  };
}
