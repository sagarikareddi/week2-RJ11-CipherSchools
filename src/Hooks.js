// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//       <button
//         type="button"
//         onClick={() => setColor("red")}
//       >Red</button>
//       <button
//         type="button"
//         onClick={() => setColor("pink")}
//       >Pink</button>
//       <button
//         type="button"
//         onClick={() => setColor("green")}
//       >Green</button>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);

// useState
// import { useState } from "react";

// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return <h1>My favorite color is {color}!</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);

// Update State 
// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);

// What Can State Hold
// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Car() {
//   const [brand, setBrand] = useState("Ford");
//   const [model, setModel] = useState("Mustang");
//   const [year, setYear] = useState("1964");
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My {brand}</h1>
//       <p>
//         It is a {color} {model} from {year}.
//       </p>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);


// React useEffect Hooks
// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Counter />);


// React useContext Hook
// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");

//   return (
//     <>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 user={user} />
//     </>
//   );
// }

// function Component2({ user }) {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   );
// }

// function Component3({ user }) {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 user={user} />
//     </>
//   );
// }

// function Component4({ user }) {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 user={user} />
//     </>
//   );
// }

// function Component5({ user }) {
//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1 />);


// React useRef Hook 
// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// React useReducer Hook

// import { useReducer } from "react";
// import ReactDOM from "react-dom/client";

// const initialTodos = [
//   {
//     id: 1,
//     title: "Todo 1",
//     complete: false,
//   },
//   {
//     id: 2,
//     title: "Todo 2",
//     complete: false,
//   },
// ];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "COMPLETE":
//       return state.map((todo) => {
//         if (todo.id === action.id) {
//           return { ...todo, complete: !todo.complete };
//         } else {
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// };

// function Todos() {
//   const [todos, dispatch] = useReducer(reducer, initialTodos);

//   const handleComplete = (todo) => {
//     dispatch({ type: "COMPLETE", id: todo.id });
//   };

//   return (
//     <>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={todo.complete}
//               onChange={() => handleComplete(todo)}
//             />
//             {todo.title}
//           </label>
//         </div>
//       ))}
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Todos />);



// React useCallback Hook


// index.js

// import { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Todos from "./Todos";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <>
//       <Todos todos={todos} addTodo={addTodo} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// Todos.js

// import { memo } from "react";

// const Todos = ({ todos, addTodo }) => {
//   console.log("child render");
//   return (
//     <>
//       <h2>My Todos</h2>
//       {todos.map((todo, index) => {
//         return <p key={index}>{todo}</p>;
//       })}
//       <button onClick={addTodo}>Add Todo</button>
//     </>
//   );
// };

// export default memo(Todos);


// React useMemo Hook

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = expensiveCalculation(count);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);



// React Custom Hooks

// index.js:

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// const Home = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//  }, []);

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Home />);

