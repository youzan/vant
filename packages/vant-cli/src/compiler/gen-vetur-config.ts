import markdownVetur from '@vant/markdown-vetur';
import { join } from 'path';
import { get } from 'lodash';
import {
  ROOT,
  SRC_DIR,
  getVantConfig,
  getPackageJson,
} from '../common/constant';

// generate vetur tags & attributes
export function genVeturConfig() {
  const vantConfig = getVantConfig();
  const pkgJson = getPackageJson();
  const options = get(vantConfig, 'build.vetur');

  if (options) {
    markdownVetur.parseAndWrite({
      name: vantConfig.name,
      version: pkgJson.version,
      path: SRC_DIR,
      test: /zh-CN\.md/,
      outputDir: join(ROOT, 'vetur'),
      ...options,
    });
  }
}
