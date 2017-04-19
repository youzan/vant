git checkout master
git merge dev

#!/usr/bin/env sh
set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # build
  VERSION=$VERSION npm run dist

  # publish zanui-css
  echo "Releasing zanui-css $VERSION ..."
  cd packages/zanui-css
  npm version $VERSION --message "[release] $VERSION"
  npm publish --registry=http://registry.npm.qima-inc.com
  cd ../..

  # commit
  git add -A
  git commit -m "[build] $VERSION"
  npm version $VERSION --message "[release] $VERSION"

  # publish
  git push origin master
  git push origin refs/tags/v$VERSION

  npm publish --registry=http://registry.npm.qima-inc.com
fi
