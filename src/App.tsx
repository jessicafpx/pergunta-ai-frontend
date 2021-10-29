import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';
import { DefaultContext } from './contexts/defaultContext';
import { AuthProvider } from './contexts/auth';

function App() {
  const [avatar, setAvatar] = useState('avatar1');

  return (
    <AuthProvider>
      <DefaultContext.Provider
        value={{
          avatar,
          setAvatar
        }}>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </DefaultContext.Provider>
    </AuthProvider>
  );
}

export default App;
