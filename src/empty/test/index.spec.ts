import { Empty } from '..';
import { mount } from '../../../test';

test('should render image slot correctly', () => {
  const wrapper = mount(Empty, {
    slots: {
      image: () => 'Custom Image',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render description slot correctly', () => {
  const wrapper = mount(Empty, {
    slots: {
      description: () => 'Custom description',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render bottom slot correctly', () => {
  const wrapper = mount(Empty, {
    slots: {
      default: () => 'Custom bottom',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render svg when image is network', () => {
  const wrapper = mount(Empty, {
    props: {
      image: 'network',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should change image size when using image-size prop', async () => {
  const wrapper = mount(Empty, {
    props: {
      imageSize: 50,
    },
  });

  const image = wrapper.find('.van-empty__image');

  expect(image.style.width).toEqual('50px');
  expect(image.style.height).toEqual('50px');

  await wrapper.setProps({ imageSize: '1vw' });
  expect(image.style.width).toEqual('1vw');
  expect(image.style.height).toEqual('1vw');
});
