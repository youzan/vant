import { mount } from '@vue/test-utils';
import ImagePreview from '..';
import ImagePreviewComponent from '../ImagePreview';
import { later } from '../../../test';

const images = [
  'https://img.yzcdn.cn/1.png',
  'https://img.yzcdn.cn/2.png',
  'https://img.yzcdn.cn/3.png',
];

test('should swipe to currect index after calling the swipeTo method', async () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      show: true,
      images,
    },
  });
  await later();
  wrapper.vm.swipeTo(2);

  await later(100);
  expect(wrapper.find('.van-image-preview__index').html()).toMatchSnapshot();
});

test('should allow to use the teleport prop', () => {
  const root = document.createElement('div');
  mount(ImagePreviewComponent, {
    props: {
      show: true,
      teleport: root,
    },
  });

  expect(root.querySelector('.van-image-preview')).toBeTruthy();
});

test('should render cover slot correctly', () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      show: true,
    },
    slots: {
      cover: () => 'Custom Cover',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render index slot correctly', () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      show: true,
    },
    slots: {
      index: () => `Custom Index`,
    },
  });

  expect(wrapper.find('.van-image-preview__index').html()).toMatchSnapshot();
});

test('should expose ImagePreviewComponent in ImagePreview.Component', () => {
  expect(ImagePreview.Component).toEqual(ImagePreviewComponent);
});
