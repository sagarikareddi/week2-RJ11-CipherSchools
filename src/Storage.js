import React, { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const useSessionStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const App = () => {
  const [count, setCount] = useLocalStorage('count', 0);
  const [name, setName] = useSessionStorage('name', '');

  return (
    <div>
      <p>Count (local storage): {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
      <p>Name (session storage): {name}</p>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
};

export default App;


// In this example, useLocalStorage and useSessionStorage are custom hooks that manage a state value that is stored in either local storage or session storage. The hook uses the useState hook to manage the state value and the useEffect hook to update the storage when the state value changes. When the component is rendered, the initial value of the state is set to the value of the storage item (if it exists).

// Note that you need to be careful when using local storage and session storage in a production environment, as the data is stored on the client-side and can be accessed by malicious actors. Consider using encryption or another secure method to protect sensitive data.
