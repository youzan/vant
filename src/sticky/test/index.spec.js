import { nextTick, ref } from 'vue';
import { mount, mockScrollTop } from '../../../test';
import Sticky from '..';

test('should sticky to top after scrolling', async () => {
  const wrapper = mount({
    render() {
      return <Sticky style="height: 10px;">Content</Sticky>;
    },
  });

  expect(wrapper.html()).toMatchSnapshot();

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();
  await mockScrollTop(0);
});

test('should update z-index when using z-index prop', async () => {
  const wrapper = mount({
    render() {
      return (
        <Sticky style="height: 10px;" zIndex={0}>
          Content
        </Sticky>
      );
    },
  });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();
  await mockScrollTop(0);
});

test('should add offset top when using offset-top prop', async () => {
  const wrapper = mount({
    render() {
      return (
        <Sticky style="height: 10px;" offsetTop={10}>
          Content
        </Sticky>
      );
    },
  });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();
  await mockScrollTop(0);
});

test('should allow to using offset-top prop with rem unit', async () => {
  const originGetComputedStyle = window.getComputedStyle;

  window.getComputedStyle = () => ({ fontSize: '16px' });

  const wrapper = mount({
    render() {
      return (
        <Sticky style="height: 10px;" offsetTop="2rem">
          Content
        </Sticky>
      );
    },
  });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  await mockScrollTop(0);
  window.getComputedStyle = originGetComputedStyle;
});

test('should allow to using offset-top prop with vw unit', async () => {
  window.innerWidth = 300;

  const wrapper = mount({
    render() {
      return (
        <Sticky style="height: 10px;" offsetTop="10vw">
          Content
        </Sticky>
      );
    },
  });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();
  await mockScrollTop(0);
});

test('should not trigger scroll event when hidden', () => {
  const onScroll = jest.fn();

  mount({
    render() {
      return (
        <Sticky style="height: 10px; display: none;" onScroll={onScroll}>
          Content
        </Sticky>
      );
    },
  });

  expect(onScroll).toHaveBeenCalledTimes(0);
});

test('should sticky inside container when using container prop', async () => {
  const wrapper = mount({
    setup() {
      const container = ref();
      return {
        container,
      };
    },
    render() {
      return (
        <div ref="container" style="height: 20px;">
          <Sticky ref="sticky" style="height: 10px;" container={this.container}>
            Content
          </Sticky>
        </div>
      );
    },
  });

  await nextTick();
  await mockScrollTop(15);
  expect(wrapper.html()).toMatchSnapshot();
  await mockScrollTop(25);
  expect(wrapper.html()).toMatchSnapshot();
  await mockScrollTop(0);
});

test('should emit scroll event when visibility changed', async () => {
  const originIntersectionObserver = window.IntersectionObserver;

  const observe = jest.fn();
  const unobserve = jest.fn();
  const onScroll = jest.fn();

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
    render() {
      return (
        <Sticky style="height: 10px;" onScroll={onScroll}>
          Content
        </Sticky>
      );
    },
  });

  await nextTick();
  await mockScrollTop(0);

  expect(observe).toHaveBeenCalledTimes(1);
  expect(onScroll).toHaveBeenCalledTimes(1);

  observerCallback([{ intersectionRatio: 1 }]);
  expect(onScroll).toHaveBeenCalledTimes(2);

  wrapper.element.style.display = 'none';
  observerCallback([{ intersectionRatio: 0 }]);
  expect(onScroll).toHaveBeenCalledTimes(2);

  wrapper.unmount();
  expect(unobserve).toHaveBeenCalledTimes(1);

  window.IntersectionObserver = originIntersectionObserver;
});
