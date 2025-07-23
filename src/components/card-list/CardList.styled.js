import styled from 'styled-components';

export const CardlistContainer = styled.div`
  /* 레이아웃 기본 설정 */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  /* Flexbox 설정
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
  @media (max-width: 1248px) {
    padding: 0 24px;
  }

  @media (max-width: 767px) {
    padding: 0 24px;
  } */

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  /* 태블릿 */
  @media (max-width: 1248px) {
    padding: 0 24px;
    grid-template-columns: repeat(2, 1fr);
  }

  /* 모바일 */
  @media (max-width: 767px) {
    padding: 0 24px;
    grid-template-columns: repeat(1, 1fr);
  }
`;
