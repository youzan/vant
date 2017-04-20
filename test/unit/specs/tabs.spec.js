import Tabs from 'packages/tabs';
import { mount } from 'avoriaz';
import TabsTestComponent from '../components/tabs';

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

    expect(wrapper.hasClass('van-tabs')).to.be.true;
    expect(wrapper.hasClass('van-tabs--card')).to.be.true;
  });

  it('create a tabs with four tab', (done) => {
    wrapper = mount(TabsTestComponent);

    expect(wrapper.hasClass('van-tabs')).to.be.true;
    expect(wrapper.hasClass('van-tabs--line')).to.be.true;

    const tabsContainer = wrapper.find('.van-tabs')[0];
    expect(tabsContainer.vNode.child.curActive).to.equal(0);

    wrapper.vm.active = 1;
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(tabsContainer.vNode.child.curActive).to.equal(1);
      done();
    });
  });
});
