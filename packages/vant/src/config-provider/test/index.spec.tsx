import { ref } from 'vue';
import { ConfigProvider } from '..';
import { Icon } from '../../icon';
import { later, mount } from '../../../test';
import Popup from '../../popup';

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

test('should change global z-index when using z-index prop', async () => {
  const show = ref(true);
  const wrapper = mount({
    render() {
      return (
        <ConfigProvider zIndex={0}>
          <Popup v-model:show={show.value} />
        </ConfigProvider>
      );
    },
  });

  await later();
  expect(wrapper.find('.van-popup').style.zIndex).toEqual('1');
});

test('should apply theme-vars-light in light mode', () => {
  const wrapper = mount({
    render() {
      return (
        <ConfigProvider
          themeVars={{ rateIconFullColor: 'red' }}
          themeVarsDark={{ rateIconFullColor: 'green' }}
          themeVarsLight={{ rateIconFullColor: 'blue' }}
        />
      );
    },
  });

  expect(wrapper.element.getAttribute('style')).toEqual(
    '--van-rate-icon-full-color: blue;'
  );
});

test('should apply theme-vars-dark in dark mode', () => {
  const wrapper = mount({
    render() {
      return (
        <ConfigProvider
          theme="dark"
          themeVars={{ rateIconFullColor: 'red' }}
          themeVarsDark={{ rateIconFullColor: 'green' }}
          themeVarsLight={{ rateIconFullColor: 'blue' }}
        />
      );
    },
  });

  expect(wrapper.element.getAttribute('style')).toEqual(
    '--van-rate-icon-full-color: green;'
  );
});
