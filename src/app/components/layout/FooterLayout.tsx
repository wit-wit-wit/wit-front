import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  background-color: white;
  bottom: 0;
  z-index: 999;
`;

const FooterButton = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterLayout = () => {
  return (
    <FooterWrapper>
      <FooterButton>
        <span>주변</span>
      </FooterButton>
      <FooterButton>
        <span>대중교통</span>
      </FooterButton>
      <FooterButton>
        <span>길찾기</span>
      </FooterButton>
      <FooterButton>
        <span>MY</span>
      </FooterButton>
    </FooterWrapper>
  );
};
