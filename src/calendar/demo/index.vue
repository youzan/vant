<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell
      is-link
      :title="t('selectSingle')"
      :value="formatFullDate(date.selectSingle)"
      @click="show('single', 'selectSingle')"
    />

    <van-cell
      is-link
      :title="t('selectMultiple')"
      :value="formatMultiple(date.selectMultiple)"
      @click="show('multiple', 'selectMultiple')"
    />

    <van-cell
      is-link
      :title="t('selectRange')"
      :value="formatRange(date.selectRange)"
      @click="show('range', 'selectRange')"
    />
  </demo-block>

  <demo-block card :title="t('quickSelect')">
    <van-cell
      is-link
      :title="t('selectSingle')"
      :value="formatFullDate(date.quickSelect1)"
      @click="show('single', 'quickSelect1')"
    />

    <van-cell
      is-link
      :title="t('selectRange')"
      :value="formatRange(date.quickSelect2)"
      @click="show('range', 'quickSelect2')"
    />
  </demo-block>

  <demo-block card :title="t('customCalendar')">
    <van-cell
      is-link
      :title="t('customColor')"
      :value="formatRange(date.customColor)"
      @click="show('range', 'customColor')"
    />

    <van-cell
      is-link
      :title="t('customRange')"
      :value="formatFullDate(date.customRange)"
      @click="show('single', 'customRange')"
    />

    <van-cell
      is-link
      :title="t('customConfirm')"
      :value="formatRange(date.customConfirm)"
      @click="show('range', 'customConfirm')"
    />

    <van-cell
      is-link
      :title="t('customDayText')"
      :value="formatRange(date.customDayText)"
      @click="show('range', 'customDayText')"
    />

    <van-cell
      is-link
      :title="t('customPosition')"
      :value="formatFullDate(date.customPosition)"
      @click="show('single', 'customPosition')"
    />

    <van-cell
      is-link
      :title="t('maxRange')"
      :value="formatRange(date.maxRange)"
      @click="show('range', 'maxRange')"
    />

    <van-cell
      is-link
      :title="t('firstDayOfWeek')"
      @click="show('single', 'firstDayOfWeek')"
    />
  </demo-block>

  <demo-block card :title="t('tiledDisplay')">
    <van-calendar
      :title="t('calendar')"
      :poppable="false"
      :show-confirm="false"
      :min-date="tiledMinDate"
      :max-date="tiledMaxDate"
      :default-date="tiledMinDate"
      :style="{ height: '500px' }"
    />
  </demo-block>

  <van-calendar
    v-model:show="showCalendar"
    :type="type"
    :color="color"
    :round="round"
    :position="position"
    :min-date="minDate"
    :max-date="maxDate"
    :max-range="maxRange"
    :formatter="formatter"
    :show-confirm="showConfirm"
    :confirm-text="confirmText"
    :confirm-disabled-text="confirmDisabledText"
    :first-day-of-week="firstDayOfWeek"
    @confirm="onConfirm"
  />
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    in: '入店',
    out: '离店',
    today: '今天',
    laborDay: '劳动节',
    youthDay: '青年节',
    calendar: '日历',
    maxRange: '日期区间最大范围',
    selectCount: (count) => `选择了 ${count} 个日期`,
    selectSingle: '选择单个日期',
    selectMultiple: '选择多个日期',
    selectRange: '选择日期区间',
    quickSelect: '快捷选择',
    confirmText: '完成',
    customColor: '自定义颜色',
    customRange: '自定义日期范围',
    customConfirm: '自定义按钮文字',
    customDayText: '自定义日期文案',
    customPosition: '自定义弹出位置',
    customCalendar: '自定义日历',
    confirmDisabledText: '请选择结束时间',
    firstDayOfWeek: '自定义周起始日',
    tiledDisplay: '平铺展示',
  },
  'en-US': {
    in: 'In',
    out: 'Out',
    today: 'Today',
    laborDay: 'Labor day',
    youthDay: 'Youth Day',
    calendar: 'Calendar',
    maxRange: 'Max Range',
    selectCount: (count) => `${count} dates selected`,
    selectSingle: 'Select Single Date',
    selectMultiple: 'Select Multiple Date',
    selectRange: 'Select Date Range',
    quickSelect: 'Quick Select',
    confirmText: 'OK',
    customColor: 'Custom Color',
    customRange: 'Custom Date Range',
    customConfirm: 'Custom Confirm Text',
    customDayText: 'Custom Day Text',
    customPosition: 'Custom Position',
    customCalendar: 'Custom Calendar',
    firstDayOfWeek: 'Custom First Day Of Week',
    confirmDisabledText: 'Select End Time',
    tiledDisplay: 'Tiled display',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const state = reactive({
      date: {
        maxRange: [],
        selectSingle: null,
        selectRange: [],
        selectMultiple: [],
        quickSelect1: null,
        quickSelect2: [],
        customColor: [],
        customConfirm: [],
        customRange: null,
        customDayText: [],
        customPosition: null,
      },
      type: 'single',
      round: true,
      color: undefined,
      minDate: undefined,
      maxDate: undefined,
      maxRange: undefined,
      position: undefined,
      formatter: undefined,
      showConfirm: false,
      showCalendar: false,
      tiledMinDate: new Date(2012, 0, 10),
      tiledMaxDate: new Date(2012, 2, 20),
      confirmText: undefined,
      confirmDisabledText: undefined,
      firstDayOfWeek: 0,
    });

    const resetSettings = () => {
      state.round = true;
      state.color = undefined;
      state.minDate = undefined;
      state.maxDate = undefined;
      state.maxRange = undefined;
      state.position = undefined;
      state.formatter = undefined;
      state.showConfirm = true;
      state.confirmText = undefined;
      state.confirmDisabledText = undefined;
      state.firstDayOfWeek = 0;
    };

    const dayFormatter = (day) => {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (month === 5) {
        if (date === 1) {
          day.topInfo = t('laborDay');
        } else if (date === 4) {
          day.topInfo = t('youthDay');
        } else if (date === 11) {
          day.text = t('today');
        }
      }

      if (day.type === 'start') {
        day.bottomInfo = t('in');
      } else if (day.type === 'end') {
        day.bottomInfo = t('out');
      }

      return day;
    };

    const show = (type, id) => {
      resetSettings();
      state.id = id;
      state.type = type;
      state.showCalendar = true;

      switch (id) {
        case 'quickSelect1':
        case 'quickSelect2':
          state.showConfirm = false;
          break;
        case 'customColor':
          state.color = '#1989fa';
          break;
        case 'customConfirm':
          state.confirmText = t('confirmText');
          state.confirmDisabledText = t('confirmDisabledText');
          break;
        case 'customRange':
          state.minDate = new Date(2010, 0, 1);
          state.maxDate = new Date(2010, 0, 31);
          break;
        case 'customDayText':
          state.minDate = new Date(2010, 4, 1);
          state.maxDate = new Date(2010, 4, 31);
          state.formatter = dayFormatter;
          break;
        case 'customPosition':
          state.round = false;
          state.position = 'right';
          break;
        case 'maxRange':
          state.maxRange = 3;
          break;
        case 'firstDayOfWeek':
          state.firstDayOfWeek = 1;
          break;
      }
    };

    const formatDate = (date) => {
      if (date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      }
    };

    const formatFullDate = (date) => {
      if (date) {
        return `${date.getFullYear()}/${formatDate(date)}`;
      }
    };

    const formatMultiple = (dates) => {
      if (dates.length) {
        return t('selectCount', dates.length);
      }
    };

    const formatRange = (dateRange) => {
      if (dateRange.length) {
        const [start, end] = dateRange;
        return `${formatDate(start)} - ${formatDate(end)}`;
      }
    };

    const onConfirm = (date) => {
      state.showCalendar = false;
      state.date[state.id] = date;
    };

    return {
      ...toRefs(state),
      t,
      show,
      onConfirm,
      formatDate,
      formatRange,
      formatFullDate,
      formatMultiple,
    };
  },
};
</script>
