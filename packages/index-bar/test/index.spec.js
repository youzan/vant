import { mount, trigger, triggerDrag } from '../../../test/utils';
import Vue from 'vue';
import IndexBar from '..';
import IndexAnchor from '../../index-anchor';

Vue.use(IndexBar);
Vue.use(IndexAnchor);

function mockScrollIntoView() {
  const fn = jest.fn();
  Element.prototype.scrollIntoView = fn;
  return fn;
}

test('custom anchor text', () => {
  const wrapper = mount({
    template: `
      <van-index-bar>
        <van-index-anchor index="A">Title A</van-index-anchor>
        <van-index-anchor index="B">Title B</van-index-anchor>
      </van-index-bar>
    `
  });

  expect(wrapper).toMatchSnapshot();
});

test('click and scroll to anchor', () => {
  const onSelect = jest.fn();
  const wrapper = mount({
    template: `
      <van-index-bar @select="onSelect">
        <van-index-anchor index="A" />
        <van-index-anchor index="B" />
      </van-index-bar>
    `,
    methods: {
      onSelect
    }
  });

  const fn = mockScrollIntoView();
  const indexes = wrapper.findAll('.van-index-bar__index');
  indexes.at(0).trigger('click');

  expect(fn).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith('A');
});

test('touch and scroll to anchor', () => {
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
      onSelect
    }
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
        dataset: {}
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
