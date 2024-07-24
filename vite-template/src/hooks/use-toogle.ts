import { useCallback, useState } from 'react';

// Hook
// Parameter is the boolean, with default "false" value
const useToggle = (initialState = false): [boolean, () => void] => {
  // Initialize the state
  const [state, setState] = useState<boolean>(initialState);

  // Define and memorize toggler function in case we pass down the component,
  // This function changes the boolean value to its opposite value
  const toggle = useCallback(() => setState(state => !state), []);

  return [state, toggle];
};

export default useToggle;
