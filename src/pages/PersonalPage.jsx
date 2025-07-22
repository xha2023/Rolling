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
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ $backgroundImageURL, $backgroundColor }) =>
    $backgroundImageURL
      ? `url(${$backgroundImageURL})`
      : $backgroundColor || '#f6f8ff'};
  background-size: cover;
  background-position: center;
`;

const PersonalPage = () => {
  const { id: recipientId } = useParams();
  const [recipientInfo, setRecipientInfo] = useState(null);
  const [messages, setMessages] = useState([]);
  const [reactions, setReactions] = useState([]);

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

  return (
    <PageWrapper
      $backgroundImageURL={recipientInfo?.backgroundImageURL}
      $backgroundColor={recipientInfo?.backgroundColor}
    >
      {recipientInfo && (
        <Subheader data={recipientInfo} reactions={reactions} />
      )}
      {isEditing && <Button onClick={handleDeletePaper} />}
      <CardList
        messages={messages}
        isEditing={isEditing}
        onDeleteMessage={handleDeleteMessage}
      />
    </PageWrapper>
  );
};

export default PersonalPage;
