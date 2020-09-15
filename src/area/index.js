import { ref, watch, computed, reactive, nextTick, onMounted } from 'vue';
import { createNamespace, pick } from '../utils';
import { useExpose } from '../composition/use-expose';
import { pickerProps } from '../picker/shared';
import Picker from '../picker';

const [createComponent, bem] = createNamespace('area');

const EMPTY_CODE = '000000';

function isOverseaCode(code) {
  return code[0] === '9';
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default createComponent({
  props: {
    ...pickerProps,
    value: String,
    areaList: {
      type: Object,
      default: () => ({}),
    },
    columnsNum: {
      type: [Number, String],
      default: 3,
    },
    isOverseaCode: {
      type: Function,
      default: isOverseaCode,
    },
    columnsPlaceholder: {
      type: Array,
      default: () => [],
    },
  },

  emits: ['change', 'confirm'],

  setup(props, { emit, slots }) {
    const pickerRef = ref();

    const state = reactive({
      code: props.value,
      columns: [{ values: [] }, { values: [] }, { values: [] }],
    });

    const areaList = computed(() => {
      const { areaList } = props;
      return {
        province: areaList.province_list || {},
        city: areaList.city_list || {},
        county: areaList.county_list || {},
      };
    });

    const placeholderMap = computed(() => {
      const { columnsPlaceholder } = props;
      return {
        province: columnsPlaceholder[0] || '',
        city: columnsPlaceholder[1] || '',
        county: columnsPlaceholder[2] || '',
      };
    });

    const getDefaultCode = () => {
      if (props.columnsPlaceholder.length) {
        return EMPTY_CODE;
      }

      const { county, city } = areaList.value;

      const countyCodes = Object.keys(county);
      if (countyCodes[0]) {
        return countyCodes[0];
      }

      const cityCodes = Object.keys(city);
      if (cityCodes[0]) {
        return cityCodes[0];
      }

      return '';
    };

    // get list by code
    const getList = (type, code) => {
      let result = [];
      if (type !== 'province' && !code) {
        return result;
      }

      const list = areaList.value[type];
      result = Object.keys(list).map((listCode) => ({
        code: listCode,
        name: list[listCode],
      }));

      if (code) {
        // oversea code
        if (type === 'city' && props.isOverseaCode(code)) {
          code = '9';
        }
        result = result.filter((item) => item.code.indexOf(code) === 0);
      }

      if (placeholderMap.value[type] && result.length) {
        // set columns placeholder
        let codeFill = '';
        if (type === 'city') {
          codeFill = EMPTY_CODE.slice(2, 4);
        } else if (type === 'county') {
          codeFill = EMPTY_CODE.slice(4, 6);
        }

        result.unshift({
          code: code + codeFill,
          name: placeholderMap.value[type],
        });
      }

      return result;
    };

    // get index by code
    const getIndex = (type, code) => {
      let compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      const list = getList(type, code.slice(0, compareNum - 2));

      // oversea code
      if (props.isOverseaCode(code) && type === 'province') {
        compareNum = 1;
      }

      code = code.slice(0, compareNum);

      for (let i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    };

    const setValues = () => {
      let { code } = state;
      if (!code) {
        code = getDefaultCode();
      }

      const picker = pickerRef.value;
      const province = getList('province');
      const city = getList('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (
        city.length &&
        code.slice(2, 4) === '00' &&
        !props.isOverseaCode(code)
      ) {
        [{ code }] = city;
      }

      picker.setColumnValues(2, getList('county', code.slice(0, 4)));
      picker.setIndexes([
        getIndex('province', code),
        getIndex('city', code),
        getIndex('county', code),
      ]);
    };

    // parse output columns data
    const parseValues = (values) => {
      return values.map((value, index) => {
        if (value) {
          value = clone(value);

          if (!value.code || value.name === props.columnsPlaceholder[index]) {
            value.code = '';
            value.name = '';
          }
        }

        return value;
      });
    };

    const getValues = () => {
      if (pickerRef.value) {
        const values = pickerRef.value.getValues().filter((value) => !!value);
        return parseValues(values);
      }
      return [];
    };

    const getArea = () => {
      const values = getValues();
      const area = {
        code: '',
        country: '',
        province: '',
        city: '',
        county: '',
      };

      if (!values.length) {
        return area;
      }

      const names = values.map((item) => item.name);
      const validValues = values.filter((value) => !!value.code);

      area.code = validValues.length
        ? validValues[validValues.length - 1].code
        : '';

      if (props.isOverseaCode(area.code)) {
        area.country = names[1] || '';
        area.province = names[2] || '';
      } else {
        area.province = names[0] || '';
        area.city = names[1] || '';
        area.county = names[2] || '';
      }

      return area;
    };

    const reset = (newCode = '') => {
      state.code = newCode;
      setValues();
    };

    const onChange = (values, index) => {
      state.code = values[index].code;
      setValues();

      const parsedValues = parseValues(pickerRef.value.getValues());
      emit('change', parsedValues, index);
    };

    const onConfirm = (values, index) => {
      setValues();
      emit('confirm', parseValues(values), index);
    };

    onMounted(setValues);

    watch(
      () => props.value,
      (value) => {
        state.code = value;
        setValues();
      }
    );

    watch(() => props.areaList, setValues, { deep: true });

    watch(
      () => props.columnsNum,
      () => {
        nextTick(setValues);
      }
    );

    useExpose({ reset, getArea });

    return () => {
      const columns = state.columns.slice(0, +props.columnsNum);

      return (
        <Picker
          v-slots={pick(slots, ['title', 'columns-top', 'columns-bottom'])}
          ref={pickerRef}
          class={bem()}
          columns={columns}
          valueKey="name"
          onChange={onChange}
          onConfirm={onConfirm}
          {...pick(props, [
            'title',
            'loading',
            'readonly',
            'itemHeight',
            'swipeDuration',
            'visibleItemCount',
            'cancelButtonText',
            'confirmButtonText',
          ])}
        />
      );
    };
  },
});
