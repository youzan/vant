import { runCLI } from 'jest';
import { setNodeEnv } from '../common';
import { CWD, JEST_CONFIG_FILE } from '../common/constant';

export function test(command: any) {
  setNodeEnv('test');

  const config = {
    rootDir: CWD,
    watch: command.watch,
    config: JEST_CONFIG_FILE
  } as any;

  runCLI(config, [CWD]);
}
