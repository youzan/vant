import { AddressEdit, AddressEditInstance } from '..';
import { areaList } from '../../area/demo/area-simple';
import { mount, later, trigger } from '../../../test';
import { submitForm } from '../../form/test/shared';

const defaultAddressInfo = {
  name: '测试',
  tel: '13000000000',
  province: '北京市',
  city: '北京市',
  county: '朝阳区',
  addressDetail: 'address detail',
  areaCode: '110101',
  isDefault: true,
};

const createComponent = (addressInfo = {}) => {
  const wrapper = mount(AddressEdit, {
    props: {
      areaList,
      addressInfo: {
        ...defaultAddressInfo,
        ...addressInfo,
      },
      showSetDefault: true,
    },
  });

  const fields = wrapper.findAll('.van-field');
  return {
    vm: wrapper.vm,
    fields,
    wrapper,
  };
};

test('should render AddressEdit correctly', () => {
  expect(mount(AddressEdit).html()).toMatchSnapshot();
});

test('should render AddressEdit with props correctly', () => {
  const wrapper = mount(AddressEdit, {
    props: {
      areaList,
      addressInfo: defaultAddressInfo,
      showSetDefault: true,
      showSearchResult: true,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should allow to custom validator with validator prop', async () => {
  const wrapper = mount(AddressEdit, {
    props: {
      areaList,
      validator: (key: string, value: string) => `foo ${key}${value}`,
    },
  });

  await submitForm(wrapper);
  expect(wrapper.find('.van-field__error-message').html()).toMatchSnapshot();
});

test('should valid name and render error message correctly', async () => {
  const { fields, wrapper } = createComponent({
    name: '',
  });

  await submitForm(wrapper);
  expect(fields[0].html()).toMatchSnapshot();
});

test('should valid tel and render error message correctly', async () => {
  const { fields, wrapper } = createComponent({
    tel: '',
  });

  await submitForm(wrapper);
  expect(fields[1].html()).toMatchSnapshot();
});

test('should valid area code and render error message correctly', async () => {
  const { fields, wrapper } = createComponent({
    areaCode: '',
  });

  await submitForm(wrapper);
  expect(fields[2].html()).toMatchSnapshot();
});

test('should valid address detail and render error message correctly', async () => {
  const { fields, wrapper } = createComponent({
    addressDetail: '',
  });

  await submitForm(wrapper);
  await later();
  expect(fields[3].html()).toMatchSnapshot();
});

test('should emit changeDetail event after changing address detail', () => {
  const wrapper = mount(AddressEdit);
  const field = wrapper.findAll('.van-field__control')[3];

  (field.element as HTMLInputElement).value = '123';
  field.trigger('input');
  expect(wrapper.emitted('changeDetail')).toEqual([['123']]);
});

test('should emit change event after name or tel input', () => {
  const wrapper = mount(AddressEdit);

  const field = wrapper.findAll('.van-field__control')[0];
  (field.element as HTMLInputElement).value = '123';
  field.trigger('input');
  expect(wrapper.emitted('change')?.[0]).toEqual([
    { key: 'name', value: '123' },
  ]);

  const field1 = wrapper.findAll('.van-field__control')[1];
  (field1.element as HTMLInputElement).value = '123';
  field1.trigger('input');
  expect(wrapper.emitted('change')?.[1]).toEqual([
    { key: 'tel', value: '123' },
  ]);
});

test('should show search result after focusing to address detail', async () => {
  const wrapper = mount(AddressEdit, {
    props: {
      showSearchResult: true,
      searchResult: [
        { name: 'name1', address: 'address1' },
        { name: 'name2' },
        { address: 'address2' },
      ],
    },
  });

  const field = wrapper.findAll('.van-field__control')[3];
  const input = field.element as HTMLInputElement;
  await field.trigger('focus');

  const items = wrapper.findAll('.van-icon-location-o');
  (items[0].element.parentNode as HTMLElement).click();
  await later();
  expect(input.value).toEqual('address1 name1');

  (items[1].element.parentNode as HTMLElement).click();
  await later();
  expect(input.value).toEqual('name2');

  (items[2].element.parentNode as HTMLElement).click();
  await later();
  expect(input.value).toEqual('address2');
});

test('should emit delete event after clicking the delete button', async () => {
  const wrapper = mount(AddressEdit, {
    props: {
      showDelete: true,
    },
  });

  const deleteButton = wrapper.findAll('.van-button')[1];
  await deleteButton.trigger('click');
  expect(wrapper.emitted('delete')).toBeTruthy();
});

test('should update address detail after calling the setAddressDetail method', async () => {
  const { vm, wrapper } = createComponent();
  const textarea = wrapper.find('.van-address-edit-detail').find('textarea');

  expect(textarea.element.value).toEqual('address detail');

  (vm as AddressEditInstance).setAddressDetail('test');
  await later();
  expect(textarea.element.value).toEqual('test');
});

test('should emit clickArea event after clicking the area field', () => {
  const wrapper = mount(AddressEdit, {
    props: {
      disableArea: true,
    },
  });

  const field = wrapper.findAll('.van-field')[2];
  field.trigger('click');
  expect(wrapper.emitted('clickArea')).toHaveLength(1);
});

test('should limit tel maxlength when using tel-maxlength prop', () => {
  const wrapper = mount(AddressEdit, {
    props: {
      telMaxlength: 4,
    },
  });

  const telInput = wrapper.find('input[type="tel"]');
  const inputEl = telInput.element as HTMLInputElement;
  inputEl.value = '123456';
  trigger(telInput, 'input');

  expect(inputEl.value).toEqual('1234');
});
