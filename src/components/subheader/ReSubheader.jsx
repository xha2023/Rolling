import React, { useState } from 'react';
import useToast from '../../hooks/useToast';
import styled from 'styled-components';
import ProfileBadgeList from '../badge-profile/ProfileBadgeList';
import EmojiBadge from '../badge-emoji/EmojiBadge';
import Menu from '../dropdown/Menu';
import Button from '../button/Button';
import Picker from '@emoji-mart/react';
import shareIcon from '../../assets/icon/ic_share.svg';
import emojiIcon from '../../assets/icon/ic_emoji.svg';
import arrowIcon from '../../assets/icon/ic_arrow_down.svg';

export const SubHeaderWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid #ededed;
`;

const SubHeaderInner = styled.div`
  max-width: 1200px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 24px;

  /* 모바일에서 높이 조정 */
  @media (max-width: 768px) {
    height: 60px;
    padding: 0 16px;
  }
`;

const NameText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  flex-shrink: 0; /* 크기 축소 방지 */

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0; /* 크기 축소 방지 */

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

const ProfileList = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  flex-shrink: 0; /* 크기 축소 방지 */

  .more-count {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1.5px solid #e3e3e3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-left: -12px;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .more-count {
      width: 24px;
      height: 24px;
      font-size: 10px;
    }
  }
`;

const WriterText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[500]};
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: #ddd;
  margin: 0 8px;
`;

const EmojiGroupWrapper = styled.div`
  position: relative;

  @media (max-width: 768px) {
    display: none; /* 모바일에서 이모지 그룹 숨김 */
  }
`;

const EmojiGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const EmojiDropdownButton = styled.button`
  background: none;
  border: none;
  padding: 0 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 312px;
  height: 134px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  justify-items: center;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;

  @media (max-width: 768px) {
    gap: 2px;
  }
`;

const EmojiButton = styled(Button)`
  width: 88px !important;
  min-width: 88px !important;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ShareButton = styled(Button)`
  width: 56px !important;
  min-width: 56px !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Subheader({ data }) {
  const { name, recentMessages } = data;

  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [reactions, setReactions] = useState([]);
  const [lastSelectedEmoji, setLastSelectedEmoji] = useState(null);

  const [showToast, ToastComponent] = useToast();

  const handleKakaoShare = () => {
    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `${name}님의 롤링 페이퍼`,
          description: `${recentMessages.length}명이 ${name}님에게 마음을 전했어요!`,
          imageUrl: 'https://rolling-paper.vercel.app/logo.png', // 실제 이미지 URL로 변경
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '롤링 페이퍼 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    } else {
      showToast('카카오 공유 기능을 사용할 수 없습니다.');
    }
  };

  const handleEmojiSelect = (emoji) => {
    const newEmoji = emoji.native;
    setLastSelectedEmoji(newEmoji);

    setReactions((prev) => {
      const now = Date.now();
      const exists = prev.find((r) => r.emoji === newEmoji);

      if (exists) {
        return prev.map((r) =>
          r.emoji === newEmoji
            ? { ...r, count: r.count + 1, lastUpdated: now }
            : r,
        );
      } else {
        return [...prev, { emoji: newEmoji, count: 1, lastUpdated: now }];
      }
    });

    setIsPickerVisible(false);
  };

  const sorted = [...reactions].sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    return a.lastUpdated - b.lastUpdated;
  });

  const displayReactions = sorted.slice(0, 3);
  const dropdownReactions = sorted.slice(0, 8);

  const shareMenuItems = [
    { label: '카카오톡 공유', handler: handleKakaoShare },
    {
      label: 'URL 공유',
      handler: () => {
        navigator.clipboard.writeText(window.location.href);
        showToast('URL이 복사되었습니다.');
      },
    },
  ];

  return (
    <SubHeaderWrapper>
      <SubHeaderInner>
        <NameText>To. {name}</NameText>

        <RightGroup>
          <ProfileList>
            {recentMessages.slice(0, 3).map((msg) => (
              <ProfileBadgeList
                key={msg.id}
                imageUrl={msg.profileImageURL}
                alt={msg.sender}
              />
            ))}
            {recentMessages.length > 3 && (
              <div className="more-count">+{recentMessages.length - 3}</div>
            )}
          </ProfileList>

          <WriterText>{recentMessages.length}명이 작성했어요!</WriterText>
          <Divider />

          <EmojiGroupWrapper>
            <EmojiGroup>
              {displayReactions.map((reaction) => (
                <EmojiBadge
                  key={reaction.emoji}
                  emoji={reaction.emoji}
                  count={reaction.count}
                />
              ))}

              <EmojiDropdownButton
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                <img src={arrowIcon} alt="더보기" />
              </EmojiDropdownButton>
            </EmojiGroup>

            {isDropdownOpen && (
              <DropdownWrapper>
                {dropdownReactions.map((reaction) => (
                  <EmojiBadge
                    key={reaction.emoji}
                    emoji={reaction.emoji}
                    count={reaction.count}
                  />
                ))}
              </DropdownWrapper>
            )}
          </EmojiGroupWrapper>

          <ButtonGroup>
            <EmojiButton
              variant="outlined"
              size="small"
              onClick={() => setIsPickerVisible((prev) => !prev)}
            >
              <img src={emojiIcon} alt="이모지 아이콘" />
              <span>추가</span>
            </EmojiButton>

            {isPickerVisible && (
              <div
                style={{
                  position: 'absolute',
                  top: '48px',
                  right: '0',
                  zIndex: 1000,
                }}
              >
                <Picker
                  onEmojiSelect={handleEmojiSelect}
                  theme="light"
                  previewPosition="none"
                  searchPosition="top"
                  skinTonePosition="none"
                />
              </div>
            )}

            <Divider />

            <Menu
              triggerText={
                <ShareButton variant="outlined" size="small">
                  <img src={shareIcon} alt="공유" />
                </ShareButton>
              }
              items={shareMenuItems}
            />
          </ButtonGroup>
        </RightGroup>
      </SubHeaderInner>

      {ToastComponent}
    </SubHeaderWrapper>
  );
}
