import { useState } from 'react';

function useDeehk(initialvalue = false) {
  const [state, setState] = useState(initialvalue);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}

export default useDeehk;
