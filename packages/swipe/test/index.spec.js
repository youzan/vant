import Swipe from '..';
import SwipeItem from '../../swipe-item';
import { mount } from '@vue/test-utils';
import { triggerDrag } from '../../../test/utils';

const Component = {
  template: `
    <swipe ref="swipe" v-bind="$props">
      <swipe-item :style="style">1</swipe-item>
      <swipe-item :style="style">2</swipe-item>
      <swipe-item :style="style">3</swipe-item>
    </swipe>
  `,
  components: {
    Swipe,
    SwipeItem
  },
  props: {
    vertical: Boolean,
    loop: {
      type: Boolean,
      default: true
    },
    touchable: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Number,
      default: 0
    },
    initialSwipe: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      style: {
        width: '100px',
        height: '100px'
      }
    };
  }
};

test('autoplay', done => {
  const wrapper = mount(Component, {
    propsData: {
      autoplay: 20
    }
  });
  const { swipe } = wrapper.vm.$refs;

  setTimeout(() => {
    expect(swipe.active).toEqual(1);
    wrapper.setData({ autoplay: 0 });

    setTimeout(() => {
      expect(swipe.active).toEqual(1);
      wrapper.setData({ autoplay: 20 });

      setTimeout(() => {
        expect(swipe.active).toEqual(2);
        wrapper.destroy();
        done();
      }, 60);
    }, 60);
  }, 60);
});

test('swipeTo', done => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;
  swipe.swipeTo(2);

  setTimeout(() => {
    expect(swipe.active).toEqual(2);
    done();
  }, 30);
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
      vertical: true
    }
  });
  const { swipe } = wrapper.vm.$refs;
  const track = wrapper.find('.van-swipe__track');

  triggerDrag(track, 0, -100);
  expect(swipe.active).toEqual(1);
});

test('untouchable', () => {
  const wrapper = mount(Component, {
    propsData: {
      touchable: false
    }
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

test('not loop', () => {
  const wrapper = mount(Component, {
    propsData: {
      loop: false
    }
  });
  const { swipe } = wrapper.vm.$refs;
  const track = wrapper.find('.van-swipe__track');

  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(1);
  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(2);
  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(2);
});
