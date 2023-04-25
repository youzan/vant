<template>
<div :class="$style.root" :readonly="readonly" :readonly-mode="readonlyMode" :disabled="disabled"
    :tabindex="readonly || disabled ? '' : 0"
    :vusion-designer="$env.VUE_APP_DESIGNER">
    <div v-show="showHead" :class="$style.head">
        <slot name="head">
            <u-checkbox v-if="multiple" :value="allChecked" @check="checkAll($event.value)"></u-checkbox>
            <span :class="$style.title" vusion-slot-name-edit="title">{{ title }}</span>
            <div :class="$style.extra">
                <span v-if="multiple">{{ selectedVMs.length }}{{ currentDataSource && currentDataSource.originTotal !== Infinity ? ' / ' + currentDataSource.originTotal : '' }}</span>
            </div>
        </slot>
    </div>
    <u-input v-if="filterable" :class="$style.filter" :disabled="disabled" :placeholder="placeholder" size="small" suffix="search" :clearable="clearable"
        :value="filterText" @input="onInput">
    </u-input>
    <div :class="$style.scrollwrap" @scroll="onScroll">
      <van-pull-refresh :value="$env.VUE_APP_DESIGNER ? false : refreshing" :disabled="!pullRefresh || pageable === 'pagination'"
        :pulling-text="pullingText" :loosing-text="loosingText" :loading-text="loadingText" :success-text="successText" :success-duration="successDuration" :pull-distance="pullDistance"
        @refresh="refresh">
        <div ref="body" :class="$style.body">
            <slot></slot>
            <div ref="virtual" v-if="(!currentLoading && !currentError || pageable === 'auto-more' || pageable === 'load-more') && currentData && currentData.length"
                :style="{ paddingTop: virtualTop + 'px', paddingBottom: virtualBottom + 'px' }">
                <component :is="ChildComponent"
                    v-for="(item, index) in virtualList"
                    v-if="item"
                    :key="$at(item, valueField)"
                    :value="$at(item, valueField)"
                    :disabled="item.disabled || disabled"
                    :item="item"
                    :index="index"
                    vusion-slot-name="item">
                    <slot name="item" :item="item" :index="index" :text="$at(item, field || textField)" :value="$at(item, valueField)" :disabled="item.disabled || disabled">{{ $at(item, field || textField) }}
                        <van-empty-col v-if="(!$slots.item) && $env.VUE_APP_DESIGNER"></van-empty-col>
                    </slot>
                </component>
            </div>
            <div :class="$style.status" status="loading" v-if="currentLoading && !notext">
                <slot name="loading"><u-spinner></u-spinner> {{ loadingText }}</slot>
            </div>
            <div :class="$style.status" status="error" v-else-if="(currentData === null || currentError)  && !notext">
                <slot name="error">{{ errorText }}</slot>
            </div>
            <div :class="$style.status" v-else-if="pageable === 'load-more' && currentDataSource && currentDataSource.hasMore() && !notext">
                <u-link @click="load(true)">{{ $t('loadMore') }}</u-link>
            </div>
            <div :class="$style.status" v-else-if="(pageable === 'auto-more' || pageable === 'load-more') && currentDataSource && !currentDataSource.hasMore() && !$env.VUE_APP_DESIGNER && !notext && !hiddenempty">
                {{ $t('noMore') }}
            </div>
            <div :class="$style.status" v-else-if="currentData && !currentData.length && !notext">
                <slot name="empty">{{ emptyText }}</slot>
            </div>
        </div>
      </van-pull-refresh>
    </div>

    <div
        v-show="(pageable === 'pagination')" :class="$style.foot">
            <van-pagination
                :value="currentDataSource && currentDataSource.paging.number"
                :total-items="currentDataSource && currentDataSource.total"
                :items-per-page="currentDataSource && currentDataSource.paging.size"
                mode="simple"
                @change="page($event)"
            >
                <div slot="prev-text" vusion-slot-name="prev" style="width: 100%; display: flex; justify-content: center; align-items: center;">
                    <slot name="prev">
                        <van-empty-col v-if="$env.VUE_APP_DESIGNER"></van-empty-col>
                    </slot>
                </div>
                <div slot="next-text" vusion-slot-name="next" style="width: 100%; display: flex; justify-content: center; align-items: center;">
                    <slot name="next">
                        <van-empty-col v-if="$env.VUE_APP_DESIGNER"></van-empty-col>
                    </slot>
                </div>
            </van-pagination>
    </div>
</div>
</template>

<script>
import UListView from 'cloud-ui.vusion/src/components/u-list-view.vue/index.vue';
import VanPullRefresh from '../../../src/pull-refresh';
import VanEmptyCol from '../../../src/emptycol';
import VanPagination from '../../../src/pagination';

export default {
    name: 'van-list-view',
    groupName: 'van-list-view-group',
    childName: 'van-list-view-item',
    components: {
      VanPullRefresh,
      VanEmptyCol,
      VanPagination
    },
    extends: UListView,
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
        notext: { type: Boolean, default: false },
        hiddenempty: { type: Boolean, default: false },
    },
    data() {
      return {
        refreshing: false,
      }
    },
    getDataSourceOptions() {
        return {
            viewMode: this.pageable === 'pagination' ? 'page' : 'more',
            paging: this.paging,
            remotePaging: this.remotePaging,
            filtering: this.filtering,
            remoteFiltering: this.remoteFiltering,
            getExtraParams: this.getExtraParams,
            refreshing: false,
        };
    },
    methods: {
        async refresh() {
            // 分页器分页时忽略下拉刷新
            if (this.pageable === 'pagination') {
              return
            }
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
            } catch (error) {
                // eslint-disable-next-line no-console
            }
            this.refreshing = false;
        },
        onScroll(e) {
          if (this?.$env.VUE_APP_DESIGNER) return;
          this.throttledVirtualScroll(e);
          if (this.currentLoading)
              return;
          if (!(this.pageable === 'auto-more' || (this.pageable === true && this.$options.isSelect)))
            return;

          const el = e.target;
          if (el.scrollHeight <= el.scrollTop + el.clientHeight+30 && this.currentDataSource && this.currentDataSource.hasMore()) {
            this.debouncedLoad(true);
          }
        },
    },
}
</script>

<style module>
.root {
    display: flex;
    flex-direction: column;
    background: var(--van-list-view-bgcolor);
    /* border: 1px solid var(--list-view-border-color); */
    border-radius: 4px;
    height: var(--van-list-view-height);
    min-width: 280px;
    max-width: 100%;
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
    flex: auto;
    user-select: none;
    /* overflow: auto; */
    position: relative;
}

.root[readonly-mode="initial"] .body {
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
    margin: 12px;
    width: calc(100% - 24px);

    height: var(--van-list-view-input-height);
    padding: 0 var(--van-list-view-input-padding-x);
    line-height: calc(var(--van-list-view-input-height) - var(--van-list-view-input-border-width) * 2);
    background: var(--van-list-view-input-background);
    border: var(--van-list-view-input-border-width) solid var(--van-list-view-input-border-color);
    border-radius: var(--van-list-view-input-border-radius);
    cursor: text;
    color: var(--van-list-view-input-color);
}

.filter[class][class] [class^="u-input_input__"]::placeholder {
  color: var(--van-list-view-placeholder-color);
}

.pagination {
    text-align: center;
    margin: 0 -12px;
}

/* .root[size^="normal"] { height: var(--list-view-height); }
.root[size^="large"] { height: var(--list-view-height-large); }
.root[size^="huge"] { height: var(--list-view-height-huge); }
.root[size^="full"] { height: 100%; }
.root[size^="auto"] { height: auto; }
.root[size$="normal"] { width: var(--list-view-width); }
.root[size$="large"] { width: var(--list-view-width-large); }
.root[size$="huge"] { width: var(--list-view-width-huge); }
.root[size$="full"] { width: 100%; }
.root[size$="auto"] { width: auto; } */


/* .root {
    height: 100vh;
} */
.scrollwrap {
  height: 100%;
  overflow-y: auto;
}
.root[vusion-designer] {
    height: auto;
}
</style>
