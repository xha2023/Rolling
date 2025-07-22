import styled from 'styled-components';

export const CardlistContainer = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  padding: 0 24px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 28px 24px;

  @media (max-width: 1248px) {
    padding: 0 24px;
    
    /* 카드 너비 반응형 조정 */
    & > * {
      flex: 0 0 calc(50% - 12px);
      max-width: calc(50% - 12px);
    }
  }

  @media (max-width: 768px) {
    gap: 20px 16px;
    
    & > * {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  color: #666;
  font-size: 16px;
`;

export const NoMoreContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  color: #999;
  font-size: 14px;
`;
