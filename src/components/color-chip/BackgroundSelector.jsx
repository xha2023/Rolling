import React, { useState } from 'react';
import Button from '../button/Button';
import ColorChipList from './ColorChipList';

export default function BackgroundSelector({ selectedColor, onChangeColor }) {
  const [tab, setTab] = useState('color');

  return (
    <div>
      <div>
        <Button
          variant="toggle"
          isSelected={tab === 'color'}
          size="small"
          onClick={() => setTab('color')}
        >
          컬러
        </Button>
        <Button
          variant="toggle"
          isSelected={tab === 'image'}
          size="small"
          onClick={() => setTab('image')}
        >
          이미지
        </Button>
      </div>

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
