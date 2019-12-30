import { emptyDir } from 'fs-extra';
import { setNodeEnv } from '../common';
import { compileSite } from '../compiler/compile-site';
import { SITE_DIST_DIR } from '../common/constant';

export async function buildSite() {
  setNodeEnv('production');
  await emptyDir(SITE_DIST_DIR);
  await compileSite(true);
}
