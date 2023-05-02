export default {
  name: 'ຊື່',
  tel: 'ໂທລະສັບ',
  save: 'ບັນທຶກ',
  clear: 'ຈະແຈ້ງ',
  cancel: 'ຍົກເລີກ',
  confirm: 'ຢຶນຢັນ',
  delete: 'ລືບ',
  loading: 'ກຳລັງໂຫຼດ...',
  noCoupon: 'ບໍ່ມີຄູປອງ',
  nameEmpty: 'ກະລຸນາປ້ອນຊື່',
  addContact: 'ເພີ່ມຜູ້ຕິດຕໍ່',
  telInvalid: 'ເບີໂທລະສັບບໍ່ຖືກຕ້ອງ',
  vanCalendar: {
    end: 'ຈົບ',
    start: 'ເລີ່ມ',
    title: 'ການເລືອກວັນທີ່',
    weekdays: ['ອາ', 'ຈ', 'ອ', 'ພ', 'ພຫ', 'ສ', 'ສ'],
    monthTitle: (year: number, month: number) => `${year}ປີ${month}ເດືອນ`,
    rangePrompt: (maxRange: number) =>
      `ຈຳນອນວັນທີ່ເລືອກຕ້ອງບໍ່ເກີນ ${maxRange} ວັນ`,
  },
  vanCascader: {
    select: 'ກະລຸນາເລືອກ',
  },
  vanPagination: {
    prev: 'ໜ້າທີ່ແລ້ວ',
    next: 'ໜ້າຕໍ່ໄປ',
  },
  vanPullRefresh: {
    pulling: 'ດືງລົງເພື່ອຣີເຟສ...',
    loosing: 'ປ່ອຍເພື່ອຣີເຟສ...',
  },
  vanSubmitBar: {
    label: 'ລວມ:',
  },
  vanCoupon: {
    unlimited: 'ບໍ່ ຈຳກັດ',
    discount: (discount: number) => `ລົດ${discount}`,
    condition: (condition: number) => `ມີຈຳໜ່າຍໃນລາຄາ ${condition} ກວ່າຫຍວນ`,
  },
  vanCouponCell: {
    title: 'ຄູປອງ',
    count: (count: number) => `ມີຮູບພາບ ${count} ຮູບ`,
  },
  vanCouponList: {
    exchange: 'ແລກປ່ຽນ',
    close: 'ບໍ່ໄດ້ໃຊ້',
    enable: 'ພ້ອມໃຊ້ງານ',
    disabled: 'ບໍ່ພ້ອມໃຊ້ງານ',
    placeholder: 'ກະລຸນາປ້ອນຄູປອງ',
  },
  vanAddressEdit: {
    area: 'ພື້ນທີ່',
    areaEmpty: 'ກະລຸນາເລືອກພື້ນທີ່',
    addressEmpty: 'ກະລຸນາປ້ອນທີ່ຢູ່',
    addressDetail: 'ທີ່ຢູ່',
    defaultAddress: 'ຕັ້ງເປັນທີ່ຢູ່ເລີ່ມຕົ້ນ',
  },
  vanAddressList: {
    add: 'ເພີ່ມທີ່ຢູ່',
  },
};
