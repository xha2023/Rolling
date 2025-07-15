import { useState } from 'react';
import { useTheme } from 'styled-components';
import ColorChip from './ColorChip.jsx';
import styled from 'styled-components';
import chipBg1 from '../../assets/img/img_chip_bg1.svg';
import chipBg2 from '../../assets/img/img_chip_bg2.svg';

const ListWrapper = styled.div`
  display: flex;
  gap: 17.6px;
  flex-wrap: wrap;
`;

export default function ColorChipList({ type }) {
  const [selected, setSelected] = useState(null);
  const theme = useTheme();

  const colorChips = [
    {
      id: 'yellowChip',
      backgroundType: 'color',
      color: theme.colors.yellow[200],
    },
    {
      id: 'purpleChip',
      backgroundType: 'color',
      color: theme.colors.purple[200],
    },
    { id: 'blueChip', backgroundType: 'color', color: theme.colors.blue[200] },
    {
      id: 'greenChip',
      backgroundType: 'color',
      color: theme.colors.green[200],
    },
  ];

  const imageChips = [
    {
      id: 'imageChip1',
      backgroundType: 'image',
      imageSrc: chipBg1,
    },
    {
      id: 'imageChip2',
      backgroundType: 'image',
      imageSrc: chipBg2,
    },
  ];

  const chipsToShow = type === 'color' ? colorChips : imageChips;

  return (
    <ListWrapper>
      {chipsToShow.map((chip) => (
        <ColorChip
          key={chip.id}
          backgroundType={chip.backgroundType}
          color={chip.color}
          imageSrc={chip.imageSrc}
          isSelected={selected === chip.id}
          onClick={() => setSelected(chip.id)}
        />
      ))}
    </ListWrapper>
  );
}
