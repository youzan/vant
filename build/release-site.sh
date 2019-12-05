#!/usr/bin/env sh
rm -rf docs/dist

vant-cli build-site

superman-cdn /vant ./docs/dist/*.js

rm -rf docs/dist/*.js

gh-pages -d docs/dist --add
