/**
 * Sku only provide zh-CN lang by default
 */

export default {
  'zh-CN': {
    vanSkuActions: {
      buy: '立即购买',
      addCart: '加入购物车'
    },
    vanSkuImgUploader: {
      oversize: (maxSize: number) => `最大可上传图片为${maxSize}MB，请尝试压缩图片尺寸`,
      fail: '上传失败<br />重新上传'
    },
    vanSkuStepper: {
      num: '购买数量'
    },
    vanSkuMessages: {
      fill: '请填写',
      upload: '请上传',
      imageLabel: '仅限一张',
      invalid: {
        tel: '请填写正确的数字格式留言',
        mobile: '手机号长度为6-20位数字',
        email: '请填写正确的邮箱',
        id_no: '请填写正确的身份证号码'
      },
      placeholder: {
        id_no: '输入身份证号码',
        text: '输入文本',
        tel: '输入数字',
        email: '输入邮箱',
        date: '点击选择日期',
        time: '点击选择时间',
        textarea: '点击填写段落文本',
        mobile: '输入手机号码'
      }
    }
  }
};
