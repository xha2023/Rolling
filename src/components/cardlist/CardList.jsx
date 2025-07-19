import MessageCard from '../card/MessageCard';
import { CardlistContainer } from './CardList.styled';
import AddCard from '../card/CardAdd';

export default function CardList({ messages }) {
  return (
    <CardlistContainer>
      <AddCard />
      {messages.map(
        ({ id, profileImageURL, relationship, sender, content, createdAt }) => (
          <MessageCard
            key={id}
            profileImage={profileImageURL}
            name={sender}
            status={relationship}
            message={content}
            date={createdAt}
          />
        ),
      )}
    </CardlistContainer>
  );
}
