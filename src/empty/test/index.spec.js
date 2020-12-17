import Empty from '..';
import { mount } from '../../../test';

test('image slot', () => {
  const wrapper = mount(Empty, {
    scopedSlots: {
      image: () => 'Custom Image',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('description slot', () => {
  const wrapper = mount(Empty, {
    scopedSlots: {
      description: () => 'Custom description',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('bottom slot', () => {
  const wrapper = mount(Empty, {
    scopedSlots: {
      default: () => 'Custom bottom',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('render svg when image is network', () => {
  const wrapper = mount(Empty, {
    propsData: {
      image: 'network',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('image-size prop', () => {
  const wrapper = mount(Empty, {
    propsData: {
      imageSize: 50,
    },
  });

  const image = wrapper.find('.van-empty__image').element;

  expect(image.style.width).toEqual('50px');
  expect(image.style.height).toEqual('50px');

  wrapper.setProps({ imageSize: '1vw' });
  expect(image.style.width).toEqual('1vw');
  expect(image.style.height).toEqual('1vw');
});
