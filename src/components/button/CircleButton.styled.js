import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray[500]};
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;
