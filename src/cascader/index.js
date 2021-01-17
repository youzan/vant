import { nextTick, reactive, watch } from 'vue';
import { createNamespace } from '../utils';

// Components
import Tab from '../tab';
import Tabs from '../tabs';
import Icon from '../icon';

const [createComponent, bem, t] = createNamespace('cascader');

export default createComponent({
  props: {
    title: String,
    modelValue: [Number, String],
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
  },

  emits: ['close', 'change', 'finish', 'update:modelValue'],

  setup(props, { slots, emit }) {
    const state = reactive({
      tabs: [],
      activeTab: 0,
    });

    const { text: textKey, value: valueKey, children: childrenKey } = {
      text: 'text',
      value: 'value',
      children: 'children',
      ...props.fieldNames,
    };

    const getSelectedOptionsByValue = (options, value) => {
      for (let i = 0; i < options.length; i++) {
        const option = options[i];

        if (option[valueKey] === value) {
          return [option];
        }

        if (option[childrenKey]) {
          const selectedOptions = getSelectedOptionsByValue(
            option[childrenKey],
            value
          );
          if (selectedOptions) {
            return [option, ...selectedOptions];
          }
        }
      }
    };

    const updateTabs = () => {
      if (props.modelValue || props.modelValue === 0) {
        const selectedOptions = getSelectedOptionsByValue(
          props.options,
          props.modelValue
        );

        if (selectedOptions) {
          let optionsCursor = props.options;

          state.tabs = selectedOptions.map((option) => {
            const tab = {
              options: optionsCursor,
              selectedOption: option,
            };

            const next = optionsCursor.filter(
              (item) => item[valueKey] === option[valueKey]
            );
            if (next.length) {
              optionsCursor = next[0][childrenKey];
            }

            return tab;
          });

          if (optionsCursor) {
            state.tabs.push({
              options: optionsCursor,
              selectedOption: null,
            });
          }

          nextTick(() => {
            state.activeTab = state.tabs.length - 1;
          });

          return;
        }
      }

      state.tabs = [
        {
          options: props.options,
          selectedOption: null,
        },
      ];
    };

    const onSelect = (option, tabIndex) => {
      state.tabs[tabIndex].selectedOption = option;

      if (state.tabs.length > tabIndex + 1) {
        state.tabs = state.tabs.slice(0, tabIndex + 1);
      }

      if (option[childrenKey]) {
        const nextTab = {
          options: option[childrenKey],
          selectedOption: null,
        };

        if (state.tabs[tabIndex + 1]) {
          state.tabs[tabIndex + 1] = nextTab;
        } else {
          state.tabs.push(nextTab);
        }

        nextTick(() => {
          state.activeTab++;
        });
      }

      const selectedOptions = state.tabs
        .map((tab) => tab.selectedOption)
        .filter((item) => !!item);

      const eventParams = {
        value: option[valueKey],
        tabIndex,
        selectedOptions,
      };
      emit('update:modelValue', option[valueKey]);
      emit('change', eventParams);

      if (!option[childrenKey]) {
        emit('finish', eventParams);
      }
    };

    const onClose = () => {
      emit('close');
    };

    const renderHeader = () => (
      <div class={bem('header')}>
        <h2 class={bem('title')}>
          {slots.title ? slots.title() : props.title}
        </h2>
        {props.closeable ? (
          <Icon name="cross" class={bem('close-icon')} onClick={onClose} />
        ) : null}
      </div>
    );

    const renderOptions = (options, selectedOption, tabIndex) => {
      const renderOption = (option) => {
        const isSelected =
          selectedOption && option[valueKey] === selectedOption[valueKey];

        return (
          <li
            class={bem('option', { selected: isSelected })}
            style={{ color: isSelected ? props.activeColor : null }}
            onClick={() => {
              onSelect(option, tabIndex);
            }}
          >
            <span>{option[textKey]}</span>
            {isSelected ? (
              <Icon name="success" class={bem('selected-icon')} />
            ) : null}
          </li>
        );
      };

      return <ul class={bem('options')}>{options.map(renderOption)}</ul>;
    };

    const renderTab = (item, tabIndex) => {
      const { options, selectedOption } = item;
      const title = selectedOption
        ? selectedOption[textKey]
        : props.placeholder || t('select');

      return (
        <Tab
          title={title}
          titleClass={bem('tab', {
            unselected: !selectedOption,
          })}
        >
          {renderOptions(options, selectedOption, tabIndex)}
        </Tab>
      );
    };

    const renderTabs = () => (
      <Tabs
        v-model={[state.activeTab, 'active']}
        animated
        swipeable
        swipeThreshold={0}
        class={bem('tabs')}
        color={props.activeColor}
      >
        {state.tabs.map(renderTab)}
      </Tabs>
    );

    updateTabs();

    watch(() => props.options, updateTabs, { deep: true });
    watch(
      () => props.modelValue,
      (value) => {
        if (value || value === 0) {
          const values = state.tabs.map(
            (tab) => tab.selectedOption?.[valueKey]
          );
          if (values.indexOf(value) !== -1) {
            return;
          }
        }
        updateTabs();
      }
    );

    return () => (
      <div class={bem()}>
        {renderHeader()}
        {renderTabs()}
      </div>
    );
  },
});
