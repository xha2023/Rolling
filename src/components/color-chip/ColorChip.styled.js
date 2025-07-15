import styled from 'styled-components';

export const ChipWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 168px;
  border-radius: 16px;
  background: ${(props) =>
    props.backgroundType === 'image'
      ? `url(${props.imageSrc}) center/cover`
      : props.color};
  cursor: pointer;
`;
