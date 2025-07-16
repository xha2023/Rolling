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

const Subheader = ({ to, avatars, totalWriters, reactions }) => {
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
          {reactions.slice(0, 3).map((reaction, idx) => (
            <Reaction key={idx}>
              {reaction.emoji} {reaction.count}
            </Reaction>
          ))}
          <DropdownIcon onClick={toggleDropdown}>▼</DropdownIcon>

          {isDropdownOpen && (
            <DropdownWrapper>
              {reactions.map((reaction, idx) => (
                <DropdownReaction key={idx}>
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
