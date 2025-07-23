import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  aspect-ratio: 48 / 35;
  overflow: hidden;
  width: 100%;
  flex: 1 1 0;

  /* 태블릿: 2열 */
  @media (max-width: 1024px) {
    flex-basis: calc(50% - 12px);
    max-width: 100%;
  }

  /* 모바일: 1열 */
  @media (max-width: 767px) {
    flex-basis: 100%;
    max-width: 100%;
  }
  padding: 24px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ddd;
`;

export const ProfileImage = styled.div`
  /* --- 💡 변경점: 크기를 유동적으로 변경 --- */
  width: clamp(40px, 8vw, 56px);
  height: clamp(40px, 8vw, 56px);
  border-radius: 50%;
  margin-right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0; /* 카드가 줄어들 때 이미지가 찌그러지지 않도록 방지 */

  img {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderInfo = styled.div`
  flex: 1;
`;

export const FromText = styled.h2`
  /* --- 💡 변경점: clamp()로 폰트 크기 조절 --- */
  font-size: clamp(16px, 2.5vw, 20px);
  font-weight: 400;
  margin: 0 0 6px 0;
  color: #000000;
`;

export const NameText = styled.span`
  /* --- 💡 변경점: clamp()로 폰트 크기 조절 --- */
  font-size: clamp(16px, 2.5vw, 20px);
  font-weight: 700;
  color: #000000;
`;

const getBadgeColor = ($status) => {
  switch ($status) {
    case '동료':
      return '#4a90e2';
    case '친구':
      return '#50e3c2';
    case '가족':
      return '#f5a623';
    case '지인':
      return '#9013fe';
    default:
      return '#999999';
  }
};

const getBadgeTextColor = ($status) => {
  switch ($status) {
    case '동료':
      return '#ffffff';
    case '친구':
      return '#ffffff';
    case '가족':
      return '#ffffff';
    case '지인':
      return '#ffffff';
    default:
      return '#000000';
  }
};

export const StatusBadge = styled.div`
  display: inline-block;
  background: ${(props) => {
    return getBadgeColor(props.$status);
  }};
  color: ${(props) => getBadgeTextColor(props.$status)};

  padding: 0px 8px;
  border-radius: 4px;
  font-size: clamp(12px, 1.5vw, 14px);
  font-weight: 400;
  line-height: 20px;
`;

export const MessageContent = styled.div`
  /* --- 💡 변경점: 고정 높이 제거 --- */
  /* height: 106px; */
  flex-grow: 1; /* 남는 공간을 모두 차지하도록 설정 */
  overflow: hidden; /* 내부 MessageText의 스크롤이 보이도록 */
  margin-bottom: 16px;
`;

export const MessageText = styled.p`
  width: 100%;
  height: 100%; /* 부모(MessageContent)의 높이를 따름 */
  overflow-y: auto;
  overflow-x: hidden;
  font-weight: 400;
  color: #4a4a4a;
  font-family: ${(props) => props.$font};

  /* --- 💡 변경점: clamp()로 폰트 및 줄 간격 조절 --- */
  font-size: clamp(14px, 2vw, 18px);
  line-height: clamp(22px, 3vw, 28px);
`;

export const DateText = styled.div`
  font-weight: 400;
  color: #999999;

  /* --- 💡 변경점: clamp()로 폰트 크기 조절 --- */
  font-size: clamp(10px, 1.5vw, 12px);
`;
