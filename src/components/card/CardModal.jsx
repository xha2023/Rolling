import React, { useEffect } from 'react';
import Badge from '../badge/TextBadge';
import styled from 'styled-components';
import defaultProfile from '../../assets/svg/default_profile.svg';

const CardModal = ({ card, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!card) return null;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
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
            <Badge label={card.relationship} />
          </HeaderInfo>
          <DateText>{new Date(card.createdAt).toLocaleDateString()}</DateText>
        </Header>

        <MessageContent>
          <MessageText dangerouslySetInnerHTML={{ __html: card.content }} />
        </MessageContent>
        <ButtonBox>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </ButtonBox>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CardModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 600px;
  height: 476px;
  padding: 40px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 500px;
    height: auto;
    padding: 24px;
  }
`;

const ButtonBox = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  bottom: 16px;
  /* margin: 0 auto; */
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #333;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ddd;
`;

const ProfileImage = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #888 0%, #666 100%);
  margin-right: 14px;
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
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 6px 0;
  color: #000000;
`;

const NameText = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

const MessageContent = styled.div`
  height: 280px;
  margin-bottom: 16px;
  overflow-y: auto;
  padding-right: 8px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const MessageText = styled.div`
  font-size: 18px;
  line-height: 28px;
  color: #4a4a4a;
  font-weight: 400;
  white-space: pre-wrap;
  word-break: break-word;
`;

const DateText = styled.div`
  font-size: 12px;
  color: #999999;
  font-weight: 400;
`;
