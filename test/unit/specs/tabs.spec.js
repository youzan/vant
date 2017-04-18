import Tabs from 'packages/tabs';
import { mount } from 'avoriaz';
// import TabsTestComponent from '../components/tabs';

describe('Tabs', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a empty card tabs', () => {
    wrapper = mount(Tabs, {
      propsData: {
        type: 'card'
      }
    });

    expect(wrapper.hasClass('zan-tabs')).to.be.true;
    expect(wrapper.hasClass('zan-tabs--card')).to.be.true;
  });

  it('create a tabs with four tab', () => {
    // wrapper = mount(TabsTestComponent);

    // expect(wrapper.hasClass('zan-tabs')).to.be.true;
    // expect(wrapper.hasClass('zan-tabs--line')).to.be.true;

    // const eventStub = sinon.stub(wrapper.vNode.child, '$emit');

    // const tabTitle = wrapper.find('.zan-tab__pane')[2];
    // tabTitle.simulate('click');

    // wrapper.vm.$nextTick(() => {
    //   // expect(.curActive).to.equal(2);
    //   console.log(wrapper.vNode.child);
    //   expect(eventStub.calledWith('click'));
    //   done();
    // });
  });
});
