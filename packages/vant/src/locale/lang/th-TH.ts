export default {
  name: 'ชื่อ',
  tel: 'โทรศัพท์',
  save: 'บันทึก',
  clear: 'ชัดเจน',
  cancel: 'ยกเลิก',
  confirm: 'ยืนยัน',
  delete: 'ลบ',
  loading: 'กำลังโหลด...',
  noCoupon: 'ไม่มีคูปอง',
  nameEmpty: 'กรุณากรอกชื่อของคุณ',
  addContact: 'เพิ่มผู้ติดต่อ',
  telInvalid: 'กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง',
  vanCalendar: {
    end: 'จบ',
    start: 'เริ่ม',
    title: 'การเลือกวันที่',
    weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
    monthTitle: (year: number, month: number) => `${year}ปี${month}เดือน`,
    rangePrompt: (maxRange: number) =>
      `จำนวนวันที่เลือกต้องไม่เกิน ${maxRange} วัน`,
  },
  vanCascader: {
    select: 'โปรดเลือก',
  },
  vanPagination: {
    prev: 'หน้าที่แล้ว',
    next: 'หน้าต่อไป',
  },
  vanPullRefresh: {
    pulling: 'ดึงลงเพื่อรีเฟรช...',
    loosing: 'ปล่อยเพื่อรีเฟรช...',
  },
  vanSubmitBar: {
    label: 'รวม:',
  },
  vanCoupon: {
    unlimited: 'ไม่ จำกัด',
    discount: (discount: number) => `ลด${discount}`,
    condition: (condition: number) => `มีจำหน่ายในราคา ${condition} กว่าหยวน`,
  },
  vanCouponCell: {
    title: 'คูปอง',
    count: (count: number) => `มีรูปภาพ ${count} รูป`,
  },
  vanCouponList: {
    exchange: 'แลกเปลี่ยน',
    close: 'ไม่ได้ใช้',
    enable: 'พร้อมใช้งาน',
    disabled: 'ไม่พร้อมใช้งาน',
    placeholder: 'กรุณากรอกรหัสคูปอง',
  },
  vanAddressEdit: {
    area: 'พื้นที่',
    areaEmpty: 'โปรดเลือกภูมิภาค',
    addressEmpty: 'กรุณากรอกที่อยู่โดยละเอียด',
    addressDetail: 'ที่อยู่',
    defaultAddress: 'ตั้งเป็นที่อยู่จัดส่งเริ่มต้น',
  },
  vanAddressList: {
    add: 'เพิ่มที่อยู่',
  },
};
