// Utils
import { createNamespace } from '../utils';
import { isAndroid } from '../utils/validate/system';

// Components
import Cell from '../cell';
import Field from '../field';

const [createComponent, bem, t] = createNamespace('address-edit-detail');
const android = isAndroid();

export default createComponent({
  props: {
    value: String,
    errorMessage: String,
    focused: Boolean,
    detailRows: [Number, String],
    searchResult: Array,
    detailMaxlength: [Number, String],
    showSearchResult: Boolean,
  },

  emits: ['blur', 'focus', 'input', 'select-search'],

  computed: {
    shouldShowSearchResult() {
      return this.focused && this.searchResult && this.showSearchResult;
    },
  },

  methods: {
    onSelect(express) {
      this.$emit('select-search', express);
      this.$emit(
        'input',
        `${express.address || ''} ${express.name || ''}`.trim()
      );
    },

    onFinish() {
      this.$refs.field.blur();
    },

    onFocus(event) {
      this.$emit('focus', event);
    },

    onBlur(event) {
      this.$emit('blur', event);
    },

    genFinish() {
      const show = this.value && this.focused && android;
      if (show) {
        return (
          <div class={bem('finish')} onClick={this.onFinish}>
            {t('complete')}
          </div>
        );
      }
    },

    genSearchResult() {
      const { value, shouldShowSearchResult, searchResult } = this;
      if (shouldShowSearchResult) {
        return searchResult.map((express) => (
          <Cell
            v-slots={{
              title: () => {
                if (express.name) {
                  const text = express.name.replace(
                    value,
                    `<span class=${bem('keyword')}>${value}</span>`
                  );

                  return <div innerHTML={text} />;
                }
              },
            }}
            key={express.name + express.address}
            clickable
            border={false}
            icon="location-o"
            label={express.address}
            class={bem('search-item')}
            onClick={() => {
              this.onSelect(express);
            }}
          />
        ));
      }
    },
  },

  render() {
    return (
      <Cell class={bem()}>
        <Field
          v-slots={{ icon: this.genFinish }}
          autosize
          ref="field"
          rows={this.detailRows}
          clearable={!android}
          type="textarea"
          label={t('label')}
          border={!this.shouldShowSearchResult}
          maxlength={this.detailMaxlength}
          modelValue={this.value}
          placeholder={t('placeholder')}
          errorMessage={this.errorMessage}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          {...{
            'onUpdate:modelValue': (val) => {
              this.$emit('input', val);
            },
          }}
        />
        {this.genSearchResult()}
      </Cell>
    );
  },
});
