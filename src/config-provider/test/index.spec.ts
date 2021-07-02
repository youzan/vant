import { ConfigProvider } from '..';
import { mount } from '../../../test';

test('should render tag prop correctly', () => {
  const wrapper = mount(ConfigProvider, {
    props: {
      tag: 'section',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
