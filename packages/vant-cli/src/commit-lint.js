const fs = require('fs');
const signale = require('signale');

const commitRE = /^(revert: )?(fix|feat|docs|perf|test|types|build|chore|refactor|breaking change)(\(.+\))?: .{1,50}/;

function commitLint() {
  const gitParams = process.env.HUSKY_GIT_PARAMS;
  const commitMsg = fs.readFileSync(gitParams, 'utf-8').trim();

  if (!commitRE.test(commitMsg)) {
    signale.error(`Error: invalid commit message: "${commitMsg}".

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
`);
    process.exit(1);
  }
}

module.exports = commitLint;
