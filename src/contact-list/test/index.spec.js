import ContactList from '../../contact-list';
import { mount } from '../../../test';

const contactInfo = {
  name: 'test',
  tel: '123123213',
};

test('should render ContactList correctly', () => {
  const wrapper = mount(ContactList, {
    propsData: {
      list: [contactInfo],
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test('should emit select event after clicking the radio', () => {
  const onSelect = jest.fn();
  const wrapper = mount(ContactList, {
    propsData: {
      list: [contactInfo],
    },
    context: {
      on: {
        select: onSelect,
      },
    },
  });

  wrapper.find('.van-radio__icon').trigger('click');

  expect(onSelect).toHaveBeenCalled();
});
