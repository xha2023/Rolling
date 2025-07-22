import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button.jsx';
import defaultProfile from '../../assets/svg/default_profile.svg';
import {
  CardContainer,
  Header,
  ProfileImage,
  HeaderInfo,
  FromText,
  NameText,
  StatusBadge,
  MessageContent,
  MessageText,
  DateText,
} from './MessageCard.styled.js';

//삭제로직

const MessageCard = ({
  messageId,
  profileImage,
  name = '김동훈',
  status = '동료',
  message = '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
  date = '2025.07.12',
  isEditing,
  onDelete,
}) => {
  return (
    <CardContainer>
      <Header>
        <ProfileImage>
          {profileImage ? (
            <img src={profileImage} alt="Profile" />
          ) : (
            <img src={defaultProfile} alt="Profile" />
          )}
        </ProfileImage>
        <HeaderInfo>
          <FromText>
            From. <NameText>{name}</NameText>
          </FromText>
          <StatusBadge>{status}</StatusBadge>
        </HeaderInfo>
        {isEditing && (
          <Button onClick={() => onDelete(messageId)} variant="icon">
            🗑️
          </Button>
        )}
      </Header>

      <MessageContent>
        <MessageText dangerouslySetInnerHTML={{ __html: message }} />
      </MessageContent>

      <DateText>{date}</DateText>
    </CardContainer>
  );
};

export default MessageCard;
