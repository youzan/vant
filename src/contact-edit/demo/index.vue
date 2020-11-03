<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-contact-edit
        is-edit
        show-set-default
        :contact-info="editingContact"
        :set-default-label="t('defaultLabel')"
        @save="onSave"
        @delete="onDelete"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      defaultLabel: '设为默认联系人',
    },
    'en-US': {
      defaultLabel: 'Set as the default contact',
    },
  },

  data() {
    return {
      editingContact: {},
    };
  },

  methods: {
    onSave() {
      this.$toast(this.t('save'));
    },
    onDelete() {
      this.$toast(this.t('delete'));
    },
  },
};
</script>

<style lang="less">
.demo-contact-edit {
  .van-doc-demo-block__title {
    padding-bottom: 0;
  }
}
</style>
