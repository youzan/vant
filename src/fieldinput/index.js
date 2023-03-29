import { isDef, createNamespace } from '../utils';
import { resetScroll } from '../utils/dom/reset-scroll';
import { preventDefault } from '../utils/dom/event';

import { FieldMixin } from '../mixins/field';
import Icon from '../icon';
import NumberKeyboard from '../number-keyboard';
import PasswordInput from '../password-input';
// import { times } from 'lodash';

const [createComponent, bem] = createNamespace('fieldinput');

export default createComponent({
  mixins: [FieldMixin],
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [Number, String],
    },
    defaultValue: {
      type: [Number, String],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: null,
    },
    clearable: {
      type: Boolean,
      default: null,
    },
    clearTrigger: {
      type: String,
      default: 'focus',
    },
    maxlength: [Number, String],
    keyboardTitle: {
      type: String,
      default: '',
    },
    keyboardTheme: {
      type: String,
      default: 'default',
    },
    keytheme: {
      type: String,
      default: 'native',
    },
    inputstyle: {
      type: String,
      default: 'input',
    },
  },
  data() {
    const defaultValue = this.value ?? this.defaultValue;

    return {
      currentValue: defaultValue,
      shownumber: false,
    };
  },
  computed: {
    shownumbertype() {
      return this.keytheme === 'custom';
    },
    extraKey() {
      switch (this.type) {
        case 'card':
          return 'X';
        case 'point':
          return '.';
      }
    },
  },
  mounted() {
  },
  methods: {
    getProp(key) {
      if (isDef(this[key])) {
        return this[key];
      }

      if (this.vanForm && isDef(this.vanForm[key])) {
        return this.vanForm[key];
      }
    },
    focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },

    // @exposed-api
    blur() {
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },
    clear() {
      this.currentValue = '';
      this.$emit('clear', this);
    },
    updateValue(value, trigger = 'onChange') {
      value = isDef(value) ? String(value) : '';
      const { maxlength } = this;
      if (isDef(maxlength) && value.length > maxlength) {
        if (this.value && this.value.length === +maxlength) {
          ({ value } = this);
        } else {
          value = value.slice(0, maxlength);
        }
      }
      const { input } = this.$refs;
      if (input && value !== input.value) {
        input.value = value;
      }

      if (value !== this.currentValue) {
        this.currentValue = value;
      }
    },

    onInput(event) {
      // not update v-model when composing
      if (event.target.composing) {
        return;
      }
      this.updateValue(event.target.value);
      this.$emit('input', event);
    },

    onFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
      this.vanField && this.vanField.onFocus();
      // readonly not work in legacy mobile safari
      /* istanbul ignore if */
      const readonly = this.getProp('readonly');
      if (readonly) {
        this.blur();
      }
    },

    onBlur(event) {
      this.focused = false;
      this.updateValue(this.currentValue, 'onBlur');
      this.$emit('blur', event);
      // this.validateWithTrigger('onBlur');
      // this.validateWithTriggerVusion('blur');
      resetScroll();
      this.vanField && this.vanField.onBlur();
    },
    showClear() {
      const readonly = this.getProp('readonly');
      if (this.clearable && !readonly) {
        const hasValue = isDef(this.currentValue) && this.currentValue !== '';
        const trigger =
          this.clearTrigger === 'always' ||
          (this.clearTrigger === 'focus' && this.focused);

        return hasValue && trigger;
      }
    },
    onClear(event) {
      preventDefault(event);
      this.$emit('input', '');
      this.currentValue = '';
      this.$emit('clear', event);
    },
    afterValueChange() {
      // console.log(666);
      this.currentValue = this.value;
    },
    onTouchstartinput($event) {
      $event.stopPropagation();
      if (this.readonly || this.disabled) {
        return;
      }
      !this.shownumber && (this.shownumber = true);
    },
    getContain() {
      if (this.inDesigner()) {
        return document.querySelector('[root-app]');
      }
      return document.querySelector('body');
    },
    closeNumber() {
      this.shownumber = false;
    }
  },
  watch: {
    // value: {
    //   handler: function (val, oldVal) {console.log(value, oldVal, 777)
    //     if (isDef(val) && !equal(val, this.currentValue)) {
    //       this.currentValue = val;
    //     }
    //   },
    //   immediate: true
    // },
    value(val) {
      this.updateValue(val);
    },
    currentValue(val) {
      this.$emit('update:value', val);
      this.$emit('change', val, this);
      if (this.maxlength && this.maxlength===val?.length) {
        this.$emit('enoughkey', val)
      }
    },
    type() {
      if (this.shownumbertype && this.inDesigner()) {
        this.shownumber = true;
      }
    },
    keytheme() {
      if (this.inDesigner()) {
        if (this.shownumbertype) {
          this.shownumber = true;
        } else {
          this.shownumber = false;
        }
      }
    }
  },
  render() {
    const inputAlign = this.vanField?.getProp('inputAlign');
    return (
      <div class={bem('newwrap', { clearwrap: this.clearable })}>
        {this.inputstyle === 'input' ? (
          <input
            // vShow={this.showInput}
            ref="input"
            type={this.type}
            role="fieldinput"
            class={bem('control', [inputAlign, 'custom'])}
            value={this.currentValue}
            maxlength={this.maxlength}
            // style={this.inputStyle}
            disabled={this.disabled}
            readonly={this.readonly || this.shownumbertype}
            // set keyboard in modern browsers
            // inputmode={this.integer ? 'numeric' : 'decimal'}
            placeholder={this.placeholder}
            // aria-valuemax={this.max}
            // aria-valuemin={this.min}
            // aria-valuenow={this.currentValue}
            onInput={this.onInput}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            // onMousedown={this.onMousedown}
            vusion-click-enabled
            onClick={this.onTouchstartinput}
          />
        ) : null}
        {this.showClear() && (
          <Icon name="clear" class={bem('clear')} onTouchstart={this.onClear} />
        )}
        {(this.inputstyle === 'password') ? (
          <PasswordInput
            value={this.currentValue}
            length={this.maxlength}
            onFocus={() => {
              if (this.readonly || this.disabled) {
                return
              }
              this.shownumber = true;
            }}
            mask={this.type === 'password'}
            disabled={this.disabled}
            readonly={this.readonly}
            vusion-click-enabled
            onClick={this.onTouchstartinput}
          />
        ) : null}
        {this.shownumbertype ? (
          <NumberKeyboard
            vusionnp={this.$attrs['vusion-node-path']}
            vModel={this.currentValue}
            closeButtonText={'完成'}
            show={this.shownumber}
            title={this.keyboardTitle}
            randomKeyOrder={this.type === 'rndinteger'}
            extraKey={this.extraKey}
            theme={this.keyboardTheme}
            maxlength={this.maxlength}
            getContainer={this.getContain}
            zIndex="9999"
            hideOnClickOutside={!this.inDesigner()}
            onBlur={this.closeNumber}
          />
        ) : null}
      </div>
    );
  },
});
