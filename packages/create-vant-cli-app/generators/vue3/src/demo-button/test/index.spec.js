import { mount } from '@vue/test-utils';
import DemoButton from '../../demo-button';

test('render demo button', () => {
  const wrapper = mount(DemoButton);
  expect(wrapper.html()).toMatchSnapshot();
});
