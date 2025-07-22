import React, { useEffect, useRef, useCallback } from 'react';
import MessageCard from '../card/MessageCard';
import { CardlistContainer } from './CardList.styled';
import AddCard from '../card/CardAdd';

export default function CardList({
  messages,
  isEditing,
  onDeleteMessage,
  onClickAdd,
  onCardClick,
  loading,
  hasMore,
  onLoadMore,
}) {
  const observerRef = useRef();
  const lastMessageElementRef = useRef();

  // 무한 스크롤을 위한 Intersection Observer 설정
  const lastMessageRef = useCallback(node => {
    if (loading) return;
    if (observerRef.current) observerRef.current.disconnect();
    
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && onLoadMore) {
        onLoadMore();
      }
    });
    
    if (node) observerRef.current.observe(node);
  }, [loading, hasMore, onLoadMore]);

  return (
    <CardlistContainer>
      {!isEditing && <AddCard onClickAdd={onClickAdd} />}
      {messages.map((message, index) => {
        const {
          id: messageId,
          profileImageURL,
          relationship,
          sender,
          content,
          createdAt,
        } = message;
        
        const isLastMessage = index === messages.length - 1;
        
        return (
          <MessageCard
            ref={isLastMessage ? lastMessageRef : null}
            messageId={messageId}
            key={messageId}
            profileImage={profileImageURL}
            name={sender}
            status={relationship}
            message={content}
            date={createdAt}
            isEditing={isEditing}
            onDelete={onDeleteMessage}
            onClick={() => onCardClick && onCardClick(message)}
          />
        );
      })}
      {loading && (
        <div style={{ textAlign: 'center', padding: '20px', gridColumn: '1 / -1' }}>
          로딩 중...
        </div>
      )}
    </CardlistContainer>
  );
}
