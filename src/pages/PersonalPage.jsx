import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import CardList from '../components/card-list/CardList';
import Subheader from '../components/subheader/subheader';
import Button from '../components/button/Button';
import styled from 'styled-components';

//api
import {
  deleteRecipient,
  getRecipient,
  getReactionsForRecipient,
} from '../api/recipients';
import { deleteMessage, getMessageList } from '../api/messages';

//hook
import { useFetch } from '../hooks/useFetch';

//styled
const backgroundColorMap = {
  purple: ['primary', 200],
  blue: ['blue', 200],
  green: ['green', 200],
  beige: ['secondary', 200], // 예시
};

const PageWrapper = styled.div`
  width: 100%;
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
  width: fit-content;
  position: relative;
  margin: 113px;
`;

const DeleteButton = styled(Button)`
  position: absolute;
  top: -60px;
  right: 0;
`;

// Main component
const PersonalPage = () => {
  const { id: recipientId } = useParams();
  const [recipientInfo, setRecipientInfo] = useState(null);
  const [messages, setMessages] = useState([]);
  const [reactions, setReactions] = useState([]);
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
        const result = await getMessageList(recipientId);
        setMessages(result?.results || []);
      } catch (e) {
        console.error('messageList 불러오기 실패', e);
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

  const handleClickAdd = () => {
    navigate(`/post/${recipientId}/message`);
  };

  return (
    <PageWrapper
      $backgroundImageURL={recipientInfo?.backgroundImageURL}
      $backgroundColor={recipientInfo?.backgroundColor}
    >
      {recipientInfo && (
        <Subheader data={recipientInfo} reactions={reactions} />
      )}
      <CardWrapper>
        {isEditing && (
          <DeleteButton onClick={handleDeletePaper}>삭제하기</DeleteButton>
        )}
        <CardList
          messages={messages}
          isEditing={isEditing}
          onDeleteMessage={handleDeleteMessage}
          onClickAdd={handleClickAdd}
        />
      </CardWrapper>
    </PageWrapper>
  );
};

export default PersonalPage;
