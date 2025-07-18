import React, { useState } from 'react';
import Button from '../button/Button';
import { ToggleGroup } from '../button/ToggleGroup.styled';
import ColorChipList from './ColorChipList';

export default function BackgroundSelector({ selectedColor, onChangeColor }) {
  const [tab, setTab] = useState('color');

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
        <ColorChipList
          type="color"
          selectedId={selectedColor}
          onSelect={onChangeColor}
        />
      )}
      {tab === 'image' && (
        <p style={{ color: '#aaa', fontSize: '14px' }}>
          이미지 선택 기능 준비 중
        </p>
      )}
    </div>
  );
}
