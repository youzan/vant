import { createNamespace } from '../../utils';
import { t, bem, compareDay, formatMonthTitle, ROW_HEIGHT } from '../utils';
import { getMonthEndDay } from '../../datetime-picker/utils';

const [createComponent] = createNamespace('calendar-month');

export default createComponent({
  props: {
    date: Date,
    type: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    showTitle: Boolean,
    rowHeight: Number,
    formatter: Function,
    currentDate: [Date, Array]
  },

  data() {
    return {
      visible: false
    };
  },

  computed: {
    title() {
      return formatMonthTitle(this.date);
    },

    offset() {
      const day = this.date.getDay();
      return day > 0 ? day - 1 : 6;
    },

    totalDay() {
      return getMonthEndDay(this.date.getFullYear(), this.date.getMonth() + 1);
    },

    monthStyle() {
      if (!this.visible) {
        const padding =
          Math.ceil((this.totalDay + this.offset) / 7) * this.rowHeight;

        return {
          paddingBottom: `${padding}px`
        };
      }
    },

    days() {
      if (!this.visible) {
        return null;
      }

      const days = [];
      const year = this.date.getFullYear();
      const month = this.date.getMonth();

      for (let day = 1; day <= this.totalDay; day++) {
        const date = new Date(year, month, day);
        const type = this.getDayType(date);

        let config = {
          date,
          type,
          text: day,
          bottomInfo: this.getBottomInfo(type)
        };

        if (this.formatter) {
          config = this.formatter(config);
        }

        days.push(config);
      }

      return days;
    }
  },

  mounted() {
    this.height = this.$el.getBoundingClientRect().height;
  },

  methods: {
    getDayType(day) {
      const { type, minDate, maxDate, currentDate } = this;

      if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
        return 'disabled';
      }

      if (type === 'single') {
        return compareDay(day, currentDate) === 0 ? 'selected' : '';
      }

      if (type === 'range') {
        const [startDay, endDay] = this.currentDate;

        if (!startDay) {
          return;
        }

        const compareToStart = compareDay(day, startDay);
        if (compareToStart === 0) {
          return 'start';
        }

        if (!endDay) {
          return;
        }

        const compareToEnd = compareDay(day, endDay);
        if (compareToEnd === 0) {
          return 'end';
        }

        if (compareToStart > 0 && compareToEnd < 0) {
          return 'middle';
        }
      }
    },

    getBottomInfo(type) {
      if (type === 'start') {
        return t('start');
      }

      if (type === 'end') {
        return t('end');
      }
    },

    getDayStyle(index) {
      const style = {};

      if (index === 0) {
        style.marginLeft = `${(100 * this.offset) / 7}%`;
      }

      if (this.rowHeight !== ROW_HEIGHT) {
        style.height = `${this.rowHeight}px`;
      }

      return style;
    },

    genTitle() {
      if (this.showTitle) {
        return <div class={bem('month-title')}>{this.title}</div>;
      }
    },

    genMark() {
      if (this.showMark) {
        return <div class={bem('month-mark')}>{this.date.getMonth() + 1}</div>;
      }
    },

    genDays() {
      if (this.visible) {
        return (
          <div class={bem('days')}>
            {this.genMark()}
            {this.days.map(this.genDay)}
          </div>
        );
      }
    },

    genDay(item, index) {
      const { type, topInfo, bottomInfo } = item;
      const style = this.getDayStyle(index);

      const onClick = () => {
        if (type !== 'disabled') {
          this.$emit('click', item);
        }
      };

      if (type === 'selected') {
        return (
          <div style={style} class={bem('day')} onClick={onClick}>
            <div class={bem('selected-day')}>{item.text}</div>
          </div>
        );
      }

      const TopInfo = topInfo && <div class={bem('top-info')}>{topInfo}</div>;

      const BottomInfo = bottomInfo && (
        <div class={bem('bottom-info')}>{bottomInfo}</div>
      );

      return (
        <div
          style={style}
          class={[bem('day', [type]), item.className]}
          onClick={onClick}
        >
          {TopInfo}
          {item.text}
          {BottomInfo}
        </div>
      );
    }
  },

  render() {
    return (
      <div class={bem('month')} style={this.monthStyle}>
        {this.genTitle()}
        {this.genDays()}
      </div>
    );
  }
});
