import { setNodeEnv } from '../common';
import { compileSite } from '../compiler/compile-site';

export async function buildSite() {
  setNodeEnv('production');
  await compileSite(true);
}
