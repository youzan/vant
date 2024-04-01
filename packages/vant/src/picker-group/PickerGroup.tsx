import {
  defineComponent,
  Comment,
  Fragment,
  type InjectionKey,
  type ExtractPropTypes,
  type VNode,
  ComponentPublicInstance,
  nextTick,
} from 'vue';

// Utils
import {
  flat,
  pick,
  extend,
  makeArrayProp,
  makeNumericProp,
  createNamespace,
  makeBooleanProp,
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
import { useExpose } from '../composables/use-expose';

const [name, bem] = createNamespace('picker-group');

export type PickerGroupProvide = Record<string, string>;

export const PICKER_GROUP_KEY: InjectionKey<PickerGroupProvide> = Symbol(name);

export const pickerGroupProps = extend(
  {
    tabs: makeArrayProp<string>(),
    activeTab: makeNumericProp(0),
    nextStepText: String,
    showToolbar: makeBooleanProp(true),
  },
  pickerToolbarProps,
);

export type PickerGroupConfirmOptions = {
  nextFirst?: boolean;
};

export type PickerGroupExpose = {
  confirm: (options?: PickerGroupConfirmOptions) => void;
};

export type PickerGroupProps = ExtractPropTypes<typeof pickerGroupProps>;

export type PickerGroupInstance = ComponentPublicInstance<
  PickerGroupProps,
  PickerGroupExpose
>;

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

    const canNext = () => +activeTab.value < props.tabs.length - 1;

    const showNextButton = () => canNext() && props.nextStepText;

    const onConfirm = () => {
      if (showNextButton()) {
        activeTab.value = +activeTab.value + 1;
      } else {
        const selectedData = children.map((item) => item.confirm());
        nextTick(() => emit('confirm', selectedData));
      }
    };

    const onCancel = () => emit('cancel');

    const doConfirm = (options?: PickerGroupConfirmOptions) => {
      if (options?.nextFirst && canNext()) {
        activeTab.value = +activeTab.value + 1;
      } else {
        const selectedData = children.map((item) => item.confirm());
        nextTick(() => emit('confirm', selectedData));
        return selectedData;
      }
    };

    useExpose<PickerGroupExpose>({ confirm: doConfirm });

    return () => {
      let childNodes = slots
        .default?.()
        ?.filter((node) => node.type !== Comment)
        .map((node) => {
          if (node.type === Fragment) {
            return node.children as VNode[];
          }

          return node;
        });

      if (childNodes) {
        childNodes = flat(childNodes);
      }

      const confirmButtonText = showNextButton()
        ? props.nextStepText
        : props.confirmButtonText;

      const renderToolbar = () => {
        if (props.showToolbar) {
          return (
            <Toolbar
              v-slots={pick(slots, pickerToolbarSlots)}
              title={props.title}
              cancelButtonText={props.cancelButtonText}
              confirmButtonText={confirmButtonText}
              onConfirm={onConfirm}
              onCancel={onCancel}
            />
          );
        }
      };

      return (
        <div class={bem()}>
          {renderToolbar()}
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
