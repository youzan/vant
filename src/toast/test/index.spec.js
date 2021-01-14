import Toast from '../Toast';
import { mount } from '@vue/test-utils';
import { later } from '../../../test';

test('should change overlay style after using overlay-style prop', async () => {
  const wrapper = mount(Toast, {
    props: {
      show: true,
      overlayStyle: {
        background: 'red',
      },
    },
  });

  await later();
  expect(wrapper.find('.van-overlay').element.style.background).toEqual('red');
});
