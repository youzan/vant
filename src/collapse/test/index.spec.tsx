import { defineComponent, ref } from 'vue';
import { Collapse } from '..';
import { CollapseItem } from '../../collapse-item';
import { later, mount } from '../../../test';

const Component = defineComponent({
  props: {
    accordion: Boolean,
    border: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      active: this.accordion ? '' : [],
    };
  },
  render() {
    return (
      <Collapse
        v-model={this.active}
        border={this.border}
        accordion={this.accordion}
      >
        <CollapseItem title="a" name="first">
          content
        </CollapseItem>
        <CollapseItem title="b">content</CollapseItem>
        <CollapseItem title="c">content</CollapseItem>
      </Collapse>
    );
  },
});

test('should update active value when title is clicked', async () => {
  const wrapper = mount(Component);

  const titles = wrapper.findAll('.van-collapse-item__title');
  titles[0].trigger('click');
  expect(wrapper.vm.active).toEqual(['first']);

  await later();
  titles[1].trigger('click');
  expect(wrapper.vm.active).toEqual(['first', 1]);

  await later();
  titles[0].trigger('click');
  expect(wrapper.vm.active).toEqual([1]);

  wrapper.unmount();
});

test('should update active value when title is clicked in accordion mode', async () => {
  const wrapper = mount(Component, {
    props: {
      accordion: true,
    },
  });

  const titles = wrapper.findAll('.van-collapse-item__title');
  titles[0].trigger('click');
  expect(wrapper.vm.active).toEqual('first');

  titles[1].trigger('click');
  expect(wrapper.vm.active).toEqual(1);

  titles[0].trigger('click');
  expect(wrapper.vm.active).toEqual('first');

  await later();
  titles[0].trigger('click');
  expect(wrapper.vm.active).toEqual('');
});

test('should render slots of CollapseItem correctly', () => {
  const wrapper = mount({
    data() {
      return {
        active: [],
      };
    },
    render() {
      return (
        <Collapse v-model={this.active}>
          <CollapseItem
            v-slots={{
              icon: () => 'this is icon',
              title: () => 'this is title',
              value: () => 'this is value',
              label: () => 'this is label',
              'right-icon': () => 'this is right icon',
            }}
          />
        </Collapse>
      );
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should not render border when border prop is false', () => {
  const wrapper = mount(Component, {
    props: {
      border: false,
    },
  });

  expect(wrapper.find('.van-hairline--top-bottom').exists()).toBeFalsy();
});

test('should lazy render collapse content', async () => {
  const wrapper = mount({
    data() {
      return {
        active: [],
      };
    },
    render() {
      return (
        <Collapse v-model={this.active}>
          <CollapseItem title="a">content</CollapseItem>
          <CollapseItem title="b">
            <div class="foo" />
          </CollapseItem>
        </Collapse>
      );
    },
  });

  expect(wrapper.find('.foo').exists()).toBeFalsy();

  const titles = wrapper.findAll('.van-collapse-item__title');
  await titles[1].trigger('click');
  expect(wrapper.find('.foo').exists()).toBeTruthy();
});

test('should toggle collapse after calling the toggle method', async () => {
  const wrapper = mount({
    setup() {
      const itemA = ref();
      const itemB = ref();
      const active = ref([]);
      return {
        itemA,
        itemB,
        active,
      };
    },
    render() {
      return (
        <Collapse v-model={this.active}>
          <CollapseItem name="a" ref="itemA" />
          <CollapseItem name="b" ref="itemB" />
        </Collapse>
      );
    },
  });

  wrapper.vm.itemA.toggle();
  expect(wrapper.vm.active).toEqual(['a']);

  await later();
  wrapper.vm.itemB.toggle();
  expect(wrapper.vm.active).toEqual(['a', 'b']);

  wrapper.vm.itemB.toggle(false);
  expect(wrapper.vm.active).toEqual(['a']);

  wrapper.vm.itemA.toggle();
  expect(wrapper.vm.active).toEqual([]);
});

test('should toggle collapse after calling the toggle method in accordion mode', async () => {
  const wrapper = mount({
    setup() {
      const itemA = ref();
      const itemB = ref();
      const active = ref('');
      return {
        itemA,
        itemB,
        active,
      };
    },
    render() {
      return (
        <Collapse v-model={this.active} accordion>
          <CollapseItem name="a" ref="itemA" />
          <CollapseItem name="b" ref="itemB" />
        </Collapse>
      );
    },
  });

  wrapper.vm.itemA.toggle();
  await later();
  expect(wrapper.vm.active).toEqual('a');

  wrapper.vm.itemB.toggle();
  expect(wrapper.vm.active).toEqual('b');

  await later();
  wrapper.vm.itemB.toggle(false);
  expect(wrapper.vm.active).toEqual('');

  wrapper.vm.itemA.toggle();
  expect(wrapper.vm.active).toEqual('a');
});

test('should be readonly when using readonly prop', async () => {
  const wrapper = mount({
    data() {
      return {
        active: [],
      };
    },
    render() {
      return (
        <Collapse v-model={this.active}>
          <CollapseItem title="a" readonly>
            content
          </CollapseItem>
        </Collapse>
      );
    },
  });

  const titles = wrapper.findAll('.van-collapse-item__title');
  await titles[0].trigger('click');
  expect(wrapper.vm.active).toEqual([]);
  expect(wrapper.find('.van-collapse-item__title').classes()).not.toContain(
    'van-cell--clickable'
  );

  wrapper.unmount();
});
