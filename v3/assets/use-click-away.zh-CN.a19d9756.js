import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=t(`<h1>useClickAway</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u76D1\u542C\u70B9\u51FB\u5143\u7D20\u5916\u90E8\u7684\u4E8B\u4EF6\u3002</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useClickAway } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();
    <span class="hljs-title function_">useClickAway</span>(root, <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;click outside!&#39;</span>);
    });

    <span class="hljs-keyword">return</span> { root };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-shi-jian" tabindex="-1">\u81EA\u5B9A\u4E49\u4E8B\u4EF6</h3><p>\u901A\u8FC7 <code>eventName</code> \u9009\u9879\u53EF\u4EE5\u81EA\u5B9A\u4E49\u9700\u8981\u76D1\u542C\u7684\u4E8B\u4EF6\u7C7B\u578B\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useClickAway } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();
    <span class="hljs-title function_">useClickAway</span>(
      root,
      <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;touch outside!&#39;</span>);
      },
      { <span class="hljs-attr">eventName</span>: <span class="hljs-string">&#39;touchstart&#39;</span> }
    );

    <span class="hljs-keyword">return</span> { root };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Options</span> = {
  eventName?: <span class="hljs-built_in">string</span>;
};

<span class="hljs-keyword">function</span> <span class="hljs-title function_">useClickAway</span>(<span class="hljs-params">
  target: Element | Ref&lt;Element | <span class="hljs-literal">undefined</span>&gt;,
  listener: EventListener,
  options?: Options
</span>): <span class="hljs-built_in">void</span>;
</code></pre></div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">\u53C2\u6570</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>target</td><td>\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u652F\u6301\u4F20\u5165\u6570\u7EC4\u6765\u7ED1\u5B9A\u591A\u4E2A\u5143\u7D20</td><td><em>Element | Ref&lt;Element&gt; | Array&lt;Element | Ref&lt;Element&gt;&gt;</em></td><td>-</td></tr><tr><td>listener</td><td>\u70B9\u51FB\u5916\u90E8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td><em>EventListener</em></td><td>-</td></tr><tr><td>options</td><td>\u53EF\u9009\u7684\u914D\u7F6E\u9879</td><td><em>Options</em></td><td>\u89C1\u4E0B\u8868</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>eventName</td><td>\u76D1\u542C\u7684\u4E8B\u4EF6\u7C7B\u578B</td><td><em>string</em></td><td><code>click</code></td></tr></tbody></table></div>`,9),p=[e],h={__name:"use-click-away.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(o,i)=>(a(),n("div",l,p))}};export{h as default};
