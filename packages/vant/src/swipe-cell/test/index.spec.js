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

test('should call beforeClose before closing', async () => {
  let event;
  let position;
  let clickPosition;
  let usePromise;
  let promiseRet;

  const wrapper = mount(SwipeCell, {
    ...defaultProps,
    props: {
      ...defaultProps.props,
      onClick(position) {
        clickPosition = position;
      },
      beforeClose(params) {
        if (usePromise) {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(promiseRet);
            }, 100);
          });
        } else {
          ({ event, position } = params);
        }
      },
    },
  });
  const track = wrapper.find('.van-swipe-cell__wrapper').element;

  wrapper.trigger('click');
  expect(position).toEqual(undefined);

  wrapper.vm.open('left');
  wrapper.trigger('click');

  expect(event).toBeInstanceOf(MouseEvent);
  expect(position).toEqual('cell');

  wrapper.find('.van-swipe-cell__left').trigger('click');
  expect(event).toBeInstanceOf(MouseEvent);
  expect(position).toEqual('left');

  wrapper.find('.van-swipe-cell__right').trigger('click');
  expect(event).toBeInstanceOf(MouseEvent);
  expect(position).toEqual('right');

  wrapper.vm.close();
  expect(track.style.transform).toEqual('translate3d(0px, 0, 0)');

  usePromise = true;
  promiseRet = false;
  wrapper.vm.open('right');
  wrapper.find('.van-swipe-cell__right').trigger('click');
  expect(clickPosition).toEqual('right');
  wrapper.trigger('click');
  expect(clickPosition).toEqual('right');
  await later(200);
  wrapper.trigger('click');
  expect(clickPosition).toEqual('cell');
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
  expect(wrapper.emitted('close')).toHaveLength(1);

  wrapper.vm.close();
  expect(wrapper.emitted('close')).toHaveLength(1);
});

const createWithNativeWrapper = () => {
  const onWrapperClick = vi.fn();

  const component = {
    template: `
      <div class="native-wrapper" @click="onWrapperClick">
        <swipe-cell v-bind="props" />
      </div>
    `,
    components: {
      SwipeCell,
    },
    setup() {
      return {
        props: defaultProps.props,
        onWrapperClick,
      };
    },
  };

  const wrapper = mount(component);

  const track = wrapper.find('.van-swipe-cell__wrapper').element;

  const triggerNativeClick = () => {
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });
    track.dispatchEvent(clickEvent);
  };

  const swipeCell = wrapper.findComponent(SwipeCell);

  return {
    wrapper,
    swipeCell,
    onWrapperClick,
    triggerNativeClick,
  };
};

test('should not stop propagation of native click event when canceling swipe', async () => {
  const { onWrapperClick, triggerNativeClick, swipeCell } =
    createWithNativeWrapper();

  triggerDrag(swipeCell, 5, 0);

  await later();

  triggerNativeClick();
  expect(onWrapperClick).toHaveBeenCalled();
});

test('should not trigger native click event after drag operations in desktop simulation scenarios', async () => {
  const { onWrapperClick, swipeCell } = createWithNativeWrapper();

  triggerDrag(swipeCell, 50, 0);
  await later();
  expect(onWrapperClick).not.toHaveBeenCalled();

  triggerDrag(swipeCell, -50, 0);
  await later();
  expect(onWrapperClick).not.toHaveBeenCalled();
});
