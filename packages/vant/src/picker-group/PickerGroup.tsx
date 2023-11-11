import {
  defineComponent,
  Comment,
  type InjectionKey,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  pick,
  extend,
  makeArrayProp,
  makeNumericProp,
  createNamespace,
} from '../utils';

// Composables
import { useChildren } from '@vant/use';
import { useSyncPropRef } from '../composables/use-sync-prop-ref';

// Components
import { Tab } from '../tab';
import { Tabs } from '../tabs';
import Toolbar, {
  pickerToolbarProps,
  pickerToolbarSlots,
} from '../picker/PickerToolbar';

const [name, bem] = createNamespace('picker-group');

export type PickerGroupProvide = Record<string, string>;

export const PICKER_GROUP_KEY: InjectionKey<PickerGroupProvide> = Symbol(name);

export const pickerGroupProps = extend(
  {
    tabs: makeArrayProp<string>(),
    activeTab: makeNumericProp(0),
    nextStepText: String,
  },
  pickerToolbarProps,
);

export type PickerGroupProps = ExtractPropTypes<typeof pickerGroupProps>;

export default defineComponent({
  name,

  props: pickerGroupProps,

  emits: ['confirm', 'cancel', 'update:activeTab'],

  setup(props, { emit, slots }) {
    const activeTab = useSyncPropRef(
      () => props.activeTab,
      (value) => emit('update:activeTab', value),
    );
    const { children, linkChildren } = useChildren(PICKER_GROUP_KEY);

    linkChildren();

    const showNextButton = () =>
      +activeTab.value < props.tabs.length - 1 && props.nextStepText;

    const onConfirm = () => {
      if (showNextButton()) {
        activeTab.value = +activeTab.value + 1;
      } else {
        emit(
          'confirm',
          children.map((item) => item.confirm()),
        );
      }
    };

    const onCancel = () => emit('cancel');

    return () => {
      const childNodes = slots
        .default?.()
        ?.filter((node) => node.type !== Comment);

      const confirmButtonText = showNextButton()
        ? props.nextStepText
        : props.confirmButtonText;

      return (
        <div class={bem()}>
          <Toolbar
            v-slots={pick(slots, pickerToolbarSlots)}
            title={props.title}
            cancelButtonText={props.cancelButtonText}
            confirmButtonText={confirmButtonText}
            onConfirm={onConfirm}
            onCancel={onCancel}
          />
          <Tabs
            v-model:active={activeTab.value}
            class={bem('tabs')}
            shrink
            animated
            lazyRender={false}
          >
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
