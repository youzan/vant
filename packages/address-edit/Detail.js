import { use, isAndroid } from '../utils';
import Cell from '../cell';
import Field from '../field';

const [sfc, bem, t] = use('address-edit-detail');
const android = isAndroid();

export default sfc({
  props: {
    value: String,
    error: Boolean,
    focused: Boolean,
    detailRows: Number,
    searchResult: Array,
    showSearchResult: Boolean
  },

  computed: {
    searchList() {
      if (this.showSearchResult && this.focused) {
        return this.searchResult || [];
      }
      return [];
    },

    showIcon() {
      return this.value && this.focused;
    }
  },

  methods: {
    onSelect(express) {
      this.$emit('select-search', express);
      this.$emit('input', `${express.address || ''} ${express.name || ''}`.trim());
    }
  },

  render(h) {
    return (
      <Cell class={bem()}>
        <Field
          autosize
          ref="field"
          rows={this.detailRows}
          clearable={!android}
          type="textarea"
          maxlength="200"
          value={this.value}
          error={this.error}
          label={t('label')}
          placeholder={t('placeholder')}
          {...{ on: this.$listeners }}
        >
          {this.showIcon && android && (
            <div
              slot="icon"
              class={bem('finish')}
              onClick={() => {
                this.$refs.field.blur();
              }}
            >
              {t('complete')}
            </div>
          )}
        </Field>
        {this.searchList.map(express => (
          <Cell
            key={express.name + express.address}
            title={express.name}
            label={express.address}
            icon="location-o"
            clickable
            onClick={() => {
              this.onSelect(express);
            }}
          />
        ))}
      </Cell>
    );
  }
});
