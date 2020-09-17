// Utils
import { pick } from '../utils';
import { isDate } from '../utils/validate/date';
import { getScrollTop } from '../utils/dom/scroll';
import {
  t,
  bem,
  copyDate,
  copyDates,
  getNextDay,
  compareDay,
  calcDateNum,
  compareMonth,
  createComponent,
  getDayByOffset,
} from './utils';

// Components
import Popup from '../popup';
import Button from '../button';
import Toast from '../toast';
import Month from './components/Month';
import Header from './components/Header';

export default createComponent({
  props: {
    show: Boolean,
    title: String,
    color: String,
    readonly: Boolean,
    teleport: [String, Object],
    formatter: Function,
    rowHeight: [Number, String],
    confirmText: String,
    rangePrompt: String,
    defaultDate: [Date, Array],
    allowSameDay: Boolean,
    confirmDisabledText: String,
    type: {
      type: String,
      default: 'single',
    },
    round: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: 'bottom',
    },
    poppable: {
      type: Boolean,
      default: true,
    },
    maxRange: {
      type: [Number, String],
      default: null,
    },
    lazyRender: {
      type: Boolean,
      default: true,
    },
    showMark: {
      type: Boolean,
      default: true,
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
    showConfirm: {
      type: Boolean,
      default: true,
    },
    showSubtitle: {
      type: Boolean,
      default: true,
    },
    closeOnPopstate: {
      type: Boolean,
      default: true,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
    minDate: {
      type: Date,
      validator: isDate,
      default: () => new Date(),
    },
    maxDate: {
      type: Date,
      validator: isDate,
      default() {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
      },
    },
    firstDayOfWeek: {
      type: [Number, String],
      default: 0,
      validator: (val) => val >= 0 && val <= 6,
    },
  },

  emits: ['select', 'confirm', 'unselect', 'month-show', 'update:show'],

  data() {
    this.monthRefs = [];
    return {
      subtitle: '',
      currentDate: this.getInitialDate(),
      realRowHeight: 0,
    };
  },

  computed: {
    months() {
      const months = [];
      const cursor = new Date(this.minDate);

      cursor.setDate(1);

      do {
        months.push(new Date(cursor));
        cursor.setMonth(cursor.getMonth() + 1);
      } while (compareMonth(cursor, this.maxDate) !== 1);

      return months;
    },

    buttonDisabled() {
      const { type, currentDate } = this;

      if (currentDate) {
        if (type === 'range') {
          return !currentDate[0] || !currentDate[1];
        }
        if (type === 'multiple') {
          return !currentDate.length;
        }
      }

      return !currentDate;
    },

    dayOffset() {
      return this.firstDayOfWeek ? this.firstDayOfWeek % 7 : 0;
    },
  },

  watch: {
    show: 'init',
    type: 'reset',

    defaultDate(val) {
      this.currentDate = val;
      this.scrollIntoView();
    },
  },

  mounted() {
    this.init();
  },

  activated() {
    this.init();
  },

  methods: {
    // @exposed-api
    reset() {
      this.currentDate = this.getInitialDate();
      this.scrollIntoView();
    },

    init() {
      if (this.poppable && !this.show) {
        return;
      }

      this.$nextTick(() => {
        // add Math.floor to avoid decimal height issues
        // https://github.com/youzan/vant/issues/5640
        this.bodyHeight = Math.floor(
          this.$refs.body.getBoundingClientRect().height
        );
        this.onScroll();
      });
      this.scrollIntoView();
    },

    // scroll to current month
    scrollIntoView() {
      this.$nextTick(() => {
        const { currentDate } = this;

        if (!currentDate) {
          return;
        }

        const targetDate =
          this.type === 'single' ? currentDate : currentDate[0];
        const displayed = this.show || !this.poppable;

        /* istanbul ignore if */
        if (!targetDate || !displayed) {
          return;
        }

        this.months.some((month, index) => {
          if (compareMonth(month, targetDate) === 0) {
            const { body } = this.$refs;
            this.monthRefs[index].scrollIntoView(body);
            return true;
          }

          return false;
        });
      });
    },

    getInitialDate() {
      const { type, minDate, maxDate, defaultDate } = this;

      if (defaultDate === null) {
        return defaultDate;
      }

      let defaultVal = new Date();

      if (compareDay(defaultVal, minDate) === -1) {
        defaultVal = minDate;
      } else if (compareDay(defaultVal, maxDate) === 1) {
        defaultVal = maxDate;
      }

      if (type === 'range') {
        const [startDay, endDay] = defaultDate || [];
        return [startDay || defaultVal, endDay || getNextDay(defaultVal)];
      }

      if (type === 'multiple') {
        return defaultDate || [defaultVal];
      }

      return defaultDate || defaultVal;
    },

    // calculate the position of the elements
    // and find the elements that needs to be rendered
    onScroll() {
      const { body } = this.$refs;
      const { months, monthRefs } = this;
      const top = getScrollTop(body);
      const heights = months.map(
        (item, index) => monthRefs[index].height.value
      );
      const heightSum = heights.reduce((a, b) => a + b, 0);

      // iOS scroll bounce may exceed the range
      let bottom = top + this.bodyHeight;
      if (bottom > heightSum && top > 0) {
        bottom = heightSum;
      }

      let height = 0;
      let currentMonth;

      // add offset to avoid rem accuracy issues
      // see: https://github.com/youzan/vant/issues/6929
      const viewportOffset = 50;
      const viewportTop = top - viewportOffset;
      const viewportBottom = bottom + viewportOffset;

      for (let i = 0; i < months.length; i++) {
        const visible =
          height <= viewportBottom && height + heights[i] >= viewportTop;

        if (visible && !currentMonth) {
          currentMonth = monthRefs[i];
        }

        if (!monthRefs[i].visible && visible) {
          this.$emit('month-show', {
            date: monthRefs[i].getDate(),
            title: monthRefs[i].getTitle(),
          });
        }

        monthRefs[i].setVisible(visible);
        height += heights[i];
      }

      /* istanbul ignore else */
      if (currentMonth) {
        this.subtitle = currentMonth.getTitle();
      }
    },

    onClickDay(item) {
      if (this.readonly) {
        return;
      }

      const { date } = item;
      const { type, currentDate } = this;

      if (type === 'range') {
        if (!currentDate) {
          this.select([date, null]);
          return;
        }

        const [startDay, endDay] = currentDate;

        if (startDay && !endDay) {
          const compareToStart = compareDay(date, startDay);

          if (compareToStart === 1) {
            this.select([startDay, date], true);
          } else if (compareToStart === -1) {
            this.select([date, null]);
          } else if (this.allowSameDay) {
            this.select([date, date], true);
          }
        } else {
          this.select([date, null]);
        }
      } else if (type === 'multiple') {
        if (!currentDate) {
          this.select([date]);
          return;
        }

        let selectedIndex;
        const selected = this.currentDate.some((dateItem, index) => {
          const equal = compareDay(dateItem, date) === 0;
          if (equal) {
            selectedIndex = index;
          }
          return equal;
        });

        if (selected) {
          const [unselectedDate] = currentDate.splice(selectedIndex, 1);
          this.$emit('unselect', copyDate(unselectedDate));
        } else if (this.maxRange && currentDate.length >= this.maxRange) {
          Toast(this.rangePrompt || t('rangePrompt', this.maxRange));
        } else {
          this.select([...currentDate, date]);
        }
      } else {
        this.select(date, true);
      }
    },

    togglePopup(val) {
      this.$emit('update:show', val);
    },

    select(date, complete) {
      const emit = (date) => {
        this.currentDate = date;
        this.$emit('select', copyDates(this.currentDate));
      };

      if (complete && this.type === 'range') {
        const valid = this.checkRange(date);

        if (!valid) {
          // auto selected to max range if showConfirm
          if (this.showConfirm) {
            emit([date[0], getDayByOffset(date[0], this.maxRange - 1)]);
          } else {
            emit(date);
          }
          return;
        }
      }

      emit(date);

      if (complete && !this.showConfirm) {
        this.onConfirm();
      }
    },

    checkRange(date) {
      const { maxRange, rangePrompt } = this;

      if (maxRange && calcDateNum(date) > maxRange) {
        Toast(rangePrompt || t('rangePrompt', maxRange));
        return false;
      }

      return true;
    },

    onConfirm() {
      this.$emit('confirm', copyDates(this.currentDate));
    },

    onUpdateHeight(height) {
      this.realRowHeight = height;
    },

    genMonth(date, index) {
      const showMonthTitle = index !== 0 || !this.showSubtitle;
      return (
        <Month
          ref={(val) => {
            this.monthRefs[index] = val;
          }}
          date={date}
          showMonthTitle={showMonthTitle}
          firstDayOfWeek={this.dayOffset}
          {...pick(this, [
            'type',
            'color',
            'minDate',
            'maxDate',
            'showMark',
            'formatter',
            'rowHeight',
            'lazyRender',
            'currentDate',
            'showSubtitle',
            'allowSameDay',
            'realRowHeight',
          ])}
          onClick={this.onClickDay}
          onUpdate-height={this.onUpdateHeight}
        />
      );
    },

    genFooterContent() {
      if (this.$slots.footer) {
        return this.$slots.footer();
      }

      if (this.showConfirm) {
        const text = this.buttonDisabled
          ? this.confirmDisabledText
          : this.confirmText;

        return (
          <Button
            round
            block
            type="danger"
            color={this.color}
            class={bem('confirm')}
            disabled={this.buttonDisabled}
            nativeType="button"
            onClick={this.onConfirm}
          >
            {text || t('confirm')}
          </Button>
        );
      }
    },

    genFooter() {
      return (
        <div class={bem('footer', { unfit: !this.safeAreaInsetBottom })}>
          {this.genFooterContent()}
        </div>
      );
    },

    genCalendar() {
      return (
        <div class={bem()}>
          <Header
            v-slots={{
              title: this.$slots.title,
            }}
            title={this.title}
            showTitle={this.showTitle}
            subtitle={this.subtitle}
            showSubtitle={this.showSubtitle}
            firstDayOfWeek={this.dayOffset}
          />
          <div ref="body" class={bem('body')} onScroll={this.onScroll}>
            {this.months.map(this.genMonth)}
          </div>
          {this.genFooter()}
        </div>
      );
    },
  },

  render() {
    if (this.poppable) {
      return (
        <Popup
          show={this.show}
          class={bem('popup')}
          round={this.round}
          position={this.position}
          closeable={this.showTitle || this.showSubtitle}
          teleport={this.teleport}
          closeOnPopstate={this.closeOnPopstate}
          closeOnClickOverlay={this.closeOnClickOverlay}
          {...{ 'onUpdate:show': this.togglePopup }}
        >
          {this.genCalendar()}
        </Popup>
      );
    }

    return this.genCalendar();
  },
});
