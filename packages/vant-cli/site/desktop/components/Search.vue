<template>
  <div ref="root" class="van-doc-search">
    <button class="van-doc-search__trigger" type="button" @click="open">
      <span class="van-doc-search__trigger-icon" />
      <span class="van-doc-search__trigger-text">
        {{ placeholder }}
      </span>
      <span class="van-doc-search__trigger-key">⌘K</span>
    </button>

    <transition name="van-doc-search-fade">
      <div
        v-if="show"
        class="van-doc-search__mask"
        role="dialog"
        aria-modal="true"
        @click.self="close"
      >
        <div class="van-doc-search__panel">
          <div class="van-doc-search__input-wrapper">
            <span class="van-doc-search__input-icon" />
            <input
              ref="input"
              v-model.trim="query"
              class="van-doc-search__input"
              type="search"
              :placeholder="placeholder"
              @keydown.left.stop
              @keydown.right.stop
            />
            <button
              v-if="query"
              class="van-doc-search__clear"
              type="button"
              @click="clear"
            />
          </div>

          <div class="van-doc-search__body">
            <div
              v-if="query && results.length"
              class="van-doc-search__list"
              role="listbox"
            >
              <button
                v-for="(item, index) in results"
                :key="item.path"
                class="van-doc-search__item"
                :class="{ 'van-doc-search__item--active': index === active }"
                type="button"
                role="option"
                :aria-selected="index === active"
                @mouseenter="active = index"
                @click="select(item)"
              >
                <span class="van-doc-search__item-content">
                  <span class="van-doc-search__item-title">
                    {{ item.title }}
                  </span>
                  <span class="van-doc-search__item-path">
                    {{ item.path }}
                  </span>
                </span>
                <span class="van-doc-search__item-group">
                  {{ item.group }}
                </span>
              </button>
            </div>

            <div v-else class="van-doc-search__empty">
              {{ emptyText }}
            </div>
          </div>

          <div class="van-doc-search__footer">
            <span class="van-doc-search__hint">
              <kbd>↑</kbd>
              <kbd>↓</kbd>
              {{ lang === 'zh-CN' ? '选择' : 'Navigate' }}
            </span>
            <span class="van-doc-search__hint">
              <kbd>Enter</kbd>
              {{ lang === 'zh-CN' ? '确认' : 'Open' }}
            </span>
            <span class="van-doc-search__hint">
              <kbd>Esc</kbd>
              {{ lang === 'zh-CN' ? '关闭' : 'Close' }}
            </span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { searchIndex } from 'site-desktop-shared';

const MAX_RESULTS = 8;

function normalize(value) {
  return String(value || '').toLowerCase();
}

function matchContent(content, query) {
  const keywords = query.split(/\s+/).filter(Boolean);
  return keywords.every((keyword) => content.includes(keyword));
}

export default {
  name: 'VanDocSearch',

  props: {
    lang: String,
  },

  data() {
    return {
      show: false,
      query: '',
      active: 0,
    };
  },

  computed: {
    placeholder() {
      return this.lang === 'zh-CN' ? '搜索文档' : 'Search docs';
    },

    emptyText() {
      if (!this.query) {
        return this.lang === 'zh-CN'
          ? '输入关键词搜索文档'
          : 'Type to search documentation';
      }

      return this.lang === 'zh-CN' ? '未找到相关文档' : 'No results found';
    },

    results() {
      const query = normalize(this.query);

      if (!query) {
        return [];
      }

      return searchIndex
        .filter((item) => item.lang === this.lang)
        .filter((item) => matchContent(normalize(item.content), query))
        .slice(0, MAX_RESULTS);
    },
  },

  watch: {
    results() {
      this.active = 0;
    },
  },

  mounted() {
    document.addEventListener('keydown', this.onKeydown);
  },

  beforeUnmount() {
    document.removeEventListener('keydown', this.onKeydown);
  },

  methods: {
    open() {
      this.show = true;
      this.$nextTick(() => {
        this.clear();
      });
    },

    close() {
      this.show = false;
    },

    clear() {
      this.query = '';
      this.$refs.input.focus();
    },

    moveActive(offset) {
      if (!this.results.length) {
        return;
      }

      const total = this.results.length;
      this.active = (this.active + offset + total) % total;
    },

    selectActive() {
      const item = this.results[this.active];
      if (item) {
        this.select(item);
      }
    },

    select(item) {
      this.close();
      this.$router.push(item.path);
    },

    onKeydown(event) {
      if (this.show) {
        const {key} = event;
        const {target} = event;
        const isInputTarget = target === this.$refs.input;

        if (key === 'Escape') {
          event.preventDefault();
          event.stopPropagation();
          this.close();
          return;
        }

        if (key === 'ArrowDown') {
          event.preventDefault();
          event.stopPropagation();
          this.moveActive(1);
          return;
        }

        if (key === 'ArrowUp') {
          event.preventDefault();
          event.stopPropagation();
          this.moveActive(-1);
          return;
        }

        if (key === 'Enter') {
          event.preventDefault();
          event.stopPropagation();
          this.selectActive();
          return;
        }

        if ((key === 'ArrowLeft' || key === 'ArrowRight') && !isInputTarget) {
          event.preventDefault();
          event.stopPropagation();
        }

        return;
      }

      const isCommandK = (event.metaKey || event.ctrlKey) && event.key === 'k';
      const isSlash =
        event.key === '/' &&
        !/input|textarea|select/i.test(document.activeElement?.tagName || '');

      if (isCommandK || isSlash) {
        event.preventDefault();
        this.open();
      }
    },
  },
};
</script>

<style lang="less">
.van-doc-search {
  display: inline-block;
  text-align: left;

  &__trigger {
    display: flex;
    align-items: center;
    width: 168px;
    height: 32px;
    padding: 0 8px;
    color: rgba(255, 255, 255, 0.72);
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 16px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: #fff;
      background: rgba(255, 255, 255, 0.18);
    }
  }

  &__trigger-icon,
  &__input-icon {
    position: relative;
    width: 14px;
    height: 14px;
    margin-right: 8px;
    border: 2px solid currentColor;
    border-radius: 50%;
    box-sizing: border-box;

    &::after {
      position: absolute;
      right: -5px;
      bottom: -4px;
      width: 6px;
      height: 2px;
      background: currentColor;
      border-radius: 2px;
      transform: rotate(45deg);
      content: '';
    }
  }

  &__trigger-text {
    flex: 1;
    overflow: hidden;
    font-size: 13px;
    line-height: 32px;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
  }

  &__trigger-key {
    padding: 1px 5px;
    color: rgba(255, 255, 255, 0.55);
    font-size: 12px;
    font-family: var(--van-doc-code-font-family);
    background: rgba(255, 255, 255, 0.12);
    border-radius: 6px;
  }

  &__mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding-top: 12vh;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(2px);
  }

  &__panel {
    width: 560px;
    max-width: calc(100vw - 32px);
    margin: 0 auto;
    overflow: hidden;
    background: var(--van-doc-background-2);
    border: 1px solid var(--van-doc-border-color);
    border-radius: 8px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.24);
  }

  &__input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 56px;
    padding: 0 16px;
    color: var(--van-doc-text-color-4);
    background: var(--van-doc-background-2);
    border-bottom: 1px solid var(--van-doc-border-color);
  }

  &__input {
    flex: 1;
    min-width: 0;
    height: 100%;
    color: var(--van-doc-text-color-2);
    font-size: 16px;
    background: transparent;
    border: 0;
    outline: none;

    &::placeholder {
      color: var(--van-doc-text-color-4);
    }

    &::-webkit-search-cancel-button {
      display: none;
    }
  }

  &__clear {
    position: relative;
    width: 24px;
    height: 24px;
    padding: 0;
    background: var(--van-doc-background-3);
    border: 0;
    border-radius: 50%;
    cursor: pointer;

    &::before,
    &::after {
      position: absolute;
      top: 11px;
      left: 6px;
      width: 12px;
      height: 2px;
      background: var(--van-doc-text-color-4);
      border-radius: 2px;
      content: '';
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  &__body {
    min-height: 112px;
    max-height: 420px;
    padding: 8px;
    overflow-y: auto;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    min-height: 58px;
    padding: 10px 12px;
    color: var(--van-doc-text-color-2);
    text-align: left;
    background: transparent;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;
  }

  &__item--active {
    background: var(--van-doc-background-3);

    .van-doc-search__item-title {
      color: var(--van-doc-link-color);
    }
  }

  &__item-content {
    flex: 1;
    min-width: 0;
  }

  &__item-title {
    display: block;
    overflow: hidden;
    font-size: 15px;
    line-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__item-path {
    display: block;
    margin-top: 3px;
    overflow: hidden;
    color: var(--van-doc-text-color-4);
    font-size: 12px;
    line-height: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__item-group {
    flex: none;
    max-width: 128px;
    overflow: hidden;
    color: var(--van-doc-text-color-4);
    font-size: 13px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__empty {
    padding: 40px 0;
    color: var(--van-doc-text-color-4);
    font-size: 14px;
    text-align: center;
  }

  &__footer {
    display: flex;
    align-items: center;
    gap: 16px;
    min-height: 40px;
    padding: 0 14px;
    color: var(--van-doc-text-color-4);
    font-size: 12px;
    background: var(--van-doc-background-2);
    border-top: 1px solid var(--van-doc-border-color);
  }

  &__hint {
    display: inline-flex;
    align-items: center;
    gap: 4px;

    kbd {
      min-width: 20px;
      height: 20px;
      padding: 0 5px;
      color: var(--van-doc-text-color-3);
      font-size: 12px;
      line-height: 20px;
      font-family: var(--van-doc-code-font-family);
      text-align: center;
      background: var(--van-doc-background-3);
      border: 1px solid var(--van-doc-border-color);
      border-radius: 4px;
      box-sizing: border-box;
    }
  }
}

.van-doc-search-fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
