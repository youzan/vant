import { mount } from '../../../test';
import Button from '..';

test('loading-size prop', () => {
  const wrapper = mount(Button, {
    propsData: {
      loading: true,
      loadingSize: '10px',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
