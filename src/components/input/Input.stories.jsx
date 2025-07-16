// src/components/input/Input.stories.jsx
import InputText from './Input';

export default {
  title: 'Common/Input/InputText',
  component: InputText,
  argTypes: { onInputChange: { action: 'changed' } },
};

const Template = (args) => <InputText {...args} />;

export const Placeholder = Template.bind({});
Placeholder.args = { placeholder: 'Placeholder' };

export const Focused = Template.bind({});
Focused.args = { placeholder: 'Placeholder', inputvalue: 'Placeholder' };

export const Hover = Template.bind({});
Hover.parameters = { pseudo: { hover: true } }; // storybook-addon-pseudo 시 사용

export const Disabled = Template.bind({});
Disabled.args = { placeholder: 'Placeholder', disabled: true };

export const Error = Template.bind({});
Error.args = {
  placeholder: 'Placeholder',
  errormsg: 'Error Message',
  // 빈 값으로 blur 시 error
}; 