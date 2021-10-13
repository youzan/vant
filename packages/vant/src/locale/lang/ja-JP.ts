export default {
  name: 'お名前',
  tel: '電話番号',
  save: 'セーブ',
  confirm: '確認',
  cancel: 'キャンセル',
  delete: '削除',
  loading: '読み込み中...',
  noCoupon: 'クーポンはありません',
  nameEmpty: '名前を入力してください',
  telInvalid: '正しい電話番号を入力してください',
  vanCalendar: {
    end: '終了',
    start: '開始',
    title: '日付選択',
    confirm: '確認',
    startEnd: '開始/終了',
    weekdays: ['日', '月', '火', '水', '木', '金', '土'],
    monthTitle: (year: number, month: number) => `${year}年${month}月`,
    rangePrompt: (maxRange: number) => `${maxRange}日まで選択`,
  },
  vanCascader: {
    select: '選択する',
  },
  vanContactCard: {
    addText: '連絡先を追加',
  },
  vanContactList: {
    addText: '新しい連絡先を追加',
  },
  vanPagination: {
    prev: '前のページ',
    next: '次のページ',
  },
  vanPullRefresh: {
    pulling: 'プルダウンして更新...',
    loosing: 'リリース時に更新...',
  },
  vanSubmitBar: {
    label: '合計：',
  },
  vanCoupon: {
    unlimited: '入場ありません',
    discount: (discount: number) => `${10 - discount}割引`,
    condition: (condition: number) => `${condition}円以上で利用可能`,
  },
  vanCouponCell: {
    title: 'クーポン',
    count: (count: number) => `${count}枚が利用可能`,
  },
  vanCouponList: {
    exchange: '両替',
    close: 'クーポンを使用しません',
    enable: '利用可能',
    disabled: '利用できません',
    placeholder: '割引コードを入力してください',
  },
  vanAddressEdit: {
    area: '地域',
    postal: '郵便番号',
    areaEmpty: '地域を選択してください',
    addressEmpty: '詳しい住所を入力してください',
    postalEmpty: '間違った郵便番号',
    defaultAddress: 'デフォルトの住所に設定',
  },
  vanAddressEditDetail: {
    label: '詳しい住所',
    placeholder: '番地、階の部屋番号など',
  },
  vanAddressList: {
    add: '住所を追加',
  },
};
