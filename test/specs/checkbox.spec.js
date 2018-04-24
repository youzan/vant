import { mount } from 'avoriaz';
import Checkbox from 'packages/checkbox';
import CheckboxTestComponent from '../components/checkbox';

describe('CheckboxGroup', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a checkbox-group', () => {
    wrapper = mount(CheckboxTestComponent);

    expect(wrapper.hasClass('van-checkbox-group')).to.be.true;

    expect(wrapper.vNode.child.value.length).to.equal(2);
    expect(wrapper.vNode.child.disabled).to.be.false;
  });

  it('emit a change event', (done) => {
    wrapper = mount(CheckboxTestComponent);

    expect(wrapper.vNode.child.value.length).to.equal(2);
    const eventStub = sinon.stub(wrapper.vNode.child, '$emit');

    wrapper.setData({
      'result': ['a']
    });
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vNode.child.value.length).to.equal(1);
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('change'));
      done();
    });
  });

  it('click on checked checkbox', (done) => {
    wrapper = mount(CheckboxTestComponent);

    const eventStub = sinon.stub(wrapper.vNode.child, '$emit');

    const firstCheckboxLabel = wrapper.find('.van-checkbox')[0].find('.van-checkbox__label')[0];
    firstCheckboxLabel.trigger('click');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('input'));
      done();
    });
  });

  it('click on unchecked checkbox', (done) => {
    wrapper = mount(CheckboxTestComponent);

    const eventStub = sinon.stub(wrapper.vNode.child, '$emit');

    const lastCheckboxLabel = wrapper.find('.van-checkbox')[3].find('.van-checkbox__label')[0];
    lastCheckboxLabel.trigger('click');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('input'));
      done();
    });
  });

  it('click on unchecked item and checked options num beyond max', (done) => {
    wrapper = mount(CheckboxTestComponent);

    wrapper.setData({
      'max': 2
    });

    const lastCheckboxLabel = wrapper.find('.van-checkbox')[3].find('.van-checkbox__label')[0];
    lastCheckboxLabel.trigger('click');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.result.indexOf('d')).to.equal(-1);
      done();
    });
  });

  it('click on disabled item', (done) => {
    wrapper = mount(CheckboxTestComponent);

    const eventStub = sinon.stub(wrapper.vNode.child, '$emit');

    const disabledLabel = wrapper.find('.van-checkbox')[2].find('.van-checkbox__label')[0];
    disabledLabel.trigger('click');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.false;
      expect(wrapper.vm.result.indexOf('c')).to.equal(-1);
      done();
    });
  });
});

describe('Checkbox', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a checkbox', () => {
    wrapper = mount(Checkbox, {
      propsData: {
        value: true,
        disabled: false
      }
    });

    expect(wrapper.hasClass('van-checkbox')).to.be.true;
    expect(wrapper.vm.currentValue).to.be.true;
    expect(wrapper.vm.isDisabled).to.be.false;
    expect(wrapper.vm.isChecked).to.be.true;
  });

  it('create a checkbox with name', () => {
    wrapper = mount(Checkbox, {
      propsData: {
        name: 'a',
        disabled: false
      }
    });

    expect(wrapper.hasClass('van-checkbox')).to.be.true;
    expect(!!wrapper.vm.isChecked).to.be.false;
  });

  it('create a not boolean value checkbox', (done) => {
    wrapper = mount(Checkbox, {
      propsData: {
        value: 'test',
        name: 'test'
      }
    });

    expect(wrapper.hasClass('van-checkbox')).to.be.true;
    expect(wrapper.vm.currentValue).to.equal('test');
    expect(wrapper.vm.isDisabled).to.be.false;
    expect(wrapper.vm.isChecked).to.be.true;

    wrapper.vm.value = null;
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.currentValue).to.equal(null);
      done();
    });
  });

  it('click on a checkbox', (done) => {
    wrapper = mount(Checkbox, {
      propsData: {
        value: false,
        disabled: false
      }
    });

    expect(wrapper.hasClass('van-checkbox')).to.be.true;
    const eventStub = sinon.stub(wrapper.vm, '$emit');

    const checkboxLabel = wrapper.find('.van-checkbox__icon')[0];
    checkboxLabel.trigger('click');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('input'));
      done();
    });
  });

  it('click on a disabled checkbox', () => {
    wrapper = mount(Checkbox, {
      propsData: {
        value: false,
        disabled: true
      }
    });

    expect(wrapper.hasClass('van-checkbox')).to.be.true;
    expect(wrapper.find('.van-checkbox--disabled').length).to.equal(1);
    expect(wrapper.vm.currentValue).to.be.false;
    expect(wrapper.vm.isDisabled).to.be.true;

    const checkboxLabel = wrapper.find('.van-checkbox__icon')[0];
    checkboxLabel.trigger('click');

    expect(wrapper.vm.currentValue).to.be.false;
  });

  it('click on a disabled checkbox label', () => {
    wrapper = mount(Checkbox, {
      propsData: {
        value: false,
        labelDisabled: true
      }
    });

    expect(wrapper.hasClass('van-checkbox')).to.be.true;
    expect(wrapper.vm.currentValue).to.be.false;

    const checkboxLabel = wrapper.find('.van-checkbox__icon')[0];
    checkboxLabel.trigger('click');

    expect(wrapper.vm.currentValue).to.be.false;
  });
});
