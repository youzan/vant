import markdownVetur from '@vant/markdown-vetur';
import { get } from 'lodash';
import {
  SRC_DIR,
  VETUR_DIR,
  getVantConfig,
  getPackageJson,
} from '../common/constant';

// generate vetur tags & attributes
export function genVeturConfig() {
  const pkgJson = getPackageJson();
  const vantConfig = getVantConfig();
  const options = get(vantConfig, 'build.vetur');

  if (options) {
    markdownVetur.parseAndWrite({
      name: vantConfig.name,
      path: SRC_DIR,
      test: /zh-CN\.md/,
      version: pkgJson.version,
      outputDir: VETUR_DIR,
      ...options,
    });
  }
}
