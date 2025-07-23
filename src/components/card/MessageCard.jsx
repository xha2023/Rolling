import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Button from '../button/Button.jsx';
import Badge from '../badge/TextBadge';
import defaultProfile from '../../assets/svg/default_profile.svg';
import { formatDate } from '../../utils/FormateDate.js';

import {
  CardContainer,
  Header,
  ProfileImage,
  HeaderInfo,
  FromText,
  NameText,
  MessageContent,
  MessageText,
  DateText,
} from './MessageCard.styled.js';

const MessageCard = forwardRef(
  (
    {
      messageId,
      profileImage,
      name = '김동훈',
      status = '동료',
      message = '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
      date = '2025.07.12',
      isEditing,
      onDelete,
      onClick,
      font,
    },
    ref,
  ) => {
    const formattedDate = formatDate(date);
    return (
      <CardContainer
        ref={ref}
        onClick={onClick}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      >
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
            <Badge label={status} />
          </HeaderInfo>
          {isEditing && (
            <DeleteCardButton
              onClick={(e) => {
                e.stopPropagation();
                onDelete(messageId);
              }}
              variant="icon"
            >
              <img src={binIcon} alt="공유" />
            </DeleteCardButton>
          )}
        </Header>

        <MessageContent>
          <MessageText
            $font={font}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        </MessageContent>

        <DateText>{formattedDate}</DateText>
      </CardContainer>
    );
  },
);

export default MessageCard;

const DeleteCardButton = styled(Button)`
  width: 40px;
  height: 40px;
`;
