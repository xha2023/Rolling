import React from 'react';
import styled from 'styled-components';
import defaultProfile from '../../assets/svg/default_profile.svg';

const CardContainer = styled.div`
  width: 384px;
  height: 280px;
  margin: 20px auto;
  padding: 40px;
  /* background: linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%); */
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
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
    /* object-fit: cover; */
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

const StatusBadge = styled.div`
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

const MessageContent = styled.div`
  height: 106px;
  margin-bottom: 16px;
`;

const MessageText = styled.p`
  width: 100%;
  height: 106px;
  overflow-y: auto; /* 내용이 넘치면 세로 스크롤 */
  overflow-x: hidden;
  font-size: 18px;
  line-height: 28px;
  color: #4a4a4a;
  font-weight: 400;
`;

const DateText = styled.div`
  font-size: 12px;
  color: #999999;
  font-weight: 400;
`;

const MessageCard = ({
  profileImage,
  name = '김동훈',
  status = '동료',
  message = '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
  date = '2025.07.12',
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
      </Header>

      <MessageContent>
        <MessageText>{message}</MessageText>
      </MessageContent>

      <DateText>{date}</DateText>
    </CardContainer>
  );
};

export default MessageCard;
