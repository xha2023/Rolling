import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #e9ecef;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 106px;
  height: 30px;

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
