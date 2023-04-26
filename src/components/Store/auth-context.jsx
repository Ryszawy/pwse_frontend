import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  // const authURL = import.meta.env.VITE_REACT_AUTH_URL;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    console.log(email.value, password.value)
    axios
      .post('http://localhost:5000/users/login', {
        email: email.value,
        password: password.value,
      })
      .then(function (response) {
        console.log(response.token);
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
