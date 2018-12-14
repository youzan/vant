import Progress from '..';
import { mount } from '../../../test/utils';

test('calc width', () => {
  const wrapper = mount(Progress, {
    propsData: {
      showPivot: false,
      percentage: 100
    }
  });
  expect(wrapper).toMatchSnapshot();

  wrapper.vm.showPivot = true;
  wrapper.vm.pivotText = 'test';
  expect(wrapper).toMatchSnapshot();
});
