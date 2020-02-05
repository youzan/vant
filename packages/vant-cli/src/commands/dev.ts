import { setNodeEnv } from '../common';
import { compileSite } from '../compiler/compile-site';

export async function dev() {
  setNodeEnv('development');
  await compileSite();
}
