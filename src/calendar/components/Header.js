import { createNamespace } from '../../utils';
import { t, bem } from '../utils';
import Popup from '../../popup';
import Button from '../../button';

import { MonthPicker } from 'vue-month-picker';

const [createComponent] = createNamespace('calendar-header');

export default createComponent({
  props: {
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number,
    setCurrentDate: Function,
    scrollToDate: Function,
    minDate: Date,
    maxDate: Date,
    currentDate: null,
    defaultMonthForSelect: null
  },
  data() {
    return {
      pickDate: null,
    }
  },
  computed: {
    currentYear() {
      if (this.currentDate) {
        return this.currentDate.getFullYear()
      }
      if (this.defaultMonthForSelect) {
        return this.defaultMonthForSelect.getFullYear()
      }
    },
    currentMonth() {
      if (this.currentDate) {
        return this.currentDate.getMonth() + 1
      }
      if (this.defaultMonthForSelect) {
        return this.defaultMonthForSelect.getMonth() + 1
      }
    }
  },
  methods: {
    onInput(date) {
      console.log(date, 888);
      this.pickDate = `${date.year}/${date.monthIndex}`
    },
    togglePick() {
      this.$refs.popforCalendarHead.togglePModal();
    },
    genTitle() {
      if (this.showTitle) {
        const title = this.slots('title') || this.title || t('title');
        return <div class={bem('header-title')}>{title}</div>;
      }
    },

    genSubtitle() {
      if (this.showSubtitle) {
        return <div class={bem('header-subtitle')}>{this.subtitle}</div>;
      }
    },

    genWeekDays() {
      const weekdays = t('weekdays');

      const { firstDayOfWeek } = this;

      const renderWeekDays = [
        ...weekdays.slice(firstDayOfWeek, 7),
        ...weekdays.slice(0, firstDayOfWeek),
      ];

      return (
        <div class={bem('weekdays')}>
          {renderWeekDays.map((item) => (
            <span class={bem('weekday')}>{item}</span>
          ))}
        </div>
      );
    },
  },

  render() {
    return (
      <div class={bem('header')}>
        <Popup
          safe-area-inset-bottom
          round
          ref="popforCalendarHead"
        >
          <MonthPicker
            default-year={this.currentYear}
            default-month={this.currentMonth}
            lang="zh"
            clearable
            show-year
            editableYear={false}
            class={bem('yearmonth')}
            maxDate={this.maxDate}
            minDate={this.minDate}
            onInput={this.onInput}
          />
          <div style="margin-top: 10px;margin-bottom: 10px;display: flex;justify-content: space-around;">
            <Button
              style="margin-right: 20px;"
              text={'取消'}
              onClick={() => {
                this.$refs.popforCalendarHead.togglePModal();
              }}
            />
            <Button
              text={'确定'}
              onClick={() => {
                this.$refs.popforCalendarHead.togglePModal();
                this.scrollToDate(new Date(this.pickDate));
              }}
            />
          </div>
        </Popup>
        {this.genTitle()}
        {this.genSubtitle()}
        {this.genWeekDays()}
      </div>
    );
  },
});
