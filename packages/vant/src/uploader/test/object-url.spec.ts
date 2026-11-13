import { mount, later } from '../../../test';
import Uploader, { type UploaderFileListItem, type UploaderInstance } from '..';

const file = new File(['image'], 'test.jpg', { type: 'image/jpeg' });

beforeEach(() => {
  rs.mocked(URL.createObjectURL).mockReset();
});

test.each([1, 2])(
  'should release object URLs for %i files without opening full-image preview',
  async (count) => {
    const createObjectURL = rs.spyOn(URL, 'createObjectURL');
    const revokeObjectURL = rs.spyOn(URL, 'revokeObjectURL');
    const urls = Array.from({ length: count }, (_, index) => `blob:${index}`);
    urls.forEach((url) => createObjectURL.mockReturnValueOnce(url));
    const wrapper = mount(Uploader, { props: { resultType: 'file' } });
    const input = wrapper.find('input');
    Object.defineProperty(input.element, 'files', {
      value: Array(count).fill(file),
    });

    await input.trigger('change');
    await later();

    const items = wrapper.emitted(
      'update:modelValue',
    )![0][0] as UploaderFileListItem[];
    expect(items.map((item) => item.objectUrl)).toEqual(urls);
    expect(revokeObjectURL).not.toHaveBeenCalled();
    wrapper.unmount();
    expect(revokeObjectURL.mock.calls).toEqual(urls.map((url) => [url]));
  },
);

test('should release object URLs for oversized files', async () => {
  rs.spyOn(URL, 'createObjectURL').mockReturnValue('blob:oversized');
  const revokeObjectURL = rs.spyOn(URL, 'revokeObjectURL');
  const wrapper = mount(Uploader, {
    props: { resultType: 'file', maxSize: 1 },
  });
  const input = wrapper.find('input');
  Object.defineProperty(input.element, 'files', { value: [file] });

  await input.trigger('change');
  await later();
  expect(wrapper.emitted('oversize')).toHaveLength(1);
  expect(wrapper.emitted('update:modelValue')).toBeUndefined();

  wrapper.unmount();
  expect(revokeObjectURL).toHaveBeenCalledExactlyOnceWith('blob:oversized');
});

test('should not release object URLs supplied by the parent', async () => {
  const revokeObjectURL = rs.spyOn(URL, 'revokeObjectURL');
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [{ objectUrl: 'blob:external', isImage: true }],
    },
  });

  await wrapper.find('.van-uploader__preview-image').trigger('click');
  (wrapper.vm as UploaderInstance).closeImagePreview();
  wrapper.unmount();

  expect(revokeObjectURL).not.toHaveBeenCalled();
});

test.each([1, 2])(
  'should not create object URLs when reading %i files finishes after unmount',
  async (count) => {
    const readers: FileReader[] = [];
    rs.spyOn(FileReader.prototype, 'readAsDataURL').mockImplementation(
      function (this: FileReader) {
        readers.push(this);
      },
    );
    const createObjectURL = rs.spyOn(URL, 'createObjectURL');
    const afterRead = rs.fn();
    const wrapper = mount(Uploader, { props: { afterRead } });
    const input = wrapper.find('input');
    Object.defineProperty(input.element, 'files', {
      value: Array(count).fill(file),
    });

    await input.trigger('change');
    expect(readers).toHaveLength(count);
    wrapper.unmount();
    readers.forEach((reader) => {
      Object.defineProperty(reader, 'result', {
        value: 'data:image/jpeg,test',
      });
      reader.dispatchEvent(new ProgressEvent('load'));
    });
    await later();

    expect(createObjectURL).not.toHaveBeenCalled();
    expect(afterRead).not.toHaveBeenCalled();
  },
);
