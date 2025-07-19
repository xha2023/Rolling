import { ThemeProvider } from 'styled-components';
import theme from '../../styles/Theme';
import Select from './Select';

export default {
  title: 'Common/Dropdown/Select',
  component: Select,
  argTypes: {
    placeholder: { control: 'text' },
    width: '320px',
  },

  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

const sampleOptions = [
  { value: 'friend', label: '친구' },
  { value: 'aquaintance', label: '지인' },
  { value: 'co-worker', label: '동료' },
  { value: 'family', label: '가족' },
];

export const Default = {
  args: {
    options: sampleOptions,
    placeholder: '관계를 선택하세요',
    onChange: (option) => console.log('선택된 값:', option),
  },
};

export const WithLongText = {
  args: {
    ...Default.args,
    options: [
      {
        value: 'long1',
        label: '아주아주 긴 텍스트의 옵션입니다. 줄바꿈이 어떻게 될까요?',
      },
      {
        value: 'long2',
        label:
          '두 번째 아주아주 긴 텍스트의 옵션입니다. 이것도 확인해봐야 합니다.',
      },
    ],
    placeholder: '글자가 길 때...',
  },
};
