import SwitchCell from 'packages/switch-cell';
import { mount } from 'avoriaz';
import { DOMChecker } from '../utils';

describe('SwitchCell', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('default', () => {
    wrapper = mount(SwitchCell, {
      attachToDocument: true
    });

    DOMChecker(wrapper, {
      count: {
        '.van-switch--on': 0,
        '.van-switch--disabled': 0
      }
    });
  });

  it('set title', () => {
    wrapper = mount(SwitchCell, {
      attachToDocument: true,
      propsData: {
        title: '测试标题'
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-cell__title span': '测试标题'
      },
      count: {
        '.van-switch--on': 0,
        '.van-switch--disabled': 0
      }
    });
  });

  it('checked', () => {
    wrapper = mount(SwitchCell, {
      attachToDocument: true,
      propsData: {
        value: true
      }
    });

    DOMChecker(wrapper, {
      count: {
        '.van-switch--on': 1,
        '.van-switch--disabled': 0
      }
    });
  });

  it('disabled', () => {
    wrapper = mount(SwitchCell, {
      attachToDocument: true,
      propsData: {
        disabled: true
      }
    });

    DOMChecker(wrapper, {
      count: {
        '.van-switch--on': 0,
        '.van-switch--disabled': 1
      }
    });
  });

  it('listen to change event', (done) => {
    wrapper = mount(SwitchCell, {
      attachToDocument: true,
      propsData: {
        value: false
      }
    });

    wrapper.vm.$on('input', (value) => {
      wrapper.vm.value = value;
    });

    wrapper.vm.$on('change', (value) => {
      expect(value).to.be.true;
      done();
    });

    const switchEl = wrapper.find('.van-switch')[0];
    switchEl.trigger('click');
  });
});
