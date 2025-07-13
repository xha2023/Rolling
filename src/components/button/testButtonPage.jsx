import React from 'react';
import Button from './Button';
import { FaTrash } from 'react-icons/fa';

function TestButtonPage() {
  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      {/* Primary */}
      <div>
        <h3>Primary</h3>
        <Button variant="primary" size="large">
          Enabled
        </Button>
        <Button variant="primary" disabled size="large">
          Disabled
        </Button>
        <Button variant="primary" size="large">
          Hover
        </Button>
        <Button variant="primary" size="large">
          Pressed
        </Button>
        <Button variant="primary" size="large">
          Focus
        </Button>
      </div>

      {/* Outlined */}
      <div>
        <h3>Outlined</h3>
        <Button variant="outlined" size="large">
          Enabled
        </Button>
        <Button variant="outlined" disabled size="large">
          Disabled
        </Button>
        <Button variant="outlined" size="large">
          Hover
        </Button>
        <Button variant="outlined" size="large">
          Pressed
        </Button>
        <Button variant="outlined" size="large">
          Focus
        </Button>
      </div>

      {/* Icon */}
      <div>
        <h3>Icon</h3>
        <Button variant="icon" icon={<FaTrash />} />
        <Button variant="icon" disabled icon={<FaTrash />} />
      </div>

      {/* Arrow */}
      <div>
        <h3>Arrow</h3>
        <Button variant="arrow" icon={<span>{'<'}</span>} />
        <Button variant="arrow" icon={<span>{'>'}</span>} />
      </div>

      {/* Toggle */}
      <div>
        <h3>Toggle</h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button variant="toggle" isSelected size="small">
            컬러
          </Button>
          <Button variant="toggle" size="small">
            이미지
          </Button>
          <Button variant="toggle" size="small">
            컬러
          </Button>
          <Button variant="toggle" isSelected size="small">
            이미지
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TestButtonPage;
