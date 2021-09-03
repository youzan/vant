import { SwipeCell } from '..';
import {
  mount,
  later,
  triggerDrag,
  mockGetBoundingClientRect,
} from '../../../test';

const defaultProps = {
  props: {
    leftWidth: 100,
    rightWidth: 100,
  },
  slots: {
    left: () => 'Left',
    right: () => 'Right',
  },
};

test('should allow to drag to show left part', async () => {
  const wrapper = mount(SwipeCell, defaultProps);

  triggerDrag(wrapper, 100, 0);
  await later();

  const track = wrapper.find('.van-swipe-cell__wrapper').element;
  expect(track.style.transform).toEqual('translate3d(100px, 0, 0)');
});

test('should allow to drag to show right part', async () => {
  const wrapper = mount(SwipeCell, defaultProps);

  triggerDrag(wrapper, -100, 0);
  await later();

  const track = wrapper.find('.van-swipe-cell__wrapper').element;
  expect(track.style.transform).toEqual('translate3d(-100px, 0, 0)');
});

test('should call beforeClose before closing', () => {
  let position;

  const wrapper = mount(SwipeCell, {
    ...defaultProps,
    props: {
      ...defaultProps.props,
      beforeClose(params) {
        ({ position } = params);
      },
    },
  });
  const track = wrapper.find('.van-swipe-cell__wrapper').element;

  wrapper.trigger('click');
  expect(position).toEqual(undefined);

  wrapper.vm.open('left');
  wrapper.trigger('click');
  expect(position).toEqual('cell');

  wrapper.find('.van-swipe-cell__left').trigger('click');
  expect(position).toEqual('left');

  wrapper.find('.van-swipe-cell__right').trigger('click');
  expect(position).toEqual('right');

  wrapper.vm.close();
  expect(track.style.transform).toEqual('translate3d(0px, 0, 0)');
});

test('should close swipe cell after clicked', async () => {
  const wrapper = mount(SwipeCell, defaultProps);

  wrapper.vm.open('left');
  await later();

  const track = wrapper.find('.van-swipe-cell__wrapper').element;
  expect(track.style.transform).toEqual('translate3d(100px, 0, 0)');

  await wrapper.trigger('click');
  expect(track.style.transform).toEqual('translate3d(0px, 0, 0)');
});

test('should emit open event with name when using name prop', () => {
  const wrapper = mount(SwipeCell, {
    ...defaultProps,
    props: {
      ...defaultProps.props,
      name: 'test',
    },
  });

  wrapper.vm.open('left');
  expect(wrapper.emitted('open')[0]).toEqual([
    { name: 'test', position: 'left' },
  ]);
});

test('should emit close event with name when using name prop', () => {
  const wrapper = mount(SwipeCell, {
    ...defaultProps,
    props: {
      ...defaultProps.props,
      name: 'test',
    },
  });

  wrapper.vm.open('left');
  wrapper.vm.close();
  expect(wrapper.emitted('close')[0]).toEqual([{ name: 'test' }]);
});

test('should reset transform after short dragging', async () => {
  const wrapper = mount(SwipeCell, defaultProps);

  triggerDrag(wrapper, 5, 0);
  await later();

  const track = wrapper.find('.van-swipe-cell__wrapper').element;
  expect(track.style.transform).toEqual('translate3d(0px, 0, 0)');
});

test('should not allow to drag when using disabled prop', async () => {
  const wrapper = mount(SwipeCell, {
    props: {
      ...defaultProps.props,
      disabled: true,
    },
  });

  triggerDrag(wrapper, 50, 0);
  await later();

  const track = wrapper.find('.van-swipe-cell__wrapper').element;
  expect(track.style.transform).toEqual('translate3d(0px, 0, 0)');
});

test('should auto calc width', async () => {
  const restoreMock = mockGetBoundingClientRect({
    width: 50,
  });

  const wrapper = mount(SwipeCell, {
    slots: defaultProps.slots,
  });

  triggerDrag(wrapper, 100, 0);
  await later();

  const track = wrapper.find('.van-swipe-cell__wrapper').element;
  expect(track.style.transform).toEqual('translate3d(50px, 0, 0)');
  restoreMock();
});

test('should emit open event when opening left side', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  triggerDrag(wrapper, 50, 0);
  expect(wrapper.emitted('open')[0][0]).toEqual({
    name: '',
    position: 'left',
  });
});

test('should emit open event when opening right side', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  triggerDrag(wrapper, -50, 0);
  expect(wrapper.emitted('open')[0][0]).toEqual({
    name: '',
    position: 'right',
  });
});

test('should emit close event after closed', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  wrapper.vm.open('left');
  wrapper.vm.close();

  expect(wrapper.emitted('close')[0][0]).toEqual({
    name: '',
  });
});

test('should not trigger close event again if already closed', () => {
  const wrapper = mount(SwipeCell, defaultProps);

  wrapper.vm.open('left');
  wrapper.vm.close();
  expect(wrapper.emitted('close').length).toEqual(1);

  wrapper.vm.close();
  expect(wrapper.emitted('close').length).toEqual(1);
});
