import { ChipWrapper } from './ColorChip.styled.js';
import CircleButton from '../button/CircleButton';
import checkIcon from '../../assets/icon/ic_check.svg';

export default function ColorChip({
  backgroundType,
  value,
  isSelected = false,
  onClick = () => {},
}) {
  return (
    <ChipWrapper
      $backgroundType={backgroundType}
      $color={backgroundType === 'color' ? value : undefined}
      $imageSrc={backgroundType === 'image' ? value : undefined}
      onClick={onClick}
    >
      {isSelected && <CircleButton icon={checkIcon} />}
    </ChipWrapper>
  );
}
