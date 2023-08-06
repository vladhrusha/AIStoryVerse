import React, { FC } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' Component={Landing} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
