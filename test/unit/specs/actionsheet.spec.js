import Vue from 'vue';
import ActionSheet from 'packages/actionsheet';
import { mount } from 'avoriaz';

describe('ActionSheet', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create', () => {
    wrapper = mount(ActionSheet, {
      propsData: {}
    });

    expect(wrapper.hasClass('zan-actionsheet')).to.be.true;
    expect(wrapper.contains('.zan-actionsheet__list')).to.be.true;
    expect(wrapper.instance().actions.length).to.equal(0);
    expect(wrapper.instance().overlay).to.be.true;
    expect(wrapper.instance().closeOnClickOverlay).to.be.true;
  });

  it('create displayed actionsheet', () => {
    wrapper = mount(ActionSheet, {
      propsData: {
        value: true
      }
    });

    expect(wrapper.instance().currentValue).to.be.true;
  });

  it('create title type actionsheet', () => {
    wrapper = mount(ActionSheet, {
      propsData: {
        title: 'test'
      }
    });

    expect(wrapper.hasClass('zan-actionsheet--withtitle')).to.be.true;
    expect(wrapper.contains('.zan-actionsheet__header')).to.be.true;
    expect(wrapper.contains('.zan-actionsheet__content')).to.be.true;
  });

  it('create actions actionsheet', () => {
    wrapper = mount(ActionSheet, {
      propsData: {
        actions: [
          {
            name: '有赞E卡',
            subname: '（剩余260.50元）'
          },
          {
            name: '信用卡支付',
            loading: true
          }
        ]
      }
    });

    const actionItems = wrapper.find('.zan-actionsheet__item');

    expect(actionItems.length).to.equal(2);
    expect(actionItems[0].contains('.zan-actionsheet__name')).to.be.true;
    expect(actionItems[0].contains('.zan-actionsheet__subname')).to.be.true;
    expect(actionItems[1].contains('.zan-actionsheet__loading')).to.be.true;
  });

  it('handle actionsheet item click with callback', () => {
    let called = false;
    wrapper = mount(ActionSheet, {
      propsData: {
        actions: [
          {
            name: '有赞E卡',
            callback: () => {
              called = true;
            }
          }
        ]
      }
    });

    const actionItem = wrapper.find('.zan-actionsheet__item')[0];
    actionItem.simulate('click');
    expect(called).to.be.true;
  });

  it('create actionsheet with cancel button', () => {
    wrapper = mount(ActionSheet, {
      propsData: {
        cancelText: 'cancel'
      }
    });

    const cancelButton = wrapper.find('.zan-actionsheet__button')[0];
    expect(wrapper.contains('.zan-actionsheet__button')).to.be.true;
    expect(cancelButton.text()).to.equal('cancel');
  });

  it('toggle actionsheet value', () => {
    wrapper = mount(ActionSheet, {
      propsData: {
        value: false
      }
    });

    expect(wrapper.data().currentValue).to.be.false;
    const eventStub = sinon.stub(wrapper.vm, '$emit');

    wrapper.vm.value = true;
    wrapper.update();
    Vue.nextTick(() => {
      expect(wrapper.data().currentValue).to.be.true;
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('input'));
      done();
    });
  });
});
