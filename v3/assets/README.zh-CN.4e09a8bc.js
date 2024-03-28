import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=n(`<h1>PullRefresh \u4E0B\u62C9\u5237\u65B0</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u63D0\u4F9B\u4E0B\u62C9\u5237\u65B0\u7684\u4EA4\u4E92\u64CD\u4F5C\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PullRefresh</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">PullRefresh</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u4E0B\u62C9\u5237\u65B0\u65F6\u4F1A\u89E6\u53D1 <code>refresh</code> \u4E8B\u4EF6\uFF0C\u5728\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u53EF\u4EE5\u8FDB\u884C\u540C\u6B65\u6216\u5F02\u6B65\u64CD\u4F5C\uFF0C\u64CD\u4F5C\u5B8C\u6210\u540E\u5C06 <code>v-model</code> \u8BBE\u7F6E\u4E3A <code>false</code>\uFF0C\u8868\u793A\u52A0\u8F7D\u5B8C\u6210\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;loading&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u5237\u65B0\u6B21\u6570: {{ count }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-pull-refresh</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> count = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onRefresh</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u5237\u65B0\u6210\u529F&#39;</span>);
        loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
        count.<span class="hljs-property">value</span>++;
      }, <span class="hljs-number">1000</span>);
    };

    <span class="hljs-keyword">return</span> {
      count,
      loading,
      onRefresh,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="cheng-gong-ti-shi" tabindex="-1">\u6210\u529F\u63D0\u793A</h3><p>\u901A\u8FC7 <code>success-text</code> \u53EF\u4EE5\u8BBE\u7F6E\u5237\u65B0\u6210\u529F\u540E\u7684\u9876\u90E8\u63D0\u793A\u6587\u6848\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;isLoading&quot;</span>
  <span class="hljs-attr">success-text</span>=<span class="hljs-string">&quot;\u5237\u65B0\u6210\u529F&quot;</span>
  @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u5237\u65B0\u6B21\u6570: {{ count }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-pull-refresh</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-ti-shi" tabindex="-1">\u81EA\u5B9A\u4E49\u63D0\u793A</h3><p>\u901A\u8FC7\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;isLoading&quot;</span> <span class="hljs-attr">:head-height</span>=<span class="hljs-string">&quot;80&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- \u4E0B\u62C9\u63D0\u793A\uFF0C\u901A\u8FC7 scale \u5B9E\u73B0\u4E00\u4E2A\u7F29\u653E\u6548\u679C --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">pulling</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;doge&quot;</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/doge.png&quot;</span>
      <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ transform: \`scale(\${props.distance / 80})\` }&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-comment">&lt;!-- \u91CA\u653E\u63D0\u793A --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">loosing</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;doge&quot;</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/doge.png&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-comment">&lt;!-- \u52A0\u8F7D\u63D0\u793A --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">loading</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;doge&quot;</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/doge-fire.jpeg&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u5237\u65B0\u6B21\u6570: {{ count }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-pull-refresh</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.doge</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">140px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">72px</span>;
    <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u4E2D\u72B6\u6001</td><td><em>boolean</em></td><td>-</td></tr><tr><td>pulling-text</td><td>\u4E0B\u62C9\u8FC7\u7A0B\u63D0\u793A\u6587\u6848</td><td><em>string</em></td><td><code>\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...</code></td></tr><tr><td>loosing-text</td><td>\u91CA\u653E\u8FC7\u7A0B\u63D0\u793A\u6587\u6848</td><td><em>string</em></td><td><code>\u91CA\u653E\u5373\u53EF\u5237\u65B0...</code></td></tr><tr><td>loading-text</td><td>\u52A0\u8F7D\u8FC7\u7A0B\u63D0\u793A\u6587\u6848</td><td><em>string</em></td><td><code>\u52A0\u8F7D\u4E2D...</code></td></tr><tr><td>success-text</td><td>\u5237\u65B0\u6210\u529F\u63D0\u793A\u6587\u6848</td><td><em>string</em></td><td>-</td></tr><tr><td>success-duration</td><td>\u5237\u65B0\u6210\u529F\u63D0\u793A\u5C55\u793A\u65F6\u957F(ms)</td><td><em>number | string</em></td><td><code>500</code></td></tr><tr><td>animation-duration</td><td>\u52A8\u753B\u65F6\u957F</td><td><em>number | string</em></td><td><code>300</code></td></tr><tr><td>head-height</td><td>\u9876\u90E8\u5185\u5BB9\u9AD8\u5EA6</td><td><em>number | string</em></td><td><code>50</code></td></tr><tr><td>pull-distance <code>v3.0.8</code></td><td>\u89E6\u53D1\u4E0B\u62C9\u5237\u65B0\u7684\u8DDD\u79BB</td><td><em>number | string</em></td><td>\u4E0E <code>head-height</code> \u4E00\u81F4</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u4E0B\u62C9\u5237\u65B0</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>refresh</td><td>\u4E0B\u62C9\u5237\u65B0\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>change <code>v3.5.1</code></td><td>\u62D6\u52A8\u65F6\u6216\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1</td><td><em>{ status: string, distance: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td><td>-</td></tr><tr><td>normal</td><td>\u975E\u4E0B\u62C9\u72B6\u6001\u65F6\u9876\u90E8\u5185\u5BB9</td><td>-</td></tr><tr><td>pulling</td><td>\u4E0B\u62C9\u8FC7\u7A0B\u4E2D\u9876\u90E8\u5185\u5BB9</td><td><em>{ distance: number }</em></td></tr><tr><td>loosing</td><td>\u91CA\u653E\u8FC7\u7A0B\u4E2D\u9876\u90E8\u5185\u5BB9</td><td><em>{ distance: number }</em></td></tr><tr><td>loading</td><td>\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u9876\u90E8\u5185\u5BB9</td><td><em>{ distance: number }</em></td></tr><tr><td>success</td><td>\u5237\u65B0\u6210\u529F\u63D0\u793A\u5185\u5BB9</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PullRefreshProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-pull-refresh-head-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-pull-refresh-head-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-pull-refresh-head-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-pull-refresh-loading-icon-size</td><td><em>16px</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="pullrefresh-de-nei-rong-wei-tian-man-ping-mu-shi-zhi-you-yi-bu-fen-qu-yu-ke-yi-xia-la" tabindex="-1">PullRefresh \u7684\u5185\u5BB9\u672A\u586B\u6EE1\u5C4F\u5E55\u65F6\uFF0C\u53EA\u6709\u4E00\u90E8\u5206\u533A\u57DF\u53EF\u4EE5\u4E0B\u62C9\uFF1F</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E0B\u62C9\u533A\u57DF\u7684\u9AD8\u5EA6\u662F\u548C\u5185\u5BB9\u9AD8\u5EA6\u4FDD\u6301\u4E00\u81F4\u7684\uFF0C\u5982\u679C\u9700\u8981\u8BA9\u4E0B\u62C9\u533A\u57DF\u59CB\u7EC8\u4E3A\u5168\u5C4F\uFF0C\u53EF\u4EE5\u7ED9 PullRefresh \u8BBE\u7F6E\u4E00\u4E2A\u4E0E\u5C4F\u5E55\u5927\u5C0F\u76F8\u7B49\u7684\u6700\u5C0F\u9AD8\u5EA6\uFF1A</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;min-height: 100vh;&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="pullrefresh-de-chu-fa-tiao-jian-shi" tabindex="-1">PullRefresh \u7684\u89E6\u53D1\u6761\u4EF6\u662F\uFF1F</h3><p>PullRefresh \u7684\u89E6\u53D1\u6761\u4EF6\u662F\u300C\u7236\u7EA7\u6EDA\u52A8\u5143\u7D20\u7684\u6EDA\u52A8\u6761\u5728\u9876\u90E8\u4F4D\u7F6E\u300D\u3002</p><ul><li>\u5982\u679C\u6700\u8FD1\u4E00\u4E2A\u53EF\u6EDA\u52A8\u7684\u7236\u7EA7\u5143\u7D20\u662F <code>window</code>\uFF0C\u5219\u8981\u6C42 <code>window.pageYOffset === 0</code>\u3002</li><li>\u5982\u679C\u6700\u8FD1\u4E00\u4E2A\u53EF\u6EDA\u52A8\u7684\u7236\u7EA7\u5143\u7D20\u662F <code>Element</code>\uFF0C\u5219\u8981\u6C42 <code>Element.scrollTop === 0</code>\u3002</li></ul></div><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F</h3><p>\u53C2\u89C1<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">\u684C\u9762\u7AEF\u9002\u914D</a>\u3002</p></div>`,18),p=[e],i={__name:"README.zh-CN",setup(d,{expose:s}){return s({frontmatter:{}}),(h,r)=>(a(),t("div",l,p))}};export{i as default};
