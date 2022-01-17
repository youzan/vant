import { createNamespace } from '../utils';
import Tab from '../tab';
import Tabs from '../tabs';
import Icon from '../icon';

const [createComponent, bem, t] = createNamespace('cascader');

export default createComponent({
  props: {
    title: String,
    value: [Number, String],
    fieldNames: Object,
    placeholder: String,
    activeColor: String,
    options: {
      type: Array,
      default: () => [],
    },
    closeable: {
      type: Boolean,
      default: true,
    },
    showHeader: {
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

  computed: {
    textKey() {
      return this.fieldNames?.text || 'text';
    },
    valueKey() {
      return this.fieldNames?.value || 'value';
    },
    childrenKey() {
      return this.fieldNames?.children || 'children';
    },
  },

  watch: {
    options: {
      deep: true,
      handler: 'updateTabs',
    },

    value(value) {
      if (value || value === 0) {
        const values = this.tabs.map(
          (tab) => tab.selectedOption?.[this.valueKey]
        );
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

        if (option[this.valueKey] === value) {
          return [option];
        }

        if (option[this.childrenKey]) {
          const selectedOptions = this.getSelectedOptionsByValue(
            option[this.childrenKey],
            value
          );
          if (selectedOptions) {
            return [option, ...selectedOptions];
          }
        }
      }
    },

    updateTabs() {
      if (this.value || this.value === 0) {
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
              (item) => item[this.valueKey] === option[this.valueKey]
            );
            if (next.length) {
              optionsCursor = next[0][this.childrenKey];
            }

            return tab;
          });

          if (optionsCursor) {
            this.tabs.push({
              options: optionsCursor,
              selectedOption: null,
            });
          }

          this.$nextTick(() => {
            this.activeTab = this.tabs.length - 1;
          });

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

      if (option[this.childrenKey]) {
        const nextTab = {
          options: option[this.childrenKey],
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

      const selectedOptions = this.tabs
        .map((tab) => tab.selectedOption)
        .filter((item) => !!item);

      const eventParams = {
        value: option[this.valueKey],
        tabIndex,
        selectedOptions,
      };
      this.$emit('input', option[this.valueKey]);
      this.$emit('change', eventParams);

      if (!option[this.childrenKey]) {
        this.$emit('finish', eventParams);
      }
    },

    onClose() {
      this.$emit('close');
    },

    renderHeader() {
      if (this.showHeader) {
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
      }
    },

    renderOptions(options, selectedOption, tabIndex) {
      const renderOption = (option) => {
        const isSelected =
          selectedOption &&
          option[this.valueKey] === selectedOption[this.valueKey];

        const Text = this.slots('option', { option, selected: isSelected }) || (
          <span>{option[this.textKey]}</span>
        );

        return (
          <li
            class={bem('option', { selected: isSelected })}
            style={{ color: isSelected ? this.activeColor : null }}
            onClick={() => {
              this.onSelect(option, tabIndex);
            }}
          >
            {Text}
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
        ? selectedOption[this.textKey]
        : this.placeholder || t('select');

      return (
        <Tab
          title={title}
          titleClass={bem('tab', {
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
          swipeThreshold={0}
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
