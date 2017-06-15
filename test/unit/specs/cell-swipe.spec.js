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
    wrapper.vm.offsetLeft = -20;
    wrapper.vm.rightWidth = 10;
    wrapper.vm.swipeLeaveTransition(1);
    wrapper.vm.endDrag();
    expect(wrapper.hasClass('van-cell-swipe')).to.be.true;
  });
});


describe('CellSwipe-left', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a CellSwipe left', () => {
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
    wrapper.vm.offsetLeft = 20;
    wrapper.vm.rightWidth = 10;
    wrapper.vm.swipeLeaveTransition(-1);
    wrapper.vm.endDrag();
    expect(wrapper.hasClass('van-cell-swipe')).to.be.true;
  });
});

describe('CellSwipe-0', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a CellSwipe 0', () => {
    wrapper = mount(CellSwipe, {
      propsData: {
        leftWidth: 0,
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
      pageX: -2
    });
    wrapper.vm.opened = true;
    wrapper.vm.onDrag({
      preventDefault() {},
      pageY: 0,
      pageX: -2
    });
    wrapper.vm.opened = false;
    wrapper.vm.onDrag({
      preventDefault() {},
      pageY: 0,
      pageX: 40
    });
    wrapper.vm.swipeLeaveTransition(0);
    wrapper.vm.endDrag();
    expect(wrapper.hasClass('van-cell-swipe')).to.be.true;
  });
});


describe('CellSwipe-0', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a CellSwipe 0', () => {
    wrapper = mount(CellSwipe, {
      propsData: {
        leftWidth: 0,
        rightWidth: 2
      }
    });
    wrapper.vm.startDrag({
      pageX: 0,
      pageY: 0
    });
    wrapper.vm.onDrag({
      preventDefault() {},
      pageY: 1000,
      pageX: 40
    });
    wrapper.vm.swipeMove();
    wrapper.vm.swiping = false;
    wrapper.vm.endDrag();
    wrapper.vm.swiping = true;
    wrapper.vm.endDrag();
    expect(wrapper.hasClass('van-cell-swipe')).to.be.true;
  });
});
