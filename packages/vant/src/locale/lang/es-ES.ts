export default {
  name: 'Nombre',
  tel: 'Teléfono',
  save: 'Guardar',
  clear: 'Claro',
  cancel: 'Cancelar',
  confirm: 'Confirmar',
  delete: 'Eliminar',
  loading: 'Cargando...',
  noCoupon: 'Sin cupones',
  nameEmpty: 'Por favor rellena el nombre',
  addContact: 'Añadi contacto',
  telInvalid: 'Teléfono inválido',
  vanCalendar: {
    end: 'Fin',
    start: 'Inicio',
    title: 'Calendario',
    weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Elija no más de ${maxRange} días`,
  },
  vanCascader: {
    select: 'Seleccione',
  },
  vanPagination: {
    prev: 'Anterior',
    next: 'Siguiente',
  },
  vanPullRefresh: {
    pulling: 'Tira para recargar...',
    loosing: 'Suelta para recargar...',
  },
  vanSubmitBar: {
    label: 'Total:',
  },
  vanCoupon: {
    unlimited: 'Ilimitado',
    discount: (discount: number) => `${discount * 10}% de descuento`,
    condition: (condition: number) => `Al menos ${condition}`,
  },
  vanCouponCell: {
    title: 'Cupón',
    count: (count: number) => `You have ${count} coupons`,
  },
  vanCouponList: {
    exchange: 'Intercambio',
    close: 'Cerrar',
    enable: 'Disponible',
    disabled: 'No disponible',
    placeholder: 'Código del cupón',
  },
  vanAddressEdit: {
    area: 'Área',
    areaEmpty: 'Por favor selecciona una área de recogida',
    addressEmpty: 'La dirección no puede estar vacia',
    addressDetail: 'Dirección',
    defaultAddress: 'Establecer como dirección por defecto',
  },
  vanAddressList: {
    add: 'Anadir dirección',
  },
};
