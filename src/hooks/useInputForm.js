import { useState } from 'react';

export default function useInputForm(initialvalue = '') {
  const [state, setState] = useState(initialvalue);
  const handleChange = (e) => {
    setState(e.target.value);
  };
  return [state, handleChange];
}
