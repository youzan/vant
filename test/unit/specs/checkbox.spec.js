import Vue from 'vue';
import Checkbox from 'packages/checkbox';
import CheckboxGroup from 'packages/checkbox-group';
import { mount } from 'avoriaz';

describe('Checkbox', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a checkbox', () => {
    wrapper = mount(Checkbox, {
      propsData: {}
    });

    expect(wrapper.hasClass('zan-checkbox')).to.be.true;
  });
});

describe('CheckboxGroup', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a checkbox-group', () => {
    wrapper = mount(CheckboxGroup, {
      propsData: {}
    });

    expect(wrapper.hasClass('zan-checkbox-group')).to.be.true;
  });

  it('emit a change event', () => {
    wrapper = mount(CheckboxGroup, {
      propsData: {
        value: false
      }
    });

    const eventStub = sinon.stub(wrapper.vm, '$emit');

    wrapper.vm.value = true;
    wrapper.update();
    Vue.nextTick(() => {
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('change'));
      done();
    });
  });
});
