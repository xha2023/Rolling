import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createReaction, getReactionsForRecipient } from '../../api/recipients';

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

export default function Subheader({ data, totalWriters }) {
  const { name, writerProfiles = [] } = data;
  const { id: recipientId } = useParams();

  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [reactions, setReactions] = useState([]);
  const [lastSelectedEmoji, setLastSelectedEmoji] = useState(null);
  const [showToast, ToastComponent] = useToast();
  const [dropdownLimit, setDropdownLimit] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 720) {
        setDropdownLimit(6);
      } else {
        setDropdownLimit(8);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!recipientId) return;

    const fetchReactions = async () => {
      try {
        const result = await getReactionsForRecipient(recipientId);
        setReactions(result?.results || []);
      } catch (error) {
        console.error('이모지 불러오기 실패:', error);
      }
    };

    fetchReactions();
  }, [recipientId]);

  const handleEmojiSelect = async (emoji) => {
    const newEmoji = emoji.native;
    setLastSelectedEmoji(newEmoji);

    try {
      await createReaction(recipientId, { emoji: newEmoji, type: 'increase' });

      const updated = await getReactionsForRecipient(recipientId);
      setReactions(updated?.results || []);
    } catch (err) {
      console.error('이모지 전송 실패:', err);
    }

    setIsPickerVisible(false);
  };

  const sorted = [...reactions].sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    return a.lastUpdated - b.lastUpdated;
  });

  const displayReactions = sorted.slice(0, 3);
  const dropdownReactions = sorted.slice(0, dropdownLimit);

  // 카카오톡 공유 기능
  const handleKakaoShare = () => {
    console.log('🚀 카카오 공유 시작!');
    console.log('Kakao 객체:', window.Kakao);

    if (!window.Kakao) {
      console.error('❌ Kakao 없음');
      showToast('카카오 SDK 로드 실패');
      return;
    }

    if (!window.Kakao.isInitialized()) {
      console.error('❌ 초기화 안됨');
      showToast('카카오 SDK 초기화 안됨');
      return;
    }

    console.log('✅ 공유 실행!');

    try {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `${name}님의 롤링 페이퍼`,
          description: `${totalWriters || 0}명이 따뜻한 메시지를 남겼어요! 💌`,
          imageUrl: 'https://picsum.photos/800/400',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '메시지 확인하기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });

      console.log('🎉 공유 성공!');
    } catch (error) {
      console.error('❌ 공유 실패:', error);
      showToast('카카오톡 공유 실패');
    }
  };

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
        <NameRow>
          <NameText>To. {name}</NameText>
        </NameRow>

        <RightGroup>
          <ProfileList>
            {writerProfiles.slice(0, 3).map((user, index) => (
              <ProfileBadgeList
                key={index}
                imageUrl={user.profileImageURL}
                alt={user.sender}
              />
            ))}
            {writerProfiles.length > 3 && (
              <div className="more-count">+{writerProfiles.length - 3}</div>
            )}
          </ProfileList>

          <WriterText>{totalWriters}명이 작성했어요!</WriterText>
          <Divider className="firstDivider" />

          <EmojiAndButtonGroup>
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
          </EmojiAndButtonGroup>
        </RightGroup>
      </SubHeaderInner>

      {ToastComponent}
    </SubHeaderWrapper>
  );
}

// styled-components

const SubHeaderWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SubHeaderInner = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  margin: 0 auto;
  padding: 0 24px;
  @media (max-width: 360px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 104px;
    padding: 0 20px;
  }
`;

const NameRow = styled.div`
  @media (max-width: 360px) {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
  }
`;

const NameText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 360px) {
    width: 100%;
    height: 52px;
  }
`;

const ProfileList = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;

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
    display: none;
  }
`;

const WriterText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[500]};

  @media (max-width: 768px) {
    display: none;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: #ddd;
  margin: 0 8px;

  &.firstDivider {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const EmojiGroupWrapper = styled.div`
  position: relative;
`;

const EmojiGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 360px) {
    gap: 7px;
  }
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

  display: flex;
  flex-wrap: wrap;
  gap: 10px 5px;
  justify-content: center;
  align-content: center;

  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;

  @media (max-width: 720px) {
    width: 248px;
    height: 134px;
    gap: 13px 10px;
  }

  @media (max-width: 360px) {
    width: 203px;
    height: 98px;
    gap: 4px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;

  @media (max-width: 360px) {
    gap: 2px;
  }
`;

const EmojiButton = styled(Button)`
  width: 88px !important;
  min-width: 88px !important;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 360px) {
    width: 36px !important;
    min-width: 36px !important;
    height: 32px !important;

    span {
      display: none;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const ShareButton = styled(Button)`
  width: 56px !important;
  min-width: 56px !important;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 360px) {
    width: 36px !important;
    min-width: 36px !important;
    height: 32px !important;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const EmojiAndButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
