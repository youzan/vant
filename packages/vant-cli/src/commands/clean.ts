import { emptyDirSync } from 'fs-extra';
import { ES_DIR, LIB_DIR, DIST_DIR } from '../common/constant';

export function clean() {
  emptyDirSync(ES_DIR);
  emptyDirSync(LIB_DIR);
  emptyDirSync(DIST_DIR);
}
