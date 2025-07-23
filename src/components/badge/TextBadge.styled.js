import styled from 'styled-components';

const getBadgeColor = (type, theme) => {
  switch (type) {
    case '지인':
      return theme.colors.secondary[100];
    case '동료':
      return theme.colors.primary[100];
    case '가족':
      return theme.colors.green[100];
    case '친구':
      return theme.colors.blue[100];
    default:
      return theme.colors.gray[100];
  }
};

const getTextColor = (type, theme) => {
  switch (type) {
    case '지인':
      return theme.colors.secondary[500];
    case '동료':
      return theme.colors.primary[600];
    case '가족':
      return theme.colors.green[500];
    case '친구':
      return theme.colors.blue[500];
    default:
      return theme.colors.white;
  }
};

export const TextBadgeWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 20px;
  padding: 0 8px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  border-radius: 4px;
  background-color: ${({ type, theme }) => getBadgeColor(type, theme)};
  color: ${({ type, theme }) => getTextColor(type, theme)};
`;
