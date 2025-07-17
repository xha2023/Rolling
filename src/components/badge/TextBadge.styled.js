import styled from 'styled-components';

const getBadgeColor = (type, theme) => {
  switch (type) {
    case '지인':
      return '#FFF0D6';
    case '동료':
      return theme.colors.purple[100];
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
      return '#FF8832';
    case '동료':
      return toolbarheme.colors.purple[600];
    case '가족':
      return theme.colors.green[500];
    case '친구':
      return theme.colors.blue[500];
    default:
      return theme.colors.white;
  }
};

export const TextBadgeWrapper = styled.span`
  display: inline-block;
  padding: 0px 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  background-color: ${({ type, theme }) => getBadgeColor(type, theme)};
  color: ${({ type, theme }) => getTextColor(type, theme)};
`;
