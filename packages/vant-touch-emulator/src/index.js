/* eslint-disable */
/**
 * Emulate touch event
 * Source：https://github.com/hammerjs/touchemulator
 */

(function () {
  if (typeof window === 'undefined') {
    return;
  }
  var eventTarget;
  var supportTouch = 'ontouchstart' in window;

  // polyfills
  if (!document.createTouch) {
    document.createTouch = function (
      view,
      target,
      identifier,
      pageX,
      pageY,
      screenX,
      screenY
    ) {
      // auto set
      return new Touch(
        target,
        identifier,
        {
          pageX: pageX,
          pageY: pageY,
          screenX: screenX,
          screenY: screenY,
          clientX: pageX - window.pageXOffset,
          clientY: pageY - window.pageYOffset,
        },
        0,
        0
      );
    };
  }

  if (!document.createTouchList) {
    document.createTouchList = function () {
      var touchList = TouchList();
      for (var i = 0; i < arguments.length; i++) {
        touchList[i] = arguments[i];
      }
      touchList.length = arguments.length;
      return touchList;
    };
  }

  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  }

  /**
   * create an touch point
   * @constructor
   * @param target
   * @param identifier
   * @param pos
   * @param deltaX
   * @param deltaY
   * @returns {Object} touchPoint
   */

  var Touch = function Touch(target, identifier, pos, deltaX, deltaY) {
    deltaX = deltaX || 0;
    deltaY = deltaY || 0;

    this.identifier = identifier;
    this.target = target;
    this.clientX = pos.clientX + deltaX;
    this.clientY = pos.clientY + deltaY;
    this.screenX = pos.screenX + deltaX;
    this.screenY = pos.screenY + deltaY;
    this.pageX = pos.pageX + deltaX;
    this.pageY = pos.pageY + deltaY;
  };

  /**
   * create empty touchlist with the methods
   * @constructor
   * @returns touchList
   */
  function TouchList() {
    var touchList = [];

    touchList['item'] = function (index) {
      return this[index] || null;
    };

    // specified by Mozilla
    touchList['identifiedTouch'] = function (id) {
      return this[id + 1] || null;
    };

    return touchList;
  }

  /**
   * only trigger touches when the left mousebutton has been pressed
   * @param touchType
   * @returns {Function}
   */

  var initiated = false;
  function onMouse(touchType) {
    return function (ev) {
      // prevent mouse events

      if (ev.type === 'mousedown') {
        initiated = true;
      }

      if (ev.type === 'mouseup') {
        initiated = false;
      }

      if (ev.type === 'mousemove' && !initiated) {
        return;
      }

      // The EventTarget on which the touch point started when it was first placed on the surface,
      // even if the touch point has since moved outside the interactive area of that element.
      // also, when the target doesnt exist anymore, we update it
      if (
        ev.type === 'mousedown' ||
        !eventTarget ||
        (eventTarget && !eventTarget.dispatchEvent)
      ) {
        eventTarget = ev.target;
      }

      if (eventTarget.closest('[data-no-touch-simulate]') == null) {
        triggerTouch(touchType, ev);
      }

      // reset
      if (ev.type === 'mouseup') {
        eventTarget = null;
      }
    };
  }

  /**
   * trigger a touch event
   * @param eventName
   * @param mouseEv
   */
  function triggerTouch(eventName, mouseEv) {
    var touchEvent = document.createEvent('Event');
    touchEvent.initEvent(eventName, true, true);

    touchEvent.altKey = mouseEv.altKey;
    touchEvent.ctrlKey = mouseEv.ctrlKey;
    touchEvent.metaKey = mouseEv.metaKey;
    touchEvent.shiftKey = mouseEv.shiftKey;

    touchEvent.touches = getActiveTouches(mouseEv);
    touchEvent.targetTouches = getActiveTouches(mouseEv);
    touchEvent.changedTouches = createTouchList(mouseEv);

    eventTarget.dispatchEvent(touchEvent);
  }

  /**
   * create a touchList based on the mouse event
   * @param mouseEv
   * @returns {TouchList}
   */
  function createTouchList(mouseEv) {
    var touchList = TouchList();
    touchList.push(new Touch(eventTarget, 1, mouseEv, 0, 0));
    return touchList;
  }

  /**
   * receive all active touches
   * @param mouseEv
   * @returns {TouchList}
   */
  function getActiveTouches(mouseEv) {
    // empty list
    if (mouseEv.type === 'mouseup') {
      return TouchList();
    }
    return createTouchList(mouseEv);
  }

  /**
   * TouchEmulator initializer
   */
  function TouchEmulator() {
    window.addEventListener('mousedown', onMouse('touchstart'), true);
    window.addEventListener('mousemove', onMouse('touchmove'), true);
    window.addEventListener('mouseup', onMouse('touchend'), true);
  }

  // start distance when entering the multitouch mode
  TouchEmulator['multiTouchOffset'] = 75;

  if (!supportTouch) {
    new TouchEmulator();
  }
})();
