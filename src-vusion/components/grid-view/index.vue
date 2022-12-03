<template>
  <div
    :class="$style.root"
    :readonly="readonly"
    :readonly-mode="readonlyMode"
    :disabled="disabled"
    :tabindex="readonly || disabled ? '' : 0"
    :vusion-designer="$env.VUE_APP_DESIGNER"
    style="padding: 10px;"
    ref="root"
  >
    <div v-show="showHead" :class="$style.head">
      <slot name="head">
        <u-checkbox
          v-if="multiple"
          :value="allChecked"
          @check="checkAll($event.value)"
        ></u-checkbox>
        <span :class="$style.title" vusion-slot-name-edit="title">{{ title }}</span>
        <div :class="$style.extra">
          <span v-if="multiple"
            >{{ selectedVMs.length
            }}{{
              currentDataSource && currentDataSource.originTotal !== Infinity
                ? ' / ' + currentDataSource.originTotal
                : ''
            }}</span
          >
        </div>
      </slot>
    </div>
    <u-input
      v-if="filterable"
      :class="$style.filter"
      :disabled="disabled"
      :placeholder="placeholder"
      size="small"
      suffix="search"
      :clearable="clearable"
      :value="filterText"
      @input="onInput"
    >
    </u-input>
    <div :class="[$style.scrollwrap, pageable==='load-more' ? $style.scrollwrapno : '']" @scroll="onScroll">
      <van-pull-refresh
        :value="$env.VUE_APP_DESIGNER ? false : refreshing"
        :disabled="!pullRefresh"
        :pullingText="pullingText"
        :loosingText="loosingText"
        :loadingText="loadingText"
        :successText="successText"
        :successDuration="successDuration"
        :pullDistance="pullDistance"
        @refresh="refresh"
      >
        <div ref="body" :class="$style.body"  class="main" :style="{height: iffall ? maxH + 'px' : 'auto'}">
          <slot></slot>
          <div
            ref="virtual"
            v-if="
              ((!currentLoading && !currentError) ||
                pageable === 'auto-more' ||
                pageable === 'load-more') &&
              currentData &&
              currentData.length
            "
            :style="{
              paddingTop: virtualTop + 'px',
              paddingBottom: virtualBottom + 'px',
            }"
            :class="$style.bodychild"
          >
            <component
              :is="ChildComponent"
              v-for="(item,i) in virtualList"
              v-if="item"
              :key="$at(item, valueField)"
              :value="$at(item, valueField)"
              :disabled="item.disabled || disabled"
              :item="item"
              c="ccc"
              :style="styleArr[i]"
              :ref="'item'+i"
              :class="[$style.opitem, $style.item, !iffall ? $style.floatitem : '', $style[moveMode], styleArr[i] && styleArr[i].showClass && $style[styleArr[i].showClass]]"
              vusion-slot-name="item"
              >
              <slot
                v-if="iffall && slots('item')"
                name="item"
                :item="item"
                :state="(styleArr[i] && styleArr[i].state) || 'loading'"
                :data="item"
                :index="i"
                :text="$at(item, field || textField)"
                :value="$at(item, valueField)"
                :disabled="item.disabled || disabled"
                vusion-slot-name="item"
                >{{ $at(item, field || textField) }}
              </slot>
              <slot
                v-if="!iffall && slots('item')"
                name="item"
                :item="item"
                :data="item"
                :index="i"
                :text="$at(item, field || textField)"
                :value="$at(item, valueField)"
                :disabled="item.disabled || disabled"
                vusion-slot-name="item"
                >{{ $at(item, field || textField) }}
              </slot>
              <van-empty-col v-if="(!slots('item')) && $env.VUE_APP_DESIGNER"></van-empty-col>
            </component>
          </div>
          <div :class="$style.status" status="loading" v-if="currentLoading">
            <slot name="loading"
              ><u-spinner></u-spinner> {{ loadingText }}</slot
            >
          </div>
          <div
            :class="$style.status"
            status="error"
            v-else-if="currentData === null || currentError"
          >
            <slot name="error">{{ errorText }}</slot>
          </div>
          <div
            :class="$style.status"
            v-else-if="
              pageable === 'load-more' &&
              currentDataSource &&
              currentDataSource.hasMore()
            "
          >
            <u-link @click="load(true)">{{ $t('loadMore') }}</u-link>
          </div>
          <div
            :class="$style.status"
            v-else-if="currentData && !currentData.length"
          >
            <slot name="empty">{{ emptyText }}</slot>
          </div>
          <div
            :class="$style.status"
            v-else-if="
              (pageable === 'auto-more' || pageable === 'load-more') &&
              currentDataSource &&
              !currentDataSource.hasMore() &&
              !$env.VUE_APP_DESIGNER
            "
          >
            {{ $t('noMore') }}
          </div>
        </div>
      </van-pull-refresh>
      <!-- <div
        v-show="
          showFoot ||
          ((pageable === true || pageable === 'pagination') &&
            currentDataSource.total > currentDataSource.paging.size)
        "
        :class="$style.foot"
      >
        <slot name="foot"></slot>
        <u-pagination
          :class="$style.pagination"
          v-if="pageable === true || pageable === 'pagination'"
          :total-items="currentDataSource.total"
          :page="currentDataSource.paging.number"
          :page-size="currentDataSource.paging.size"
          :side="1"
          :around="3"
          @change="page($event.page)"
        >
        </u-pagination>
      </div> -->
    </div>
  </div>
</template>

<script>
import UListView from 'cloud-ui.vusion/src/components/u-list-view.vue/index.vue';
import VanPullRefresh from '../../../src/pull-refresh';
import VanEmptyCol from '../../../src/emptycol';
let loaderCache = {};
let loaderImg = new Map();
let time = null;

export default {
  name: 'van-grid-view',
  groupName: 'van-grid-view-group',
  childName: 'van-grid-view-item',
  extends: UListView,
  components: { VanPullRefresh, VanEmptyCol },
  props: {
    border: { type: Boolean, default: false },
    readonly: { type: Boolean, default: true },
    readonlyMode: { type: String, default: 'initial' },
    pageSize: { type: Number, default: 20 },
    pullRefresh: { type: Boolean, default: true },
    pullingText: { type: String, default: '下拉刷新' },
    loosingText: { type: String, default: '释放刷新' },
    successText: { type: String, default: '已刷新' },
    successDuration: 500,
    pullDistance: 50,
    // list: {
    //   type: Array,
    //   default: () => [],
    // },
    iffall: {
      type: Boolean,
      default: false,
    },
    imgKey: {
      type: String,
      default: 'src',
    },
    col: {
      type: Number,
      default: 2,
    },
    colWidth: {
      type: Number,
      default: 0,
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    fillBox: {
      type: Boolean,
      default: false,
    },
    moveMode: {
      type: String,
      default: 'transform',
    },
    moveTransitionDuration: {
      type: Number,
      default: 0.4,
    },
  },
  data() {
    return {
      refreshing: false,
      styleArr: [],
      colW: 0,
      maxH: 1,
      mainW: 0,
      _col: 0,
      __col: 0,
      batchCB: null,
      onRender: null,
      observerwh: null,
    };
  },
  computed: {
    resizeDebounce() {
      return this.isTransition ? this.debounce(this.resize, 100) : this.resize;
    },
    isTransition() {
      return this.autoResize && this.col < 1;
    },
  },
  watch: {
    ['virtualList']: {
      deep: true,
      async handler(newV, oldV) {
        if (this.iffall && newV.length > oldV.length) {
          await this.$nextTick();
          this.batchCB = this.initItem(oldV.length);
        } else {
          await this.$nextTick();
          this.initFloat();
        }
      },
    },
    // autoResize: {
    //   handler(newV) {
    //     newV &&
    //       setTimeout(() => {
    //         this.$refs.autoExpand.contentWindow.onresize = (e) => {
    //           this.resizeDebounce();
    //         };
    //       });
    //   },
    //   immediate: true,
    // },
    iffall(newv) {
      this.styleArr = [];
      if (newv) {
        this.batchCB = this.initItem();
      } else {
        this.initFloat();
      }
    },
    col(newv) {
      this.styleArr = [];
      if (this.iffall) {
        this.batchCB = this.initItem();
      } else {
        this.initFloat();
      }
    },
  },
  mounted() {
    if (this.$env && this.$env.VUE_APP_DESIGNER) {
      this.observerwh = new MutationObserver(this.pwd);
      this.observerwh.observe(this.$refs.body, {
          attributes: true, childList: true, subtree: true
      });
    }

    if (this.iffall) {
      this.init();
    } else {
      this.initFloat();
    }
  },
  destroyed() {
    this.observerwh && this.observerwh.disconnect();
  },
  getDataSourceOptions() {
    return {
      viewMode: 'more',
      paging: this.paging,
      remotePaging: this.remotePaging,
      filtering: this.filtering,
      remoteFiltering: this.remoteFiltering,
      getExtraParams: this.getExtraParams,
      refreshing: false,
    };
  },
  methods: {
    pwd() {
      if (this.iffall) {
        this.init();
      }
    },
    async refresh() {
      this.refreshing = true;
      const paging = {
        size: this.currentDataSource.paging.size,
        oldSize: this.currentDataSource.paging.size,
        number: 1,
        oldNumber: this.currentDataSource.paging.number,
      };
      // eslint-disable-next-line no-console
      try {
        this.currentDataSource.page(paging);
        await this.load();
        this.$emit('page', paging, this);
        this.$emit('update:page-number', 1, this);
        if (this.iffall) {
          this.repaints();
        }
      } catch (error) {
        // eslint-disable-next-line no-console
      }
      this.refreshing = false;
    },
    onScroll(e) {
      if (this?.$env.VUE_APP_DESIGNER) return;
      this.throttledVirtualScroll(e);
      if (!(this.pageable === 'auto-more' || (this.pageable === true && this.$options.isSelect)))
          return;
      if (this.currentLoading)
          return;
      const el = e.target;
      if (el.scrollHeight <= el.scrollTop + el.clientHeight+30 && this.currentDataSource && this.currentDataSource.hasMore()) {
        if (this.iffall) {
          if (!window.cusloading) {
              window.cusloading = window.vant.VanToast.loading({duration: 0,forbidClick: true, message: '加载中',});
          } else {
              window.cusloading.value = true;
          }
        }
        this.debouncedLoad(true);
      }
  },
    async repaints(start = 0, duration) {
      await this.$nextTick();
      this.mainW = this.getWidth();
      this.calcCol();
      this.calcXY(start, 'repaints', duration);
    },
    init(start = 0) {
      this.mainW = this.getWidth();
      this.calcCol();
      this.batchCB = this.initItem(start);
      // this.polling();
    },
    initFloat() {
      this.mainW = this.getWidth();
      this.calcCol();
      let list = [...this.virtualList];
      list.forEach((e, i) => {
        let _i = i;
        if (!this.styleArr[_i]) {
          this.styleArr[_i] = {};
        }
        this.styleArr[_i].width = this.colW + 'px';
      });
      this.$forceUpdate();
    },
    getWidth() {
      return ((this.$refs.root.getBoundingClientRect() || {}).width-20) || 0;
    },
    async resize(start = 0) {
      if (!this.$refs.body) return;
      let width = this.getWidth();
      if (width == this.mainW) return;
      this.mainW = width;
      this.calcCol();
      if (this.autoResize) {
        if (this.fillBox || this.col || this.__col != this._col) {
          this.calcXY(start, 'resize');
        }
      }
    },
    calcCol() {
      let col = 2;
      if (this.col) {
        col = this.col;
        this.colW = this.mainW / col;
      } else if (this.colWidth) {
        col = parseInt(this.mainW / this.colWidth) || 1;
        if (this.mainW % this.colWidth && this.fillBox) {
          this.colW = this.mainW / col;
        } else {
          this.colW = this.colWidth;
        }
      } else {
        this.colW = this.mainW / col;
      }
      this.__col = col;
      return col;
    },
    polling() {
      clearInterval(time);
      time = setInterval(() => {
        for (let item of loaderImg) {
          let key = item[0];
          item = item[1];
          if (item.img.height > 0 || item.img.complete) {
            item.cb(item.img);
            loaderImg.delete(key);
          } else {
            return;
          }
        }
      }, 300);
    },
    initItem(start = 0) {
      let list = this.virtualList.slice(start);
      let loadNum = 0;
      list.forEach((e, i) => {
        let _i = i + start;
        if (!this.styleArr[_i]) {
          this.styleArr[_i] = {};
        }
        this.styleArr[_i].width = this.colW + 'px';
        this.loader(
          e[this.imgKey],
          () => {
            loadNum++;
            this.styleArr[_i].complete = true;
            this.styleArr[_i].state = 'complete';
            this.$set(this.styleArr, _i, this.styleArr[_i]);
            if (loadNum != list.length) return;
            this.waitRender(start);
          },
          this.getColDom(_i)?.$el?.getElementsByTagName && this.getColDom(_i)?.$el?.getElementsByTagName('img')?.[0],
          i
        );
      });
    },
    waitRender(start) {
      for (var i = 0; i < this.styleArr.length; i++) {
        if (i < start) {
          if (!this.styleArr[i] || !this.styleArr[i].complete) return;
        }
      }
      this.calcXY(start);
    },
    async calcXY(index = 0, cause = 'data', duration) {
      duration = isNaN(duration) ? this.moveTransitionDuration : duration;
      let idx = index;
      this._col = this.__col;
      for (let i = index; i < this.styleArr.length; i++) {
        if (!this.styleArr[i] || !this.styleArr[i].complete) continue;
        this.styleArr[i].width = this.colW + 'px';
        if (this.styleArr[i].showClass) {
          this.styleArr[i]['transition-duration'] = `${duration}s`;
        }
      }
      await this.$nextTick();
      for (let i = idx; i < this.styleArr.length; i++) {
        if (!this.styleArr[i] || !this.styleArr[i].complete) return;
        const e = this.getColDom(i);
        if (!e) return;
        // 获取当前元素高度
        this.styleArr[i].height = e.$el.offsetHeight;
        let xy = this.getMinCol(i);
        const curTop = xy.curTop,
          curCol = xy.curCol,
          curBT = curTop + this.styleArr[i].height,
          maxH = xy.maxH > curBT ? xy.maxH : curBT;
        if (this.moveMode == 'convention') {
          this.styleArr[i].left = `${curCol * this.colW}px`;
          this.styleArr[i].top = `${curTop}px`;
        } else {
          this.styleArr[i].transform = `translate3d(${
            curCol * this.colW
          }px, ${curTop}px ,0)`;
        }
        this.maxH = maxH;
        this.styleArr[i].bottomTop = curBT;
        this.styleArr[i].col = curCol;
        this.styleArr[i].showClass = 'show';
        this.styleArr[i].state = 'show';
      }
      this.$forceUpdate();
      await this.$nextTick();
      if (this.iffall) {
        window.cusloading && window.cusloading.clear();
      }
      this.onRender &&
        this.onRender({
          cause: cause,
          start: index,
        });
    },
    getMinCol(curIndex) {
      if (!curIndex) {
        return {
          curCol: 0,
          curTop: 0,
          maxH: 0,
        };
      }
      let curCol = 0,
        curTop = 0;
      let set = {};
      for (let index = curIndex - 1; index >= 0; index--) {
        const item = this.styleArr[index];
        if (item && !set[item.col]) {
          set[item.col] = item;
        }
        if (Object.keys(set).length == this.__col) {
          break;
        }
      }
      let order = Object.values(set).sort((a, b) => a.bottomTop - b.bottomTop);
      if (curIndex < this.__col) {
        curCol = curIndex;
        curTop = 0;
      } else {
        curCol = order[0].col;
        curTop = order[0].bottomTop;
      }
      return {
        curCol,
        curTop,
        maxH: order[order.length - 1].bottomTop,
      };
    },
    // loader(src, cb, imgDom = {}, i) {
    //   if (imgDom.height > 0) {
    //     return cb(imgDom);
    //   }
    //   if (!src && !imgDom.src) return cb();
    //   if (imgDom.src) {
    //     src = imgDom.src;
    //   }
    //   let img = loaderCache[src] && loaderCache[src].img;
    //   if (img) {
    //     if (img.complete || img.height > 0) return cb(img);
    //   } else {
    //     if (imgDom.src) {
    //       img = imgDom;
    //     } else {
    //       img = new Image();
    //       img.src = src;
    //     }
    //     if (img.complete || img.height > 0) return cb(img);
    //     loaderCache[src] = {
    //       img: img,
    //       cbs: [],
    //       i,
    //     };
    //     loaderImg.set(img.src, {
    //       img,
    //       cb: () => {
    //         loaderCache[src].cbs.forEach((cb) => cb());
    //         loaderCache[src].cbs.length = 0;
    //       },
    //     });
    //   }
    //   loaderCache[src].cbs.push(cb);
    // },
    loader(src, cb, imgDom = {}, i) {
      if (imgDom.height > 0) {
        return cb(imgDom);
      }
      if (!src && !imgDom.src) return cb();
      if (imgDom.src) {
        src = imgDom.src;
      }
      let img;
      img = new Image();
      img.onerror = () => {
        cb(img);
      }
      img.onload = () => {
        cb(img);
      }
      img.src = src;
    },
    getColDom(i) {
      return this.$refs['item' + i][0];
    },
    slots(name = 'default', props) {
      try {
        const { $slots, $scopedSlots } = this;
        const scopedSlot = $scopedSlots[name];
        if (scopedSlot) {
          return scopedSlot(props);
        }
          return $slots[name];
        } catch (error) {
          return {};
        }
    },
    debounce(func, wait) {
      let timer;
      return function () {
        let context = this;
        let args = arguments;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, wait);
      };
    },
  },
};
</script>

<style module>
.root {
  /* display: flex; */
  flex-direction: column;
  background: #fff;
  /* border: 1px solid var(--list-view-border-color); */
  border-radius: 4px;
  height: 400px;
  min-width: 280px;
  max-width: 100%;

  box-sizing: border-box;
}

.root:focus {
  border-color: #e5e5e5;
  outline: none;
}

.status {
  color: #999999;
  text-align: center;
  padding: 5px 12px;
}

.root[disabled] {
  border: 1px solid #ebebeb;
}

.head {
 padding: 8px 12px;
  border-bottom: 1px solid e5e5e5;
}

.extra {
  float: right;
  color: #999;
}

.body {
  /* height: 100%; */
  /* flex: auto; */
  user-select: none;
  /* overflow: auto; */
  position: relative;
}

.bodychild {
  width: 100%;
  height: 100%;
}

.item {
  position: absolute;
    z-index: 1;
    opacity: 0;
    box-sizing: border-box;
    transform: translate3d(0,0,0);
    padding: 5PX; /* px-to-viewport-ignore */
}

.floatitem {
  position: relative;
    z-index: 1;
    opacity: 1;
    box-sizing: border-box;
    transform: translate3d(0,0,0);
    display: inline-block;
    vertical-align: top;
    padding: 5PX; /* px-to-viewport-ignore */
}

.opitem[designer] + .opitem[designer]:after{
    content: '';
    position: absolute;
    display: block;
    background: rgba(255,255,255,0.8);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}


.convention{
    transition-property: top,left;
}
.transform{
    transition-property: transform;
}

.show{
    opacity: 1!important;
}

.root[readonly-mode='initial'] .body {
  user-select: initial;
}

.root[disabled] .body {
  background: #fff;
}

.foot {
  /* background: var(--list-view-foot-background);
  padding: var(--list-view-foot-padding);
  border-top: 1px solid var(--list-view-border-color); */
}

.filter[class][class] {
  width: calc(100% - 10PX);
  margin-left: auto;
  margin-right: auto;
  display: block;

  height: var(--van-grid-view-input-height);
  padding: 0 var(--van-grid-view-input-padding-x);
  line-height: calc(var(--van-grid-view-input-height) - var(--van-grid-view-input-border-width) * 2);
  background: var(--van-grid-view-input-background);
  border: var(--van-grid-view-input-border-width) solid var(--van-grid-view-input-border-color);
  border-radius: var(--van-grid-view-input-border-radius);
  cursor: text;
  color: var(--van-grid-view-input-color);
}

.pagination {
  text-align: center;
  margin: 0 -12px;
}

/* .root[size^='normal'] {
  height: var(--list-view-height);
}
.root[size^='large'] {
  height: var(--list-view-height-large);
}
.root[size^='huge'] {
  height: var(--list-view-height-huge);
}
.root[size^='full'] {
  height: 100%;
}
.root[size^='auto'] {
  height: auto;
}
.root[size$='normal'] {
  width: var(--list-view-width);
}
.root[size$='large'] {
  width: var(--list-view-width-large);
}
.root[size$='huge'] {
  width: var(--list-view-width-huge);
}
.root[size$='full'] {
  width: 100%;
}
.root[size$='auto'] {
  width: auto;
} */

/* .root {
    height: 100vh;
} */
.scrollwrap {
  height: 100%;
  overflow-y: auto;
}
.scrollwrapno {
  overflow-y: unset;
}
.scrollwrap::-webkit-scrollbar {
  display: none;
}
.root[vusion-designer] {
  height: auto;
}
</style>
