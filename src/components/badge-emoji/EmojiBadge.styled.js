import styled from 'styled-components';

export const EmojiBadgeWrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 16px;
  gap: 2px;
  background-color: ${({ theme }) => rgba(theme.colors.black, 0.5)};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  cursor: pointer;
`;
