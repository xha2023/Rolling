import MessageCard from '../card/MessageCard';
import { CardlistContainer } from './CardList.styled';
import AddCard from '../card/CardAdd';

export default function CardList({
  messages,
  isEditing,
  onDeleteMessage,
  onClickAdd,
}) {
  return (
    <CardlistContainer>
      {!isEditing && <AddCard onClickAdd={onClickAdd} />}
      {messages.map(
        ({
          id: messageId,
          profileImageURL,
          relationship,
          sender,
          content,
          createdAt,
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
          />
        ),
      )}
    </CardlistContainer>
  );
}
