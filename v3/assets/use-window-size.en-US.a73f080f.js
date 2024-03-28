import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=t(`<h1>useWindowSize</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Get the viewport width and height of the browser window, and update it automatically when the window size changes.</p></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useWindowSize } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> { width, height } = <span class="hljs-title function_">useWindowSize</span>();

    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(width.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; width of browser window</span>
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(height.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; height of browser window</span>

    <span class="hljs-title function_">watch</span>([width, height], <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;window resized&#39;</span>);
    });
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useWindowSize</span>(<span class="hljs-params"></span>): {
  <span class="hljs-attr">width</span>: <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">number</span>&gt;;
  <span class="hljs-attr">height</span>: <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">number</span>&gt;;
};
</code></pre></div><div class="van-doc-card"><h3 id="return-value" tabindex="-1">Return Value</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>width</td><td>The width of browser window</td><td><em>Ref&lt;number&gt;</em></td></tr><tr><td>height</td><td>The height of browser window</td><td><em>Ref&lt;number&gt;</em></td></tr></tbody></table></div>`,7),i=[l],r={__name:"use-window-size.en-US",setup(o,{expose:s}){return s({frontmatter:{}}),(c,h)=>(a(),n("div",e,i))}};export{r as default};
