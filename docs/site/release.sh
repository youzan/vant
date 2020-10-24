#!/usr/bin/env sh
vant-cli build-site

superman-cdn /vant ./site/*.js

rm -rf site/*.js

gh-pages -d site --add --dest next
