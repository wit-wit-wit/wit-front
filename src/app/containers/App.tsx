import React, { useEffect } from 'react';
import '../../App.css';
import '@picocss/pico';
import { useThemeStore } from '../../store/theme';

export const App = () => {
  const { setTheme } = useThemeStore();

  // height: calc(var(--vh, 1vh) * 100 + 66px);

  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <div style={{ width: '100%', height: 'calc(var(--vh, 1vh) * 100)' }}>
      <button onClick={() => setTheme('light')}></button>
      <button onClick={() => setTheme('dark')}></button>
    </div>
  );
};
