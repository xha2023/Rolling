import styled from 'styled-components';

export const EmojiBadgeWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  gap: 6px;
  padding: 6px 0;
  border-radius: 999px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
`;

export const Emoji = styled.span`
  font-size: 18px;
`;

export const Count = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;
