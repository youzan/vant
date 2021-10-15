import {
  ref,
  watch,
  nextTick,
  PropType,
  defineComponent,
  ExtractPropTypes,
} from 'vue';
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
import type { CascaderTab, CascaderOption, CascaderFieldNames } from './types';

const [name, bem, t] = createNamespace('cascader');

const props = {
  title: String,
  options: makeArrayProp<CascaderOption>(),
  closeable: truthProp,
  swipeable: truthProp,
  closeIcon: makeStringProp('cross'),
  modelValue: numericProp,
  fieldNames: Object as PropType<CascaderFieldNames>,
  placeholder: String,
  activeColor: String,
};

export type CascaderProps = ExtractPropTypes<typeof props>;

export default defineComponent({
  name,

  props,

  emits: ['close', 'change', 'finish', 'click-tab', 'update:modelValue'],

  setup(props, { slots, emit }) {
    const tabs = ref<CascaderTab[]>([]);
    const activeTab = ref(0);

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
      const { options, modelValue } = props;

      if (modelValue !== undefined) {
        const selectedOptions = getSelectedOptionsByValue(options, modelValue);

        if (selectedOptions) {
          let optionsCursor = options;

          tabs.value = selectedOptions.map((option) => {
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
            tabs.value.push({
              options: optionsCursor,
              selected: null,
            });
          }

          nextTick(() => {
            activeTab.value = tabs.value.length - 1;
          });

          return;
        }
      }

      tabs.value = [
        {
          options,
          selected: null,
        },
      ];
    };

    const onSelect = (option: CascaderOption, tabIndex: number) => {
      if (option.disabled) {
        return;
      }

      tabs.value[tabIndex].selected = option;

      if (tabs.value.length > tabIndex + 1) {
        tabs.value = tabs.value.slice(0, tabIndex + 1);
      }

      if (option[childrenKey]) {
        const nextTab = {
          options: option[childrenKey],
          selected: null,
        };

        if (tabs.value[tabIndex + 1]) {
          tabs.value[tabIndex + 1] = nextTab;
        } else {
          tabs.value.push(nextTab);
        }

        nextTick(() => {
          activeTab.value++;
        });
      }

      const selectedOptions = tabs.value
        .map((tab) => tab.selected)
        .filter(Boolean);

      emit('update:modelValue', option[valueKey]);

      const params = {
        value: option[valueKey],
        tabIndex,
        selectedOptions,
      };
      emit('change', params);

      if (!option[childrenKey]) {
        emit('finish', params);
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
      const placeholder = props.placeholder || t('select');
      const title = selected ? selected[textKey] : placeholder;

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
        v-model:active={activeTab.value}
        animated
        class={bem('tabs')}
        color={props.activeColor}
        swipeThreshold={0}
        swipeable={props.swipeable}
        onClick-tab={onClickTab}
      >
        {tabs.value.map(renderTab)}
      </Tabs>
    );

    updateTabs();

    watch(() => props.options, updateTabs, { deep: true });
    watch(
      () => props.modelValue,
      (value) => {
        if (value !== undefined) {
          const values = tabs.value.map((tab) => tab.selected?.[valueKey]);
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
