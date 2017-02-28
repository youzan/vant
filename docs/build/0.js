webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(41)('wks')
  , uid        = __webpack_require__(44)
  , Symbol     = __webpack_require__(2).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(19)
  , createDesc = __webpack_require__(40);
module.exports = __webpack_require__(9) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(31)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(20);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(5)
  , IE8_DOM_DEFINE = __webpack_require__(98)
  , toPrimitive    = __webpack_require__(117)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(19).f
  , has = __webpack_require__(17)
  , TAG = __webpack_require__(1)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(41)('keys')
  , uid    = __webpack_require__(44);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(100)
  , defined = __webpack_require__(21);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(8)
  , ctx       = __webpack_require__(16)
  , hide      = __webpack_require__(6)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cell = __webpack_require__(126);

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _cell2.default;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _merge = __webpack_require__(34);

var _merge2 = _interopRequireDefault(_merge);

var _popupManager = __webpack_require__(89);

var _popupManager2 = _interopRequireDefault(_popupManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var idSeed = 1;

var getDOM = function getDOM(dom) {
  if (dom.nodeType === 3) {
    dom = dom.nextElementSibling || dom.nextSibling;
    getDOM(dom);
  }
  return dom;
};

exports.default = {
  props: {
    /**
     * popup当前显示状态
     */
    value: {
      type: Boolean,
      default: false
    },
    /**
     * 是否显示遮罩层
     */
    overlay: {
      type: Boolean,
      default: false
    },
    /**
     * 点击遮罩层是否关闭popup
     */
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    zIndex: [String, Number],
    /**
     * popup滚动时是否body内容也滚动
     * 默认为不滚动
     */
    lockOnScroll: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    value: function value(val) {
      if (val) {
        if (this.opening) return;
        this.open();
      } else {
        if (this.closing) return;
        this.close();
      }
    }
  },

  beforeMount: function beforeMount() {
    this._popupId = 'popup-' + idSeed++;
    _popupManager2.default.register(this._popupId, this);
  },
  data: function data() {
    return {
      opening: false,
      opened: false,
      closing: false,
      bodyOverflow: null
    };
  },


  methods: {
    /**
     * 显示popup
     */
    open: function open(options) {
      if (this.opened) return;

      this.opening = true;

      this.$emit('input', true);

      var dom = getDOM(this.$el);
      var props = (0, _merge2.default)({}, this, options);
      var zIndex = props.zIndex;

      // 如果属性中传入了`zIndex`，则覆盖`PopupManager`中对应的`zIndex`
      if (zIndex) {
        _popupManager2.default.zIndex = zIndex;
      }

      // 如果显示遮罩层
      if (this.overlay) {
        if (this.closing) {
          _popupManager2.default.closeModal(this._popupId);
          this.closing = false;
        }
        _popupManager2.default.openModal(this._popupId, _popupManager2.default.nextZIndex(), dom);

        // 如果滚动时需要锁定
        if (this.lockOnScroll) {
          // 将原来的`bodyOverflow`存起来
          if (!this.bodyOverflow) {
            this.bodyOverflow = document.body.style.overflow;
          }

          document.body.style.overlay = 'hidden';
        }
      }

      dom.style.zIndex = _popupManager2.default.nextZIndex();
      this.opened = true;
      this.opening = false;
    },


    /**
     * 关闭popup
     */
    close: function close() {
      var _this = this;

      if (this.closing) return;

      this.closing = true;

      this.$emit('input', false);

      if (this.lockOnScroll) {
        setTimeout(function () {
          if (_this.modal && _this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = _this.bodyOverflow;
          }
          _this.bodyOverflow = null;
        }, 200);
      }

      this.opened = false;
      this.doAfterClose();
    },
    doAfterClose: function doAfterClose() {
      this.closing = false;
      _popupManager2.default.closeModal(this._popupId);
    }
  },

  beforeDestroy: function beforeDestroy() {
    _popupManager2.default.deregister(this._popupId);
    _popupManager2.default.closeModal(this._popupId);

    if (this.modal && this.bodyOverflow !== null && this.bodyOverflow !== 'hidden') {
      document.body.style.overflow = this.bodyOverflow;
    }
    this.bodyOverflow = null;
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < sources.length; i++) {
    var source = sources[i] || {};
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
};

;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15)
  , TAG = __webpack_require__(1)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2).document && document.documentElement;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(39)
  , $export        = __webpack_require__(30)
  , redefine       = __webpack_require__(112)
  , hide           = __webpack_require__(6)
  , has            = __webpack_require__(17)
  , Iterators      = __webpack_require__(10)
  , $iterCreate    = __webpack_require__(103)
  , setToStringTag = __webpack_require__(23)
  , getPrototypeOf = __webpack_require__(109)
  , ITERATOR       = __webpack_require__(1)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(16)
  , invoke             = __webpack_require__(99)
  , html               = __webpack_require__(37)
  , cel                = __webpack_require__(22)
  , global             = __webpack_require__(2)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(15)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(25)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(68);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(84);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(74);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(82);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(32);

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(75);

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__(71);

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__(80);

var _index16 = _interopRequireDefault(_index15);

var _index17 = __webpack_require__(72);

var _index18 = _interopRequireDefault(_index17);

var _index19 = __webpack_require__(78);

var _index20 = _interopRequireDefault(_index19);

var _index21 = __webpack_require__(81);

var _index22 = _interopRequireDefault(_index21);

var _index23 = __webpack_require__(85);

var _index24 = _interopRequireDefault(_index23);

var _index25 = __webpack_require__(76);

var _index26 = _interopRequireDefault(_index25);

var _index27 = __webpack_require__(77);

var _index28 = _interopRequireDefault(_index27);

var _index29 = __webpack_require__(70);

var _index30 = _interopRequireDefault(_index29);

var _index31 = __webpack_require__(83);

var _index32 = _interopRequireDefault(_index31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  if (install.installed) return;

  Vue.component(_index2.default.name, _index2.default);
  Vue.component(_index4.default.name, _index4.default);
  Vue.component(_index6.default.name, _index6.default);
  Vue.component(_index8.default.name, _index8.default);
  Vue.component(_index10.default.name, _index10.default);
  Vue.component(_index12.default.name, _index12.default);
  Vue.component(_index14.default.name, _index14.default);
  Vue.component(_index16.default.name, _index16.default);
  Vue.component(_index20.default.name, _index20.default);
  Vue.component(_index22.default.name, _index22.default);
  Vue.component(_index26.default.name, _index26.default);
  Vue.component(_index28.default.name, _index28.default);
  Vue.component(_index30.default.name, _index30.default);
  Vue.component(_index32.default.name, _index32.default);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  install: install,
  version: '0.0.4',
  Button: _index2.default,
  Switch: _index4.default,
  Field: _index6.default,
  Radio: _index8.default,
  Cell: _index10.default,
  Icon: _index12.default,
  CellGroup: _index14.default,
  Popup: _index16.default,
  Dialog: _index18.default,
  Picker: _index20.default,
  RadioGroup: _index22.default,
  Waterfall: _index24.default,
  Loading: _index26.default,
  Panel: _index28.default,
  Card: _index30.default,
  Steps: _index32.default
};

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(110)
  , enumBugKeys = __webpack_require__(36);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(21);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 53 */
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

exports.default = {
  name: 'zan-card',
  props: {
    thumb: {
      type: String,
      required: true
    },
    title: String,
    desc: String
  }
};

/***/ }),
/* 54 */
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

exports.default = {
  name: 'zan-cell-group'
};

/***/ }),
/* 55 */
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
  name: 'zan-cell',

  props: {
    icon: String,
    title: String,
    value: [String, Number],
    url: String,
    label: String,
    isLink: Boolean
  },

  methods: {
    handleClick: function handleClick() {
      this.$emit('click');
    }
  }
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popup = __webpack_require__(33);

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CANCEL_TEXT = '取消'; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var CONFIRM_TEXT = '确认';

exports.default = {
  name: 'zan-dialog',

  mixins: [_popup2.default],

  props: {
    overlay: {
      default: true
    },
    closeOnClickOverlay: {
      default: true
    },
    lockOnScroll: {
      default: true
    }
  },

  data: function data() {
    return {
      title: '',
      message: '',
      type: '',
      showConfirmButton: true,
      showCancelButton: false,
      confirmButtonText: CONFIRM_TEXT,
      cancelButtonText: CANCEL_TEXT,
      callback: null
    };
  },


  methods: {
    handleAction: function handleAction(action) {
      this.value = false;
      this.callback && this.callback(action);
    },
    close: function close() {
      var _this = this;

      if (this.closing) return;

      this.closing = true;

      this.value = false;

      if (this.lockOnScroll) {
        setTimeout(function () {
          if (_this.modal && _this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = _this.bodyOverflow;
            document.body.style.paddingRight = _this.bodyPaddingRight;
          }
          _this.bodyOverflow = null;
          _this.bodyPaddingRight = null;
        }, 200);
      }

      this.opened = false;
      this.doAfterClose();
    }
  }
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cell = __webpack_require__(32);

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'zan-field',

  components: {
    zCell: _cell2.default
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: String,
    label: String,
    disabled: Boolean,
    readonly: Boolean,
    maxlength: [String, Number]
  },

  data: function data() {
    return {
      currentValue: this.value
    };
  },


  watch: {
    value: function value(val) {
      this.currentValue = val;
    },
    currentValue: function currentValue(val) {
      this.$emit('input', val);
      console.log(val);
    }
  },

  methods: {
    handleInput: function handleInput(event) {
      this.currentValue = event.target.value;
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

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

exports.default = {
  name: 'zan-icon',

  props: {
    name: String
  }
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

exports.default = {
  name: 'zan-loading'
};

/***/ }),
/* 60 */
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

exports.default = {
  name: 'zan-panel',
  props: {
    title: String,
    desc: String,
    status: String
  }
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transition = __webpack_require__(91);

var _transition2 = _interopRequireDefault(_transition);

var _draggable = __webpack_require__(79);

var _draggable2 = _interopRequireDefault(_draggable);

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
//
//
//
//
//

var DEFAULT_ITEM_HEIGHT = 44;

exports.default = {
  name: 'zan-picker-column',

  props: {
    /**
     * 每一列可见备选元素的个数
     */
    visibileColumnCount: {
      type: Number,
      default: 5
    },
    /**
     * 该列所有的可选值
     */
    values: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    /**
     * 每列添加额外的`className`
     */
    className: {
      type: String,
      default: ''
    },
    /**
     * 行高
     */
    itemHeight: {
      type: Number,
      default: DEFAULT_ITEM_HEIGHT
    },
    value: {}
  },

  data: function data() {
    return {
      currentValue: this.value,
      currentValues: this.values,
      isDragging: false
    };
  },


  watch: {
    values: function values(val) {
      this.currentValues = val;
    },
    currentValues: function currentValues(val) {
      if (this.valueIndex === -1) {
        this.currentValue = (val || [])[0];
      }
    },
    currentValue: function currentValue(val) {
      this.doOnValueChange();

      this.$emit('change', this);
    }
  },

  computed: {
    /**
     * picker可见备选元素总高度
     */
    visibleContentHeight: function visibleContentHeight() {
      return this.itemHeight * this.visibileColumnCount;
    },


    /**
     * 当前选中值在`values`中的索引
     */
    valueIndex: function valueIndex() {
      return this.currentValues.indexOf(this.currentValue);
    },


    /**
     * 计算picker的拖动范围
     */
    dragRange: function dragRange() {
      var values = this.currentValues;
      var visibileColumnCount = this.visibileColumnCount;
      var itemHeight = this.itemHeight;

      return [-itemHeight * (values.length - Math.ceil(visibileColumnCount / 2)), itemHeight * Math.floor(visibileColumnCount / 2)];
    },


    /**
     * 计算`classNames`
     */
    classNames: function classNames() {
      return this.className.split(' ');
    }
  },

  mounted: function mounted() {
    this.initEvents();
    this.doOnValueChange();
  },


  methods: {
    /**
     * 将当前`value`值转换成需要垂直方向需要`translate`的值
     */
    value2Translate: function value2Translate(value) {
      var values = this.currentValues;
      var valueIndex = values.indexOf(value);
      var offset = Math.floor(this.visibileColumnCount / 2);
      var itemHeight = this.itemHeight;

      if (valueIndex !== -1) {
        return (valueIndex - offset) * -itemHeight;
      }
    },


    /**
     * 根据当前`translate`的值转换成当前选中的`value`
     */
    translate2Value: function translate2Value(translate) {
      var itemHeight = this.itemHeight;
      translate = Math.round(translate / itemHeight) * itemHeight;

      var index = -(translate - Math.floor(this.visibileColumnCount / 2) * itemHeight) / itemHeight;

      return this.currentValues[index];
    },


    /**
     * 初始化拖动事件
     */
    initEvents: function initEvents() {
      var _this = this;

      var el = this.$refs.wrapper;
      var dragState = {};

      var velocityTranslate;
      var prevTranslate;
      var pickerItems; // eslint-disable-line

      (0, _draggable2.default)(el, {
        start: function start(event) {
          // 存储当前状态
          dragState = {
            range: _this.dragRange,
            start: new Date(),
            startLeft: event.pageX,
            startTop: event.pageY,
            startTranslateTop: _transition2.default.getElementTranslate(el).top
          };
          pickerItems = el.querySelectorAll('.zan-picker-item'); // eslint-disable-line
        },

        drag: function drag(event) {
          _this.isDragging = true;

          dragState.left = event.pageX;
          dragState.top = event.pageY;

          var deltaY = dragState.top - dragState.startTop;
          var translate = dragState.startTranslateTop + deltaY;

          _transition2.default.translateElement(el, null, translate);

          velocityTranslate = translate - prevTranslate || translate;

          prevTranslate = translate;
        },

        end: function end() {
          if (_this.isDragging) {
            _this.isDragging = false;

            var momentumRatio = 7;
            var currentTranslate = _transition2.default.getElementTranslate(el).top;
            var duration = new Date() - dragState.start;

            var momentumTranslate;
            if (duration < 300) {
              momentumTranslate = currentTranslate + velocityTranslate * momentumRatio;
            }

            var dragRange = dragState.range;

            _this.$nextTick(function () {
              var translate;
              var itemHeight = _this.itemHeight;

              if (momentumTranslate) {
                translate = Math.round(momentumTranslate / itemHeight) * itemHeight;
              } else {
                translate = Math.round(currentTranslate / itemHeight) * itemHeight;
              }

              translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0]);

              _transition2.default.translateElement(el, null, translate);

              _this.currentValue = _this.translate2Value(translate);
            });
          }

          dragState = {};
        }
      });
    },


    /**
     * `value`改变时调用
     */
    doOnValueChange: function doOnValueChange() {
      var value = this.currentValue;
      var wrapper = this.$refs.wrapper;

      this.$emit('input', this.currentValue);

      _transition2.default.translateElement(wrapper, null, this.value2Translate(value));
    }
  }
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pickerColumn = __webpack_require__(132);

var _pickerColumn2 = _interopRequireDefault(_pickerColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_ITEM_HEIGHT = 44; //
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'zan-picker',

  components: {
    PickerColumn: _pickerColumn2.default
  },

  props: {
    /**
     * 每一列可见备选元素的个数
     */
    visibileColumnCount: {
      type: Number,
      default: 5
    },
    /**
     * 选中元素区高度
     */
    itemHeight: {
      type: Number,
      default: DEFAULT_ITEM_HEIGHT
    },
    /**
     * 对象数组，配置每一列显示的数据
     */
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    /**
     * 否在组件顶部显示一个toolbar
     */
    showToolbar: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    values: function values() {
      var columns = this.columns || [];
      var values = [];

      columns.forEach(function (column) {
        values.push(column.value || column.values[column.defaultIndex || 0]);
      });

      return values;
    }
  },

  methods: {
    /**
     * 处理列`change`事件
     */
    columnValueChange: function columnValueChange() {
      this.$emit('change', this, this.values);
    },


    /**
     * 获取对应索引的列的实例
     */
    getColumn: function getColumn(index) {
      var children = this.$children.filter(function (child) {
        return child.$options.name === 'zan-picker-column';
      });
      return children[index];
    },


    /**
     * 获取对应列中选中的值
     */
    getColumnValue: function getColumnValue(index) {
      var column = this.getColumn(index);
      return column && column.values[column.valueIndex];
    },


    /**
     * 设置对应列中选中的值
     */
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      if (column) {
        column.currentValue = value;
      }
    },


    /**
     * 获取对应列中所有的备选值
     */
    getColumnValues: function getColumnValues(index) {
      var column = this.getColumn(index);
      return column && column.currentValues;
    },


    /**
     * 设置对应列中所有的备选值
     */
    setColumnValues: function setColumnValues(index, values) {
      var column = this.getColumn(index);
      if (column) {
        column.currentValues = values;
      }
    },


    /**
     * 获取所有列中被选中的值，返回一个数组
     */
    getValues: function getValues() {
      return this.values;
    },


    /**
     * `values`为一个数组，设置所有列中被选中的值
     */
    setValues: function setValues(values) {
      var _this = this;

      values.forEach(function (value, index) {
        _this.setColumnValue(index, value);
      });
    }
  }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popup = __webpack_require__(33);

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'zan-popup',

  mixins: [_popup2.default],

  props: {
    overlay: {
      default: true
    },

    lockOnScroll: {
      default: false
    },

    closeOnClickOverlay: {
      default: true
    },

    transition: {
      type: String,
      default: 'popup-slide'
    },

    position: {
      type: String,
      default: ''
    }
  },

  data: function data() {
    return {
      currentValue: false,
      currentTransition: this.transition
    };
  },


  watch: {
    currentValue: function currentValue(val) {
      this.$emit('input', val);
    },
    value: function value(val) {
      this.currentValue = val;
    }
  },

  beforeMount: function beforeMount() {
    if (this.transition !== 'popup-fade') {
      this.currentTransition = 'popup-slide-' + this.position;
    }
  },
  mounted: function mounted() {
    if (this.value) {
      this.currentValue = true;
      this.open();
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

/***/ }),
/* 64 */
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

exports.default = {
  name: 'zan-radio-group',

  props: {
    value: {},
    disabled: Boolean
  },

  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    }
  }
};

/***/ }),
/* 65 */
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

exports.default = {
  name: 'zan-radio',

  props: {
    disabled: Boolean,
    value: {},
    name: [String, Number]
  },

  computed: {
    isGroup: function isGroup() {
      return !!this.findRadioGroup();
    },


    currentValue: {
      get: function get() {
        return this.isGroup ? this.parentGroup && this.parentGroup.value : this.value;
      },
      set: function set(val) {
        if (this.isGroup) {
          this.parentGroup && this.parentGroup.$emit('input', val);
        } else {
          this.$emit('input', val);
        }
      }
    },

    isDisabled: function isDisabled() {
      return this.isGroup ? this.parentGroup && this.parentGroup.disabled || this.disabled : this.disabled;
    }
  },

  methods: {
    findRadioGroup: function findRadioGroup() {
      if (this.parentGroup) return;

      var parent = this.$parent;
      while (parent) {
        if (parent.$options.name === 'zan-radio-group') {
          this.parentGroup = parent;
          break;
        } else {
          parent = parent.$parent;
        }
      }

      return this.parentGroup;
    }
  }
};

/***/ }),
/* 66 */
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

exports.default = {
  name: 'Sample',
  props: ['author'],
  data: function data() {
    return {
      name: 'World'
    };
  }
};

/***/ }),
/* 67 */
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

/**
 * o2-switch
 * @module components/switch
 * @desc 开关
 * @param {boolean} [checked=false] - 开关状态
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [loading=false] - loading状态
 * @param {callback} [onChange] - 开关状态改变回调函数。
 *
 * @example
 * <o2-switch checked="true" disabled="false"></o2-switch>
 */
exports.default = {
  name: 'zan-switch',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: function _default() {}
    }
  },
  computed: {
    switchState: function switchState() {
      var switchState = this.checked ? ['is-on'] : ['is-off'];

      if (this.disabled) switchState.push('is-disabled');
      if (this.loading) switchState.push('is-loading');

      return switchState;
    }
  },
  methods: {
    /*
     * 开关状态交互。
     */
    toggleState: function toggleState() {
      if (this.disabled || this.loading) return;
      this.onChange(!this.checked);
    }
  }
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(69);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _button2.default;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {string} [size=normal] - 尺寸，接受 normal, mini, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {slot} - 显示文本
 *
 * @example
 * <zan-button size="large" type="primary">按钮</zan-button>
 */

var allowedSize = ['mini', 'small', 'normal', 'large'];
var allowedType = ['default', 'danger', 'primary'];

exports.default = {
  name: 'zan-button',

  props: {
    disabled: Boolean,
    loading: Boolean,
    block: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    nativeType: String,
    type: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        return allowedType.indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator: function validator(value) {
        return allowedSize.indexOf(value) > -1;
      }
    }
  },

  methods: {
    handleClick: function handleClick() {
      this.$emit('click');
    }
  },

  render: function render(h) {
    var type = this.type,
        nativeType = this.nativeType,
        size = this.size,
        disabled = this.disabled,
        loading = this.loading,
        block = this.block;

    var Tag = this.tag;

    return h(
      Tag,
      {
        attrs: {
          type: nativeType,
          disabled: disabled
        },
        'class': ['zan-button', 'zan-button--' + type, 'zan-button--' + size, {
          'is-disabled': disabled,
          'is-loading': loading,
          'is-block': block
        }],
        on: {
          'click': this.handleClick
        }
      },
      [loading ? h(
        'i',
        { 'class': 'zan-icon-loading' },
        []
      ) : null, h(
        'span',
        { 'class': 'zan-button-text' },
        [this.$slots.default]
      )]
    );
  }
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = __webpack_require__(124);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _card2.default;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cellGroup = __webpack_require__(125);

var _cellGroup2 = _interopRequireDefault(_cellGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _cellGroup2.default;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dialog = __webpack_require__(73);

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dialog2.default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(92);

var _promise2 = _interopRequireDefault(_promise);

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _dialog = __webpack_require__(127);

var _dialog2 = _interopRequireDefault(_dialog);

var _merge = __webpack_require__(34);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogConstructor = _vue2.default.extend(_dialog2.default);

var currentDialog = void 0;
var instance = void 0;
var dialogQueue = [];

var defaultCallback = function defaultCallback(action) {
  if (currentDialog) {
    var callback = currentDialog.callback;

    if (typeof callback === 'function') {
      callback(action);
    }

    if (currentDialog.resolve && action === 'confirm') {
      currentDialog.resolve(action);
    } else if (currentDialog.reject && action === 'cancel') {
      currentDialog.reject(action);
    }
  }
};

var initInstance = function initInstance() {
  instance = new DialogConstructor({
    el: document.createElement('div')
  });

  instance.callback = defaultCallback;
};

var showNextDialog = function showNextDialog() {
  if (!instance) {
    initInstance();
  }

  if (!instance.value && dialogQueue.length > 0) {
    currentDialog = dialogQueue.shift();

    var options = currentDialog.options;

    for (var prop in options) {
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop];
      }
    }

    if (options.callback === undefined) {
      instance.callback = defaultCallback;
    }

    document.body.appendChild(instance.$el);

    _vue2.default.nextTick(function () {
      instance.value = true;
    });
  }
};

var DialogBox = function DialogBox(options) {
  return new _promise2.default(function (resolve, reject) {
    // eslint-disable-line
    dialogQueue.push({
      options: (0, _merge2.default)({}, options),
      callback: options.callback,
      resolve: resolve,
      reject: reject
    });

    showNextDialog();
  });
};

DialogBox.alert = function (options) {
  return DialogBox((0, _merge2.default)({
    type: 'alert',
    closeOnClickOverlay: false,
    showCancelButton: false
  }, options));
};

DialogBox.confirm = function (options) {
  return DialogBox((0, _merge2.default)({
    type: 'confirm',
    closeOnClickOverlay: true,
    showCancelButton: true
  }, options));
};

DialogBox.close = function () {
  instance.value = false;
  dialogQueue = [];
  currentDialog = null;
};

exports.default = DialogBox;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _field = __webpack_require__(128);

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _field2.default;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(129);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _icon2.default;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loading = __webpack_require__(130);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _loading2.default;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _panel = __webpack_require__(131);

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _panel2.default;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _picker = __webpack_require__(133);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _picker2.default;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, options) {
  var moveFn = function moveFn(event) {
    if (options.drag) {
      options.drag(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
    }
  };

  var endFn = function endFn(event) {
    if (!supportTouch) {
      document.removeEventListener('mousemove', moveFn);
      document.removeEventListener('mouseup', endFn);
    }
    document.onselectstart = null;
    document.ondragstart = null;

    isDragging = false;

    if (options.end) {
      options.end(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
    }
  };

  element.addEventListener(supportTouch ? 'touchstart' : 'mousedown', function (event) {
    if (isDragging) return;
    document.onselectstart = function () {
      return false;
    };
    document.ondragstart = function () {
      return false;
    };

    if (!supportTouch) {
      document.addEventListener('mousemove', moveFn);
      document.addEventListener('mouseup', endFn);
    }
    isDragging = true;

    if (options.start) {
      event.preventDefault();
      options.start(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
    }
  });

  if (supportTouch) {
    element.addEventListener('touchmove', moveFn);
    element.addEventListener('touchend', endFn);
    element.addEventListener('touchcancel', endFn);
  }
};

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDragging = false;

var supportTouch = !_vue2.default.prototype.$isServer && 'ontouchstart' in window;

;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popup = __webpack_require__(134);

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _popup2.default;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radioGroup = __webpack_require__(135);

var _radioGroup2 = _interopRequireDefault(_radioGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _radioGroup2.default;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radio = __webpack_require__(136);

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _radio2.default;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _steps = __webpack_require__(137);

var _steps2 = _interopRequireDefault(_steps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _steps2.default;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _switch = __webpack_require__(138);

var _switch2 = _interopRequireDefault(_switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _switch2.default;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(87);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _main2.default;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (type) {
  return {
    bind: function bind(el, binding, vnode) {
      if (!el[CONTEXT]) {
        el[CONTEXT] = {
          el: el,
          vm: vnode.context,
          cb: {}
        };
      }
      el[CONTEXT].cb[type] = binding.value;

      vnode.context.$on('hook:mounted', function () {
        if (_utils2.default.isAttached(el)) {
          doBindEvent.call(el[CONTEXT]);
        }
      });
    },
    update: function update(el) {
      el[CONTEXT].scrollEventListener();
    },
    unbind: function unbind(el) {
      var context = el[CONTEXT];
      context.scrollEventTarget.removeEventListener('scroll', context.scrollEventListener);
    }
  };
};

var _utils = __webpack_require__(88);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONTEXT = '@@Waterfall';
var OFFSET = 300;

// 绑定事件到元素上
// 读取基本的控制变量
function doBindEvent() {
  var _this = this;

  this.scrollEventListener = _utils2.default.debounce(handleScrollEvent.bind(this), 200);
  this.scrollEventTarget = _utils2.default.getScrollEventTarget(this.el);

  var disabledExpr = this.el.getAttribute('waterfall-disabled');
  var disabled = false;
  if (disabledExpr) {
    this.vm.$watch(disabledExpr, function (value) {
      _this.disabled = value;
    });
    disabled = Boolean(this.vm[disabledExpr]);
  }
  this.disabled = disabled;

  var offset = this.el.getAttribute('waterfall-offset');
  this.offset = Number(offset) || OFFSET;

  this.scrollEventTarget.addEventListener('scroll', this.scrollEventListener);

  this.scrollEventListener();
}

// 处理滚动函数
function handleScrollEvent() {
  var element = this.el;
  var scrollEventTarget = this.scrollEventTarget;

  // 已被禁止的滚动处理
  if (this.disabled) return;

  var targetScrollTop = _utils2.default.getScrollTop(scrollEventTarget);
  var targetBottom = targetScrollTop + _utils2.default.getVisibleHeight(scrollEventTarget);

  // 判断是否到了底
  var needLoadMoreToLower = false;
  if (element === scrollEventTarget) {
    needLoadMoreToLower = scrollEventTarget.scollHeight - targetBottom < this.offset;
  } else {
    var elementBottom = _utils2.default.getElementTop(element) - _utils2.default.getElementTop(scrollEventTarget) + _utils2.default.getVisibleHeight(element);
    needLoadMoreToLower = elementBottom - _utils2.default.getVisibleHeight(scrollEventTarget) < this.offset;
  }
  if (needLoadMoreToLower) {
    this.cb['lower'] && this.cb['lower']({ target: scrollEventTarget, top: targetScrollTop });
  }

  // 判断是否到了顶
  var needLoadMoreToUpper = false;
  if (element === scrollEventTarget) {
    needLoadMoreToUpper = targetScrollTop < this.offset;
  } else {
    var elementTop = _utils2.default.getElementTop(element) - _utils2.default.getElementTop(scrollEventTarget);
    needLoadMoreToUpper = elementTop + this.offset > 0;
  }
  if (needLoadMoreToUpper) {
    this.cb['upper'] && this.cb['upper']({ target: scrollEventTarget, top: targetScrollTop });
  }
}

;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _directive = __webpack_require__(86);

var _directive2 = _interopRequireDefault(_directive);

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  Vue.directive('WaterfallLower', (0, _directive2.default)('lower'));
  Vue.directive('WaterfallUpper', (0, _directive2.default)('upper'));
};

if (!_vue2.default.prototype.$isServer) {
  _vue2.default.use(install);
}

_directive2.default.install = install;
exports.default = _directive2.default;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  debounce: function debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    return function () {
      context = this;
      args = arguments;
      timestamp = new Date();
      var later = function later() {
        var last = new Date() - timestamp;
        if (last < wait) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          result = func.apply(context, args);
        }
      };
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      return result;
    };
  },


  // 找到最近的触发滚动事件的元素
  getScrollEventTarget: function getScrollEventTarget(element) {
    var currentNode = element;
    // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
      var overflowY = this.getComputedStyle(currentNode).overflowY;
      if (overflowY === 'scroll' || overflowY === 'auto') {
        return currentNode;
      }
      currentNode = currentNode.parentNode;
    }
    return window;
  },


  // 判断元素是否被加入到页面节点内
  isAttached: function isAttached(element) {
    var currentNode = element.parentNode;
    while (currentNode) {
      if (currentNode.tagName === 'HTML') {
        return true;
      }
      if (currentNode.nodeType === 11) {
        return false;
      }
      currentNode = currentNode.parentNode;
    }
    return false;
  },


  // 获取滚动高度
  getScrollTop: function getScrollTop(element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
  },


  // 获取元素距离顶部高度
  getElementTop: function getElementTop(element) {
    if (element === window) {
      return this.getScrollTop(window);
    }
    return element.getBoundingClientRect().top + this.getScrollTop(window);
  },
  getVisibleHeight: function getVisibleHeight(element) {
    if (element === window) {
      return element.innerHeight;
    }

    return element.getBoundingClientRect().height;
  },


  getComputedStyle: document.defaultView.getComputedStyle.bind(document.defaultView)
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(90);

var hasModal = false;

var getModal = function getModal() {
  var modalDom = PopupManager.modalDom;
  if (modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement('div');
    PopupManager.modalDom = modalDom;

    modalDom.addEventListener('touchmove', function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    modalDom.addEventListener('click', function () {
      PopupManager.handleOverlayClick && PopupManager.handleOverlayClick();
    });
  }

  return modalDom;
};

var instances = {};

var PopupManager = {
  zIndex: 2000,

  modalStack: [],

  nextZIndex: function nextZIndex() {
    return this.zIndex++;
  },
  getInstance: function getInstance(id) {
    return instances[id];
  },
  register: function register(id, instance) {
    if (id && instance) {
      instances[id] = instance;
    }
  },
  deregister: function deregister(id) {
    if (id) {
      instances[id] = null;
      delete instances[id];
    }
  },


  /**
   * 遮罩层点击回调，`closeOnClickOverlay`为`true`时会关闭当前`popup`
   */
  handleOverlayClick: function handleOverlayClick() {
    var topModal = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topModal) return;

    var instance = PopupManager.getInstance(topModal.id);
    if (instance && instance.closeOnClickOverlay) {
      instance.close();
    }
  },
  openModal: function openModal(id, zIndex, dom) {
    if (!id || zIndex === undefined) return;

    var modalStack = this.modalStack;

    for (var i = 0, len = modalStack.length; i < len; i++) {
      var item = modalStack[i];
      if (item.id === id) {
        return;
      }
    }

    var modalDom = getModal();

    (0, _dom.addClass)(modalDom, 'zan-modal');

    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }

    if (zIndex) {
      modalDom.style.zIndex = zIndex;
    }
    modalDom.style.display = '';

    this.modalStack.push({ id: id, zIndex: zIndex });
  },
  closeModal: function closeModal(id) {
    var _this = this;

    var modalStack = this.modalStack;
    var modalDom = getModal();

    if (modalStack.length > 0) {
      var topItem = modalStack[modalStack.length - 1];
      if (topItem.id === id) {
        modalStack.pop();
        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
        }
      } else {
        for (var i = modalStack.length - 1; i >= 0; i--) {
          if (modalStack[i].id === id) {
            modalStack.splice(i, 1);
            break;
          }
        }
      }
    }

    if (modalStack.length === 0) {
      setTimeout(function () {
        if (modalStack.length === 0) {
          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);

          modalDom.style.display = 'none';
          _this.modalDom = null;
        }
      }, 200);
    }
  }
};

exports.default = PopupManager;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exportObj = {};

if (!_vue2.default.prototype.$isServer) {
  var docStyle = document.documentElement.style;
  var engine;
  var translate3d = false;

  if (window.opera && Object.prototype.toString.call(window.opera) === '[object Opera]') {
    engine = 'presto';
  } else if ('MozAppearance' in docStyle) {
    engine = 'gecko';
  } else if ('WebkitAppearance' in docStyle) {
    engine = 'webkit';
  } else if (typeof navigator.cpuClass === 'string') {
    engine = 'trident';
  }

  var cssPrefix = { trident: '-ms-', gecko: '-moz-', webkit: '-webkit-', presto: '-o-' }[engine];

  var vendorPrefix = { trident: 'ms', gecko: 'Moz', webkit: 'Webkit', presto: 'O' }[engine];

  var helperElem = document.createElement('div');
  var perspectiveProperty = vendorPrefix + 'Perspective';
  var transformProperty = vendorPrefix + 'Transform';
  var transformStyleName = cssPrefix + 'transform';
  var transitionProperty = vendorPrefix + 'Transition';
  var transitionStyleName = cssPrefix + 'transition';
  var transitionEndProperty = vendorPrefix.toLowerCase() + 'TransitionEnd';

  if (helperElem.style[perspectiveProperty] !== undefined) {
    translate3d = true;
  }

  var getTranslate = function getTranslate(element) {
    var result = { left: 0, top: 0 };
    if (element === null || element.style === null) return result;

    var transform = element.style[transformProperty];
    var matches = /translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/ig.exec(transform);
    if (matches) {
      result.left = +matches[1];
      result.top = +matches[3];
    }

    return result;
  };

  var translateElement = function translateElement(element, x, y) {
    if (x === null && y === null) return;

    if (element === null || element === undefined || element.style === null) return;

    if (!element.style[transformProperty] && x === 0 && y === 0) return;

    if (x === null || y === null) {
      var translate = getTranslate(element);
      if (x === null) {
        x = translate.left;
      }
      if (y === null) {
        y = translate.top;
      }
    }

    cancelTranslateElement(element);

    if (translate3d) {
      element.style[transformProperty] += ' translate(' + (x ? x + 'px' : '0px') + ',' + (y ? y + 'px' : '0px') + ') translateZ(0px)';
    } else {
      element.style[transformProperty] += ' translate(' + (x ? x + 'px' : '0px') + ',' + (y ? y + 'px' : '0px') + ')';
    }
  };

  var cancelTranslateElement = function cancelTranslateElement(element) {
    if (element === null || element.style === null) return;

    var transformValue = element.style[transformProperty];

    if (transformValue) {
      transformValue = transformValue.replace(/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g, '');
      element.style[transformProperty] = transformValue;
    }
  };

  exportObj = {
    transformProperty: transformProperty,
    transformStyleName: transformStyleName,
    transitionProperty: transitionProperty,
    transitionStyleName: transitionStyleName,
    transitionEndProperty: transitionEndProperty,
    getElementTranslate: getTranslate,
    translateElement: translateElement,
    cancelTranslateElement: cancelTranslateElement
  };
};

exports.default = exportObj;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(120);
__webpack_require__(122);
__webpack_require__(123);
__webpack_require__(121);
module.exports = __webpack_require__(8).Promise;

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(26)
  , toLength  = __webpack_require__(43)
  , toIndex   = __webpack_require__(116);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(16)
  , call        = __webpack_require__(102)
  , isArrayIter = __webpack_require__(101)
  , anObject    = __webpack_require__(5)
  , toLength    = __webpack_require__(43)
  , getIterFn   = __webpack_require__(118)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(31)(function(){
  return Object.defineProperty(__webpack_require__(22)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(10)
  , ITERATOR   = __webpack_require__(1)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(107)
  , descriptor     = __webpack_require__(40)
  , setToStringTag = __webpack_require__(23)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(1)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(1)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , macrotask = __webpack_require__(42).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(15)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(5)
  , dPs         = __webpack_require__(108)
  , enumBugKeys = __webpack_require__(36)
  , IE_PROTO    = __webpack_require__(24)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(22)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(37).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(19)
  , anObject = __webpack_require__(5)
  , getKeys  = __webpack_require__(51);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(17)
  , toObject    = __webpack_require__(52)
  , IE_PROTO    = __webpack_require__(24)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(17)
  , toIObject    = __webpack_require__(26)
  , arrayIndexOf = __webpack_require__(96)(false)
  , IE_PROTO     = __webpack_require__(24)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(6);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(2)
  , core        = __webpack_require__(8)
  , dP          = __webpack_require__(19)
  , DESCRIPTORS = __webpack_require__(9)
  , SPECIES     = __webpack_require__(1)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(5)
  , aFunction = __webpack_require__(20)
  , SPECIES   = __webpack_require__(1)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25)
  , defined   = __webpack_require__(21);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(18);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(35)
  , ITERATOR  = __webpack_require__(1)('iterator')
  , Iterators = __webpack_require__(10);
module.exports = __webpack_require__(8).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(94)
  , step             = __webpack_require__(105)
  , Iterators        = __webpack_require__(10)
  , toIObject        = __webpack_require__(26);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(38)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 120 */
/***/ (function(module, exports) {



/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(39)
  , global             = __webpack_require__(2)
  , ctx                = __webpack_require__(16)
  , classof            = __webpack_require__(35)
  , $export            = __webpack_require__(30)
  , isObject           = __webpack_require__(18)
  , aFunction          = __webpack_require__(20)
  , anInstance         = __webpack_require__(95)
  , forOf              = __webpack_require__(97)
  , speciesConstructor = __webpack_require__(114)
  , task               = __webpack_require__(42).set
  , microtask          = __webpack_require__(106)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(111)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(23)($Promise, PROMISE);
__webpack_require__(113)(PROMISE);
Wrapper = __webpack_require__(8)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(104)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(115)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(38)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(119);
var global        = __webpack_require__(2)
  , hide          = __webpack_require__(6)
  , Iterators     = __webpack_require__(10)
  , TO_STRING_TAG = __webpack_require__(1)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(140),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(142),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(147),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(143),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(149),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(146),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(148),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(145),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(152),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(141),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(153),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(139),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(150),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(144),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(151),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zan-radio-group"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zan-card"
  }, [_c('img', {
    staticClass: "zan-card__img",
    attrs: {
      "src": _vm.thumb,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "zan-card__content",
    class: {
      'is-center': !this.$slots.footer
    }
  }, [_c('div', {
    staticClass: "zan-card__info"
  }, [_vm._t("title", [_c('h4', {
    staticClass: "zan-card__title",
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  })]), _vm._v(" "), _vm._t("desc", [(_vm.desc) ? _c('p', {
    staticClass: "zan-card__title",
    domProps: {
      "textContent": _vm._s(_vm.desc)
    }
  }) : _vm._e()]), _vm._v(" "), _vm._t("tags")], 2), _vm._v(" "), _vm._t("footer")], 2)])
},staticRenderFns: []}

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zan-picker"
  }, [_c('div', {
    staticClass: "zan-picker__toolbar"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "zan-picker__columns",
    class: ['zan-picker__columns--' + _vm.columns.length]
  }, [_vm._l((_vm.columns), function(item, index) {
    return _c('picker-column', {
      attrs: {
        "values": item.values,
        "class-name": item.className,
        "itemHeight": _vm.itemHeight,
        "visible-item-count": _vm.visibleItemCount
      },
      on: {
        "change": _vm.columnValueChange
      },
      model: {
        value: (_vm.values[index]),
        callback: function($$v) {
          var $$exp = _vm.values,
            $$idx = index;
          if (!Array.isArray($$exp)) {
            _vm.values[index] = $$v
          } else {
            $$exp.splice($$idx, 1, $$v)
          }
        }
      }
    })
  }), _vm._v(" "), _c('div', {
    staticClass: "zan-picker-center-highlight",
    style: ({
      height: _vm.itemHeight + 'px',
      marginTop: -_vm.itemHeight / 2 + 'px'
    })
  })], 2)])
},staticRenderFns: []}

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zan-cell-group"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "dialog-bounce"
    }
  }, [_c('div', {
    staticClass: "zan-dialog-wrapper"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.value),
      expression: "value"
    }],
    staticClass: "zan-dialog"
  }, [(_vm.title) ? _c('div', {
    staticClass: "zan-dialog__header"
  }, [_c('div', {
    staticClass: "zan-dialog__title",
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.message) ? _c('div', {
    staticClass: "zan-dialog__content"
  }, [_c('div', {
    staticClass: "zan-dialog__message",
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "zan-dialog__footer",
    class: {
      'is-twobtn': _vm.showCancelButton && _vm.showConfirmButton
    }
  }, [_c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCancelButton),
      expression: "showCancelButton"
    }],
    staticClass: "zan-dialog__btn zan-dialog__cancel",
    on: {
      "click": function($event) {
        _vm.handleAction('cancel')
      }
    }
  }, [_vm._v(_vm._s(_vm.cancelButtonText))]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showConfirmButton),
      expression: "showConfirmButton"
    }],
    staticClass: "zan-dialog__btn zan-dialog__confirm",
    on: {
      "click": function($event) {
        _vm.handleAction('confirm')
      }
    }
  }, [_vm._v(_vm._s(_vm.confirmButtonText))])])])])])
},staticRenderFns: []}

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h2', [_vm._v("author: " + _vm._s(_vm.author))]), _vm._v(" "), _c('div', [_vm._v("Hello " + _vm._s(_vm.name))])])
},staticRenderFns: []}

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zan-panel"
  }, [_c('div', {
    staticClass: "zan-panel__header"
  }, [_vm._t("header", [_c('h4', {
    staticClass: "zan-panel__title",
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  }), _vm._v(" "), (_vm.desc) ? _c('span', {
    staticClass: "zan-panel__desc",
    domProps: {
      "textContent": _vm._s(_vm.desc)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.status) ? _c('span', {
    staticClass: "zan-panel__status",
    domProps: {
      "textContent": _vm._s(_vm.status)
    }
  }) : _vm._e()])], 2), _vm._v(" "), _c('div', {
    staticClass: "zan-panel__content"
  }, [_vm._t("default")], 2), _vm._v(" "), (this.$slots.footer) ? _c('div', {
    staticClass: "zan-panel__footer"
  }, [_vm._t("footer")], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', {
    staticClass: "zanui-icon",
    class: 'zan-icon-' + _vm.name
  })
},staticRenderFns: []}

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "zan-cell",
    attrs: {
      "href": _vm.url
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_c('div', {
    staticClass: "zan-cell__title"
  }, [_vm._t("icon", [(_vm.icon) ? _c('i', {
    staticClass: "zan-icon",
    class: 'zan-icon-' + _vm.icon
  }) : _vm._e()]), _vm._v(" "), _vm._t("title", [_c('span', {
    staticClass: "zan-cell__text",
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  }), _vm._v(" "), (_vm.label) ? _c('span', {
    staticClass: "zan-cell__label",
    domProps: {
      "textContent": _vm._s(_vm.label)
    }
  }) : _vm._e()])], 2), _vm._v(" "), _c('div', {
    staticClass: "zan-cell__value",
    class: {
      'is-link': _vm.isLink,
      'is-alone': !_vm.title && !_vm.label
    }
  }, [_vm._t("default", [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.value)
    }
  })])], 2), _vm._v(" "), (_vm.isLink) ? _c('i', {
    staticClass: "zan-icon zan-icon-arrow"
  }) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zan-loading"
  })
},staticRenderFns: []}

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('zan-cell', {
    staticClass: "zan-field",
    class: {
      'is-textarea': _vm.type === 'textarea',
        'is-nolabel': !_vm.label
    },
    attrs: {
      "title": _vm.label
    }
  }, [(_vm.type === 'textarea') ? _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    staticClass: "zan-field__control",
    attrs: {
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "change": function($event) {
        _vm.$emit('change', _vm.currentValue)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _c('input', {
    staticClass: "zan-field__control",
    attrs: {
      "type": _vm.type,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly
    },
    domProps: {
      "value": _vm.currentValue
    },
    on: {
      "change": function($event) {
        _vm.$emit('change', _vm.currentValue)
      },
      "input": _vm.handleInput
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zan-radio",
    class: {
      'is-disabled': _vm.isDisabled
    }
  }, [_c('span', {
    staticClass: "zan-radio__input"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    staticClass: "zan-radio__control",
    attrs: {
      "type": "radio",
      "disabled": _vm.isDisabled
    },
    domProps: {
      "value": _vm.name,
      "checked": _vm._q(_vm.currentValue, _vm.name)
    },
    on: {
      "__c": function($event) {
        _vm.currentValue = _vm.name
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "zan-icon",
    class: {
      'zan-icon-checked': _vm.currentValue === _vm.name,
        'zan-icon-check': _vm.currentValue !== _vm.name
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "zan-radio__label"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zan-switch",
    class: _vm.switchState,
    on: {
      "click": _vm.toggleState
    }
  }, [_c('div', {
    staticClass: "zan-switch__node",
    class: _vm.switchState
  })])
},staticRenderFns: []}

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zan-picker-column",
    class: _vm.classNames
  }, [_c('div', {
    ref: "wrapper",
    staticClass: "zan-picker-column-wrapper",
    class: {
      dragging: _vm.isDragging
    },
    style: ({
      height: _vm.visibleContentHeight + 'px'
    })
  }, _vm._l((_vm.currentValues), function(item) {
    return _c('div', {
      staticClass: "zan-picker-column__item",
      class: {
        'zan-picker-column__item--selected': item === _vm.currentValue
      },
      style: ({
        height: _vm.itemHeight + 'px',
        lineHeight: _vm.itemHeight + 'px'
      })
    }, [_vm._v("\n      " + _vm._s(item) + "\n    ")])
  }))])
},staticRenderFns: []}

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.currentTransition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    staticClass: "zan-popup",
    class: [_vm.position ? 'zan-popup--' + _vm.position : '']
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./examples/button.vue": 203,
	"./examples/card.vue": 204,
	"./examples/cell.vue": 205,
	"./examples/dialog.vue": 206,
	"./examples/field.vue": 207,
	"./examples/panel.vue": 208,
	"./examples/picker.vue": 209,
	"./examples/popup.vue": 210,
	"./examples/radio.vue": 211,
	"./examples/switch.vue": 212,
	"./examples/waterfall.vue": 213
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
webpackContext.id = 154;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./examples-docs/button.md": 264,
	"./examples-docs/card.md": 265,
	"./examples-docs/cell.md": 266,
	"./examples-docs/checkbox.md": 267,
	"./examples-docs/dialog.md": 268,
	"./examples-docs/field.md": 269,
	"./examples-docs/panel.md": 270,
	"./examples-docs/picker.md": 271,
	"./examples-docs/popup.md": 272,
	"./examples-docs/radio.md": 273,
	"./examples-docs/steps.md": 274,
	"./examples-docs/switch.md": 275,
	"./examples-docs/waterfall.md": 276
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
/* 156 */,
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

var _index = __webpack_require__(45);

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

var _keys = __webpack_require__(187);

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
      radio1: '1',
      radio2: '2',
      radio3: '1',
      radio4: '1'
    };
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
/* 184 */
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
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(45);

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
/* 186 */
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

exports.default = {
  data: function data() {
    return {
      radio: '1'
    };
  }
};

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(188), __esModule: true };

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(190);
module.exports = __webpack_require__(8).Object.keys;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(30)
  , core    = __webpack_require__(8)
  , fails   = __webpack_require__(31);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(52)
  , $keys    = __webpack_require__(51);

__webpack_require__(189)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".page-sub-title{padding:15px}", ""]);

// exports


/***/ }),
/* 192 */,
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".page-sub-title{padding:20px 15px}", ""]);

// exports


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".official-img{width:31px;vertical-align:middle;border:0}", ""]);

// exports


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".page-dialog{padding:0 15px}.page-dialog .zan-button-1{margin-bottom:10px}", ""]);

// exports


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".official-img{width:31px;vertical-align:middle;border:0}.page-sub-title{padding:25px 15px}", ""]);

// exports


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".zan-popup-1{width:100%;height:200px}.zan-popup-2{width:100%;line-height:44px;background-color:rgba(0,0,0,.701961);text-align:center;color:#fff}.zan-popup-3{width:100%;height:100%;background-color:#fff}.zan-popup-4{width:50%;height:200px;background:#fff;border-radius:10px}.page-popup .zan-button-1{margin-bottom:10px}.page-sub-title{padding:20px 15px}", ""]);

// exports


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".page-sub-title{padding:15px}", ""]);

// exports


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".page-button{padding:0 20px}.zan-button-group .zan-button-1{margin-bottom:10px}", ""]);

// exports


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".demo-wrapper{padding:0 15px}.demo-wrapper .zan-radio{margin:10px 0}", ""]);

// exports


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".zan-panel-sum{background:#fff;text-align:right;font-size:14px;color:#333;line-height:30px;padding-right:15px}.zan-panel-sum span{color:red}.zan-panel-buttons{text-align:right}.zan-panel-buttons .zan-button{margin-left:5px}", ""]);

// exports


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".page-switch{padding:0 15px 15px}.page-switch__wrapper{width:33.33%;float:left;text-align:center}.page-switch__text{margin:20px 0}", ""]);

// exports


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(260)

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
/* 204 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(252)

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
/* 205 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(257)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(176),
  /* template */
  __webpack_require__(241),
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
__webpack_require__(256)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(177),
  /* template */
  __webpack_require__(239),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(254)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(178),
  /* template */
  __webpack_require__(235),
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
__webpack_require__(262)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(250),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(179),
  /* template */
  __webpack_require__(238),
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
__webpack_require__(258)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(180),
  /* template */
  __webpack_require__(242),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(261)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(181),
  /* template */
  __webpack_require__(248),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(263)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(182),
  /* template */
  __webpack_require__(251),
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
__webpack_require__(259)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(183),
  /* template */
  __webpack_require__(243),
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
  __webpack_require__(234),
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
/* 216 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(255)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(184),
  /* template */
  __webpack_require__(237),
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
  __webpack_require__(245),
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
  __webpack_require__(185),
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
  __webpack_require__(233),
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
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(249),
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
  __webpack_require__(230),
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
  __webpack_require__(186),
  /* template */
  __webpack_require__(247),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(240),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 225 */
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
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(231),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-card"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Card")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('zan-card', {
    attrs: {
      "title": "商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余",
      "desc": "描述",
      "thumb": "https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg"
    }
  }), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("高级用法")]), _vm._v(" "), _c('zan-card', {
    attrs: {
      "title": "商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余",
      "desc": "商品SKU1，商品SKU2",
      "thumb": "https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg"
    }
  }, [_c('div', {
    staticClass: "zan-card__row",
    slot: "title"
  }, [_c('h4', {
    staticClass: "zan-card__title"
  }, [_vm._v("商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余")]), _vm._v(" "), _c('span', {
    staticClass: "zan-card__price"
  }, [_vm._v("¥ 2.00")])]), _vm._v(" "), _c('div', {
    staticClass: "zan-card__row",
    slot: "desc"
  }, [_c('h4', {
    staticClass: "zan-card__desc"
  }, [_vm._v("商品sku")]), _vm._v(" "), _c('span', {
    staticClass: "zan-card__num"
  }, [_vm._v("x 2")])]), _vm._v(" "), _c('div', {
    staticClass: "zan-card__footer",
    slot: "footer"
  }, [_c('zan-button', {
    attrs: {
      "size": "mini"
    }
  }, [_vm._v("按钮一")]), _vm._v(" "), _c('zan-button', {
    attrs: {
      "size": "mini"
    }
  }, [_vm._v("按钮二")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),
/* 228 */
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
/* 229 */,
/* 230 */
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
  }, [_vm._v("\"zan-button-1\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"popupShow1 = true\"")]), _vm._v(">")]), _vm._v("从下方弹出popup"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-popup")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("\"zan-popup-1\"")]), _vm._v(">")]), _vm._v("\n  xxxx\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-popup")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"zan-button-1\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"popupShow2 = true\"")]), _vm._v(">")]), _vm._v("从上方方弹出popup"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-popup")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("\"zan-popup-2\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v(":overlay")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"false\"")]), _vm._v(">")]), _vm._v("\n  更新成功\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-popup")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"zan-button-1\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"popupShow3 = true\"")]), _vm._v(">")]), _vm._v("从右方弹出popup"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-popup")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("\"zan-popup-3\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v(":overlay")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"false\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@click.native")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"popupShow3 = false\"")]), _vm._v(">")]), _vm._v("关闭 popup"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-popup")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"zan-button-1\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"popupShow4 = true\"")]), _vm._v(">")]), _vm._v("从中间弹出popup"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-popup")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("\"zan-popup-4\"")]), _vm._v(">")]), _vm._v("\n  一些内容\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-popup")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
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
/* 231 */
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
/* 232 */
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
  }, [_vm._v("zan-panel")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-card")]), _vm._v("\n    "), _c('span', {
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
  }, [_vm._v("\"zan-card__row\"")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("\"zan-card__title\"")]), _vm._v(">")]), _vm._v("商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余"), _c('span', {
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
  }, [_vm._v("\"zan-card__price\"")]), _vm._v(">")]), _vm._v("¥ 2.00"), _c('span', {
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
  }, [_vm._v("\"zan-card__row\"")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("\"zan-card__desc\"")]), _vm._v(">")]), _vm._v("商品sku"), _c('span', {
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
  }, [_vm._v("\"zan-card__num\"")]), _vm._v(">")]), _vm._v("x 2"), _c('span', {
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
  }, [_vm._v("\"zan-card__footer\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"footer\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"mini\"")]), _vm._v(">")]), _vm._v("按钮一"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"mini\"")]), _vm._v(">")]), _vm._v("按钮二"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-card")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"zan-panel-sum\"")]), _vm._v(">")]), _vm._v("\n    合计："), _c('span', {
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
  }, [_vm._v("zan-panel")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
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
  }, [_vm._v("zan-panel")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-card")]), _vm._v("\n    "), _c('span', {
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
  }, [_vm._v("\"zan-card__row\"")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("\"zan-card__title\"")]), _vm._v(">")]), _vm._v("商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余"), _c('span', {
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
  }, [_vm._v("\"zan-card__price\"")]), _vm._v(">")]), _vm._v("¥ 2.00"), _c('span', {
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
  }, [_vm._v("\"zan-card__row\"")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("\"zan-card__desc\"")]), _vm._v(">")]), _vm._v("商品sku"), _c('span', {
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
  }, [_vm._v("\"zan-card__num\"")]), _vm._v(">")]), _vm._v("x 2"), _c('span', {
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
  }, [_vm._v("\"zan-card__footer\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"footer\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"mini\"")]), _vm._v(">")]), _vm._v("按钮一"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"mini\"")]), _vm._v(">")]), _vm._v("按钮二"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-card")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"zan-panel-sum\"")]), _vm._v(">")]), _vm._v("\n    合计："), _c('span', {
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
  }, [_vm._v("\"zan-panel-buttons\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"footer\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"small\"")]), _vm._v(">")]), _vm._v("按钮一"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-panel")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
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
/* 233 */
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
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-field")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-field")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-field")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-field")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-field")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-field")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
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
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-field")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-field")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
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
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-field")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-field")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
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
/* 234 */
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
  }, [_vm._v("\"zan-button-group\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"zan-button-1\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("default"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
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
  }, [_vm._v("\"zan-button-1\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"primary\"")]), _vm._v(">")]), _vm._v("primary"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
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
  }, [_vm._v("\"zan-button-1\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"danger\"")]), _vm._v(">")]), _vm._v("danger"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
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
  }, [_vm._v("\"zan-button-group\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"zan-button-1\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("diabled"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
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
  }, [_vm._v("\"zan-button-group\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"zan-button-1\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"large\"")]), _vm._v(">")]), _vm._v("large"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
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
  }, [_vm._v("\"zan-button-group\"")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("\"zan-button-3\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"primary\"")]), _vm._v(">")]), _vm._v("normal"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
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
  }, [_vm._v("\"zan-button-3\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"small\"")]), _vm._v(">")]), _vm._v("small"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
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
  }, [_vm._v("\"zan-button-3\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"mini\"")]), _vm._v(">")]), _vm._v("mini"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
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
  }, [_vm._v("\"zan-button-group\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"zan-button-1\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
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
  }, [_vm._v("\"zan-button-group\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"small\"")]), _vm._v(">")]), _vm._v("确认收货"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"small\"")]), _vm._v(">")]), _vm._v("取消订单"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
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
/* 235 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-field"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Field")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('zan-cell-group', [_c('zan-field', {
    attrs: {
      "type": "text",
      "label": "用户名：",
      "placeholder": "请输入用户名"
    }
  }), _vm._v(" "), _c('zan-field', {
    attrs: {
      "type": "password",
      "label": "密码：",
      "placeholder": "请输入密码"
    }
  }), _vm._v(" "), _c('zan-field', {
    attrs: {
      "type": "textarea",
      "label": "个人介绍：",
      "placeholder": "请输入个人介绍"
    }
  })], 1), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("无label的输入框")]), _vm._v(" "), _c('zan-cell-group', [_c('zan-field', {
    attrs: {
      "type": "text",
      "placeholder": "请输入用户名"
    }
  })], 1), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("监听change事件")]), _vm._v(" "), _c('zan-cell-group', [_c('zan-field', {
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
/* 236 */
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
  }, [_vm._v("zan-card")]), _vm._v("\n  "), _c('span', {
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
  }, [_vm._v("zan-card")]), _vm._v(">")]), _vm._v("\n\n")])]), _vm._v(" "), _c('h3', {
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
  }, [_vm._v("zan-card")]), _vm._v("\n  "), _c('span', {
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
  }, [_vm._v("\"zan-card__row\"")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("\"zan-card__title\"")]), _vm._v(">")]), _vm._v("商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余"), _c('span', {
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
  }, [_vm._v("\"zan-card__price\"")]), _vm._v(">")]), _vm._v("¥ 2.00"), _c('span', {
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
  }, [_vm._v("\"zan-card__row\"")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("\"zan-card__desc\"")]), _vm._v(">")]), _vm._v("商品sku"), _c('span', {
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
  }, [_vm._v("\"zan-card__num\"")]), _vm._v(">")]), _vm._v("x 2"), _c('span', {
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
  }, [_vm._v("\"zan-card__footer\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"footer\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"mini\"")]), _vm._v(">")]), _vm._v("按钮一"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"mini\"")]), _vm._v(">")]), _vm._v("按钮二"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-card")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
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
/* 237 */
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
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-cell")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-cell")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
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
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-cell")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-cell")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
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
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-cell")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-cell")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
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
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-cell")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-cell")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
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
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("\"zan-cell-text\"")]), _vm._v(">")]), _vm._v("起码运动馆"), _c('span', {
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
  }, [_vm._v("zan-cell")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-cell")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
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
/* 238 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-picker"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Picker")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('zan-picker', {
    attrs: {
      "columns": _vm.pickerColumns
    },
    on: {
      "change": _vm.handlePickerChange
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-dialog"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Dialog")]), _vm._v(" "), _c('div', {
    staticClass: "zan-button-1"
  }, [_c('zan-button', {
    on: {
      "click": _vm.handleAlertClick
    }
  }, [_vm._v("点击我打开alert提示框")])], 1), _vm._v(" "), _c('div', {
    staticClass: "zan-button-1"
  }, [_c('zan-button', {
    on: {
      "click": _vm.handleConfirmClick
    }
  }, [_vm._v("点击我打开confirm提示框")])], 1)])
},staticRenderFns: []}

/***/ }),
/* 240 */
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
/* 241 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-cell"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Cell")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('zan-cell-group', [_c('zan-cell', {
    attrs: {
      "title": "单元格1",
      "value": "单元格1内容"
    }
  }), _vm._v(" "), _c('zan-cell', {
    attrs: {
      "title": "单元格2",
      "value": "单元格2内容"
    }
  })], 1), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("标题带描述信息")]), _vm._v(" "), _c('zan-cell-group', [_c('zan-cell', {
    attrs: {
      "title": "单元格1",
      "label": "描述信息",
      "is-link": "",
      "url": "javascript:void(0)"
    },
    on: {
      "click": _vm.handleClick
    }
  }), _vm._v(" "), _c('zan-cell', {
    attrs: {
      "title": "单元格2",
      "label": "描述信息"
    }
  })], 1), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("带图标")]), _vm._v(" "), _c('zan-cell-group', [_c('zan-cell', {
    attrs: {
      "title": "起码运动馆",
      "icon": "home"
    }
  }), _vm._v(" "), _c('zan-cell', {
    attrs: {
      "title": "线下门店",
      "icon": "location"
    }
  })], 1), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("可点击的链接")]), _vm._v(" "), _c('zan-cell-group', [_c('zan-cell', {
    attrs: {
      "title": "起码运动馆",
      "value": "进入店铺",
      "icon": "home",
      "url": "http://youzan.com",
      "is-link": ""
    }
  }), _vm._v(" "), _c('zan-cell', {
    attrs: {
      "title": "线下门店",
      "icon": "location",
      "url": "http://youzan.com",
      "is-link": ""
    }
  })], 1), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("高级用法")]), _vm._v(" "), _c('zan-cell-group', [_c('zan-cell', {
    attrs: {
      "value": "进入店铺",
      "icon": "home",
      "url": "http://youzan.com",
      "is-link": ""
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('span', {
    staticClass: "zan-cell-text"
  }, [_vm._v("起码运动馆")]), _vm._v(" "), _c('img', {
    staticClass: "official-img",
    attrs: {
      "src": "//su.yzcdn.cn/v2/image/account/icon_guan_160421.png"
    }
  })])], 2), _vm._v(" "), _c('zan-cell', {
    attrs: {
      "title": "线下门店",
      "icon": "location",
      "url": "http://youzan.com",
      "is-link": ""
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-popup"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Popup")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('div', {
    staticClass: "zan-button-1"
  }, [_c('zan-button', {
    on: {
      "click": function($event) {
        _vm.popupShow1 = true
      }
    }
  }, [_vm._v("从下方弹出popup")])], 1), _vm._v(" "), _c('zan-popup', {
    staticClass: "zan-popup-1",
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
    staticClass: "zan-button-1"
  }, [_c('zan-button', {
    on: {
      "click": function($event) {
        _vm.popupShow2 = true
      }
    }
  }, [_vm._v("从上方方弹出popup")])], 1), _vm._v(" "), _c('zan-popup', {
    staticClass: "zan-popup-2",
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
    staticClass: "zan-button-1"
  }, [_c('zan-button', {
    on: {
      "click": function($event) {
        _vm.popupShow3 = true
      }
    }
  }, [_vm._v("从右方弹出popup")])], 1), _vm._v(" "), _c('zan-popup', {
    staticClass: "zan-popup-3",
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
  }, [_c('zan-button', {
    nativeOn: {
      "click": function($event) {
        _vm.popupShow3 = false
      }
    }
  }, [_vm._v("关闭 popup")])], 1), _vm._v(" "), _c('div', {
    staticClass: "zan-button-1"
  }, [_c('zan-button', {
    on: {
      "click": function($event) {
        _vm.popupShow4 = true
      }
    }
  }, [_vm._v("从中间弹出popup")])], 1), _vm._v(" "), _c('zan-popup', {
    staticClass: "zan-popup-4",
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
/* 243 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-card"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Waterfall")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('div', [_c('div', {
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
      staticClass: "zan-cell",
      staticStyle: {
        "text-align": "center"
      }
    }, [_vm._v(_vm._s(item))])
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("loading")])], 2)])])
},staticRenderFns: []}

/***/ }),
/* 244 */
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
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"handleAlertClick\"")]), _vm._v(">")]), _vm._v("alert"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"handleConfirmClick\"")]), _vm._v(">")]), _vm._v("confirm"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-button")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
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
/* 245 */
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
/* 246 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-button"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Button")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("按钮功能")]), _vm._v(" "), _c('div', {
    staticClass: "zan-button-group"
  }, [_c('div', {
    staticClass: "zan-button-1"
  }, [_c('zan-button', [_vm._v("default")])], 1), _vm._v(" "), _c('div', {
    staticClass: "zan-button-1"
  }, [_c('zan-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("primary")])], 1), _vm._v(" "), _c('div', {
    staticClass: "zan-button-1"
  }, [_c('zan-button', {
    attrs: {
      "type": "danger"
    }
  }, [_vm._v("danger")])], 1)]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("禁用状态")]), _vm._v(" "), _c('div', {
    staticClass: "zan-button-group"
  }, [_c('div', {
    staticClass: "zan-button-1"
  }, [_c('zan-button', {
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("diabled")])], 1)]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("按钮尺寸")]), _vm._v(" "), _c('div', {
    staticClass: "zan-button-group"
  }, [_c('div', {
    staticClass: "zan-button-1"
  }, [_c('zan-button', {
    attrs: {
      "size": "large"
    }
  }, [_vm._v("large")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "zan-button-group"
  }, [_c('div', {
    staticClass: "zan-button-3"
  }, [_c('zan-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("normal")])], 1), _vm._v(" "), _c('div', {
    staticClass: "zan-button-3"
  }, [_c('zan-button', {
    attrs: {
      "size": "small"
    }
  }, [_vm._v("small")])], 1), _vm._v(" "), _c('div', {
    staticClass: "zan-button-3"
  }, [_c('zan-button', {
    attrs: {
      "size": "mini"
    }
  }, [_vm._v("mini")])], 1)]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("自定义按钮标签")]), _vm._v(" "), _c('div', {
    staticClass: "zan-button-group"
  }, [_c('div', {
    staticClass: "zan-button-1"
  }, [_c('zan-button', {
    attrs: {
      "tag": "a",
      "type": "primary",
      "href": "https://www.youzan.com",
      "target": "_blank"
    }
  }, [_vm._v("a标签按钮")])], 1)]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("button group")]), _vm._v(" "), _c('div', {
    staticClass: "zan-button-group"
  }, [_c('zan-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    }
  }, [_vm._v("确认付款")]), _vm._v(" "), _c('zan-button', {
    attrs: {
      "size": "small"
    }
  }, [_vm._v("确认收货")]), _vm._v(" "), _c('zan-button', {
    attrs: {
      "size": "small"
    }
  }, [_vm._v("取消订单")])], 1)])
},staticRenderFns: []}

/***/ }),
/* 247 */
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
  }, [_vm._v("¶")]), _vm._v(" 基础用法")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"1\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"radio1\"")]), _vm._v(">")]), _vm._v("单选框1"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"2\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"radio1\"")]), _vm._v(">")]), _vm._v("单选框2"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
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
  }, [_vm._v("radio1")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("'1'")]), _vm._v("\n    }\n  }\n};\n")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
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
  }, [_vm._v("zan-radio")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"1\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"radio2\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("未选中禁用"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"2\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"radio2\"")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("选中且禁用"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
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
  }, [_vm._v("radio2")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("'2'")]), _vm._v("\n    }\n  }\n};\n")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "radio-zu"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#radio-zu",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" radio组")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio-group")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"radio3\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"1\"")]), _vm._v(">")]), _vm._v("单选框1"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"2\"")]), _vm._v(">")]), _vm._v("单选框2"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio-group")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
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
  }, [_vm._v("radio3")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("'1'")]), _vm._v("\n    }\n  }\n};\n")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "yu-cell-zu-jian-yi-qi-shi-yong"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#yu-cell-zu-jian-yi-qi-shi-yong",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" 与Cell组件一起使用")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "hljs language-html"
  }, [_c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio-group")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"radio4\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"1\"")]), _vm._v(">")]), _vm._v("单选框1"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("<"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio")]), _vm._v(" "), _c('span', {
    staticClass: "hljs-attr"
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("\"2\"")]), _vm._v(">")]), _vm._v("单选框2"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio")]), _vm._v(">")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-cell-group")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("zan-radio-group")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
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
  }, [_vm._v("radio4")]), _vm._v(": "), _c('span', {
    staticClass: "hljs-string"
  }, [_vm._v("'1'")]), _vm._v("\n    }\n  }\n};\n")]), _c('span', {
    staticClass: "hljs-tag"
  }, [_vm._v("</"), _c('span', {
    staticClass: "hljs-name"
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "radio-api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#radio-api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" Radio API")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("是否禁用单选框")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("name")]), _vm._v(" "), _c('td', [_vm._v("根据这个来判断radio是否选中")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td')])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "radiogroup-api"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#radiogroup-api",
      "aria-hidden": "true"
    }
  }, [_vm._v("¶")]), _vm._v(" RadioGroup API")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")]), _vm._v(" "), _c('th', [_vm._v("可选值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("是否禁用单选框")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")]), _vm._v(" "), _c('td')])])])])
}]}

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-radio"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Radio")]), _vm._v(" "), _c('div', {
    staticClass: "demo-wrapper"
  }, [_c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('zan-radio', {
    attrs: {
      "name": "1"
    },
    model: {
      value: (_vm.radio1),
      callback: function($$v) {
        _vm.radio1 = $$v
      }
    }
  }, [_vm._v("单选框1")]), _vm._v(" "), _c('zan-radio', {
    attrs: {
      "name": "2"
    },
    model: {
      value: (_vm.radio1),
      callback: function($$v) {
        _vm.radio1 = $$v
      }
    }
  }, [_vm._v("单选框2")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("禁用状态")]), _vm._v(" "), _c('zan-radio', {
    attrs: {
      "name": "1",
      "disabled": ""
    },
    model: {
      value: (_vm.radio2),
      callback: function($$v) {
        _vm.radio2 = $$v
      }
    }
  }, [_vm._v("未选中禁用")]), _vm._v(" "), _c('zan-radio', {
    attrs: {
      "name": "2",
      "disabled": ""
    },
    model: {
      value: (_vm.radio2),
      callback: function($$v) {
        _vm.radio2 = $$v
      }
    }
  }, [_vm._v("选中且禁用")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("radio组")]), _vm._v(" "), _c('zan-radio-group', {
    model: {
      value: (_vm.radio3),
      callback: function($$v) {
        _vm.radio3 = $$v
      }
    }
  }, [_c('zan-radio', {
    attrs: {
      "name": "1"
    }
  }, [_vm._v("单选框1")]), _vm._v(" "), _c('zan-radio', {
    attrs: {
      "name": "2"
    }
  }, [_vm._v("单选框2")])], 1), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("与Cell组件一起使用")])], 1), _vm._v(" "), _c('zan-radio-group', {
    model: {
      value: (_vm.radio4),
      callback: function($$v) {
        _vm.radio4 = $$v
      }
    }
  }, [_c('zan-cell-group', [_c('zan-cell', [_c('zan-radio', {
    attrs: {
      "name": "1"
    }
  }, [_vm._v("单选框1")])], 1), _vm._v(" "), _c('zan-cell', [_c('zan-radio', {
    attrs: {
      "name": "2"
    }
  }, [_vm._v("单选框2")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 249 */
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
  }, [_vm._v("zan-picker")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("zan-picker")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', {
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
/* 250 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-panel"
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v("Panel")]), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("基础用法")]), _vm._v(" "), _c('zan-panel', {
    attrs: {
      "title": "标题",
      "desc": "标题描述",
      "status": "状态"
    }
  }, [_c('zan-card', {
    attrs: {
      "title": "商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余",
      "desc": "商品SKU1，商品SKU2",
      "thumb": "https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg"
    }
  }, [_c('div', {
    staticClass: "zan-card__row",
    slot: "title"
  }, [_c('h4', {
    staticClass: "zan-card__title"
  }, [_vm._v("商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余")]), _vm._v(" "), _c('span', {
    staticClass: "zan-card__price"
  }, [_vm._v("¥ 2.00")])]), _vm._v(" "), _c('div', {
    staticClass: "zan-card__row",
    slot: "desc"
  }, [_c('h4', {
    staticClass: "zan-card__desc"
  }, [_vm._v("商品sku")]), _vm._v(" "), _c('span', {
    staticClass: "zan-card__num"
  }, [_vm._v("x 2")])]), _vm._v(" "), _c('div', {
    staticClass: "zan-card__footer",
    slot: "footer"
  }, [_c('zan-button', {
    attrs: {
      "size": "mini"
    }
  }, [_vm._v("按钮一")]), _vm._v(" "), _c('zan-button', {
    attrs: {
      "size": "mini"
    }
  }, [_vm._v("按钮二")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "zan-panel-sum"
  }, [_vm._v("\n      合计："), _c('span', [_vm._v("¥ 1999.90")])])], 1), _vm._v(" "), _c('h2', {
    staticClass: "page-sub-title"
  }, [_vm._v("高级用法")]), _vm._v(" "), _c('zan-panel', {
    attrs: {
      "title": "标题",
      "desc": "标题描述",
      "status": "状态"
    }
  }, [_c('zan-card', {
    attrs: {
      "title": "商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余",
      "desc": "商品SKU1，商品SKU2",
      "thumb": "https://img.yzcdn.cn/upload_files/2017/02/17/FnDwvwHmU-OiqsbjAO5X7wh1KWrR.jpg!100x100.jpg"
    }
  }, [_c('div', {
    staticClass: "zan-card__row",
    slot: "title"
  }, [_c('h4', {
    staticClass: "zan-card__title"
  }, [_vm._v("商品名称是什么，两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余两行显示状态如效果图，多余多余多余")]), _vm._v(" "), _c('span', {
    staticClass: "zan-card__price"
  }, [_vm._v("¥ 2.00")])]), _vm._v(" "), _c('div', {
    staticClass: "zan-card__row",
    slot: "desc"
  }, [_c('h4', {
    staticClass: "zan-card__desc"
  }, [_vm._v("商品sku")]), _vm._v(" "), _c('span', {
    staticClass: "zan-card__num"
  }, [_vm._v("x 2")])]), _vm._v(" "), _c('div', {
    staticClass: "zan-card__footer",
    slot: "footer"
  }, [_c('zan-button', {
    attrs: {
      "size": "mini"
    }
  }, [_vm._v("按钮一")]), _vm._v(" "), _c('zan-button', {
    attrs: {
      "size": "mini"
    }
  }, [_vm._v("按钮二")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "zan-panel-sum"
  }, [_vm._v("\n      合计："), _c('span', [_vm._v("¥ 1999.90")])]), _vm._v(" "), _c('div', {
    staticClass: "zan-panel-buttons",
    slot: "footer"
  }, [_c('zan-button', {
    attrs: {
      "size": "small"
    }
  }, [_vm._v("按钮一")]), _vm._v(" "), _c('zan-button', {
    attrs: {
      "size": "small",
      "type": "danger"
    }
  }, [_vm._v("按钮二")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 251 */
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
  }, [_c('zan-switch', {
    staticClass: "some-customized-class",
    attrs: {
      "checked": _vm.switchState,
      "on-change": _vm.updateState
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "page-switch__text"
  }, [_vm._v(_vm._s(_vm.switchStateText))])], 1), _vm._v(" "), _c('div', {
    staticClass: "page-switch__wrapper"
  }, [_c('zan-switch', {
    staticClass: "some-customized-class",
    attrs: {
      "checked": true,
      "disabled": true
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "page-switch__text"
  }, [_vm._v("ON, DISABLED")])], 1), _vm._v(" "), _c('div', {
    staticClass: "page-switch__wrapper"
  }, [_c('zan-switch', {
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
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("2eeab910", content, true);
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
/* 253 */,
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("e685bc1e", content, true);
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
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(194);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("066c09a4", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js?minimize!../../vue-loader/lib/style-rewriter.js?id=data-v-5168a11c!../../vue-loader/lib/selector.js?type=styles&index=0!./cell-2.vue", function() {
     var newContent = require("!!../../css-loader/index.js?minimize!../../vue-loader/lib/style-rewriter.js?id=data-v-5168a11c!../../vue-loader/lib/selector.js?type=styles&index=0!./cell-2.vue");
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
var content = __webpack_require__(195);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("b92eb2a6", content, true);
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
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("748b945c", content, true);
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
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("1698a083", content, true);
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
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("9223f4d8", content, true);
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
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("24155ca9", content, true);
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
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(200);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("1239ad5e", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9a73e6e0!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./radio.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9a73e6e0!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./radio.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("b0a0a58e", content, true);
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
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(202);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("278a1df7", content, true);
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
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(214);

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(215);

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(216);

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(217);

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(218);

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(219);

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(220);

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(221);

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(222);

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(223);

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(224);

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(225);

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(226);

/***/ })
]);
//# sourceMappingURL=0.js.map