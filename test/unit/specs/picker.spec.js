import Picker from 'packages/picker';
import PickerColumn from 'packages/picker/src/picker-column';
import { mount } from 'avoriaz';
import Wrapper from 'avoriaz/dist/Wrapper';

const itemHeight = 44;

const pickerColumns = [
  {
    values: ['vip', 'normal'],
    className: 'column1'
  },
  {
    values: ['1990', '1991', '1992', '1993', '1994', '1995'],
    className: 'column2'
  }
];

describe('Picker', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create picker', () => {
    wrapper = mount(Picker, {
      propsData: {
        columns: pickerColumns
      }
    });

    expect(wrapper.hasClass('van-picker')).to.be.true;
    expect(wrapper.contains('.van-picker__columns--2')).to.be.true;

    expect(wrapper.vm.getColumnValues(0).length).to.equal(2);
    expect(wrapper.vm.getValues().length).to.equal(2);
  });

  it('set picker values', () => {
    wrapper = mount(Picker, {
      propsData: {
        columns: pickerColumns
      }
    });

    expect(wrapper.contains('.van-picker__columns--2')).to.be.true;
    expect(wrapper.vm.getColumnValues(0).length).to.equal(2);
    expect(wrapper.vm.getColumnValues(1).length).to.equal(6);

    expect(wrapper.vm.getColumnValue(0)).to.equal('vip');
    expect(wrapper.vm.getColumnValue(1)).to.equal('1990');

    wrapper.vm.setColumnValue(0, 'normal');
    expect(wrapper.vm.getColumnValue(0)).to.equal('normal');

    wrapper.vm.setColumnValue(1, '1991');
    expect(wrapper.vm.getColumnValue(1)).to.equal('1991');

    wrapper.vm.setColumnValues(0, ['vip', 'normal', 'other']);
    expect(wrapper.vm.getColumnValues(0).length).to.equal(3);

    expect(wrapper.vm.getValues().length).to.equal(2);
    wrapper.vm.setValues(['vip', '1992']);
    expect(wrapper.vm.getColumnValue(0)).to.equal('vip');
    expect(wrapper.vm.getColumnValue(1)).to.equal('1992');
  });

  it('create a invalid columns picker', () => {
    wrapper = mount(Picker, {
      propsData: {
        columns: undefined
      }
    });

    expect(wrapper.hasClass('van-picker')).to.be.true;
    expect(wrapper.vm.values.length).to.equal(0);
  });

  it('set invalid index columns', () => {
    wrapper = mount(Picker, {
      propsData: {
        columns: pickerColumns
      }
    });

    expect(wrapper.vm.getColumnValues(3)).to.equal(undefined);
    wrapper.vm.setColumnValues(3, [1, 2]);
    expect(wrapper.vm.getColumnValues(3)).to.equal(undefined);

    expect(wrapper.vm.getColumnValue(3)).to.equal(undefined);
    wrapper.vm.setColumnValue(3, 3);
    expect(wrapper.vm.getColumnValue(3)).to.equal(undefined);
  });

  it('emit a change event when column change', (done) => {
    wrapper = mount(Picker, {
      propsData: {
        columns: pickerColumns
      }
    });

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    const firstColumn = wrapper.find(PickerColumn)[0];
    firstColumn.vm.currentValue = 'normal';

    firstColumn.update();
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('change'));
      done();
    });
  });

  it('create a empty picker and emit a cencel event', (done) => {
    wrapper = mount(Picker, {
      propsData: {
        showToolbar: true
      }
    });

    expect(wrapper.hasClass('van-picker')).to.be.true;
    expect(wrapper.contains('.van-picker__toolbar')).to.be.true;
    expect(wrapper.vm.values.length).to.equal(0);

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    const cancelBtn = wrapper.find('.van-picker__cancel')[0];
    cancelBtn.simulate('click');

    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('cancel'));
      done();
    });
  });

  it('create a empty picker and emit a confirm event', (done) => {
    wrapper = mount(Picker, {
      propsData: {
        showToolbar: true
      }
    });

    expect(wrapper.hasClass('van-picker')).to.be.true;
    expect(wrapper.contains('.van-picker__toolbar')).to.be.true;

    const eventStub = sinon.stub(wrapper.vm, '$emit');
    const cancelBtn = wrapper.find('.van-picker__confirm')[0];
    cancelBtn.simulate('click');

    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true;
      expect(eventStub.calledWith('confirm'));
      done();
    });
  });
});

describe('PickerColumn', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a picker-column', () => {
    wrapper = mount(PickerColumn);

    expect(wrapper.hasClass('van-picker-column')).to.be.true;
    expect(wrapper.vm.values.length).to.equal(0);
    expect(wrapper.vm.visibleContentHeight).to.equal(itemHeight * 5);
    expect(wrapper.vm.dragRange[0]).to.equal(3 * itemHeight);
    expect(wrapper.vm.dragRange[1]).to.equal(2 * itemHeight);
  });

  it('change picker-column value', (done) => {
    wrapper = mount(PickerColumn, {
      propsData: {
        values: [1, 2, 3, 4, 5],
        value: 1
      }
    });

    expect(wrapper.hasClass('van-picker-column')).to.be.true;
    expect(wrapper.vm.values.length).to.equal(5);

    wrapper.vm.value = 3;
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.currentValue).to.equal(3);
      done();
    });
  });

  it('change picker-column values', (done) => {
    wrapper = mount(PickerColumn);

    expect(wrapper.hasClass('van-picker-column')).to.be.true;
    expect(wrapper.vm.values.length).to.equal(0);

    wrapper.vm.values = [1, 2];
    wrapper.update();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.values.length).to.equal(2);
      expect(wrapper.vm.currentValues.length).to.equal(2);
      done();
    });
  });

  it('create a picker test translate', () => {
    wrapper = mount(PickerColumn, {
      propsData: {
        values: [1, 2, 3, 4, 5],
        value: 1
      }
    });

    expect(wrapper.vm.values.length).to.equal(5);
    expect(wrapper.vm.value2Translate(2)).to.equal((1 - Math.floor(5 / 2)) * (-itemHeight));
    expect(wrapper.vm.translate2Value(0)).to.equal(3);
  });

  it('test draggable', done => {
    wrapper = mount(PickerColumn, {
      propsData: {
        values: [1, 2, 3, 4, 5]
      },
      attachToDocument: true
    });

    expect(wrapper.vm.values.length).to.equal(5);

    setTimeout(() => {
      const nColumn = wrapper.find('.van-picker-column-wrapper')[0];

      const eventMouseObject = new window.Event('mousedown');
      eventMouseObject.pageY = 0;
      nColumn.element.dispatchEvent(eventMouseObject);

      const eventTouchObject = new window.Event('touchstart');
      eventTouchObject.changedTouches = [{ pageY: 0 }];
      nColumn.element.dispatchEvent(eventTouchObject);
    }, 500);

    setTimeout(() => {
      const nColumn = wrapper.find('.van-picker-column-wrapper')[0];

      const eventMouseMoveObject = new window.Event('mousemove');
      eventMouseMoveObject.pageY = 40;
      document.dispatchEvent(eventMouseMoveObject);

      const eventObject = new window.Event('touchmove');
      eventObject.changedTouches = [{ pageY: 40 }];
      nColumn.element.dispatchEvent(eventObject);

      // 结束滚动
      const eventMouseUpObject = new window.Event('mouseup');
      document.dispatchEvent(eventMouseUpObject);
      const eventEndObject = new window.Event('touchend');
      eventEndObject.changedTouches = [{}];
      nColumn.element.dispatchEvent(eventEndObject);
    }, 1000);

    setTimeout(() => {
      const nItem = wrapper.find('.van-picker-column__item');
      expect(nItem[1].hasClass('van-picker-column__item--selected')).to.be.true;

      done();
    }, 1200);
  });
});
