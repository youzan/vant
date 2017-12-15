export default {
  confirm: 'Confirm',
  cancel: 'Cancel',
  save: 'Save',
  complete: 'Complete',
  vanContactCard: {
    name: 'Name',
    tel: 'Phone',
    addText: 'Add contact info'
  },
  vanContactList: {
    name: 'Name',
    tel: 'Phone',
    addText: 'Add new contact'
  },
  vanContactEdit: {
    name: 'Name',
    namePlaceholder: 'Name',
    nameEmpty: 'Name can not be empty',
    nameOverlimit: 'Name length exceeds limit',
    tel: 'Phone',
    telPlaceholder: 'Phone',
    telInvalid: 'Malformed phone number',
    save: 'Save',
    delete: 'Delete',
    confirmDelete: 'Are you sure you want to delete this contact?'
  },
  vanPagination: {
    prev: 'Previous',
    next: 'Next'
  },
  vanPullRefresh: {
    pullingText: 'Pull to refresh...',
    loosingText: 'Loose to refresh...',
    loadingText: 'Loading...'
  },
  vanSubmitBar: {
    label: 'Total：'
  },
  vanCouponCell: {
    title: 'Coupon',
    tips: 'Select coupon',
    reduce: 'Reduce',
    count: count => `You have ${count} offers`
  },
  vanCouponList: {
    empty: 'No coupons',
    exchange: 'Exchange',
    close: 'Close',
    disabled: 'Unavailable',
    placeholder: 'Coupon code'
  },
  vanCouponItem: {
    unlimited: 'Unlimited',
    discount: discount => `${discount * 10}% off`,
    condition: condition => `At least ${condition}`
  },
  vanAddressEdit: {
    areaTitle: 'Area',
    areaWrong: 'Please select the correct receiving area',
    areaEmpty: 'Please select a receiving area',
    nameEmpty: 'Name can not be empty',
    nameOverlimit: 'Name length exceeds limit',
    telWrong: 'Wrong format of phone number',
    addressOverlimit: 'The length of the address can not exceed 200 characters',
    addressEmpty: 'Address can not be empty',
    postalEmpty: 'Wrong postal code',
    defaultAddress: 'Set as the default address',
    deleteAddress: 'Delete the address',
    confirmDelete: 'Are you sure you want to delete this address?',
    label: {
      name: 'Receiver',
      tel: 'Phone',
      postal: 'Postal'
    },
    placeholder: {
      name: 'Receiver name',
      tel: 'Phone',
      postal: 'Postal code (optional)',
      province: 'Province',
      city: 'City',
      county: 'County'
    }
  },
  vanAddressEditDetail: {
    label: {
      address: 'Address'
    },
    placeholder: {
      address: 'Address'
    }
  },
  vanAddressList: {
    address: 'Address',
    add: 'Add new address'
  },
  vanSku: {
    unavailable: 'The product is no longer available for purchase',
    spec: 'Please select the full specification',
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
    number: 'Please fill in the correct number format message',
    email: 'Please fill in the correct email message',
    idcard: 'Please fill in the correct ID number message',
    overlimit: 'not more than 200 words',
    placeholder: {
      'id_no': 'Idcard Number',
      text: 'Text',
      tel: 'Number',
      email: 'Email',
      date: 'Date',
      time: 'Time',
      textarea: 'Text'
    }
  },
  vanSkuStepper: {
    title: 'Quantity',
    remain: count => `Remain ${count} items`,
    quota: quota => `Buy up to ${quota} items`
  }
};
