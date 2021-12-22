import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global'
import { GlobalContext } from './context/global.context';

function App() {

  const { contextTheme } = useContext(GlobalContext)
  
  return (
    <div className="App">
      <ThemeProvider theme={contextTheme}>
        <GlobalStyles />
        <h1>teste de inte</h1>

      </ThemeProvider>
    </div>
  );
}

export default App;
