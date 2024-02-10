import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const setValue = (value) => {
    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [state, setValue];
};

export default useLocalStorage;
