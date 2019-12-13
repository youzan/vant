import { join } from 'path';
import { exec } from 'shelljs';
import { ROOT } from '../common/constant';

export function changelog(dist: string, cmd: { tag?: string }) {
  const tag = cmd.tag || 'v1.0.0';

  exec(
    `
    basepath=${ROOT}

    github_changelog_generator \
      --header-label "# 更新日志" \
      --bugs-label "**Bug Fixes**" \
      --enhancement-label "**Breaking changes**" \
      --issues-label "**Issue**" \
      --pr-label "**Features**" \
      --max-issues 0 \
      --no-author \
      --no-unreleased \
      --since-tag ${tag} \
      -o ${join(ROOT, dist)}
    `,
    {
      silent: false
    }
  );
}
