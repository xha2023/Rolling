import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import CardList from '../components/card-list/CardList';
import Subheader from '../components/subheader/subheader';
import Button from '../components/button/Button';
import useMutation from '../hooks/useMutation';

//api
import {
  deleteRecipient,
  getRecipient,
  getReactionsForRecipient,
} from '../api/recipients';
import { deleteMessage, getMessageList } from '../api/messages';

//hook
import { useFetch } from '../hooks/useFetch';

// const mockData = {
//   id: 12321,
//   name: '다다다',
//   backgroundColor: 'purple',
//   backgroundImageURL: null,
//   createdAt: '2025-07-15T05:55:48.289484Z',
//   messageCount: 6,
//   recentMessages: [
//     {
//       id: 24037,
//       recipientId: 12321,
//       sender: '프론트엔드',
//       profileImageURL: 'https://i.pravatar.cc/100?img=2',
//       relationship: '친구',
//       content: 'UI 작업',
//       font: 'Pretendard',
//       createdAt: '2025-07-17T22:35:59.934023Z',
//     },
//     {
//       id: 24036,
//       recipientId: 12321,
//       sender: '프론트엔드',
//       profileImageURL: 'https://i.pravatar.cc/100?img=1',
//       relationship: '친구',
//       content: 'UI 작업',
//       font: 'Pretendard',
//       createdAt: '2025-07-17T22:33:37.395777Z',
//     },
//     {
//       id: 23994,
//       recipientId: 12321,
//       sender: '프론트엔드 동료',
//       profileImageURL: 'https://i.pravatar.cc/100?img=1',
//       relationship: '동료',
//       content: 'UI 작업하시느라 고생 많으셨습니다!',
//       font: 'Pretendard',
//       createdAt: '2025-07-15T06:22:42.602462Z',
//     },
//   ],
//   reactionCount: 26,
//   topReactions: [
//     {
//       id: 12863,
//       emoji: '🤓',
//       count: 13,
//     },
//     {
//       id: 12864,
//       emoji: '🥲',
//       count: 4,
//     },
//     {
//       id: 12861,
//       emoji: '😍',
//       count: 4,
//     },
//   ],
// };

// const mockReactions = {
//   count: 6,
//   next: null,
//   previous: null,
//   results: [
//     {
//       id: 12863,
//       emoji: '🤓',
//       count: 13,
//     },
//     {
//       id: 12864,
//       emoji: '🥲',
//       count: 4,
//     },
//     {
//       id: 12861,
//       emoji: '😍',
//       count: 4,
//     },
//     {
//       id: 12865,
//       emoji: '🫡',
//       count: 2,
//     },
//     {
//       id: 12862,
//       emoji: '😃',
//       count: 2,
//     },
//     {
//       id: 12860,
//       emoji: 'string',
//       count: 1,
//     },
//   ],
// };

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
    <>
      {recipientInfo && (
        <Subheader data={recipientInfo} reactions={reactions} />
      )}
      {isEditing && <Button onClick={handleDeletePaper} />}
      <CardList
        messages={messages}
        isEditing={isEditing}
        onDeleteMessage={handleDeleteMessage}
      />
    </>
  );
};

export default PersonalPage;
