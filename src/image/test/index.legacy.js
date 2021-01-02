import { mount } from '@vue/test-utils';
import VanImage from '..';

test('click event', () => {
  const wrapper = mount(VanImage);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')[0][0]).toBeTruthy();
  wrapper.unmount();
});

test('load event', () => {
  const wrapper = mount(VanImage, {
    props: {
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
  });

  wrapper.find('img').trigger('load');

  expect(wrapper.emitted('load')[0][0]).toBeTruthy();
  expect(wrapper.html()).toMatchSnapshot();

  wrapper.setProps({ src: '' });
  expect(wrapper.html()).toMatchSnapshot();
});

test('error event', () => {
  const wrapper = mount(VanImage, {
    props: {
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
  });

  wrapper.find('img').trigger('error');

  expect(wrapper.emitted('error')[0][0]).toBeTruthy();
});

test('lazy load', () => {
  const wrapper = mount(VanImage, {
    props: {
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
      lazyLoad: true,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('lazy-load load event', (done) => {
  const wrapper = mount(VanImage, {
    props: {
      lazyLoad: true,
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    mocks: {
      $Lazyload: {
        $on(eventName, hanlder) {
          if (eventName === 'loaded') {
            setTimeout(() => {
              hanlder({ el: null });
              hanlder({ el: wrapper.find('img').element });
              expect(wrapper.emitted('load').length).toEqual(1);
              expect(wrapper.html()).toMatchSnapshot();
              wrapper.unmount();
            });
          }
        },
        $off() {
          done();
        },
      },
    },
  });
});

test('lazy-load error event', (done) => {
  const wrapper = mount(VanImage, {
    props: {
      lazyLoad: true,
    },
    mocks: {
      $Lazyload: {
        $on(eventName, hanlder) {
          if (eventName === 'error') {
            setTimeout(() => {
              hanlder({ el: null });
              hanlder({ el: wrapper.find('img').element });
              expect(wrapper.emitted('error').length).toEqual(1);
              expect(wrapper.html()).toMatchSnapshot();
              wrapper.unmount();
            });
          }
        },
        $off() {
          done();
        },
      },
    },
  });
});

test('show-loading prop', () => {
  const wrapper = mount(VanImage, {
    props: {
      showLoading: false,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('show-error prop', () => {
  const wrapper = mount(VanImage, {
    props: {
      showError: false,
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
  });

  wrapper.find('img').trigger('error');

  expect(wrapper.html()).toMatchSnapshot();
});

test('error-icon prop', () => {
  const wrapper = mount(VanImage, {
    props: {
      errorIcon: 'error',
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
  });

  wrapper.find('img').trigger('error');

  expect(wrapper.html()).toMatchSnapshot();
});

test('loading-icon prop', () => {
  const wrapper = mount(VanImage, {
    props: {
      loadingIcon: 'success',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('apply icon-prefix prop to error-icon', () => {
  const wrapper = mount(VanImage, {
    props: {
      errorIcon: 'error',
      iconPrefix: 'my-icon',
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
  });

  wrapper.find('img').trigger('error');

  expect(wrapper.html()).toMatchSnapshot();
});

test('apply icon-prefix prop to loading-icon', () => {
  const wrapper = mount(VanImage, {
    props: {
      loadingIcon: 'success',
      iconPrefix: 'my-icon',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('radius prop', () => {
  const wrapper = mount(VanImage, {
    props: {
      radius: 3,
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('default slot', () => {
  const wrapper = mount(VanImage, {
    props: {
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    slots: {
      default: () => 'Custom Default',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
