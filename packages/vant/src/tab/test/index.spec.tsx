import { mount, later } from '../../../test';
import { Tab } from '..';
import { Tabs } from '../../tabs';

test('should emit click-tab event when tab is clicked', async () => {
  const onClickTab = jest.fn();

  const wrapper = mount({
    render() {
      return (
        <Tabs onClick-tab={onClickTab}>
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
    })
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
  expect(wrapper.html()).toMatchSnapshot();
});
