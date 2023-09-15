// Utils
import { createNamespace } from '../utils';
import { inherit, emit } from '../utils/functional';
import { preventDefault } from '../utils/dom/event';

// Components
import Field from '../field';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';

const [createComponent, bem, t] = createNamespace('search');

export type SearchProps = {
  shape: 'square' | 'round';
  value?: string;
  label?: string;
  leftIcon: string;
  rightIcon?: string;
  clearable: boolean;
  background: string;
  actionText?: string;
  showAction?: boolean;
  clearTrigger?: string;
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
    if (!props.showAction) {
      return;
    }

    function onCancel() {
      if (slots.action) {
        return;
      }

      emit(ctx, 'input', '');
      emit(ctx, 'cancel');
    }

    return (
      <div class={bem('action')} role="button" tabindex="0" onClick={onCancel}>
        {slots.action ? slots.action() : props.actionText || t('cancel')}
      </div>
    );
  }

  const fieldData = {
    attrs: ctx.data.attrs,
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
  inheritData.attrs = undefined;

  return (
    <div
      class={bem({ 'show-action': props.showAction })}
      style={{ background: props.background }}
      {...inheritData}
    >
      {slots.left?.()}
      <div class={bem('content', props.shape)}>
        {Label()}
        <Field
          type="search"
          border={false}
          value={props.value}
          leftIcon={props.leftIcon}
          rightIcon={props.rightIcon}
          clearable={props.clearable}
          clearTrigger={props.clearTrigger}
          scopedSlots={{
            'left-icon': slots['left-icon'],
            'right-icon': slots['right-icon'],
          }}
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
  actionText: String,
  background: String,
  showAction: Boolean,
  clearTrigger: String,
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
};

export default createComponent<SearchProps, SearchEvents, SearchSlots>(Search);
