import { ThemeProvider } from 'styled-components';
import theme from '../../styles/Theme';
import Menu from './Menu';

export default {
  title: 'Common/Dropdown/Menu',
  component: Menu,
  argTypes: {
    triggerText: { control: 'text' },
  },
  // Theme사용
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

const sampleItems = [
  { label: '카카오톡 공유', handler: () => alert('공유가 완료되었습니다.') },
  { label: 'URL 공유', handler: () => alert('공유가 완료되었습니다.') },
];

export const Default = {
  args: {
    triggerText: '공유하기',
    items: sampleItems,
  },
};
