git checkout master
git merge dev

basepath=$(dirname $0)

if ! command_exists github_changelog_generator ; then
    fail 'github_changelog_generator is required to publish packages'
fi

if [ -z "$CHANGELOG_GITHUB_TOKEN" ] ; then
    fail 'You must set CHANGELOG_GITHUB_TOKEN environment variable\nhttps://github.com/skywinder/github-changelog-generator#github-token'
fi

#!/usr/bin/env sh
set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  github_changelog_generator \
    --header-label "## 更新日志" \
    --bugs-label "**修复:**" \
    --enhancement-label "**非兼容更新和新特性:**" \
    --issues-label "**处理的 Issue:**" \
    --pr-label "**合并的 Pull Request (可能有不兼容改动):**" \
    --no-unreleased \
    -o $basepath/../docs/examples-docs/changelog.md

  # build
  VERSION=$VERSION npm run dist

  # publish vant-css
  echo "Releasing vant-css $VERSION ..."
  cd packages/vant-css
  npm version $VERSION --message "[release] $VERSION"
  npm publish
  cd ../..

  # commit
  git add -A
  npm version $VERSION --message "[release] $VERSION"

  # publish
  git push origin master
  git push origin refs/tags/v$VERSION
  git checkout dev
  git rebase master
  git push origin dev

  npm publish
fi
