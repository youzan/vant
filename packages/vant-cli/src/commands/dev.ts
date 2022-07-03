import { setNodeEnv } from '../common/index.js';
import { compileSite } from '../compiler/compile-site.js';

export async function dev() {
  setNodeEnv('development');
  await compileSite();
}
