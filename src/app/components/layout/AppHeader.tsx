import React from 'react';
import { useThemeStore } from '../../../store/theme';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  padding: 0 0.125rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--main-gray);
`;

const LogoWrapper = styled.div`
  width: 50%;

  span {
    font-size: 2rem;
  }

  small {
    font-size: 1rem;
  }
`;
const Initial = styled.span`
  color: var(--main-green);
  font-size: 3rem !important;
`;

const ThemeWrapper = styled.div`
  width: 23%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    margin-bottom: 0 !important;
  }
`;
export const AppHeader = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Initial>W</Initial>
        <span>it</span> <small> where is there </small>
      </LogoWrapper>

      <ThemeWrapper>
        {/* <legend>{theme}</legend> */}
        {/* <label htmlFor='switch'> */}
        {/*   <input */}
        {/*     type='checkbox' */}
        {/*     id='switch' */}
        {/*     name='switch' */}
        {/*     role='switch' */}
        {/*     onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} */}
        {/*   /> */}
        {/* </label> */}
      </ThemeWrapper>
    </HeaderWrapper>
  );
};
