import { useCallback, useState } from 'react';

export const useLocalStorage = (
  key: string,
  initialValue: Array<Rover> | Object = []
) => {
  const [state, setState] = useState(() => {
    try {
      // Get item from local storage
      const storedValue = localStorage.getItem(key);

      // Check if the value is already stored, if not return the initial value
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.log(error);

      // In case of error, it returns the initial value
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: Array<Rover> | Object) => {
      try {
        // Sets the state and the item in local storage
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    },
    [key]
  );

  return [state, setValue] as const;
};
