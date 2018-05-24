import Progress from '../';
import { mount } from '@vue/test-utils';

test('calc width', () => {
  const wrapper = mount(Progress, {
    propsData: {
      showPivot: false,
      percentage: 100
    }
  });
  expect(wrapper.html()).toMatchSnapshot();

  wrapper.vm.showPivot = true;
  wrapper.vm.pivotText = 'test';
  expect(wrapper.html()).toMatchSnapshot();
});
