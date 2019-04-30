import { mount } from '../../../test/utils';
import Loading from '..';

test('text-size prop', () => {
  const wrapper = mount(Loading, {
    propsData: {
      textSize: 20
    },
    scopedSlots: {
      default: () => 'Text'
    }
  });

  expect(wrapper).toMatchSnapshot();
});
