import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const i={class:"van-doc-markdown-body"},l=t(`<h1>usePageVisibility</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u83B7\u53D6\u9875\u9762\u7684\u53EF\u89C1\u72B6\u6001\u3002</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { usePageVisibility } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> pageVisibility = <span class="hljs-title function_">usePageVisibility</span>();

    <span class="hljs-title function_">watch</span>(pageVisibility, <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;visibility: &#39;</span>, value);
    });
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">VisibilityState</span> = <span class="hljs-string">&#39;visible&#39;</span> | <span class="hljs-string">&#39;hidden&#39;</span>;

<span class="hljs-keyword">function</span> <span class="hljs-title function_">usePageVisibility</span>(<span class="hljs-params"></span>): <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-title class_">VisibilityState</span>&gt;;
</code></pre></div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">\u8FD4\u56DE\u503C</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>visibilityState</td><td>\u9875\u9762\u5F53\u524D\u7684\u53EF\u89C1\u72B6\u6001\uFF0C<code>visible</code> \u4E3A\u53EF\u89C1\uFF0C<code>hidden</code> \u4E3A\u9690\u85CF</td><td><em>Ref&lt;VisibilityState&gt;</em></td></tr></tbody></table></div>`,7),e=[l],r={__name:"use-page-visibility.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(d,o)=>(a(),n("div",i,e))}};export{r as default};
