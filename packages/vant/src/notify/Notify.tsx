import { defineComponent, ExtractPropTypes } from 'vue';
import {
  extend,
  numericProp,
  unknownProp,
  makeStringProp,
  createNamespace,
} from '../utils';
import { Popup } from '../popup';
import { popupSharedProps } from '../popup/shared';
import type { NotifyType } from './types';

const [name, bem] = createNamespace('notify');

const notifyProps = extend({}, popupSharedProps, {
  type: makeStringProp<NotifyType>('danger'),
  color: String,
  message: numericProp,
  className: unknownProp,
  background: String,
  lockScroll: Boolean,
});

export type NotifyProps = ExtractPropTypes<typeof notifyProps>;

export default defineComponent({
  name,

  props: notifyProps,

  emits: ['update:show'],

  setup(props, { emit, slots }) {
    const updateShow = (show: boolean) => emit('update:show', show);

    return () => (
      <Popup
        show={props.show}
        class={[bem([props.type]), props.className]}
        style={{
          color: props.color,
          background: props.background,
        }}
        overlay={false}
        position="top"
        duration={0.2}
        lockScroll={props.lockScroll}
        onUpdate:show={updateShow}
      >
        {slots.default ? slots.default() : props.message}
      </Popup>
    );
  },
});
