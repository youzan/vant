export default {
  name: 'ชื่อ',
  tel: 'โทรศัพท์',
  save: 'บันทึก',
  confirm: 'ยืนยัน',
  cancel: 'ยกเลิก',
  delete: 'ลบ',
  complete: 'ดำเนินการ',
  loading: 'กำลังโหลด...',
  telEmpty: 'กรุณากรอกข้อมูลในโทรศัพท์',
  nameEmpty: 'กรุณากรอกชื่อของคุณ',
  nameInvalid: 'กรุณากรอกชื่อที่ถูกต้อง',
  confirmDelete: 'คุณแน่ใจว่าต้องการลบ',
  telInvalid: 'กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง',
  vanCalendar: {
    end: 'จบ',
    start: 'เริ่ม',
    title: 'การเลือกวันที่',
    confirm: 'ตกลง',
    startEnd: 'เริ่ม/เริ่ม',
    weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
    monthTitle: (year: number, month: number) => `${year}ปี${month}เดือน`,
    rangePrompt: (maxRange: number) =>
      `จำนวนวันที่เลือกต้องไม่เกิน ${maxRange} วัน`,
  },
  vanCascader: {
    select: 'โปรดเลือก',
  },
  vanContactCard: {
    addText: 'เพิ่มผู้ติดต่อ',
  },
  vanContactList: {
    addText: 'รายชื่อติดต่อใหม่',
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
    label: 'รวม：',
  },
  vanCoupon: {
    unlimited: 'ไม่มีเกณฑ์การใช้งาน',
    discount: (discount: number) => `ลด${discount}`,
    condition: (condition: number) => `มีจำหน่ายในราคา ${condition} กว่าหยวน`,
  },
  vanCouponCell: {
    title: 'คูปอง',
    tips: 'ไม่สามารถใช้ได้',
    count: (count: number) => `มีรูปภาพ ${count} รูป`,
  },
  vanCouponList: {
    empty: 'ไม่มีคูปอง',
    exchange: 'แลกเปลี่ยน',
    close: 'ห้ามใช้คูปอง',
    enable: 'พร้อมใช้งาน',
    disabled: 'ไม่พร้อมใช้งาน',
    placeholder: 'กรุณากรอกรหัสคูปอง',
  },
  vanAddressEdit: {
    area: 'พื้นที่',
    postal: 'รหัสไปรษณีย์',
    areaEmpty: 'โปรดเลือกภูมิภาค',
    addressEmpty: 'กรุณากรอกที่อยู่โดยละเอียด',
    postalEmpty: 'รูปแบบรหัสไปรษณีย์ไม่ถูกต้อง',
    defaultAddress: 'ตั้งเป็นที่อยู่จัดส่งเริ่มต้น',
    telPlaceholder: 'หมายเลขโทรศัพท์มือถือของผู้รับสินค้า',
    namePlaceholder: 'ชื่อผู้รับ',
    areaPlaceholder: 'เลือกจังหวัด / เมือง / อำเภอ',
  },
  vanAddressEditDetail: {
    label: 'ที่อยู่',
    placeholder: 'เลขที่บ้านเลขที่ห้องชั้นและข้อมูลอื่น ๆ',
  },
  vanAddressList: {
    add: 'เพิ่มที่อยู่',
  },
};
