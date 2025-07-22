import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  outline: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  /* 기본 상태 */
  background-color: ${({ theme }) => theme.colors.gray[500]};

  /* --- 💡 변경점: 상태별 스타일 추가 --- */

  /* hover, pressed, focused 상태 (활성화되었을 때만) */
  &:not(:disabled):hover,
  &:not(:disabled):active,
  &:not(:disabled):focus {
    background-color: ${({ theme }) => theme.colors.gray[600]};
  }

  /* disabled 상태 */
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[300]};
    cursor: not-allowed; /* 커서 모양 변경 */
  }

  img {
    width: 24px;
    height: 24px;
  }
`;
