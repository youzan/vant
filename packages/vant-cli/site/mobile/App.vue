<template>
  <demo-nav />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <demo-section>
        <component :is="Component" />
      </demo-section>
    </keep-alive>
  </router-view>
</template>

<script>
import { watch } from 'vue';
import DemoNav from './components/DemoNav.vue';
import { useCurrentTheme } from '../common/iframe-sync';
import { config } from 'site-mobile-shared';

export default {
  components: { DemoNav },

  setup() {
    const theme = useCurrentTheme();

    watch(
      theme,
      (newVal, oldVal) => {
        document.body.classList.remove(`van-doc-theme-${oldVal}`);
        document.body.classList.add(`van-doc-theme-${newVal}`);

        const { darkModeClass } = config.site;
        if (darkModeClass) {
          document.body.classList.toggle(darkModeClass, newVal === 'dark');
        }
      },
      { immediate: true }
    );
  },
};
</script>

<style lang="less">
@import '../common/style/base';

body {
  min-width: 100vw;
}

.van-doc-theme-dark {
  background-color: #000;
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
