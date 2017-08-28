import ExpressWay from 'packages/express-way';
import { mount } from 'avoriaz';
import { DOMChecker } from '../utils';

const mockData = [{
  'postage': 10050,
  'postage_desc': '由商家门店提供配送服务, 起送价 0.01 元',
  'postage_title': '同城配送',
  'express_type': 1
}, {
  'postage': 0,
  'postage_desc': '由商家选择合作快递为您服务',
  'postage_title': '快递发货',
  'express_type': 2,
  'postage_warn_desc': '3天后发货'
}];

describe('ExpressWay', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('default', () => {
    wrapper = mount(ExpressWay, {
      attachToDocument: true,
      propsData: {
        value: 1,
        expressList: mockData
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-cell__text': '配送方式',
        '.van-express-way__fee': '¥100.50',
        '.van-express-way__type': mockData[0].postage_title,
        '.van-actionsheet__header h3': '配送方式',
        '.van-express-way-option__title span': mockData[0].postage_title,
        '.van-express-way-option__content p': mockData[0].postage_desc
      },
      count: {
        '.van-icon-arrow': 1
      },
      style: {
        '.van-actionsheet': {
          display: 'none'
        }
      }
    });
  });

  it('show actionsheet', (done) => {
    wrapper = mount(ExpressWay, {
      attachToDocument: true,
      propsData: {
        value: 1,
        expressList: mockData
      }
    });

    // 点击后弹出 actionsheet
    const cells = wrapper.find('.van-cell');
    cells[cells.length - 1].trigger('click');
    setTimeout(() => {
      expect(wrapper.find('.van-actionsheet')[0].hasStyle('display', 'none')).to.equal(false);
      done();
    }, 500);
  });

  it('change express way', (done) => {
    wrapper = mount(ExpressWay, {
      attachToDocument: true,
      propsData: {
        value: 1,
        expressList: mockData
      }
    });

    wrapper.vm.$on('input', val => {
      wrapper.vm.value = val;
    });

    // 点击后弹出 actionsheet
    const cells = wrapper.find('.van-cell');
    cells[cells.length - 1].trigger('click');

    // 监听 change 事件
    const submitSpyFunc = sinon.spy();
    wrapper.vm.$on('change', submitSpyFunc);

    setTimeout(() => {
      expect(wrapper.find('.van-actionsheet')[0].hasStyle('display', 'none')).to.equal(false);

      const secondOption = wrapper.find('.van-express-way-option')[1];
      secondOption.trigger('click');

      setTimeout(() => {
        expect(wrapper.find('.van-actionsheet')[0].hasStyle('display', 'none')).to.equal(true);

        DOMChecker(wrapper, {
          text: {
            '.van-express-way__fee': '免运费',
            '.van-express-way__type': mockData[1].postage_title
          }
        });

        // 修改后触发 change 事件
        expect(submitSpyFunc.calledOnce).to.be.true;
        done();
      }, 500);
    }, 500);
  });

  it('cellTitle prop', () => {
    wrapper = mount(ExpressWay, {
      attachToDocument: true,
      propsData: {
        value: 1,
        cellTitle: '测试标题',
        expressList: mockData
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-cell__text': '测试标题'
      }
    });
  });

  it('actionsheetTitle prop', () => {
    wrapper = mount(ExpressWay, {
      attachToDocument: true,
      propsData: {
        value: 1,
        actionsheetTitle: '测试标题',
        expressList: mockData
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-actionsheet__header h3': '测试标题'
      }
    });
  });

  it('set editable false ', () => {
    wrapper = mount(ExpressWay, {
      attachToDocument: true,
      propsData: {
        value: 1,
        editable: false,
        expressList: mockData
      }
    });

    DOMChecker(wrapper, {
      count: {
        '.van-icon-arrow': 0,
        '.van-actionsheet': 0
      }
    });
  });

  it('not editable when only one option', () => {
    wrapper = mount(ExpressWay, {
      attachToDocument: true,
      propsData: {
        value: 1,
        editable: true,
        expressList: mockData.slice(0, 1)
      }
    });

    DOMChecker(wrapper, {
      count: {
        '.van-icon-arrow': 0,
        '.van-actionsheet': 0
      }
    });
  });

  it('unexist express type', () => {
    wrapper = mount(ExpressWay, {
      attachToDocument: true,
      propsData: {
        value: -1,
        expressList: mockData
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-express-way__fee': '',
        '.van-express-way__type': ''
      }
    });
  });
});
