import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid #ededed;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const HeaderInner = styled.div`
  max-width: 1200px;
  height: 64px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
