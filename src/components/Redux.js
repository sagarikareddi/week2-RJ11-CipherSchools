// import React, { useReducer } from 'react';
// import { createStore } from 'redux';

// const initialState = {
//   count: 0,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer, initialState);

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>
//         Increment
//       </button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>
//         Decrement
//       </button>
//     </div>
//   );
// };

// export default App;



// In this example, the Redux store is created using the createStore function from the redux library. The store is initialized with the initialState and the reducer function, which defines how the state should be updated in response to actions.

// The useReducer hook is used to manage the state of the component and the dispatch function is used to dispatch actions to the store. When an action is dispatched, the reducer function is called to calculate the new state based on the action type.

// In this example, the component has two buttons that allow the user to increment or decrement the count in the state. When the buttons are clicked, actions are dispatched to the store to update the state. The updated state is then rendered to the screen.