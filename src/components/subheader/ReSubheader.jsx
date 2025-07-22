import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfileBadgeList from '../badge-profile/ProfileBadgeList';
import EmojiBadge from '../badge-emoji/EmojiBadge';
import Button from '../button/Button';
import Picker from '@emoji-mart/react';
import { getReactionsForRecipient, createReaction } from '../../api/recipients';
import shareIcon from '../../assets/icon/ic_share.svg';
import emojiIcon from '../../assets/icon/ic_emoji.svg';
import arrowIcon from '../../assets/icon/ic_arrow_down.svg';

export const SubHeaderWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid #ededed;
  position: sticky;
  top: 0;
`;

const SubHeaderInner = styled.div`
  max-width: 1200px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 1248px) {
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 16px 24px;
    gap: 16px;
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

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
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
`;

const WriterText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: #ddd;
  margin: 0 8px;
`;

const EmojiGroupWrapper = styled.div`
  position: relative;
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
  transform: translateX(-50%); // ✅ 중앙 정렬
  width: 312px; // ✅ 고정된 크기 설정
  height: 134px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); // ✅ 4열 고정
  grid-template-rows: repeat(2, auto); // ✅ 2행 고정
  gap: 4px; // ✅ 이모지 간격 조정
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
  const { id, name, recentMessages, topReactions = [] } = data;

  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [reactions, setReactions] = useState(topReactions);
  const [loading, setLoading] = useState(false);

  // 컴포넌트 마운트 시 반응 데이터 로드
  useEffect(() => {
    loadReactions();
  }, [id]);

  const loadReactions = async () => {
    try {
      const reactionsData = await getReactionsForRecipient(id);
      if (reactionsData.results) {
        setReactions(reactionsData.results);
      }
    } catch (error) {
      console.error('반응 로드 실패:', error);
      // 실패 시 기본 데이터 사용
      setReactions(topReactions);
    }
  };

  const handleEmojiSelect = async (emoji) => {
    const newEmoji = emoji.native;
    setLoading(true);

    try {
      // API로 반응 추가
      await createReaction(id, { 
        emoji: newEmoji, 
        type: 'increase' 
      });
      
      // 로컬 상태 업데이트
      setReactions((prev) => {
        const exists = prev.find((r) => r.emoji === newEmoji);
        if (exists) {
          return prev.map((r) =>
            r.emoji === newEmoji
              ? { ...r, count: r.count + 1 }
              : r,
          );
        } else {
          return [...prev, { 
            emoji: newEmoji, 
            count: 1, 
            id: Date.now() // 임시 ID
          }];
        }
      });
      
      setIsPickerVisible(false);
    } catch (error) {
      console.error('반응 추가 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  // 반응을 개수 많은 순으로 정렬
  const sortedReactions = [...reactions].sort((a, b) => b.count - a.count);
  const displayReactions = sortedReactions.slice(0, 3);
  const dropdownReactions = sortedReactions.slice(0, 8);

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
              disabled={loading}
            >
              <img src={emojiIcon} alt="이모지 아이콘" />
              <span>{loading ? '추가중...' : '추가'}</span>
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

            <ShareButton variant="outlined" size="small">
              <img src={shareIcon} alt="공유 아이콘" />
            </ShareButton>
          </ButtonGroup>
        </RightGroup>
      </SubHeaderInner>
    </SubHeaderWrapper>
  );
}
