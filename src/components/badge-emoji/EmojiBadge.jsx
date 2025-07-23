import { EmojiBadgeWrapper, Emoji, Count } from './EmojiBadge.styled.js';

export default function EmojiBadge({ emoji, count, onClick }) {
  return (
    <EmojiBadgeWrapper onClick={onClick}>
      <Emoji>{emoji}</Emoji>
      <Count>{count}</Count>
    </EmojiBadgeWrapper>
  );
}
