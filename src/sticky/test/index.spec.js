import { mount, trigger } from '../../../test/utils';
import Vue from 'vue';
import Sticky from '..';

Vue.use(Sticky);

function mockScrollTop(value) {
  Object.defineProperty(window, 'scrollTop', { value, writable: true });
  trigger(window, 'scroll');
}

function mockOffsetHeight(el, value) {
  Object.defineProperty(el, 'offsetHeight', { value, writable: true });
}

test('sticky to top', () => {
  const wrapper = mount({
    template: `
      <van-sticky style="height: 10px;">
        Content
      </van-sticky>
    `
  });

  mockOffsetHeight(wrapper.vm.$el, 10);
  expect(wrapper).toMatchSnapshot();
  mockScrollTop(100);
  expect(wrapper).toMatchSnapshot();
  mockScrollTop(0);
});

test('z-index prop', () => {
  const wrapper = mount({
    template: `
      <van-sticky style="height: 10px;" :z-index="0">
        Content
      </van-sticky>
    `
  });

  mockOffsetHeight(wrapper.vm.$el, 10);
  mockScrollTop(100);
  expect(wrapper).toMatchSnapshot();
  mockScrollTop(0);
});

test('offset-top prop', () => {
  const wrapper = mount({
    template: `
      <van-sticky style="height: 10px;" :offset-top="10">
        Content
      </van-sticky>
    `
  });

  mockOffsetHeight(wrapper.vm.$el, 10);
  mockScrollTop(100);
  expect(wrapper).toMatchSnapshot();
  mockScrollTop(0);
});

test('container prop', () => {
  const wrapper = mount({
    template: `
      <div ref="container" style="height: 20px;">
        <van-sticky ref="sticky" style="height: 10px;" :container="container">
          Content
        </van-sticky>
      </div>
    `,
    data() {
      return {
        container: null
      };
    },
    mounted() {
      this.container = this.$refs.container;
      mockOffsetHeight(this.$refs.container, 20);
      mockOffsetHeight(this.$refs.sticky.$el, 10);
    }
  });

  mockScrollTop(15);
  expect(wrapper).toMatchSnapshot();
  mockScrollTop(25);
  expect(wrapper).toMatchSnapshot();
  mockScrollTop(0);
});
