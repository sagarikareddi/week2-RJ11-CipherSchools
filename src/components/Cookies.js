// using cookies in a React application to persist data between sessions:
// import React, { useState, useEffect } from 'react';
// import cookie from 'react-cookies';

// const useCookies = (key) => {
//   const [value, setValue] = useState(cookie.load(key));

//   useEffect(() => {
//     cookie.save(key, value, { path: '/' });
//   }, [key, value]);

//   return [value, setValue];
// };

// const App = () => {
//   const [count, setCount] = useCookies('count');

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// export default App;


// In this example, the useCookies hook is used to manage a state value (the count) that is stored in a cookie. When the state value is updated, the cookie is updated as well using the react-cookies library. When the component is rendered, the initial value of the state is set to the value of the cookie (if it exists).

//  you'll need to install the react-cookies library in order to use the code above

// npm install react-cookies