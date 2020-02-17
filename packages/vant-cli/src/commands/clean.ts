import { emptyDir } from 'fs-extra';
import { ES_DIR, LIB_DIR, DIST_DIR, SITE_DIST_DIR } from '../common/constant';

export async function clean() {
  await Promise.all([
    emptyDir(ES_DIR),
    emptyDir(LIB_DIR),
    emptyDir(DIST_DIR),
    emptyDir(SITE_DIST_DIR),
  ]);
}
