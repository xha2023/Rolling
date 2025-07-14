import { useState } from 'react';
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

  const colorChips = [
    { id: 'yellowChip', backgroundType: 'color', color: '#FFD600' },
    { id: 'purpleChip', backgroundType: 'color', color: '#B56EFF' },
    { id: 'blueChip', backgroundType: 'color', color: '#00C2FF' },
    { id: 'greenChip', backgroundType: 'color', color: '#45FFB2' },
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
