import { mount } from '@vue/test-utils';
import Overlay from '..';

test('z-index prop', () => {
  const wrapper = mount(Overlay, {
    props: {
      show: true,
      zIndex: 99,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('class-name prop', () => {
  const wrapper = mount(Overlay, {
    props: {
      show: true,
      className: 'my-overlay',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('custom style prop', () => {
  const wrapper = mount(Overlay, {
    props: {
      show: true,
      customStyle: {
        backgroundColor: 'red',
      },
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('duration prop', () => {
  const wrapper = mount(Overlay, {
    props: {
      show: true,
      duration: 1,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('click event', () => {
  const onClick = jest.fn();
  const wrapper = mount(Overlay, {
    context: {
      on: {
        click: onClick,
      },
    },
  });

  wrapper.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('default slot', () => {
  const wrapper = mount(Overlay, {
    scopedSlots: {
      default: () => 'Custom Default',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('lock-scroll prop', () => {
  const onTouchMove = jest.fn();
  const wrapper = mount({
    template: `
      <div @touchmove="onTouchMove">
        <van-overlay :lock-scroll="lockScroll" />
      </div>
    `,
    data() {
      return {
        lockScroll: true,
      };
    },
    methods: {
      onTouchMove,
    },
  });

  wrapper.find('.van-overlay').trigger('touchmove');
  expect(onTouchMove).toHaveBeenCalledTimes(0);

  wrapper.setData({ lockScroll: false });
  wrapper.find('.van-overlay').trigger('touchmove');
  expect(onTouchMove).toHaveBeenCalledTimes(1);
});
