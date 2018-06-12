/* eslint-disable camelcase */
import { mount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import AddressEdit from '../';
import AddressDetail from '../Detail';
import areaList from '../../area/demo/area.simple';
import { later, transitionStub } from '../../../test/utils';

transitionStub();

const addressInfo = {
  name: '测试',
  tel: '13000000000',
  province: '北京市',
  city: '北京市',
  county: '朝阳区',
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
  expect(errorInfo.area_code).toBeTruthy();

  // area_code invalid
  data.area_code = '-1';
  button.trigger('click');
  expect(errorInfo.area_code).toBeTruthy();
});

it('valid address_detail', () => {
  const { data, field, button, errorInfo } = createComponent();
  data.address_detail = '';
  button.trigger('click');
  expect(errorInfo.address_detail).toBeTruthy();
  field.at(3).trigger('focus');
  expect(errorInfo.address_detail).toBeFalsy();
});

test('valid postal code', () => {
  const { vm, data, field, button, errorInfo } = createComponent();

  // postal_code invalid
  data.postal_code = '123';
  button.trigger('click');
  expect(errorInfo.postal_code).toBeTruthy();
  field.at(4).trigger('focus');
  expect(errorInfo.postal_code).toBeFalsy();

  // valid result
  data.postal_code = '123456';
  button.trigger('click');

  // not show postal_code
  data.postal_code = '156';
  vm.showPostal = false;
  button.trigger('click');
  expect(errorInfo.postal_code).toBeFalsy();
});

test('select area', () => {
  const wrapper = mount(AddressEdit, {
    propsData: {
      areaList
    }
  });
  const { vm } = wrapper;
  const { data } = vm;

  vm.onAreaConfirm([
    { name: '北京市' },
    { name: '北京市' },
    { name: '朝阳区', code: '123456' }
  ]);
  expect(data.province).toEqual('北京市');
  expect(data.city).toEqual('北京市');
  expect(data.county).toEqual('朝阳区');
  expect(data.area_code).toEqual('123456');
});

test('on change detail', () => {
  const wrapper = mount(AddressEdit);
  const field = wrapper.findAll('.van-field__control').at(3);

  field.element.value = '123';
  field.trigger('input');
  expect(wrapper.emitted('change-detail')[0][0]).toEqual('123');
});

test('clear address detail in ios', () => {
  const wrapper = mount(AddressEdit, {
    propsData: {
      addressInfo: {
        address_detail: '123'
      }
    }
  });

  wrapper.vm.isAndroid = false;
  wrapper.findAll('.van-field__control').at(2).trigger('focus');
  wrapper.find('.van-field__icon').trigger('touchstart');
  expect(wrapper.vm.data.address_detail).toEqual('');
});

test('finish edit address detail in android', () => {
  const wrapper = mount(AddressDetail, {
    propsData: {
      value: '123'
    }
  });

  wrapper.vm.$on('input', val => {
    wrapper.vm.value = val;
  });

  wrapper.setData({ isAndroid: true });
  wrapper.find('.van-field__control').trigger('focus');
  wrapper.find('.van-field__icon').trigger('touchstart');
  expect(wrapper.vm.value).toEqual('123');
});

test('watch address info', () => {
  const wrapper = mount(AddressEdit);
  wrapper.setProps({ addressInfo: { name: '123' }});
  expect(wrapper.vm.data.name).toEqual('123');
});

test('set/get area code', async() => {
  const wrapper = mount(AddressEdit, {
    propsData: { areaList }
  });

  expect(wrapper.vm.getArea()).toEqual([
    { code: '110000', name: '北京市' },
    { code: '110100', name: '北京市' },
    { code: '110101', name: '东城区' }
  ]);

  wrapper.vm.setAreaCode('110102');

  await later(50);
  expect(wrapper.vm.data.area_code).toEqual('110102');
  expect(wrapper.vm.getArea()).toEqual([
    { code: '110000', name: '北京市' },
    { code: '110100', name: '北京市' },
    { code: '110102', name: '西城区' }
  ]);

  wrapper.vm.$refs = [];
  wrapper.vm.setAreaCode('110102');
  expect(wrapper.vm.getArea()).toEqual([]);
});

test('watch area code', async() => {
  const wrapper = mount(AddressEdit, {
    propsData: {
      addressInfo: {
        area_code: '110101'
      }
    }
  });

  expect(wrapper.vm.data.city).toEqual('');
  wrapper.vm.areaList = areaList;

  await later(50);
  expect(wrapper.vm.data.city).toEqual('北京市');
});

test('show search result', async() => {
  const wrapper = mount(AddressEdit, {
    propsData: {
      showSearchResult: true,
      searchResult: [
        { name: 'name1', address: 'address1' },
        { name: 'name2' },
        { address: 'address2' }
      ]
    }
  });

  const field = wrapper.findAll('.van-field__control').at(3);
  const input = field.element;
  field.trigger('focus');

  const items = wrapper.findAll('.van-icon-location');
  items.at(0).element.parentNode.click();
  expect(input.value).toEqual('address1 name1');
  items.at(1).element.parentNode.click();
  expect(input.value).toEqual('name2');
  items.at(2).element.parentNode.click();
  expect(input.value).toEqual('address2');

  field.trigger('blur');
  await later(150);
  expect(wrapper.vm.detailFocused).toBeFalsy();
});

test('delete address', async() => {
  const wrapper = mount(AddressEdit, {
    attachToDocument: true,
    propsData: {
      addressInfo: {
        id: '123'
      }
    }
  });

  const deleteButton = wrapper.findAll('.van-button').at(1);
  deleteButton.trigger('click');
  document.querySelector('.van-dialog__cancel').click();
  deleteButton.trigger('click');
  document.querySelector('.van-dialog__confirm').click();

  await later();
  expect(wrapper.emitted('delete')).toBeTruthy();
  expect(wrapper.emitted('cancel-delete')).toBeTruthy();
});
