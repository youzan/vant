import { mount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import AddressEdit from '../';
import areaList from '../../area/demo/area.simple';

const addressInfo = {
  name: '测试',
  tel: '13000000000',
  province: '浙江省',
  city: '杭州市',
  county: '西湖区',
  address_detail: '详细地址',
  area_code: '110101',
  postal_code: '10000',
  is_default: true
};

const createComponent = () => {
  const wrapper = mount(AddressEdit, {
    propsData: {
      areaList,
      addressInfo,
      showPostal: true
    }
  });

  const button = wrapper.find('.van-button');
  const field = wrapper.findAll('.van-field__control');
  const { errorInfo, data } = wrapper.vm;
  return {
    vm: wrapper.vm,
    data,
    field,
    button,
    errorInfo
  };
};

test('create a AddressEdit', () => {
  expect(renderToString(AddressEdit)).toMatchSnapshot();
});

test('create a AddressEdit with props', () => {
  const wrapper = renderToString(AddressEdit, {
    propsData: {
      areaList,
      addressInfo,
      showPostal: true,
      showSetDefault: true,
      showSearchResult: true
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('valid name', () => {
  const { data, field, button, errorInfo } = createComponent();

  // name empty
  data.name = '';
  button.trigger('click');
  expect(errorInfo.name).toBeTruthy();
  field.at(0).trigger('focus');
  expect(errorInfo.name).toBeFalsy();

  // name too long
  data.name = '1'.repeat(30);
  button.trigger('click');
  expect(errorInfo.name).toBeTruthy();
  field.at(0).trigger('focus');
  expect(errorInfo.name).toBeFalsy();
});

it('valid tel', () => {
  const { data, field, button, errorInfo } = createComponent();
  data.tel = '';
  button.trigger('click');
  expect(errorInfo.tel).toBeTruthy();
  field.at(1).trigger('focus');
  expect(errorInfo.tel).toBeFalsy();
});

it('valid area_code', () => {
  const { data, button, errorInfo } = createComponent();
  // area_code empty
  data.area_code = '';
  button.trigger('click');
  expect(errorInfo['area_code']).toBeTruthy();

  // area_code invalid
  data.area_code = '-1';
  button.trigger('click');
  expect(errorInfo['area_code']).toBeTruthy();
});

it('valid address_detail', () => {
  const { data, field, button, errorInfo } = createComponent();
  data.address_detail = '';
  button.trigger('click');
  expect(errorInfo['address_detail']).toBeTruthy();
  field.at(2).trigger('focus');
  expect(errorInfo['address_detail']).toBeFalsy();

  // // address_detail too long
  data.address_detail = '1'.repeat(300);
  button.trigger('click');
  expect(errorInfo['address_detail']).toBeTruthy();
});

test('valid postal code', () => {
  const { vm, data, field, button, errorInfo } = createComponent();

  // postal_code invalid
  data.postal_code = '123';
  button.trigger('click');
  expect(errorInfo['postal_code']).toBeTruthy();
  field.at(3).trigger('focus');
  expect(errorInfo['postal_code']).toBeFalsy();

  // valid result
  data.postal_code = '123456';
  button.trigger('click');

  // not show postal_code
  data.postal_code = '156';
  vm.showPostal = false;
  button.trigger('click');
  expect(errorInfo['postal_code']).toBeFalsy();
});
