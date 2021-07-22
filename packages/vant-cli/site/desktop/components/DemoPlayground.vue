<template>
  <div :class="{ 'demo-playground': !inline, transform }">
    <slot v-if="inline" />
    <template v-else>
      <div class="demo-playground--previewer" :class="{ compact }">
        <slot />
      </div>
      <div class="demo-playground--code">
        <div class="demo-playground--code--actions">
          <span></span>
          <button
            title="Copy source code"
            class="action-icon"
            role="copy"
            :data-status="copyStatus"
            @click="copySourceCode"
          />
          <button
            title="Toggle source code panel"
            class="action-icon"
            role="source"
            @click="toogleSource"
          />
        </div>
        <div
          v-show="showSource"
          v-html="unescape(codeSnippet)"
          class="demo-playground--code--content"
        ></div>
      </div>
    </template>
  </div>
</template>

<script>
// from https://30secondsofcode.org
function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  const selection = document.getSelection();

  if (!selection) {
    return;
  }

  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    selection.removeAllRanges();
    selection.addRange(selected);
  }
}

export default {
  name: 'DemoPlayground',
  props: {
    originCode: String, // 源文件内容
    codeSnippet: String, //  源文件转 html 后的内容
    transform: Boolean, // 防止 position fixed 内容飞出预览区域
    compact: Boolean, // 紧凑模式
    inline: Boolean, // 不需要容器
  },
  data() {
    return {
      showSource: false,
      copyStatus: 'ready',
    };
  },
  methods: {
    unescape,
    toogleSource() {
      this.showSource = !this.showSource;
    },
    copySourceCode() {
      copyToClipboard(unescape(this.originCode));
      this.copyStatus = 'copied';
      setTimeout(() => {
        this.copyStatus = 'ready';
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
.demo-playground {
  background-color: #fff;
  border: 1px solid #ebedf1;
  border-radius: 1px;
  margin: 24px 0;
  &.transform {
    transform: translate(0, 0);
  }
  &--previewer {
    padding: 40px 24px;
    border-bottom: 1px solid #ebedf1;
    &.compact {
      padding: 0;
    }
  }
  &--code {
    &--actions {
      display: flex;
      height: 40px;
      padding: 0 1em;
      align-items: center;
      > a:not(:last-child),
      > button:not(:last-child) {
        margin-right: 8px;
      }

      > a {
        display: flex;
      }

      button {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        cursor: pointer;
        opacity: 0.6;
        outline: none;
        transition: opacity 0.2s, background 0.2s;

        // expand click area
        &::after {
          content: '';
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
        }

        &:hover {
          opacity: 0.8;
        }

        &:active {
          opacity: 0.9;
        }

        &:disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }

        &[role='codesandbox'] {
          background-position: -18px 0;
        }

        &[role='codepen'] {
          background-position: -36px 0;
        }

        &[role='source'] {
          background-position: -72px 0;
        }

        &[role='change-jsx'] {
          background-position: -90px 0;
        }

        &[role='change-tsx'] {
          background-position: -108px 0;
        }

        &[role='open-demo'] {
          background-position: -126px 0;
        }

        &[role='motions'] {
          background-position: -162px 0;
        }

        &[role='sketch-component'] {
          background-position: -182px 0;
        }

        &[role='sketch-group'] {
          background-position: -200px 0;
        }

        &[role='copy'][data-status='ready'] {
          background-position: -54px 0;
        }

        &[role='copy'][data-status='copied'] {
          pointer-events: none;
          background-position: -54px -16px;
        }

        &[role='refresh'] {
          background-position-x: -144px;
        }
      }

      // split action buttons by a blank node
      > span {
        flex: 1;
        display: inline-block;
      }
    }
    &--content {
      border-top: 1px dashed #ebedf1;
      :deep(pre) {
        margin: 0;
      }
      :deep(.language-html) {
        border-radius: 0;
      }
    }
  }
}

.action-icon {
  background: url('data:image/png;base64,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')
    no-repeat 0 0/230px auto;
}
</style>
