import { join } from 'path';
import { exec } from 'shelljs';

export function changelog(dist: string, cmd: { tag?: string }) {
  const basepath = process.cwd();
  const tag = cmd.tag || 'v1.0.0';

  exec(`
    basepath=${basepath}

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
      -o ${join(basepath, dist)}
    `);
}
