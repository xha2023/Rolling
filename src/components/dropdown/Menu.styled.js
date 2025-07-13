import styled from 'styled-components';
import { listStyles, itemStyles } from './Dropdown.common.styled';

export const Wrapper = styled.div`
  position: relative;
  width: 140px;
  display: flex;
  justify-content: flex-end;
`;

export const List = styled.ul`
  ${listStyles}/* 공통 스타일 적용 */
`;

export const Item = styled.li`
  ${itemStyles}/* 공통 스타일 적용 */
`;
