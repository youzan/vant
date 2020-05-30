import SwipeCell from '..';
import {
  mount,
  triggerDrag,
  later,
  mockGetBoundingClientRect,
} from '../../../test';

const THRESHOLD = 0.15;
const defaultProps = {
  propsData: {
    leftWidth: 100,
    rightWidth: 100,
  },
  scopedSlots: {
    left: () => 'Left',
    right: () => 'Right',
  },
};

test('drag and show left part', () => {
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

test('drag and show right part', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  triggerDrag(wrapper, -50, 0);
  expect(wrapper).toMatchSnapshot();
});

test('on-close prop', () => {
  let position;
  let instance;

  const wrapper = mount(SwipeCell, {
    ...defaultProps,
    propsData: {
      ...defaultProps.propsData,
      onClose(pos, ins) {
        position = pos;
        instance = ins;
      },
    },
  });

  wrapper.trigger('click');
  expect(position).toEqual(undefined);

  wrapper.vm.open('left');
  wrapper.trigger('click');
  expect(position).toEqual('cell');

  wrapper.find('.van-swipe-cell__left').trigger('click');
  expect(position).toEqual('left');

  wrapper.find('.van-swipe-cell__right').trigger('click');
  expect(position).toEqual('right');

  instance.close();
  expect(instance.offset).toEqual(0);

  instance.open('left');
  wrapper.setData({ onClose: null });
  wrapper.trigger('click');
  expect(wrapper.vm.offset).toEqual(0);
});

test('before-close prop', () => {
  let position;
  let instance;

  const wrapper = mount(SwipeCell, {
    ...defaultProps,
    propsData: {
      ...defaultProps.propsData,
      beforeClose(params) {
        ({ position } = params);
        ({ instance } = params);
      },
    },
  });

  wrapper.trigger('click');
  expect(position).toEqual(undefined);

  wrapper.vm.open('left');
  wrapper.trigger('click');
  expect(position).toEqual('cell');

  wrapper.find('.van-swipe-cell__left').trigger('click');
  expect(position).toEqual('left');

  wrapper.find('.van-swipe-cell__right').trigger('click');
  expect(position).toEqual('right');

  instance.close();
  expect(wrapper.vm.offset).toEqual(0);

  instance.open('left');
  wrapper.setData({ beforeClose: null });
  wrapper.trigger('click');
  expect(wrapper.vm.offset).toEqual(0);
});

test('name prop', (done) => {
  const wrapper = mount(SwipeCell, {
    ...defaultProps,
    propsData: {
      ...defaultProps.propsData,
      name: 'test',
      onClose(position, instance, detail) {
        expect(detail.name).toEqual('test');
        done();
      },
    },
  });

  wrapper.vm.open('left');
  wrapper.trigger('click');
});

test('should reset after drag', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  triggerDrag(wrapper, defaultProps.leftWidth * THRESHOLD - 1, 0);
  expect(wrapper.vm.offset).toEqual(0);
});

test('disabled prop', () => {
  const wrapper = mount(SwipeCell, {
    propsData: {
      ...defaultProps.propsData,
      disabled: true,
    },
  });

  triggerDrag(wrapper, 50, 0);
  expect(wrapper.vm.offset).toEqual(0);
});

test('auto calc width', async () => {
  const restoreMock = mockGetBoundingClientRect({
    width: 50,
  });

  const wrapper = mount(SwipeCell, {
    scopedSlots: defaultProps.scopedSlots,
  });

  await later();
  triggerDrag(wrapper, 100, 0);
  expect(wrapper).toMatchSnapshot();

  restoreMock();
});

test('render one side', async () => {
  const restoreMock = mockGetBoundingClientRect({
    width: 50,
  });

  const wrapper = mount(SwipeCell, {
    scopedSlots: {
      left: defaultProps.scopedSlots.left,
    },
  });

  await later();
  triggerDrag(wrapper, 100, 0);
  expect(wrapper).toMatchSnapshot();

  restoreMock();
});

test('trigger open event when open left side', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  triggerDrag(wrapper, 50, 0);
  expect(wrapper.emitted('open')[0][0]).toEqual({
    name: '',
    detail: '',
    position: 'left',
  });
});

test('trigger open event when open right side', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  triggerDrag(wrapper, -50, 0);
  expect(wrapper.emitted('open')[0][0]).toEqual({
    name: '',
    detail: '',
    position: 'right',
  });
});

test('trigger close event when closed', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  wrapper.vm.open('left');
  wrapper.vm.close();

  expect(wrapper.emitted('close')[0][0]).toEqual({
    name: '',
    position: undefined,
  });
});

test('should not trigger close event again when already closed', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  wrapper.vm.open('left');
  wrapper.vm.close();
  wrapper.vm.close();
  expect(wrapper.emitted('close').length).toEqual(1);
});
