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


// 添加到 components.json
gulp.task('addComponents', function(callback) {
  const componentsFile = require('../../components.json');
  if (componentsFile[name]) {
    console.error(`${name} 已存在.`);
    process.exit(1);
  }
  componentsFile[name] = `./packages/${name}/index.js`;
  fileSave(path.join(__dirname, '../../components.json'))
    .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
    .end('\n');
  gutil.log('-------> components.json文件更新成功');
  gutil.log(gutil.colors.yellow('-------> 请无视下面的make报错'));
});

runSequence('copy', 'addComponents');

