export default {
  name: 'Nama',
  tel: 'Telepon',
  save: 'Simpan',
  clear: 'Jernih',
  cancel: 'Batal',
  confirm: 'Konfirmasi',
  delete: 'Hapus',
  loading: 'Memuat...',
  noCoupon: 'Tidak ada kupon',
  nameEmpty: 'Silakan isi nama',
  addContact: 'Tambahkan kontak',
  telInvalid: 'Nomor telepon salah format',
  vanCalendar: {
    end: 'Akhir',
    start: 'Mulai',
    title: 'Kalender',
    weekdays: ['minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) =>
      `Pilih tidak lebih dari ${maxRange} hari`,
  },
  vanCascader: {
    select: 'Pilih',
  },
  vanPagination: {
    prev: 'Sebelumnya',
    next: 'Selanjutnya',
  },
  vanPullRefresh: {
    pulling: 'Tarik untuk menyegarkan...',
    loosing: 'Loose untuk menyegarkan...',
  },
  vanSubmitBar: {
    label: 'Jumlah:',
  },
  vanCoupon: {
    unlimited: 'Tidak terbatas',
    discount: (discount: number) => `${discount * 10}% off`,
    condition: (condition: number) => `Setidaknya ${condition}`,
  },
  vanCouponCell: {
    title: 'Kupon',
    count: (count: number) => `Anda memiliki kupon ${count}`,
  },
  vanCouponList: {
    exchange: 'Pertukaran',
    close: 'Tutup',
    enable: 'Tersedia',
    disabled: 'Tidak tersedia',
    placeholder: 'Kode kupon',
  },
  vanAddressEdit: {
    area: 'Daerah',
    areaEmpty: 'Silakan pilih area penerima',
    addressEmpty: 'Alamat tidak boleh kosong',
    addressDetail: 'Alamat',
    defaultAddress: 'Tetapkan sebagai alamat default',
  },
  vanAddressList: {
    add: 'Tambahkan alamat baru',
  },
};
