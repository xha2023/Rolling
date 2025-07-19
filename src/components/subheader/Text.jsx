// 📁 components/MessageTopBar/MessageTopBarTest.jsx
import React from 'react';
import Theme from '../../styles/theme';
import Subheader from './subheader';
import img_avatar_01 from '../../assets/img/img_avatar_01.svg';
import img_avatar_02 from '../../assets/img/img_avatar_02.svg';
import img_avatar_03 from '../../assets/img/img_avatar_03.svg';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';

const Test = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
        <Subheader
          to="Ashley Kim"
          avatars={[img_avatar_01, img_avatar_02, img_avatar_03]}
          totalWriters={9}
          reactions={[
            { emoji: '👍', count: 24 },
            { emoji: '😍', count: 16 },
            { emoji: '🎉', count: 10 },
          ]}
        />
      </div>
    </ThemeProvider>
  );
};

export default Test;
