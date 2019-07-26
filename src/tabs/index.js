import { createNamespace, isDef, addUnit } from '../utils';
import { scrollLeftTo } from './utils';
import { isHidden } from '../utils/dom/style';
import { ParentMixin } from '../mixins/relation';
import { BindEventMixin } from '../mixins/bind-event';
import { setRootScrollTop, getElementTop } from '../utils/dom/scroll';
import Title from './Title';
import Content from './Content';
import Sticky from '../sticky';

const [createComponent, bem] = createNamespace('tabs');

export default createComponent({
  mixins: [
    ParentMixin('vanTabs'),
    BindEventMixin(function (bind) {
      bind(window, 'resize', this.setLine, true);
    })
  ],

  model: {
    prop: 'active'
  },

  props: {
    color: String,
    sticky: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    background: String,
    lineWidth: [Number, String],
    lineHeight: [Number, String],
    titleActiveColor: String,
    titleInactiveColor: String,
    type: {
      type: String,
      default: 'line'
    },
    active: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 0.3
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    lazyRender: {
      type: Boolean,
      default: true
    },
    swipeThreshold: {
      type: Number,
      default: 4
    }
  },

  data() {
    return {
      position: '',
      currentIndex: null,
      lineStyle: {
        backgroundColor: this.color
      }
    };
  },

  computed: {
    // whether the nav is scrollable
    scrollable() {
      return this.children.length > this.swipeThreshold || !this.ellipsis;
    },

    navStyle() {
      return {
        borderColor: this.color,
        background: this.background
      };
    },

    currentName() {
      const activeTab = this.children[this.currentIndex];

      if (activeTab) {
        return activeTab.computedName;
      }
    }
  },

  watch: {
    active(name) {
      if (name !== this.currentName) {
        this.setCurrentIndexByName(name);
      }
    },

    color() {
      this.setLine();
    },

    children() {
      this.setCurrentIndexByName(this.currentName || this.active);
      this.scrollIntoView();
      this.setLine();
    },

    currentIndex() {
      this.scrollIntoView();
      this.setLine();

      // scroll to correct position
      if (this.stickyFixed) {
        setRootScrollTop(Math.ceil(getElementTop(this.$el) - this.offsetTop));
      }
    }
  },

  mounted() {
    this.onShow();
  },

  activated() {
    this.onShow();
    this.setLine();
  },

  methods: {
    onShow() {
      this.$nextTick(() => {
        this.inited = true;
        this.scrollIntoView(true);
      });
    },

    // update nav bar style
    setLine() {
      const shouldAnimate = this.inited;

      this.$nextTick(() => {
        const { titles } = this.$refs;

        if (!titles || !titles[this.currentIndex] || this.type !== 'line' || isHidden(this.$el)) {
          return;
        }

        const title = titles[this.currentIndex].$el;
        const { lineWidth, lineHeight } = this;
        const width = isDef(lineWidth) ? lineWidth : title.offsetWidth / 2;
        const left = title.offsetLeft + title.offsetWidth / 2;

        const lineStyle = {
          width: addUnit(width),
          backgroundColor: this.color,
          transform: `translateX(${left}px) translateX(-50%)`
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = `${this.duration}s`;
        }

        if (isDef(lineHeight)) {
          const height = addUnit(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        this.lineStyle = lineStyle;
      });
    },

    // correct the index of active tab
    setCurrentIndexByName(name) {
      const matched = this.children.filter(tab => tab.computedName === name);
      const defaultIndex = (this.children[0] || {}).index || 0;
      this.setCurrentIndex(matched.length ? matched[0].index : defaultIndex);
    },

    setCurrentIndex(currentIndex) {
      currentIndex = this.findAvailableTab(currentIndex);

      if (isDef(currentIndex) && currentIndex !== this.currentIndex) {
        const shouldEmitChange = this.currentIndex !== null;
        this.currentIndex = currentIndex;
        this.$emit('input', this.currentName);

        if (shouldEmitChange) {
          this.$emit('change', this.currentName, this.children[currentIndex].title);
        }
      }
    },

    findAvailableTab(index) {
      const diff = index < this.currentIndex ? -1 : 1;

      while (index >= 0 && index < this.children.length) {
        if (!this.children[index].disabled) {
          return index;
        }

        index += diff;
      }
    },

    // emit event when clicked
    onClick(index) {
      const { title, disabled, computedName } = this.children[index];
      if (disabled) {
        this.$emit('disabled', computedName, title);
      } else {
        this.setCurrentIndex(index);
        this.$emit('click', computedName, title);
      }
    },

    // scroll active tab into view
    scrollIntoView(immediate) {
      const { titles } = this.$refs;

      if (!this.scrollable || !titles || !titles[this.currentIndex]) {
        return;
      }

      const { nav } = this.$refs;
      const title = titles[this.currentIndex].$el;
      const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;

      scrollLeftTo(nav, to, immediate ? 0 : this.duration);
    },

    // render title slot of child tab
    renderTitle(el, index) {
      this.$nextTick(() => {
        this.$refs.titles[index].renderTitle(el);
      });
    },

    onScroll(params) {
      this.stickyFixed = params.isFixed;
      this.$emit('scroll', params);
    }
  },

  render() {
    const { type, ellipsis, animated, scrollable } = this;

    const Nav = this.children.map((item, index) => (
      <Title
        ref="titles"
        refInFor
        type={type}
        title={item.title}
        color={this.color}
        isActive={index === this.currentIndex}
        ellipsis={ellipsis}
        disabled={item.disabled}
        scrollable={scrollable}
        activeColor={this.titleActiveColor}
        inactiveColor={this.titleInactiveColor}
        swipeThreshold={this.swipeThreshold}
        onClick={() => {
          this.onClick(index);
        }}
      />
    ));

    const Wrap = (
      <div
        ref="wrap"
        class={[
          bem('wrap', { scrollable }),
          { 'van-hairline--top-bottom': type === 'line' && this.border }
        ]}
      >
        <div ref="nav" role="tablist" class={bem('nav', [type])} style={this.navStyle}>
          {this.slots('nav-left')}
          {Nav}
          {type === 'line' && <div class={bem('line')} style={this.lineStyle} />}
          {this.slots('nav-right')}
        </div>
      </div>
    );

    return (
      <div class={bem([type])}>
        {this.sticky ? (
          <Sticky
            container={this.$el}
            offsetTop={this.offsetTop}
            onScroll={this.onScroll}
          >
            {Wrap}
          </Sticky>
        ) : (
          Wrap
        )}
        <Content
          count={this.children.length}
          animated={animated}
          duration={this.duration}
          swipeable={this.swipeable}
          currentIndex={this.currentIndex}
          onChange={this.setCurrentIndex}
        >
          {this.slots()}
        </Content>
      </div>
    );
  }
});
