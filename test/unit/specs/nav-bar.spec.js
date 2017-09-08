import NavBar from 'packages/nav-bar';
import { mount } from 'avoriaz';
import { DOMChecker } from '../utils';

describe('NavBar', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a NavBar', () => {
    wrapper = mount(NavBar, {
      propsData: {
        title: '标题',
        leftText: '返回',
        rightText: '按钮',
        leftArrow: true
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-nav-bar__title': '标题',
        '.van-nav-bar__left .van-nav-bar__text': '返回',
        '.van-nav-bar__right .van-nav-bar__text': '按钮'
      },
      count: {
        '.van-nav-bar__arrow': 1
      }
    });
    expect(wrapper.hasClass('van-nav-bar')).to.be.true;
  });

  it('NavBar fixed', () => {
    wrapper = mount(NavBar, {
      propsData: {
        fixed: true
      }
    });

    expect(wrapper.hasClass('van-nav-bar')).to.be.true;
  });
});
