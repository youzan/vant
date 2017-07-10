import Tabs from 'packages/tabs';
import { mount } from 'avoriaz';
import TabsTestComponent from '../components/tabs';
import FiveTabsTestComponent from '../components/five-tabs';

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

  it('listen click event', (done) => {
    wrapper = mount(TabsTestComponent, {
      attachToDocument: true
    });

    const clickSpy = sinon.spy();
    wrapper.vm.$on('click', clickSpy);

    wrapper.vm.$nextTick(() => {
      const nTab = wrapper.find('.van-tab')[0];
      nTab.trigger('click');
      expect(clickSpy.calledOnce).to.be.true;
      done();
    });
  });

  it('listen click disable event', (done) => {
    wrapper = mount(TabsTestComponent, {
      attachToDocument: true
    });

    const clickDisabledSpy = sinon.spy();
    wrapper.vm.$on('disabled', clickDisabledSpy);

    wrapper.vm.$nextTick(() => {
      const nTab = wrapper.find('.van-tab')[2];
      nTab.trigger('click');
      expect(clickDisabledSpy.calledOnce).to.be.true;
      done();
    });
  });

  it('check animation duration', () => {
    wrapper = mount(TabsTestComponent);

    expect(wrapper.style.transitionDuration != '').to.be.true;
  });

  it('create a tabs greater then 4', () => {
    wrapper = mount(FiveTabsTestComponent, {
      attachToDocument: true
    });
  });
});
