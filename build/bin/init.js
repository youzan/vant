#!/usr/bin/env node
const ch = require('child_process');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const gutil = require('gulp-util');
const fileSave = require('file-save');
const path = require('path');
const exec = ch.exec;

if (!process.argv[2]) {
  console.error('[组件名]必填.');
  process.exit(1);
}

const name = process.argv[2];


// 项目规范文件拷贝
gulp.task('copy', function(callback) {
  gutil.log(gutil.colors.yellow('-------> 开始初始化'));

  exec('cd packages && git clone git@gitlab.qima-inc.com:fe/vue-seed.git ' + name, function(err, stdout, stderr) {
    gutil.log('-------> 拉取 vue-seed');
    exec('rm -rf ./packages/' + name + '/.git', function(err, stdout, stderr) {
      gutil.log('-------> ' + name + '组件初始化成功');
      callback();
    });
  });
});

runSequence('copy', 'addComponents');

