import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
<<<<<<< HEAD
  background-color: ${({ theme }) => theme.colors.gray[500]};
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
=======
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
>>>>>>> 3300f9a (Feat: button 컴포넌트 폴더 내 CircleButton 파일 추가 및 일부 컴포넌트 스타일 theme 참조 방식으로 변경)
`;
