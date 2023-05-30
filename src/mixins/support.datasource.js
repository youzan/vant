import { formatResult } from "../utils/format/data-source";

export default {
  props: {
    dataSource: [Array, Function, Object],
    dataSchema: { type: String, default: 'entity' },
    valueField: { type: String, default: 'value' },
    textField: { type: String, default: 'text' },

    parentField: { type: String, default: 'parentId' },
    childrenField: { type: String, default: 'children' },
  },
  data() {
    return {
      currentDataSource: undefined,
      loading: false,
    };
  },
  watch: {
    dataSource() {
      this.handleData();
    },
  },
  created() {
    this.handleData();
    if (this.currentDataSource && this.currentDataSource.load) this.load();
  },
  methods: {
    handleData() {
      this.currentDataSource = this.normalizeDataSource(
        this.dataSource,
        this.multiple
      );
    },
    normalizeDataSource(dataSource, multiple) {
      const final = {
        data: [],
        load: undefined,
      };

      function createLoad(rawLoad) {
        return async function (params = {}) {
          const res = await rawLoad(params);
          // 数据源为逻辑时，就不考虑返回值是function了，不支持套娃
          final.data = formatResult(res);
        };
      }

      if (typeof dataSource === 'function') {
        final.load = createLoad(dataSource);
      } else {
        final.data = formatResult(dataSource);
      }

      return final;
    },
    load(params) {
      this.loading = true;
      this.currentDataSource.load(params).finally(() => {
        this.loading = false;
      });
    },
  },
};
