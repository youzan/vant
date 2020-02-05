import { mount } from '../../../test';
import Sidebar from '..';

test('click event & change event', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <van-sidebar @change="onChange">
        <van-sidebar-item @click="onClick">Text</van-sidebar-item>
      </van-sidebar>
    `,
    methods: {
      onClick,
      onChange,
    },
  });

  wrapper.find('.van-sidebar-item').trigger('click');
  expect(onClick).toHaveBeenCalledWith(0);
  expect(onChange).toHaveBeenCalledWith(0);
  wrapper.vm.$destroy();
});

test('v-model', () => {
  const wrapper = mount({
    template: `
      <van-sidebar v-model="active">
        <van-sidebar-item>Text</van-sidebar-item>
        <van-sidebar-item>Text</van-sidebar-item>
      </van-sidebar>
    `,
    data() {
      return {
        active: 0,
      };
    },
  });

  wrapper
    .findAll('.van-sidebar-item')
    .at(1)
    .trigger('click');
  expect(wrapper.vm.active).toEqual(1);
});

test('disabled prop', () => {
  const wrapper = mount({
    template: `
      <van-sidebar v-model="active">
        <van-sidebar-item>Text</van-sidebar-item>
        <van-sidebar-item disabled>Text</van-sidebar-item>
      </van-sidebar>
    `,
    data() {
      return {
        active: 0,
      };
    },
  });

  wrapper
    .findAll('.van-sidebar-item')
    .at(1)
    .trigger('click');
  expect(wrapper.vm.active).toEqual(0);
});

test('without parent', () => {
  const consoleError = console.error;
  try {
    console.error = jest.fn();
    mount(Sidebar);
  } catch (err) {
    console.error = consoleError;
    expect(err).toBeTruthy();
  }
});
