import styled from 'styled-components';
import { listStyles, itemStyles } from './Dropdown.common.styled';

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  justify-content: flex-end;
`;

export const List = styled.ul`
  ${listStyles} /* 공통 스타일 적용 */
  width: 140px;
  min-width: max-content;
  overflow: hidden;
`;

export const Item = styled.li`
  ${itemStyles} /* 공통 스타일 적용 */
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px 16px;
  white-space: nowrap;
`;
