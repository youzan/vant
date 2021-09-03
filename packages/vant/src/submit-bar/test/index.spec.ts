import { SubmitBar } from '..';
import { mount } from '../../../test';

test('should emit submit event when submit button is clicked', () => {
  const wrapper = mount(SubmitBar);
  const button = wrapper.find('.van-submit-bar__button');
  button.trigger('click');
  expect(wrapper.emitted('submit')!.length).toEqual(1);
});

test('should render disabled submit button correctly', () => {
  const wrapper = mount(SubmitBar, {
    props: {
      disabled: true,
    },
  });
  expect(wrapper.find('.van-submit-bar__button').html()).toMatchSnapshot();
});

test('should not emit submit event when disabled submit button is clicked', () => {
  const wrapper = mount(SubmitBar, {
    props: {
      disabled: true,
    },
  });
  const button = wrapper.find('.van-submit-bar__button');
  button.trigger('click');
  expect(wrapper.emitted('submit')).toBeFalsy();
});

test('should not render label without price', () => {
  const wrapper = mount(SubmitBar, {
    props: {
      label: 'Label',
    },
  });
  expect(wrapper.html().includes('Label')).toBeFalsy();
});

test('should render top slot correctly', () => {
  const wrapper = mount(SubmitBar, {
    slots: {
      top: () => 'Custom Top',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render decimal length correctly when using decimal-length prop', async () => {
  const wrapper = mount(SubmitBar, {
    props: {
      price: 111,
      decimalLength: 1,
    },
  });

  expect(wrapper.find('.van-submit-bar__price').html()).toMatchSnapshot();

  await wrapper.setProps({ decimalLength: 0 });
  expect(wrapper.find('.van-submit-bar__price').html()).toMatchSnapshot();
});

test('should render suffix-label correctly', () => {
  const wrapper = mount(SubmitBar, {
    props: {
      price: 111,
      label: 'Label',
      suffixLabel: 'Suffix Label',
    },
  });
  expect(wrapper.find('.van-submit-bar__text').html()).toMatchSnapshot();
});

test('should adjust text align when using text-align prop', () => {
  const wrapper = mount(SubmitBar, {
    props: {
      price: 111,
      textAlign: 'left',
    },
  });
  expect(wrapper.find('.van-submit-bar__text').style.textAlign).toEqual('left');
});

test('should allow to disable safe-area-inset-bottom prop', () => {
  const wrapper = mount(SubmitBar, {
    props: {
      safeAreaInsetBottom: false,
    },
  });
  expect(wrapper.find('.van-safe-area-bottom').exists()).toBeFalsy();
});

test('should change the color of submit button when using button-color prop', () => {
  const wrapper = mount(SubmitBar, {
    props: {
      buttonColor: 'red',
    },
  });
  expect(wrapper.find('.van-submit-bar__button').html()).toMatchSnapshot();
});

test('should render button slot correctly', () => {
  const wrapper = mount(SubmitBar, {
    slots: {
      button: () => 'Custom button',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
