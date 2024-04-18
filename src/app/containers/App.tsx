import React, { useEffect } from 'react';
import '../../App.scss';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
    setScreenSize();
  });

  return (
    <AppPage>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WitMain />} />
          {/*<Route path='/search' element={<SearchLayout />} />*/}
        </Routes>
      </BrowserRouter>
    </AppPage>
  );
};
