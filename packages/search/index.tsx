import { use } from '../utils';
import { inherit, emit } from '../utils/functional';
import Field from '../field';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/use/sfc';

const [sfc, bem, t] = use('search');

export type SearchProps = {
  shape: string;
  value?: string;
  label?: string;
  background: string;
  showAction?: boolean;
};

export type SearchSlots = DefaultSlots & {
  label?: ScopedSlot;
  action?: ScopedSlot;
  'left-icon'?: ScopedSlot;
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
  const Label = () => {
    if (!slots.label && !props.label) {
      return null;
    }

    return <div class={bem('label')}>{slots.label ? slots.label() : props.label}</div>;
  };

  const Action = () => {
    if (!props.showAction) {
      return null;
    }

    const onCancel = () => {
      emit(ctx, 'input', '');
      emit(ctx, 'cancel');
    };

    return (
      <div class={bem('action')}>
        {slots.action ? slots.action() : <div onClick={onCancel}>{t('cancel')}</div>}
      </div>
    );
  };

  const fieldData = {
    attrs: ctx.data.attrs,
    on: {
      ...ctx.listeners,
      input(value: string) {
        emit(ctx, 'input', value);
      },
      keypress(event: KeyboardEvent) {
        // press enter
        if (event.keyCode === 13) {
          event.preventDefault();
          emit(ctx, 'search', props.value);
        }
        emit(ctx, 'keypress', event);
      }
    }
  };

  const inheritData = inherit(ctx);
  delete inheritData.attrs;

  return (
    <div
      class={bem({ 'show-action': props.showAction })}
      style={{ background: props.background }}
      {...inheritData}
    >
      <div class={bem('content', props.shape)}>
        {Label()}
        <Field
          clearable
          type="search"
          value={props.value}
          border={false}
          leftIcon="search"
          scopedSlots={{ 'left-icon': slots['left-icon'] }}
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
  showAction: Boolean,
  shape: {
    type: String,
    default: 'square'
  },
  background: {
    type: String,
    default: '#fff'
  }
};

export default sfc<SearchProps, SearchEvents, SearchSlots>(Search);
