#!/bin/sh

basepath=$(dirname $0)

rm -rf $basepath/../icons
sketchtool export slices --formats=svg --overwriting=YES --save-for-web=YES --output=$basepath/../icons $basepath/../assets/icons.sketch
