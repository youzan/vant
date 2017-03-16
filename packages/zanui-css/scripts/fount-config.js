module.exports = {
  name: 'zanui-icon',
  output: '../build',
  meta: {
    author: 'houzi, zhangmin',
    license: 'MIT',
    license_url: 'https://opensource.org/licenses/MIT',
    homepage: 'http://github.com/youzan',
    css_prefix_text: 'zan-icon-',
    filename_hash: true
  },
  hinting: true,
  glyphs_dir: '../icons',
  glyphs: [
    {
      keywords: ['qr', 'invalid'],
      src: '二维码失效.svg',
      css: 'qr-invalid'
    },
    {
      keywords: ['qr'],
      src: '二维码.svg',
      css: 'qr'
    },
    {
      keywords: ['pay', 'fail'],
      src: '交易失败.svg',
      css: 'pay-fail'
    },
    {
      keywords: ['exchange'],
      src: '兑换.svg',
      css: 'exchange',
      'correct_contour_direction': true
    },
    {
      keywords: ['close'],
      src: '关闭.svg',
      css: 'close'
    },
    {
      keywords: ['location'],
      src: '其他分店.svg',
      css: 'location'
    },
    {
      keywords: ['upgrade'],
      src: '升级地址.svg',
      css: 'upgrade'
    },
    {
      keywords: ['check'],
      src: '单选.svg',
      css: 'check'
    },
    {
      keywords: ['checked'],
      src: '选中.svg',
      css: 'checked'
    },
    {
      keywords: ['like', 'outline'],
      src: '喜欢.svg',
      css: 'like-o'
    },
    {
      keywords: ['like', 'filled'],
      src: '喜欢.svg',
      css: 'like'
    },
    {
      keywords: ['chat'],
      src: '客服.svg',
      css: 'chat'
    },
    {
      keywords: ['account', 'paid'],
      src: '已付款.svg',
      css: 'paid'
    },
    {
      keywords: ['delivered'],
      src: '已发货.svg',
      css: 'delivered'
    },
    {
      keywords: ['finished'],
      src: '已完成.svg',
      css: 'finished'
    },
    {
      keywords: ['shop'],
      src: '店铺.svg',
      css: 'shop'
    },
    {
      keywords: ['deliver'],
      src: '待发货.svg',
      css: 'deliver'
    },
    {
      keywords: ['success'],
      src: '成功开团.svg',
      css: 'success'
    },
    {
      keywords: ['photograph'],
      src: '拍照.svg',
      css: 'photograph'
    },
    {
      keywords: ['add'],
      src: '新增地址.svg',
      css: 'add'
    },
    {
      keywords: ['not', 'payed'],
      src: '未付款.svg',
      css: 'not-payed'
    },
    {
      keywords: ['add2'],
      src: '添加.svg',
      css: 'add2'
    },
    {
      keywords: ['photo'],
      src: '照片.svg',
      css: 'photo'
    },
    {
      keywords: ['logistics'],
      src: '物流.svg',
      css: 'logistics'
    },
    {
      keywords: ['edit'],
      src: '编辑地址.svg',
      css: 'edit'
    },
    {
      keywords: ['passed'],
      src: '认证通过.svg',
      css: 'passed'
    },
    {
      keywords: ['cart'],
      src: '购物车.svg',
      css: 'cart'
    },
    {
      keywords: ['arrow'],
      src: '进入箭头.svg',
      css: 'arrow'
    },
    {
      keywords: ['gift'],
      src: '送礼.svg',
      css: 'gift'
    }
  ]
};
