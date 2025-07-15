import { ChipWrapper } from './ColorChip.styled.js';
import CircleButton from '../button/CircleButton';
import checkIcon from '../../assets/icon/ic_check.svg';

export default function ColorChip({
  backgroundType,
  color,
  imageSrc,
  isSelected = false,
  onClick = () => {},
}) {
  return (
    <ChipWrapper
      backgroundType={backgroundType}
      color={color}
      imageSrc={imageSrc}
      onClick={onClick}
    >
      {isSelected && <CircleButton icon={checkIcon} />}
    </ChipWrapper>
  );
}
