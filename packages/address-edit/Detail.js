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
      this.$emit('input', `${express.address || ''} ${express.name || ''}`.trim());
    }
  },

  render(h) {
    const { value, focused, searchResult } = this;

    const Finish = value && focused && android && (
      <div
        slot="icon"
        class={bem('finish')}
        onClick={() => {
          this.$refs.field.blur();
        }}
      >
        {t('complete')}
      </div>
    );

    const SearchList =
      focused &&
      searchResult &&
      this.showSearchResult &&
      searchResult.map(express => (
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
          {Finish}
        </Field>
        {SearchList}
      </Cell>
    );
  }
});
