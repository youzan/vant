import Search from 'packages/search';
import { mount } from 'avoriaz';

describe('Search', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a quantity', () => {
    wrapper = mount(Search);

    expect(wrapper.hasClass('van-search')).to.be.true;
    expect(wrapper.data().focusStatus).to.be.false;
    expect(wrapper.data().isFocus).to.be.false;
  });

  it('focus on input', () => {
    wrapper = mount(Search);

    const input = wrapper.find('.van-search__input')[0];
    input.simulate('focus');

    expect(wrapper.data().isFocus).to.be.true;
  });

  it('emit change event', (done) => {
    wrapper = mount(Search);

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    wrapper.setData({ value: 'test' });
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.data().value).to.be.equal('test');
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('change'));
      done();
    });
  });

  it('handle clean click', () => {
    wrapper = mount(Search);

    wrapper.setData({ value: 'test' });
    expect(wrapper.data().value).to.be.equal('test');

    const input = wrapper.find('.van-search__input')[0];
    input.simulate('focus');

    const cleanBtn = wrapper.find('.van-icon-clear')[0];
    cleanBtn.simulate('click');
    expect(wrapper.data().value).to.equal('');
    expect(wrapper.data().focusStatus).to.be.true;
  });

  it('handle cancel click', (done) => {
    wrapper = mount(Search);

    wrapper.setData({ value: 'test' });
    expect(wrapper.data().value).to.be.equal('test');

    const eventStub = sinon.stub(wrapper.vm, '$emit');

    const input = wrapper.find('.van-search__input')[0];
    input.simulate('focus');

    const cancelBtn = wrapper.find('.van-search__cancel')[0];
    cancelBtn.simulate('click');

    wrapper.vm.$nextTick(() => {
      expect(wrapper.data().value).to.be.equal('');
      expect(wrapper.data().focusStatus).to.be.false;
      expect(wrapper.data().isFocus).to.be.false;
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('change'));
      done();
    });
  });

  it('emit a search event', (done) => {
    wrapper = mount(Search);

    const eventStub = sinon.stub(wrapper.vm, '$emit');

    const input = wrapper.find('.van-search__input')[0];
    input.simulate('keyup.enter');

    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('search'));
      done();
    });
  });

  it('create a showcase type search', () => {
    wrapper = mount(Search, {
      propsData: {
        type: 'showcase'
      }
    });

    expect(wrapper.hasClass('van-search')).to.be.true;
    expect(wrapper.hasClass('van-search--showcase')).to.be.true;

    const input = wrapper.find('.van-search__input')[0];
    input.simulate('focus');

    expect(wrapper.data().isFocus).to.be.true;

    const body = document.body;
    body.click();
    expect(wrapper.data().isFocus).to.be.false;
    expect(wrapper.data().focusStatus).to.be.false;
  });
});
