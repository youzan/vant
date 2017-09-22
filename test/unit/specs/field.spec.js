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

  it('create a border field', () => {
    wrapper = mount(Field, {
      propsData: {
        type: 'text',
        border: true
      }
    });

    expect(wrapper.hasClass('van-field')).to.be.true;
    expect(wrapper.hasClass('van-field--border')).to.be.true;
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

  it('create a textarea field', () => {
    wrapper = mount(Field, {
      propsData: {
        type: 'textarea',
        autosize: false
      }
    });

    expect(wrapper.hasClass('van-field')).to.be.true;
    expect(wrapper.hasClass('van-field--has-textarea')).to.be.true;
  });

  it('create a autosize textarea field', (done) => {
    wrapper = mount(Field, {
      propsData: {
        type: 'textarea',
        autosize: true
      }
    });

    wrapper.vm.$on('input', val => {
      wrapper.vm.value = val;
    });

    expect(wrapper.hasClass('van-field')).to.be.true;
    expect(wrapper.hasClass('van-field--autosize')).to.be.true;

    const textarea = wrapper.find('.van-field__control')[0];
    const textareaElement = textarea.element;
    const textAreaDiff = (parseInt(textareaElement.style.paddingBottom, 10) +
          parseInt(textareaElement.style.paddingTop, 10)) || 0;

    textareaElement.value = 'test';
    textarea.trigger('input');

    wrapper.update();
    setTimeout(() => {
      expect(wrapper.find('.van-field__control')[0].element.value).to.equal('test');
      expect(textareaElement.style.height).to.equal((textareaElement.scrollHeight - textAreaDiff) + 'px');
      done();
    }, 500);
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
    const clickIcon = sinon.spy();

    wrapper = mount(FieldWithIcon, {});
    wrapper.vm.$on('blur', blur);

    wrapper.find('.van-field__icon')[0].trigger('click');
    wrapper.find('.van-field__control')[0].trigger('blur');

    expect(blur.calledOnce).to.be.true;
    expect(clickIcon.calledOnce).to.be.false;
    done();
  });
});
