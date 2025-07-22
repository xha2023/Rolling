import styled from 'styled-components';

export const CardlistContainer = styled.div`
  /* 레이아웃 기본 설정 */
  width: 100%;
  max-width: 1200px; /* PC에서 최대 너비 */
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;

  /* Flexbox 설정 */
  display: flex;
  flex-wrap: wrap; /* 아이템이 컨테이너를 넘어가면 줄바꿈 */
  gap: 24px; /* 카드 사이의 간격 */
`;
