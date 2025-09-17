import { logger } from 'rslog';
import { readFileSync } from 'node:fs';

const commitRE =
  /^(revert: )?(fix|feat|docs|perf|test|types|style|build|chore|release|refactor|breaking change)(\(.+\))?: .{1,50}/;
const mergeRE = /Merge /;

export function commitLint(gitParams: string) {
  const commitMsg = readFileSync(gitParams, 'utf-8').trim();

  if (!commitRE.test(commitMsg) && !mergeRE.test(commitMsg)) {
    logger.error(`invalid commit message: "${commitMsg}".

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
- release
- refactor
- breaking change
- Merge branch 'foo' into 'bar'
`);
    process.exit(1);
  }
}
