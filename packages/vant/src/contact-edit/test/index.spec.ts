import { VueWrapper } from '@vue/test-utils';
import { ContactEdit, ContactEditInfo } from '..';
import { mount, later } from '../../../test';

const contactInfo = {
  name: 'foo',
  tel: '13000000000',
};

async function submitForm(wrapper: VueWrapper<any>) {
  const form = wrapper.find('form');
  await form.trigger('submit');
  return later();
}

test('should validate contact name before submitting form', async () => {
  const wrapper = mount(ContactEdit, {
    props: {
      contactInfo: {
        name: '',
        tel: '',
      },
    },
  });

  await submitForm(wrapper);
  expect(wrapper.find('.van-field__error-message').html()).toMatchSnapshot();
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

  await submitForm(wrapper);
  expect(wrapper.find('.van-field__error-message').html()).toMatchSnapshot();
});

test('should emit save event after submitting form', async () => {
  const wrapper = mount(ContactEdit, {
    props: {
      contactInfo,
    },
  });

  await submitForm(wrapper);
  expect(wrapper.emitted<[ContactEditInfo]>('save')![0][0]).toEqual(
    contactInfo,
  );
});

test('should watch contact info', async () => {
  const wrapper = mount(ContactEdit);
  await wrapper.setProps({ contactInfo });
  await submitForm(wrapper);
  expect(wrapper.emitted<[ContactEditInfo]>('save')![0][0]).toEqual(
    contactInfo,
  );
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
  document.querySelector<HTMLElement>('.van-dialog__confirm')?.click();

  await later();
  expect(wrapper.emitted('delete')).toBeTruthy();
});
