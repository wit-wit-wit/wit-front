import React, { useEffect } from 'react';
import '../../App.scss';
import styled from 'styled-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { WitMain } from 'app/containers/pages/WitMain';

const AppPage = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
`;

export const App = () => {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    const a = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(a);
    setScreenSize();
  });

  return (
    <AppPage>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/main' />} />
          <Route path='/main' element={<WitMain />} />
          {/*<Route path='/search' element={<Search />} />*/}
        </Routes>
      </BrowserRouter>
    </AppPage>
  );
};
