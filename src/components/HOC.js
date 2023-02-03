// import React from 'react';
// import withData from './withData';

// const MyComponent = ({ data }) => (
//   <ul>
//     {data.map(item => (
//       <li key={item.id}>{item.title}</li>
//     ))}
//   </ul>
// );

// export default withData(MyComponent);




// import React from 'react';

// const withData = (WrappedComponent) => {
//   return class WithData extends React.Component {
//     state = {
//       data: []
//     };

//     componentDidMount() {
//       // Fetch data from an API or some other source
//       fetch('https://api.example.com/data')
//         .then(response => response.json())
//         .then(data => this.setState({ data }));
//     }

//     render() {
//       return <WrappedComponent data={this.state.data} {...this.props} />;
//     }
//   };
// };

// export default withData;




// Authentication learning 
// import React, { useState } from 'react';

// const AuthContext = React.createContext({
//   isAuth: false,
//   login: () => {},
//   logout: () => {}
// });

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(() => {
//     return localStorage.getItem('isAuth') === 'true';
//   });

//   const login = () => {
//     localStorage.setItem('isAuth', 'true');
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.setItem('isAuth', 'false');
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuth: isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => {
//   const context = React.useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export { AuthProvider, useAuth };




// In this example, AuthContext is a React context that provides the state of the authentication (isAuth) and the functions to log in and log out (login and logout). AuthProvider is a component that provides the context to its children. The state of the authentication is stored in local storage so that it can persist across sessions.

// To use the authentication in your components, you can wrap your application with the AuthProvider and then use the useAuth hook in your components:


// import React from 'react';
// import { AuthProvider, useAuth } from './auth';

// const LoginPage = () => {
//   const { login } = useAuth();

//   return (
//     <div>
//       <h1>Login</h1>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// };

// const App = () => {
//   const { isAuth } = useAuth();

//   return (
//     <div>
//       {isAuth ? (
//         <p>You are logged in</p>
//       ) : (
//         <p>You are not logged in</p>
//       )}
//     </div>
//   );
// };

// export default () => (
//   <AuthProvider>
//     <App />
//   </AuthProvider>
// );



// In this example, the LoginPage component has a button that, when clicked, logs the user in by calling the login function from the useAuth hook. The App component uses the useAuth hook to display a message indicating whether the user is logged in or not.



// jwt authenticator 


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = React.createContext({
//   isAuth: false,
//   token: null,
//   userId: null,
//   login: () => {},
//   logout: () => {}
// });

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [token, setToken] = useState(null);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userId = localStorage.getItem('userId');
//     if (token && userId) {
//       setIsAuthenticated(true);
//       setToken(token);
//       setUserId(userId);
//     }
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const { data } = await axios.post('http://localhost:5000/api/auth/login', {
//         email,
//         password
//       });
//       const { token, userId } = data;
//       localStorage.setItem('token', token);
//       localStorage.setItem('userId', userId);
//       setIsAuthenticated(true);
//       setToken(token);
//       setUserId(userId);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userId');
//     setIsAuthenticated(false);
//     setToken(null);
//     setUserId(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ isAuth: isAuthenticated, token, userId, login, logout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => {
//   const context = React.useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export { AuthProvider, useAuth };


// In this example, AuthContext is a React context that provides the state of the authentication (isAuth, token, and userId) and the functions to log in and log out (login and logout). AuthProvider is a component that provides the context to its children. When the user logs in, the JWT token and the user ID are stored in local storage. When the application is started, the initial state of the authentication is set based on the values stored in local storage.

// To use the authentication in your components, you can wrap your application with the AuthProvider and then use the useAuth hook in your components:





// import React from 'react';
// import { AuthProvider, useAuth } from './auth';

// const LoginPage = () => {
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState()
// }


