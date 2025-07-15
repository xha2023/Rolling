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
<<<<<<< HEAD
=======

export const CheckIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 50%;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
>>>>>>> 3300f9a (Feat: button 컴포넌트 폴더 내 CircleButton 파일 추가 및 일부 컴포넌트 스타일 theme 참조 방식으로 변경)
