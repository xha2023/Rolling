import { css } from 'styled-components';

export const listStyles = css`
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  margin-top: 4px; /* 트리거와의 간격 */
  list-style: none;
  padding: 10px 1px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  background: white;
  z-index: 10;
  width: 100%;
`;

export const itemStyles = css`
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;
