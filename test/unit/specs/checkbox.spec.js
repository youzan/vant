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

    expect(wrapper.hasClass('zan-checkbox-group')).to.be.true;

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

    const firstCheckboxLabel = wrapper.find('.zan-checkbox')[0].find('.zan-checkbox__label')[0];
    firstCheckboxLabel.simulate('click');

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

    const lastCheckboxLabel = wrapper.find('.zan-checkbox')[3].find('.zan-checkbox__label')[0];
    lastCheckboxLabel.simulate('click');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('input'));
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
        value: false,
        disabled: false
      }
    });

    expect(wrapper.hasClass('zan-checkbox')).to.be.true;
    expect(wrapper.instance().currentValue).to.be.false;
    expect(wrapper.instance().isDisabled).to.be.false;
    expect(wrapper.instance().isChecked).to.be.false;
  });

  it('click on a checkbox', (done) => {
    wrapper = mount(Checkbox, {
      propsData: {
        value: false,
        disabled: false
      }
    });

    expect(wrapper.hasClass('zan-checkbox')).to.be.true;
    const eventStub = sinon.stub(wrapper.vm, '$emit');

    const checkboxLabel = wrapper.find('.zan-checkbox__label')[0];
    checkboxLabel.simulate('click');

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

    expect(wrapper.hasClass('zan-checkbox')).to.be.true;
    expect(wrapper.hasClass('zan-checkbox--disabled')).to.be.true;
    expect(wrapper.instance().currentValue).to.be.false;
    expect(wrapper.instance().isDisabled).to.be.true;

    const checkboxLabel = wrapper.find('.zan-checkbox__label')[0];
    checkboxLabel.simulate('click');

    expect(wrapper.instance().currentValue).to.be.false;
  });
});
