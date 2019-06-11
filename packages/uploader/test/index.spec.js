import Uploader from '..';
import { mount, later } from '../../../test/utils';

window.File = function () {
  this.size = 10000;
};

window.FileReader = function () {
  this.readAsText = function () {
    this.onload &&
      this.onload({
        target: {
          result: 'test'
        }
      });
  };
  this.readAsDataURL = this.readAsText;
};

const mockFile = new File([], '/Users');
const file = { target: { files: [mockFile] } };
const multiFile = { target: { files: [mockFile, mockFile] } };

test('disabled', () => {
  const afterRead = jest.fn();
  const wrapper = mount(Uploader, {
    propsData: {
      disabled: true,
      afterRead
    }
  });

  wrapper.vm.onChange(file);
  expect(afterRead).toHaveBeenCalledTimes(0);
});

it('read text', done => {
  const wrapper = mount(Uploader, {
    propsData: {
      resultType: 'text',
      afterRead: readFile => {
        expect(readFile.content).toEqual('test');
        done();
      }
    }
  });

  wrapper.vm.onChange(file);
});

it('set input name', done => {
  const wrapper = mount(Uploader, {
    propsData: {
      name: 'uploader',
      beforeRead: (readFile, detail) => {
        expect(detail.name).toEqual('uploader');
        return true;
      },
      afterRead: (readFile, detail) => {
        expect(detail.name).toEqual('uploader');
        done();
      }
    }
  });

  wrapper.vm.onChange(file);
});

it('unknown resultType', () => {
  const afterRead = jest.fn();
  const wrapper = mount(Uploader, {
    propsData: {
      resultType: 'xxxx',
      afterRead
    }
  });
  wrapper.vm.onChange(file);
  expect(afterRead).toHaveBeenCalledTimes(0);
});

it('before read return false', () => {
  const afterRead = jest.fn();
  const wrapper = mount(Uploader, {
    propsData: {
      beforeRead: () => false,
      afterRead
    }
  });

  const input = wrapper.find('input');

  wrapper.vm.onChange(file);
  expect(afterRead).toHaveBeenCalledTimes(0);
  expect(input.element.value).toEqual('');
});

test('file size overlimit', async () => {
  const wrapper = mount(Uploader, {
    propsData: {
      maxSize: 1
    }
  });
  wrapper.vm.onChange(file);
  wrapper.vm.onChange(multiFile);

  await later();
  expect(wrapper.emitted('oversize')[0]).toBeTruthy();
  expect(wrapper.emitted('oversize')[1]).toBeTruthy();

  wrapper.vm.maxSize = 100000;
  wrapper.vm.onChange(multiFile);

  await later();
  expect(wrapper.emitted('oversize')[2]).toBeFalsy();
});

it('render upload-text', () => {
  const wrapper = mount(Uploader, {
    propsData: {
      uploadText: 'Text'
    }
  });

  expect(wrapper).toMatchSnapshot();
});

it('render preview image', async () => {
  const wrapper = mount(Uploader, {
    propsData: {
      fileList: []
    },
    listeners: {
      input(fileList) {
        wrapper.setProps({ fileList });
      }
    }
  });

  wrapper.vm.onChange(file);
  await later();

  expect(wrapper).toMatchSnapshot();
});

it('disable preview image', async () => {
  const wrapper = mount(Uploader, {
    propsData: {
      fileList: [],
      previewImage: false
    },
    listeners: {
      input(fileList) {
        wrapper.setProps({ fileList });
      }
    }
  });

  wrapper.vm.onChange(file);
  await later();

  expect(wrapper).toMatchSnapshot();
});

it('max-count prop', async () => {
  const wrapper = mount(Uploader, {
    propsData: {
      fileList: [],
      maxCount: 1
    },
    listeners: {
      input(fileList) {
        wrapper.setProps({ fileList });
      }
    }
  });

  wrapper.vm.onChange(multiFile);
  await later();

  expect(wrapper).toMatchSnapshot();
});

it('preview-size prop', async () => {
  const wrapper = mount(Uploader, {
    propsData: {
      fileList: [],
      previewSize: 30
    },
    listeners: {
      input(fileList) {
        wrapper.setProps({ fileList });
      }
    }
  });

  wrapper.vm.onChange(file);
  await later();

  expect(wrapper).toMatchSnapshot();
});

it('delete preview image', async () => {
  const wrapper = mount(Uploader, {
    propsData: {
      fileList: [],
      previewSize: 30
    },
    listeners: {
      input(fileList) {
        wrapper.setProps({ fileList });
      }
    }
  });

  wrapper.vm.onChange(file);
  await later();

  wrapper.find('.van-uploader__preview-delete').trigger('click');
  expect(wrapper.vm.fileList.length).toEqual(0);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.emitted('delete')[0]).toBeTruthy();
});
