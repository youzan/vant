import { mount } from '../../../test';
import ImageCrop from '..';

// const mockFile = new File([], 'test.jpg');

it('input event', () => {
  const wrapper = mount(ImageCrop);
  wrapper.vm.currentValue = '1';
  expect(wrapper.emitted('input')[0][0]).toEqual('1');
});
