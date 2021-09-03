import { ContactList } from '..';
import { mount } from '../../../test';

const contactInfo = {
  name: 'jack',
  tel: '12345678',
  isDefault: true,
};

test('should render ContactList correctly', () => {
  const wrapper = mount(ContactList, {
    props: {
      list: [contactInfo],
      defaultTagText: '默认',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit add event when add button is clicked', () => {
  const wrapper = mount(ContactList);
  wrapper.find('.van-contact-list__add').trigger('click');
  expect(wrapper.emitted('add')!.length).toEqual(1);
});

test('should emit select event when radio is clicked', () => {
  const wrapper = mount(ContactList, {
    props: {
      list: [contactInfo],
    },
  });

  wrapper.find('.van-radio__icon').trigger('click');

  expect(wrapper.emitted('select')!.length).toEqual(1);
  expect(wrapper.emitted('select')![0]).toEqual([contactInfo, 0]);
});

test('should emit edit event when edit icon is clicked', () => {
  const wrapper = mount(ContactList, {
    props: {
      list: [contactInfo],
    },
  });

  wrapper.find('.van-contact-list__edit').trigger('click');

  expect(wrapper.emitted('edit')!.length).toEqual(1);
  expect(wrapper.emitted('edit')![0]).toEqual([contactInfo, 0]);
});
