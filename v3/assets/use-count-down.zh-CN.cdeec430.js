import{o as n,a,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},p=t(`<h1>useCountDown</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u5012\u8BA1\u65F6\u7BA1\u7406\u80FD\u529B\u3002</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u603B\u65F6\u95F4\uFF1A{{ current.total }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u5269\u4F59\u5929\u6570\uFF1A{{ current.days }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u5269\u4F59\u5C0F\u65F6\uFF1A{{ current.hours }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u5269\u4F59\u5206\u949F\uFF1A{{ current.minutes }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u5269\u4F59\u79D2\u6570\uFF1A{{ current.seconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u5269\u4F59\u6BEB\u79D2\uFF1A{{ current.milliseconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { useCountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> countDown = <span class="hljs-title function_">useCountDown</span>({
      <span class="hljs-comment">// \u5012\u8BA1\u65F6 24 \u5C0F\u65F6</span>
      <span class="hljs-attr">time</span>: <span class="hljs-number">24</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>,
    });

    <span class="hljs-comment">// \u5F00\u59CB\u5012\u8BA1\u65F6</span>
    countDown.<span class="hljs-title function_">start</span>();

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">current</span>: countDown.<span class="hljs-property">current</span>,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="hao-miao-ji-xuan-ran" tabindex="-1">\u6BEB\u79D2\u7EA7\u6E32\u67D3</h3><p>\u5012\u8BA1\u65F6\u9ED8\u8BA4\u6BCF\u79D2\u6E32\u67D3\u4E00\u6B21\uFF0C\u8BBE\u7F6E millisecond \u9009\u9879\u53EF\u4EE5\u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { useCountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> countDown = <span class="hljs-title function_">useCountDown</span>({
      <span class="hljs-attr">time</span>: <span class="hljs-number">24</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>,
      <span class="hljs-attr">millisecond</span>: <span class="hljs-literal">true</span>,
    });
    countDown.<span class="hljs-title function_">start</span>();

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">current</span>: countDown.<span class="hljs-property">current</span>,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">CurrentTime</span> = {
  <span class="hljs-attr">days</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">hours</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">total</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">minutes</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">seconds</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">milliseconds</span>: <span class="hljs-built_in">number</span>;
};

<span class="hljs-keyword">type</span> <span class="hljs-title class_">CountDown</span> = {
  <span class="hljs-attr">start</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;
  <span class="hljs-attr">pause</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;
  <span class="hljs-attr">reset</span>: <span class="hljs-function">(<span class="hljs-params">totalTime: <span class="hljs-built_in">number</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>;
  <span class="hljs-attr">current</span>: <span class="hljs-title class_">ComputedRef</span>&lt;<span class="hljs-title class_">CurrentTime</span>&gt;;
};

<span class="hljs-keyword">type</span> <span class="hljs-title class_">UseCountDownOptions</span> = {
  <span class="hljs-attr">time</span>: <span class="hljs-built_in">number</span>;
  millisecond?: <span class="hljs-built_in">boolean</span>;
  onChange?: <span class="hljs-function">(<span class="hljs-params">current: CurrentTime</span>) =&gt;</span> <span class="hljs-built_in">void</span>;
  onFinish?: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;
};

<span class="hljs-keyword">function</span> <span class="hljs-title function_">useCountDown</span>(<span class="hljs-params">options: UseCountDownOptions</span>): <span class="hljs-title class_">CountDown</span>;
</code></pre></div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">\u53C2\u6570</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>time</td><td>\u5012\u8BA1\u65F6\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td><em>number</em></td><td>-</td></tr><tr><td>millisecond</td><td>\u662F\u5426\u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>onChange</td><td>\u5012\u8BA1\u65F6\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td><em>(current: CurrentTime) =&gt; void</em></td><td>-</td></tr><tr><td>onFinish</td><td>\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td>-</td><td></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">\u8FD4\u56DE\u503C</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>current</td><td>\u5F53\u524D\u5269\u4F59\u7684\u65F6\u95F4</td><td><em>CurrentTime</em></td></tr><tr><td>start</td><td>\u5F00\u59CB\u5012\u8BA1\u65F6</td><td><em>() =&gt; void</em></td></tr><tr><td>pause</td><td>\u6682\u505C\u5012\u8BA1\u65F6</td><td><em>() =&gt; void</em></td></tr><tr><td>reset</td><td>\u91CD\u7F6E\u5012\u8BA1\u65F6\uFF0C\u652F\u6301\u4F20\u5165\u65B0\u7684\u5012\u8BA1\u65F6\u65F6\u957F</td><td><em>(time?: number): void</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="currenttime-ge-shi" tabindex="-1">CurrentTime \u683C\u5F0F</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>total</td><td>\u5269\u4F59\u603B\u65F6\u95F4\uFF08\u5355\u4F4D\u6BEB\u79D2\uFF09</td><td><em>number</em></td></tr><tr><td>days</td><td>\u5269\u4F59\u5929\u6570</td><td><em>number</em></td></tr><tr><td>hours</td><td>\u5269\u4F59\u5C0F\u65F6</td><td><em>number</em></td></tr><tr><td>minutes</td><td>\u5269\u4F59\u5206\u949F</td><td><em>number</em></td></tr><tr><td>seconds</td><td>\u5269\u4F59\u79D2\u6570</td><td><em>number</em></td></tr><tr><td>milliseconds</td><td>\u5269\u4F59\u6BEB\u79D2</td><td><em>number</em></td></tr></tbody></table></div>`,10),e=[p],i={__name:"use-count-down.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(r,h)=>(n(),a("div",l,e))}};export{i as default};
