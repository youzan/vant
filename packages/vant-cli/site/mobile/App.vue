<template>
  <demo-nav />
  <router-view v-slot="{ Component }">
    <demo-section>
      <keep-alive v-if="shouldKeep">
        <component :is="Component" />
      </keep-alive>
      <component v-else :is="Component" />
    </demo-section>
  </router-view>
</template>

<script>
import { watch, computed } from 'vue';
import DemoNav from './components/DemoNav.vue';
import { useCurrentTheme } from '../common/iframe-sync';
import { config } from 'site-mobile-shared';
import { router } from './router';

const excludePath = ['floating-bubble', 'back-top'];

export default {
  components: { DemoNav },

  setup() {
    const shouldKeep = computed(
      () =>
        !excludePath.some((path) =>
          router.currentRoute.value.path.includes(path)
        )
    );

    const theme = useCurrentTheme();

    watch(
      theme,
      (newVal, oldVal) => {
        document.documentElement.classList.remove(`van-doc-theme-${oldVal}`);
        document.documentElement.classList.add(`van-doc-theme-${newVal}`);

        const { darkModeClass, lightModeClass } = config.site;
        if (darkModeClass) {
          document.documentElement.classList.toggle(
            darkModeClass,
            newVal === 'dark'
          );
        }
        if (lightModeClass) {
          document.documentElement.classList.toggle(
            lightModeClass,
            newVal === 'light'
          );
        }
      },
      { immediate: true }
    );

    return {
      shouldKeep,
    };
  },
};
</script>

<style lang="less">
@import '../common/style/base';

body {
  min-width: 100vw;
  background-color: inherit;
}

.van-doc-theme-light {
  background-color: var(--van-doc-gray-1);
}

.van-doc-theme-dark {
  background-color: var(--van-doc-black);
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
