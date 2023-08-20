import { defineComponent, reactive } from 'vue';
import { mount, later } from '../../../test';
import { Tab } from '..';
import { Tabs } from '../../tabs';

test('should render correctly after inserting a tab', async () => {
  const wrapper = mount({
    render() {
      return (
        <Tabs v-model:active={this.active}>
          <Tab title="1">1</Tab>
          {this.insert && (
            <div>
              <Tab title="2">2</Tab>
            </div>
          )}
          <Tab title="3">3</Tab>
        </Tabs>
      );
    },
    data() {
      return {
        insert: false,
        active: 1,
      };
    },
  });

  await later();
  await wrapper.setData({ insert: true });
  await later();
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render correctly after inserting a tab from an array', async () => {
  const tabs = reactive([
    {
      text: 1,
      show: true,
    },
    {
      text: 2,
      show: false,
    },
    {
      text: 3,
      show: true,
    },
  ]);

  const wrapper = mount({
    render() {
      return (
        <Tabs v-model:active={this.active}>
          {tabs.map((tab, index) => (
            <Tab title={String(tab.text)} v-show={tab.show} key={index} />
          ))}
        </Tabs>
      );
    },
    data() {
      return {
        active: 1,
      };
    },
  });

  await later();
  tabs[1].show = true;
  await later();
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render correctly after inserting a tab with name', async () => {
  const onChange = vi.fn();
  const wrapper = mount({
    render() {
      return (
        <Tabs v-model:active={this.active} onChange={onChange}>
          {this.insert && (
            <Tab title="bar" name="bar">
              bar
            </Tab>
          )}
          <Tab title="foo" name="foo">
            foo
          </Tab>
        </Tabs>
      );
    },
    data() {
      return {
        insert: false,
        active: 'foo',
      };
    },
  });

  await later();
  await wrapper.setData({ insert: true });
  await later();
  expect(wrapper.html()).toMatchSnapshot();
  expect(onChange).toHaveBeenCalledTimes(0);
});

test('should render Tab inside a component correctly', async () => {
  const MyTab = defineComponent({
    render() {
      return <Tab title="2">2</Tab>;
    },
  });

  const wrapper = mount({
    render() {
      return (
        <Tabs active={1}>
          <Tab title="1">1</Tab>
          <MyTab />
          <Tab title="3">3</Tab>
        </Tabs>
      );
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render nav-bottom slot correctly', async () => {
  const wrapper = mount(Tabs, {
    slots: {
      'nav-bottom': () => 'Nav Bottom',
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
});
