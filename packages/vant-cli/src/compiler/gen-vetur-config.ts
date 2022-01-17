import markdownVetur from '@vant/markdown-vetur';
import {
  SRC_DIR,
  VETUR_DIR,
  getVantConfig,
  getPackageJson,
} from '../common/constant.js';

// generate vetur tags & attributes
export function genVeturConfig() {
  const pkgJson = getPackageJson();
  const vantConfig = getVantConfig();
  const options = vantConfig.build?.vetur;

  if (options) {
    markdownVetur.parseAndWrite({
      name: vantConfig.name,
      path: SRC_DIR,
      test: /README\.md/,
      version: pkgJson.version,
      outputDir: VETUR_DIR,
      ...options,
    });
  }
}
