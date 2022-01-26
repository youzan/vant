import { ref, defineComponent, type PropType } from 'vue';

// Utils
import { createNamespace, numericProp } from '../utils';

// Components
import { Cell } from '../cell';
import { Field } from '../field';

// Types
import type { AddressEditSearchItem } from './types';
import type { FieldRule, FieldInstance } from '../field/types';

const [name, bem] = createNamespace('address-edit-detail');
const t = createNamespace('address-edit')[2];

export default defineComponent({
  name,

  props: {
    show: Boolean,
    rows: numericProp,
    value: String,
    rules: Array as PropType<FieldRule[]>,
    focused: Boolean,
    maxlength: numericProp,
    searchResult: Array as PropType<AddressEditSearchItem[]>,
    showSearchResult: Boolean,
  },

  emits: ['blur', 'focus', 'input', 'select-search'],

  setup(props, { emit }) {
    const field = ref<FieldInstance>();

    const showSearchResult = () =>
      props.focused && props.searchResult && props.showSearchResult;

    const onSelect = (express: AddressEditSearchItem) => {
      emit('select-search', express);
      emit('input', `${express.address || ''} ${express.name || ''}`.trim());
    };

    const renderSearchTitle = (express: AddressEditSearchItem) => {
      if (express.name) {
        const text = express.name.replace(
          props.value!,
          `<span class=${bem('keyword')}>${props.value}</span>`
        );

        return <div innerHTML={text} />;
      }
    };

    const renderSearchResult = () => {
      if (!showSearchResult()) {
        return;
      }

      const { searchResult } = props;
      return searchResult!.map((express) => (
        <Cell
          v-slots={{
            title: () => renderSearchTitle(express),
          }}
          clickable
          key={express.name + express.address}
          icon="location-o"
          label={express.address}
          class={bem('search-item')}
          border={false}
          onClick={() => onSelect(express)}
        />
      ));
    };

    const onBlur = (event: Event) => emit('blur', event);
    const onFocus = (event: Event) => emit('focus', event);
    const onInput = (value: string) => emit('input', value);

    return () => {
      if (props.show) {
        return (
          <>
            <Field
              autosize
              clearable
              ref={field}
              class={bem()}
              rows={props.rows}
              type="textarea"
              rules={props.rules}
              label={t('addressDetail')}
              border={!showSearchResult()}
              maxlength={props.maxlength}
              modelValue={props.value}
              placeholder={t('addressDetail')}
              onBlur={onBlur}
              onFocus={onFocus}
              onUpdate:modelValue={onInput}
            />
            {renderSearchResult()}
          </>
        );
      }
    };
  },
});
