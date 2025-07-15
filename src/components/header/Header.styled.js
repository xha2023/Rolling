import { styled } from 'styled-components';

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

export const Head = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #ededed;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02); */
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const CreateButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 6px;
  padding: 7px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #495057;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: '6px';
  outline: none;
  white-space: nowrap;
`;
