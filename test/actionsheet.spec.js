import { mount } from '@vue/test-utils'
import Actionsheet from 'packages/actionsheet';

describe('Actionsheet', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a Actionsheet', () => {
    wrapper = mount(Actionsheet, {
      propsData: {}
    });

    expect(wrapper.classes()).toContain('van-actionsheet');
    expect(wrapper.html()).toMatchSnapshot();
  });

  // it('create displayed Actionsheet', () => {
  //   wrapper = mount(Actionsheet, {
  //     propsData: {
  //       value: true
  //     }
  //   });

  //   DOMChecker(wrapper, {
  //     noStyle: {
  //       '.van-Actionsheet': {
  //         display: 'none'
  //       }
  //     }
  //   });
  // });

  // it('create title type Actionsheet', () => {
  //   wrapper = mount(Actionsheet, {
  //     propsData: {
  //       title: 'test'
  //     }
  //   });

  //   expect(wrapper.hasClass('van-Actionsheet--withtitle')).to.be.true;
  //   expect(wrapper.contains('.van-Actionsheet__header')).to.be.true;
  //   expect(wrapper.contains('.van-Actionsheet__content')).to.be.true;
  // });

  // it('create actions Actionsheet', () => {
  //   wrapper = mount(Actionsheet, {
  //     propsData: {
  //       actions: [
  //         {
  //           name: '有赞E卡',
  //           subname: '（剩余260.50元）'
  //         },
  //         {
  //           name: '信用卡支付',
  //           loading: true
  //         }
  //       ]
  //     }
  //   });

  //   const actionItems = wrapper.find('.van-Actionsheet__item');

  //   expect(actionItems.length).to.equal(2);
  //   expect(actionItems[0].contains('.van-Actionsheet__name')).to.be.true;
  //   expect(actionItems[0].contains('.van-Actionsheet__subname')).to.be.true;
  //   expect(actionItems[1].contains('.van-Actionsheet__loading')).to.be.true;
  // });

  // it('handle Actionsheet item click with callback', () => {
  //   let called = false;
  //   wrapper = mount(Actionsheet, {
  //     propsData: {
  //       actions: [
  //         {
  //           name: '有赞E卡',
  //           callback: () => {
  //             called = true;
  //           }
  //         },
  //         {
  //           name: '微信'
  //         }
  //       ]
  //     }
  //   });

  //   const actionItem = wrapper.find('.van-Actionsheet__item')[0];
  //   actionItem.trigger('click');
  //   expect(called).to.be.true;

  //   const secondActionItem = wrapper.find('.van-Actionsheet__item')[1];
  //   secondActionItem.trigger('click');
  // });

  // it('create Actionsheet with cancel button', () => {
  //   wrapper = mount(Actionsheet, {
  //     propsData: {
  //       cancelText: 'cancel'
  //     }
  //   });

  //   const cancelButton = wrapper.find('.van-Actionsheet__cancel')[0];
  //   expect(wrapper.contains('.van-Actionsheet__cancel')).to.be.true;
  //   expect(cancelButton.text()).to.equal('cancel');
    
  //   const eventStub = sinon.stub(wrapper.vm, '$emit');
  //   cancelButton.trigger('click');

  //   expect(eventStub.calledWith('cancel'));
  // });

  // it('toggle Actionsheet value from v-model', (done) => {
  //   wrapper = mount(Actionsheet, {
  //     propsData: {
  //       value: false
  //     }
  //   });

  //   const eventStub = sinon.stub(wrapper.vm, '$emit');
  //   DOMChecker(wrapper, {
  //     style: {
  //       '.van-Actionsheet': {
  //         display: 'none'
  //       }
  //     }
  //   });

  //   wrapper.vm.value = true;
  //   wrapper.update();
  //   wrapper.vm.$nextTick(() => {
  //     DOMChecker(wrapper, {
  //       noStyle: {
  //         '.van-Actionsheet': {
  //           display: 'none'
  //         }
  //       }
  //     });
  //     expect(eventStub.calledWith('input'));
  //     done();
  //   });
  // });
});
