import { AddressEdit } from '..';
import { areaList } from '../../area/demo/area-simple';
import { mount, later, trigger } from '../../../test';

const defaultAddressInfo = {
  name: '测试',
  tel: '13000000000',
  province: '北京市',
  city: '北京市',
  county: '朝阳区',
  addressDetail: 'address detail',
  areaCode: '110101',
  postalCode: '10000',
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
      showPostal: true,
      showSetDefault: true,
    },
  });

  const button = wrapper.find('.van-button');
  const fields = wrapper.findAll('.van-field');
  return {
    vm: wrapper.vm,
    fields,
    button,
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
      showPostal: true,
      showSetDefault: true,
      showSearchResult: true,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

// test('set-default', () => {
//   const { wrapper } = createComponent();
//   wrapper.find('.van-switch').trigger('click');

//   expect(wrapper.html()).toMatchSnapshot();
// });

test('should allow to custom validator with validator prop', async () => {
  const wrapper = mount(AddressEdit, {
    props: {
      areaList,
      validator: (key, value) => `foo ${key}${value}`,
    },
  });

  const button = wrapper.find('.van-button');
  await button.trigger('click');
  expect(wrapper.find('.van-field__error-message').html()).toMatchSnapshot();
});

test('should valid name and render error message correctly', async () => {
  const { fields, button } = createComponent({
    name: '',
  });

  await button.trigger('click');
  expect(fields[0].html()).toMatchSnapshot();
  await fields[0].find('input').trigger('focus');
  expect(fields[0].html()).toMatchSnapshot();
});

test('should valid tel and render error message correctly', async () => {
  const { fields, button } = createComponent({
    tel: '',
  });

  await button.trigger('click');
  expect(fields[1].html()).toMatchSnapshot();
  await fields[1].find('input').trigger('focus');
  expect(fields[1].html()).toMatchSnapshot();
});

test('should valid area code and render error message correctly', async () => {
  const { fields, button } = createComponent({
    areaCode: '',
  });

  await button.trigger('click');
  expect(fields[2].html()).toMatchSnapshot();
  await fields[2].find('input').trigger('focus');
  expect(fields[2].html()).toMatchSnapshot();
});

test('should valid address detail and render error message correctly', async () => {
  const { fields, button } = createComponent({
    addressDetail: '',
  });

  await button.trigger('click');
  expect(fields[3].html()).toMatchSnapshot();
  await fields[3].find('textarea').trigger('focus');
  expect(fields[3].html()).toMatchSnapshot();
});

test('should valid postal code and render error message correctly', async () => {
  const { fields, button } = createComponent({
    postalCode: '123',
  });

  await button.trigger('click');
  expect(fields[4].html()).toMatchSnapshot();
  await fields[4].find('input').trigger('focus');
  expect(fields[4].html()).toMatchSnapshot();
});

test('should emit change-detail event after changing address detail', () => {
  const wrapper = mount(AddressEdit);
  const field = wrapper.findAll('.van-field__control')[3];

  field.element.value = '123';
  field.trigger('input');
  expect(wrapper.emitted('change-detail')[0][0]).toEqual('123');
});

test('should return current areas after calling getArea method', () => {
  const wrapper = mount(AddressEdit, {
    props: { areaList },
  });

  expect(wrapper.vm.getArea()).toEqual([
    { code: '110000', name: '北京市' },
    { code: '110100', name: '北京市' },
    { code: '110101', name: '东城区' },
  ]);
});

test('should update current areas after calling setAreaCode method', async () => {
  const wrapper = mount(AddressEdit, {
    props: { areaList },
  });

  wrapper.vm.setAreaCode('110102');
  await later();
  expect(wrapper.vm.getArea()).toEqual([
    { code: '110000', name: '北京市' },
    { code: '110100', name: '北京市' },
    { code: '110102', name: '西城区' },
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
  const input = field.element;
  await field.trigger('focus');

  const items = wrapper.findAll('.van-icon-location-o');
  items[0].element.parentNode.click();
  await later();
  expect(input.value).toEqual('address1 name1');

  items[1].element.parentNode.click();
  await later();
  expect(input.value).toEqual('name2');

  items[2].element.parentNode.click();
  await later();
  expect(input.value).toEqual('address2');

  await field.trigger('blur');
  await later(150);
  expect(wrapper.vm.detailFocused).toBeFalsy();
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

  vm.setAddressDetail('test');
  await later();
  expect(textarea.element.value).toEqual('test');
});

test('should emit click-area event after clicking the area field', () => {
  const wrapper = mount(AddressEdit, {
    props: {
      disableArea: true,
    },
  });

  const field = wrapper.findAll('.van-field')[2];
  field.trigger('click');
  expect(wrapper.emitted('click-area')[0]).toBeTruthy();
});

test('should limit tel maxlength when using tel-maxlength prop', () => {
  const wrapper = mount(AddressEdit, {
    props: {
      telMaxlength: 4,
    },
  });

  const telInput = wrapper.find('input[type="tel"]');
  telInput.element.value = '123456';
  trigger(telInput, 'input');

  expect(telInput.element.value).toEqual('1234');
});
