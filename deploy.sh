#!/usr/bin/env sh

# 先把代码提交到GitHub
rm -rf .git/
rm -rf blog/.vuepress/dist/

git init
git add .
git commit -m 'git push origin master'
# git remote add origin https://github.com/dsh225/my-blog.git
git push -f https://github.com/dsh225/my-blog.git master:master

rm -rf .git/


# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd blog/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/dsh225/my-blog.git master:gh-pages

cd -