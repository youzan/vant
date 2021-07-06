import { ConfigProvider } from '..';
import { Icon } from '../../icon';
import { mount } from '../../../test';

test('should render tag prop correctly', () => {
  const wrapper = mount(ConfigProvider, {
    props: {
      tag: 'section',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should change icon class-prefix when using icon-prefix prop', () => {
  const wrapper = mount({
    render() {
      return (
        <ConfigProvider iconPrefix="foo">
          <Icon name="success" />
        </ConfigProvider>
      );
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
