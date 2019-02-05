/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */

export default {
  computed: {
    slots() {
      const { $slots, $scopedSlots } = this;
      return (name = 'default', props) => {
        if ($scopedSlots[name]) {
          return $scopedSlots[name](props);
        }
        return $slots[name];
      };
    }
  }
};
