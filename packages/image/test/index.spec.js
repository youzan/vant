
import { mount } from '../../../test/utils';
import Image from '..';

test('click event', () => {
  const wrapper = mount(Image);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')[0][0]).toBeTruthy();
});

test('load event', () => {
  const wrapper = mount(Image, {
    propsData: {
      src: 'https://img.yzcdn.cn/vant/cat.jpeg'
    }
  });

  wrapper.find('img').trigger('load');

  expect(wrapper.emitted('load')[0][0]).toBeTruthy();
  expect(wrapper).toMatchSnapshot();

  wrapper.setProps({ src: '' });
  expect(wrapper).toMatchSnapshot();
});

test('error event', () => {
  const wrapper = mount(Image, {
    propsData: {
      src: 'https://img.yzcdn.cn/vant/cat.jpeg'
    }
  });

  wrapper.find('img').trigger('error');

  expect(wrapper.emitted('error')[0][0]).toBeTruthy();
});

test('lazy load', () => {
  const wrapper = mount(Image, {
    propsData: {
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
      lazyLoad: true
    }
  });

  expect(wrapper).toMatchSnapshot();
});
