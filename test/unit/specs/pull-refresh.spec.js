import PullRefresh from 'packages/pull-refresh';
import { mount } from 'avoriaz';
import { triggerTouch } from '../utils';

describe('PullRefresh', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a PullRefresh', () => {
    wrapper = mount(PullRefresh, {
      propsData: {
        value: false
      }
    });

    expect(wrapper.hasClass('van-pull-refresh')).to.be.true;
  });

  it('change head content when pulling down', (done) => {
    wrapper = mount(PullRefresh, {
      propsData: {
        value: false
      }
    });

    triggerTouch(wrapper, 'touchstart', 0, 0);
    triggerTouch(wrapper, 'touchmove', 0, 10);

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.van-pull-refresh__text')[0].text()).to.equal('下拉即可刷新...');

      triggerTouch(wrapper, 'touchmove', 0, 30);
      triggerTouch(wrapper, 'touchmove', 0, 60);
      triggerTouch(wrapper, 'touchmove', 0, 100);

      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.van-pull-refresh__text')[0].text()).to.equal('释放即可刷新...');

        triggerTouch(wrapper, 'touchend', 0, 100);

        wrapper.vm.$nextTick(() => {
          expect(wrapper.find('.van-pull-refresh__loading span')[1].text()).to.equal('加载中...');
          done();
        });
      });
    });
  });

  it('change loading status when pulling down', (done) => {
    wrapper = mount(PullRefresh, {
      propsData: {
        value: false
      }
    });

    wrapper.vm.$on('input', value => {
      wrapper.vm.value = value;

      setTimeout(() => {
        wrapper.vm.value = false;
        setTimeout(() => {
          expect(wrapper.vm.status).to.equal('normal');
          done();
        }, 0);
      }, 30);
    });

    triggerTouch(wrapper, 'touchstart', 0, 0);
    triggerTouch(wrapper, 'touchmove', 0, 100);
    triggerTouch(wrapper, 'touchend', 0, 100);

    expect(wrapper.vm.value).to.be.true;
    expect(wrapper.vm.status).to.equal('loading');

    // ignore touch event when loading
    triggerTouch(wrapper, 'touchstart', 0, 0);
    triggerTouch(wrapper, 'touchmove', 0, 100);
    triggerTouch(wrapper, 'touchend', 0, 100);
  });

  it('pull a short distance', () => {
    wrapper = mount(PullRefresh, {
      propsData: {
        value: false
      }
    });

    triggerTouch(wrapper, 'touchstart', 0, 0);
    triggerTouch(wrapper, 'touchmove', 0, 10);
    triggerTouch(wrapper, 'touchend', 0, 10);

    expect(wrapper.vm.value).to.be.false;
    expect(wrapper.vm.status).to.equal('normal');
  });

  it('not in page top', () => {
    wrapper = mount(PullRefresh, {
      propsData: {
        value: false
      }
    });

    window.scrollY = 100;

    // ignore touch event when not at page top
    triggerTouch(wrapper, 'touchstart', 0, 0);
    triggerTouch(wrapper, 'touchmove', 0, 100);
    triggerTouch(wrapper, 'touchend', 0, 100);
    expect(wrapper.vm.ceiling).to.be.false;

    window.scrollY = 0;
    triggerTouch(wrapper, 'touchmove', 0, 100);
    expect(wrapper.vm.ceiling).to.be.true;
  });

  it('horizontal direction', () => {
    wrapper = mount(PullRefresh, {
      propsData: {
        value: false
      }
    });
    triggerTouch(wrapper, 'touchstart', 0, 0);
    triggerTouch(wrapper, 'touchmove', 10, 0);
    triggerTouch(wrapper, 'touchend', 10, 0);
    expect(wrapper.vm.direction).to.equal('horizontal');
  });
});
