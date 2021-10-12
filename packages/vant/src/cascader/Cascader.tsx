import { nextTick, PropType, reactive, watch, defineComponent } from 'vue';
import {
  extend,
  truthProp,
  numericProp,
  makeArrayProp,
  makeStringProp,
  createNamespace,
} from '../utils';

// Components
import { Tab } from '../tab';
import { Tabs } from '../tabs';
import { Icon } from '../icon';

// Types
import type { TabsClickTabEventParams } from '../tabs/types';

const [name, bem, t] = createNamespace('cascader');

export type CascaderOption = {
  text?: string;
  value?: string | number;
  color?: string;
  disabled?: boolean;
  children?: CascaderOption[];
  className?: unknown;
  // for custom filed names
  [key: PropertyKey]: any;
};

type CascaderTab = {
  options: CascaderOption[];
  selected: CascaderOption | null;
};

export type CascaderFieldNames = {
  text?: string;
  value?: string;
  children?: string;
};

export default defineComponent({
  name,

  props: {
    title: String,
    options: makeArrayProp<CascaderOption>(),
    closeable: truthProp,
    swipeable: truthProp,
    closeIcon: makeStringProp('cross'),
    modelValue: numericProp,
    fieldNames: Object as PropType<CascaderFieldNames>,
    placeholder: String,
    activeColor: String,
  },

  emits: ['close', 'change', 'finish', 'update:modelValue', 'click-tab'],

  setup(props, { slots, emit }) {
    const state = reactive({
      tabs: [] as CascaderTab[],
      activeTab: 0,
    });

    const {
      text: textKey,
      value: valueKey,
      children: childrenKey,
    } = extend(
      {
        text: 'text',
        value: 'value',
        children: 'children',
      },
      props.fieldNames
    );

    const getSelectedOptionsByValue = (
      options: CascaderOption[],
      value: string | number
    ): CascaderOption[] | undefined => {
      for (const option of options) {
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
              selected: option,
            };

            const next = optionsCursor.find(
              (item) => item[valueKey] === option[valueKey]
            );
            if (next) {
              optionsCursor = next[childrenKey];
            }

            return tab;
          });

          if (optionsCursor) {
            state.tabs.push({
              options: optionsCursor,
              selected: null,
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
          selected: null,
        },
      ];
    };

    const onSelect = (option: CascaderOption, tabIndex: number) => {
      if (option.disabled) {
        return;
      }

      state.tabs[tabIndex].selected = option;

      if (state.tabs.length > tabIndex + 1) {
        state.tabs = state.tabs.slice(0, tabIndex + 1);
      }

      if (option[childrenKey]) {
        const nextTab = {
          options: option[childrenKey],
          selected: null,
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
        .map((tab) => tab.selected)
        .filter(Boolean);

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

    const onClose = () => emit('close');

    const onClickTab = ({ name, title }: TabsClickTabEventParams) =>
      emit('click-tab', name, title);

    const renderHeader = () => (
      <div class={bem('header')}>
        <h2 class={bem('title')}>
          {slots.title ? slots.title() : props.title}
        </h2>
        {props.closeable ? (
          <Icon
            name={props.closeIcon}
            class={bem('close-icon')}
            onClick={onClose}
          />
        ) : null}
      </div>
    );

    const renderOption = (
      option: CascaderOption,
      selectedOption: CascaderOption | null,
      tabIndex: number
    ) => {
      const selected =
        selectedOption && option[valueKey] === selectedOption[valueKey];
      const color = option.color || (selected ? props.activeColor : undefined);

      const Text = slots.option ? (
        slots.option({ option, selected })
      ) : (
        <span>{option[textKey]}</span>
      );

      return (
        <li
          class={[
            bem('option', {
              selected,
              disabled: option.disabled,
            }),
            option.className,
          ]}
          style={{ color }}
          onClick={() => onSelect(option, tabIndex)}
        >
          {Text}
          {selected ? (
            <Icon name="success" class={bem('selected-icon')} />
          ) : null}
        </li>
      );
    };

    const renderOptions = (
      options: CascaderOption[],
      selectedOption: CascaderOption | null,
      tabIndex: number
    ) => (
      <ul class={bem('options')}>
        {options.map((option) =>
          renderOption(option, selectedOption, tabIndex)
        )}
      </ul>
    );

    const renderTab = (tab: CascaderTab, tabIndex: number) => {
      const { options, selected } = tab;
      const title = selected
        ? selected[textKey]
        : props.placeholder || t('select');

      return (
        <Tab
          title={title}
          titleClass={bem('tab', {
            unselected: !selected,
          })}
        >
          {renderOptions(options, selected, tabIndex)}
        </Tab>
      );
    };

    const renderTabs = () => (
      <Tabs
        v-model:active={state.activeTab}
        animated
        class={bem('tabs')}
        color={props.activeColor}
        swipeThreshold={0}
        swipeable={props.swipeable}
        onClick-tab={onClickTab}
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
          const values = state.tabs.map((tab) => tab.selected?.[valueKey]);
          if (values.includes(value)) {
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
