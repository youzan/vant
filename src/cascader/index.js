import { createNamespace } from '../utils';
import Tab from '../tab';
import Tabs from '../tabs';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('cascader');

export default createComponent({
  props: {
    value: Array,
    title: String,
    options: Array,
    placeholder: String,
    activeColor: String,
    closeable: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      tabs: [],
      activeTab: 0,
    };
  },

  watch: {
    options() {
      // reset options and tab
    },

    value() {
      // reset options and tab
    },
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      if (this.value) {
        //
      } else {
        this.tabs = [
          {
            title: this.placeholder || this.t('placeholder'),
            options: this.options,
            selected: null,
          },
        ];
      }
    },

    onSelect(option, tabIndex) {
      this.tabs[tabIndex].title = option.text;
      this.tabs[tabIndex].selected = option.value;

      if (this.tabs.length > tabIndex + 1) {
        this.tabs = this.tabs.slice(0, tabIndex + 1);
      }

      if (option.children) {
        const nextTab = {
          title: this.placeholder || this.t('placeholder'),
          options: option.children,
          selected: null,
        };

        if (this.tabs[tabIndex + 1]) {
          this.$set(this.tabs, tabIndex + 1, nextTab);
        } else {
          this.tabs.push(nextTab);
        }

        this.$nextTick(() => {
          this.activeTab++;
        });
      }
    },

    onClose() {
      this.$emit('close');
    },

    renderHeader() {
      return (
        <div class={bem('header')}>
          <h2 class={bem('title')}>{this.slots('title') || this.title}</h2>
          {this.closeable ? (
            <Icon
              name="cross"
              class={bem('close-icon')}
              onClick={this.onClose}
            />
          ) : null}
        </div>
      );
    },

    renderOptions(options, selected, tabIndex) {
      return (
        <ul class={bem('options')}>
          {options.map((option) => {
            const isSelected = option.value === selected;
            return (
              <li
                class={bem('option', { selected: isSelected })}
                onClick={() => {
                  this.onSelect(option, tabIndex);
                }}
              >
                <span>{option.text}</span>
                {isSelected ? (
                  <Icon name="success" class={bem('selected-icon')} />
                ) : null}
              </li>
            );
          })}
        </ul>
      );
    },

    renderTabs() {
      return (
        <Tabs vModel={this.activeTab} animated swipeable class={bem('tabs')}>
          {this.tabs.map((item, tabIndex) => (
            <Tab
              title={item.title}
              titleClass={bem('tab-title', { unselected: !item.selected })}
            >
              {this.renderOptions(item.options, item.selected, tabIndex)}
            </Tab>
          ))}
        </Tabs>
      );
    },
  },

  render() {
    return (
      <div class={bem()}>
        {this.renderHeader()}
        {this.renderTabs()}
      </div>
    );
  },
});
