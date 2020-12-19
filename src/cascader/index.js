import { createNamespace } from '../utils';
import Tab from '../tab';
import Tabs from '../tabs';

const [createComponent, bem] = createNamespace('cascader');

export default createComponent({
  props: {
    value: Array,
    title: String,
    options: Array,
    placeholder: String,
    activeColor: String,
    closeable: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      tabs: [],
      activeTab: 0,
    };
  },

  watch: {
    options() {
      // reset options and tab
    },

    value() {
      // reset options and tab
    },
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      if (this.value) {
        //
      } else {
        this.tabs = [
          {
            title: this.placeholder || this.t('placeholder'),
            options: this.options,
          },
        ];
      }
    },

    genHeader() {
      return (
        <div class={bem('header')}>
          <h2 class={bem('title')}>{this.slots('title') || this.title}</h2>
        </div>
      );
    },

    genTabs() {
      return (
        <Tabs class={bem('tabs')}>
          {this.tabs.map((item) => (
            <Tab title={item.title}>{this.genOptions(item.options)}</Tab>
          ))}
        </Tabs>
      );
    },

    genOptions(options) {
      return (
        <ul class={bem('options')}>
          {options.map((option) => (
            <li class={bem('option')}>{option.text}</li>
          ))}
        </ul>
      );
    },
  },

  render() {
    return (
      <div class={bem()}>
        {this.genHeader()}
        {this.genTabs()}
      </div>
    );
  },
});
