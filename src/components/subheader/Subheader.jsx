import React, { useState } from 'react';
import { FiShare } from 'react-icons/fi';

import {
  Container,
  ToText,
  Avatars,
  AvatarImage,
  MoreWriters,
  WritersText,
  ReactionBox,
  Reaction,
  RightSection,
  ActionButton,
  ShareButton,
  DropdownIcon,
  DropdownWrapper,
  DropdownReaction,
  ShareDropdown,
  ShareOption,
  ToastMessage,
} from './Subheader.styled.js';

// recentMessages: [
//     {
//       id: 24037,
//       recipientId: 12321,
//       sender: '프론트엔드',
//       profileImageURL: 'https://i.pravatar.cc/100?img=2',
//       relationship: '친구',
//       content: 'UI 작업',
//       font: 'Pretendard',
//       createdAt: '2025-07-17T22:35:59.934023Z',

const Subheader = ({
  data: { name: to, messageCount: totalWriters, recentMessages, topReactions },
  reactions: { results: reactions },
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleShare = () => {
    setIsShareOpen((prev) => !prev);
  };

  const handleCopyURL = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
    setIsShareOpen(false);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleKakaoShare = () => {
    alert('카카오톡 공유는 아직 연동되지 않았어요!');
    setIsShareOpen(false);
  };

  const avatars = recentMessages.map((message) => message.profileImageURL);

  const visibleAvatars = avatars.slice(0, 3);
  const remainingCount = totalWriters - visibleAvatars.length;

  return (
    <Container>
      <ToText>To. {to}</ToText>

      <RightSection>
        <Avatars>
          {visibleAvatars.map((src, index) => (
            <AvatarImage key={index} src={src} alt="avatar" />
          ))}
          {remainingCount > 0 && <MoreWriters>+{remainingCount}</MoreWriters>}
        </Avatars>

        <WritersText>{totalWriters}명이 작성했어요!</WritersText>

        <ReactionBox>
          {topReactions.map((reaction) => (
            <Reaction key={reaction.id}>
              {reaction.emoji} {reaction.count}
            </Reaction>
          ))}
          <DropdownIcon onClick={toggleDropdown}>▼</DropdownIcon>

          {isDropdownOpen && (
            <DropdownWrapper>
              {reactions.map((reaction) => (
                <DropdownReaction key={reaction.id}>
                  {reaction.emoji} {reaction.count}
                </DropdownReaction>
              ))}
            </DropdownWrapper>
          )}
        </ReactionBox>

        <ActionButton>추가</ActionButton>

        <div style={{ position: 'relative' }}>
          <ShareButton onClick={toggleShare}>
            <FiShare size={16} style={{ margin: '0 4px' }} />
          </ShareButton>
          {isShareOpen && (
            <ShareDropdown>
              <ShareOption onClick={handleKakaoShare}>
                📲 카카오톡 공유
              </ShareOption>
              <ShareOption onClick={handleCopyURL}>🔗 URL 복사</ShareOption>
            </ShareDropdown>
          )}
        </div>
      </RightSection>

      {showToast && <ToastMessage>✅ URL이 복사되었습니다</ToastMessage>}
    </Container>
  );
};

export default Subheader;
