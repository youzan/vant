import { mount } from '../../../test';
import Sku from '..';
import { getSkuData, initialSku } from '../demo/data';
import { string2Date, date2String } from '../utils/time-helper';

const skuData = getSkuData();

test('resetSelectedSku method', () => {
  skuData.sku.messages = [];

  const wrapper = mount(Sku, {
    propsData: {
      value: true,
      initialSku,
      sku: skuData.sku,
      quota: skuData.quota,
      goods: skuData.goods_info,
      goodsId: skuData.goods_id,
      quotaUsed: skuData.quota_used,
      hideStock: skuData.sku.hide_stock,
      startSaleNum: skuData.start_sale_num,
    },
  });

  wrapper.find('.van-button--danger').trigger('click');
  expect(wrapper.emitted('buy-clicked').length).toEqual(1);

  wrapper.setProps({ initialSku: {} });
  wrapper.vm.resetSelectedSku();

  wrapper.find('.van-button--danger').trigger('click');
  expect(wrapper.emitted('buy-clicked').length).toEqual(1);
});

test('string2Date', () => {
  expect(date2String(string2Date(''))).toEqual('');
  expect(date2String(string2Date('2020-07-01'))).toEqual('2020-07-01');
  expect(date2String(string2Date('2020-07-01 22:44'), 'datetime')).toEqual(
    '2020-07-01 22:44'
  );
  expect(date2String(string2Date('2020-12-31 23:59'), 'datetime')).toEqual(
    '2020-12-31 23:59'
  );
});
