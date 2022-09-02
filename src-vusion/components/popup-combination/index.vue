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
      console.log(this, 6666)
      this.tempP = this.$slots.default;
      console.log(this.tempP);
    }
};
</script>

<style module>
</style>
