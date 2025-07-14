import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const HeaderButton = styled.button`
  width: 157px;
  height: 42px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
  cursor: pointer;
`;
