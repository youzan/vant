#!/usr/bin/env sh
vant-cli build-site

gh-pages -d site --add
