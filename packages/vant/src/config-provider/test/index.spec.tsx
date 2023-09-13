import { ref } from 'vue';
import { ConfigProvider, type ConfigProviderThemeVars } from '..';
import { Icon } from '../../icon';
import { Popup } from '../../popup';
import { later, mount } from '../../../test';

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
    '--van-rate-icon-full-color: blue;',
  );
});

test('should apply basic theme vars correctly', () => {
  const wrapper = mount({
    render() {
      const themeVars: ConfigProviderThemeVars = {
        gray1: '#111',
        background2: 'red',
      };
      return <ConfigProvider themeVars={themeVars} />;
    },
  });

  expect(wrapper.element.getAttribute('style')).toEqual(
    '--van-gray-1: #111; --van-background-2: red;',
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
    '--van-rate-icon-full-color: green;',
  );
});

test('should apply theme-vars-scope enable root affects', async () => {
  const wrapper = mount({
    render() {
      return (
        <ConfigProvider
          theme="dark"
          themeVars={{ rateIconFullColor: 'red' }}
          themeVarsDark={{ rateIconFullColor: 'green' }}
          themeVarsLight={{ rateIconFullColor: 'blue' }}
          themeVarsScope="global"
        />
      );
    },
  });

  expect(document.documentElement.getAttribute('style')).toEqual(
    '--van-rate-icon-full-color: green;',
  );
  expect(
    wrapper.element.getAttribute('style') ===
      '--van-rate-icon-full-color: green;',
  ).toBeFalsy();

  await wrapper.setProps({
    themeVarsScope: 'local',
  });

  expect(wrapper.element.getAttribute('style')).toEqual(
    '--van-rate-icon-full-color: green;',
  );
  expect(
    document.documentElement.getAttribute('style') ===
      '--van-rate-icon-full-color: green;',
  ).toBeFalsy();
});

test('should apply theme-vars-scope enable root affects and sync theme vars', async () => {
  const wrapper = mount({
    render() {
      return (
        <ConfigProvider
          theme="dark"
          themeVars={{ rateIconFullColor: 'red' }}
          themeVarsScope="global"
        />
      );
    },
  });

  expect(document.documentElement.getAttribute('style')).toEqual(
    '--van-rate-icon-full-color: red;',
  );

  await wrapper.setProps({
    themeVars: {
      rateIconFullColor: 'red',
      buttonPrimaryColor: 'red',
    },
  });

  expect(document.documentElement.getAttribute('style')).toEqual(
    '--van-rate-icon-full-color: red; --van-button-primary-color: red;',
  );

  await wrapper.setProps({
    themeVars: {
      buttonPrimaryColor: 'red',
    },
  });

  expect(document.documentElement.getAttribute('style')).toEqual(
    '--van-button-primary-color: red;',
  );
});
