import { createNamespace } from '../utils';
import Tab from '../tab';
import Tabs from '../tabs';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('cascader');

export default createComponent({
  props: {
    title: String,
    value: [Number, String],
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

    value(value) {
      if (value) {
        const values = this.tabs.map((tab) => tab.selectedOption?.value);
        if (values.indexOf(value) !== -1) {
          return;
        }
      }
      this.updateTabs();
    },
  },

  created() {
    this.updateTabs();
  },

  methods: {
    getSelectedOptionsByValue(options, value) {
      for (let i = 0; i < options.length; i++) {
        const option = options[i];

        if (option.value === value) {
          return [option];
        }

        if (option.children) {
          const selectedOptions = this.getSelectedOptionsByValue(
            option.children,
            value
          );
          if (selectedOptions) {
            return [option, ...selectedOptions];
          }
        }
      }
    },

    updateTabs() {
      if (this.value) {
        const selectedOptions = this.getSelectedOptionsByValue(
          this.options,
          this.value
        );

        if (selectedOptions) {
          let optionsCursor = this.options;

          this.tabs = selectedOptions.map((option) => {
            const tab = {
              options: optionsCursor,
              selectedOption: option,
            };

            const next = optionsCursor.filter(
              (item) => item.value === option.value
            );
            if (next.length) {
              optionsCursor = next[0].children;
            }

            return tab;
          });

          this.activeTab = selectedOptions.length - 1;

          return;
        }
      }

      this.tabs = [
        {
          options: this.options,
          selectedOption: null,
        },
      ];
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
      this.$emit('input', option.value);
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
