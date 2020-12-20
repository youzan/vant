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
            options: this.options,
            selectedOption: null,
          },
        ];
      }
    },

    onSelect(option, tabIndex) {
      this.tabs[tabIndex].selectedOption = option;

      if (this.tabs.length > tabIndex + 1) {
        this.tabs = this.tabs.slice(0, tabIndex + 1);
      }

      if (option.children) {
        const nextTab = {
          options: option.children,
          selectedOption: null,
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

      const eventParams = {
        value: option.value,
        tabIndex,
        selectedOptions: this.tabs.map((tab) => tab.selectedOption),
      };
      this.$emit('change', eventParams);

      if (!option.children) {
        this.$emit('finish', eventParams);
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

    renderOptions(options, selectedOption, tabIndex) {
      const renderOption = (option) => {
        const isSelected =
          selectedOption && option.value === selectedOption.value;

        return (
          <li
            class={bem('option', { selected: isSelected })}
            style={{ color: isSelected ? this.activeColor : null }}
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
      };

      return <ul class={bem('options')}>{options.map(renderOption)}</ul>;
    },

    renderTab(item, tabIndex) {
      const { options, selectedOption } = item;
      const title = selectedOption
        ? selectedOption.text
        : this.placeholder || this.t('placeholder');

      return (
        <Tab
          title={title}
          titleClass={bem('tab-title', {
            unselected: !selectedOption,
          })}
        >
          {this.renderOptions(options, selectedOption, tabIndex)}
        </Tab>
      );
    },

    renderTabs() {
      return (
        <Tabs
          vModel={this.activeTab}
          animated
          swipeable
          class={bem('tabs')}
          color={this.activeColor}
        >
          {this.tabs.map(this.renderTab)}
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
