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
describe('Uploader', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('enabled', () => {
    wrapper = mount(Uploader, {
      propsData: {
        disabled: false
      }
    });

    expect(wrapper.contains('input')).to.equal(true);
    expect(wrapper.vm.onValueChange({ target: { files: [] }})).to.equal(undefined);
  });

  it('disabled', () => {
    wrapper = mount(Uploader, {
      propsData: {
        disabled: true
      }
    });

    expect(wrapper.contains('input')).to.equal(true);
    expect(wrapper.vm.onValueChange({ target: { files: [] }})).to.equal(undefined);
  });

  it('before read', () => {
    wrapper = mount(Uploader, {
      propsData: {
        disabled: false,
        beforeRead: () => {
          return false;
        }
      }
    });

    expect(wrapper.contains('input')).to.equal(true);
    expect(wrapper.vm.onValueChange({ target: { files: [new File([], '')] }})).to.equal(undefined);
  });

  it('read text', () => {
    wrapper = mount(Uploader, {
      propsData: {
        disabled: false,
        resultType: 'text',
        afterRead: (file) => {
        }
      }
    });

    expect(wrapper.contains('input')).to.equal(true);
    expect(wrapper.vm.onValueChange({ target: { files: [new File([], '/Users')] }})).to.equal(undefined);
  });

  it('read text no after hook', () => {
    wrapper = mount(Uploader, {
      propsData: {
        disabled: false,
        resultType: 'text'
      }
    });

    expect(wrapper.contains('input')).to.equal(true);
    expect(wrapper.vm.onValueChange({ target: { files: [new File([], '/Users')] }})).to.equal(undefined);
  });

  it('read dataUrl', () => {
    wrapper = mount(Uploader, {
      propsData: {
        disabled: false,
        resultType: 'dataUrl',
        afterRead: (file) => {
        }
      }
    });

    expect(wrapper.contains('input')).to.equal(true);
    expect(wrapper.vm.onValueChange({ target: { files: [new File([], '/Users')] }})).to.equal(undefined);
  });

  it('unknown resultType', () => {
    wrapper = mount(Uploader, {
      propsData: {
        disabled: false,
        resultType: 'xxxx'
      }
    });

    expect(wrapper.contains('input')).to.equal(true);
    expect(wrapper.vm.onValueChange({ target: { files: [new File([], '/Users')] }})).to.equal(undefined);
  });
});
