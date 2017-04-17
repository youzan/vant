import { mount } from 'avoriaz';
import Radio from 'packages/radio';
import RadioTestComponent from '../components/radio';

describe('RadioGroup', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a radio-group', () => {
    wrapper = mount(RadioTestComponent);

    expect(wrapper.hasClass('zan-radio-group')).to.be.true;

    expect(wrapper.vNode.child.value).to.equal('1');
    expect(wrapper.vNode.child.disabled).to.be.false;
  });

  it('emit a change event', (done) => {
    wrapper = mount(RadioTestComponent);

    expect(wrapper.vNode.child.value).to.equal('1');
    const eventStub = sinon.stub(wrapper.vNode.child, '$emit');

    wrapper.setData({
      'radio': '2'
    });
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vNode.child.value).to.equal('2');
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('change'));
      done();
    });
  });

  it('click on unchecked radio', (done) => {
    wrapper = mount(RadioTestComponent);

    const eventStub = sinon.stub(wrapper.vNode.child, '$emit');

    const uncheckedRadioLabel = wrapper.find('.zan-radio')[1].find('.zan-radio__label')[0];
    uncheckedRadioLabel.simulate('click');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('input'));
      done();
    });
  });
});

describe('Radio', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a radio', () => {
    wrapper = mount(Radio, {
      propsData: {
        value: '1',
        name: '1',
        disabled: false
      }
    });

    expect(wrapper.hasClass('zan-radio')).to.be.true;
    expect(wrapper.hasClass('zan-radio--disabled')).to.be.false;
    expect(wrapper.instance().currentValue).to.equal('1');
    expect(wrapper.instance().isDisabled).to.be.false;
  });

  it('click on a radio', (done) => {
    wrapper = mount(Radio, {
      propsData: {
        value: '1',
        name: '1',
        disabled: false
      }
    });

    expect(wrapper.hasClass('zan-radio')).to.be.true;
    const eventStub = sinon.stub(wrapper.vm, '$emit');

    wrapper.simulate('click');
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('click'));
      done();
    });
  });

  it('click on a radio label', (done) => {
    wrapper = mount(Radio, {
      propsData: {
        value: '1',
        name: '1',
        disabled: false
      }
    });

    expect(wrapper.hasClass('zan-radio')).to.be.true;
    const eventStub = sinon.stub(wrapper.vm, '$emit');

    const checkboxLabel = wrapper.find('.zan-radio__label')[0];
    checkboxLabel.simulate('click');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('input'));
      done();
    });
  });

  it('click on a disabled radio', () => {
    wrapper = mount(Radio, {
      propsData: {
        value: '1',
        name: '2',
        disabled: true
      }
    });

    expect(wrapper.hasClass('zan-radio')).to.be.true;
    expect(wrapper.hasClass('zan-radio--disabled')).to.be.true;
    expect(wrapper.instance().currentValue).to.equal('1');
    expect(wrapper.instance().isDisabled).to.be.true;

    const checkboxLabel = wrapper.find('.zan-radio__label')[0];
    checkboxLabel.simulate('click');

    expect(wrapper.instance().currentValue).to.equal('1');
  });
});
