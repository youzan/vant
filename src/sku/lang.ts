/**
 * Sku only provide zh-CN lang by default
 */

export default {
  'zh-CN': {
    vanSku: {
      select: '选择',
      selected: '已选',
      selectSku: '请先选择商品规格',
      soldout: '库存不足',
      originPrice: '原价',
      minusTip: '至少选择一件',
      minusStartTip: (start: number) => `${start}件起售`,
      unavailable: '商品已经无法购买啦',
      stock: '剩余',
      stockUnit: '件',
      quotaTip: (quota: number) => `每人限购${quota}件`,
      quotaUsedTip: (quota: number, count: number) =>
        `每人限购${quota}件，你已购买${count}件`,
    },
    vanSkuActions: {
      buy: '立即购买',
      addCart: '加入购物车',
    },
    vanSkuImgUploader: {
      oversize: (maxSize: number) =>
        `最大可上传图片为${maxSize}MB，请尝试压缩图片尺寸`,
      fail: '上传失败<br />重新上传',
    },
    vanSkuStepper: {
      quotaLimit: (quota: number) => `限购${quota}件`,
      quotaStart: (start: number) => `${start}件起售`,
      comma: '，',
      num: '购买数量',
    },
    vanSkuMessages: {
      fill: '请填写',
      upload: '请上传',
      imageLabel: '仅限一张',
      invalid: {
        tel: '请填写正确的数字格式留言',
        mobile: '手机号长度为6-20位数字',
        email: '请填写正确的邮箱',
        id_no: '请填写正确的身份证号码',
      },
      placeholder: {
        id_no: '输入身份证号码',
        text: '输入文本',
        tel: '输入数字',
        email: '输入邮箱',
        date: '点击选择日期',
        time: '点击选择时间',
        textarea: '点击填写段落文本',
        mobile: '输入手机号码',
      },
    },
    vanSkuRow: {
      multiple: '可多选',
    },
  },
};
