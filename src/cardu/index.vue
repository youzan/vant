<script>
import { createNamespace } from '../utils';
import { SlotsMixin } from '../mixins/slots';
import VanEmptyCol from '../emptycol';
const [, bem] = createNamespace('cardu');
export default {
    name: 'van-cardu',
    components: {
    },
    mixins: [SlotsMixin],
    props: {
        sr: { type: String, default: 'r' },
        shadow: { type: String, default: 'always' },
        border: { type: Boolean, default: true },
        split: { type: Boolean, default: false },
        coverSlot: { type: Boolean, default: false },
    },
    methods: {
      onClick($event) {
      }
    },
    render() {
      const { sr, split, border, shadow} = this;
      const ifDesigner = true;
      // const ifDesigner = this.$env && this.$env.VUE_APP_DESIGNER;
      return (
        <div class={bem('wrap', {border, shadow, sr: sr === 'r'})} onClick={this.onClick}>
          <div class="van-cardu-cover" vusion-slot-name="cover">
            {this.slots('cover')}
            {(ifDesigner && !this.slots('cover')) ? <VanEmptyCol /> : null}
          </div>
          <div class={bem('head')} vusion-slot-name="head">
            {this.slots('head')}
            {(ifDesigner && !this.slots('head')) ? <VanEmptyCol /> : null}
          </div>
          { split ? <van-divider></van-divider> : null }
          <div class={bem('content')} vusion-slot-name="default">
            {this.slots()}
            {(ifDesigner && !this.slots()) ? <VanEmptyCol /> : null}
          </div>
        </div>
      );
    }
};
</script>

<style lang="less">
@import './cardu.less';
</style>

