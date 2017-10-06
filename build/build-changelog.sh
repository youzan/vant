#!/usr/bin/env sh

if ! command_exists github_changelog_generator ; then
    fail 'github_changelog_generator is required to publish packages'
fi

if [ -z "$CHANGELOG_GITHUB_TOKEN" ] ; then
    fail 'You must set CHANGELOG_GITHUB_TOKEN environment variable\nhttps://github.com/skywinder/github-changelog-generator#github-token'
fi

basepath=$(dirname $0)

github_changelog_generator \
  --header-label "## 更新日志" \
  --bugs-label "**修复:**" \
  --enhancement-label "**非兼容更新和新特性:**" \
  --issues-label "**处理的 Issue:**" \
  --pr-label "**合并的 Pull Request (可能有不兼容改动):**" \
  --no-unreleased \
  -o $basepath/../docs/examples-docs/zh-CN/changelog-generated.md
