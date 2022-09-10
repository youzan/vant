import { defineComponent, type InjectionKey, type ExtractPropTypes } from 'vue';

// Utils
import { extend, makeArrayProp, createNamespace } from '../utils';

// Composables
import { useChildren } from '@vant/use';

// Components
import { Tab } from '../tab';
import { Tabs } from '../tabs';
import Toolbar, { pickerToolbarProps } from '../picker/PickerToolbar';

const [name, bem] = createNamespace('picker-group');

export type PickerGroupProvide = Record<string, string>;

export const PICKER_GROUP_KEY: InjectionKey<PickerGroupProvide> = Symbol(name);

export const pickerGroupProps = extend(
  {
    tabs: makeArrayProp<string>(),
  },
  pickerToolbarProps
);

export type PickerGroupProps = ExtractPropTypes<typeof pickerGroupProps>;

export default defineComponent({
  name,

  props: pickerGroupProps,

  emits: ['confirm', 'cancel'],

  setup(props, { emit, slots }) {
    const { children, linkChildren } = useChildren(PICKER_GROUP_KEY);

    linkChildren();

    const onConfirm = () => {
      emit(
        'confirm',
        children.map((item) => item.confirm())
      );
    };

    const onCancel = () => emit('cancel');

    return () => {
      const childNodes = slots.default?.();

      return (
        <div class={bem()}>
          <Toolbar {...props} onConfirm={onConfirm} onCancel={onCancel} />
          <Tabs shrink class={bem('tabs')} animated>
            {props.tabs.map((title, index) => (
              <Tab title={title} titleClass={bem('tab-title')}>
                {childNodes?.[index]}
              </Tab>
            ))}
          </Tabs>
        </div>
      );
    };
  },
});
