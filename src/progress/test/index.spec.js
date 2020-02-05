import Progress from '..';
import { mount, later } from '../../../test';

test('calc width', async () => {
  const wrapper = mount(Progress, {
    propsData: {
      showPivot: false,
      percentage: 100,
    },
  });
  await later();
  expect(wrapper).toMatchSnapshot();

  wrapper.vm.showPivot = true;
  wrapper.vm.pivotText = 'test';
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('track color prop', async () => {
  const wrapper = mount(Progress, {
    propsData: {
      trackColor: 'green',
    },
  });

  expect(wrapper.element.style.background).toEqual('green');
});
