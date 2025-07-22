import { StyledButton } from './CircleButton.styled';
import plusIcon from '../../assets/icon/ic_plus.svg';

export default function CircleButton({ icon, onClick, ...props }) {
  return (
    <StyledButton onClick={onClick} {...props}>
      <img src={plusIcon} alt="아이콘" />
    </StyledButton>
  );
}
