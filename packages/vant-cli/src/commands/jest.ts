import { runCLI } from 'jest';
import { setNodeEnv } from '../common';
import { genPackageEntry } from '../compiler/gen-package-entry';
import { CWD, JEST_CONFIG_FILE, PACKAGE_ENTRY_FILE } from '../common/constant';

export function test(command: any) {
  setNodeEnv('test');

  genPackageEntry({
    outputPath: PACKAGE_ENTRY_FILE
  });

  const config = {
    rootDir: CWD,
    watch: command.watch,
    config: JEST_CONFIG_FILE
  } as any;

  runCLI(config, [CWD]);
}
