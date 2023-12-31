import React from 'react';

const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });
  console.log(state)

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state,setState]
};

export default useLocalStorage;
