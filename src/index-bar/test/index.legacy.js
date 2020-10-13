import { mount, trigger, triggerDrag, mockScrollIntoView } from '../../../test';

function mockOffsetHeight(offsetHeight) {
  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    get() {
      return offsetHeight;
    },
  });
}

test('should allow to custom anchor text', () => {
  const wrapper = mount({
    template: `
      <van-index-bar>
        <van-index-anchor index="A">Title A</van-index-anchor>
        <van-index-anchor index="B">Title B</van-index-anchor>
      </van-index-bar>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('should scroll to anchor and emit select event after clicking the index-bar', () => {
  const onSelect = jest.fn();
  const wrapper = mount({
    template: `
      <van-index-bar @select="onSelect">
        <van-index-anchor index="A" />
        <van-index-anchor index="B" />
      </van-index-bar>
    `,
    methods: {
      onSelect,
    },
  });

  const fn = mockScrollIntoView();
  const indexes = wrapper.findAll('.van-index-bar__index');
  indexes.at(0).trigger('click');

  expect(fn).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith('A');
});

test('should scroll to anchor after touching the index-bar', () => {
  const onSelect = jest.fn();
  const wrapper = mount({
    template: `
      <van-index-bar @select="onSelect">
        <van-index-anchor index="A" />
        <van-index-anchor index="B" />
        <van-index-anchor index="XXX" />
      </van-index-bar>
    `,
    methods: {
      onSelect,
    },
  });

  const fn = mockScrollIntoView();
  const sidebar = wrapper.find('.van-index-bar__sidebar');
  const indexes = wrapper.findAll('.van-index-bar__index');

  document.elementFromPoint = function (x, y) {
    const index = y / 100;

    if (index === 1 || index === 2) {
      return indexes.at(index).element;
    }

    if (index === 3) {
      return {
        dataset: {},
      };
    }
  };

  // horizontal drag
  triggerDrag(sidebar, 100, 0);
  expect(fn).toHaveBeenCalledTimes(0);

  // vertical drag
  trigger(sidebar, 'touchstart', 0, 0);
  trigger(sidebar, 'touchmove', 0, 100);
  trigger(sidebar, 'touchmove', 0, 200);
  trigger(sidebar, 'touchmove', 0, 300);
  trigger(sidebar, 'touchmove', 0, 400);
  trigger(sidebar, 'touchend', 0, 400);
  expect(fn).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith('B');
});

test('should update active anchor after page scroll', () => {
  const nativeRect = Element.prototype.getBoundingClientRect;
  Element.prototype.getBoundingClientRect = function () {
    const { index } = this.dataset;
    return {
      top: index ? index * 10 : 0,
    };
  };

  mockOffsetHeight(10);

  const wrapper = mount({
    template: `
      <van-index-bar :sticky="sticky">
        <van-index-anchor
          v-for="index in 4"
          :key="index"
          :index="index"
          :data-index="index - 1"
        />
      </van-index-bar>
    `,
    data() {
      return {
        sticky: false,
      };
    },
  });

  window.scrollTop = 0;
  trigger(window, 'scroll');
  expect(wrapper).toMatchSnapshot();

  wrapper.setData({ sticky: true });
  trigger(window, 'scroll');
  expect(wrapper).toMatchSnapshot();
  wrapper.vm.$destroy();

  Element.prototype.getBoundingClientRect = nativeRect;
});

test('should emit change event when active index changed', () => {
  const nativeRect = Element.prototype.getBoundingClientRect;
  Element.prototype.getBoundingClientRect = function () {
    const { index } = this.dataset;
    return {
      top: index ? index * 10 : 0,
    };
  };

  mockOffsetHeight(10);

  const onChange = jest.fn();

  mount({
    template: `
      <van-index-bar @change="onChange">
        <van-index-anchor
          v-for="index in 4"
          :key="index"
          :index="index"
          :data-index="index - 1"
        />
      </van-index-bar>
    `,
    methods: {
      onChange,
    },
  });

  window.scrollTop = 0;
  trigger(window, 'scroll');
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith('B');

  window.scrollTop = 100;
  trigger(window, 'scroll');
  expect(onChange).toHaveBeenCalledTimes(2);
  expect(onChange).toHaveBeenLastCalledWith('D');

  Element.prototype.getBoundingClientRect = nativeRect;
});
