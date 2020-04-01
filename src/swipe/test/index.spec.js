import { mount, triggerDrag, later, trigger } from '../../../test';

function mockPageHidden() {
  let hidden = true;

  Object.defineProperty(document, 'hidden', {
    get: () => hidden,
  });

  trigger(window, 'visibilitychange');
  hidden = false;
}

const Component = {
  template: `
    <van-swipe ref="swipe" v-bind="$props" v-on="$listeners">
      <van-swipe-item :style="style">1</van-swipe-item>
      <van-swipe-item :style="style">2</van-swipe-item>
      <van-swipe-item :style="style">3</van-swipe-item>
    </van-swipe>
  `,
  props: {
    vertical: Boolean,
    loop: {
      type: Boolean,
      default: true,
    },
    touchable: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Number,
      default: 0,
    },
    initialSwipe: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      style: {
        width: '100px',
        height: '100px',
      },
    };
  },
};

test('swipeTo method', async () => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;
  swipe.swipeTo(2);

  await later(100);
  expect(swipe.active).toEqual(2);
});

test('swipeTo method with immediate option', async () => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;
  swipe.swipeTo(2, {
    immediate: true,
  });

  await later(100);
  expect(swipe.active).toEqual(2);
});

test('prev and next method', async () => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;

  swipe.next();
  await later(50);
  expect(swipe.active).toEqual(1);

  swipe.prev();
  await later(50);
  expect(swipe.active).toEqual(0);
});

test('initial swipe', () => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;

  expect(swipe.active).toEqual(0);
  wrapper.setProps({ initialSwipe: 2 });
  expect(swipe.active).toEqual(2);
});

test('vertical swipe', () => {
  const wrapper = mount(Component, {
    propsData: {
      vertical: true,
    },
  });
  const { swipe } = wrapper.vm.$refs;
  const track = wrapper.find('.van-swipe__track');

  triggerDrag(track, 0, -100);
  expect(swipe.active).toEqual(1);
});

test('untouchable', () => {
  const wrapper = mount(Component, {
    propsData: {
      touchable: false,
    },
  });
  const { swipe } = wrapper.vm.$refs;
  const track = wrapper.find('.van-swipe__track');

  triggerDrag(track, 100, 0);
  expect(swipe.active).toEqual(0);
});

test('loop', () => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;
  const track = wrapper.find('.van-swipe__track');

  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(1);
  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(2);
  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(3);
  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(1);
  triggerDrag(track, 100, 0);
  expect(swipe.active).toEqual(0);
  triggerDrag(track, 100, 0);
  expect(swipe.active).toEqual(-1);
  triggerDrag(track, 100, 0);
  expect(swipe.active).toEqual(1);
});

test('should pause auto play when page hidden', async () => {
  const change = jest.fn();
  mount(Component, {
    propsData: {
      loop: true,
      autoplay: 1,
    },
    listeners: {
      change,
    },
  });

  mockPageHidden();
  await later(50);

  expect(change).toHaveBeenCalledTimes(0);
});

test('lazy-render prop', async () => {
  const wrapper = mount({
    template: `
      <van-swipe :initial-swipe="active" lazy-render>
        <van-swipe-item><span>1</span></van-swipe-item>
        <van-swipe-item><span>2</span></van-swipe-item>
        <van-swipe-item><span>3</span></van-swipe-item>
        <van-swipe-item><span>4</span></van-swipe-item>
      </van-swipe>
    `,
    data() {
      return {
        active: 0,
      };
    },
  });

  await later();
  const items = wrapper.findAll('.van-swipe-item');

  expect(items.at(0).contains('span')).toBeTruthy();
  expect(items.at(1).contains('span')).toBeTruthy();
  expect(items.at(2).contains('span')).toBeFalsy();
  expect(items.at(3).contains('span')).toBeTruthy();

  wrapper.setData({ active: 1 });
  expect(items.at(0).contains('span')).toBeTruthy();
  expect(items.at(1).contains('span')).toBeTruthy();
  expect(items.at(2).contains('span')).toBeTruthy();
  expect(items.at(3).contains('span')).toBeFalsy();

  wrapper.setData({ active: 2 });
  expect(items.at(0).contains('span')).toBeFalsy();
  expect(items.at(1).contains('span')).toBeTruthy();
  expect(items.at(2).contains('span')).toBeTruthy();
  expect(items.at(3).contains('span')).toBeTruthy();

  wrapper.setData({ active: 3 });
  expect(items.at(0).contains('span')).toBeTruthy();
  expect(items.at(1).contains('span')).toBeFalsy();
  expect(items.at(2).contains('span')).toBeTruthy();
  expect(items.at(3).contains('span')).toBeTruthy();
});
