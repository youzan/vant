import { mount } from '../../../test/utils';
import Sidebar from '..';
import SidebarItem from '../../sidebar-item';

test('click event & change event', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <sidebar @change="onChange">
        <sidebar-item @click="onClick">Text</sidebar-item>
      </sidebar>
    `,
    components: {
      Sidebar,
      SidebarItem
    },
    methods: {
      onClick,
      onChange
    }
  });

  wrapper.find('.van-sidebar-item').trigger('click');
  expect(onClick).toHaveBeenCalledWith(0);
  expect(onChange).toHaveBeenCalledWith(0);
  wrapper.vm.$destroy();
});

test('v-model', () => {
  const wrapper = mount({
    template: `
      <sidebar v-model="active">
        <sidebar-item>Text</sidebar-item>
        <sidebar-item>Text</sidebar-item>
      </sidebar>
    `,
    components: {
      Sidebar,
      SidebarItem
    },
    data() {
      return {
        active: 0
      };
    }
  });

  wrapper.findAll('.van-sidebar-item').at(1).trigger('click');
  expect(wrapper.vm.active).toEqual(1);
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
