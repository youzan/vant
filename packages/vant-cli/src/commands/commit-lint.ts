import { readFileSync } from 'fs-extra';
import { consola } from '../common/logger';

const commitRE = /^(revert: )?(fix|feat|docs|perf|test|types|style|build|chore|refactor|breaking change)(\(.+\))?: .{1,50}/;
const mergeRE = /Merge /;

export function commitLint() {
  const gitParams = process.env.HUSKY_GIT_PARAMS as string;
  const commitMsg = readFileSync(gitParams, 'utf-8').trim();

  if (!commitRE.test(commitMsg) && !mergeRE.test(commitMsg)) {
    consola.error(`invalid commit message: "${commitMsg}".

Proper commit message format is required for automated changelog generation.

Examples: 

- fix(Button): incorrect style
- feat(Button): incorrect style
- docs(Button): fix typo

Allowed Types:

- fix
- feat
- docs
- perf
- test
- types
- build
- chore
- refactor
- breaking change
- Merge branch 'foo' into 'bar'
`);
    process.exit(1);
  }
}
