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
  expect(afterRead.mock.calls.length).toBeFalsy();
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

it('unknown resultType', () => {
  const afterRead = jest.fn();
  const wrapper = mount(Uploader, {
    propsData: {
      resultType: 'xxxx',
      afterRead
    }
  });
  wrapper.vm.onChange(file);
  expect(afterRead.mock.calls.length).toBeFalsy();
});

it('before read return false', () => {
  const afterRead = jest.fn();
  const wrapper = mount(Uploader, {
    propsData: {
      beforeRead: () => false,
      afterRead
    }
  });

  wrapper.vm.onChange(file);
  expect(afterRead.mock.calls.length).toBeFalsy();
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
