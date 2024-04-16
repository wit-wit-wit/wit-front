import React from 'react';
import '../../App.css';
import '@picocss/pico';
import { useThemeStore } from '../../store/theme';

export const App = () => {
  const { setTheme } = useThemeStore();
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <button onClick={() => setTheme('light')}></button>
      <button onClick={() => setTheme('dark')}></button>
    </div>
  );
};
