import React from 'react';
import CardList from '../components/cardlist/CardList';
import Subheader from '../components/subheader/subheader';

const mockData = {
  id: 12321,
  name: '다다다',
  backgroundColor: 'purple',
  backgroundImageURL: null,
  createdAt: '2025-07-15T05:55:48.289484Z',
  messageCount: 6,
  recentMessages: [
    {
      id: 24037,
      recipientId: 12321,
      sender: '프론트엔드',
      profileImageURL: 'https://i.pravatar.cc/100?img=2',
      relationship: '친구',
      content: 'UI 작업',
      font: 'Pretendard',
      createdAt: '2025-07-17T22:35:59.934023Z',
    },
    {
      id: 24036,
      recipientId: 12321,
      sender: '프론트엔드',
      profileImageURL: 'https://i.pravatar.cc/100?img=1',
      relationship: '친구',
      content: 'UI 작업',
      font: 'Pretendard',
      createdAt: '2025-07-17T22:33:37.395777Z',
    },
    {
      id: 23994,
      recipientId: 12321,
      sender: '프론트엔드 동료',
      profileImageURL: 'https://i.pravatar.cc/100?img=1',
      relationship: '동료',
      content: 'UI 작업하시느라 고생 많으셨습니다!',
      font: 'Pretendard',
      createdAt: '2025-07-15T06:22:42.602462Z',
    },
  ],
  reactionCount: 26,
  topReactions: [
    {
      id: 12863,
      emoji: '🤓',
      count: 13,
    },
    {
      id: 12864,
      emoji: '🥲',
      count: 4,
    },
    {
      id: 12861,
      emoji: '😍',
      count: 4,
    },
  ],
};

const mockReactions = {
  count: 6,
  next: null,
  previous: null,
  results: [
    {
      id: 12863,
      emoji: '🤓',
      count: 13,
    },
    {
      id: 12864,
      emoji: '🥲',
      count: 4,
    },
    {
      id: 12861,
      emoji: '😍',
      count: 4,
    },
    {
      id: 12865,
      emoji: '🫡',
      count: 2,
    },
    {
      id: 12862,
      emoji: '😃',
      count: 2,
    },
    {
      id: 12860,
      emoji: 'string',
      count: 1,
    },
  ],
};

const messages = mockData.recentMessages;

const PersonalPage = () => {
  return (
    <>
      <Subheader data={mockData} reactions={mockReactions} />
      <CardList messages={messages}></CardList>
    </>
  );
};

export default PersonalPage;
