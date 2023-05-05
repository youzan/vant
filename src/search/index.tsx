// Utils
import { createNamespace } from '../utils';
import { inherit, emit } from '../utils/functional';
import { preventDefault } from '../utils/dom/event';

// Components
import Fieldsonforsearch from '../fieldsonforsearch';
// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';
import VanEmptyCol from '../emptycol';

const [createComponent, bem] = createNamespace('search');

export type SearchProps = {
  shape: 'sqaure' | 'round';
  value?: string;
  label?: string;
  leftIcon: string;
  rightIcon?: string;
  clearable: boolean;
  background: string;
  actiontext?: string;
  showAction?: boolean;
  cleartrigger?: string;
  iconalign?: string;
};

export type SearchSlots = DefaultSlots & {
  left?: ScopedSlot;
  label?: ScopedSlot;
  action?: ScopedSlot;
  'left-icon'?: ScopedSlot;
  'right-icon'?: ScopedSlot;
};

export type SearchEvents = {
  onCancel?(): void;
  onInput?(value: string): void;
  onSearch?(value: string): void;
  onKeypress?(event: KeyboardEvent): void;
};

function Search(
  h: CreateElement,
  props: SearchProps,
  slots: SearchSlots,
  ctx: RenderContext<SearchProps>
) {
  function Label() {
    if (slots.label || props.label) {
      return (
        <div class={bem('label')}>
          {slots.label ? slots.label() : props.label}
        </div>
      );
    }
  }

  function Action() {
    const designer = ctx.parent?.$env?.VUE_APP_DESIGNER;

    if (!props.showAction) {
      return;
    }

    function onCancel() {
      if (slots.action && slots.action()) {
        return;
      }
      // 平台这里 定义为按钮 不是清空操作
      // emit(ctx, 'input', '');
      // emit(ctx, 'cancel');

      emit(ctx, 'cancel');
    }

    return (
      <div
        class={bem('action')}
        role="button"
        tabindex="0"
        onClick={onCancel}
        vusion-slot-name="action"
      >
        {!designer
          ? slots.action && slots.action()
            ? slots.action()
            : props.actiontext
          : null}
        {designer ? (
          slots.action && !slots.action() && !props.actiontext ? (
            <VanEmptyCol></VanEmptyCol>
          ) : slots.action && slots.action() ? (
            slots.action()
          ) : (
            props.actiontext
          )
        ) : null}
      </div>
    );
  }

  const fieldData = {
    attrs: { ...ctx.data.attrs },
    on: {
      ...ctx.listeners,
      keypress(event: KeyboardEvent) {
        // press enter
        if (event.keyCode === 13) {
          preventDefault(event);
          emit(ctx, 'search', props.value);
        }
        emit(ctx, 'keypress', event);
      },
    },
  };
  const inheritData = inherit(ctx);
  // inheritData.attrs = undefined;
  Object.keys(fieldData?.attrs || {}).forEach((key) => {
    if (/vusion/.test(key)) {
      fieldData.attrs && fieldData.attrs[key] && delete fieldData?.attrs[key];
    }
  });
  return (
    <div
      class={bem({ 'show-action': props.showAction })}
      // style={{ background: props.background }}
      {...inheritData}
    >
      {slots.left?.()}
      <div class={bem('content', props.shape)}>
        {Label()}
        <Fieldsonforsearch
          type="search"
          border={false}
          value={props.value}
          leftIcon={props.iconalign === 'left' ? props.leftIcon : ''}
          rightIcon={props.iconalign === 'right' ? props.leftIcon : ''}
          clearable={props.clearable}
          clearTrigger={props.cleartrigger}
          scopedSlots={{
            'left-icon': slots['left-icon'],
            'right-icon': slots['right-icon'],
          }}
          frompara="vansearch"
          {...fieldData}
        />
      </div>
      {Action()}
    </div>
  );
}

Search.props = {
  value: String,
  label: String,
  rightIcon: String,
  actiontext: String,
  background: String,
  showAction: Boolean,
  cleartrigger: String,
  shape: {
    type: String,
    default: 'square',
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  leftIcon: {
    type: String,
    default: 'search',
  },
  iconalign: {
    type: String,
    default: 'left',
  },
};

export default createComponent<SearchProps, SearchEvents, SearchSlots>(Search);
