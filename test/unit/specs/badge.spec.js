import { mount } from 'avoriaz';
import BadgeTestComponent from '../components/badge';

describe('BadgeGroup', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a badge-group', () => {
    wrapper = mount(BadgeTestComponent);

    expect(wrapper.hasClass('van-badge-group')).to.be.true;

    expect(wrapper.vNode.child.activeKey).to.equal(0);
    expect(wrapper.vNode.child.badges.length).to.equal(2);
  });

  it('emit a click event when click badge', () => {
    wrapper = mount(BadgeTestComponent);

    const badge = wrapper.find('.van-badge')[0];
    const eventStub = sinon.stub(badge.vNode.child, '$emit');
    badge.trigger('click');

    expect(eventStub.calledWith('click')).to.be.true;
  });
});

