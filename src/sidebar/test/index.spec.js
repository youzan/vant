import { mount } from '../../../test/utils';
import Sidebar from '..';
import SidebarItem from '../../sidebar-item';

test('event', () => {
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
