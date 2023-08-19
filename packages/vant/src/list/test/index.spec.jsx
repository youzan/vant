import { List } from '..';
import { Tab } from '../../tab';
import { Tabs } from '../../tabs';
import { mount, later, mockGetBoundingClientRect } from '../../../test';

test('should emit load event when reaching bottom', async () => {
  const wrapper = mount(List);

  await later();
  expect(wrapper.emitted('load')).toBeTruthy();
  expect(wrapper.emitted('update:loading')).toBeTruthy();
  wrapper.unmount();
});

test('should not emit load event when disabled', async () => {
  const wrapper = mount(List, {
    props: {
      disabled: true,
    },
  });

  await later();
  expect(wrapper.emitted('load')).toBeFalsy();
  expect(wrapper.emitted('update:loading')).toBeFalsy();
});

test('should reload after clicking the error text', async () => {
  const wrapper = mount(List, {
    props: {
      error: true,
      errorText: 'Request failed. Click to reload...',
    },
  });

  await later();

  expect(wrapper.emitted('load')).toBeFalsy();
  expect(wrapper.emitted('update:loading')).toBeFalsy();

  wrapper.find('.van-list__error-text').trigger('click');
  expect(wrapper.emitted('update:error')[0][0]).toEqual(false);

  await wrapper.setProps({ error: false });
  await later();
  expect(wrapper.emitted('load')).toBeTruthy();
  expect(wrapper.emitted('update:loading')).toBeTruthy();
});

test('should render finished text when finished prop is true', async () => {
  const wrapper = mount(List, {
    props: {
      finished: true,
      finishedText: 'Finished',
    },
  });

  await later();
  expect(wrapper.emitted('load')).toBeFalsy();
  expect(wrapper.emitted('update:loading')).toBeFalsy();
  expect(wrapper.find('.van-list__finished-text').exists()).toBeTruthy();

  await wrapper.setProps({ finished: false });
  await later();
  expect(wrapper.emitted('load')).toBeTruthy();
  expect(wrapper.emitted('update:loading')).toBeTruthy();
  expect(wrapper.find('.van-list__finished-text').exists()).toBeFalsy();
});

test('should render finished slot correctly', async () => {
  const wrapper = mount(List, {
    props: {
      finished: true,
    },
    slots: {
      finished: () => 'Custom Finished',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render error slot correctly', async () => {
  const wrapper = mount(List, {
    props: {
      error: true,
    },
    slots: {
      error: () => 'Custom Error',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should not emit load event after mounted when immediate-check prop is false', async () => {
  const wrapper = mount(List, {
    props: {
      immediateCheck: false,
    },
  });

  await later();
  expect(wrapper.emitted('load')).toBeFalsy();
  expect(wrapper.emitted('update:loading')).toBeFalsy();
});

test('should emit load event when the scroll parent is not window', async () => {
  const restoreMock = mockGetBoundingClientRect({
    top: 0,
    bottom: 200,
    height: 100,
  });
  const onLoad = vi.fn();

  mount({
    render: () => (
      <div style="overflow-y: scroll;">
        <List onLoad={onLoad} />
      </div>
    ),
  });

  await later();
  expect(onLoad).toHaveBeenCalledTimes(1);
  restoreMock();
});

test('should render correctly when direction is up', async () => {
  const wrapper = mount(List, {
    slots: {
      default: () => <div class="list-item">list item</div>,
    },
    props: {
      direction: 'up',
    },
  });

  let children = wrapper.findAll('.van-list > div');
  expect(children[0].classes()).toContain('van-list__placeholder');
  expect(children[1].classes()).toContain('list-item');

  // change the direction's value
  await wrapper.setProps({
    direction: 'down',
  });

  children = wrapper.findAll('.van-list > div');
  expect(children[0].classes()).toContain('list-item');
  expect(children[1].classes()).toContain('van-list__placeholder');
});

test('should not emit load event when inside an inactive tab', async () => {
  const onLoad1 = vi.fn();
  const onLoad2 = vi.fn();

  mount({
    render: () => (
      <Tabs active={0} animated>
        <Tab>
          <List onLoad={onLoad1} />
        </Tab>
        <Tab>
          <List onLoad={onLoad2} />
        </Tab>
      </Tabs>
    ),
  });

  await later();
  expect(onLoad1).toHaveBeenCalledTimes(1);
  expect(onLoad2).toHaveBeenCalledTimes(0);
});

// https://github.com/vant-ui/vant/issues/9017
test('should emit load event when parent tab is activated', async () => {
  const onLoad1 = vi.fn();
  const onLoad2 = vi.fn();

  const wrapper = mount({
    data() {
      return {
        active: 0,
      };
    },
    render() {
      return (
        <Tabs active={this.active} swipeable>
          <Tab>
            <List onLoad={onLoad1} />
          </Tab>
          <Tab>
            <List onLoad={onLoad2} />
          </Tab>
        </Tabs>
      );
    },
  });

  await later();
  expect(onLoad1).toHaveBeenCalledTimes(1);
  expect(onLoad2).toHaveBeenCalledTimes(0);

  await wrapper.setData({ active: 1 });
  await later();
  expect(onLoad1).toHaveBeenCalledTimes(1);
  expect(onLoad2).toHaveBeenCalledTimes(1);
});
