import Progress from '..';
import { mount, later } from '../../../test/utils';

test('calc width', async () => {
  const wrapper = mount(Progress, {
    propsData: {
      showPivot: false,
      percentage: 100
    }
  });
  await later();
  expect(wrapper).toMatchSnapshot();

  wrapper.vm.showPivot = true;
  wrapper.vm.pivotText = 'test';
  await later();
  expect(wrapper).toMatchSnapshot();
});
