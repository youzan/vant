import { mount } from '../../../test';
import Sidebar from '..';

test('click event & change event', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <van-sidebar @change="onChange">
        <van-sidebar-item>Text</van-sidebar-item>
        <van-sidebar-item @click="onClick">Text</van-sidebar-item>
      </van-sidebar>
    `,
    methods: {
      onClick,
      onChange,
    },
  });

  wrapper.findAll('.van-sidebar-item').at(1).trigger('click');
  expect(onClick).toHaveBeenCalledWith(1);
  expect(onChange).toHaveBeenCalledWith(1);
  wrapper.vm.$destroy();
});

test('v-model', () => {
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <van-sidebar v-model="active" @change="onChange">
        <van-sidebar-item>Text</van-sidebar-item>
        <van-sidebar-item>Text</van-sidebar-item>
      </van-sidebar>
    `,
    data() {
      return {
        active: 0,
      };
    },
    methods: {
      onChange,
    },
  });

  wrapper.findAll('.van-sidebar-item').at(1).trigger('click');
  expect(wrapper.vm.active).toEqual(1);
  expect(onChange).toHaveBeenCalledWith(1);
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

  wrapper.findAll('.van-sidebar-item').at(1).trigger('click');
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

test('title slot', () => {
  const wrapper = mount({
    template: `
      <van-sidebar v-model="active">
        <van-sidebar-item>
          <template #title>Title Slot</template>
        </van-sidebar-item>
      </van-sidebar>
    `,
    data() {
      return {
        active: 0,
      };
    },
  });

  expect(wrapper).toMatchSnapshot();
});
