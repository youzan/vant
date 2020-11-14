import { mount } from '@vue/test-utils';
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
      index: ({ index }) => `Custom Index: ${index}`,
    },
  });

  expect(wrapper.find('.van-image-preview__index').html()).toMatchSnapshot();
});

test('should render close icon when using closeable prop', () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      show: true,
      images,
      closeable: true,
    },
  });

  wrapper.find('.van-image-preview__close-icon').trigger('click');
  expect(wrapper.emitted('update:show')[0][0]).toEqual(false);
});

test('should change close icon when using close-icon prop', () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      show: true,
      closeable: true,
      closeIcon: 'success',
    },
  });

  expect(
    wrapper.find('.van-image-preview__close-icon').html()
  ).toMatchSnapshot();
});

test('should change close icon position when using close-icon-position prop', () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      show: true,
      closeable: true,
      closeIconPosition: 'top-left',
    },
  });

  expect(
    wrapper.find('.van-image-preview__close-icon').html()
  ).toMatchSnapshot();
});

test('should hide index when show-index prop is false', async () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      show: true,
    },
  });
  expect(wrapper.find('.van-image-preview__index').exists()).toBeTruthy();

  await wrapper.setProps({ showIndex: false });
  expect(wrapper.find('.van-image-preview__index').exists()).toBeFalsy();
});
