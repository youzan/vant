import { mount, later } from '../../../test';
import { Tab } from '..';
import { Tabs } from '../../tabs';

type ScrollMode = 'element' | 'window' | 'body' | 'self';

type FixtureOptions = {
  mode?: ScrollMode;
  parentTop?: number;
  tabTop?: number;
  scrollTop?: number;
  offsetTop?: number;
  scrollspy?: boolean;
};

async function withStickyTabs(
  options: FixtureOptions,
  check: (fixture: {
    clickSecondTab: () => Promise<void>;
    isFixed: () => boolean;
    getScrollTop: () => number;
    scrollWrites: number[];
    expectRootScroll: (value: number) => void;
    expectRootUnchanged: () => void;
  }) => Promise<void>,
) {
  const {
    mode = 'element',
    parentTop = 0,
    tabTop = 120,
    scrollTop: initialScrollTop = 500,
    offsetTop = 0,
    scrollspy = false,
  } = options;
  const host = document.createElement('div');
  const restore: (() => void)[] = [];
  const originalBodyScrollTop = document.body.scrollTop;
  const originalDocumentScrollTop = document.documentElement.scrollTop;
  const scrollWindow = window as Window & { scrollTop?: number };
  const hasWindowScrollTop = 'scrollTop' in window;
  const originalWindowScrollTop = scrollWindow.scrollTop;
  let pageOffset = mode === 'window' ? initialScrollTop : 0;
  let elementScrollTop = initialScrollTop;
  const scrollWrites: number[] = [];
  const onChange = rs.fn();
  let wrapper: ReturnType<typeof mount> | undefined;

  const define = (
    target: object,
    key: string,
    descriptor: PropertyDescriptor,
  ) => {
    const original = Object.getOwnPropertyDescriptor(target, key);
    Object.defineProperty(target, key, { configurable: true, ...descriptor });
    restore.push(() => {
      if (original) {
        Object.defineProperty(target, key, original);
      } else {
        Reflect.deleteProperty(target, key);
      }
    });
  };

  const rect = (top: number, height: number) =>
    ({
      x: 0,
      y: top,
      top,
      bottom: top + height,
      left: 0,
      right: 300,
      width: 300,
      height,
    }) as DOMRect;

  const mockRect = (element: Element, getTop: () => number, height: number) => {
    define(element, 'getBoundingClientRect', {
      value: () => rect(getTop(), height),
    });
    define(element, 'offsetParent', { get: () => element.parentElement });
  };

  const scrollTo = rs.fn((_x: number, y: number) => {
    pageOffset = y;
  });

  try {
    define(window, 'pageYOffset', { get: () => pageOffset });
    define(window, 'scrollTo', { value: scrollTo, writable: true });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = mode === 'body' ? initialScrollTop : 0;
    if (hasWindowScrollTop) {
      scrollWindow.scrollTop = pageOffset;
    }
    if (mode === 'element') {
      host.style.overflowY = 'auto';
      host.style.height = '300px';
    }
    document.body.appendChild(host);

    wrapper = mount(
      {
        render() {
          return (
            <Tabs
              sticky
              duration={0}
              offsetTop={offsetTop}
              scrollspy={scrollspy}
              onChange={onChange}
              style={
                mode === 'self' ? { overflowY: 'auto', height: '300px' } : {}
              }
            >
              <Tab title="first">First content</Tab>
              <Tab title="second">Second content</Tab>
            </Tabs>
          );
        },
      },
      { attachTo: host },
    );

    const tabs = wrapper.find('.van-tabs').element as HTMLElement;
    const sticky = wrapper.find('.van-sticky').element;
    const placeholder = sticky.parentElement!;
    const header = wrapper.find('.van-tabs__wrap').element.parentElement!;
    const scroller = mode === 'self' ? tabs : host;
    define(scroller, 'scrollTop', {
      get: () => elementScrollTop,
      set: (value: number) => {
        elementScrollTop = value;
        scrollWrites.push(value);
      },
    });

    const rootTop = () =>
      mode === 'element'
        ? parentTop + tabTop - elementScrollTop
        : tabTop - (pageOffset || document.body.scrollTop);
    const headerTop = () =>
      rootTop() - (mode === 'self' ? elementScrollTop : 0);
    mockRect(host, () => parentTop, 300);
    mockRect(tabs, rootTop, 5000);
    mockRect(placeholder, headerTop, 44);
    mockRect(header, headerTop, 44);
    wrapper.findAll('.van-tab__panel').forEach((panel, index) => {
      mockRect(panel.element, () => headerTop() + 44 + index * 2000, 2000);
    });

    await later();
    const scrollTarget =
      mode === 'element' || mode === 'self' ? scroller : window;
    scrollTarget.dispatchEvent(new Event('scroll', { bubbles: false }));
    await later();
    scrollWrites.length = 0;
    scrollTo.mockClear();
    onChange.mockClear();

    await check({
      isFixed: () => sticky.classList.contains('van-sticky--fixed'),
      getScrollTop: () => elementScrollTop,
      scrollWrites,
      async clickSecondTab() {
        await wrapper!.findAll('.van-tab')[1].trigger('click');
        await later();
        expect(
          wrapper!.findAll('.van-tab')[1].attributes('aria-selected'),
        ).toBe('true');
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(1, 'second');
      },
      expectRootScroll(value) {
        if (hasWindowScrollTop) {
          expect(scrollWindow.scrollTop).toBe(value);
        } else {
          expect(scrollTo).toHaveBeenCalledWith(window.scrollX, value);
        }
        expect(document.body.scrollTop).toBe(value);
      },
      expectRootUnchanged() {
        expect(scrollTo).not.toHaveBeenCalled();
        expect(pageOffset).toBe(0);
        expect(document.body.scrollTop).toBe(0);
        if (hasWindowScrollTop) {
          expect(scrollWindow.scrollTop).toBe(0);
        }
      },
    });
  } finally {
    wrapper?.unmount();
    restore.reverse().forEach((reset) => reset());
    document.body.scrollTop = originalBodyScrollTop;
    document.documentElement.scrollTop = originalDocumentScrollTop;
    if (hasWindowScrollTop) {
      scrollWindow.scrollTop = originalWindowScrollTop;
    }
    host.remove();
  }
}

test('should scroll the parent container back to the sticky tabs when switching', async () => {
  await withStickyTabs({}, async (fixture) => {
    expect(fixture.isFixed()).toBe(true);
    await fixture.clickSecondTab();
    expect(fixture.getScrollTop()).toBe(120);
    expect(fixture.scrollWrites).toEqual([120]);
    fixture.expectRootUnchanged();
  });
});

test('should preserve viewport offset and round up the parent scroll target', async () => {
  await withStickyTabs(
    { parentTop: 80, tabTop: 240, scrollTop: 400, offsetTop: 20.25 },
    async (fixture) => {
      expect(fixture.isFixed()).toBe(true);
      await fixture.clickSecondTab();
      expect(fixture.getScrollTop()).toBe(300);
      expect(fixture.scrollWrites).toEqual([300]);
      fixture.expectRootUnchanged();
    },
  );
});

test.each(['window', 'body'] as const)(
  'should preserve root scrolling when %s provides the scroll position',
  async (mode) => {
    await withStickyTabs(
      { mode, tabTop: 120.5, offsetTop: 20.25 },
      async (fixture) => {
        expect(fixture.isFixed()).toBe(true);
        await fixture.clickSecondTab();
        fixture.expectRootScroll(101);
        expect(fixture.scrollWrites).toEqual([]);
      },
    );
  },
);

test('should only reset the parent position for fixed tabs outside scrollspy mode', async () => {
  await withStickyTabs({ scrollTop: 0 }, async (fixture) => {
    expect(fixture.isFixed()).toBe(false);
    await fixture.clickSecondTab();
    expect(fixture.scrollWrites).toEqual([]);
    fixture.expectRootUnchanged();
  });

  await withStickyTabs({ scrollspy: true }, async (fixture) => {
    expect(fixture.isFixed()).toBe(true);
    await fixture.clickSecondTab();
    expect(fixture.scrollWrites).toEqual([2120]);
    fixture.expectRootUnchanged();
  });
});

test('should preserve root scrolling when the tabs root is its own scroller', async () => {
  await withStickyTabs({ mode: 'self' }, async (fixture) => {
    expect(fixture.isFixed()).toBe(true);
    await fixture.clickSecondTab();
    expect(fixture.getScrollTop()).toBe(500);
    expect(fixture.scrollWrites).toEqual([]);
    fixture.expectRootScroll(120);
  });
});
