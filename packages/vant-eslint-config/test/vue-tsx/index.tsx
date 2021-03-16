import { defineComponent, ref } from 'vue';
import App from './app';

const h2 = 1;

export default defineComponent({
  name: 'Index',
  setup() {
    const count = ref(0);

    count++;
    count + 1;
    1 + count;

    return () => (
      <>
        <h1>About</h1>

        <App />
      </>
    );
  },
});
