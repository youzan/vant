import { mount, trigger } from '../../../test';
import Uploader, { type UploaderInstance } from '..';

const file = new File(['image'], 'test.jpg', { type: 'image/jpeg' });

test('should report the replaced index in before-read and after-read', async () => {
  const beforeRead = rs.fn(() => true);
  const afterRead = rs.fn();
  const wrapper = mount(Uploader, {
    props: {
      name: 'photos',
      modelValue: [{ url: 'first.jpg' }, { url: 'second.jpg' }],
      resultType: 'file',
      beforeRead,
      afterRead,
    },
  });
  const input = wrapper.find('input');
  Object.defineProperty(input.element, 'files', { value: [file] });

  (wrapper.vm as UploaderInstance).reuploadFile(0);
  await trigger(input, 'change');

  expect(beforeRead).toHaveBeenLastCalledWith(file, {
    name: 'photos',
    index: 0,
  });
  expect(afterRead).toHaveBeenLastCalledWith(
    expect.objectContaining({ file }),
    { name: 'photos', index: 0 },
  );
  expect(wrapper.emitted('update:modelValue')![0][0]).toEqual([
    expect.objectContaining({ file }),
    { url: 'second.jpg' },
  ]);

  await input.trigger('click');
  await trigger(input, 'change');
  expect(beforeRead).toHaveBeenLastCalledWith(file, {
    name: 'photos',
    index: 2,
  });
  expect(afterRead).toHaveBeenLastCalledWith(
    expect.objectContaining({ file }),
    { name: 'photos', index: 2 },
  );
  wrapper.unmount();
});

test('should report the replaced index when a reupload is oversized', async () => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [{ url: 'first.jpg' }, { url: 'second.jpg' }],
      resultType: 'file',
      reupload: true,
      maxSize: 1,
    },
  });
  const input = wrapper.find('input');
  Object.defineProperty(input.element, 'files', { value: [file] });

  await wrapper.find('.van-uploader__preview-image').trigger('click');
  await trigger(input, 'change');

  expect(wrapper.emitted('oversize')![0]).toEqual([
    expect.objectContaining({ file }),
    { name: '', index: 0 },
  ]);
  expect(wrapper.emitted('update:modelValue')).toBeUndefined();
  wrapper.unmount();
});
