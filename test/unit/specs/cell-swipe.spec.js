import CellSwipe from 'packages/cell-swipe';
import { mount } from 'avoriaz';

describe('CellSwipe', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a CellSwipe', () => {
    wrapper = mount(CellSwipe, {
      propsData: {
        leftWidth: 2,
        rightWidth: 2
      }
    });
    wrapper.vm.startDrag({
      pageX: 0,
      pageY: 0
    });
    wrapper.vm.onDrag({
      preventDefault() {},
      pageY: 0,
      pageX: 50
    });
    wrapper.vm.swipeLeaveTransition(1);
    wrapper.vm.swipeLeaveTransition(-1);
    wrapper.vm.endDrag();
    expect(wrapper.hasClass('van-cell-wrapper')).to.be.true;
  });
});


describe('CellSwipe-left', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a CellSwipe', () => {
    wrapper = mount(CellSwipe, {
      propsData: {
        leftWidth: 2,
        rightWidth: 2
      }
    });
    wrapper.vm.startDrag({
      changedTouches: [{
        pageX: 0,
        pageY: 0
      }
      ]
    });
    wrapper.vm.onDrag({
      preventDefault() {},
      changedTouches: [{
        pageX: 0,
        pageY: -50
      }
      ]
    });
    wrapper.vm.swipeLeaveTransition(1);
    wrapper.vm.swipeLeaveTransition(-1);
    wrapper.vm.endDrag();
    expect(wrapper.hasClass('van-cell-wrapper')).to.be.true;
  });
});
