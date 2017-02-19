/**
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {string} [size=normal] - 尺寸，接受 normal, mini, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {slot} - 显示文本
 *
 * @example
 * <z-button size="large" type="primary">按钮</z-button>
 */

const allowedSize = ['mini', 'small', 'normal', 'large'];
const allowedType = ['default', 'danger', 'primary'];

export default {
  name: 'z-button',

  props: {
    disabled: Boolean,
    loading: Boolean,
    block: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    nativeType: String,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return allowedType.indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return allowedSize.indexOf(value) > -1;
      }
    }
  },

  render(h) {
    let { type, nativeType, size, disabled, loading, block } = this;
    let Tag = this.tag;

    return (
      <Tag
        type={nativeType}
        disabled={disabled}
        class={[
          'z-button',
          'z-button--' + type,
          'z-button--' + size,
          {
            'is-disabled': disabled,
            'is-loading': loading,
            'is-block': block
          }
        ]}
      >
        {
          loading ? <i class="z-icon-loading"></i> : null
        }
        <span class="z-button-text">{this.$slots.default}</span>
      </Tag>
    );
  }
};
