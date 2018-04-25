import Search from 'packages/search';
import { mount } from 'avoriaz';

describe('Search', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a search', () => {
    wrapper = mount(Search);

    expect(wrapper.hasClass('van-search')).to.be.true;
    expect(wrapper.data().focusStatus).to.be.false;
    expect(wrapper.data().isFocus).to.be.false;
  });

  it('focus on input', () => {
    wrapper = mount(Search);

    const input = wrapper.find('.van-search__input')[0];
    input.trigger('focus');

    expect(wrapper.data().isFocus).to.be.true;
  });

  it('create a search with searchText', (done) => {
    wrapper = mount(Search, {
      propsData: {
        value: 'search text'
      }
    });

    wrapper.vm.$nextTick(() => {
      const input = wrapper.find('.van-search__input')[0];
      expect(input.element.value === 'search text').to.be.true;
      done();
    });
  });

  it('emit input event', () => {
    wrapper = mount(Search);

    const input = wrapper.find('.van-search__input')[0];
    const eventStub = sinon.stub(wrapper.vm, '$emit');
    input.trigger('input', { target: { value: 'search' }});

    expect(eventStub.calledOnce).to.be.true;
    expect(eventStub.calledWith('input')).to.be.true;
  });

  it('handle clean click and refocus', (done) => {
    wrapper = mount(Search);

    let value = 'test';
    wrapper.setProps({ value });

    const focusSpy = sinon.spy();
    wrapper.vm.$on('focus', focusSpy);

    const inputSpy = sinon.spy();
    wrapper.vm.$on('input', val => {
      value = val;
      inputSpy();
    });

    const input = wrapper.find('.van-search__input')[0];
    input.trigger('focus');

    const cleanBtn = wrapper.find('.van-icon-clear')[0];
    cleanBtn.trigger('click');

    wrapper.vm.$nextTick(() => {
      expect(focusSpy.calledOnce).to.be.true;
      expect(inputSpy.calledOnce).to.be.true;
      expect(value).to.equal('');
      done();
    });
  });

  it('handle cancel click', (done) => {
    wrapper = mount(Search);

    wrapper.setProps({ value: 'test', showAction: true });
    expect(wrapper.vm.value).to.be.equal('test');

    const eventStub = sinon.stub(wrapper.vm, '$emit');

    const cancelBtn = wrapper.find('.van-search__cancel')[0];
    cancelBtn.trigger('click');

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.focusStatus).to.be.false;
      expect(wrapper.vm.isFocus).to.be.false;
      expect(eventStub.calledTwice).to.be.true;
      expect(eventStub.calledWith('input'));
      expect(eventStub.calledWith('change'));
      done();
    });
  });

  it('emit a search event', () => {
    wrapper = mount(Search);

    const searchSpy = sinon.spy();
    wrapper.vm.$on('search', searchSpy);

    const input = wrapper.find('.van-search__input')[0];
    input.trigger('keypress.enter');
    expect(searchSpy.calledOnce).to.be.true;

    const keypressSpy = sinon.spy();
    wrapper.vm.$on('keypress', keypressSpy);
    input.trigger('keypress.a');
    expect(keypressSpy.calledOnce).to.be.true;
  });

  it('blur after click outside', () => {
    wrapper = mount(Search);

    const input = wrapper.find('.van-search__input')[0];
    input.trigger('focus');

    expect(wrapper.vm.isFocus).to.be.true;

    const body = document.body;
    body.click();
    expect(wrapper.vm.isFocus).to.be.false;
    expect(wrapper.vm.focusStatus).to.be.false;
  });
});
