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
  });
  const push = (val: unknown) => {
    if (typeof val === 'string') {
      $route.name = val;
      $route.path = val;
    } else {
      Object.assign($route, val);
    }
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
    }
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
    }
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
  const onChange = jest.fn();
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
