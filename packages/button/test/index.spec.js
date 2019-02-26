import { mount } from '../../../test/utils';
import Button from '..';

test('loading size', () => {
  const wrapper = mount(Button, {
    propsData: {
      loading: true,
      loadingSize: '10px'
    }
  });
  expect(wrapper).toMatchSnapshot();
});
