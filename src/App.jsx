import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainHeader from './components/MainHeader/MainHeader';
import LandingPage from './pages/LandingPage';
import AuthContext from './components/Store/auth-context';
import Login from './pages/Login';

import classes from './App.module.css';
import Root from './pages/Root';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'login', element: <Login /> },
      {path: 'register', element: <Register />}
    ],
  },
]);

const App = () => {
  // const ctx = useContext(AuthContext);

  return <RouterProvider router={router}></RouterProvider>;

  // return (
  //   <React.Fragment>
  //     <MainHeader />
  //     <main>
  //       {!ctx.isLoggedIn && (
  //         <div className={classes.container}>
  //           <Login />
  //         </div>
  //       )}
  //       {ctx.isLoggedIn && <LandingPage />}
  //     </main>
  //   </React.Fragment>
  // );
};

export default App;
