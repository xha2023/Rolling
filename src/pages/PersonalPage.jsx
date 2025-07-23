import { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import CardList from '../components/card-list/CardList';
import Subheader from '../components/subheader/Subheader';
import Button from '../components/button/Button';
import CardModal from '../components/card/CardModal';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { formatDate } from '../utils/FormatDate.js'; // 날짜 포맷 유틸리티

//api
import {
  deleteRecipient,
  getRecipient,
  getReactionsForRecipient,
} from '../api/recipients';
import { deleteMessage, getMessageList } from '../api/messages';

//styled
const backgroundColorMap = {
  purple: ['primary', 200],
  blue: ['blue', 200],
  green: ['green', 200],
  beige: ['secondary', 200], // 예시
};

const fontMap = {
  '나눔손글씨 손편지체': "'Nanum Pen Script', cursive",
  나눔명조: "'Nanum Myeongjo', serif",
  'Noto Sans': "'Noto Sans', sans-serif",
  Pretendard: "'Pretendard', sans-serif",
};

// Main component
const PersonalPage = () => {
  const { id: recipientId } = useParams();
  const [recipientInfo, setRecipientInfo] = useState(null);
  const [messages, setMessages] = useState([]);
  const [reactions, setReactions] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); // 카드 확대 기능
  const [loading, setLoading] = useState(false); // 무한 스크롤 로딩
  const [hasMore, setHasMore] = useState(true); // 더 불러올 데이터가 있는지
  const [offset, setOffset] = useState(0); // 페이지네이션 오프셋
  const [writerProfiles, setWriterProfiles] = useState([]);

  const navigate = useNavigate();

  //get Recipient Info, Messages, reactions
  useEffect(() => {
    if (!recipientId) return;
    const fetchRecipientInfo = async () => {
      try {
        const result = await getRecipient(recipientId);
        setRecipientInfo(result);
      } catch (e) {
        console.error('recipientInfo 불러오기 실패', e);
      }
    };
    fetchRecipientInfo();
  }, [recipientId]);

  useEffect(() => {
    if (!recipientId) return;
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const result = await getMessageList(recipientId, {
          limit: 6,
          offset: 0,
        });
        const messageResults = result?.results || [];
        setMessages(messageResults);
        setOffset(6);
        setHasMore(messageResults.length === 6);

        const writersMap = new Map();
        messageResults.forEach((msg) => {
          const existing = writersMap.get(msg.sender);
          if (!existing || (!existing.profileImageURL && msg.profileImageURL)) {
            writersMap.set(msg.sender, {
              sender: msg.sender,
              profileImageURL: msg.profileImageURL,
            });
          }
        });
        setWriterProfiles([...writersMap.values()]);
      } catch (e) {
        console.error('messageList 불러오기 실패', e);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, [recipientId]);

  useEffect(() => {
    if (!recipientId) return;
    const fetchReactions = async () => {
      try {
        const result = await getReactionsForRecipient(recipientId);
        setReactions(result?.results || []);
      } catch (e) {
        console.error('reactions 불러오기 실패', e);
      }
    };
    fetchReactions();
  }, [recipientId]);

  const location = useLocation();

  //현재 url이 '/edit'으로 끝나는지 확인
  const isEditing = location.pathname.endsWith('/edit');

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

  // 무한 스크롤을 위한 더 많은 메시지 로드
  const handleLoadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      const result = await getMessageList(recipientId, { limit: 6, offset });
      const newMessages = result?.results || [];

      if (newMessages.length < 6) {
        setHasMore(false);
      }

      setMessages((prev) => [...prev, ...newMessages]);
      setOffset((prev) => prev + 6);
    } catch (error) {
      console.error('메시지 로드 실패:', error);
    } finally {
      setLoading(false);
    }
  }, [recipientId, offset, loading, hasMore]);

  // 카드 클릭 시 확대 기능
  const handleCardClick = (message) => {
    setSelectedCard(message);
  };

  const handleCloseCard = () => {
    setSelectedCard(null);
  };

  const handleClickAdd = () => {
    navigate(`/post/${recipientId}/message`);
  };

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&family=Nanum+Pen+Script&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <PageWrapper
        $backgroundImageURL={recipientInfo?.backgroundImageURL}
        $backgroundColor={recipientInfo?.backgroundColor}
      >
        {recipientInfo && (
          <Subheader
            data={{ ...recipientInfo, writerProfiles }}
            totalWriters={writerProfiles.length}
          />
        )}
        <CardWrapper>
          {isEditing && (
            <DeleteButton onClick={handleDeletePaper}>삭제하기</DeleteButton>
          )}
          <CardList
            messages={messages.map((msg) => ({
              ...msg,
              font: fontMap[msg.font] || msg.font,
            }))}
            isEditing={isEditing}
            onDeleteMessage={handleDeleteMessage}
            onClickAdd={handleClickAdd}
            onCardClick={handleCardClick}
            loading={loading}
            hasMore={hasMore}
            onLoadMore={handleLoadMore}
          />
          {selectedCard && (
            <CardModal 
              card={selectedCard} 
              onClose={handleCloseCard} 
            />
          )}
        </CardWrapper>
      </PageWrapper>
    </>
  );
};

export default PersonalPage;

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: ${({ theme, $backgroundImageURL, $backgroundColor }) => {
    // 1순위: 이미지 URL이 있으면 배경 이미지로 설정
    if ($backgroundImageURL) {
      return `url(${$backgroundImageURL}) no-repeat center / cover`;
    }

    // 2순위: 이미지 URL이 없고, $backgroundColor가 매핑 객체에 있으면 theme 색상 사용
    const colorKeys = $backgroundColor
      ? backgroundColorMap[$backgroundColor]
      : null;
    if (colorKeys) {
      const [key, shade] = colorKeys;
      // theme.colors.primary[200] 같은 경로로 실제 색상 값을 반환
      return theme.colors[key]?.[shade];
    }

    // 3순위: 매핑에 없으면 $backgroundColor 값 자체를 사용하거나 최종 기본값 사용
    return $backgroundColor || '#f6f8ff';
  }};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  margin: 113px;
`;

const DeleteButton = styled(Button)`
  position: absolute;
  top: -60px;
  right: 0;
`;

export { PageWrapper, CardWrapper, DeleteButton };
