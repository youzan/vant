import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>useScrollParent</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Get the closest parent element that is scrollable.</p></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>
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
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useScrollParent</span>(<span class="hljs-params">
  element: Ref&lt;Element | <span class="hljs-literal">undefined</span>&gt;
</span>): <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-title class_">Element</span> | <span class="hljs-title class_">Window</span> | <span class="hljs-literal">undefined</span>&gt;;
</code></pre></div><div class="van-doc-card"><h3 id="params" tabindex="-1">Params</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>element</td><td>The current element</td><td><em>Ref&lt;Element&gt;</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="return-value" tabindex="-1">Return Value</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>scrollParent</td><td>The closest parent element that is scrollable</td><td><em>Ref&lt;Element&gt;</em></td></tr></tbody></table></div>`,8),c=[l],i={__name:"use-scroll-parent.en-US",setup(r,{expose:s}){return s({frontmatter:{}}),(o,d)=>(a(),t("div",e,c))}};export{i as default};
