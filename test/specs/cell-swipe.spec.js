import CellSwipe from 'packages/cell-swipe';
import { mount } from 'avoriaz';
import { triggerTouch } from '../utils';

const defaultProps = {
  propsData: {
    leftWidth: 100,
    rightWidth: 100
  }
};

describe('CellSwipe', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('render left or right part when has width', () => {
    wrapper = mount(CellSwipe, defaultProps);
    expect(wrapper.find('.van-cell-swipe__left').length).to.equal(1);
    expect(wrapper.find('.van-cell-swipe__right').length).to.equal(1);
  });

  it('not render left or right part when width is 0', () => {
    wrapper = mount(CellSwipe);
    expect(wrapper.find('.van-cell-swipe__left').length).to.equal(0);
    expect(wrapper.find('.van-cell-swipe__right').length).to.equal(0);
  });

  it('drag and show left part', done => {
    wrapper = mount(CellSwipe, defaultProps);

    triggerTouch(wrapper, 'touchstart', 0, 0);
    expect(wrapper.vm.startX).to.equal(0);
    expect(wrapper.vm.startY).to.equal(0);

    triggerTouch(wrapper, 'touchmove', 50, 0);
    expect(wrapper.vm.offset).to.equal(50);

    triggerTouch(wrapper, 'touchend', 50, 0);
    expect(wrapper.vm.offset).to.equal(100);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.opened).to.be.true;
      done();
    });
  });

  it('drag and show right part', done => {
    wrapper = mount(CellSwipe, defaultProps);

    triggerTouch(wrapper, 'touchstart', 0, 0);
    triggerTouch(wrapper, 'touchmove', -50, 0);
    triggerTouch(wrapper, 'touchend', -50, 0);
    expect(wrapper.vm.offset).to.equal(-100);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.opened).to.be.true;
      wrapper.trigger('click');
      expect(wrapper.vm.offset).to.equal(0);
      done();
    });
  });

  it('drag and reset left part', () => {
    wrapper = mount(CellSwipe, defaultProps);

    triggerTouch(wrapper, 'touchstart', 0, 0);
    triggerTouch(wrapper, 'touchmove', 10, 0);
    triggerTouch(wrapper, 'touchmove', 30, 0);
    triggerTouch(wrapper, 'touchend', 30, 0);
    expect(wrapper.vm.offset).to.equal(0);
  });

  it('drag and reset right part', () => {
    wrapper = mount(CellSwipe, defaultProps);

    triggerTouch(wrapper, 'touchstart', 0, 0);
    triggerTouch(wrapper, 'touchmove', -10, 0);
    triggerTouch(wrapper, 'touchmove', -30, 0);
    triggerTouch(wrapper, 'touchend', -30, 0);
    expect(wrapper.vm.offset).to.equal(0);
  });

  it('drag distance out of ranges', () => {
    wrapper = mount(CellSwipe, defaultProps);

    triggerTouch(wrapper, 'touchstart', 0, 0);
    triggerTouch(wrapper, 'touchmove', 1000, 0);
    expect(wrapper.vm.offset).to.equal(0);
  });

  it('drag and hide left part', (done) => {
    wrapper = mount(CellSwipe, defaultProps);

    triggerTouch(wrapper, 'touchstart', 0, 0);
    triggerTouch(wrapper, 'touchmove', 20, 0);
    triggerTouch(wrapper, 'touchmove', 50, 0);
    triggerTouch(wrapper, 'touchend', 50, 0);
    expect(wrapper.vm.offset).to.equal(100);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.opened).to.be.true;

      triggerTouch(wrapper, 'touchstart', 0, 0);
      triggerTouch(wrapper, 'touchmove', 1, 0);

      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.offset).to.equal(0);
        expect(wrapper.vm.opened).to.be.false;
        done();
      });
    });
  });

  it('drag vertical', () => {
    wrapper = mount(CellSwipe, defaultProps);

    triggerTouch(wrapper, 'touchstart', 0, 0);
    triggerTouch(wrapper, 'touchmove', 0, 100);
    triggerTouch(wrapper, 'touchend', 0, 100);
    expect(wrapper.vm.offset).to.equal(0);
  });

  it('on close prop', () => {
    let clickPosition;
    let instance;
    const onClose = (position, ins) => {
      clickPosition = position;
      instance = ins;
    };

    wrapper = mount(CellSwipe, {
      propsData: {
        ...defaultProps.propsData,
        onClose
      }
    });

    wrapper.trigger('click');
    wrapper.vm.onClick();
    expect(clickPosition).to.equal(undefined);

    wrapper.vm.offset = 100;
    wrapper.trigger('click');
    expect(clickPosition).to.equal('cell');

    wrapper.find('.van-cell-swipe__left')[0].trigger('click');
    expect(clickPosition).to.equal('left');

    wrapper.find('.van-cell-swipe__right')[0].trigger('click');
    expect(clickPosition).to.equal('right');

    instance.close();
    expect(wrapper.vm.offset).to.equal(0);
  });
});
