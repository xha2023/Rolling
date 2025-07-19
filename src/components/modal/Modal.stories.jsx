import React from 'react';
import { ThemeProvider } from 'styled-components'; // ThemeProvider import 추가
import theme from '../../styles/Theme';
import Modal from './Modal.jsx';

export default {
  title: 'Components/Modal',
  component: Modal,
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      // ThemeProvider로 Story를 감싸서 테마를 적용합니다.
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
    },
    onClose: {
      action: 'closed',
    },
  },
};

// 컴포넌트 템플릿
const Template = (args) => <Modal {...args} />;

// 기본 모달 스토리
export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  children: (
    <>
      <h2>기본 모달</h2>
      <p>이것은 스토리북에서 렌더링된 모달입니다.</p>
    </>
  ),
};

// 컨텐츠가 많은 모달 스토리
export const WithLongContent = Template.bind({});
WithLongContent.args = {
  isOpen: true,
  children: (
    <>
      <h2>컨텐츠가 긴 모달</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
        a, semper congue, euismod non, mi.
      </p>
      <img
        src="https://via.placeholder.com/400x100"
        alt="placeholder"
        style={{ maxWidth: '100%' }}
      />
      <p>
        Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
        fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
        scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
      </p>
    </>
  ),
};
