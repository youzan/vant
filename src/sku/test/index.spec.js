import { mount } from '../../../test';
import Sku from '..';
import { skuData, initialSku } from '../demo/data';

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
