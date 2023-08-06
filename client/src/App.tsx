import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Landing from './components/Landing';
import Header from './components/Header';
import getTheme from './utils/theme';

const theme = getTheme();

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path='/' Component={Landing} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
