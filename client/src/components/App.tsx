import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
function App() {
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
}

export default App;
