import ContactCard from '..';
import ContactList from '../../contact-list';
import ContactEdit from '../../contact-edit';
import { mount, later } from '../../../test/utils';

const contactInfo = {
  name: 'test',
  tel: '123123213'
};

describe('ContactCard', () => {
  test('click event', () => {
    const click = jest.fn();
    const wrapper = mount(ContactCard, {
      context: {
        on: {
          click
        }
      }
    });

    wrapper.trigger('click');
    expect(click).toHaveBeenCalledTimes(1);
  });

  test('not editable', () => {
    const click = jest.fn();
    const wrapper = mount(ContactCard, {
      propsData: {
        editable: false
      },
      context: {
        on: {
          click
        }
      }
    });

    wrapper.trigger('click');
    expect(click).toHaveBeenCalledTimes(0);
  });
});

describe('ContactList', () => {
  test('render', () => {
    const wrapper = mount(ContactList);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ContactEdit', () => {
  const createComponent = () => {
    const wrapper = mount(ContactEdit, {
      propsData: {
        contactInfo
      }
    });

    const button = wrapper.find('.van-button');
    const field = wrapper.findAll('.van-field__control');
    const { errorInfo, data } = wrapper.vm;
    return {
      wrapper,
      data,
      field,
      button,
      errorInfo
    };
  };

  test('valid name', () => {
    const { data, field, button, errorInfo } = createComponent();

    // name empty
    data.name = '';
    button.trigger('click');
    expect(errorInfo.name).toBeTruthy();
    field.at(0).trigger('focus');
    expect(errorInfo.name).toBeFalsy();
  });

  it('valid tel', () => {
    const { data, field, button, errorInfo, wrapper } = createComponent();
    data.tel = '';
    button.trigger('click');
    expect(errorInfo.tel).toBeTruthy();
    field.at(1).trigger('focus');
    expect(errorInfo.tel).toBeFalsy();

    data.tel = '13000000000';
    button.trigger('click');
    expect(errorInfo.tel).toBeFalsy();
    expect(wrapper.emitted('save')[0][0]).toEqual({
      name: 'test',
      tel: '13000000000'
    });
  });

  test('watch contact info', () => {
    const wrapper = mount(ContactEdit);
    wrapper.setProps({ contactInfo: { name: '123' } });
    expect(wrapper.vm.data.name).toEqual('123');
  });

  test('delete contact', async () => {
    const wrapper = mount(ContactEdit, {
      propsData: {
        isEdit: true
      }
    });

    const deleteButton = wrapper.findAll('.van-button').at(1);
    deleteButton.trigger('click');

    await later();
    document.querySelector('.van-dialog__confirm').click();

    await later();
    expect(wrapper.emitted('delete')).toBeTruthy();
  });
});
