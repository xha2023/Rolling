import { ChipWrapper, CheckIcon } from './ColorChip.styled.js';
import checkIcon from '../../assets/icon/ic_check.svg';

export default function ColorChip({
  backgroundType,
  color,
  imageSrc,
  isSelected,
  onClick,
}) {
  return (
    <ChipWrapper
      backgroundType={backgroundType}
      color={color}
      imageSrc={imageSrc}
      onClick={onClick}
    >
      {isSelected && (
        <CheckIcon>
          <img src={checkIcon} alt="체크 아이콘" />
        </CheckIcon>
      )}
    </ChipWrapper>
  );
}
