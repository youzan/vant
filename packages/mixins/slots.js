/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */

export const SlotsMixin = {
  methods: {
    slots(name = 'default', props) {
      const { $slots, $scopedSlots } = this;
      if ($scopedSlots[name]) {
        return $scopedSlots[name](props);
      }
      return $slots[name];
    }
  }
};
