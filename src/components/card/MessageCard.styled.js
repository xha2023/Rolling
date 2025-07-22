import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 384px;
  height: 280px;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  cursor: ${props => props.isClickable ? 'pointer' : 'default'};
  transition: all 0.2s ease;

  ${props => props.isClickable && `
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
    }
  `}

  @media (max-width: 1248px) {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 280px;
    padding: 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ddd;
`;

export const ProfileImage = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #888 0%, #666 100%);
  margin-right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    margin-right: 12px;
  }
`;

export const HeaderInfo = styled.div`
  flex: 1;
`;

export const FromText = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 6px 0;
  color: #000000;
`;

export const NameText = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

export const StatusBadge = styled.div`
  display: inline-block;
  background: #f8f0ff;
  color: #9935ff;
  padding: 0px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  /* margin-top: 6px; */
`;

export const MessageContent = styled.div`
  height: 106px;
  margin-bottom: 16px;
`;

export const MessageText = styled.p`
  width: 100%;
  height: 106px;
  overflow-y: auto;
  overflow-x: hidden;
  font-size: 18px;
  line-height: 28px;
  color: #4a4a4a;
  font-weight: 400;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    height: auto;
    min-height: 80px;
  }
`;

export const DateText = styled.div`
  font-size: 12px;
  color: #999999;
  font-weight: 400;
`;
