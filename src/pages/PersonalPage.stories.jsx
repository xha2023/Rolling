import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PersonalPage, { mockData } from './PersonalPage';
import Theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';

// eslint-disable-next-line no-undef
/* global jest */

export default {
  title: 'Pages/PersonalPage',
  component: PersonalPage,
  decorators: [
    (Story) => (
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BrowserRouter>
          <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            <Story />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

// Mock API 함수들
const mockAPI = {
  getRecipient: () => Promise.resolve(mockData),
  getMessageList: () =>
    Promise.resolve({
      results: mockData.recentMessages,
      next: null,
    }),
  deleteRecipient: () => Promise.resolve(),
  deleteMessage: () => Promise.resolve(),
};

// API 모킹
jest.mock('../api/recipients', () => mockAPI);
jest.mock('../api/messages', () => mockAPI);

export const Default = {
  args: {},
  parameters: {
    reactRouter: {
      routePath: '/post/:id',
      routeParams: { id: '12321' },
      location: { pathname: '/post/12321' },
    },
  },
};

export const EditMode = {
  args: {},
  parameters: {
    reactRouter: {
      routePath: '/post/:id/edit',
      routeParams: { id: '12321' },
      location: { pathname: '/post/12321/edit' },
    },
  },
};

export const WithManyMessages = {
  args: {},
  parameters: {
    reactRouter: {
      routePath: '/post/:id',
      routeParams: { id: '12321' },
      location: { pathname: '/post/12321' },
    },
  },
  beforeEach: () => {
    // 더 많은 메시지가 있는 상황 모킹
    const extendedMessages = [
      ...mockData.recentMessages,
      ...Array.from({ length: 20 }, (_, i) => ({
        id: 50000 + i,
        recipientId: 12321,
        sender: `사용자 ${i + 1}`,
        profileImageURL: `https://i.pravatar.cc/100?img=${(i % 70) + 1}`,
        relationship: ['친구', '동료', '가족', '지인'][i % 4],
        content: `이것은 테스트 메시지 ${i + 1}번입니다. 스토리북에서 무한 스크롤을 테스트하기 위한 더미 데이터입니다.`,
        font: 'Pretendard',
        createdAt: new Date(Date.now() - i * 1000 * 60 * 60).toISOString(),
      })),
    ];

    jest.doMock('../api/messages', () => ({
      ...mockAPI,
      getMessageList: (recipientId, options = {}) => {
        const { offset = 0, limit = 8 } = options;
        const start = offset;
        const end = start + limit;
        return Promise.resolve({
          results: extendedMessages.slice(start, end),
          next: end < extendedMessages.length ? `next-page-${end}` : null,
        });
      },
    }));
  },
};
