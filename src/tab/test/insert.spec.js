import { mount, later } from '../../../test';
import Tab from '..';
import Tabs from '../../tabs';

test('should render correctly after inserting a tab', async () => {
  const wrapper = mount({
    render() {
      return (
        <Tabs v-model={[this.active, 'active']}>
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

test('should render correctly after inserting a tab with name', async () => {
  const onChange = jest.fn();
  const wrapper = mount({
    render() {
      return (
        <Tabs v-model={[this.active, 'active']} onChange={onChange}>
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
  const MyTab = {
    render() {
      return <Tab title="2">2</Tab>;
    },
  };

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
