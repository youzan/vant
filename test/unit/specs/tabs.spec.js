import Tabs from 'packages/tabs';
import { mount } from 'avoriaz';
import TabsTestComponent from '../components/tabs';
import MoreTabsTestComponent from '../components/more-tabs';

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

  it('create a tabs greater then 4', (done) => {
    wrapper = mount(MoreTabsTestComponent, {
      attachToDocument: true
    });
 
    wrapper.vm.$nextTick(() => {
      const nTab = wrapper.find('.van-tab')[4];
      nTab.trigger('click');
      done();
    });
  });

  it('create a tabs greater then 4 then click last tab', (done) => {
    wrapper = mount(MoreTabsTestComponent, {
      attachToDocument: true,
      propsData: {
        active: 7
      }
    });
 
    wrapper.vm.$nextTick(() => {
      const nTab = wrapper.find('.van-tab')[6];
      nTab.trigger('click');
      done();
    });
  });

  it('test swipe', (done) => {
    wrapper = mount(MoreTabsTestComponent, {
      attachToDocument: true
    });

    setTimeout(() => {
      const nSwipe = wrapper.find('.van-tabs__swipe')[0];

      const eventMouseObject = new window.Event('mousedown');
      eventMouseObject.pageX = 200;
      nSwipe.element.dispatchEvent(eventMouseObject);

      const eventTouchObject = new window.Event('touchstart');
      eventTouchObject.changedTouches = [{ pageX: 200 }];
      nSwipe.element.dispatchEvent(eventTouchObject);
    }, 500);

    setTimeout(() => {
      const nSwipe = wrapper.find('.van-tabs__swipe')[0];

      const eventMouseMoveObject = new window.Event('mousemove');
      eventMouseMoveObject.pageX = 0;
      document.dispatchEvent(eventMouseMoveObject);

      const eventObject = new window.Event('touchmove');
      eventObject.changedTouches = [{ pageX: 0 }];
      nSwipe.element.dispatchEvent(eventObject);

      // 结束滑动
      const eventMouseUpObject = new window.Event('mouseup');
      document.dispatchEvent(eventMouseUpObject);
      const eventEndObject = new window.Event('touchend');
      eventEndObject.changedTouches = [{}];
      nSwipe.element.dispatchEvent(eventEndObject);
    }, 1000);

    setTimeout(() => {
      const nItem = wrapper.find('.van-tab')[0];
      expect(nItem.hasClass('van-tab--active')).to.be.true;

      done();
    }, 1200);
  });

  it('watch tab props changes', (done) => {
    wrapper = mount(TabsTestComponent);
    wrapper.vm.firstTabTitle = '测试标题';
    wrapper.vm.firstTabDisabled = true;

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.van-tab')[0].text().replace(/\n|\s/g, '')).to.equal('测试标题');
      done();
    });
  });
});
