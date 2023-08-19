// @ts-nocheck
import { Watermark } from '..';
import { mount } from '../../../test';

describe('watermark', () => {
  beforeEach(() => {
    const createElement = document.createElement.bind(document);
    document.createElement = (tagName: string) => {
      if (tagName === 'canvas') {
        return {
          ...createElement(tagName),
          getContext: () => {
            () => {};
          },
          toDataURL: () => 'base64Url',
        };
      }
      return createElement(tagName);
    };
    global.URL.createObjectURL = vi.fn(() => 'run to here');
    global.Image = class {
      crossOrigin = 'anonymous';

      referrerPolicy = 'no-referrer';

      naturalWidth = 800;

      naturalHeight = 550;

      onload: () => void = () => {};

      // just mock to trigge onload
      _src = '';

      get src() {
        return this._src;
      }

      set src(val) {
        this._src = val;
        this.onload();
      }
    };
  });

  test('should render content', () => {
    const wrapper = mount(Watermark, {
      props: {
        content: 'Vant',
        textColor: 'red',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render image', () => {
    const wrapper = mount(Watermark, {
      props: {
        content: 'Vant',
        image:
          'https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png',
        opacity: 0.5,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render html', () => {
    const wrapper = mount(Watermark, {
      slots: {
        content: () => 'vant watermark test',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('test width, height, rotate, zIndex', () => {
    const wrapper = mount(Watermark, {
      props: {
        width: 20,
        height: 20,
        rotate: 20,
        zIndex: 200,
      },
      slots: {
        content: () => 'vant watermark test',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('test false value fullPage', () => {
    const wrapper = mount(Watermark, {
      props: {
        fullPage: false,
      },
      slots: {
        content: () => 'vant watermark test',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
