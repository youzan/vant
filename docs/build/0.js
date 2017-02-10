webpackJsonp([0],{

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./examples/button.md": 225,
	"./examples/sample.md": 226,
	"./examples/switch.md": 227
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 212;


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      author: 'pangxie'
    };
  }
};

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      switchState: true
    };
  },

  computed: {
    switchStateText: function switchStateText() {
      return this.switchState ? 'ON' : 'OFF';
    }
  },
  methods: {
    updateState: function updateState(newState) {
      console.log('changing');
      this.switchState = newState;
    }
  }
};

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".page-button{padding:0 15px 15px}.page-button-group,.page-button-group>*{margin-bottom:15px}", ""]);

// exports


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".page-switch{padding:0 15px 15px}.page-switch-sample{margin:0 15px}.page-switch-text{margin-right:20px}", ""]);

// exports


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(223)

var Component = __webpack_require__(3)(
  /* script */
  null,
  /* template */
  __webpack_require__(221),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(213),
  /* template */
  __webpack_require__(220),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(224)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(214),
  /* template */
  __webpack_require__(222),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('p', [_vm._v("author设置为test")]), _vm._v(" "), _c('demo-block', {
    staticClass: "demo-box"
  }, [_c('div', {
    staticClass: "source",
    slot: "source"
  }, [_c('sample', {
    attrs: {
      "author": _vm.author
    }
  })], 1), _vm._v(" "), _c('p', [_vm._v("样例代码")]), _vm._v(" "), _c('div', {
    staticClass: "highlight",
    slot: "highlight"
  }, [_c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("sample")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v(":author")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"author\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("sample")]), _vm._v(">")]), _vm._v("\n")])])])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    attrs: {
      "id": "sample-zu-jian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#sample-zu-jian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" sample组件")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', {
    attrs: {
      "id": "ji-chu-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ji-chu-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 基础用法")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', {
    attrs: {
      "id": "api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" API")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("className")]), _vm._v(" "), _c('td', [_vm._v("自定义额外类名")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td', [_vm._v("''")])])])])
}]}

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('demo-block', {
    staticClass: "demo-box"
  }, [_c('div', {
    staticClass: "source",
    slot: "source"
  }, [_c('div', {
    staticClass: "page-button"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Button")]), _vm._v(" "), _c('div', {
    staticClass: "page-button-group"
  }, [_c('o2-button', {
    attrs: {
      "size": "large"
    }
  }, [_vm._v("default")]), _vm._v(" "), _c('o2-button', {
    attrs: {
      "size": "large",
      "type": "primary"
    }
  }, [_vm._v("primary")]), _vm._v(" "), _c('o2-button', {
    attrs: {
      "size": "large",
      "type": "danger"
    }
  }, [_vm._v("danger")])], 1), _vm._v(" "), _c('div', {
    staticClass: "page-button-group"
  }, [_c('o2-button', [_vm._v("default")]), _vm._v(" "), _c('o2-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("primary")]), _vm._v(" "), _c('o2-button', {
    attrs: {
      "type": "danger"
    }
  }, [_vm._v("danger")])], 1), _vm._v(" "), _c('div', {
    staticClass: "page-button-group"
  }, [_c('o2-button', {
    attrs: {
      "size": "small"
    }
  }, [_vm._v("default")]), _vm._v(" "), _c('o2-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    }
  }, [_vm._v("primary")]), _vm._v(" "), _c('o2-button', {
    attrs: {
      "size": "small",
      "type": "danger"
    }
  }, [_vm._v("danger")])], 1), _vm._v(" "), _c('div', {
    staticClass: "page-button-group"
  }, [_c('o2-button', {
    attrs: {
      "disabled": "",
      "size": "large"
    }
  }, [_vm._v("default")]), _vm._v(" "), _c('o2-button', {
    attrs: {
      "disabled": "",
      "size": "large",
      "type": "primary"
    }
  }, [_vm._v("primary")]), _vm._v(" "), _c('o2-button', {
    staticClass: "aaa",
    attrs: {
      "disabled": "",
      "size": "large",
      "type": "danger"
    }
  }, [_vm._v("danger")])], 1)])]), _vm._v(" "), _c('p', [_vm._v("样例代码")]), _vm._v(" "), _c('div', {
    staticClass: "highlight",
    slot: "highlight"
  }, [_c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-button\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("h1")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-title\"")]), _vm._v(">")]), _vm._v("Button"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("h1")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-button-group\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"large\"")]), _vm._v(">")]), _vm._v("default"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"large\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"primary\"")]), _vm._v(">")]), _vm._v("primary"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"large\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"danger\"")]), _vm._v(">")]), _vm._v("danger"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-button-group\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(">")]), _vm._v("default"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"primary\"")]), _vm._v(">")]), _vm._v("primary"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"danger\"")]), _vm._v(">")]), _vm._v("danger"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-button-group\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"small\"")]), _vm._v(">")]), _vm._v("default"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"small\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"primary\"")]), _vm._v(">")]), _vm._v("primary"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"small\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"danger\"")]), _vm._v(">")]), _vm._v("danger"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-button-group\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("disabled")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"large\"")]), _vm._v(">")]), _vm._v("default"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("disabled")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"large\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"primary\"")]), _vm._v(">")]), _vm._v("primary"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("disabled")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"large\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"danger\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"aaa\"")]), _vm._v(">")]), _vm._v("danger"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])])])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    attrs: {
      "id": "button-zu-jian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#button-zu-jian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Button组件")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', {
    attrs: {
      "id": "ji-chu-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ji-chu-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 基础用法")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', {
    attrs: {
      "id": "api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" API")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("className")]), _vm._v(" "), _c('td', [_vm._v("自定义额外类名")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td', [_vm._v("''")])])])])
}]}

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('demo-block', {
    staticClass: "demo-box"
  }, [_c('div', {
    staticClass: "source",
    slot: "source"
  }, [_c('div', {
    staticClass: "page-switch"
  }, [_c('span', {
    staticClass: "page-switch-text"
  }, [_vm._v("Switch state: " + _vm._s(_vm.switchStateText))]), _vm._v(" "), _c('o2-switch', {
    staticClass: "page-switch-sample",
    attrs: {
      "checked": _vm.switchState,
      "onchange": _vm.updateState
    }
  }), _vm._v(" "), _c('o2-switch', {
    staticClass: "page-switch-sample",
    attrs: {
      "checked": false,
      "disabled": true
    }
  })], 1)]), _vm._v(" "), _c('p', [_vm._v("样例代码")]), _vm._v(" "), _c('div', {
    staticClass: "highlight",
    slot: "highlight"
  }, [_c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-switch\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-switch-text\"")]), _vm._v(">")]), _vm._v("Switch state: "), _c('span', [_vm._v("{{")]), _vm._v("switchStateText"), _c('span', [_vm._v("}}")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-switch")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-switch-sample\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v(":checked")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"switchState\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v(":onChange")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"updateState\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-switch")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-switch")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-switch-sample\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v(":checked")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"false\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v(":disabled")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"true\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-switch")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-javascript"
  }, [_c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("default")]), _vm._v(" {\n  data() {\n    "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("return")]), _vm._v(" {\n      "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("switchState")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-literal"
  }, [_vm._v("false")]), _vm._v("\n    };\n  },\n  "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("computed")]), _vm._v(": {\n    switchStateText() {\n      "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".switchState ? "), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("'on'")]), _vm._v(" : "), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("'off'")]), _vm._v(";\n    }\n  },\n  "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("methods")]), _vm._v(": {\n    updateState(newState) {\n      "), _c('span', {
    staticClass: "hljs-built_in"
  }, [_vm._v("console")]), _vm._v(".log("), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("'changing'")]), _vm._v(");\n      "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".switchState = newState;\n    }\n  }\n};\n")])])])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    attrs: {
      "id": "switch-zu-jian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#switch-zu-jian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Switch组件")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', {
    attrs: {
      "id": "ji-chu-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ji-chu-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 基础用法")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', {
    attrs: {
      "id": "api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" API")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("checked")]), _vm._v(" "), _c('td', [_vm._v("开关状态")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("true,false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("loading")]), _vm._v(" "), _c('td', [_vm._v("loading状态")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("true,false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("禁用状态")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("true,false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("onChange")]), _vm._v(" "), _c('td', [_vm._v("回调")]), _vm._v(" "), _c('td', [_vm._v("function")]), _vm._v(" "), _c('td', [_vm._v("function（）{}")]), _vm._v(" "), _c('td', [_vm._v("-")])])])])
}]}

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("07b8cfeb", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../css-loader/index.js?minimize!./../../vue-loader/lib/style-rewriter.js?id=data-v-33792b69!./../../vue-loader/lib/selector.js?type=styles&index=0!./button-1.vue", function() {
     var newContent = require("!!./../../css-loader/index.js?minimize!./../../vue-loader/lib/style-rewriter.js?id=data-v-33792b69!./../../vue-loader/lib/selector.js?type=styles&index=0!./button-1.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(216);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("0ce6222c", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../css-loader/index.js?minimize!./../../vue-loader/lib/style-rewriter.js?id=data-v-450f60ed!./../../vue-loader/lib/selector.js?type=styles&index=0!./switch-3.vue", function() {
     var newContent = require("!!./../../css-loader/index.js?minimize!./../../vue-loader/lib/style-rewriter.js?id=data-v-450f60ed!./../../vue-loader/lib/selector.js?type=styles&index=0!./switch-3.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(217);

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(218);

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(219);

/***/ })

});
//# sourceMappingURL=0.js.map