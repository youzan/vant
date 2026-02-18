import { Progress } from '..';
import { mount } from '../../../test';

test('should re-calc width if showing pivot dynamically', async () => {
  const wrapper = mount(Progress, {
    props: {
      showPivot: false,
      percentage: 100,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();

  await wrapper.setProps({
    showPivot: true,
    pivotText: 'test',
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should change track color when using track-color prop', () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 0,
      trackColor: 'green',
    },
  });

  expect(wrapper.style.background).toEqual('green');
});

test('should render pivot slot with correct percentage', () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 75,
    },
    slots: {
      pivot: (props: { percentage: number }) =>
        `${props.percentage}% completed`,
    },
  });

  expect(wrapper.find('.van-progress__pivot').text()).toEqual('75% completed');
});

test('should render pivot slot instead of pivotText when both provided', () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 50,
      pivotText: 'prop text',
    },
    slots: {
      pivot: () => 'slot content',
    },
  });

  expect(wrapper.find('.van-progress__pivot').text()).toEqual('slot content');
});

test('should not render pivot slot when showPivot is false', () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 50,
      showPivot: false,
    },
    slots: {
      pivot: () => 'slot content',
    },
  });

  expect(wrapper.find('.van-progress__pivot').exists()).toBeFalsy();
});
