/**
 * @vitest-environment node
 */
// TODO
// enable this case and update snapshot after bump Vue new version
// see: https://github.com/vuejs/core/pull/10397
import Demo from '../demo/index.vue';
import { snapshotDemo } from '../../../test/demo';

snapshotDemo(Demo, { ssr: true });
