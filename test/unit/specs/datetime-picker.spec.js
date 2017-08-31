import DatetimePicker from 'packages/datetime-picker';
import { mount } from 'avoriaz';
import { triggerTouch } from '../utils';

const dragHelper = (el, position) => {
  triggerTouch(el, 'touchstart', 0, 0);
  triggerTouch(el, 'touchmove', 0, position / 4);
  triggerTouch(el, 'touchmove', 0, position / 3);
  triggerTouch(el, 'touchmove', 0, position / 2);
  triggerTouch(el, 'touchmove', 0, position);
  triggerTouch(el, 'touchend', 0, position);
};

const testTime = '10:00';
const testDate = new Date('2017/03/10 10:00');
const minDate = new Date('2000/01/01 00:00');
const maxDate = new Date('3000/01/01 00:00');

describe('DatetimePicker', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a time picker', () => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'time',
        value: testTime
      }
    });
    expect(wrapper.vm.innerValue).to.equal(testTime);
  });

  it('create a date picker', () => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'date',
        value: testDate
      }
    });
    expect(wrapper.vm.innerValue.getTime()).to.equal(testDate.getTime());
  });

  it('create a datetime picker', () => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'datetime',
        value: testDate
      }
    });
    expect(wrapper.vm.innerValue.getTime()).to.equal(testDate.getTime());
  });

  it('drag time picker', (done) => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'time',
        value: testTime
      }
    });

    const [hour, minute] = wrapper.find('.van-picker-column-wrapper');
    dragHelper(hour, -50);
    dragHelper(minute, -50);

    setTimeout(() => {
      expect(wrapper.vm.innerValue).to.equal('5:05');
      done();
    }, 10);
  });

  it('drag date picker', (done) => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'date',
        value: testDate,
        minDate,
        maxDate
      }
    });

    setTimeout(() => {
      const [year, month, day] = wrapper.find('.van-picker-column-wrapper');
      dragHelper(year, -50);
      dragHelper(month, -50);
      dragHelper(day, -50);
      setTimeout(() => {
        const newYear = wrapper.vm.innerValue.getFullYear();
        const newMonth = wrapper.vm.innerValue.getMonth() + 1;
        const newDay = wrapper.vm.innerValue.getDate();
        expect(newYear).to.equal(2022);
        expect(newMonth).to.equal(8);
        expect(newDay).to.equal(15);
        done();
      }, 10);
    }, 10);
  });

  it('drag datetime picker', (done) => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'datetime',
        value: testDate,
        minDate,
        maxDate
      }
    });

    setTimeout(() => {
      const [year, month, day, hour, minute] = wrapper.find('.van-picker-column-wrapper');
      dragHelper(year, -50);
      dragHelper(month, -50);
      dragHelper(day, -50);
      dragHelper(hour, -50);
      dragHelper(minute, -50);
      setTimeout(() => {
        const newYear = wrapper.vm.innerValue.getFullYear();
        const newMonth = wrapper.vm.innerValue.getMonth() + 1;
        const newDay = wrapper.vm.innerValue.getDate();
        const newHour = wrapper.vm.innerValue.getHours();
        const newMinute = wrapper.vm.innerValue.getMinutes();
        expect(newYear).to.equal(2022);
        expect(newMonth).to.equal(8);
        expect(newDay).to.equal(15);
        expect(newHour).to.equal(15);
        expect(newMinute).to.equal(5);
        done();
      }, 10);
    }, 10);
  });
});
