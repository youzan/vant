import fse from 'fs-extra';
import { setNodeEnv } from '../common/index.js';
import { compileSite } from '../compiler/compile-site.js';
import { SITE_DIST_DIR } from '../common/constant.js';

export async function buildSite() {
  setNodeEnv('production');
  await fse.emptyDir(SITE_DIST_DIR);
  await compileSite(true);
}
