<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-cell
        is-link
        :title="$t('selectSingle')"
        :value="formatFullDate(date.selectSingle)"
        @click="show('single', 'selectSingle')"
      />

      <van-cell
        is-link
        :title="$t('selectRange')"
        :value="formatRange(date.selectRange)"
        @click="show('range', 'selectRange')"
      />
    </demo-block>

    <demo-block :title="$t('quickSelect')">
      <van-cell
        is-link
        :title="$t('selectSingle')"
        :value="formatFullDate(date.quickSelect1)"
        @click="show('single', 'quickSelect1')"
      />

      <van-cell
        is-link
        :title="$t('selectRange')"
        :value="formatRange(date.quickSelect2)"
        @click="show('range', 'quickSelect2')"
      />
    </demo-block>

    <demo-block :title="$t('customCalendar')">
      <van-cell
        is-link
        :title="$t('customRange')"
        :value="formatFullDate(date.customRange)"
        @click="show('single', 'customRange')"
      />

      <van-cell
        is-link
        :title="$t('customConfirm')"
        :value="formatRange(date.customConfirm)"
        @click="show('range', 'customConfirm')"
      />
    </demo-block>

    <van-calendar
      v-model="showCalendar"
      :type="type"
      :min-date="minDate"
      :max-date="maxDate"
      :show-confirm="showConfirm"
      :confirm-text="confirmText"
      :confirm-disabled-text="confirmDisabledText"
      @confirm="onConfirm"
    />
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      selectSingle: '选择单个日期',
      selectRange: '选择日期区间',
      quickSelect: '快捷选择',
      confirmText: '完成',
      customRange: '自定义范围',
      customConfirm: '自定义按钮文字',
      customCalendar: '自定义日历',
      confirmDisabledText: '请选择结束时间'
    },
    'en-US': {
      selectSingle: 'Select Single Date',
      selectRange: 'Select Date Range',
      quickSelect: 'Quick Select',
      confirmText: 'OK',
      customRange: 'Custom Range',
      customConfirm: 'Custom Confirm Text',
      customCalendar: 'Custom Calendar',
      confirmDisabledText: 'Select End Time'
    }
  },

  data() {
    return {
      date: {
        selectSingle: null,
        selectRange: [],
        quickSelect1: null,
        quickSelect2: [],
        customConfirm: [],
        customRange: null
      },
      type: 'single',
      minDate: undefined,
      maxDate: undefined,
      showConfirm: false,
      showCalendar: false,
      confirmText: undefined,
      confirmDisabledText: undefined,
    };
  },

  methods: {
    resetSettings() {
      this.minDate = undefined;
      this.maxDate = undefined;
      this.showConfirm = true;
      this.confirmText = undefined;
      this.confirmDisabledText = undefined;
    },

    show(type, id) {
      this.resetSettings();
      this.id = id;
      this.type = type;
      this.showCalendar = true;

      switch (id) {
        case 'quickSelect1':
        case 'quickSelect2':
          this.showConfirm = false;
          break;
        case 'customConfirm':
          this.confirmText = this.$t('confirmText');
          this.confirmDisabledText = this.$t('confirmDisabledText');
          break;
        case 'customRange':
          this.minDate = new Date(2010, 0, 1);
          this.maxDate = new Date(2010, 0, 31);
          break;
      }
    },

    formatDate(date) {
      if (date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      }
    },

    formatFullDate(date) {
      if (date) {
        return `${date.getFullYear()}/${this.formatDate(date)}`;
      }
    },

    formatRange(dateRange) {
      if (dateRange.length) {
        const [start, end] = dateRange;
        return `${this.formatDate(start)} - ${this.formatDate(end)}`;
      }
    },

    onConfirm(date) {
      this.showCalendar = false;
      this.date[this.id] = date;
    }
  }
};
</script>
