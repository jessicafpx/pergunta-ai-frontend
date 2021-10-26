import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';
import { DefaultContext } from './contexts/defaultContext';

function App() {
  const [avatar, setAvatar] = useState('avatar1');

  return (
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
  );
}

export default App;
