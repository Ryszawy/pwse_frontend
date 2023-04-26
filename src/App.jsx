import React, { useContext } from 'react';

import MainHeader from './components/MainHeader/MainHeader';
import LandingPage from './pages/LandingPage';
import AuthContext from './components/Store/auth-context';
import Login from './pages/Login';

import classes from './App.module.css';

const App = () => {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && (
          <div className={classes.container}>
            <Login />
          </div>
        )}
        {ctx.isLoggedIn && <LandingPage />}
      </main>
    </React.Fragment>
  );
};

export default App;
