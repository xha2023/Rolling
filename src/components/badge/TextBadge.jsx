import { TextBadgeWrapper } from './TextBadge.styled.js';

export default function Badge({ label }) {
  return <TextBadgeWrapper type={label}>{label}</TextBadgeWrapper>;
}
