#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:UNIZAR-30226-2021-09/ps-09-frontweb.github.io.git master:gh-pages

cd -