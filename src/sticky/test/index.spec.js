import { mount, mockScrollTop } from '../../../test';

test('sticky to top', () => {
  const wrapper = mount({
    template: `
      <van-sticky style="height: 10px;">
        Content
      </van-sticky>
    `,
  });

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
    `,
  });

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
    `,
  });

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
        container: null,
      };
    },
    mounted() {
      this.container = this.$refs.container;
    },
  });

  mockScrollTop(15);
  expect(wrapper).toMatchSnapshot();
  mockScrollTop(25);
  expect(wrapper).toMatchSnapshot();
  mockScrollTop(0);
});
