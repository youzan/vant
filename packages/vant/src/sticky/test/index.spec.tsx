import { nextTick, ref } from 'vue';
import { VueWrapper, flushPromises } from '@vue/test-utils';
import { mockScrollTop, trigger, mount } from '../../../test';
import { Sticky } from '..';
import { ComponentInstance } from '../../utils';

Object.defineProperty(window.HTMLElement.prototype, 'clientHeight', {
  value: 640,
});

function mockStickyRect(
  wrapper: VueWrapper<ComponentInstance>,
  rect: Partial<DOMRect>,
) {
  const mocked = vi
    .spyOn(wrapper.element, 'getBoundingClientRect')
    .mockReturnValue(rect as DOMRect);

  return () => mocked.mockRestore();
}

test('should sticky to top after scrolling', async () => {
  const wrapper = mount({
    render() {
      return <Sticky style="height: 10px;">Content</Sticky>;
    },
  });
  const restore = mockStickyRect(wrapper, {
    top: -100,
    bottom: -90,
  });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  restore();
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
  const restore = mockStickyRect(wrapper, {
    top: 640,
    bottom: 650,
  });

  await mockScrollTop(0);
  expect(wrapper.html()).toMatchSnapshot();

  restore();
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

  const restore = mockStickyRect(wrapper, {
    top: -100,
    bottom: -90,
  });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  restore();
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

  const restore = mockStickyRect(wrapper, {
    top: -100,
    bottom: -90,
  });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  restore();
});

test('should allow to using offset-top prop with rem unit', async () => {
  const originGetComputedStyle = window.getComputedStyle;

  window.getComputedStyle = () => ({ fontSize: '16px' }) as CSSStyleDeclaration;

  const wrapper = mount({
    render() {
      return (
        <Sticky style="height: 10px;" offsetTop="2rem">
          Content
        </Sticky>
      );
    },
  });

  const restore = mockStickyRect(wrapper, {
    top: -100,
    bottom: -90,
  });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  restore();
  window.getComputedStyle = originGetComputedStyle;
});

test('should allow to using offset-top prop with vw unit', async () => {
  Object.defineProperty(window, 'innerWidth', { value: 300 });
  trigger(window, 'resize');

  const wrapper = mount({
    render() {
      return (
        <Sticky style="height: 10px;" offsetTop="10vw">
          Content
        </Sticky>
      );
    },
  });

  const restore = mockStickyRect(wrapper, {
    top: -100,
    bottom: -90,
  });

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  restore();
});

test('should not trigger scroll event when hidden', () => {
  const onScroll = vi.fn();

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

  const mockStickyRect = vi
    .spyOn(wrapper.element.firstElementChild!, 'getBoundingClientRect')
    .mockReturnValue({
      height: 44,
      width: 88,
      top: -100,
      bottom: -56,
    } as DOMRect);
  const mockContainerRect = vi
    .spyOn(wrapper.element, 'getBoundingClientRect')
    .mockReturnValue({
      top: -100,
      bottom: 50,
    } as DOMRect);

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  mockStickyRect.mockReturnValue({
    height: 44,
    width: 88,
    top: -120,
    bottom: -76,
  } as DOMRect);
  mockContainerRect.mockReturnValue({
    top: -120,
    bottom: 30,
  } as DOMRect);
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

  const mockStickyRect = vi
    .spyOn(wrapper.element.children[1], 'getBoundingClientRect')
    .mockReturnValue({
      height: 44,
      width: 88,
      top: 690,
      bottom: 734,
    } as DOMRect);
  const mockContainerRect = vi
    .spyOn(wrapper.element, 'getBoundingClientRect')
    .mockReturnValue({
      top: 540,
      bottom: 734,
    } as DOMRect);

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  mockStickyRect.mockReturnValue({
    height: 44,
    width: 88,
    top: 770,
    bottom: 814,
  } as DOMRect);
  mockContainerRect.mockReturnValue({
    top: 620,
    bottom: 814,
  } as DOMRect);
  await mockScrollTop(20);
  expect(wrapper.html()).toMatchSnapshot();
  mockContainerRect.mockRestore();
  mockStickyRect.mockRestore();
});

test('should emit scroll event when visibility changed', async () => {
  const originIntersectionObserver = window.IntersectionObserver;

  const observe = vi.fn();
  const unobserve = vi.fn();
  const onScroll = vi.fn();

  type ObserverCallback = (
    entries: Partial<IntersectionObserverEntry>[],
  ) => void;
  let observerCallback: ObserverCallback = () => {};

  window.IntersectionObserver = class MockIntersectionObserver {
    constructor(callback: ObserverCallback) {
      observerCallback = callback;
    }

    observe() {
      observe();
    }

    unobserve() {
      unobserve();
    }
  } as any;

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
  expect(onScroll).toHaveBeenCalledTimes(3);

  wrapper.unmount();
  expect(unobserve).toHaveBeenCalledTimes(1);

  window.IntersectionObserver = originIntersectionObserver;
});

test('should emit change event when sticky status changed', async () => {
  const wrapper = mount(Sticky, {
    attrs: {
      style: 'height: 10px',
    },
  });

  const restore = mockStickyRect(wrapper as any, {
    top: -100,
    bottom: -90,
  });

  await mockScrollTop(100);
  expect(wrapper.emitted('change')![0]).toEqual([true]);

  restore();
});

test('should sticky resize or orientationchange reset root height and width', async () => {
  const wrapper = mount({
    render() {
      return (
        <Sticky>
          <div class="content" style="height:20px">
            Content
          </div>
        </Sticky>
      );
    },
  });

  Object.defineProperty(window, 'innerWidth', { value: 375 });

  const mockStickyRect = vi
    .spyOn(wrapper.element, 'getBoundingClientRect')
    .mockReturnValue({
      top: -100,
      bottom: -90,
      width: window.innerWidth,
      height: 20,
    } as DOMRect);

  await mockScrollTop(100);
  expect(wrapper.html()).toMatchSnapshot();

  Object.defineProperty(window, 'innerWidth', { value: 677 });
  mockStickyRect.mockReturnValue({
    width: window.innerWidth,
    height: 20,
  } as DOMRect);
  await trigger(window, 'resize');
  await flushPromises();
  expect(wrapper.html()).toMatchSnapshot();

  mockStickyRect.mockRestore();
});
