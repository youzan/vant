import { nextTick } from 'vue';
import Uploader, { UploaderFileListItem } from '..';
import { mount, later, triggerDrag } from '../../../test';

const mockFileDataUrl = 'data:image/test';
const mockFile = new File([new ArrayBuffer(10000)], 'test.jpg', {
  type: 'test',
});
const IMAGE = 'https://img.yzcdn.cn/vant/cat.jpeg';
const PDF = 'https://img.yzcdn.cn/vant/test.pdf';

function mockFileReader() {
  function mockReadAsText(this: FileReader) {
    if (this.onload) {
      this.onload({
        target: {
          result: mockFileDataUrl,
        },
      } as ProgressEvent<FileReader>);
    }
  }

  Object.defineProperty(window.FileReader.prototype, 'readAsText', {
    value: mockReadAsText,
  });

  Object.defineProperty(window.FileReader.prototype, 'readAsDataURL', {
    value: mockReadAsText,
  });
}

mockFileReader();

test('disabled', async () => {
  const afterRead = jest.fn();
  const wrapper = mount(Uploader, {
    props: {
      disabled: true,
      afterRead,
    },
  });

  await later();
  const input = wrapper.find<HTMLInputElement>('.van-uploader__input');
  Object.defineProperty(input.element, 'files', {
    get: jest.fn().mockReturnValue([mockFile]),
  });

  input.trigger('change');
  await later();
  expect(afterRead).toHaveBeenCalledTimes(0);
});

test('result-type as text', (done) => {
  const wrapper = mount(Uploader, {
    props: {
      resultType: 'text',
      afterRead(readFile: UploaderFileListItem | UploaderFileListItem[]) {
        expect((readFile as UploaderFileListItem).content).toEqual(
          mockFileDataUrl
        );
        done();
      },
    },
  });

  const input = wrapper.find<HTMLInputElement>('.van-uploader__input');
  Object.defineProperty(input.element, 'files', {
    get: jest.fn().mockReturnValue([mockFile]),
  });
  input.trigger('change');
});

test('result-type as file', (done) => {
  const wrapper = mount(Uploader, {
    props: {
      resultType: 'file',
      afterRead: (readFile: UploaderFileListItem | UploaderFileListItem[]) => {
        expect((readFile as UploaderFileListItem).file).toBeTruthy();
        expect((readFile as UploaderFileListItem).content).toBeFalsy();
        done();
      },
    },
  });

  const input = wrapper.find<HTMLInputElement>('.van-uploader__input');
  Object.defineProperty(input.element, 'files', {
    get: jest.fn().mockReturnValue([mockFile]),
  });
  input.trigger('change');
});

test('set input name', (done) => {
  const wrapper = mount(Uploader, {
    props: {
      name: 'uploader',
      beforeRead: (
        file: File | File[],
        detail: { name: string | number; index: number }
      ) => {
        expect(detail.name).toEqual('uploader');
        return file;
      },
      afterRead: (
        readFile: UploaderFileListItem | UploaderFileListItem[],
        detail: { name: string | number; index: number }
      ) => {
        expect(detail.name).toEqual('uploader');
        done();
      },
    },
  });

  const input = wrapper.find<HTMLInputElement>('.van-uploader__input');
  Object.defineProperty(input.element, 'files', {
    get: jest.fn().mockReturnValue([mockFile]),
  });
  input.trigger('change');
});

test('unknown resultType', async () => {
  const afterRead = jest.fn();
  const wrapper = mount(Uploader, {
    props: {
      afterRead,
    },
  });
  await wrapper.setProps({ resultType: 'xxxx' });

  const input = wrapper.find<HTMLInputElement>('.van-uploader__input');
  Object.defineProperty(input.element, 'files', {
    get: jest.fn().mockReturnValue([mockFile]),
  });
  input.trigger('change');
  await later();
  expect(afterRead).toHaveBeenCalledTimes(0);
});

test('before read return false', async () => {
  const afterRead = jest.fn();
  const wrapper = mount(Uploader, {
    props: {
      beforeRead: () => undefined,
      afterRead,
    },
  });

  const input = wrapper.find<HTMLInputElement>('.van-uploader__input');
  Object.defineProperty(input.element, 'files', {
    get: jest.fn().mockReturnValue([mockFile]),
  });
  input.trigger('change');
  await later();
  expect(afterRead).toHaveBeenCalledTimes(0);
  expect(input.element.value).toEqual('');
});

test('before read return promise and resolve', async () => {
  const afterRead = jest.fn();
  const wrapper = mount(Uploader, {
    props: {
      beforeRead: (file: File | File[]) =>
        new Promise<File | File[] | undefined>((resolve) => {
          resolve(file);
        }),
      afterRead,
    },
  });

  const input = wrapper.find<HTMLInputElement>('.van-uploader__input');
  Object.defineProperty(input.element, 'files', {
    get: jest.fn().mockReturnValue([mockFile]),
  });
  input.trigger('change');
  await later();
  expect(afterRead).toHaveBeenCalledTimes(1);
});

test('before read return promise and resolve no value', async () => {
  const afterRead = jest.fn();
  const wrapper = mount(Uploader, {
    props: {
      beforeRead: () =>
        new Promise<undefined>((resolve) => {
          resolve(undefined);
        }),
      afterRead,
    },
  });

  const input = wrapper.find<HTMLInputElement>('.van-uploader__input');
  Object.defineProperty(input.element, 'files', {
    get: jest.fn().mockReturnValue([mockFile]),
  });
  input.trigger('change');
  await later();
  expect(afterRead).toHaveBeenCalledTimes(1);
  expect(input.element.value).toEqual('');
});

test('before read return promise and reject', async () => {
  const afterRead = jest.fn();
  const wrapper = mount(Uploader, {
    props: {
      beforeRead: () =>
        new Promise<undefined>((resolve, reject) => {
          reject();
        }),
      afterRead,
    },
  });

  const input = wrapper.find<HTMLInputElement>('.van-uploader__input');
  Object.defineProperty(input.element, 'files', {
    get: jest.fn().mockReturnValue([mockFile]),
  });
  input.trigger('change');
  await later();
  expect(afterRead).toHaveBeenCalledTimes(0);
  expect(input.element.value).toEqual('');
});

test('should trigger oversize event when file size is overlimit', async () => {
  const wrapper = mount(Uploader, {
    props: {
      maxSize: 1,
    },
  });

  const input = wrapper.find<HTMLInputElement>('.van-uploader__input');

  let fileList = [mockFile];
  Object.defineProperty(input.element, 'files', {
    get: () => jest.fn().mockReturnValue(fileList)(),
  });

  await input.trigger('change');

  fileList = [mockFile, mockFile];
  await input.trigger('change');

  await later();
  expect(wrapper.emitted<[File]>('oversize')![0]).toBeTruthy();
  expect(wrapper.emitted<[File]>('oversize')![1]).toBeTruthy();

  await wrapper.setProps({ maxSize: 100000 });

  fileList = [mockFile];
  await input.trigger('change');

  await later();
  expect(wrapper.emitted<[File]>('oversize')![2]).toBeFalsy();
});

test('should allow to custom max-size for different type of files', async () => {
  const wrapper = mount(Uploader, {
    props: {
      maxSize(file: File) {
        if (file.type === 'test') {
          return file.size > 500;
        }
        return false;
      },
    },
  });

  const input = wrapper.find<HTMLInputElement>('.van-uploader__input');
  const fileList = [mockFile];

  Object.defineProperty(input.element, 'files', {
    get: () => jest.fn().mockReturnValue(fileList)(),
  });

  await input.trigger('change');

  await later();
  expect(wrapper.emitted<[File]>('oversize')![0]).toBeTruthy();
});

test('render upload-text', () => {
  const uploadText = 'Text';
  const wrapper = mount(Uploader, {
    props: {
      uploadText,
    },
  });

  const text = wrapper.find<HTMLSpanElement>('.van-uploader__upload-text');
  expect(text?.text()).toEqual(uploadText);
});

test('render preview image', async () => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [
        { url: 'https://img.yzcdn.cn/vant/cat.jpeg' },
        { url: 'https://img.yzcdn.cn/vant/test.pdf' },
        { file: mockFile },
      ],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('image-fit prop', () => {
  const wrapper = mount(Uploader, {
    props: {
      imageFit: 'contain',
      modelValue: [{ url: 'https://img.yzcdn.cn/vant/cat.jpeg' }],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('upload-icon prop', () => {
  const wrapper = mount(Uploader, {
    props: {
      uploadIcon: 'add',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('disable preview image', async () => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [],
      previewImage: false,
    },
  });

  await wrapper.setProps({ modelValue: [{ file: mockFile }] });
  expect(wrapper.html()).toMatchSnapshot();

  await wrapper.setProps({ previewImage: true });
  expect(wrapper.html()).toMatchSnapshot();
});

test('max-count prop', async () => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [],
      maxCount: 1,
    },
  });

  const input = wrapper.find<HTMLInputElement>('.van-uploader__input');
  Object.defineProperty(input.element, 'files', {
    get: jest.fn().mockReturnValue([mockFile, mockFile]),
  });
  input.trigger('change');
  await later();
  expect(
    wrapper.emitted<[File | File[]]>('update:modelValue')![0][0]
  ).toHaveLength(1);
});

test('preview-size prop', async () => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [],
      previewSize: 30,
    },
  });

  await wrapper.setProps({ modelValue: [{ file: mockFile }] });
  expect(wrapper.html()).toMatchSnapshot();
});

test('deletable prop', async () => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [{ url: IMAGE }],
    },
  });

  expect(wrapper.find('.van-uploader__preview-delete').exists()).toBeTruthy();

  await wrapper.setProps({ deletable: false });
  expect(wrapper.find('.van-uploader__preview-delete').exists()).toBeFalsy();
});

test('delete preview image', () => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [{ url: IMAGE }],
      previewSize: 30,
    },
  });

  wrapper.find('.van-uploader__preview-delete').trigger('click');

  expect(wrapper.emitted<[File]>('update:modelValue')![0][0]).toHaveLength(0);
  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.emitted<[File]>('delete')![0]).toBeTruthy();
});

test('before-delete prop return false', () => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [{ url: IMAGE }],
      beforeDelete: () => false,
    },
  });

  wrapper.find('.van-uploader__preview-delete').trigger('click');
  expect(wrapper.emitted('delete')).toBeFalsy();
});

test('before-delete prop return true', () => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [{ url: IMAGE }],
      beforeDelete: () => true,
    },
  });

  wrapper.find('.van-uploader__preview-delete').trigger('click');
  expect(wrapper.emitted('delete')).toBeTruthy();
});

test('before-delete prop resolved', async () => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [{ url: IMAGE }],
      beforeDelete: () => new Promise<boolean>((resolve) => resolve(true)),
    },
  });

  wrapper.find('.van-uploader__preview-delete').trigger('click');
  await later();
  expect(wrapper.emitted('delete')).toBeTruthy();
});

test('before-delete prop rejected', async () => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [{ url: IMAGE }],
      beforeDelete: () => new Promise<boolean>((resolve, reject) => reject()),
    },
  });

  wrapper.find('.van-uploader__preview-delete').trigger('click');
  await later();
  expect(wrapper.emitted('delete')).toBeFalsy();
});

test('click to preview image', async () => {
  const wrapper = mount(Uploader, {
    props: {
      previewFullImage: false,
      modelValue: [{ url: IMAGE }, { url: PDF }],
    },
  });

  wrapper.find('.van-image').trigger('click');
  await later();
  expect(document.querySelector('.van-image-preview')).toBeFalsy();

  await wrapper.setProps({ previewFullImage: true });
  wrapper.find('.van-image').trigger('click');
  await later();
  expect(document.querySelector('.van-image-preview')).toBeTruthy();

  const images = document.querySelectorAll<HTMLImageElement>(
    '.van-image-preview .van-image-preview__image'
  );
  expect(images).toHaveLength(1);
});

test('preview-options prop', async () => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [{ url: IMAGE }],
      previewOptions: {
        images: [],
        closeable: true,
      },
    },
  });

  wrapper.find('.van-image').trigger('click');
  await later();

  const closeIcon = document.querySelectorAll('.van-image-preview__close-icon');
  expect(closeIcon).toHaveLength(1);
});

test('closeImagePreview method', async () => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [{ url: IMAGE }],
    },
  });

  await nextTick();
  await (wrapper.vm as Record<string, any>).closeImagePreview();
  expect(wrapper.emitted('close-preview')).toBeFalsy();

  wrapper.find('.van-image').trigger('click');
  await (wrapper.vm as Record<string, any>).closeImagePreview();
  expect(wrapper.emitted('close-preview')).toBeTruthy();
});

test('click-preview event', () => {
  const wrapper = mount(Uploader, {
    props: {
      previewFullImage: false,
      modelValue: [{ url: IMAGE }, { url: PDF }],
    },
  });

  wrapper.find('.van-image').trigger('click');
  expect(wrapper.emitted<[File]>('click-preview')![0][0]).toEqual({
    url: IMAGE,
  });
  expect(
    wrapper.emitted<[File, { name: string; index: number }]>(
      'click-preview'
    )![0][1]
  ).toEqual({
    name: '',
    index: 0,
  });
});

test('close-preview event', async () => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [{ url: IMAGE }],
    },
  });

  await later();
  wrapper.find('.van-image').trigger('click');

  const preview = document.querySelector<HTMLDivElement>('.van-image-preview');
  const swipe = preview?.querySelector<HTMLDivElement>(
    '.van-swipe-item'
  ) as HTMLDivElement;
  triggerDrag(swipe, 0, 0);

  await later(300);
  expect(wrapper.emitted('close-preview')).toBeTruthy();
});

test('show-upload prop', async () => {
  const wrapper = mount(Uploader);

  expect(wrapper.find('.van-uploader__upload').exists()).toBeTruthy();
  await wrapper.setProps({ showUpload: false });
  expect(wrapper.find('.van-uploader__upload').exists()).toBeFalsy();
});

test('file message should be reactive', (done) => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [],
      afterRead(file: UploaderFileListItem | UploaderFileListItem[]) {
        if (Array.isArray(file)) return;
        file.status = 'uploading';
        file.message = '1';
        setTimeout(() => {
          file.message = '2';
          expect(wrapper.html()).toMatchSnapshot();
          done();
        });
      },
    },
  });

  const input = wrapper.find<HTMLInputElement>('.van-uploader__input');
  Object.defineProperty(input.element, 'files', {
    get: jest.fn().mockReturnValue([mockFile]),
  });
  input.trigger('change');
});

test('multiFile upload filter max-size file', async () => {
  const wrapper = mount(Uploader, {
    props: {
      maxSize: 1000,
    },
  });

  const smallFile = new File([new ArrayBuffer(100)], 'small.jpg');
  const input = wrapper.find<HTMLInputElement>('.van-uploader__input');
  Object.defineProperty(input.element, 'files', {
    get: jest.fn().mockReturnValue([mockFile, smallFile]),
  });
  input.trigger('change');
  await later();

  expect(wrapper.emitted<[File]>('oversize')![0]).toBeTruthy();
});

test('preview-cover slot', async () => {
  const wrapper = mount(Uploader, {
    props: {
      modelValue: [{ url: IMAGE }, { url: IMAGE }],
    },
    slots: {
      'preview-cover': 'Custom Preview Cover',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should not render upload input when using readonly prop', async () => {
  const wrapper = mount(Uploader, {
    props: {
      readonly: true,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit click-upload event when upload area is clicked', async () => {
  const wrapper = mount(Uploader);
  wrapper.find('.van-uploader__upload').trigger('click');
  expect(wrapper.emitted('click-upload')).toBeTruthy();
});
