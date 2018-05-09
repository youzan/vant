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
  --bugs-label "**Bug Fixes**" \
  --enhancement-label "**Breaking changes**" \
  --issues-label "**Issue**" \
  --pr-label "**Improvements**" \
  --no-unreleased \
  --max-issues 200 \
  --since-tag v1.0.0 \
  -o $basepath/../../docs/markdown/zh-CN/changelog-generated.md
