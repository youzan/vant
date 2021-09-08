import { mount } from '../../../test';
import { Loading } from '..';

test('should change loading size when using size prop', () => {
  const wrapper = mount(Loading, {
    props: {
      size: 20,
    },
  });

  const spinner = wrapper.find('.van-loading__spinner');
  expect(spinner.style.width).toEqual('20px');
  expect(spinner.style.height).toEqual('20px');
});

test('should change text font-size when using text-size prop', () => {
  const wrapper = mount(Loading, {
    props: {
      textSize: 20,
    },
    slots: {
      default: () => 'Text',
    },
  });

  expect(wrapper.find('.van-loading__text').style.fontSize).toEqual('20px');
});

test('should change text color when using text-color prop', async () => {
  const wrapper = mount(Loading, {
    props: {
      textColor: 'red',
    },
    slots: {
      default: () => 'Loading Text',
    },
  });

  expect(wrapper.find('.van-loading__text').style.color).toBe('red');
});

test('should change text color when using color prop', async () => {
  const wrapper = mount(Loading, {
    props: {
      color: 'green',
    },
    slots: {
      default: () => 'Loading Text',
    },
  });

  expect(wrapper.find('.van-loading__text').style.color).toBe('green');
});

test('should change text color to textColor when using color & textColor prop', async () => {
  const wrapper = mount(Loading, {
    props: {
      color: 'green',
      textColor: 'red',
    },
    slots: {
      default: () => 'Loading Text',
    },
  });

  expect(wrapper.find('.van-loading__text').style.color).toBe('red');
});
