import AddressEdit from '..';
import areaList from '../../area/demo/area-simple';
import { mount, later, trigger } from '../../../test';

const addressInfo = {
  name: '测试',
  tel: '13000000000',
  province: '北京市',
  city: '北京市',
  county: '朝阳区',
  addressDetail: '详细地址',
  areaCode: '110101',
  postalCode: '10000',
  isDefault: true,
};

const createComponent = () => {
  const wrapper = mount(AddressEdit, {
    props: {
      areaList,
      addressInfo,
      showPostal: true,
      showSetDefault: true,
    },
  });

  const button = wrapper.find('.van-button');
  const field = wrapper.findAll('.van-field__control');
  const { errorInfo, data } = wrapper.vm;
  return {
    vm: wrapper.vm,
    data,
    field,
    button,
    wrapper,
    errorInfo,
  };
};

test('create a AddressEdit', () => {
  expect(mount(AddressEdit)).toMatchSnapshot();
});

test('create a AddressEdit with props', () => {
  const wrapper = mount(AddressEdit, {
    props: {
      areaList,
      addressInfo,
      showPostal: true,
      showSetDefault: true,
      showSearchResult: true,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('valid area placeholder confirm', async () => {
  const wrapper = mount(AddressEdit, {
    props: {
      areaList,
      areaColumnsPlaceholder: ['请选择', '请选择', '请选择'],
    },
  });

  const { data } = wrapper.vm;

  wrapper.find('.van-picker__confirm').trigger('click');

  expect(data.areaCode).toBe('');
  await later(50);
  expect(wrapper.html()).toMatchSnapshot();
});

test('show area component', async () => {
  const { wrapper } = createComponent();

  const field = wrapper.findAll('.van-field')[2];
  field.trigger('click');

  await later(50);
  expect(wrapper.html()).toMatchSnapshot();

  wrapper.find('.van-picker__cancel').trigger('click');

  await later(50);
  expect(wrapper.html()).toMatchSnapshot();
});

test('set-default', () => {
  const { wrapper } = createComponent();
  wrapper.find('.van-switch').trigger('click');

  expect(wrapper.html()).toMatchSnapshot();
});

test('validator props', async () => {
  const wrapper = mount(AddressEdit, {
    props: {
      areaList,
      validator(key, value) {
        return `${key}${value}`;
      },
    },
  });

  const { errorInfo, data } = wrapper.vm;
  data.name = '';
  const button = wrapper.find('.van-button');
  button.trigger('click');

  expect(errorInfo.name).toBeTruthy();
});

test('valid name', () => {
  const { data, field, button, errorInfo } = createComponent();

  // name empty
  data.name = '';
  button.trigger('click');
  expect(errorInfo.name).toBeTruthy();
  field[0].trigger('focus');
  expect(errorInfo.name).toBeFalsy();
});

test('valid tel', () => {
  const { data, field, button, errorInfo } = createComponent();
  data.tel = '';
  button.trigger('click');
  expect(errorInfo.tel).toBeTruthy();
  field[1].trigger('focus');
  expect(errorInfo.tel).toBeFalsy();
});

test('valid areaCode', () => {
  const { data, button, errorInfo } = createComponent();
  // areaCode empty
  data.areaCode = '';
  button.trigger('click');
  expect(errorInfo.areaCode).toBeTruthy();

  // areaCode invalid
  data.areaCode = '-1';
  button.trigger('click');
  expect(errorInfo.areaCode).toBeTruthy();
});

test('valid addressDetail', () => {
  const { data, field, button, errorInfo } = createComponent();
  data.addressDetail = '';
  button.trigger('click');
  expect(errorInfo.addressDetail).toBeTruthy();
  field[3].trigger('focus');
  expect(errorInfo.addressDetail).toBeFalsy();
});

test('valid postal code', () => {
  const { vm, data, field, button, errorInfo } = createComponent();

  // postalCode invalid
  data.postalCode = '123';
  button.trigger('click');
  expect(errorInfo.postalCode).toBeTruthy();
  field[4].trigger('focus');
  expect(errorInfo.postalCode).toBeFalsy();

  // valid result
  data.postalCode = '123456';
  button.trigger('click');

  // not show postalCode
  data.postalCode = '156';
  vm.showPostal = false;
  button.trigger('click');
  expect(errorInfo.postalCode).toBeFalsy();
});

test('on change detail', () => {
  const wrapper = mount(AddressEdit);
  const field = wrapper.findAll('.van-field__control')[3];

  field.element.value = '123';
  field.trigger('input');
  expect(wrapper.emitted('change-detail')[0][0]).toEqual('123');
});

test('watch address info', () => {
  const wrapper = mount(AddressEdit);
  wrapper.setProps({ addressInfo: { name: '123' } });
  expect(wrapper.vm.data.name).toEqual('123');
});

test('set/get area code', async () => {
  const wrapper = mount(AddressEdit, {
    props: { areaList },
  });

  expect(wrapper.vm.getArea()).toEqual([
    { code: '110000', name: '北京市' },
    { code: '110100', name: '北京市' },
    { code: '110101', name: '东城区' },
  ]);

  wrapper.vm.setAreaCode('110102');

  await later(50);
  expect(wrapper.vm.data.areaCode).toEqual('110102');
  expect(wrapper.vm.getArea()).toEqual([
    { code: '110000', name: '北京市' },
    { code: '110100', name: '北京市' },
    { code: '110102', name: '西城区' },
  ]);

  wrapper.vm.$refs = [];
  wrapper.vm.setAreaCode('110102');
  expect(wrapper.vm.getArea()).toEqual([]);
});

test('watch area code', async () => {
  const wrapper = mount(AddressEdit, {
    props: {
      areaList: {},
      addressInfo: {
        areaCode: '110101',
      },
    },
  });

  expect(wrapper.vm.data.city).toEqual('');
  wrapper.vm.areaList = areaList;

  await later(50);
  expect(wrapper.vm.data.city).toEqual('北京市');
});

test('show search result', async () => {
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
  field.trigger('focus');

  const items = wrapper.findAll('.van-icon-location-o');
  items[0].element.parentNode.click();
  expect(input.value).toEqual('address1 name1');
  items[1].element.parentNode.click();
  expect(input.value).toEqual('name2');
  items[2].element.parentNode.click();
  expect(input.value).toEqual('address2');

  field.trigger('blur');
  await later(150);
  expect(wrapper.vm.detailFocused).toBeFalsy();
});

test('delete address', async () => {
  const wrapper = mount(AddressEdit, {
    attachToDocument: true,
    props: {
      showDelete: true,
    },
  });

  const deleteButton = wrapper.findAll('.van-button')[1];
  deleteButton.trigger('click');

  await later();
  document.querySelector('.van-dialog__cancel').click();
  deleteButton.trigger('click');
  document.querySelector('.van-dialog__confirm').click();

  await later();
  expect(wrapper.emitted('delete')).toBeTruthy();
  expect(wrapper.emitted('cancel-delete')).toBeTruthy();
});

test('setAddressDetail method', () => {
  const { vm, data } = createComponent();
  vm.setAddressDetail('test');
  expect(data.addressDetail).toEqual('test');
});

test('select area', () => {
  const { wrapper, data } = createComponent();
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(data.areaCode).toEqual('110101');
});

test('click-area event', () => {
  const wrapper = mount(AddressEdit, {
    props: {
      disableArea: true,
    },
  });

  const field = wrapper.findAll('.van-field')[2];
  field.trigger('click');
  expect(wrapper.emitted('click-area')[0]).toBeTruthy();
});

test('tel-maxlength prop', () => {
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
