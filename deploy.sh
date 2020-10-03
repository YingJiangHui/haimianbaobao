#!/bin/bash
rm -rf dist &&
parcel build index.html --public-url ./&&
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add gitee git@gitee.com:yingjianghui/haimianbaobao.git &&
git remote add github git@github.com:YingJiangHui/haimianbaobao-websit.git &&

git push -u gitee master -f &&
git push -u github master -f &&

cd -