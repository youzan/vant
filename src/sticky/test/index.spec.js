import { nextTick, ref } from 'vue';
import { mockScrollTop, mount } from '../../../test';
import Sticky from '..';

Object.defineProperty(window.HTMLElement.prototype, 'clientHeight', {
  value: 640,
});

test('should sticky to top after scrolling', async () => {
  const wrapper = mount({
    render() {
      return <Sticky style="height: 10px;">Content</Sticky>;
    },
  });
  const mockStickyRect = jest
    .spyOn(wrapper.element, 'getBoundingClientRect')
    .mockReturnValue({
      top: -100,
      bottom: -90,
    });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  mockStickyRect.mockRestore();
});

test('should sticky to bottom after scrolling', async () => {
  const wrapper = mount({
    render() {
      return (
        <Sticky style="height: 10px;" offsetBottom={10} position="bottom">
          Content
        </Sticky>
      );
    },
  });
  const mockStickyRect = jest
    .spyOn(wrapper.element, 'getBoundingClientRect')
    .mockReturnValue({
      top: 640,
      bottom: 650,
    });

  await mockScrollTop(0);
  expect(wrapper.html()).toMatchSnapshot();

  mockStickyRect.mockRestore();
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

  const mockStickyRect = jest
    .spyOn(wrapper.element, 'getBoundingClientRect')
    .mockReturnValue({
      top: -100,
      bottom: -90,
    });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  mockStickyRect.mockRestore();
});

test('should add offset top when using offset-top prop', async () => {
  const wrapper = mount({
    render() {
      return (
        <Sticky style="height: 10px;" offsetTop={10} position="top">
          Content
        </Sticky>
      );
    },
  });

  const mockStickyRect = jest
    .spyOn(wrapper.element, 'getBoundingClientRect')
    .mockReturnValue({
      top: -100,
      bottom: -90,
    });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  mockStickyRect.mockRestore();
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

  const mockStickyRect = jest
    .spyOn(wrapper.element, 'getBoundingClientRect')
    .mockReturnValue({
      top: -100,
      bottom: -90,
    });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  mockStickyRect.mockRestore();
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

  const mockStickyRect = jest
    .spyOn(wrapper.element, 'getBoundingClientRect')
    .mockReturnValue({
      top: -100,
      bottom: -90,
    });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  mockStickyRect.mockRestore();
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
        <div ref="container" style="height: 150px;">
          <Sticky ref="sticky" style="height: 44px;" container={this.container}>
            Content
          </Sticky>
        </div>
      );
    },
  });

  const mockStickyRect = jest
    .spyOn(wrapper.element.firstElementChild, 'getBoundingClientRect')
    .mockReturnValue({
      height: 44,
      width: 88,
      top: -100,
      bottom: -56,
    });
  const mockContainerRect = jest
    .spyOn(wrapper.element, 'getBoundingClientRect')
    .mockReturnValue({
      top: -100,
      bottom: 50,
    });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  mockStickyRect.mockReturnValue({
    height: 44,
    width: 88,
    top: -120,
    bottom: -76,
  });
  mockContainerRect.mockReturnValue({
    top: -120,
    bottom: 30,
  });
  await mockScrollTop(120);
  expect(wrapper.html()).toMatchSnapshot();
  mockContainerRect.mockRestore();
  mockStickyRect.mockRestore();
});

test('should sticky inside container bottom when using container prop', async () => {
  const wrapper = mount({
    setup() {
      const container = ref();
      return {
        container,
      };
    },
    render() {
      return (
        <div ref="container" style="margin-top: 640px">
          <div style="height: 150px" />
          <Sticky
            ref="sticky"
            style="height: 44px;"
            container={this.container}
            position="bottom"
          >
            Content
          </Sticky>
        </div>
      );
    },
  });

  const mockStickyRect = jest
    .spyOn(wrapper.element.children[1], 'getBoundingClientRect')
    .mockReturnValue({
      height: 44,
      width: 88,
      top: 690,
      bottom: 734,
    });
  const mockContainerRect = jest
    .spyOn(wrapper.element, 'getBoundingClientRect')
    .mockReturnValue({
      top: 540,
      bottom: 734,
    });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  mockStickyRect.mockReturnValue({
    height: 44,
    width: 88,
    top: 770,
    bottom: 814,
  });
  mockContainerRect.mockReturnValue({
    top: 620,
    bottom: 814,
  });
  await mockScrollTop(20);
  expect(wrapper.html()).toMatchSnapshot();
  mockContainerRect.mockRestore();
  mockStickyRect.mockRestore();
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

  wrapper.style.display = 'none';
  observerCallback([{ intersectionRatio: 0 }]);
  expect(onScroll).toHaveBeenCalledTimes(2);

  wrapper.unmount();
  expect(unobserve).toHaveBeenCalledTimes(1);

  window.IntersectionObserver = originIntersectionObserver;
});
