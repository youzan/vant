import { ref, nextTick, onMounted } from 'vue';
import {
  mount,
  trigger,
  triggerDrag,
  mockScrollTop,
  mockScrollIntoView,
} from '../../../test';
import { IndexBar } from '..';
import { IndexAnchor } from '../../index-anchor';

test('should allow to custom anchor content', () => {
  const wrapper = mount({
    render: () => (
      <IndexBar>
        <IndexAnchor index="A">Title A</IndexAnchor>
      </IndexBar>
    ),
  });

  expect(wrapper.find('.van-index-anchor').html()).toMatchSnapshot();
});

test('should scroll to anchor and emit select event after clicking the index-bar', () => {
  const onSelect = jest.fn();
  const wrapper = mount({
    render: () => (
      <IndexBar onSelect={onSelect}>
        <IndexAnchor index="A" />
        <IndexAnchor index="B" />
      </IndexBar>
    ),
  });

  const fn = mockScrollIntoView();
  const indexes = wrapper.findAll('.van-index-bar__index');
  indexes[0].trigger('click');

  expect(fn).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith('A');
});

test('should scroll to anchor after touching the index-bar', () => {
  const onSelect = jest.fn();
  const wrapper = mount({
    render: () => (
      <IndexBar onSelect={onSelect}>
        <IndexAnchor index="A" />
        <IndexAnchor index="B" />
        <IndexAnchor index="XXX" />
      </IndexBar>
    ),
  });

  const fn = mockScrollIntoView();
  const sidebar = wrapper.find('.van-index-bar__sidebar');
  const indexes = wrapper.findAll('.van-index-bar__index');

  document.elementFromPoint = function (x, y) {
    const index = y / 100;

    if (index === 1 || index === 2) {
      return indexes[index].element;
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

test('should update active anchor after page scroll', async () => {
  const nativeRect = Element.prototype.getBoundingClientRect;
  Element.prototype.getBoundingClientRect = function () {
    const { index } = this.dataset;
    return {
      top: index ? index * 10 : 0,
      height: 10,
    };
  };

  const wrapper = mount({
    setup() {
      const sticky = ref(false);
      return {
        sticky,
      };
    },
    render() {
      return (
        <IndexBar sticky={this.sticky}>
          <IndexAnchor index={1} data-index="0" />
          <IndexAnchor index={2} data-index="1" />
          <IndexAnchor index={3} data-index="2" />
          <IndexAnchor index={4} data-index="3" />
        </IndexBar>
      );
    },
  });

  await mockScrollTop(0);
  expect(wrapper.html()).toMatchSnapshot();

  wrapper.vm.sticky = true;
  await nextTick();
  await trigger(window, 'scroll');
  expect(wrapper.html()).toMatchSnapshot();
  wrapper.unmount();

  Element.prototype.getBoundingClientRect = nativeRect;
});

test('should emit change event when active index changed', async () => {
  const nativeRect = Element.prototype.getBoundingClientRect;
  Element.prototype.getBoundingClientRect = function () {
    const { index } = this.dataset;
    return {
      top: index ? index * 10 : 0,
      height: 10,
    };
  };

  const onChange = jest.fn();

  mount({
    render() {
      return (
        <IndexBar onChange={onChange}>
          <IndexAnchor index={1} data-index="0" />
          <IndexAnchor index={2} data-index="1" />
          <IndexAnchor index={3} data-index="2" />
          <IndexAnchor index={4} data-index="3" />
        </IndexBar>
      );
    },
  });

  await mockScrollTop(0);
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith('B');

  await mockScrollTop(100);
  expect(onChange).toHaveBeenCalledTimes(2);
  expect(onChange).toHaveBeenLastCalledWith('D');

  Element.prototype.getBoundingClientRect = nativeRect;
});

test('should scroll to target element after calling scrollTo method', () => {
  const onSelect = jest.fn();
  const scrollIntoView = mockScrollIntoView();

  mount({
    setup() {
      const anchorRef = ref();

      onMounted(() => {
        anchorRef.value.scrollTo('C');
      });

      return {
        anchorRef,
      };
    },
    render() {
      return (
        <IndexBar ref="anchorRef" onSelect={onSelect}>
          <IndexAnchor index="A" />
          <IndexAnchor index="B" />
          <IndexAnchor index="C" />
          <IndexAnchor index="D" />
        </IndexBar>
      );
    },
  });

  expect(scrollIntoView).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith('C');
});

test('should render teleport prop correctly', () => {
  const root = document.createElement('div');
  mount({
    render: () => (
      <IndexBar teleport={root}>
        <IndexAnchor index="A">Title A</IndexAnchor>
      </IndexBar>
    ),
  });

  expect(root.querySelector('.van-index-bar__sidebar')).toBeTruthy();
});
