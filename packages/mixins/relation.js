export function ChildrenMixin(parent, options = {}) {
  const indexKey = options.indexKey || 'index';

  return {
    inject: {
      [parent]: {
        default: null
      }
    },

    data() {
      return {
        id: 0,
        offsetHeight: 0
      };
    },

    computed: {
      parent() {
        return this[parent];
      },

      [indexKey]() {
        this.bindRelation();
        return this.parent.children.indexOf(this);
      },

      isCurrentAnchor() {
        return this.id === this.parent.currentAnchorIndex;
      },

      isNextAnchor() {
        return this.id === this.parent.nextAnchorIndex;
      },

      defaultSlot() {
        return this.slots('default') ? this.slots('default') : this.index;
      }
    },

    created() {
      this.bindRelation();
    },

    beforeDestroy() {
      if (this.parent) {
        this.parent.children = this.parent.children.filter(item => item !== this);
      }
    },

    methods: {
      bindRelation() {
        if (!this.parent) {
          return;
        }

        const { children } = this.parent;

        if (children.indexOf(this) === -1) {
          const vnodeIndex = this.parent.slots().indexOf(this.$vnode);

          if (vnodeIndex === -1) {
            children.push(this);
          } else {
            children.splice(vnodeIndex, 0, this);
          }
        }

        if (this.parent.indexList && children.length === this.parent.indexList.length) {
          this.$nextTick(() => {
            const parentTop = this.parent.getTop();
            const childrenTopList = [];

            children.forEach((child, index) => {
              const { offsetHeight, offsetTop } = child.$el;
              child.id = index;
              child.offsetHeight = offsetHeight;
              childrenTopList.push(parentTop + offsetTop);
            });

            this.parent.childrenTopList = childrenTopList;
            this.parent.bindScrollEvent();
          });
        }
      }
    }
  };
}

export function ParentMixin(parent) {
  return {
    provide() {
      return {
        [parent]: this
      };
    },

    data() {
      return {
        children: [],
        childrenTopList: [],
        isInTransition: false,
        currentAnchorIndex: -1,
        nextAnchorIndex: -1,
        alpha: 1
      };
    },

    computed: {
      childrenLen() {
        return this.childrenTopList.length;
      },

      activeAnchorSlot() {
        return this.currentAnchorIndex > -1 ? this.children[this.currentAnchorIndex].defaultSlot : '';
      },

      activeAnchorVisible() {
        return !this.isInTransition && this.currentAnchorIndex > -1;
      }
    },

    methods: {
      getTop() {
        let currentElem = this.$refs.indexBar;
        let top = 0;
        while (currentElem) {
          top += currentElem.offsetTop;
          currentElem = currentElem.offsetParent;
        }
        return top;
      },

      onScroll() {
        const { scrollTop } = document.scrollingElement;
        if (scrollTop < 0) {
          this.currentAnchorIndex = -1;
          return;
        }

        const nextAnchorIndex = this.childrenTopList.findIndex(top => top > scrollTop);
        const currentAnchorIndex = nextAnchorIndex === -1 ? this.childrenLen - 1 : nextAnchorIndex - 1;
        const currentAnchorHeight = this.children[currentAnchorIndex === -1 ? 0 : currentAnchorIndex].offsetHeight;
        let isInTransition = false;
        let alpha = 1;
        let diffTop;

        if (nextAnchorIndex > -1) {
          diffTop = this.childrenTopList[nextAnchorIndex] - scrollTop;
          if (diffTop >= 0 && diffTop <= currentAnchorHeight) {
            alpha = diffTop / currentAnchorHeight;
            isInTransition = true;
          }
        }

        this.isInTransition = isInTransition;
        this.alpha = alpha;
        this.currentAnchorIndex = currentAnchorIndex;
        this.nextAnchorIndex = nextAnchorIndex;
      },

      bindScrollEvent() {
        window.addEventListener('scroll', this.onScroll, false);
      }
    }
  };
}
