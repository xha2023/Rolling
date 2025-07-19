import styled from 'styled-components';
import ColorChip from './ColorChip';

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  max-width: 720px;
  margin: 47px auto;
`;

export default function ImageChipList({ chipData = [], selectedId, onSelect }) {
  return (
    <ListWrapper>
      {chipData.map((chip) => (
        <ColorChip
          key={chip.id}
          backgroundType={chip.backgroundType}
          value={chip.id}
          isSelected={chip.id === selectedId}
          onClick={() => onSelect(chip.id)}
        />
      ))}
    </ListWrapper>
  );
}
