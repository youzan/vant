import SwipeCell from '..';
import { mount, triggerDrag } from '../../../test/utils';

const THRESHOLD = 0.15;
const defaultProps = {
  propsData: {
    leftWidth: 100,
    rightWidth: 100
  }
};

it('drag and show left part', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  triggerDrag(wrapper, 10, 0);
  expect(wrapper).toMatchSnapshot();

  triggerDrag(wrapper, 50, 0);
  expect(wrapper).toMatchSnapshot();

  triggerDrag(wrapper, 500, 0);
  expect(wrapper).toMatchSnapshot();

  triggerDrag(wrapper, 0, 100);
  expect(wrapper).toMatchSnapshot();
});

it('drag and show right part', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  triggerDrag(wrapper, -50, 0);
  expect(wrapper).toMatchSnapshot();
});

it('on close prop', () => {
  let position;
  let instance;

  const wrapper = mount(SwipeCell, {
    propsData: {
      ...defaultProps.propsData,
      onClose(pos, ins) {
        position = pos;
        instance = ins;
      }
    }
  });
  wrapper.trigger('click');
  expect(position).toEqual(undefined);

  wrapper.setData({ offset: 100 });
  wrapper.trigger('click');
  expect(position).toEqual('cell');

  wrapper.find('.van-swipe-cell__left').trigger('click');
  expect(position).toEqual('left');

  wrapper.find('.van-swipe-cell__right').trigger('click');
  expect(position).toEqual('right');

  instance.close();
  expect(wrapper.vm.offset).toEqual(0);

  wrapper.setData({ offset: 100, onClose: null });
  wrapper.trigger('click');
  expect(wrapper.vm.offset).toEqual(0);
});

it('width equals zero', () => {
  const wrapper = mount(SwipeCell, {
    propsData: {
      leftWidth: 0,
      rightWidth: 0
    }
  });
  expect(wrapper).toMatchSnapshot();
});

it('should reset after drag', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  triggerDrag(wrapper, (defaultProps.leftWidth * THRESHOLD - 1), 0);
  expect(wrapper.vm.offset).toEqual(0);
});

it('disabled prop', () => {
  const wrapper = mount(SwipeCell, {
    propsData: {
      ...defaultProps.propsData,
      disabled: true,
    }
  });

  triggerDrag(wrapper, 50, 0);
  expect(wrapper.vm.offset).toEqual(0);
});
