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
