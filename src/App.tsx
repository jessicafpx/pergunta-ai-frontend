import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';
import { DefaultContext } from './contexts/defaultContext';
import { AuthProvider } from './contexts/auth';

function App() {
  const [selectedTags, setSelectedTags] = useState([] as string[]);

  return (
    <AuthProvider>
      <DefaultContext.Provider
        value={{
          selectedTags, setSelectedTags
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
