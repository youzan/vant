import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=t(`<h1>useToggle</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to switch between <code>true</code> and <code>false</code>.</p></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { useToggle } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> [state, toggle] = <span class="hljs-title function_">useToggle</span>();

    <span class="hljs-title function_">toggle</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; true</span>

    <span class="hljs-title function_">toggle</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; false</span>

    <span class="hljs-title function_">toggle</span>();
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; true</span>
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="default-value" tabindex="-1">Default Value</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { useToggle } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> [state, toggle] = <span class="hljs-title function_">useToggle</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; true</span>
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useToggle</span>(<span class="hljs-params">
  defaultValue: <span class="hljs-built_in">boolean</span>
</span>): [<span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">boolean</span>&gt;, <span class="hljs-function">(<span class="hljs-params">newValue: <span class="hljs-built_in">boolean</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>];
</code></pre></div><div class="van-doc-card"><h3 id="params" tabindex="-1">Params</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>defaultValue</td><td>Default value</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="return-value" tabindex="-1">Return Value</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>state</td><td>State</td><td><em>Ref&lt;boolean&gt;</em></td></tr><tr><td>toggle</td><td>Function to switch state</td><td><em>(newValue?: boolean) =&gt; void</em></td></tr></tbody></table></div>`,9),p=[e],r={__name:"use-toggle.en-US",setup(c,{expose:s}){return s({frontmatter:{}}),(d,i)=>(a(),n("div",l,p))}};export{r as default};
