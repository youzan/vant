export default {
  name: 'Name',
  tel: 'Phone',
  save: 'Save',
  confirm: 'Confirm',
  cancel: 'Cancel',
  delete: 'Delete',
  complete: 'Complete',
  contact: 'Name',
  loadingTip: 'Loading...',
  telEmpty: 'Please fill in the tel',
  nameEmpty: 'Please fill in the name',
  confirmDelete: 'Are you sure you want to delete?',
  telInvalid: 'Malformed phone number',
  vanContactCard: {
    addText: 'Add contact info'
  },
  vanContactList: {
    addText: 'Add new contact'
  },
  vanPagination: {
    prev: 'Previous',
    next: 'Next'
  },
  vanPullRefresh: {
    pulling: 'Pull to refresh...',
    loosing: 'Loose to refresh...'
  },
  vanSubmitBar: {
    label: 'Total：'
  },
  vanCouponCell: {
    title: 'Coupon',
    tips: 'Select coupon',
    count: count => `You have ${count} offers`
  },
  vanCouponList: {
    empty: 'No coupons',
    exchange: 'Exchange',
    close: 'Close',
    enable: 'Available',
    disabled: 'Unavailable',
    placeholder: 'Coupon code'
  },
  vanCouponItem: {
    valid: 'Valid',
    unlimited: 'Unlimited',
    discount: discount => `${discount * 10}% off`,
    condition: condition => `At least ${condition}`
  },
  vanAddressEdit: {
    area: 'Area',
    postal: 'Postal',
    areaEmpty: 'Please select a receiving area',
    addressEmpty: 'Address can not be empty',
    postalEmpty: 'Wrong postal code',
    defaultAddress: 'Set as the default address',
    telPlaceholder: 'Phone',
    namePlaceholder: 'Name',
    areaPlaceholder: 'Area'
  },
  vanAddressEditDetail: {
    label: 'Address',
    placeholder: 'Address'
  },
  vanAddressList: {
    address: 'Address',
    add: 'Add new address'
  },
  vanSku: {
    unavailable: 'The product is no longer available for purchase',
    spec: 'Please select the goods specification',
    least: 'Choose at least one',
    quota: quota => `Buy up to ${quota} items`,
    inventory: 'Inventory shortage',
    purchase: count => `You have purchased ${count} items`
  },
  vanSkuActions: {
    cart: 'Add to cart',
    buy: 'Buy'
  },
  vanSkuMessages: {
    fill: 'Please fill',
    upload: 'Please upload',
    number: 'Please fill in the correct number format message',
    email: 'Please fill in the correct email message',
    id_no: 'Please fill in the correct ID number message',
    onePic: 'only one picture',
    placeholder: {
      id_no: 'Idcard Number',
      text: 'Text',
      tel: 'Number',
      email: 'Email',
      date: 'Date',
      time: 'Time',
      textarea: 'Text'
    }
  },
  vanSkuImgUploader: {
    or: 'Or',
    uploading: 'Uploading...',
    rephoto: 'Take Again',
    photo: 'Take',
    reselect: 'Reselect',
    select: 'Select Photo',
    maxSize: maxSize => `The upload limit is up to ${maxSize}MB，please try to compress the photo`
  },
  vanSkuStepper: {
    title: 'Quantity',
    remain: count => `Remain ${count} items`,
    quota: quota => `Buy up to ${quota} items`
  }
};
