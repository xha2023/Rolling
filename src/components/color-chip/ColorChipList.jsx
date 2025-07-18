import { useTheme } from 'styled-components';
import ColorChip from './ColorChip.jsx';
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  max-width: 720px;
  margin: 47px auto;
`;

export default function ColorChipList({ selectedId, onSelect }) {
  const theme = useTheme();
  const defaultColor = theme.colors.secondary[200];

  const colorChips = [
    {
      id: 'yellowChip',
      backgroundType: 'color',
      color: theme.colors.secondary[200],
    },
    {
      id: 'purpleChip',
      backgroundType: 'color',
      color: theme.colors.primary[200],
    },
    { id: 'blueChip', backgroundType: 'color', color: theme.colors.blue[200] },
    {
      id: 'greenChip',
      backgroundType: 'color',
      color: theme.colors.green[200],
    },
  ];

  return (
    <ListWrapper>
      {colorChips.map((chip) => (
        <ColorChip
          key={chip.id}
          backgroundType={chip.backgroundType}
          color={chip.color ?? defaultColor}
          isSelected={selectedId === chip.id}
          onClick={() => onSelect(chip.id)}
        />
      ))}
    </ListWrapper>
  );
}
