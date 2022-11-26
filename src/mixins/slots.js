/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */
export const SlotsMixin = {
  methods: {
    slots(name = 'default', props) {
      const { $slots, $scopedSlots } = this;
      const scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    },
    inDesigner() {
      return this.$env && this.$env.VUE_APP_DESIGNER;
    }
  },
};
