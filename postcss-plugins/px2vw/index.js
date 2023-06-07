/* eslint-disable @typescript-eslint/no-use-before-define */

const postcss = require('postcss');
const objectAssign = require('object-assign');
const { createPropListMatcher } = require('./prop-list-matcher');
const { getUnitRegexp } = require('./pixel-unit-regexp');

const defaults = {
  unitToConvert: 'px',
  viewportWidth: 320,
  viewportHeight: 568, // not now used; TODO: need for different units and math for different properties
  unitPrecision: 5,
  viewportUnit: 'vw',
  fontViewportUnit: 'vw', // vmin is more suitable.
  selectorBlackList: [],
  propList: ['*'],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  landscape: false,
  landscapeUnit: 'vw',
  landscapeWidth: 568,
};

module.exports = postcss.plugin('postcss-px-to-viewport', function (options) {
  const opts = objectAssign({}, defaults, options);

  const pxRegex = getUnitRegexp(opts.unitToConvert);
  const satisfyPropList = createPropListMatcher(opts.propList);

  return function (css) {
    const landscapeRules = [];

    css.walkRules(function (rule) {
      // Add exclude option to ignore some files like 'node_modules'
      const file = rule.source && rule.source.input.file;

      if (opts.exclude && file) {
        if (
          Object.prototype.toString.call(opts.exclude) === '[object RegExp]'
        ) {
          if (isExclude(opts.exclude, file)) return;
        } else if (
          Object.prototype.toString.call(opts.exclude) === '[object Array]'
        ) {
          for (let i = 0; i < opts.exclude.length; i++) {
            if (isExclude(opts.exclude[i], file)) return;
          }
        } else {
          throw new Error('options.exclude should be RegExp or Array.');
        }
      }

      if (blacklistedSelector(opts.selectorBlackList, rule.selector)) return;

      // 生成横屏媒体查询rule
      if (opts.landscape && !rule.parent.params) {
        const landscapeRule = rule.clone().removeAll();

        rule.walkDecls(function (decl) {
          if (decl.value.indexOf(opts.unitToConvert) === -1) return;
          if (!satisfyPropList(decl.prop)) return;

          landscapeRule.append(
            decl.clone({
              value: decl.value.replace(
                pxRegex,
                createPxReplace(opts, opts.landscapeUnit, opts.landscapeWidth)
              ),
            })
          );
        });

        if (landscapeRule.nodes.length > 0) {
          landscapeRules.push(landscapeRule);
        }
      }

      if (!validateParams(rule.parent.params, opts.mediaQuery)) return;

      rule.walkDecls(function (decl, i) {
        if (decl.value.indexOf(opts.unitToConvert) === -1) return;
        if (!satisfyPropList(decl.prop)) return;

        let unit;
        let size;
        const { params } = rule.parent;

        const isLandscape = file?.includes('number-keyboard');
        if (opts.landscape && params && params.indexOf('landscape') !== -1 && isLandscape) {
          unit = opts.landscapeUnit;
          size = opts.landscapeWidth;
        } else {
          unit = getUnit(decl.prop, opts);
          size = opts.viewportWidth;
        }

        const value = decl.value.replace(
          pxRegex,
          createPxReplace(opts, unit, size)
        );

        if (declarationExists(decl.parent, decl.prop, value)) return;

        if (opts.replace) {
          decl.value = value;
        } else {
          decl.parent.insertAfter(i, decl.clone({ value }));
        }
      });
    });

    // 插入横屏媒体查询rule
    if (landscapeRules.length > 0) {
      // issue: https://github.com/evrone/postcss-px-to-viewport/issues/100
      // const landscapeRoot = new postcss.atRule({
      //   params: '(orientation: landscape)',
      //   name: 'media',
      // });

      const landscapeRoot = new postcss.atRule({
        params: '(min-aspect-ratio: 13 / 9)',
        name: 'media',
      });

      landscapeRules.forEach(function (rule) {
        landscapeRoot.append(rule);
      });

      css.append(landscapeRoot);
    }
  };
});

function getUnit(prop, opts) {
  return prop.indexOf('font') === -1
    ? opts.viewportUnit
    : opts.fontViewportUnit;
}

function createPxReplace(opts, viewportUnit, viewportSize) {
  return function (m, $1) {
    if (!$1) return m;
    const pixels = parseFloat($1);
    if (pixels <= opts.minPixelValue) return m;
    const parsedVal = toFixed((pixels / viewportSize) * 100, opts.unitPrecision);
    return parsedVal === 0 ? '0' : parsedVal + viewportUnit;
  };
}

function toFixed(number, precision) {
  const multiplier = Math.pow(10, precision + 1);
    const wholeNumber = Math.floor(number * multiplier);
  return (Math.round(wholeNumber / 10) * 10) / multiplier;
}

function blacklistedSelector(blacklist, selector) {
  if (typeof selector !== 'string') return;
  return blacklist.some(function (regex) {
    if (typeof regex === 'string') return selector.indexOf(regex) !== -1;
    return selector.match(regex);
  });
}

function isExclude(reg, file) {
  if (Object.prototype.toString.call(reg) !== '[object RegExp]') {
    throw new Error('options.exclude should be RegExp.');
  }
  return file.match(reg) !== null;
}

function declarationExists(decls, prop, value) {
  return decls.some(function (decl) {
    return decl.prop === prop && decl.value === value;
  });
}

function validateParams(params, mediaQuery) {
  return !params || (params && mediaQuery);
}
