import { nextTick, reactive, ref } from 'vue';
import { mount, later, mockGetBoundingClientRect } from '../../../test';
import { BORDER_TOP_BOTTOM } from '../../utils/constant';
import { Tabbar } from '..';
import { TabbarItem } from '../../tabbar-item';

const activeClass = 'van-tabbar-item--active';

function getMockRouter() {
  const $route = reactive({
    name: '/',
    path: '/',
    matched: [{ name: '/', path: '/' }],
  });
  const push = (val: unknown) => {
    if (typeof val === 'string') {
      $route.name = val;
      $route.path = val;
    } else {
      Object.assign($route, val);
    }
    $route.matched = [{ name: $route.name, path: $route.path }];
  };
  const $router = {
    push,
    replace: push,
  };

  return {
    $route,
    $router,
  };
}

test('should match active tab by route path in route mode', async () => {
  const wrapper = mount(
    {
      render: () => (
        <Tabbar route>
          <TabbarItem replace to="/">
            Tab
          </TabbarItem>
          <TabbarItem replace to="/search">
            Tab
          </TabbarItem>
          <TabbarItem replace to={{ path: '/star' }}>
            Tab
          </TabbarItem>
          <TabbarItem>Tab</TabbarItem>
        </Tabbar>
      ),
    },
    {
      global: {
        mocks: getMockRouter(),
      },
    },
  );

  const items = wrapper.findAll('.van-tabbar-item');

  expect(items[0].classes()).toContain(activeClass);

  await items[1].trigger('click');
  expect(items[1].classes()).toContain(activeClass);

  await items[2].trigger('click');
  expect(items[2].classes()).toContain(activeClass);

  await items[3].trigger('click');
  expect(items[3].classes()).not.toContain(activeClass);
});

test('should allow to use before-change prop in route mode', async () => {
  const wrapper = mount(
    {
      render: () => (
        <Tabbar route beforeChange={() => false}>
          <TabbarItem replace to="/">
            Tab
          </TabbarItem>
          <TabbarItem replace to="/search">
            Tab
          </TabbarItem>
        </Tabbar>
      ),
    },
    {
      global: {
        mocks: getMockRouter(),
      },
    },
  );

  const items = wrapper.findAll('.van-tabbar-item');
  expect(items[0].classes()).toContain(activeClass);

  await items[1].trigger('click');
  expect(items[1].classes()).not.toContain(activeClass);
});

test('should match active tab by route name in route mode', async () => {
  const wrapper = mount(
    {
      render: () => (
        <Tabbar route>
          <TabbarItem to={{ name: 'foo' }}>Tab</TabbarItem>
          <TabbarItem to={{ name: 'bar' }}>Tab</TabbarItem>
        </Tabbar>
      ),
    },
    {
      global: {
        mocks: getMockRouter(),
      },
    },
  );

  const items = wrapper.findAll('.van-tabbar-item');

  await items[0].trigger('click');
  expect(items[0].classes()).toContain(activeClass);

  await items[1].trigger('click');
  expect(items[1].classes()).toContain(activeClass);
});

test('should watch model-value and update active tab', async () => {
  const wrapper = mount({
    setup() {
      const active = ref(0);
      const updateActive = () => {
        active.value = 1;
      };
      return {
        active,
        updateActive,
      };
    },
    render() {
      return (
        <Tabbar modelValue={this.active}>
          <TabbarItem>Tab</TabbarItem>
          <TabbarItem>Tab</TabbarItem>
        </Tabbar>
      );
    },
  });

  wrapper.vm.updateActive();
  await nextTick();
  const items = wrapper.findAll('.van-tabbar-item');
  expect(items[1].classes()).toContain(activeClass);
});

test('should match active tab by name when using name prop', () => {
  const onChange = vi.fn();
  const wrapper = mount({
    setup() {
      const active = ref('a');
      return {
        active,
      };
    },
    render() {
      return (
        <Tabbar modelValue={this.active} onChange={onChange}>
          <TabbarItem name="a">Tab</TabbarItem>
          <TabbarItem name="b">Tab</TabbarItem>
        </Tabbar>
      );
    },
  });

  wrapper.findAll('.van-tabbar-item')[1].trigger('click');
  expect(onChange).toHaveBeenCalledWith('b');
});

test('should not render border when border prop is false', () => {
  const wrapper = mount(Tabbar, {
    props: {
      border: false,
    },
  });

  expect(wrapper.classes()).not.toContain(BORDER_TOP_BOTTOM);
});

test('should render placeholder element when using placeholder prop', async () => {
  const restore = mockGetBoundingClientRect({ height: 50 });
  const wrapper = mount(Tabbar, {
    props: {
      fixed: true,
      placeholder: true,
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
  restore();
});

test('should render badge-props prop correctly', async () => {
  const wrapper = mount({
    render() {
      return (
        <Tabbar>
          <TabbarItem badge={0} badgeProps={{ color: 'blue' }}>
            Tab
          </TabbarItem>
        </Tabbar>
      );
    },
  });

  await nextTick();
  const badge = wrapper.find('.van-badge');
  expect(badge.style.backgroundColor).toEqual('blue');
});

test('should sync v-model when accessing matched route directly', async () => {
  const onChange = vi.fn();
  const active = ref(0);

  const wrapper = mount(
    {
      setup() {
        return {
          active,
        };
      },
      render() {
        return (
          <Tabbar route v-model={active.value} onChange={onChange}>
            <TabbarItem to="/">Tab 1</TabbarItem>
            <TabbarItem to="/search">Tab 2</TabbarItem>
            <TabbarItem to="/star">Tab 3</TabbarItem>
          </Tabbar>
        );
      },
    },
    {
      global: {
        mocks: {
          $route: {
            path: '/search',
            name: 'search',
            matched: [{ path: '/search', name: 'search' }],
          },
          $router: {
            push: vi.fn(),
            replace: vi.fn(),
          },
        },
      },
    },
  );

  // 等待组件挂载和响应式更新
  await nextTick();
  await later();

  // 验证是否正确设置了激活状态
  const items = wrapper.findAll('.van-tabbar-item');
  expect(items[1].classes()).toContain(activeClass);

  // 验证是否触发了 onChange
  expect(onChange).toHaveBeenCalledWith(1);
});

test('should not sync v-model when route does not match', async () => {
  const onChange = vi.fn();
  const wrapper = mount(
    {
      setup() {
        const active = ref(0);
        return {
          active,
        };
      },
      render() {
        return (
          <Tabbar route modelValue={this.active} onChange={onChange}>
            <TabbarItem to="/">Tab 1</TabbarItem>
            <TabbarItem to="/search">Tab 2</TabbarItem>
          </Tabbar>
        );
      },
    },
    {
      global: {
        mocks: {
          ...getMockRouter(),
          $route: {
            path: '/other',
            name: 'other',
            matched: [{ path: '/other', name: 'other' }],
          },
        },
      },
    },
  );

  await nextTick();

  // 验证没有任何 tab 被激活
  const items = wrapper.findAll('.van-tabbar-item');
  items.forEach((item) => {
    expect(item.classes()).not.toContain(activeClass);
  });

  // 验证没有触发 onChange
  expect(onChange).not.toHaveBeenCalled();
});
