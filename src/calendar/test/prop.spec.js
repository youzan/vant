import Calendar from '..';
import { mount, later } from '../../../test';

const minDate = new Date(2010, 0, 10);
const maxDate = new Date(2010, 0, 20);

test('max-range prop', async () => {
  const wrapper = mount(Calendar, {
    propsData: {
      type: 'range',
      minDate,
      maxDate,
      maxRange: 1,
      poppable: false,
    },
  });

  await later();

  const days = wrapper.findAll('.van-calendar__day');
  days.at(15).trigger('click');
  days.at(18).trigger('click');
  wrapper.find('.van-calendar__confirm').trigger('click');

  expect(wrapper.emitted('confirm')).toBeFalsy();
});
