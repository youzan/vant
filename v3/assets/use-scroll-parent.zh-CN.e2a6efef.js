import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=t(`<h1>useScrollParent</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u83B7\u53D6\u5143\u7D20\u6700\u8FD1\u7684\u53EF\u6EDA\u52A8\u7236\u5143\u7D20\u3002</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useScrollParent, useEventListener } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();
    <span class="hljs-keyword">const</span> scrollParent = <span class="hljs-title function_">useScrollParent</span>(root);

    <span class="hljs-title function_">useEventListener</span>(
      <span class="hljs-string">&#39;scroll&#39;</span>,
      <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;scroll&#39;</span>);
      },
      { <span class="hljs-attr">target</span>: scrollParent }
    );

    <span class="hljs-keyword">return</span> { root };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useScrollParent</span>(<span class="hljs-params">
  element: Ref&lt;Element | <span class="hljs-literal">undefined</span>&gt;
</span>): <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-title class_">Element</span> | <span class="hljs-title class_">Window</span> | <span class="hljs-literal">undefined</span>&gt;;
</code></pre></div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">\u53C2\u6570</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>element</td><td>\u5F53\u524D\u5143\u7D20</td><td><em>Ref&lt;Element&gt;</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">\u8FD4\u56DE\u503C</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>scrollParent</td><td>\u6700\u8FD1\u7684\u53EF\u6EDA\u52A8\u7236\u5143\u7D20</td><td><em>Ref&lt;Element&gt;</em></td></tr></tbody></table></div>`,8),c=[e],i={__name:"use-scroll-parent.zh-CN",setup(r,{expose:s}){return s({frontmatter:{}}),(p,o)=>(a(),n("div",l,c))}};export{i as default};
