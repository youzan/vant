import Stepper from 'packages/stepper';
import { mount } from 'avoriaz';

describe('Stepper', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a stepper', () => {
    wrapper = mount(Stepper, {
      propsData: {
        defaultValue: 1
      }
    });

    expect(wrapper.hasClass('van-stepper')).to.be.true;
    expect(wrapper.data().currentValue).to.equal(1);

    const plusButton = wrapper.find('.van-stepper__plus')[0];
    plusButton.trigger('click');

    expect(wrapper.data().currentValue).to.equal(2);

    const minusButton = wrapper.find('.van-stepper__minus')[0];
    minusButton.trigger('click');
    expect(wrapper.data().currentValue).to.equal(1);
  });

  it('create a disabled stepper', (done) => {
    wrapper = mount(Stepper, {
      propsData: {
        disabled: true
      }
    });

    expect(wrapper.hasClass('van-stepper')).to.be.true;
    const minusButton = wrapper.find('.van-stepper__minus')[0];
    expect(minusButton.hasClass('van-stepper__minus--disabled')).to.be.true;

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    minusButton.trigger('click');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledWith('overlimit'));
      done();
    });

    const plusButton = wrapper.find('.van-stepper__plus')[0];
    expect(plusButton.hasClass('van-stepper__plus--disabled')).to.be.true;

    plusButton.trigger('click');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledWith('overlimit'));
      done();
    });
  });

  it('only disable stepper input', () => {
    wrapper = mount(Stepper, {
      propsData: {
        disableInput: true
      }
    });

    const input = wrapper.find('.van-stepper__input')[0];
    expect(input.hasAttribute('disabled', 'disabled')).to.be.true;
  });

  it('update stepper value use v-model', (done) => {
    wrapper = mount(Stepper, {
      propsData: {
        value: 1
      }
    });

    expect(wrapper.hasClass('van-stepper')).to.be.true;
    const eventStub = sinon.stub(wrapper.vm, '$emit');

    wrapper.vm.value = 2;
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledWith('input'));
      expect(eventStub.calledWith('change'));
      done();
    });
  });

  it('correct value when value is not correct', (done) => {
    wrapper = mount(Stepper, {
      propsData: {
        value: 50,
        max: 30
      }
    });

    expect(wrapper.hasClass('van-stepper')).to.be.true;
    expect(wrapper.vm.currentValue).to.equal(30);
    const eventStub = sinon.stub(wrapper.vm, '$emit');

    wrapper.vm.value = 30;
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.currentValue).to.equal(30);
      expect(eventStub.calledWith('input'));

      // value设置非数字时，则使用设置的最小值（默认1）
      wrapper.vm.value = 'abc';
      wrapper.update();
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.currentValue).to.equal(1);
        done();
      });
    });
  });

  it('handle when input change', (done) => {
    wrapper = mount(Stepper, {
      propsData: {
        value: 1
      }
    });

    const input = wrapper.find('.van-stepper__input')[0];
    input.element.value = 2;
    input.trigger('input');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.data().currentValue).to.equal(2);
      done();
    });
  });
});
