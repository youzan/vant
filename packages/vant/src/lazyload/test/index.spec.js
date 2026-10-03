import { h, isReactive, nextTick } from 'vue';
import { mount } from '../../../test';
import createLazyComponent from '../vue-lazyload/lazy-component';
import createLazyImage from '../vue-lazyload/lazy-image';

const createLazyManager = (overrides = {}) => ({
  options: {
    attempt: 3,
    preLoad: 1,
    silent: true,
  },
  addLazyBox: rs.fn(),
  removeComponent: rs.fn(),
  lazyLoadHandler: rs.fn(),
  valueFormatter: (src) => ({
    src,
    loading: `loading-${src}`,
    error: `error-${src}`,
  }),
  ...overrides,
});

test('LazyComponent should preserve the public component instance', async () => {
  const lazy = createLazyManager();
  const wrapper = mount(createLazyComponent(lazy), {
    slots: {
      default: () => h('span', 'content'),
    },
  });
  const vm = wrapper.vm;
  const lazyBox = lazy.addLazyBox.mock.calls[0][0];

  expect(lazy.addLazyBox).toHaveBeenCalledTimes(1);
  expect(lazyBox.$el).toBe(wrapper.element);
  expect(lazyBox.el).toBe(wrapper.element);
  expect(lazyBox.load).toBe(vm.load);
  expect(vm.el).toBe(wrapper.element);
  expect(vm.show).toBe(false);
  expect(vm.state).toEqual({ loaded: false });
  expect(vm.checkInView).toBeTypeOf('function');
  expect(vm.load).toBeTypeOf('function');
  expect(vm.destroy).toBeTypeOf('function');

  vm.load();
  await nextTick();

  expect(vm.show).toBe(true);
  expect(vm.state.loaded).toBe(true);

  const payload = wrapper.emitted('show')[0][0];
  expect(payload.show).toBe(true);
  expect(payload.state.loaded).toBe(true);
  expect(payload.load).toBe(vm.load);
  expect(payload.checkInView).toBe(vm.checkInView);
  expect(wrapper.html()).toBe('<div><span>content</span></div>');

  wrapper.unmount();
  expect(lazy.removeComponent.mock.calls[0][0]).toBe(lazyBox);
});

test('LazyImage should preserve public state and re-observe on src change', async () => {
  const observer = {
    observe: rs.fn(),
  };
  const lazy = createLazyManager({ observer });
  const wrapper = mount(createLazyImage(lazy), {
    props: {
      src: 'a.png',
    },
  });
  const vm = wrapper.vm;
  const lazyBox = lazy.addLazyBox.mock.calls[0][0];

  expect(lazy.addLazyBox).toHaveBeenCalledTimes(1);
  expect(lazyBox.$el).toBe(wrapper.element);
  expect(lazyBox.el).toBe(wrapper.element);
  expect(lazyBox.load).toBe(vm.load);
  expect(vm.el).toBe(wrapper.element);
  expect(vm.src).toBe('a.png');
  expect(vm.renderSrc).toBe('loading-a.png');
  expect(vm.options.src).toBe('a.png');
  expect(isReactive(vm.options)).toBe(true);
  expect(isReactive(vm.state)).toBe(true);
  expect(vm.init).toBeTypeOf('function');
  expect(vm.checkInView).toBeTypeOf('function');
  expect(vm.load).toBeTypeOf('function');

  await wrapper.setProps({ src: 'b.png' });

  expect(lazy.addLazyBox).toHaveBeenCalledTimes(1);
  expect(lazy.lazyLoadHandler).toHaveBeenCalledTimes(2);
  expect(observer.observe).toHaveBeenCalledTimes(1);
  expect(observer.observe).toHaveBeenCalledWith(wrapper.element);
  expect(vm.src).toBe('b.png');
  expect(vm.renderSrc).toBe('loading-b.png');
  expect(vm.options.src).toBe('b.png');
  expect(wrapper.attributes('src')).toBe('loading-b.png');

  wrapper.unmount();
  expect(lazy.removeComponent.mock.calls[0][0]).toBe(lazyBox);
});
