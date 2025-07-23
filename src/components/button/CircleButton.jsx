import { StyledButton } from './CircleButton.styled';

export default function CircleButton({ icon, onClick, ...props }) {
  return (
    <StyledButton onClick={onClick} {...props}>
      {icon && <img src={icon} alt="아이콘" />}
    </StyledButton>
  );
}
