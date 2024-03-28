import{o as s,a as e,y as n}from"./vue-libs.b44bc779.js";const a={class:"van-doc-markdown-body"},o=n(`<h1>useRect</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Get the size of an element and its position relative to the viewport, equivalent to <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect" target="_blank">Element.getBoundingClientRect</a>.</p></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, onMounted } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useRect } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();

    <span class="hljs-title function_">onMounted</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> rect = <span class="hljs-title function_">useRect</span>(root);
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(rect); <span class="hljs-comment">// -&gt; the size of an element and its position relative to the viewport</span>
    });

    <span class="hljs-keyword">return</span> { root };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useRect</span>(<span class="hljs-params">
  element: Element | Window | Ref&lt;Element | Window | <span class="hljs-literal">undefined</span>&gt;
</span>): <span class="hljs-title class_">DOMRect</span>;
</code></pre></div><div class="van-doc-card"><h3 id="return-value" tabindex="-1">Return Value</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>width</td><td>Width of the element</td><td><em>number</em></td></tr><tr><td>height</td><td>Height of the element</td><td><em>number</em></td></tr><tr><td>top</td><td>The distance from the top to the top-left of the viewport</td><td><em>number</em></td></tr><tr><td>left</td><td>The distance from the left to the top-left of the viewport</td><td><em>number</em></td></tr><tr><td>right</td><td>The distance from the right to the top-left of the viewport</td><td><em>number</em></td></tr><tr><td>bottom</td><td>The distance from the bottom to the top-left of the viewport</td><td><em>number</em></td></tr></tbody></table></div>`,7),l=[o],h={__name:"use-rect.en-US",setup(d,{expose:t}){return t({frontmatter:{}}),(c,p)=>(s(),e("div",a,l))}};export{h as default};
