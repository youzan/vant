import { ref } from 'vue';
import { mount, later, triggerDrag, mockScrollTop } from '../../../test';
import { Tab } from '..';
import { Tabs, TabsInstance } from '../../tabs';

test('should emit clickTab event when tab is clicked', async () => {
  const onClickTab = vi.fn();

  const wrapper = mount({
    render() {
      return (
        <Tabs onClickTab={onClickTab}>
          <Tab title="title1">1</Tab>
          <Tab title="title2">2</Tab>
        </Tabs>
      );
    },
  });

  await later();
  const tabs = wrapper.findAll('.van-tab');

  await tabs[0].trigger('click');
  expect(onClickTab).toHaveBeenCalledWith(
    expect.objectContaining({
      name: 0,
      title: 'title1',
      disabled: false,
    }),
  );
});

test('should not render zero badge when show-zero-badge prop is false', async () => {
  const wrapper = mount({
    render() {
      return (
        <Tabs>
          <Tab badge={0}>1</Tab>
          <Tab badge={0} showZeroBadge={false}>
            2
          </Tab>
        </Tabs>
      );
    },
  });
  await later();
  expect(wrapper.findAll('.van-badge')).toHaveLength(1);
});

test('should switch tab after click the tab title', async () => {
  const onChange = vi.fn();
  const wrapper = mount({
    render() {
      return (
        <Tabs onChange={onChange}>
          <Tab title="title1">Text</Tab>
          <Tab title="title2">Text</Tab>
          <Tab title="title3" disabled>
            Text
          </Tab>
        </Tabs>
      );
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();

  const tabs = wrapper.findAll('.van-tab');
  await tabs[1].trigger('click');
  await tabs[2].trigger('click');
  await later();
  expect(wrapper.html()).toMatchSnapshot();
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('swipe switch tab after swiping tab content', async () => {
  const onChange = vi.fn();
  const wrapper = mount({
    data() {
      return {
        active: 0,
      };
    },
    render() {
      return (
        <Tabs v-model:active={this.active} swipeable onChange={onChange}>
          <Tab title="title1">Text</Tab>
          <Tab title="title2">Text</Tab>
          <Tab title="title3" disabled>
            Text
          </Tab>
        </Tabs>
      );
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();

  const content = wrapper.find('.van-swipe__track');
  await triggerDrag(content, -100, 0);
  expect(wrapper.html()).toMatchSnapshot();
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith(1, 'title2');

  await triggerDrag(content, -100, 0);
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(wrapper.html()).toMatchSnapshot();

  await later();
  wrapper.unmount();
});

test('should allow to disable lazy-render prop', async () => {
  const wrapper = mount({
    render() {
      return (
        <Tabs lazyRender={this.lazyRender}>
          <Tab title="title1">Text</Tab>
          <Tab title="title2">Text</Tab>
        </Tabs>
      );
    },
    data() {
      return {
        lazyRender: true,
      };
    },
  });

  expect(wrapper.find('.van-tabs__content').html()).toMatchSnapshot();

  await wrapper.setData({ lazyRender: false });
  expect(wrapper.find('.van-tabs__content').html()).toMatchSnapshot();
});

test('should not render empty tab', async () => {
  const wrapper = mount({
    render() {
      return (
        <Tabs>
          <Tab title="title1" />
          <Tab title="title2" />
        </Tabs>
      );
    },
  });

  expect(wrapper.find('.van-tabs__content').html()).toMatchSnapshot();
});

test('should render dot prop correctly', async () => {
  const wrapper = mount({
    render() {
      return (
        <Tabs>
          <Tab dot>Text</Tab>
        </Tabs>
      );
    },
  });

  await later();
  const firstTab = wrapper.find('.van-tab');
  expect(firstTab.find('.van-badge--dot').exists()).toBeTruthy();
});

test('should render badge prop correctly', async () => {
  const wrapper = mount({
    render() {
      return (
        <Tabs>
          <Tab badge="10">Text</Tab>
        </Tabs>
      );
    },
  });

  await later();
  expect(wrapper.find('.van-tab').html()).toMatchSnapshot();
});

test('should change title style when using title-style prop', async () => {
  const wrapper = mount({
    render() {
      return (
        <Tabs>
          <Tab title="title1" titleStyle="color: red;">
            Text
          </Tab>
          <Tab title="title1" titleStyle={{ color: 'blue' }}>
            Text
          </Tab>
        </Tabs>
      );
    },
  });

  await later();
  const tabs = wrapper.findAll('.van-tab');
  expect(tabs.at(0)!.style.color).toEqual('red');
  expect(tabs.at(1)!.style.color).toEqual('blue');
});

test('should allot to hide bottom border by border prop', async () => {
  const wrapper = mount(Tabs, {
    props: {
      border: true,
    },
  });

  expect(wrapper.find('.van-hairline--top-bottom').exists()).toBeTruthy();

  await wrapper.setProps({ border: false });
  expect(wrapper.find('.van-hairline--top-bottom').exists()).toBeFalsy();
});

test('should render nav-left、nav-right slot correctly', async () => {
  const wrapper = mount({
    render() {
      return (
        <Tabs
          v-slots={{
            'nav-left': () => 'Custom nav left',
            'nav-right': () => 'Custom nav right',
          }}
        >
          <Tab title="Title">Text</Tab>
        </Tabs>
      );
    },
  });

  await later();
  expect(wrapper.find('.van-tabs__wrap').html()).toMatchSnapshot();
});

test('should emit rendered event after tab is rendered', async () => {
  const onRendered = vi.fn();

  const wrapper = mount({
    data() {
      return {
        active: 'a',
      };
    },
    render() {
      return (
        <Tabs v-model:active={this.active} onRendered={onRendered}>
          <Tab name="a" title="title1">
            Text
          </Tab>
          <Tab name="b" title="title2">
            Title2
          </Tab>
        </Tabs>
      );
    },
  });

  await later();
  expect(onRendered).toHaveBeenCalledWith('a', 'title1');
  expect(wrapper.find('.van-tab__panel').html()).toMatchSnapshot();

  const tabs = wrapper.findAll('.van-tab');
  await tabs[1].trigger('click');
  await tabs[0].trigger('click');

  await later();
  expect(onRendered).toHaveBeenCalledTimes(2);
});

test('should not trigger rendered event when lazy-render prop is disabled', async () => {
  const onRendered = vi.fn();

  mount({
    render() {
      return (
        <Tabs lazyRender={false} onRendered={onRendered}>
          <Tab>Text</Tab>
          <Tab>Title2</Tab>
        </Tabs>
      );
    },
  });

  await later();
  expect(onRendered).toHaveBeenCalledTimes(0);
});

test('should allow to set name prop', async () => {
  const onChange = vi.fn();
  const onClickTab = vi.fn();

  const wrapper = mount({
    data() {
      return {
        active: 'a',
      };
    },
    render() {
      return (
        <Tabs
          v-model:active={this.active}
          onChange={onChange}
          onClickTab={onClickTab}
        >
          <Tab title="title1" name="a">
            Text
          </Tab>
          <Tab title="title2" name="b">
            Text
          </Tab>
          <Tab title="title3" name="c" disabled>
            Text
          </Tab>
        </Tabs>
      );
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();

  const tabs = wrapper.findAll('.van-tab');
  await tabs[1].trigger('click');

  expect(onChange.mock.calls[0][0]).toEqual('b');
  expect(onClickTab.mock.calls[0][0].name).toEqual('b');
  expect(onChange).toHaveBeenCalledTimes(1);

  await tabs[2].trigger('click');
  expect(onClickTab.mock.calls[1][0].name).toEqual('c');
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('should allow name prop to be zero', async () => {
  const onClickTab = vi.fn();

  const wrapper = mount({
    render() {
      return (
        <Tabs onClickTab={onClickTab}>
          <Tab title="title1" name={1}>
            Text
          </Tab>
          <Tab title="title2" name={0}>
            Text
          </Tab>
        </Tabs>
      );
    },
  });

  await later();
  const tabs = wrapper.findAll('.van-tab');
  await tabs[1].trigger('click');
  expect(onClickTab.mock.calls[0][0].name).toEqual(0);
});

test('should change active tab after scrolling when using scrollspy prop', async () => {
  const onChange = vi.fn();
  window.scrollTo = vi.fn();

  mount({
    data() {
      return {
        active: 'a',
      };
    },
    render() {
      return (
        <Tabs v-model:active={this.active} scrollspy onChange={onChange}>
          <Tab name="a" title="title1">
            Text
          </Tab>
          <Tab name="b" title="title2">
            Text
          </Tab>
        </Tabs>
      );
    },
  });

  await later();
  mockScrollTop(100);
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith('b', 'title2');
});

test('should allow to call scrollTo method when scrollspy is enabled', async () => {
  const onChange = vi.fn();
  const tabs = ref<TabsInstance>();

  mount({
    render() {
      return (
        <Tabs ref={tabs} scrollspy sticky onChange={onChange}>
          <Tab name="a" title="title1">
            Text
          </Tab>
          <Tab name="b" title="title2">
            Text
          </Tab>
          <Tab name="c" title="title3">
            Text
          </Tab>
        </Tabs>
      );
    },
  });

  tabs.value?.scrollTo('b');

  await later();
  expect(onChange).toHaveBeenCalledWith('b', 'title2');
});

test('should not render header when showHeader is false', async () => {
  const wrapper = mount({
    render() {
      return (
        <Tabs showHeader={false}>
          <Tab title="title1">Text</Tab>
          <Tab title="title2">Text</Tab>
          <Tab title="title3">Text</Tab>
          <Tab title="title4">Text</Tab>
          <Tab title="title5">Text</Tab>
        </Tabs>
      );
    },
  });

  await later();
  const tabs = wrapper.findAll('.van-tabs__wrap,.van-sticky');
  expect(tabs.length).toEqual(0);
});

test('should call before-change prop before changing', async () => {
  const onChange = vi.fn();
  const beforeChange = (name: number) => {
    switch (name) {
      case 1:
        return false;
      case 2:
        return true;
      case 3:
        return Promise.resolve(false);
      case 4:
        return Promise.resolve(true);
    }
  };

  const wrapper = mount({
    render() {
      return (
        <Tabs onChange={onChange} beforeChange={beforeChange}>
          <Tab title="title1">Text</Tab>
          <Tab title="title2">Text</Tab>
          <Tab title="title3">Text</Tab>
          <Tab title="title4">Text</Tab>
          <Tab title="title5">Text</Tab>
        </Tabs>
      );
    },
  });

  await later();

  const tabs = wrapper.findAll('.van-tab');
  await tabs[1].trigger('click');
  expect(onChange).toHaveBeenCalledTimes(0);

  await tabs[2].trigger('click');
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith(2, 'title3');

  await tabs[3].trigger('click');
  expect(onChange).toHaveBeenCalledTimes(1);

  await tabs[4].trigger('click');
  expect(onChange).toHaveBeenCalledTimes(2);
  expect(onChange).toHaveBeenLastCalledWith(4, 'title5');
});

test('should re-render when line-width or line-height changed', async () => {
  const wrapper = mount({
    data() {
      return {
        lineWidth: 20,
        lineHeight: 5,
      };
    },
    render() {
      return (
        <Tabs lineWidth={this.lineWidth} lineHeight={this.lineHeight}>
          <Tab>1</Tab>
        </Tabs>
      );
    },
  });

  await later();
  const line = wrapper.find('.van-tabs__line');
  expect(line.style.width).toEqual('20px');
  expect(line.style.height).toEqual('5px');

  await wrapper.setData({
    lineWidth: 30,
    lineHeight: 10,
  });
  await later();
  expect(line.style.width).toEqual('30px');
  expect(line.style.height).toEqual('10px');
});
