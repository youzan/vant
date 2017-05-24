import DatetimePicker from 'packages/datetime-picker';
import { mount } from 'avoriaz';

describe('DatetimePicker', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a datetime picker', () => {
    const date = new Date();
    wrapper = mount(DatetimePicker, {
      propsData: {
        type: 'datetime',
        value: date
      }
    });
    expect(wrapper.data().innerValue.getTime()).to.equal(date.getTime());
  });

  it('create a date picker', () => {
    const date = new Date();
    wrapper = mount(DatetimePicker, {
      propsData: {
        type: 'date',
        value: date
      }
    });
    expect(wrapper.data().innerValue.getTime()).to.equal(date.getTime());
  });

  it('create a time picker', () => {
    const time = '10:00';
    wrapper = mount(DatetimePicker, {
      propsData: {
        type: 'time',
        value: time
      }
    });
    expect(wrapper.data().innerValue).to.equal(time);
  });
});
