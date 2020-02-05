/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */
import Vue from 'vue';

export const SlotsMixin = Vue.extend({
  methods: {
    slots(name = 'default', props: any) {
      const { $slots, $scopedSlots } = this;
      const scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    },
  },
});
