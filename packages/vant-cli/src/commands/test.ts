import { runCLI } from 'jest';
import { CWD, JEST_CONFIG_FILE } from '../common/constant';

export function test(command: any) {
  process.env.NODE_ENV = 'test';

  const config = {
    rootDir: CWD,
    watch: command.watch,
    config: JEST_CONFIG_FILE
  } as any;

  runCLI(config, [CWD]);
}
