import 'vitest-canvas-mock';
import { mount } from '../../../test';
import { Lazyload } from '../../lazyload';
import VanImage from '..';

const IMAGE_URL = 'https://img.com';

test('should emit load event after image loaded', async () => {
  const wrapper = mount(VanImage, {
    props: {
      src: IMAGE_URL,
    },
  });

  await wrapper.find('img').trigger('load');

  expect(wrapper.emitted<[Event]>('load')![0][0]).toBeTruthy();
  expect(wrapper.html()).toMatchSnapshot();
});

test('should pass props to img', async () => {
  const wrapper = mount(VanImage, {
    props: {
      src: IMAGE_URL,
      referrerpolicy: 'no-referrer',
      crossorigin: 'anonymous',
    },
  });

  await wrapper.find('img').trigger('load');
  expect(wrapper.html()).toMatchSnapshot();
});

test('should watch src and reset', async () => {
  const wrapper = mount(VanImage, {
    props: {
      src: IMAGE_URL,
    },
  });

  await wrapper.find('img').trigger('load');
  await wrapper.setProps({ src: '' });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit error event when load image failed', () => {
  const wrapper = mount(VanImage, {
    props: {
      src: IMAGE_URL,
    },
  });

  wrapper.find('img').trigger('error');
  expect(wrapper.emitted<[Event]>('error')![0][0]).toBeTruthy();
});

test('should render loading placeholder when using lazy-load prop', () => {
  const wrapper = mount(VanImage, {
    props: {
      src: IMAGE_URL,
      lazyLoad: true,
    },
    global: {
      plugins: [Lazyload],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should not render loading placeholder when show-loading prop is false', async () => {
  const wrapper = mount(VanImage);
  expect(wrapper.find('.van-image__loading').exists()).toBeTruthy();

  await wrapper.setProps({
    showLoading: false,
  });
  expect(wrapper.find('.van-image__loading').exists()).toBeFalsy();
});

test('should not render error placeholder when show-error prop is false', async () => {
  const wrapper = mount(VanImage, {
    props: {
      src: IMAGE_URL,
    },
  });

  await wrapper.find('img').trigger('error');
  expect(wrapper.find('.van-image__error').exists()).toBeTruthy();

  await wrapper.setProps({
    showError: false,
  });
  expect(wrapper.find('.van-image__error').exists()).toBeFalsy();
});

test('should change error icon when using error-icon prop', async () => {
  const wrapper = mount(VanImage, {
    props: {
      errorIcon: 'error',
      src: IMAGE_URL,
    },
  });

  await wrapper.find('img').trigger('error');
  expect(wrapper.find('.van-icon-error').exists()).toBeTruthy();
});

test('should change loading icon when using loading-icon prop', () => {
  const wrapper = mount(VanImage, {
    props: {
      loadingIcon: 'success',
    },
  });

  expect(wrapper.find('.van-icon-success').exists()).toBeTruthy();
});

test('should apply icon-prefix prop to error-icon', async () => {
  const wrapper = mount(VanImage, {
    props: {
      errorIcon: 'error',
      iconPrefix: 'my-icon',
      src: IMAGE_URL,
    },
  });

  await wrapper.find('img').trigger('error');
  expect(wrapper.find('.van-image__error-icon').html()).toMatchSnapshot();
});

test('should apply icon-prefix prop to loading-icon', () => {
  const wrapper = mount(VanImage, {
    props: {
      loadingIcon: 'success',
      iconPrefix: 'my-icon',
    },
  });

  expect(wrapper.find('.van-image__loading-icon').html()).toMatchSnapshot();
});

test('should change border radius when using border-radius prop', () => {
  const wrapper = mount(VanImage, {
    props: {
      radius: 3,
    },
  });

  expect(wrapper.style.overflow).toEqual('hidden');
  expect(wrapper.style.borderRadius).toEqual('3px');
});

test('should change loading icon size when using icon-size prop', () => {
  const wrapper = mount(VanImage, {
    props: {
      iconSize: '3rem',
      loadingIcon: 'success',
    },
  });
  expect(wrapper.find('.van-image__loading-icon').style.fontSize).toEqual(
    '3rem',
  );
});

test('should change error icon size when using icon-size prop', async () => {
  const wrapper = mount(VanImage, {
    props: {
      src: IMAGE_URL,
      iconSize: '3rem',
      errorIcon: 'error',
    },
  });
  await wrapper.find('img').trigger('error');
  expect(wrapper.find('.van-image__error-icon').style.fontSize).toEqual('3rem');
});

test('should render default slot correctly', () => {
  const wrapper = mount(VanImage, {
    props: {
      src: IMAGE_URL,
    },
    slots: {
      default: () => 'Custom Default',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

// TODO
// test('should emit load event when using lazy-load prop and image loaded', (done) => {
//   const wrapper = mount(VanImage, {
//     props: {
//       lazyLoad: true,
//       src: IMAGE_URL,
//     },
//     global: {
//       mocks: {
//         $Lazyload: {
//           $on(eventName, hanlder) {
//             console.log('on ', eventName);
//             if (eventName === 'loaded') {
//               setTimeout(() => {
//                 hanlder({ el: null });
//                 hanlder({ el: wrapper.find('img').element });
//                 expect(wrapper.emitted('load')).toHaveLength(1);
//                 expect(wrapper.html()).toMatchSnapshot();
//                 wrapper.unmount();
//               });
//             }
//           },
//           $off() {
//             done();
//           },
//         },
//       },
//     },
//   });
// });

// test('lazy-load error event', (done) => {
//   const wrapper = mount(VanImage, {
//     props: {
//       lazyLoad: true,
//     },
//     mocks: {
//       $Lazyload: {
//         $on(eventName, hanlder) {
//           if (eventName === 'error') {
//             setTimeout(() => {
//               hanlder({ el: null });
//               hanlder({ el: wrapper.find('img').element });
//               expect(wrapper.emitted('error')).toHaveLength(1);
//               expect(wrapper.html()).toMatchSnapshot();
//               wrapper.unmount();
//             });
//           }
//         },
//         $off() {
//           done();
//         },
//       },
//     },
//   });
// });
