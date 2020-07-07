import { ref } from 'vue';
import { deepAssign } from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

type Messages = Record<string, Record<string, any>>;

const lang = ref('zh-CN');
const messages = ref<Messages>({
  'zh-CN': defaultMessages,
});

export default {
  messages() {
    return messages.value[lang.value];
  },

  use(newLang: string, newMessages?: object) {
    lang.value = newLang;
    this.add({ [newLang]: newMessages });
  },

  add(newMessages = {}) {
    deepAssign(messages.value, newMessages);
  },
};
