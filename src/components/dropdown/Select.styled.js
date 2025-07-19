import styled from 'styled-components';
import { listStyles, itemStyles } from './Dropdown.common.styled';

export const Wrapper = styled.div`
  position: relative;
  width: ${(props) => props.width || '320px'};
`;

export const List = styled.ul`
  ${listStyles}
`;

export const Item = styled.li`
  ${itemStyles}
`;
