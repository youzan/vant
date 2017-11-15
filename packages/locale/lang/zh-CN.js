export default {
  confirm: '确认',
  cancel: '取消',
  save: '保存',
  complete: '完成',
  vanAddressEdit: {
    areaTitle: '收件地区',
    addressText: '收货',
    areaWrong: '请选择正确的收件地区',
    areaEmpty: '请选择收件地区',
    nameEmpty: '请填写名字',
    nameOverlimit: '名字过长，请重新输入',
    telWrong: '请填写正确的手机号码或电话号码',
    addressOverlimit: '详细地址不能超过200个字符',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: text => `设为默认${text}地址`,
    deleteAddress: text => `删除${text}地址`,
    confirmDelete: text => `确定要删除这个${text}地址么`,
    label: {
      name: text => `${text}人`,
      tel: '联系电话',
      postal: '邮政编码'
    },
    placeholder: {
      name: '名字',
      tel: '手机或固定电话',
      postal: '邮政编码(选填)',
      province: '选择省',
      city: '选择市',
      county: '选择区'
    }
  },
  vanAddressEditDetail: {
    label: {
      address: '详细地址'
    },
    placeholder: {
      address: '如街道、楼层、门牌号等'
    }
  },
  vanContactCard: {
    name: '联系人',
    tel: '联系电话',
    addText: '添加订单联系人信息'
  },
  vanContactList: {
    name: '联系人',
    tel: '联系电话',
    addText: '新建联系人'
  },
  vanContactEdit: {
    name: '联系人',
    namePlaceholder: '名字',
    nameEmpty: '请填写名字',
    nameOverlimit: '名字过长，请重新输入',
    tel: '联系电话',
    telPlaceholder: '手机或固定电话',
    telInvalid: '请填写正确的手机号码或电话号码',
    save: '保存',
    delete: '删除联系人',
    confirmDelete: '确定要删除这个联系人么'
  },
  vanPicker: {
    confirm: '完成'
  },
  vanPullRefresh: {
    pullingText: '下拉即可刷新...',
    loosingText: '释放即可刷新...',
    loadingText: '加载中...'
  }
};
