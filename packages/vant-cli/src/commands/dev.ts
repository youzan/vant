import { emptyDir } from 'fs-extra';
import { setNodeEnv } from '../common';
import { compileSite } from '../compiler/compile-site';
import { DIST_DIR } from '../common/constant';

export async function dev() {
  setNodeEnv('development');
  await emptyDir(DIST_DIR);
  await compileSite();
}
