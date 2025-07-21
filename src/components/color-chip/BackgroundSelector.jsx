import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import { ToggleGroup } from '../button/ToggleGroup.styled';
import ColorChipList from './ColorChipList';
import ImageChipList from './ImageChipList';
import { useTheme } from 'styled-components';

export default function BackgroundSelector({ selectedColor, onChangeColor }) {
  const theme = useTheme();
  const [tab, setTab] = useState('color');
  const [imageChipData, setImageChipData] = useState([]);

  const colorChipData = [
    {
      id: 'beige',
      backgroundType: 'color',
      color: theme.colors.secondary[200],
    },
    {
      id: 'purple',
      backgroundType: 'color',
      color: theme.colors.primary[200],
    },
    {
      id: 'blue',
      backgroundType: 'color',
      color: theme.colors.blue[200],
    },
    {
      id: 'green',
      backgroundType: 'color',
      color: theme.colors.green[200],
    },
  ];

  useEffect(() => {
    const localData = [
      {
        id: 'https://picsum.photos/id/683/3840/2160',
        backgroundType: 'image',
      },
      {
        id: 'https://picsum.photos/id/284/3840/2160',
        backgroundType: 'image',
      },
      {
        id: 'https://picsum.photos/id/599/3840/2160',
        backgroundType: 'image',
      },
      {
        id: 'https://picsum.photos/id/1058/3840/2160',
        backgroundType: 'image',
      },
    ];
    setImageChipData(localData);
  }, []);

  useEffect(() => {
    if (tab === 'image' && imageChipData.length > 0) {
      onChangeColor({
        backgroundType: 'image',
        value: imageChipData[0].id,
      });
    } else if (tab === 'color') {
      onChangeColor((prev) => {
        if (prev?.backgroundType !== 'color') {
          return { backgroundType: 'color', value: 'beige' };
        }
        return prev;
      });
    }
  }, [tab, imageChipData]);

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
          chipData={colorChipData}
          selectedId={selectedColor?.value}
          onSelect={(id) => {
            const selected = colorChipData.find((chip) => chip.id === id);
            if (selected) {
              onChangeColor({ backgroundType: 'color', value: selected.id });
            }
          }}
        />
      )}
      {tab === 'image' && (
        <ImageChipList
          chipData={imageChipData}
          selectedId={selectedColor?.value}
          onSelect={(id) => {
            const selected = imageChipData.find((chip) => chip.id === id);
            if (selected) {
              onChangeColor({
                backgroundType: 'image',
                value: selected.imageSrc,
              });
            }
          }}
        />
      )}
    </div>
  );
}
