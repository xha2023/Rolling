import { EmojiBadgeWrapper, Emoji, Count } from './EmojiBadge.styled.js';

export default function EmojiBadge({ emoji, count, onClick, className }) {
  return (
    <EmojiBadgeWrapper onClick={onClick} className={className}>
      <Emoji>{emoji}</Emoji>
      <Count>{count}</Count>
    </EmojiBadgeWrapper>
  );
}
