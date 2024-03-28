import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},p=n(`<h1>CountDown \u5012\u8BA1\u65F6</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5B9E\u65F6\u5C55\u793A\u5012\u8BA1\u65F6\u6570\u503C\uFF0C\u652F\u6301\u6BEB\u79D2\u7CBE\u5EA6\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">CountDown</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CountDown</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p><code>time</code> \u5C5E\u6027\u8868\u793A\u5012\u8BA1\u65F6\u603B\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-count-down</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> time = <span class="hljs-title function_">ref</span>(<span class="hljs-number">30</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>);
    <span class="hljs-keyword">return</span> { time };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-ge-shi" tabindex="-1">\u81EA\u5B9A\u4E49\u683C\u5F0F</h3><p>\u901A\u8FC7 <code>format</code> \u5C5E\u6027\u8BBE\u7F6E\u5012\u8BA1\u65F6\u6587\u672C\u7684\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-count-down</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;DD \u5929 HH \u65F6 mm \u5206 ss \u79D2&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="hao-miao-ji-xuan-ran" tabindex="-1">\u6BEB\u79D2\u7EA7\u6E32\u67D3</h3><p>\u5012\u8BA1\u65F6\u9ED8\u8BA4\u6BCF\u79D2\u6E32\u67D3\u4E00\u6B21\uFF0C\u8BBE\u7F6E <code>millisecond</code> \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-count-down</span> <span class="hljs-attr">millisecond</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;HH:mm:ss:SS&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yang-shi" tabindex="-1">\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><p>\u901A\u8FC7\u63D2\u69FD\u81EA\u5B9A\u4E49\u5012\u8BA1\u65F6\u7684\u6837\u5F0F\uFF0C<code>timeData</code> \u5BF9\u8C61\u683C\u5F0F\u89C1\u4E0B\u65B9\u8868\u683C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-count-down</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;timeData&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.hours }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;colon&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.minutes }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;colon&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.seconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-count-down</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.colon</span> {
    <span class="hljs-attribute">display</span>: inline-block;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> <span class="hljs-number">4px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#ee0a24</span>;
  }
  <span class="hljs-selector-class">.block</span> {
    <span class="hljs-attribute">display</span>: inline-block;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">22px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#ee0a24</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="shou-dong-kong-zhi" tabindex="-1">\u624B\u52A8\u63A7\u5236</h3><p>\u901A\u8FC7 ref \u83B7\u53D6\u5230\u7EC4\u4EF6\u5B9E\u4F8B\u540E\uFF0C\u53EF\u4EE5\u8C03\u7528 <code>start</code>\u3001<code>pause</code>\u3001<code>reset</code> \u65B9\u6CD5\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-count-down</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;countDown&quot;</span>
  <span class="hljs-attr">millisecond</span>
  <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;3000&quot;</span>
  <span class="hljs-attr">:auto-start</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;ss:SSS&quot;</span>
  @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span> <span class="hljs-attr">clickable</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5F00\u59CB&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;play-circle-o&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;start&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6682\u505C&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;pause-circle-o&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;pause&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u91CD\u7F6E&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;replay&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;reset&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> countDown = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">start</span> = (<span class="hljs-params"></span>) =&gt; {
      countDown.<span class="hljs-property">value</span>.<span class="hljs-title function_">start</span>();
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">pause</span> = (<span class="hljs-params"></span>) =&gt; {
      countDown.<span class="hljs-property">value</span>.<span class="hljs-title function_">pause</span>();
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">reset</span> = (<span class="hljs-params"></span>) =&gt; {
      countDown.<span class="hljs-property">value</span>.<span class="hljs-title function_">reset</span>();
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFinish</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u5012\u8BA1\u65F6\u7ED3\u675F&#39;</span>);

    <span class="hljs-keyword">return</span> {
      start,
      pause,
      reset,
      onFinish,
      countDown,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>time</td><td>\u5012\u8BA1\u65F6\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>format</td><td>\u65F6\u95F4\u683C\u5F0F</td><td><em>string</em></td><td><code>HH:mm:ss</code></td></tr><tr><td>auto-start</td><td>\u662F\u5426\u81EA\u52A8\u5F00\u59CB\u5012\u8BA1\u65F6</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>millisecond</td><td>\u662F\u5426\u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="format-ge-shi" tabindex="-1">format \u683C\u5F0F</h3><table><thead><tr><th>\u683C\u5F0F</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>DD</td><td>\u5929\u6570</td></tr><tr><td>HH</td><td>\u5C0F\u65F6</td></tr><tr><td>mm</td><td>\u5206\u949F</td></tr><tr><td>ss</td><td>\u79D2\u6570</td></tr><tr><td>S</td><td>\u6BEB\u79D2\uFF081 \u4F4D\uFF09</td></tr><tr><td>SS</td><td>\u6BEB\u79D2\uFF082 \u4F4D\uFF09</td></tr><tr><td>SSS</td><td>\u6BEB\u79D2\uFF083 \u4F4D\uFF09</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>finish</td><td>\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>change</td><td>\u5012\u8BA1\u65F6\u53D8\u5316\u65F6\u89E6\u53D1</td><td><em>currentTime: CurrentTime</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td><td><em>currentTime: CurrentTime</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="currenttime-ge-shi" tabindex="-1">CurrentTime \u683C\u5F0F</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>total</td><td>\u5269\u4F59\u603B\u65F6\u95F4\uFF08\u5355\u4F4D\u6BEB\u79D2\uFF09</td><td><em>number</em></td></tr><tr><td>days</td><td>\u5269\u4F59\u5929\u6570</td><td><em>number</em></td></tr><tr><td>hours</td><td>\u5269\u4F59\u5C0F\u65F6</td><td><em>number</em></td></tr><tr><td>minutes</td><td>\u5269\u4F59\u5206\u949F</td><td><em>number</em></td></tr><tr><td>seconds</td><td>\u5269\u4F59\u79D2\u6570</td><td><em>number</em></td></tr><tr><td>milliseconds</td><td>\u5269\u4F59\u6BEB\u79D2</td><td><em>number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 CountDown \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>start</td><td>\u5F00\u59CB\u5012\u8BA1\u65F6</td><td>-</td><td>-</td></tr><tr><td>pause</td><td>\u6682\u505C\u5012\u8BA1\u65F6</td><td>-</td><td>-</td></tr><tr><td>reset</td><td>\u91CD\u8BBE\u5012\u8BA1\u65F6\uFF0C\u82E5 <code>auto-start</code> \u4E3A <code>true</code>\uFF0C\u91CD\u8BBE\u540E\u4F1A\u81EA\u52A8\u5F00\u59CB\u5012\u8BA1\u65F6</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">CountDownProps</span>,
  <span class="hljs-title class_">CountDownInstance</span>,
  <span class="hljs-title class_">CountDownCurrentTime</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>CountDownInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CountDownInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> countDownRef = ref&lt;<span class="hljs-title class_">CountDownInstance</span>&gt;();

countDownRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">start</span>();
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-count-down-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-count-down-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-count-down-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="zai-ios-xi-tong-shang-dao-ji-shi-bu-sheng-xiao" tabindex="-1">\u5728 iOS \u7CFB\u7EDF\u4E0A\u5012\u8BA1\u65F6\u4E0D\u751F\u6548\uFF1F</h3><p>\u5982\u679C\u4F60\u9047\u5230\u4E86\u5728 iOS \u4E0A\u5012\u8BA1\u65F6\u4E0D\u751F\u6548\u7684\u95EE\u9898\uFF0C\u8BF7\u786E\u8BA4\u5728\u521B\u5EFA Date \u5BF9\u8C61\u65F6\u6CA1\u6709\u4F7F\u7528<code>new Date(&#39;2020-01-01&#39;)</code>\u8FD9\u6837\u7684\u5199\u6CD5\uFF0CiOS \u4E0D\u652F\u6301\u4EE5\u4E2D\u5212\u7EBF\u5206\u9694\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u6B63\u786E\u5199\u6CD5\u662F<code>new Date(&#39;2020/01/01&#39;)</code>\u3002</p><p>\u5BF9\u6B64\u95EE\u9898\u7684\u8BE6\u7EC6\u89E3\u91CA\uFF1A<a href="https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios" target="_blank">stackoverflow</a>\u3002</p></div>`,21),e=[p],i={__name:"README.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(o,r)=>(a(),t("div",l,e))}};export{i as default};
