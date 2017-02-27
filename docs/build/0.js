webpackJsonp([0],Array(155).concat([
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./examples/button.vue": 201,
	"./examples/card.vue": 202,
	"./examples/cell.vue": 203,
	"./examples/dialog.vue": 204,
	"./examples/field.vue": 205,
	"./examples/panel.vue": 206,
	"./examples/picker.vue": 207,
	"./examples/popup.vue": 208,
	"./examples/switch.vue": 209,
	"./examples/waterfall.vue": 210
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
webpackContext.id = 155;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./examples-docs/button.md": 259,
	"./examples-docs/card.md": 260,
	"./examples-docs/cell.md": 261,
	"./examples-docs/checkbox.md": 262,
	"./examples-docs/dialog.md": 263,
	"./examples-docs/field.md": 264,
	"./examples-docs/panel.md": 265,
	"./examples-docs/picker.md": 266,
	"./examples-docs/popup.md": 267,
	"./examples-docs/radio.md": 268,
	"./examples-docs/steps.md": 269,
	"./examples-docs/switch.md": 270,
	"./examples-docs/waterfall.md": 271
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
webpackContext.id = 156;


/***/ }),
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */
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

exports.default = {
  methods: {
    handleClick: function handleClick() {
      console.log('cell click');
    }
  }
};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(26);

exports.default = {
  methods: {
    handleAlertClick: function handleAlertClick() {
      _index.Dialog.alert({
        title: 'alert标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      }).then(function (action) {
        console.log(action);
      });
    },
    handleConfirmClick: function handleConfirmClick() {
      _index.Dialog.confirm({
        title: 'confirm标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      }).then(function (action) {
        console.log(action);
      }, function (error) {
        console.log(error);
      });
    }
  }
}; //
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

/***/ }),
/* 178 */
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

exports.default = {
  data: function data() {
    return {
      name: ''
    };
  },


  methods: {
    handleChange: function handleChange() {
      console.log(this.name);
    }
  }
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(186);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//

var citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
  '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州']
};

exports.default = {
  data: function data() {
    return {
      pickerColumns: [{
        values: (0, _keys2.default)(citys),
        className: 'column1'
      }, {
        values: ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
        className: 'column2'
      }]
    };
  },


  methods: {
    handlePickerChange: function handlePickerChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
    }
  }
};

/***/ }),
/* 180 */
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

exports.default = {
  data: function data() {
    return {
      popupShow1: false,
      popupShow2: false,
      popupShow3: false,
      popupShow4: false
    };
  },


  watch: {
    popupShow2: function popupShow2(val) {
      var _this = this;

      if (val) {
        setTimeout(function () {
          _this.popupShow2 = false;
        }, 2000);
      }
    }
  }
};

/***/ }),
/* 181 */
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
      this.switchState = newState;
    }
  }
};

/***/ }),
/* 182 */
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

exports.default = {
  data: function data() {
    return {
      list: [1, 2, 3, 4, 5],
      loading: false,
      finished: false
    };
  },

  methods: {
    loadMore: function loadMore() {
      var _this = this;

      if (this.list.length >= 200) {
        this.finished = true;
        return;
      }

      this.loading = true;
      setTimeout(function () {
        var lastNumber = _this.list[_this.list.length - 1];
        for (var i = 0; i < 5; i++) {
          lastNumber += 1;
          _this.list.push(lastNumber);
        }
        _this.loading = false;
      }, 2500);
    },
    loadMoreUpper: function loadMoreUpper() {
      if (this.list[0] < 0) return;
      this.list.unshift(-1);
    }
  },
  computed: {
    isWaterfallDisabled: function isWaterfallDisabled() {
      return this.loading || this.finished;
    }
  }
};

/***/ }),
/* 183 */
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
  methods: {
    handleClick: function handleClick() {
      console.log('cell click');
    }
  }
};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(26);

exports.default = {
  methods: {
    handleAlertClick: function handleAlertClick() {
      _index.Dialog.alert({
        title: 'alert标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      }).then(function (action) {
        console.log(action);
      });
    },
    handleConfirmClick: function handleConfirmClick() {
      _index.Dialog.confirm({
        title: 'confirm标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      }).then(function (action) {
        console.log(action);
      }, function (error) {
        console.log(error);
      });
    }
  }
}; //
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

/***/ }),
/* 185 */
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

exports.default = {
  data: function data() {
    return {
      radio: '1'
    };
  }
};

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(187), __esModule: true };

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(189);
module.exports = __webpack_require__(6).Object.keys;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(23)
  , core    = __webpack_require__(6)
  , fails   = __webpack_require__(24);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(46)
  , $keys    = __webpack_require__(45);

__webpack_require__(188)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".page-sub-title{padding:15px}", ""]);

// exports


/***/ }),
/* 191 */,
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".page-sub-title{padding:20px 15px}", ""]);

// exports


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".official-img{width:31px;vertical-align:middle;border:0}", ""]);

// exports


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".page-dialog{padding:0 15px}.page-dialog .z-button-1{margin-bottom:10px}", ""]);

// exports


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".official-img{width:31px;vertical-align:middle;border:0}.page-sub-title{padding:25px 15px}", ""]);

// exports


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".z-popup-1{width:100%;height:200px}.z-popup-2{width:100%;line-height:44px;background-color:rgba(0,0,0,.701961);text-align:center;color:#fff}.z-popup-3{width:100%;height:100%;background-color:#fff}.z-popup-4{width:50%;height:200px;background:#fff;border-radius:10px}.page-popup .z-button-1{margin-bottom:10px}.page-sub-title{padding:20px 15px}", ""]);

// exports


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".waterfall{height:300px;overflow:scroll}.waterfall-item{line-height:20px;padding:5px 0}.page-sub-title{padding:15px}", ""]);

// exports


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".page-button{padding:0 20px}.z-button-group .z-button-1{margin-bottom:10px}", ""]);

// exports


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".z-panel-sum{background:#fff;text-align:right;font-size:14px;color:#333;line-height:30px;padding-right:15px}.z-panel-sum span{color:red}.z-panel-buttons{text-align:right}.z-panel-buttons .z-button{margin-left:5px}", ""]);

// exports


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".page-switch{padding:0 15px 15px}.page-switch__wrapper{width:33.33%;float:left;text-align:center}.page-switch__text{margin:20px 0}", ""]);

// exports


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(256)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(242),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(248)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(224),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(253)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(176),
  /* template */
  __webpack_require__(237),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(252)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(177),
  /* template */
  __webpack_require__(235),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(250)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(178),
  /* template */
  __webpack_require__(231),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(257)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(246),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(179),
  /* template */
  __webpack_require__(234),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(254)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(180),
  /* template */
  __webpack_require__(238),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(258)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(181),
  /* template */
  __webpack_require__(247),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(255)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(182),
  /* template */
  __webpack_require__(239),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(230),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(232),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(251)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(183),
  /* template */
  __webpack_require__(233),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(241),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(184),
  /* template */
  __webpack_require__(240),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(229),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(228),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(244),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(245),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(185),
  /* template */
  __webpack_require__(243),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(236),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(225),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(227),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-card"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Card")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('z-card', {
    attrs: {
      "title": "商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余",
      "desc": "描述",
      "thumb": "https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg"
    }
  }), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("高级用法")]), _vm._v(" "), _c('z-card', {
    attrs: {
      "title": "商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余",
      "desc": "商品SKU1，商品SKU2",
      "thumb": "https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg"
    }
  }, [_c('div', {
    staticClass: "z-card__row",
    slot: "title"
  }, [_c('h4', {
    staticClass: "z-card__title"
  }, [_vm._v("商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余")]), _vm._v(" "), _c('span', {
    staticClass: "z-card__price"
  }, [_vm._v("¥ 2.00")])]), _vm._v(" "), _c('div', {
    staticClass: "z-card__row",
    slot: "desc"
  }, [_c('h4', {
    staticClass: "z-card__desc"
  }, [_vm._v("商品sku")]), _vm._v(" "), _c('span', {
    staticClass: "z-card__num"
  }, [_vm._v("x 2")])]), _vm._v(" "), _c('div', {
    staticClass: "z-card__footer",
    slot: "footer"
  }, [_c('z-button', {
    attrs: {
      "size": "mini"
    }
  }, [_vm._v("按钮一")]), _vm._v(" "), _c('z-button', {
    attrs: {
      "size": "mini"
    }
  }, [_vm._v("按钮二")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),
/* 225 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', {
    attrs: {
      "id": "switch-zu-jian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#switch-zu-jian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Switch组件")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "ji-chu-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ji-chu-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 基础用法")]), _vm._v(" "), _c('pre', [_c('code', {
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
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-switch__wrapper\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-switch")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"some-customized-class\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v(":checked")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"switchState\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v(":on-change")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"updateState\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-switch")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-switch__text\"")]), _vm._v(">")]), _c('span', [_vm._v("{{")]), _vm._v("switchStateText"), _c('span', [_vm._v("}}")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-switch__wrapper\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-switch")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"some-customized-class\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v(":checked")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"true\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v(":disabled")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"true\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-switch")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-switch__text\"")]), _vm._v(">")]), _vm._v("ON, DISABLED"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-switch__wrapper\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("o2-switch")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"some-customized-class\"")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("o2-switch")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"page-switch__text\"")]), _vm._v(">")]), _vm._v("OFF, DISABLED"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
    staticClass: "javascript"
  }, [_vm._v("\n"), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("default")]), _vm._v(" {\n  data() {\n    "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("return")]), _vm._v(" {\n      "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("switchState")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-literal"
  }, [_vm._v("true")]), _vm._v("\n    };\n  },\n  "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("computed")]), _vm._v(": {\n    switchStateText() {\n      "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".switchState ? "), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("' ON'")]), _vm._v(" : "), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("'OFF'")]), _vm._v(";\n    }\n  },\n  "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("methods")]), _vm._v(": {\n    updateState(newState) {\n      "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".switchState = newState;\n    }\n  }\n};  \n")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" API")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("checked")]), _vm._v(" "), _c('td', [_vm._v("开关状态")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("true, false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("loading")]), _vm._v(" "), _c('td', [_vm._v("loading状态")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("true, false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("禁用状态")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td', [_vm._v("true, false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("onChange")]), _vm._v(" "), _c('td', [_vm._v("回调")]), _vm._v(" "), _c('td', [_vm._v("function")]), _vm._v(" "), _c('td', [_vm._v("function（）{}")]), _vm._v(" "), _c('td', [_vm._v("-")])])])])])
}]}

/***/ }),
/* 226 */,
/* 227 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', {
    attrs: {
      "id": "waterfall-pu-bu-liu"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#waterfall-pu-bu-liu",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Waterfall 瀑布流")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "ji-chu-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ji-chu-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 基础用法")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"waterfall\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("v-waterfall-lower")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"loadMore\"")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("v-waterfall-upper")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"loadMoreUpper\"")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("waterfall-disabled")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"isWaterfallDisabled\"")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("waterfall-offset")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"400\"")]), _vm._v("\n  >")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"waterfall-item\"")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("v-for")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"item in list\"")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("style")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"text-align: center;\"")]), _vm._v("\n    >")]), _vm._v("\n      "), _c('span', [_vm._v("{{")]), _vm._v(" item "), _c('span', [_vm._v("}}")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("v-if")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"loading\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("style")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"text-align: center;\"")]), _vm._v(">")]), _vm._v("\n      loading\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
    staticClass: "javascript"
  }, [_vm._v("\n"), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("default")]), _vm._v(" {\n  data() {\n    "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("return")]), _vm._v(" {\n      "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("list")]), _vm._v(": ["), _c('span', {
    staticClass: "hljs-number"
  }, [_vm._v("1")]), _vm._v(", "), _c('span', {
    staticClass: "hljs-number"
  }, [_vm._v("2")]), _vm._v(", "), _c('span', {
    staticClass: "hljs-number"
  }, [_vm._v("3")]), _vm._v(", "), _c('span', {
    staticClass: "hljs-number"
  }, [_vm._v("4")]), _vm._v(", "), _c('span', {
    staticClass: "hljs-number"
  }, [_vm._v("5")]), _vm._v("],\n      "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("loading")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-literal"
  }, [_vm._v("false")]), _vm._v(",\n      "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("finished")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-literal"
  }, [_vm._v("false")]), _vm._v("\n    };\n  },\n  "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("methods")]), _vm._v(": {\n    loadMore() {\n      "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("if")]), _vm._v(" ("), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".list.length >= "), _c('span', {
    staticClass: "hljs-number"
  }, [_vm._v("200")]), _vm._v(") {\n        "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".finished = "), _c('span', {
    staticClass: "hljs-literal"
  }, [_vm._v("true")]), _vm._v(";\n        "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("return")]), _vm._v(";\n      }\n\n      "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".loading = "), _c('span', {
    staticClass: "hljs-literal"
  }, [_vm._v("true")]), _vm._v(";\n      setTimeout("), _c('span', {
    staticClass: "hljs-function"
  }, [_c('span', {
    staticClass: "hljs-params"
  }, [_vm._v("()")]), _vm._v(" =>")]), _vm._v(" {\n        "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("let")]), _vm._v(" lastNumber = "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".list["), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".list.length - "), _c('span', {
    staticClass: "hljs-number"
  }, [_vm._v("1")]), _vm._v("];\n        "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("for")]), _vm._v(" ("), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("let")]), _vm._v(" i = "), _c('span', {
    staticClass: "hljs-number"
  }, [_vm._v("0")]), _vm._v("; i < "), _c('span', {
    staticClass: "hljs-number"
  }, [_vm._v("5")]), _vm._v("; i ++) {\n          lastNumber += "), _c('span', {
    staticClass: "hljs-number"
  }, [_vm._v("1")]), _vm._v(";\n          "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".list.push(lastNumber);\n        }\n        "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".loading = "), _c('span', {
    staticClass: "hljs-literal"
  }, [_vm._v("false")]), _vm._v(";\n      }, "), _c('span', {
    staticClass: "hljs-number"
  }, [_vm._v("2500")]), _vm._v(");\n    },\n    loadMoreUpper() {\n      "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("if")]), _vm._v(" ("), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".list["), _c('span', {
    staticClass: "hljs-number"
  }, [_vm._v("0")]), _vm._v("] < "), _c('span', {
    staticClass: "hljs-number"
  }, [_vm._v("0")]), _vm._v(") "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("return")]), _vm._v(";\n      "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".list.unshift("), _c('span', {
    staticClass: "hljs-number"
  }, [_vm._v("-1")]), _vm._v(");\n    }\n  },\n  "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("computed")]), _vm._v(": {\n    "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("isWaterfallDisabled")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-function"
  }, [_c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("function")]), _vm._v("("), _c('span', {
    staticClass: "hljs-params"
  }), _vm._v(") ")]), _vm._v("{\n      "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".loading || "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".finished;\n    }\n  }\n};\n")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" API")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("waterfall-disabled")]), _vm._v(" "), _c('td', [_vm._v("是否禁止瀑布流触发")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("waterfall-offset")]), _vm._v(" "), _c('td', [_vm._v("触发瀑布流加载的阈值")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("300")]), _vm._v(" "), _c('td')])])])])
}]}

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', {
    attrs: {
      "id": "panel-mian-ban"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#panel-mian-ban",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Panel 面板")]), _vm._v(" "), _c('p', [_vm._v("面板只是一个容器，里面可以放入自定义的内容。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "ji-chu-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ji-chu-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 基础用法")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-panel")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"标题\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("desc")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"标题描述\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("status")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"状态\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-card")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余\"")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("desc")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"商品SKU1，商品SKU2\"")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("thumb")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__row\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"title\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("h4")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__title\"")]), _vm._v(">")]), _vm._v("商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("h4")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__price\"")]), _vm._v(">")]), _vm._v("¥ 2.00"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__row\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"desc\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("h4")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__desc\"")]), _vm._v(">")]), _vm._v("商品sku"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("h4")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__num\"")]), _vm._v(">")]), _vm._v("x 2"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__footer\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"footer\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"mini\"")]), _vm._v(">")]), _vm._v("按钮一"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"mini\"")]), _vm._v(">")]), _vm._v("按钮二"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-card")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-panel-sum\"")]), _vm._v(">")]), _vm._v("\n    合计："), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("¥ 1999.90"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-panel")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "gao-ji-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#gao-ji-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 高级用法")]), _vm._v(" "), _c('p', [_vm._v("使用具名"), _c('code', [_vm._v("slot")]), _vm._v("自定义内容。")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-panel")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"标题\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("desc")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"标题描述\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("status")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"状态\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-card")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余\"")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("desc")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"商品SKU1，商品SKU2\"")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("thumb")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__row\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"title\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("h4")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__title\"")]), _vm._v(">")]), _vm._v("商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("h4")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__price\"")]), _vm._v(">")]), _vm._v("¥ 2.00"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__row\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"desc\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("h4")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__desc\"")]), _vm._v(">")]), _vm._v("商品sku"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("h4")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__num\"")]), _vm._v(">")]), _vm._v("x 2"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__footer\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"footer\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"mini\"")]), _vm._v(">")]), _vm._v("按钮一"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"mini\"")]), _vm._v(">")]), _vm._v("按钮二"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-card")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-panel-sum\"")]), _vm._v(">")]), _vm._v("\n    合计："), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("¥ 1999.90"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-panel-buttons\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"footer\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"small\"")]), _vm._v(">")]), _vm._v("按钮一"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"small\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"danger\"")]), _vm._v(">")]), _vm._v("按钮二"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-panel")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" API")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("title")]), _vm._v(" "), _c('td', [_vm._v("标题")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td', [_vm._v("''")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("desc")]), _vm._v(" "), _c('td', [_vm._v("描述")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td', [_vm._v("''")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("status")]), _vm._v(" "), _c('td', [_vm._v("状态")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td', [_vm._v("''")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "slot"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#slot",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Slot")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("name")]), _vm._v(" "), _c('th', [_vm._v("描述")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("自定义内容")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("header")]), _vm._v(" "), _c('td', [_vm._v("自定义header")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("footer")]), _vm._v(" "), _c('td', [_vm._v("自定义footer")])])])])])
}]}

/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', {
    attrs: {
      "id": "field-zu-jian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#field-zu-jian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Field组件")]), _vm._v(" "), _c('p', [_vm._v("表单中"), _c('code', [_vm._v("input")]), _vm._v("或"), _c('code', [_vm._v("textarea")]), _vm._v("的输入框。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "ji-chu-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ji-chu-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 基础用法")]), _vm._v(" "), _c('p', [_vm._v("根据"), _c('code', [_vm._v("type")]), _vm._v("属性显示不同的输入框。")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-field")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"text\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"用户名：\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"请输入用户名\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-field")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-field")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"password\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"密码：\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"请输入密码\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-field")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-field")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"textarea\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"个人介绍：\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"请输入个人介绍\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-field")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "wu-label-de-shu-ru-kuang"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#wu-label-de-shu-ru-kuang",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 无label的输入框")]), _vm._v(" "), _c('p', [_vm._v("不传入"), _c('code', [_vm._v("label")]), _vm._v("属性即可。")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-field")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"text\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"请输入用户名\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-field")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "jian-ting-change-shi-jian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#jian-ting-change-shi-jian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 监听change事件")]), _vm._v(" "), _c('p', [_vm._v("监听组件的"), _c('code', [_vm._v("change")]), _vm._v("事件。")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-field")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"text\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"用户名：\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"请输入用户名\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@change")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"handleChange\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-field")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" API")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_vm._v("输入框类型")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("text")]), _vm._v(" "), _c('td', [_vm._v("text, number, email, url, tel, date, datetime, password, textarea")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placeholder")]), _vm._v(" "), _c('td', [_vm._v("输入框placeholder")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("value")]), _vm._v(" "), _c('td', [_vm._v("输入框的值")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("label")]), _vm._v(" "), _c('td', [_vm._v("输入框标签")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("是否禁用输入框")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("readonly")]), _vm._v(" "), _c('td', [_vm._v("输入框是否只读")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("maxlength")]), _vm._v(" "), _c('td', [_vm._v("输入框maxlength")]), _vm._v(" "), _c('td', [_vm._v("[String, Number]")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td')])])])])
}]}

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', {
    attrs: {
      "id": "button-zu-jian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#button-zu-jian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Button组件")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "an-niu-gong-neng"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#an-niu-gong-neng",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 按钮功能")]), _vm._v(" "), _c('p', [_vm._v("只接受primary, default, danger三种类型，默认default。")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-group\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-1\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("default"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-1\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"primary\"")]), _vm._v(">")]), _vm._v("primary"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-1\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"danger\"")]), _vm._v(">")]), _vm._v("danger"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "jin-yong-zhuang-tai"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#jin-yong-zhuang-tai",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 禁用状态")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-group\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-1\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("diabled"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "an-niu-chi-cun"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#an-niu-chi-cun",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 按钮尺寸")]), _vm._v(" "), _c('p', [_vm._v("只接受large, normal, small, mini四种尺寸，默认normal。")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-group\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-1\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"large\"")]), _vm._v(">")]), _vm._v("large"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-group\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v(":style")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"{ width: '50%' }\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-3\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"primary\"")]), _vm._v(">")]), _vm._v("normal"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-3\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"small\"")]), _vm._v(">")]), _vm._v("small"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-3\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"mini\"")]), _vm._v(">")]), _vm._v("mini"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "zi-ding-yi-an-niu-biao-qian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#zi-ding-yi-an-niu-biao-qian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 自定义按钮标签")]), _vm._v(" "), _c('p', [_vm._v("按钮默认是button标签，可以使用tag属性修改为一个a标签。")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-group\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-1\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("tag")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"a\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"primary\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"https://www.youzan.com\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("target")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"_blank\"")]), _vm._v(">")]), _vm._v("a标签按钮"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "button-group"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#button-group",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" button group")]), _vm._v(" "), _c('p', [_vm._v("一组按钮。")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-group\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"primary\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"small\"")]), _vm._v(">")]), _vm._v("确认付款"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"small\"")]), _vm._v(">")]), _vm._v("确认收货"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"small\"")]), _vm._v(">")]), _vm._v("取消订单"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" API")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_vm._v("按钮类型")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("'default'")]), _vm._v(" "), _c('td', [_vm._v("'primary', 'danger'")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("size")]), _vm._v(" "), _c('td', [_vm._v("按钮尺寸")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("'normal'")]), _vm._v(" "), _c('td', [_vm._v("'large', 'small', 'mini'")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("tag")]), _vm._v(" "), _c('td', [_vm._v("按钮标签")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("'button'")]), _vm._v(" "), _c('td', [_vm._v("'a', 'span', ...")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("diabled")]), _vm._v(" "), _c('td', [_vm._v("按钮是否禁用")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("block")]), _vm._v(" "), _c('td', [_vm._v("按钮是否显示为块级元素")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')])])])])
}]}

/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-field"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Field")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('z-cell-group', [_c('z-field', {
    attrs: {
      "type": "text",
      "label": "用户名：",
      "placeholder": "请输入用户名"
    }
  }), _vm._v(" "), _c('z-field', {
    attrs: {
      "type": "password",
      "label": "密码：",
      "placeholder": "请输入密码"
    }
  }), _vm._v(" "), _c('z-field', {
    attrs: {
      "type": "textarea",
      "label": "个人介绍：",
      "placeholder": "请输入个人介绍"
    }
  })], 1), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("无label的输入框")]), _vm._v(" "), _c('z-cell-group', [_c('z-field', {
    attrs: {
      "type": "text",
      "placeholder": "请输入用户名"
    }
  })], 1), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("监听change事件")]), _vm._v(" "), _c('z-cell-group', [_c('z-field', {
    attrs: {
      "type": "text",
      "label": "用户名：",
      "placeholder": "请输入用户名"
    },
    on: {
      "change": _vm.handleChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', {
    attrs: {
      "id": "card-tu-wen-zu-jian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#card-tu-wen-zu-jian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Card 图文组件")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "ji-chu-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ji-chu-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 基础用法")]), _vm._v(" "), _c('p', [_vm._v("当没有底部按钮时，右侧内容会居中显示。")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-card")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余\"")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("desc")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"描述\"")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("thumb")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg\"")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-card")]), _vm._v(">")]), _vm._v("\n\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "gao-ji-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#gao-ji-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 高级用法")]), _vm._v(" "), _c('p', [_vm._v("可以使用具名"), _c('code', [_vm._v("slot")]), _vm._v("重写标题等信息，其中包含"), _c('code', [_vm._v("title")]), _vm._v("、"), _c('code', [_vm._v("desc")]), _vm._v("、"), _c('code', [_vm._v("footer")]), _vm._v("和"), _c('code', [_vm._v("tag")]), _vm._v("四个"), _c('code', [_vm._v("slot")]), _vm._v("。")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-card")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余\"")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("desc")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"商品SKU1，商品SKU2\"")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("thumb")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__row\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"title\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("h4")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__title\"")]), _vm._v(">")]), _vm._v("商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("h4")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__price\"")]), _vm._v(">")]), _vm._v("¥ 2.00"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__row\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"desc\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("h4")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__desc\"")]), _vm._v(">")]), _vm._v("商品sku"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("h4")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__num\"")]), _vm._v(">")]), _vm._v("x 2"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-card__footer\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"footer\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"mini\"")]), _vm._v(">")]), _vm._v("按钮一"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"mini\"")]), _vm._v(">")]), _vm._v("按钮二"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-card")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" API")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("thumb")]), _vm._v(" "), _c('td', [_vm._v("左侧图片")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td', [_vm._v("''")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("title")]), _vm._v(" "), _c('td', [_vm._v("标题")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td', [_vm._v("''")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("desc")]), _vm._v(" "), _c('td', [_vm._v("描述")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td', [_vm._v("''")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "slot"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#slot",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Slot")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("name")]), _vm._v(" "), _c('th', [_vm._v("描述")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("title")]), _vm._v(" "), _c('td', [_vm._v("自定义标题")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("desc")]), _vm._v(" "), _c('td', [_vm._v("自定义描述")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("tags")]), _vm._v(" "), _c('td', [_vm._v("自定义tags")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("footer")]), _vm._v(" "), _c('td', [_vm._v("自定义footer")])])])])])
}]}

/***/ }),
/* 233 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', {
    attrs: {
      "id": "cell-zu-jian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#cell-zu-jian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Cell 组件")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "ji-chu-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ji-chu-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 基础用法")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"单元格1\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"单元格1内容\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"单元格2\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"单元格2内容\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "biao-ti-dai-miao-shu-xin-xi"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#biao-ti-dai-miao-shu-xin-xi",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 标题带描述信息")]), _vm._v(" "), _c('p', [_vm._v("传入"), _c('code', [_vm._v("label")]), _vm._v("属性，属性值为描述信息的值。")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"单元格1\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"描述信息\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("is-link")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("url")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"javascript:void(0)\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"handleClick\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"单元格2\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"描述信息\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "dai-tu-biao"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#dai-tu-biao",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 带图标")]), _vm._v(" "), _c('p', [_vm._v("传入"), _c('code', [_vm._v("icon")]), _vm._v("属性。")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"起码运动馆\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("icon")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"home\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"线下门店\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("icon")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"location\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "ke-dian-ji-de-lian-jie"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ke-dian-ji-de-lian-jie",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 可点击的链接")]), _vm._v(" "), _c('p', [_vm._v("传入"), _c('code', [_vm._v("url")]), _vm._v("属性，传入"), _c('code', [_vm._v("isLink")]), _vm._v("属性则会在右侧显示箭头。")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"起码运动馆\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"进入店铺\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("icon")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"home\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("url")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"http://youzan.com\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("is-link")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"线下门店\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("icon")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"location\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("url")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"http://youzan.com\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("is-link")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "gao-ji-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#gao-ji-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 高级用法")]), _vm._v(" "), _c('p', [_vm._v("如以上用法不能满足你的需求，可以使用对应的"), _c('code', [_vm._v("slot")]), _vm._v("来自定义显示的内容。包含三个"), _c('code', [_vm._v("slot")]), _vm._v("，默认"), _c('code', [_vm._v("slot")]), _vm._v("，"), _c('code', [_vm._v("icon")]), _vm._v("和"), _c('code', [_vm._v("title")]), _vm._v("的"), _c('code', [_vm._v("slot")]), _vm._v("。")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"进入店铺\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("icon")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"home\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("url")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"http://youzan.com\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("is-link")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("template")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"title\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-cell-text\"")]), _vm._v(">")]), _vm._v("起码运动馆"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("img")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("src")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"//su.yzcdn.cn/v2/image/account/icon_guan_160421.png\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"official-img\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"线下门店\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("icon")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"location\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("url")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"http://youzan.com\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("is-link")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" API")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("icon")]), _vm._v(" "), _c('td', [_vm._v("左侧图标")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td', [_vm._v("''")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("title")]), _vm._v(" "), _c('td', [_vm._v("左侧标题")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td', [_vm._v("''")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("value")]), _vm._v(" "), _c('td', [_vm._v("右侧内容")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td', [_vm._v("''")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("isLink")]), _vm._v(" "), _c('td', [_vm._v("是否为链接，链接会在右侧出现箭头")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td', [_vm._v("''")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("url")]), _vm._v(" "), _c('td', [_vm._v("跳转链接")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td', [_vm._v("''")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("label")]), _vm._v(" "), _c('td', [_vm._v("描述信息，显示在标题下方")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td', [_vm._v("''")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "slot"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#slot",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Slot")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("name")]), _vm._v(" "), _c('th', [_vm._v("描述")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("自定义显示内容")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("icon")]), _vm._v(" "), _c('td', [_vm._v("自定义icon")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("title")]), _vm._v(" "), _c('td', [_vm._v("自定义title")])])])])])
}]}

/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-picker"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Picker")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('z-picker', {
    attrs: {
      "columns": _vm.pickerColumns
    },
    on: {
      "change": _vm.handlePickerChange
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 235 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-dialog"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Dialog")]), _vm._v(" "), _c('div', {
    staticClass: "z-button-1"
  }, [_c('z-button', {
    on: {
      "click": _vm.handleAlertClick
    }
  }, [_vm._v("点击我打开alert提示框")])], 1), _vm._v(" "), _c('div', {
    staticClass: "z-button-1"
  }, [_c('z-button', {
    on: {
      "click": _vm.handleConfirmClick
    }
  }, [_vm._v("点击我打开confirm提示框")])], 1)])
},staticRenderFns: []}

/***/ }),
/* 236 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', {
    attrs: {
      "id": "steps-bu-zou-tiao"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#steps-bu-zou-tiao",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Steps 步骤条")])])
}]}

/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-cell"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Cell")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('z-cell-group', [_c('z-cell', {
    attrs: {
      "title": "单元格1",
      "value": "单元格1内容"
    }
  }), _vm._v(" "), _c('z-cell', {
    attrs: {
      "title": "单元格2",
      "value": "单元格2内容"
    }
  })], 1), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("标题带描述信息")]), _vm._v(" "), _c('z-cell-group', [_c('z-cell', {
    attrs: {
      "title": "单元格1",
      "label": "描述信息",
      "is-link": "",
      "url": "javascript:void(0)"
    },
    on: {
      "click": _vm.handleClick
    }
  }), _vm._v(" "), _c('z-cell', {
    attrs: {
      "title": "单元格2",
      "label": "描述信息"
    }
  })], 1), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("带图标")]), _vm._v(" "), _c('z-cell-group', [_c('z-cell', {
    attrs: {
      "title": "起码运动馆",
      "icon": "home"
    }
  }), _vm._v(" "), _c('z-cell', {
    attrs: {
      "title": "线下门店",
      "icon": "location"
    }
  })], 1), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("可点击的链接")]), _vm._v(" "), _c('z-cell-group', [_c('z-cell', {
    attrs: {
      "title": "起码运动馆",
      "value": "进入店铺",
      "icon": "home",
      "url": "http://youzan.com",
      "is-link": ""
    }
  }), _vm._v(" "), _c('z-cell', {
    attrs: {
      "title": "线下门店",
      "icon": "location",
      "url": "http://youzan.com",
      "is-link": ""
    }
  })], 1), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("高级用法")]), _vm._v(" "), _c('z-cell-group', [_c('z-cell', {
    attrs: {
      "value": "进入店铺",
      "icon": "home",
      "url": "http://youzan.com",
      "is-link": ""
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('span', {
    staticClass: "z-cell-text"
  }, [_vm._v("起码运动馆")]), _vm._v(" "), _c('img', {
    staticClass: "official-img",
    attrs: {
      "src": "//su.yzcdn.cn/v2/image/account/icon_guan_160421.png"
    }
  })])], 2), _vm._v(" "), _c('z-cell', {
    attrs: {
      "title": "线下门店",
      "icon": "location",
      "url": "http://youzan.com",
      "is-link": ""
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-popup"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Popup")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('div', {
    staticClass: "z-button-1"
  }, [_c('z-button', {
    on: {
      "click": function($event) {
        _vm.popupShow1 = true
      }
    }
  }, [_vm._v("从下方弹出popup")])], 1), _vm._v(" "), _c('z-popup', {
    staticClass: "z-popup-1",
    attrs: {
      "position": "bottom"
    },
    model: {
      value: (_vm.popupShow1),
      callback: function($$v) {
        _vm.popupShow1 = $$v
      }
    }
  }, [_vm._v("\n    xxxx\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "z-button-1"
  }, [_c('z-button', {
    on: {
      "click": function($event) {
        _vm.popupShow2 = true
      }
    }
  }, [_vm._v("从上方方弹出popup")])], 1), _vm._v(" "), _c('z-popup', {
    staticClass: "z-popup-2",
    attrs: {
      "position": "top",
      "overlay": false
    },
    model: {
      value: (_vm.popupShow2),
      callback: function($$v) {
        _vm.popupShow2 = $$v
      }
    }
  }, [_vm._v("\n    更新成功\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "z-button-1"
  }, [_c('z-button', {
    on: {
      "click": function($event) {
        _vm.popupShow3 = true
      }
    }
  }, [_vm._v("从右方弹出popup")])], 1), _vm._v(" "), _c('z-popup', {
    staticClass: "z-popup-3",
    attrs: {
      "position": "right",
      "overlay": false
    },
    model: {
      value: (_vm.popupShow3),
      callback: function($$v) {
        _vm.popupShow3 = $$v
      }
    }
  }, [_c('z-button', {
    nativeOn: {
      "click": function($event) {
        _vm.popupShow3 = false
      }
    }
  }, [_vm._v("关闭 popup")])], 1), _vm._v(" "), _c('div', {
    staticClass: "z-button-1"
  }, [_c('z-button', {
    on: {
      "click": function($event) {
        _vm.popupShow4 = true
      }
    }
  }, [_vm._v("从中间弹出popup")])], 1), _vm._v(" "), _c('z-popup', {
    staticClass: "z-popup-4",
    attrs: {
      "transition": "popup-fade"
    },
    model: {
      value: (_vm.popupShow4),
      callback: function($$v) {
        _vm.popupShow4 = $$v
      }
    }
  }, [_vm._v("\n    一些内容\n  ")])], 1)
},staticRenderFns: []}

/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-card"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Waterfall")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('div', {
    staticClass: "waterfall"
  }, [_c('div', {
    directives: [{
      name: "waterfall-lower",
      rawName: "v-waterfall-lower",
      value: (_vm.loadMore),
      expression: "loadMore"
    }, {
      name: "waterfall-upper",
      rawName: "v-waterfall-upper",
      value: (_vm.loadMoreUpper),
      expression: "loadMoreUpper"
    }],
    attrs: {
      "waterfall-disabled": "isWaterfallDisabled",
      "waterfall-offset": "400"
    }
  }, [_vm._l((_vm.list), function(item) {
    return _c('div', {
      staticClass: "waterfall-item",
      staticStyle: {
        "text-align": "center"
      }
    }, [_vm._v("\n        " + _vm._s(item) + "\n      ")])
  }), _vm._v(" "), (_vm.loading) ? _c('div', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n        loading\n      ")]) : _vm._e()], 2)])])
},staticRenderFns: []}

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', {
    attrs: {
      "id": "dialog-zu-jian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#dialog-zu-jian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Dialog组件")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "ji-chu-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ji-chu-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 基础用法")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"handleAlertClick\"")]), _vm._v(">")]), _vm._v("alert"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"handleConfirmClick\"")]), _vm._v(">")]), _vm._v("confirm"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
    staticClass: "javascript"
  }, [_vm._v("\n"), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("import")]), _vm._v(" { Dialog } "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("'src/index'")]), _vm._v(";\n\n"), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("default")]), _vm._v(" {\n  "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("methods")]), _vm._v(": {\n    handleAlertClick() {\n      Dialog.alert({\n        "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("'alert标题'")]), _vm._v(",\n        "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("'弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'")]), _vm._v("\n      }).then("), _c('span', {
    staticClass: "hljs-function"
  }, [_vm._v("("), _c('span', {
    staticClass: "hljs-params"
  }, [_vm._v("action")]), _vm._v(") =>")]), _vm._v(" {\n        "), _c('span', {
    staticClass: "hljs-built_in"
  }, [_vm._v("console")]), _vm._v(".log(action);\n      });\n    },\n\n    handleConfirmClick() {\n      Dialog.confirm({\n        "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("title")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("'confirm标题'")]), _vm._v(",\n        "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("'弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'")]), _vm._v("\n      }).then("), _c('span', {
    staticClass: "hljs-function"
  }, [_vm._v("("), _c('span', {
    staticClass: "hljs-params"
  }, [_vm._v("action")]), _vm._v(") =>")]), _vm._v(" {\n        "), _c('span', {
    staticClass: "hljs-built_in"
  }, [_vm._v("console")]), _vm._v(".log(action);\n      }, (error) => {\n        "), _c('span', {
    staticClass: "hljs-built_in"
  }, [_vm._v("console")]), _vm._v(".log(error);\n      });\n    }\n  }\n};\n")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" API")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("title")]), _vm._v(" "), _c('td', [_vm._v("标题")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("message")]), _vm._v(" "), _c('td', [_vm._v("内容")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td')])])])])
}]}

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', {
    attrs: {
      "id": "checkbox-zu-jian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#checkbox-zu-jian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Checkbox组件")])])
}]}

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-button"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Button")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("按钮功能")]), _vm._v(" "), _c('div', {
    staticClass: "z-button-group"
  }, [_c('div', {
    staticClass: "z-button-1"
  }, [_c('z-button', [_vm._v("default")])], 1), _vm._v(" "), _c('div', {
    staticClass: "z-button-1"
  }, [_c('z-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("primary")])], 1), _vm._v(" "), _c('div', {
    staticClass: "z-button-1"
  }, [_c('z-button', {
    attrs: {
      "type": "danger"
    }
  }, [_vm._v("danger")])], 1)]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("禁用状态")]), _vm._v(" "), _c('div', {
    staticClass: "z-button-group"
  }, [_c('div', {
    staticClass: "z-button-1"
  }, [_c('z-button', {
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("diabled")])], 1)]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("按钮尺寸")]), _vm._v(" "), _c('div', {
    staticClass: "z-button-group"
  }, [_c('div', {
    staticClass: "z-button-1"
  }, [_c('z-button', {
    attrs: {
      "size": "large"
    }
  }, [_vm._v("large")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "z-button-group"
  }, [_c('div', {
    staticClass: "z-button-3"
  }, [_c('z-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("normal")])], 1), _vm._v(" "), _c('div', {
    staticClass: "z-button-3"
  }, [_c('z-button', {
    attrs: {
      "size": "small"
    }
  }, [_vm._v("small")])], 1), _vm._v(" "), _c('div', {
    staticClass: "z-button-3"
  }, [_c('z-button', {
    attrs: {
      "size": "mini"
    }
  }, [_vm._v("mini")])], 1)]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("自定义按钮标签")]), _vm._v(" "), _c('div', {
    staticClass: "z-button-group"
  }, [_c('div', {
    staticClass: "z-button-1"
  }, [_c('z-button', {
    attrs: {
      "tag": "a",
      "type": "primary",
      "href": "https://www.youzan.com",
      "target": "_blank"
    }
  }, [_vm._v("a标签按钮")])], 1)]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("button group")]), _vm._v(" "), _c('div', {
    staticClass: "z-button-group"
  }, [_c('z-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    }
  }, [_vm._v("确认付款")]), _vm._v(" "), _c('z-button', {
    attrs: {
      "size": "small"
    }
  }, [_vm._v("确认收货")]), _vm._v(" "), _c('z-button', {
    attrs: {
      "size": "small"
    }
  }, [_vm._v("取消订单")])], 1)])
},staticRenderFns: []}

/***/ }),
/* 243 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', {
    attrs: {
      "id": "radio-zu-jian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#radio-zu-jian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Radio组件")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "ji-chu-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ji-chu-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 基础用法")]), _vm._v(" "), _c('p', [_vm._v(":::demo")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-radio")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"radio\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-radio")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v(":::")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" API")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("是否禁用单选框")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td')])])])])
}]}

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', {
    attrs: {
      "id": "picker-zu-jian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#picker-zu-jian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Picker组件")]), _vm._v(" "), _c('p', [_vm._v("模仿iOS中的"), _c('code', [_vm._v("UIPickerView")]), _vm._v("。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "ji-chu-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ji-chu-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 基础用法")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-picker")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v(":columns")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"pickerColumns\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@change")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"handlePickerChange\"")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-picker")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" API")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("visibileColumnCount")]), _vm._v(" "), _c('td', [_vm._v("每一列可见备选元素的个数")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("5")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("itemHeight")]), _vm._v(" "), _c('td', [_vm._v("选中元素区高度")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("44")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("columns")]), _vm._v(" "), _c('td', [_vm._v("对象数组，配置每一列显示的数据")]), _vm._v(" "), _c('td', [_vm._v("Array")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("showToolbar")]), _vm._v(" "), _c('td', [_vm._v("是否在组件顶部显示一个toolbar")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("true")]), _vm._v(" "), _c('td')])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "columns"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#columns",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" columns")]), _vm._v(" "), _c('p', [_c('code', [_vm._v("API")]), _vm._v("中的"), _c('code', [_vm._v("columns")]), _vm._v("为一个对象数组，数组中的每一个对象配置每一列，每一列有以下"), _c('code', [_vm._v("key")]), _vm._v("：")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("key")]), _vm._v(" "), _c('th', [_vm._v("说明")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("values")]), _vm._v(" "), _c('td', [_vm._v("列中对应的备选值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("defaultIndex")]), _vm._v(" "), _c('td', [_vm._v("初始选中值的索引，默认为0")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("className")]), _vm._v(" "), _c('td', [_vm._v("为对应列添加特殊的"), _c('code', [_vm._v("class")])])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "change-shi-jian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#change-shi-jian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" change事件")]), _vm._v(" "), _c('p', [_vm._v("在"), _c('code', [_vm._v("change")]), _vm._v("事件中，可以获取到"), _c('code', [_vm._v("picker")]), _vm._v("实例，对"), _c('code', [_vm._v("picker")]), _vm._v("进行相应的更新等操作：")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("函数")]), _vm._v(" "), _c('th', [_vm._v("说明")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("getColumnValue(index)")]), _vm._v(" "), _c('td', [_vm._v("获取对应列中选中的值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("setColumnValue(index, value)")]), _vm._v(" "), _c('td', [_vm._v("设置对应列中选中的值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("getColumnValues(index)")]), _vm._v(" "), _c('td', [_vm._v("获取对应列中所有的备选值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("setColumnValues(index, values)")]), _vm._v(" "), _c('td', [_vm._v("设置对应列中所有的备选值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("getValues()")]), _vm._v(" "), _c('td', [_vm._v("获取所有列中被选中的值，返回一个数组")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("setValues(values)")]), _vm._v(" "), _c('td', [_c('code', [_vm._v("values")]), _vm._v("为一个数组，设置所有列中被选中的值")])])])])])
}]}

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', {
    attrs: {
      "id": "popup-zu-jian"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#popup-zu-jian",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Popup组件")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "ji-chu-yong-fa"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ji-chu-yong-fa",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 基础用法")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-1\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"popupShow1 = true\"")]), _vm._v(">")]), _vm._v("从下方弹出popup"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-popup")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"popupShow1\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("position")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"bottom\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-popup-1\"")]), _vm._v(">")]), _vm._v("\n  xxxx\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-popup")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-1\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"popupShow2 = true\"")]), _vm._v(">")]), _vm._v("从上方方弹出popup"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-popup")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"popupShow2\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("position")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"top\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-popup-2\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v(":overlay")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"false\"")]), _vm._v(">")]), _vm._v("\n  更新成功\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-popup")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-1\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"popupShow3 = true\"")]), _vm._v(">")]), _vm._v("从右方弹出popup"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-popup")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"popupShow3\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("position")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"right\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-popup-3\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v(":overlay")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"false\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@click.native")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"popupShow3 = false\"")]), _vm._v(">")]), _vm._v("关闭 popup"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-popup")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-button-1\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"popupShow4 = true\"")]), _vm._v(">")]), _vm._v("从中间弹出popup"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-popup")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"popupShow4\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("transition")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"popup-fade\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"z-popup-4\"")]), _vm._v(">")]), _vm._v("\n  一些内容\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("z-popup")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
    staticClass: "javascript"
  }, [_vm._v("\n"), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("default")]), _vm._v(" {\n  data() {\n    "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("return")]), _vm._v(" {\n      "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("popupShow1")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-literal"
  }, [_vm._v("false")]), _vm._v(",\n      "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("popupShow2")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-literal"
  }, [_vm._v("false")]), _vm._v(",\n      "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("popupShow3")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-literal"
  }, [_vm._v("false")]), _vm._v(",\n      "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("popupShow4")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-literal"
  }, [_vm._v("false")]), _vm._v("\n    }\n  },\n\n  "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("watch")]), _vm._v(": {\n    popupShow2(val) {\n      "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("if")]), _vm._v(" (val) {\n        setTimeout("), _c('span', {
    staticClass: "hljs-function"
  }, [_c('span', {
    staticClass: "hljs-params"
  }, [_vm._v("()")]), _vm._v(" =>")]), _vm._v(" {\n          "), _c('span', {
    staticClass: "hljs-keyword"
  }, [_vm._v("this")]), _vm._v(".popupShow2 = "), _c('span', {
    staticClass: "hljs-literal"
  }, [_vm._v("false")]), _vm._v(";\n        }, "), _c('span', {
    staticClass: "hljs-number"
  }, [_vm._v("2000")]), _vm._v(");\n      }\n    }\n  }\n};\n")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" API")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("value")]), _vm._v(" "), _c('td', [_vm._v("利用"), _c('code', [_vm._v("v-model")]), _vm._v("绑定当前组件是否显示")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("''")]), _vm._v(" "), _c('td')])])])])
}]}

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-panel"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Panel")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('z-panel', {
    attrs: {
      "title": "标题",
      "desc": "标题描述",
      "status": "状态"
    }
  }, [_c('z-card', {
    attrs: {
      "title": "商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余",
      "desc": "商品SKU1，商品SKU2",
      "thumb": "https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg"
    }
  }, [_c('div', {
    staticClass: "z-card__row",
    slot: "title"
  }, [_c('h4', {
    staticClass: "z-card__title"
  }, [_vm._v("商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余")]), _vm._v(" "), _c('span', {
    staticClass: "z-card__price"
  }, [_vm._v("¥ 2.00")])]), _vm._v(" "), _c('div', {
    staticClass: "z-card__row",
    slot: "desc"
  }, [_c('h4', {
    staticClass: "z-card__desc"
  }, [_vm._v("商品sku")]), _vm._v(" "), _c('span', {
    staticClass: "z-card__num"
  }, [_vm._v("x 2")])]), _vm._v(" "), _c('div', {
    staticClass: "z-card__footer",
    slot: "footer"
  }, [_c('z-button', {
    attrs: {
      "size": "mini"
    }
  }, [_vm._v("按钮一")]), _vm._v(" "), _c('z-button', {
    attrs: {
      "size": "mini"
    }
  }, [_vm._v("按钮二")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "z-panel-sum"
  }, [_vm._v("\n      合计："), _c('span', [_vm._v("¥ 1999.90")])])], 1), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("高级用法")]), _vm._v(" "), _c('z-panel', {
    attrs: {
      "title": "标题",
      "desc": "标题描述",
      "status": "状态"
    }
  }, [_c('z-card', {
    attrs: {
      "title": "商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余",
      "desc": "商品SKU1，商品SKU2",
      "thumb": "https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg"
    }
  }, [_c('div', {
    staticClass: "z-card__row",
    slot: "title"
  }, [_c('h4', {
    staticClass: "z-card__title"
  }, [_vm._v("商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余")]), _vm._v(" "), _c('span', {
    staticClass: "z-card__price"
  }, [_vm._v("¥ 2.00")])]), _vm._v(" "), _c('div', {
    staticClass: "z-card__row",
    slot: "desc"
  }, [_c('h4', {
    staticClass: "z-card__desc"
  }, [_vm._v("商品sku")]), _vm._v(" "), _c('span', {
    staticClass: "z-card__num"
  }, [_vm._v("x 2")])]), _vm._v(" "), _c('div', {
    staticClass: "z-card__footer",
    slot: "footer"
  }, [_c('z-button', {
    attrs: {
      "size": "mini"
    }
  }, [_vm._v("按钮一")]), _vm._v(" "), _c('z-button', {
    attrs: {
      "size": "mini"
    }
  }, [_vm._v("按钮二")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "z-panel-sum"
  }, [_vm._v("\n      合计："), _c('span', [_vm._v("¥ 1999.90")])]), _vm._v(" "), _c('div', {
    staticClass: "z-panel-buttons",
    slot: "footer"
  }, [_c('z-button', {
    attrs: {
      "size": "small"
    }
  }, [_vm._v("按钮一")]), _vm._v(" "), _c('z-button', {
    attrs: {
      "size": "small",
      "type": "danger"
    }
  }, [_vm._v("按钮二")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-switch"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Switch")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('div', {
    staticClass: "page-switch"
  }, [_c('div', {
    staticClass: "page-switch__wrapper"
  }, [_c('o2-switch', {
    staticClass: "some-customized-class",
    attrs: {
      "checked": _vm.switchState,
      "on-change": _vm.updateState
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "page-switch__text"
  }, [_vm._v(_vm._s(_vm.switchStateText))])], 1), _vm._v(" "), _c('div', {
    staticClass: "page-switch__wrapper"
  }, [_c('o2-switch', {
    staticClass: "some-customized-class",
    attrs: {
      "checked": true,
      "disabled": true
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "page-switch__text"
  }, [_vm._v("ON, DISABLED")])], 1), _vm._v(" "), _c('div', {
    staticClass: "page-switch__wrapper"
  }, [_c('o2-switch', {
    staticClass: "some-customized-class",
    attrs: {
      "checked": false,
      "disabled": true
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "page-switch__text"
  }, [_vm._v("OFF, DISABLED")])], 1)])])
},staticRenderFns: []}

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(190);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(43)("2eeab910", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-025cf2ea!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./card.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-025cf2ea!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./card.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 249 */,
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(43)("e685bc1e", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3804020f!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./field.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3804020f!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./field.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(43)("2980cef7", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js?minimize!../../vue-loader/lib/style-rewriter.js?id=data-v-5184d01e!../../vue-loader/lib/selector.js?type=styles&index=0!./cell-1.vue", function() {
     var newContent = require("!!../../css-loader/index.js?minimize!../../vue-loader/lib/style-rewriter.js?id=data-v-5184d01e!../../vue-loader/lib/selector.js?type=styles&index=0!./cell-1.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(194);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(43)("b92eb2a6", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-562c8003!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dialog.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-562c8003!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dialog.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(43)("748b945c", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6ec3c846!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cell.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6ec3c846!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cell.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(43)("1698a083", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-703eae7e!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./popup.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-703eae7e!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./popup.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(43)("9223f4d8", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-726870b2!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./waterfall.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-726870b2!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./waterfall.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(43)("24155ca9", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-83ccb626!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./button.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-83ccb626!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./button.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(43)("b0a0a58e", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d78453ce!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./panel.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d78453ce!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./panel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(200);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(43)("278a1df7", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d7f13822!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./switch.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d7f13822!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./switch.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(211);

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(212);

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(213);

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(214);

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(215);

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(216);

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(217);

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(218);

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(219);

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(220);

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(221);

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(222);

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(223);

/***/ })
]));
//# sourceMappingURL=0.js.map