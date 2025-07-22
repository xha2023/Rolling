import MessageCard from '../card/MessageCard';
import { CardlistContainer, LoadingContainer, NoMoreContent } from './CardList.styled';
import AddCard from '../card/CardAdd';

export default function CardList({ 
  messages, 
  isEditing, 
  onDeleteMessage, 
  onCardClick, 
  onAddMessage,
  loading,
  hasMore 
}) {
  return (
    <>
      <CardlistContainer>
        <AddCard onClick={onAddMessage} />
        {messages.map(
          ({
            id: messageId,
            profileImageURL,
            relationship,
            sender,
            content,
            createdAt,
            ...messageData
          }) => (
            <MessageCard
              messageId={messageId}
              key={messageId}
              profileImage={profileImageURL}
              name={sender}
              status={relationship}
              message={content}
              date={createdAt}
              isEditing={isEditing}
              onDelete={onDeleteMessage}
              onClick={() => onCardClick({ 
                id: messageId, 
                profileImageURL, 
                relationship, 
                sender, 
                content, 
                createdAt,
                ...messageData 
              })}
            />
          ),
        )}
      </CardlistContainer>
      
      {loading && (
        <LoadingContainer>
          <div>메시지를 불러오는 중...</div>
        </LoadingContainer>
      )}
      
      {!hasMore && messages.length > 0 && (
        <NoMoreContent>
          <div>모든 메시지를 불러왔습니다.</div>
        </NoMoreContent>
      )}
    </>
  );
}
