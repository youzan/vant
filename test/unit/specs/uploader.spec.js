import Uploader from 'packages/uploader';
import { mount } from 'avoriaz';

window.File = function() {
  this.name = 'test';
};

window.FileReader = function() {
  this.readAsDataURL = this.readAsText = function() {
    this.onload && this.onload({
      target: {
        result: 'test'
      }
    });
  };
};

const mockFile = new File([], '/Users');

describe('Uploader', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('disabled', () => {
    const afterRead = sinon.spy();
    wrapper = mount(Uploader, {
      propsData: {
        disabled: true,
        afterRead
      }
    });

    expect(wrapper.contains('input')).to.equal(true);
    wrapper.vm.onChange({ target: { files: [] }});
    expect(afterRead.calledOnce).to.be.false;
  });

  it('before read', () => {
    const afterRead = sinon.spy();
    wrapper = mount(Uploader, {
      propsData: {
        beforeRead: () => false,
        afterRead
      }
    });

    wrapper.vm.onChange({ target: { files: [mockFile] }});
    expect(afterRead.calledOnce).to.be.false;
  });

  it('read text', done => {
    wrapper = mount(Uploader, {
      propsData: {
        resultType: 'text',
        afterRead: (file) => {
          expect(file.content).to.equal('test');
          done();
        }
      }
    });

    wrapper.vm.onChange({ target: { files: [mockFile] }});
  });

  it('read dataUrl', done => {
    wrapper = mount(Uploader, {
      propsData: {
        afterRead: (file) => {
          expect(file.content).to.equal('test');
          done();
        }
      }
    });

    wrapper.vm.onChange({ target: { files: [mockFile] }});
  });

  it('unknown resultType', () => {
    const afterRead = sinon.spy();
    wrapper = mount(Uploader, {
      propsData: {
        resultType: 'xxxx',
        afterRead
      }
    });
    wrapper.vm.onChange({ target: { files: [mockFile] }});
    expect(afterRead.calledOnce).to.be.false;
  });

  it('read multiple files', done => {
    wrapper = mount(Uploader, {
      propsData: {
        afterRead: (file) => {
          expect(file.length).to.equal(2);
          done();
        }
      }
    });

    wrapper.vm.onChange({ target: { files: [mockFile, mockFile] }});
  });
});
