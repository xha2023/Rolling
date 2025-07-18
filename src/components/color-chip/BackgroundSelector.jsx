import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import { ToggleGroup } from '../button/ToggleGroup.styled';
import ColorChipList from './ColorChipList';
import ImageChipList from './ImageChipList';
import chipBg1 from '../../assets/svg/svg_chip_bg1.svg';
import chipBg2 from '../../assets/svg/svg_chip_bg2.svg';

export default function BackgroundSelector({ selectedColor, onChangeColor }) {
  const [tab, setTab] = useState('color');
  const [imageChipData, setImageChipData] = useState([]);

  useEffect(() => {
    const localData = [
      { id: 'imageChip1', backgroundType: 'image', imageSrc: chipBg1 },
      { id: 'imageChip2', backgroundType: 'image', imageSrc: chipBg2 },
      { id: 'imageChip3', backgroundType: 'image', imageSrc: chipBg1 },
      { id: 'imageChip4', backgroundType: 'image', imageSrc: chipBg2 },
    ];
    setImageChipData(localData);

    // 추후 API 연동 예시
    // fetch('/api/backgrounds?type=image')
    //   .then((res) => res.json())
    //   .then((data) => setImageChipData(data));
  }, []);

  return (
    <div>
      <ToggleGroup>
        <Button
          variant="toggle"
          isSelected={tab === 'color'}
          size="compact"
          onClick={() => setTab('color')}
          position="left"
        >
          컬러
        </Button>
        <Button
          variant="toggle"
          isSelected={tab === 'image'}
          size="compact"
          onClick={() => setTab('image')}
          position="right"
        >
          이미지
        </Button>
      </ToggleGroup>

      {tab === 'color' && (
        <ColorChipList selectedId={selectedColor} onSelect={onChangeColor} />
      )}
      {tab === 'image' && (
        <ImageChipList
          chipData={imageChipData}
          selectedId={selectedColor}
          onSelect={onChangeColor}
        />
      )}
    </div>
  );
}
