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

export const CheckIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: #555555;
  border-radius: 50%;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
