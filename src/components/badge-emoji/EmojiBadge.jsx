import { EmojiBadgeWrapper } from './EmojiBadge.styled.js';

export default function EmojiBadge({ emoji, count, onClick }) {
  return (
    <EmojiBadgeWrapper onClick={onClick}>
      <span>{emoji}</span>
      <span>{count}</span>
    </EmojiBadgeWrapper>
  );
}
