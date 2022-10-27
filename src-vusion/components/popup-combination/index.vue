<script>
import UPopupCombination from 'cloud-ui.vusion/src/components/u-popup-combination.vue/index.vue';

export default {
    name: 'VanPopupCombination',
    extends: UPopupCombination,
    data() {
      return {
        tempP: null
      }
    },
    mounted() {
      this.tempP = this.$slots.default;
    }
};
</script>

<style module>
</style>
