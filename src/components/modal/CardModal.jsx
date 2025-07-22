import React, { useEffect } from 'react';
import styled from 'styled-components';
import defaultProfile from '../../assets/svg/default_profile.svg';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const CardContainer = styled.div`
  padding: 60px 40px 40px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #888 0%, #666 100%);
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeaderInfo = styled.div`
  flex: 1;
`;

const FromText = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 8px 0;
  color: #000000;
`;

const NameText = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
`;

const StatusBadge = styled.div`
  display: inline-block;
  background: #f8f0ff;
  color: #9935ff;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const MessageContent = styled.div`
  min-height: 150px;
  margin-bottom: 24px;
`;

const MessageText = styled.p`
  font-size: 20px;
  line-height: 32px;
  color: #4a4a4a;
  font-weight: 400;
  margin: 0;
  white-space: pre-wrap;
`;

const DateText = styled.div`
  font-size: 14px;
  color: #999999;
  font-weight: 400;
  text-align: right;
`;

const CardModal = ({ card, onClose }) => {
  if (!card) return null;

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  // 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\. /g, '.').replace(/\.$/, '');
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <CardContainer>
          <Header>
            <ProfileImage>
              {card.profileImageURL ? (
                <img src={card.profileImageURL} alt="Profile" />
              ) : (
                <img src={defaultProfile} alt="Profile" />
              )}
            </ProfileImage>
            <HeaderInfo>
              <FromText>
                From. <NameText>{card.sender}</NameText>
              </FromText>
              <StatusBadge>{card.relationship}</StatusBadge>
            </HeaderInfo>
          </Header>

          <MessageContent>
            <MessageText>{card.content}</MessageText>
          </MessageContent>

          <DateText>{formatDate(card.createdAt)}</DateText>
        </CardContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CardModal;
