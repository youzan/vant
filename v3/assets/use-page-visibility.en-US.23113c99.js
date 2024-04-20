import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},i=n(`<h1>usePageVisibility</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Get the visible state of the page.</p></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { usePageVisibility } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> pageVisibility = <span class="hljs-title function_">usePageVisibility</span>();

    <span class="hljs-title function_">watch</span>(pageVisibility, <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;visibility: &#39;</span>, value);
    });
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">VisibilityState</span> = <span class="hljs-string">&#39;visible&#39;</span> | <span class="hljs-string">&#39;hidden&#39;</span>;

<span class="hljs-keyword">function</span> <span class="hljs-title function_">usePageVisibility</span>(<span class="hljs-params"></span>): <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-title class_">VisibilityState</span>&gt;;
</code></pre></div><div class="van-doc-card"><h3 id="return-value" tabindex="-1">Return Value</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>visibilityState</td><td>The current visible state of the page, could be <code>visible</code> or <code>hidden</code></td><td><em>Ref&lt;VisibilityState&gt;</em></td></tr></tbody></table></div>`,7),l=[i],r={__name:"use-page-visibility.en-US",setup(c,{expose:s}){return s({frontmatter:{}}),(d,o)=>(a(),t("div",e,l))}};export{r as default};
