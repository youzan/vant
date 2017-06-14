import Field from 'packages/field';
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

    expect(wrapper.hasClass('van-field')).to.be.true;
    expect(wrapper.data().currentValue).to.equal('test');

    const eventStub = sinon.stub(wrapper.vm, '$emit');

    wrapper.vm.value = 'test2';
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.data().currentValue).to.equal('test2');
      expect(eventStub.calledWith('input'));
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

  it('input something to field', (done) => {
    wrapper = mount(Field, {
      propsData: {
        value: ''
      }
    });

    const input = wrapper.find('.van-field__control')[0];

    input.element.value = 'test';
    input.trigger('input');

    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.data().currentValue).to.equal('test');
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
    expect(wrapper.hasClass('van-field--hastextarea')).to.be.true;
  });

  it('create a autosize textarea field', (done) => {
    wrapper = mount(Field, {
      propsData: {
        type: 'textarea',
        autosize: true
      }
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
    wrapper.vm.$nextTick(() => {
      expect(wrapper.data().currentValue).to.equal('test');
      expect(textareaElement.style.height).to.equal((textareaElement.scrollHeight - textAreaDiff) + 'px');
      done();
    });
  });
});
