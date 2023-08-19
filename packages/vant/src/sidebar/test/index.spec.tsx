import { ref } from 'vue';
import { mount } from '../../../test';
import { Sidebar } from '..';
import { SidebarItem } from '../../sidebar-item';

test('should emit change event when active item changed', () => {
  const onChange = vi.fn();
  const wrapper = mount({
    render() {
      return (
        <Sidebar onChange={onChange}>
          <SidebarItem>Text</SidebarItem>
          <SidebarItem>Text</SidebarItem>
        </Sidebar>
      );
    },
  });

  const items = wrapper.findAll('.van-sidebar-item');

  items[0].trigger('click');
  expect(onChange).toHaveBeenCalledTimes(0);

  items[1].trigger('click');
  expect(onChange).toHaveBeenCalledWith(1);
});

test('should emit click event when SidebarItem is clicked', () => {
  const onClick = vi.fn();
  const wrapper = mount({
    render() {
      return (
        <Sidebar>
          <SidebarItem onClick={onClick}>Text</SidebarItem>
        </Sidebar>
      );
    },
  });

  wrapper.find('.van-sidebar-item').trigger('click');
  expect(onClick).toHaveBeenCalledWith(0);
});

test('should update v-model when active item changed', () => {
  const onChange = vi.fn();
  const wrapper = mount({
    setup() {
      return {
        active: ref(0),
      };
    },
    render() {
      return (
        <Sidebar v-model={this.active} onChange={onChange}>
          <SidebarItem>Text</SidebarItem>
          <SidebarItem>Text</SidebarItem>
        </Sidebar>
      );
    },
  });

  wrapper.findAll('.van-sidebar-item')[1].trigger('click');
  expect(wrapper.vm.active).toEqual(1);
  expect(onChange).toHaveBeenCalledWith(1);
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('should not update v-model when disabled SidebarItem is clicked', () => {
  const wrapper = mount({
    setup() {
      return {
        active: ref(0),
      };
    },
    render() {
      return (
        <Sidebar v-model={this.active}>
          <SidebarItem>Text</SidebarItem>
          <SidebarItem disabled>Text</SidebarItem>
        </Sidebar>
      );
    },
  });

  wrapper.findAll('.van-sidebar-item')[1].trigger('click');
  expect(wrapper.vm.active).toEqual(0);
});

test('should render title slot correctly', () => {
  const wrapper = mount({
    setup() {
      return {
        active: ref(0),
      };
    },
    render() {
      return (
        <Sidebar v-model={this.active}>
          <SidebarItem v-slots={{ title: () => 'Custom Title' }} />
        </Sidebar>
      );
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render badge-props correctly', () => {
  const wrapper = mount({
    render() {
      return (
        <Sidebar>
          <SidebarItem badge={1} badgeProps={{ color: 'blue' }} />
        </Sidebar>
      );
    },
  });

  const badge = wrapper.find('.van-badge');
  expect(badge.style.backgroundColor).toEqual('blue');
});
