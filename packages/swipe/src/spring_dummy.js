import { requestAnimationFrame, cancelAnimationFrame, EventEmitter, extend } from './utils';

function SpringDummy(scroll, input, options) {
  var wrapElem = scroll.wrapElem;
  var self = this;
  EventEmitter.apply(this, arguments);

  this.scroll = scroll;
  this.input = input;
  this.input.on('move', this.movementReact.bind(this));
  this.wrapSize = {
    width: () => wrapElem.clientWidth,
    height: () => wrapElem.clientHieght
  };

  this.options = extend({
    intervalTween: 3000,
    threshold: 20
  }, options);

  if (this.scroll.options.autoPlay) {
    this.initMove();
  }

  this.on('bounceEnd', function() {
    if (self.scroll.options.autoPlay) {
      self.initMove();
    }

    self.input.undeaf();
  }).on('bounceStart', function() {
    self.input.deaf();
  });
}

SpringDummy.prototype = Object.create(new EventEmitter());
extend(SpringDummy.prototype, {

  clearTransition: function() {
    cancelAnimationFrame(this.transitionReq);
  },

  movementReact: function(pt, isEnd, e, extra) {
    if (isEnd) {
      this.launch(extra.orgDirection ? pt.x : 0);
    }
    this.clearMove();
  },

  launch: function(dist) {
    var self = this;
    var direction = dist / Math.abs(dist);
    var addition = 0;
    var w = self.wrapSize.width();
    var tempOffsetPage = Math.round(dist / w);
    var offsetPage = this.scroll.mCache.offsetPage;

    // 翻到对应页
    addition = w * tempOffsetPage;

    // addition为0是原位置
    if (addition === 0) {
      if (Math.abs(dist) > self.options.threshold) {
        // 翻到下一页
        addition = w * direction;
      }
    }

    if (!self.scroll.options.loop) {
      if (offsetPage <= 0) {
        if (Math.abs(dist) > self.options.threshold && direction > 0) {
          addition = w * direction;
        } else {
          addition = w * (tempOffsetPage - offsetPage);
        }
      }

      if (this.scroll.pages.length === 1) {
        addition = 0;
      } else if (offsetPage >= this.scroll.pages.length - 1) {
        if (Math.abs(dist) > self.options.threshold && direction < 0) {
          addition = w * direction;
        } else {
          addition = w * (tempOffsetPage - offsetPage + this.scroll.pages.length - 1);
        }
      }
    }

    this.initTween(addition - dist, 150, 'bounce');
  },

  initTween: function(dist, duration, eventName) {
    if (dist === 0) {
      return;
    }
    var elapse;
    var self = this;
    var startTime = new Date();

    this.cancelTween();
    this.emit(eventName + 'Start');

    function round() {
      elapse = new Date() - startTime;
      if (elapse > duration) {
        self.emit(eventName, { x: dist }, true);
        self.emit(eventName + 'End');
        return;
      }

      self.emit(eventName, { x: dist / duration * elapse }, false);
      self.tweenRid = requestAnimationFrame(round);
    }
    round();
  },

  cancelTween: function() {
    cancelAnimationFrame(this.tweenRid);
  },

  initMove: function() {
    var self = this;
    var scroll = this.scroll;
    var intervalTween = self.options.intervalTween;

    this.clearMove();

    function round() {
      if ((scroll.currentIndex === scroll.pages.length - 1) && !scroll.options.loop) {
        self.initTween(-self.wrapSize.width() * (scroll.pages.length - 1), 200, 'autoPlay');
      } else {
        self.initTween(self.wrapSize.width(), 200, 'autoPlay');
      }
      self.moveTid = setTimeout(round, intervalTween);
    }
    self.moveTid = setTimeout(round, intervalTween);
  },

  clearMove: function() {
    clearTimeout(this.moveTid);
  }
});

export default SpringDummy;

