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
    monthTitle: (year: number, month: number) => `${year} năm ${month} tháng`,
    rangePrompt: (maxRange: number) => `Các ngày được chọn không được vượt quá ${maxRange} ngày`,
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
    discount: (discount: number) => `${discount} Chiết khấu`,
    condition: (condition: number) => `Có sẵn sau khi chi tiêu ${condition} Việt Nam Đồng`,
  },
  vanCouponCell: {
    title: 'Phiếu giảm giá',
    tips: 'Chưa có',
    count: (count: number) => `${count} trang tính khả dụng`,
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
