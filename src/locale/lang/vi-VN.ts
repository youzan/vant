export default {
  name: 'Tên',
  tel: 'Điện thoại',
  save: 'Đồng ý',
  confirm: 'Xác nhận',
  cancel: 'Hủy bỏ',
  delete: 'Xóa bỏ',
  complete: 'Hoàn thành',
  loading: 'Đang tải...',
  telEmpty: 'Vui lòng điền số điện thoại',
  nameEmpty: 'vui lòng điền tên',
  nameInvalid: 'Vui lòng nhập tên chính xác',
  confirmDelete: 'Bạn có chắc chắn muốn xóa',
  telInvalid: 'Vui lòng nhập số điện thoại chính xác',
  vanCalendar: {
    end: 'Chấm dứt',
    start: 'Bắt đầu',
    title: 'Chọn ngày',
    confirm: 'Đảm bảo',
    startEnd: 'Bắt đầu / Kết thúc',
    weekdays: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
    monthTitle: function monthTitle(year, month) {
      return year + " n\u0103m " + month + " th\xE1ng";
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "C\xE1c ng\xE0y \u0111\u01B0\u1EE3c ch\u1ECDn kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1 " + maxRange + " ng\xE0y";
    }
  },
  vanCascader: {
    select: 'Xin hãy lựa chọn'
  },
  vanContactCard: {
    addText: 'Thêm địa chỉ liên hệ'
  },
  vanContactList: {
    addText: 'Địa chỉ liên lạc mới'
  },
  vanPagination: {
    prev: 'Trang trước',
    next: 'Trang sau'
  },
  vanPullRefresh: {
    pulling: 'Kéo xuống để làm mới...',
    loosing: 'Phát hành để làm mới...'
  },
  vanSubmitBar: {
    label: 'Toàn bộ:'
  },
  vanCoupon: {
    unlimited: 'Không có ngưỡng sử dụng',
    discount: function discount(_discount) {
      return _discount + " Chi\u1EBFt kh\u1EA5u";
    },
    condition: function condition(_condition) {
      return "C\xF3 s\u1EB5n sau khi chi ti\xEAu " + _condition + " nh\xE2n d\xE2n t\u1EC7";
    }
  },
  vanCouponCell: {
    title: 'Phiếu giảm giá',
    tips: 'Chưa có',
    count: function count(_count) {
      return _count + " trang t\xEDnh kh\u1EA3 d\u1EE5ng";
    }
  },
  vanCouponList: {
    empty: 'Chưa có phiếu giảm giá',
    exchange: 'Trao đổi',
    close: 'Không sử dụng phiếu giảm giá',
    enable: 'Có sẵn',
    disabled: 'không có sẵn',
    placeholder: 'Vui lòng nhập mã khuyến mãi'
  },
  vanAddressEdit: {
    area: 'Khu vực',
    postal: 'Mã bưu điện',
    areaEmpty: 'Vui lòng chọn khu vực',
    addressEmpty: 'Vui lòng điền vào địa chỉ chi tiết',
    postalEmpty: 'Định dạng mã zip không chính xác',
    defaultAddress: 'Đặt làm địa chỉ giao hàng mặc định',
    telPlaceholder: 'Số điện thoại của người nhận hàng',
    namePlaceholder: 'Tên người nhận hàng',
    areaPlaceholder: 'Chọn Tỉnh / Thành phố / Quận / Huyện'
  },
  vanAddressEditDetail: {
    label: 'Địa chỉ chi tiết',
    placeholder: 'Số đường phố, số phòng tầng, v.v.'
  },
  vanAddressList: {
    add: 'Thêm địa chỉ'
  }
};
