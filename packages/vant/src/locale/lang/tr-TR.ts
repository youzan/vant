export default {
  name: 'İsim',
  tel: 'Telefon',
  save: 'Kaydet',
  clear: 'Temizle',
  undo: 'Geri Al',
  cancel: 'İptal',
  confirm: 'Onayla',
  delete: 'Sil',
  loading: 'Yükleniyor...',
  noCoupon: 'Kupon yok',
  nameEmpty: 'Lütfen isim girin',
  addContact: 'Yeni kişi ekle',
  telInvalid: 'Geçersiz telefon numarası',
  vanCalendar: {
    end: 'Bitiş',
    start: 'Başlangıç',
    title: 'Takvim',
    weekdays: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `En fazla ${maxRange} gün seçin`,
  },
  vanCascader: {
    select: 'Lütfen seçin',
  },
  vanPagination: {
    prev: 'Önceki',
    next: 'Sonraki',
  },
  vanPullRefresh: {
    pulling: 'Yenilemek için çekin...',
    loosing: 'Yenilemek için bırakın...',
  },
  vanSubmitBar: {
    label: 'Toplam:',
  },
  vanCoupon: {
    unlimited: 'Sınırsız',
    discount: (discount: number) => `%${discount * 10} indirim`,
    condition: (condition: number) => `En az ${condition}`,
  },
  vanCouponCell: {
    title: 'Kupon',
    count: (count: number) => `${count} kuponunuz var`,
  },
  vanCouponList: {
    exchange: 'Kullan',
    close: 'Kapat',
    enable: 'Kullanılabilir',
    disabled: 'Kullanılamaz',
    placeholder: 'Kupon kodu',
  },
  vanAddressEdit: {
    area: 'Bölge',
    areaEmpty: 'Lütfen teslimat bölgesini seçin',
    addressEmpty: 'Adres boş olamaz',
    addressDetail: 'Adres',
    defaultAddress: 'Varsayılan adres olarak ayarla',
  },
  vanAddressList: {
    add: 'Yeni adres ekle',
  },
};
