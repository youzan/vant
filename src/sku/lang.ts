/**
 * Sku only provide zh-CN lang by default
 */

export default {
  'zh-CN': {
    vanSku: {
      select: '请选择',
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
      fail: '上传失败',
      uploading: '上传中...',
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
        id_no: '请填写身份证号',
        text: '请填写留言',
        tel: '请填写数字',
        email: '请填写邮箱',
        date: '请选择日期',
        time: '请选择时间',
        textarea: '请填写留言',
        mobile: '请填写手机号',
      },
    },
    vanSkuRow: {
      multiple: '可多选',
    },
    vanSkuDatetimeField: {
      title: {
        date: '选择年月日',
        time: '选择时间',
        datetime: '选择日期时间',
      },
      format: {
        year: '年',
        month: '月',
        day: '日',
        hour: '时',
        minute: '分',
      },
    },
  },
};
