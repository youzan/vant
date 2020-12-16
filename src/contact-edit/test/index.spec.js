import ContactEdit from '..';
import { mount, later } from '../../../test';

const contactInfo = {
  name: 'foo',
  tel: '13000000000',
};

test('should validate contact name before submitting form', async () => {
  const wrapper = mount(ContactEdit, {
    props: {
      contactInfo: {
        name: '',
        tel: '',
      },
    },
  });

  const button = wrapper.find('.van-button');
  button.trigger('click');
  await later();
  expect(wrapper.find('.van-field__error-message').html()).toMatchSnapshot();

  const fields = wrapper.findAll('.van-field__control');

  fields[0].trigger('focus');
  await later();
  expect(wrapper.find('.van-field__error-message').exists()).toBeFalsy();
});

test('should validate contact tel before submitting form', async () => {
  const wrapper = mount(ContactEdit, {
    props: {
      contactInfo: {
        name: 'name',
        tel: '',
      },
    },
  });

  const button = wrapper.find('.van-button');
  button.trigger('click');
  await later();
  expect(wrapper.find('.van-field__error-message').html()).toMatchSnapshot();

  const fields = wrapper.findAll('.van-field__control');

  fields[1].trigger('focus');
  await later();
  expect(wrapper.find('.van-field__error-message').exists()).toBeFalsy();
});

test('should emit save event after submitting form', async () => {
  const wrapper = mount(ContactEdit, {
    props: {
      contactInfo,
    },
  });

  const button = wrapper.find('.van-button');
  button.trigger('click');
  await later();
  expect(wrapper.emitted('save')[0][0]).toEqual(contactInfo);
});

test('should watch contact info', async () => {
  const wrapper = mount(ContactEdit);
  const button = wrapper.find('.van-button');

  wrapper.setProps({ contactInfo });
  await later();
  button.trigger('click');
  expect(wrapper.emitted('save')[0][0]).toEqual(contactInfo);
});

test('should allow deleting contact', async () => {
  const wrapper = mount(ContactEdit, {
    props: {
      isEdit: true,
    },
  });

  const deleteButton = wrapper.findAll('.van-button')[1];
  deleteButton.trigger('click');

  await later();
  document.querySelector('.van-dialog__confirm').click();

  await later();
  expect(wrapper.emitted('delete')).toBeTruthy();
});
