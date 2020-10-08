import { mount, mockScrollTop } from '../../../test';

test('sticky to top', () => {
  const wrapper = mount({
    template: `
      <van-sticky style="height: 10px;">
        Content
      </van-sticky>
    `,
  });

  expect(wrapper).toMatchSnapshot();
  mockScrollTop(100);
  expect(wrapper).toMatchSnapshot();
  mockScrollTop(0);
});

test('z-index prop', () => {
  const wrapper = mount({
    template: `
      <van-sticky style="height: 10px;" :z-index="0">
        Content
      </van-sticky>
    `,
  });

  mockScrollTop(100);
  expect(wrapper).toMatchSnapshot();
  mockScrollTop(0);
});

test('offset-top prop', () => {
  const wrapper = mount({
    template: `
      <van-sticky style="height: 10px;" :offset-top="10">
        Content
      </van-sticky>
    `,
  });

  mockScrollTop(100);
  expect(wrapper).toMatchSnapshot();
  mockScrollTop(0);
});

test('offset-top with rem unit', () => {
  const originGetComputedStyle = window.getComputedStyle;

  window.getComputedStyle = () => ({ fontSize: '16px' });

  const wrapper = mount({
    template: `
      <van-sticky style="height: 10px;" offset-top="1rem">
        Content
      </van-sticky>
    `,
  });

  mockScrollTop(100);
  expect(wrapper).toMatchSnapshot();
  mockScrollTop(0);

  window.getComputedStyle = originGetComputedStyle;
});

test('offset-top with vw unit', () => {
  window.innerWidth = 300;

  const wrapper = mount({
    template: `
      <van-sticky style="height: 10px;" offset-top="10vw">
        Content
      </van-sticky>
    `,
  });

  mockScrollTop(100);
  expect(wrapper).toMatchSnapshot();
  mockScrollTop(0);
});

test('should not trigger scroll event when hidden', () => {
  const scroll = jest.fn();
  mount({
    template: `
      <van-sticky style="height: 10px; display: none;" @scroll="scroll">
        Content
      </van-sticky>
    `,
    methods: {
      scroll,
    },
  });

  expect(scroll).toHaveBeenCalledTimes(0);
});

test('container prop', () => {
  const wrapper = mount({
    template: `
      <div ref="container" style="height: 20px;">
        <van-sticky ref="sticky" style="height: 10px;" :container="container">
          Content
        </van-sticky>
      </div>
    `,
    data() {
      return {
        container: null,
      };
    },
    mounted() {
      this.container = this.$refs.container;
    },
  });

  mockScrollTop(15);
  expect(wrapper).toMatchSnapshot();
  mockScrollTop(25);
  expect(wrapper).toMatchSnapshot();
  mockScrollTop(0);
});

test('trigger scroll when visibility changed', () => {
  const originIntersectionObserver = window.IntersectionObserver;

  const observe = jest.fn();
  const unobserve = jest.fn();
  const scroll = jest.fn();

  let observerCallback;

  window.IntersectionObserver = class IntersectionObserver {
    constructor(callback) {
      observerCallback = callback;
    }

    observe() {
      observe();
    }

    unobserve() {
      unobserve();
    }
  };

  const wrapper = mount({
    template: `
      <van-sticky style="height: 10px;" @scroll="scroll">
        Content
      </van-sticky>
    `,
    methods: {
      scroll,
    },
  });

  expect(observe).toHaveBeenCalledTimes(1);
  expect(scroll).toHaveBeenCalledTimes(1);

  observerCallback([{ intersectionRatio: 1 }]);
  expect(scroll).toHaveBeenCalledTimes(2);

  observerCallback([{ intersectionRatio: 0 }]);
  expect(scroll).toHaveBeenCalledTimes(2);

  wrapper.destroy();
  expect(unobserve).toHaveBeenCalledTimes(1);

  window.IntersectionObserver = originIntersectionObserver;
});
