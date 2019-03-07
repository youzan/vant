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

    renderFinish() {
      const show = this.value && this.focused && android;
      if (show) {
        return (
          <div class={bem('finish')} onClick={this.onFinish}>
            {t('complete')}
          </div>
        );
      }
    },

    renderSearchResult() {
      const { searchResult } = this;
      const show = this.focused && searchResult && this.showSearchResult;
      if (show) {
        return searchResult.map(express => (
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
        ));
      }
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
          scopedSlots={{ icon: this.renderFinish }}
          {...{ on: this.$listeners }}
        />
        {this.renderSearchResult()}
      </Cell>
    );
  }
});
