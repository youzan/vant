import Vue from 'vue';
import { EventEmitter, extend, bindEvents, removeEvents } from './utils';

function Input(host, options) {
  EventEmitter.apply(this, arguments);

  this.isStarting = false;
  this.startPt = null;
  this.endPt = null;
  this.isDeaf = false;

  this.options = extend({
    listenMoving: false
  }, options);

  this.host = host;
  this.onTouchStart = this.onTouchStart.bind(this);
  this.onTouchMove = this.onTouchMove.bind(this);
  this.onTouchEnd = this.onTouchEnd.bind(this);

  this.bind(this.host);
}

Input.prototype = Object.create(new EventEmitter());

extend(Input.prototype, {
  bind: function(host) {
    if (Vue.prototype.$isServer) return;
    bindEvents(host, 'dragstart', e => e.preventDefault());
    bindEvents(host, 'touchstart mousedown', this.onTouchStart);
    if (this.options.listenMoving) {
      bindEvents(window, 'touchmove mousemove', this.onTouchMove);
    }
    bindEvents(window, 'touchend mouseup touchcancel', this.onTouchEnd);
  },

  onTouchStart: function(e) {
    if (this.isDeaf || this.isStarting) {
      return;
    }
    this.isStarting = true;
    this.orgDirection = null;
    this.startPt = this.pointerEventToXY(e);
  },

  onTouchMove: function(e) {
    if (!this.isStarting) {
      return;
    }
    this.caculate(e);
  },

  onTouchEnd: function(e) {
    if (!this.isStarting) {
      return;
    }
    this.isStarting = false;
    this.caculate(e, true);
  },

  caculate: function(e, isEnd) {
    var distY, distX;
    this.endPt = this.pointerEventToXY(e);

    distY = this.startPt.y - this.endPt.y;
    distX = this.startPt.x - this.endPt.x;

    if (distY) {
      this.emit(distY > 0 ? 'up' : 'down', distY, isEnd, e);
    }
    if (distX) {
      this.emit(distX > 0 ? 'left' : 'right', distX, isEnd, e);
    }

    if (this.orgDirection == null) {
      this.orgDirection = Math.abs(distX) > Math.abs(distY);
    }

    this.emit('move', { x: distX, y: distY }, isEnd, e, { orgDirection: this.orgDirection });
  },

  pointerEventToXY: function(e) {
    var out = { x: 0, y: 0 };
    var type = e.type;
    if (e.originalEvent) {
      e = e.originalEvent;
    }
    if (['touchstart', 'touchmove', 'touchend', 'touchcancel'].indexOf(type) > -1) {
      var touch = e.touches[0] || e.changedTouches[0];
      out.x = touch.pageX;
      out.y = touch.pageY;
    } else if (
      ['mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave'].indexOf(type) > -1
    ) {
      out.x = e.pageX;
      out.y = e.pageY;
    }
    return out;
  },

  deaf: function() {
    this.isDeaf = true;
  },

  undeaf: function() {
    this.isDeaf = false;
  },

  destroy: function() {
    if (Vue.prototype.$isServer) return;
    removeEvents(this.host, 'touchstart mousedown', this.onTouchStart);
    if (this.options.listenMoving) {
      removeEvents(window, 'touchmove mousemove', this.onTouchMove);
    }
    removeEvents(window, 'touchend mouseup touchcancel', this.onTouchEnd);
  }
});

export default Input;
