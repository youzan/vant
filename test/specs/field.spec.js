import Field from 'packages/field';
import FieldWithIcon from '../components/field';
import { mount } from 'avoriaz';

describe('Field', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a text field', () => {
    wrapper = mount(Field, {
      propsData: {
        type: 'text',
        autosize: false
      }
    });

    expect(wrapper.hasClass('van-field')).to.be.true;
  });

  it('create a text field with initialize value', (done) => {
    wrapper = mount(Field, {
      propsData: {
        value: 'test'
      }
    });

    const eventStub = sinon.stub(wrapper.vm, '$emit');

    wrapper.vm.value = 'test2';
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledWith('input'));
      expect(wrapper.find('.van-field__control')[0].element.value).to.equal('test2');
      done();
    });
  });

  it('focus on input', (done) => {
    wrapper = mount(Field, {
      propsData: {
        value: ''
      }
    });

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    const input = wrapper.find('.van-field__control')[0];
    input.trigger('focus');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledWith('focus'));
      done();
    });
  });

  it('create a textarea field', (done) => {
    wrapper = mount(Field, {
      propsData: {
        type: 'textarea'
      }
    });

    setTimeout(() => {
      expect(wrapper.hasClass('van-field--min-height')).to.be.true;
      done();
    }, 50);
  });

  it('create a autosize textarea field', (done) => {
    wrapper = mount(Field, {
      propsData: {
        type: 'textarea',
        autosize: {}
      }
    });

    wrapper.vm.$on('input', val => {
      wrapper.vm.value = val;
    });

    const textarea = wrapper.find('.van-field__control')[0];
    const textareaElement = textarea.element;
    const textAreaDiff = (parseInt(textareaElement.style.paddingBottom, 10) +
          parseInt(textareaElement.style.paddingTop, 10)) || 0;

    const longText = 'testtesttesttesttesttesttest';
    textareaElement.value = longText;
    textarea.trigger('input');

    wrapper.update();
    setTimeout(() => {
      expect(wrapper.find('.van-field__control')[0].element.value).to.equal(longText);
      expect(textareaElement.style.height).to.equal((textareaElement.scrollHeight - textAreaDiff) + 'px');
      done();
    }, 50);
  });

  it('autosize object', (done) => {
    wrapper = mount(Field, {
      propsData: {
        type: 'textarea',
        autosize: {
          maxHeight: 100,
          minHeight: 50
        }
      }
    });

    wrapper.vm.$on('input', val => {
      wrapper.vm.value = val;
    });

    const textarea = wrapper.find('.van-field__control')[0];
    const textareaElement = textarea.element;

    const longText = 'testtesttesttesttesttesttest';
    textareaElement.value = longText;
    textarea.trigger('input');

    wrapper.update();
    setTimeout(() => {
      expect(wrapper.find('.van-field__control')[0].element.value).to.equal(longText);
      expect(textareaElement.style.height).to.equal(('50px'));
      done();
    }, 50);
  });

  it('show icon when has value and icon props', () => {
    wrapper = mount(Field, {
      propsData: {
        icon: 'name',
        value: '123'
      }
    });

    wrapper.find('.van-field__icon')[0].trigger('touchstart');
    expect(wrapper.find('.van-field__icon').length).to.equal(1);
  });

  it('keypress event', () => {
    wrapper = mount(Field, {
      propsData: {
        value: '',
        type: 'number'
      }
    });

    const spy1 = sinon.spy();
    wrapper.vm.onKeypress({ keyCode: 0, preventDefault: spy1 });
    expect(spy1.calledOnce).to.be.true;

    const spy2 = sinon.spy();
    wrapper.vm.onKeypress({ keyCode: 50, preventDefault: spy2 });
    expect(spy2.calledOnce).to.be.false;

    const spy3 = sinon.spy();
    wrapper.vm.value = '0.1';
    wrapper.vm.onKeypress({ keyCode: 46, preventDefault: spy3 });
    expect(spy3.calledOnce).to.be.true;

    wrapper.vm.type = 'text';
    const spy4 = sinon.spy();
    wrapper.vm.onKeypress({ keyCode: 0, preventDefault: spy4 });
    expect(spy4.calledOnce).to.be.false;
  });

  it('create a field with icon slot', () => {
    const fn = sinon.spy();

    wrapper = mount(FieldWithIcon, {
      propsData: {
        onIconClick: fn
      }
    });

    wrapper.find('.van-field__icon')[0].trigger('touchstart');
    expect(fn.calledOnce).to.be.true;
  });

  it('blur event', (done) => {
    const blur = sinon.spy();
    const focus = sinon.spy();
    const clickIcon = sinon.spy();

    wrapper = mount(FieldWithIcon, {});
    wrapper.vm.$on('blur', blur);
    wrapper.vm.$on('focus', focus);

    wrapper.find('.van-field__icon')[0].trigger('click');
    wrapper.find('.van-field__control')[0].trigger('focus');
    wrapper.find('.van-field__control')[0].trigger('blur');

    expect(blur.calledOnce).to.be.true;
    expect(clickIcon.calledOnce).to.be.false;
    done();
  });
});
