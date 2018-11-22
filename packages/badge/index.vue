<template>
  <a
    :class="[b({ select }), 'van-hairline']"
    :href="url"
    @click="onClick"
  >
    <div :class="b('text')">
      {{ title }}
      <van-info
        :info="info"
        :class="b('info')"
      />
    </div>
  </a>
</template>

<script>
import Info from '../info';
import create from '../utils/create';

export default create({
  name: 'badge',

  components: {
    [Info.name]: Info
  },

  props: {
    url: String,
    info: [String, Number],
    title: String
  },

  inject: ['vanBadgeGroup'],

  created() {
    this.parent.badges.push(this);
  },

  beforeDestroy() {
    this.parent.badges = this.parent.badges.filter(item => item !== this);
  },

  computed: {
    parent() {
      if (process.env.NODE_ENV !== 'production' && !this.vanBadgeGroup) {
        console.error('[Vant] Badge needs to be child of BadgeGroup');
      }
      return this.vanBadgeGroup;
    },

    select() {
      return (
        this.parent.badges.indexOf(this) === +this.parent.activeKey
      );
    }
  },

  methods: {
    onClick() {
      const index = this.parent.badges.indexOf(this);
      this.$emit('click', index);
      this.parent.$emit('change', index);
    }
  }
});
</script>
