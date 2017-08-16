import { EventEmitter, extend } from './utils';

const setElementsStyles = (elems, styles) => {
  Array.prototype.forEach.call(elems, item => {
    extend(item.style, styles);
  });
};

function Scroll(wrapElem, options) {
  EventEmitter.apply(this, arguments);
  this.wrapElem = wrapElem;
  this.wrapSize = {
    width: () => wrapElem.clientWidth,
    height: () => wrapElem.clientHeight
  };

  this.options = extend({
    loop: true,
    autoPlay: false,
    startIndex: 0
  }, options);
  this.init.apply(this, arguments);
}

Scroll.prototype = Object.create(new EventEmitter());
extend(Scroll.prototype, {
  init: function() {
    this.update();
  },

  getCurrentDist: function() {
    return this.mCache.currentDist;
  },

  update: function() {
    const oldPages = this.pages;
    this.pages = this.wrapElem.querySelectorAll('.van-swipe-item');
    if (oldPages && oldPages.length === this.pages.length) {
      const isSame = Array.prototype.every.call(this.pages, (elem, index) => {
        return this.pages[index] === oldPages[index];
      });
      if (isSame) {
        return;
      }
    }
    var defaultStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    };
    setElementsStyles(this.pages, defaultStyle);
    this.mCache = {
      dist: 0,
      offsetPage: 0
    };

    this.setCurrentPage(0);
    this.movePage(this.options.startIndex * this.wrapSize.width(), true);
  },

  renderPage: function(dist = 0, currentOffsetPage = 0) {
    var wrapWidth = this.wrapSize.width();
    var offset = currentOffsetPage * wrapWidth - dist;
    var page;
    var leftPage;
    var rightPage;
    var leftOffset = offset - wrapWidth;
    var rightOffset = offset + wrapWidth;

    leftPage = this.pages[this.mapLoopPage(currentOffsetPage - 1)];
    if (leftPage) {
      if (Math.abs(leftOffset) <= wrapWidth) {
        leftPage.style['-webkit-transform'] = 'translate3d(' + leftOffset + 'px, 0, 0)';
      } else {
        if (this.pages.length > 2) {
          leftPage.style['-webkit-transform'] = 'translate3d(-9999px, 0, 0)';
        }
      }
    }

    rightPage = this.pages[this.mapLoopPage(currentOffsetPage + 1)];
    if (rightPage) {
      if (Math.abs(rightOffset) <= wrapWidth) {
        rightPage.style['-webkit-transform'] = 'translate3d(' + rightOffset + 'px, 0, 0)';
      } else {
        if (this.pages.length > 2) {
          rightPage.style['-webkit-transform'] = 'translate3d(-9999px, 0, 0)';
        }
      }
    }

    page = this.getCurrentPage();
    if (page) {
      page.style['-webkit-transform'] = 'translate3d(' + offset + 'px, 0, 0)';
      page.style['display'] = 'block';
    }
  },

  movePage: function(dist, isEnd) {
    var currentOffsetPage;

    this.mCache.currentDist = dist + this.mCache.dist;
    if (isEnd) {
      this.mCache.dist += dist;
    }

    currentOffsetPage = Math.round(this.mCache.currentDist / this.wrapSize.width()) || 0;

    if (currentOffsetPage !== this.mCache.offsetPage) {
      this.setCurrentPage(currentOffsetPage);

      // 翻页
      this.emit('pageChangeEnd', this.getCurrentPage()
        , this.currentIndex, this.mCache.offsetPage);
      this.mCache.offsetPage = currentOffsetPage;
    }

    this.renderPage(this.mCache.currentDist, currentOffsetPage);
  },

  getCurrentPage: function() {
    return this.pages[this.currentIndex];
  },

  mapLoopPage: function(num) {
    if (this.options.loop) {
      var direction = num < 0 ? -1 : 1;
      var l = this.pages.length;
      return Math.abs(l + direction * Math.abs(num) % l) % l;
    } else {
      if (num >= this.pages.length || num < 0) {
        return this.pages.length;
      } else {
        return num;
      }
    }
  },

  setCurrentPage: function(num) {
    this.currentIndex = this.mapLoopPage(num);
  }
});

export default Scroll;
