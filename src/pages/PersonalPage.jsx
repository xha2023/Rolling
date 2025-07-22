import { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import CardList from '../components/card-list/CardList';
import Subheader from '../components/subheader/ReSubheader';
import Button from '../components/button/Button';
import CardModal from '../components/modal/CardModal';
import useMutation from '../hooks/useMutation';
import { deleteRecipient, getRecipient } from '../api/recipients';
import { deleteMessage, getMessageList } from '../api/messages';

export const mockData = {
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
    {
      id: 23345,
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

const PersonalPage = () => {
  const location = useLocation();
  const { id: recipientId } = useParams();
  const navigate = useNavigate();
  
  // 상태 관리
  const [recipientData, setRecipientData] = useState(mockData);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  
  const limit = 8; // 한 번에 불러올 메시지 수
  
  //현재 url이 '/edit'으로 끝나는지 확인
  const isEditing = location.pathname.endsWith('/edit');

  // 초기 데이터 로드
  useEffect(() => {
    loadInitialData();
  }, [recipientId]);

  const loadInitialData = async () => {
    try {
      setLoading(true);
      // 받는 사람 정보 조회
      const recipient = await getRecipient(recipientId);
      setRecipientData(recipient);
      
      // 메시지 목록 조회 (최신순)
      const messageData = await getMessageList(recipientId, { 
        limit, 
        offset: 0,
        sort: '-createdAt' // 최신순 정렬
      });
      
      setMessages(messageData.results || []);
      setHasMore(messageData.next !== null);
      setOffset(limit);
    } catch (error) {
      console.error('초기 데이터 로드 실패:', error);
      // 실패 시 mock 데이터 사용
      setMessages(mockData.recentMessages);
    } finally {
      setLoading(false);
    }
  };

  // 무한 스크롤을 위한 추가 메시지 로드
  const loadMoreMessages = useCallback(async () => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      const messageData = await getMessageList(recipientId, { 
        limit, 
        offset,
        sort: '-createdAt'
      });
      
      setMessages(prev => [...prev, ...(messageData.results || [])]);
      setHasMore(messageData.next !== null);
      setOffset(prev => prev + limit);
    } catch (error) {
      console.error('추가 메시지 로드 실패:', error);
    } finally {
      setLoading(false);
    }
  }, [recipientId, offset, loading, hasMore, limit]);

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop 
          >= document.documentElement.offsetHeight - 1000) {
        loadMoreMessages();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreMessages]);

  const handleDeletePaper = async () => {
    try {
      await deleteRecipient(recipientId);
      navigate('/list');
    } catch (e) {
      console.error('페이지 삭제 실패', e);
    }
  };

  const handleDeleteMessage = async (messageId) => {
    try {
      await deleteMessage(messageId);
      const newMessages = messages.filter(
        (message) => message.id !== messageId,
      );
      setMessages(newMessages);
    } catch (e) {
      console.error('메세지 삭제 실패', e);
    }
  };

  // 카드 클릭 시 확대 기능
  const handleCardClick = (message) => {
    setSelectedCard(message);
  };

  const handleCloseCard = () => {
    setSelectedCard(null);
  };

  // + 버튼 클릭 시 메시지 작성 페이지로 이동
  const handleAddMessage = () => {
    navigate(`/post/${recipientId}/message`);
  };

  return (
    <>
      <Subheader data={recipientData} />
      {isEditing && <Button onClick={handleDeletePaper} />}
      <CardList
        messages={messages}
        isEditing={isEditing}
        onDeleteMessage={handleDeleteMessage}
        onCardClick={handleCardClick}
        onAddMessage={handleAddMessage}
        loading={loading}
        hasMore={hasMore}
      />
      
      {/* 카드 확대 모달 */}
      {selectedCard && (
        <CardModal card={selectedCard} onClose={handleCloseCard} />
      )}
    </>
  );
};

export default PersonalPage;
