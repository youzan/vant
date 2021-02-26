import Toast from '../Toast';
import { mount , later } from '../../../test';


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
  expect(wrapper.find('.van-overlay').style.background).toEqual('red');
});

test('should close Toast when using closeOnClick prop and clicked', () => {
  const wrapper = mount(Toast, {
    props: {
      show: true,
      closeOnClick: true,
    },
  });

  wrapper.find('.van-toast').trigger('click');
  expect(wrapper.emitted('update:show')![0]).toEqual([false]);
});

test('should close Toast when using closeOnClickOverlay prop and overlay is clicked', () => {
  const wrapper = mount(Toast, {
    props: {
      show: true,
      closeOnClickOverlay: true,
    },
  });

  wrapper.find('.van-overlay').trigger('click');
  expect(wrapper.emitted('update:show')![0]).toEqual([false]);
});
