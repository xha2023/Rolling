import React from 'react';
import Button from '../button/Button';

export default function BackgroundSelector({ selectedTab, onChangeTab }) {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button
        variant="toggle"
        isSelected={selectedTab === 'color'}
        size="small"
        onClick={() => onChangeTab('color')}
      >
        컬러
      </Button>
      <Button
        variant="toggle"
        isSelected={selectedTab === 'image'}
        size="small"
        onClick={() => onChangeTab('image')}
      >
        이미지
      </Button>
    </div>
  );
}
