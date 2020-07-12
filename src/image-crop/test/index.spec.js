import { mount } from '../../../test';
import ImageCrop from '..';

// const mockFile = new File([], 'test.jpg');
// const file = { target: { files: [mockFile] } };

test('input event', () => {
  const wrapper = mount(ImageCrop);
  wrapper.vm.currentValue = '1';
  expect(wrapper.emitted('input')[0][0]).toEqual('1');
});

test('deletable prop', () => {
  const wrapper = mount(ImageCrop, {
    propsData: {
      deletable: true,
    },
  });

  expect(wrapper.contains('.van-image-crop__remove')).toBeTruthy();

  wrapper.setProps({ deletable: false });
  expect(wrapper.find('.van-image-crop__remove').element).toBeFalsy();
});
