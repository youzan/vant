import SwipeCell from '..';
import {
  mount,
  triggerDrag,
  later,
  mockGetBoundingClientRect
} from '../../../test';

const THRESHOLD = 0.15;
const defaultProps = {
  propsData: {
    leftWidth: 100,
    rightWidth: 100
  },
  scopedSlots: {
    left: () => 'Left',
    right: () => 'Right'
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

it('on-close prop', () => {
  let position;
  let instance;

  const wrapper = mount(SwipeCell, {
    ...defaultProps,
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

it('name prop', done => {
  const wrapper = mount(SwipeCell, {
    ...defaultProps,
    propsData: {
      ...defaultProps.propsData,
      name: 'test',
      onClose(position, instance, detail) {
        expect(detail.name).toEqual('test');
        done();
      }
    }
  });

  wrapper.vm.open('left');
  wrapper.trigger('click');
});

it('should reset after drag', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  triggerDrag(wrapper, defaultProps.leftWidth * THRESHOLD - 1, 0);
  expect(wrapper.vm.offset).toEqual(0);
});

it('disabled prop', () => {
  const wrapper = mount(SwipeCell, {
    propsData: {
      ...defaultProps.propsData,
      disabled: true
    }
  });

  triggerDrag(wrapper, 50, 0);
  expect(wrapper.vm.offset).toEqual(0);
});

it('auto calc width', async () => {
  const restoreMock = mockGetBoundingClientRect({
    width: 50
  });

  const wrapper = mount(SwipeCell, {
    scopedSlots: defaultProps.scopedSlots
  });

  await later();
  triggerDrag(wrapper, 100, 0);
  expect(wrapper).toMatchSnapshot();

  restoreMock();
});

it('render one side', async () => {
  const restoreMock = mockGetBoundingClientRect({
    width: 50
  });

  const wrapper = mount(SwipeCell, {
    scopedSlots: {
      left: defaultProps.scopedSlots.left
    }
  });

  await later();
  triggerDrag(wrapper, 100, 0);
  expect(wrapper).toMatchSnapshot();

  restoreMock();
});

it('trigger open event when open left side', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  triggerDrag(wrapper, 50, 0);
  expect(wrapper.emitted('open')[0][0]).toEqual({
    detail: '',
    position: 'left'
  });
});

it('trigger open event when open right side', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  triggerDrag(wrapper, -50, 0);
  expect(wrapper.emitted('open')[0][0]).toEqual({
    detail: '',
    position: 'right'
  });
});
