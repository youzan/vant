import Search from 'packages/search';
import { mount } from 'avoriaz';

describe('Search', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a quantity', () => {
    wrapper = mount(Search);

    expect(wrapper.hasClass('zan-search')).to.be.true;
    expect(wrapper.data().focusStatus).to.be.false;
    expect(wrapper.data().isFocus).to.be.false;
  });

  it('focus on input', () => {
    wrapper = mount(Search);

    const input = wrapper.find('.zan-search__input')[0];
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
});
