import { setNodeEnv } from '../common/index.js';
import { compileSite } from '../compiler/compile-site.js';
import { performance } from 'perf_hooks';

export async function dev() {
  console.log(performance.now());
  setNodeEnv('development');
  await compileSite();
}
