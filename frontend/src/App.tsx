import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global'
import { GlobalContext } from './context/global.context';
import Home from './pages/Home';

function App() {

  const { contextTheme } = useContext(GlobalContext)
  
  return (
    <div className="App">
      <ThemeProvider theme={contextTheme}>
        <GlobalStyles />
        <Home/>

      </ThemeProvider>
    </div>
  );
}

export default App;
