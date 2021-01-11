import AddressEdit from '..';
import areaList from '../../area/demo/area-simple';
import { mount, later, trigger } from '../../../test';

const addressInfo = {
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
  return {
    vm: wrapper.vm,
    field,
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
      addressInfo,
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

// test('should valid name', () => {
//   const { data, field, button, errorInfo } = createComponent();

//   // name empty
//   data.name = '';
//   button.trigger('click');
//   expect(errorInfo.name).toBeTruthy();
//   field[0].trigger('focus');
//   expect(errorInfo.name).toBeFalsy();
// });

// test('valid tel', () => {
//   const { data, field, button, errorInfo } = createComponent();
//   data.tel = '';
//   button.trigger('click');
//   expect(errorInfo.tel).toBeTruthy();
//   field[1].trigger('focus');
//   expect(errorInfo.tel).toBeFalsy();
// });

// test('valid areaCode', () => {
//   const { data, button, errorInfo } = createComponent();
//   // areaCode empty
//   data.areaCode = '';
//   button.trigger('click');
//   expect(errorInfo.areaCode).toBeTruthy();

//   // areaCode invalid
//   data.areaCode = '-1';
//   button.trigger('click');
//   expect(errorInfo.areaCode).toBeTruthy();
// });

// test('valid addressDetail', () => {
//   const { data, field, button, errorInfo } = createComponent();
//   data.addressDetail = '';
//   button.trigger('click');
//   expect(errorInfo.addressDetail).toBeTruthy();
//   field[3].trigger('focus');
//   expect(errorInfo.addressDetail).toBeFalsy();
// });

// test('valid postal code', () => {
//   const { vm, data, field, button, errorInfo } = createComponent();

//   // postalCode invalid
//   data.postalCode = '123';
//   button.trigger('click');
//   expect(errorInfo.postalCode).toBeTruthy();
//   field[4].trigger('focus');
//   expect(errorInfo.postalCode).toBeFalsy();

//   // valid result
//   data.postalCode = '123456';
//   button.trigger('click');

//   // not show postalCode
//   data.postalCode = '156';
//   vm.showPostal = false;
//   button.trigger('click');
//   expect(errorInfo.postalCode).toBeFalsy();
// });

// test('on change detail', () => {
//   const wrapper = mount(AddressEdit);
//   const field = wrapper.findAll('.van-field__control')[3];

//   field.element.value = '123';
//   field.trigger('input');
//   expect(wrapper.emitted('change-detail')[0][0]).toEqual('123');
// });

// test('watch address info', () => {
//   const wrapper = mount(AddressEdit);
//   wrapper.setProps({ addressInfo: { name: '123' } });
//   expect(wrapper.vm.data.name).toEqual('123');
// });

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
  deleteButton.trigger('click');
  await later();
  document.querySelector('.van-dialog__confirm').click();
  await later();
  expect(wrapper.emitted('delete')).toBeTruthy();
});

test('should emit cancel-delete event after canceling deletion', async () => {
  const wrapper = mount(AddressEdit, {
    props: {
      showDelete: true,
    },
  });

  const deleteButton = wrapper.findAll('.van-button')[1];
  deleteButton.trigger('click');
  await later();
  document.querySelector('.van-dialog__cancel').click();
  await later();
  expect(wrapper.emitted('cancel-delete')).toBeTruthy();
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
