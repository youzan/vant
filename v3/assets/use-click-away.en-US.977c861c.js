import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=t(`<h1>useClickAway</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Triggers a callback when user clicks outside of the target element.</p></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="custom-event" tabindex="-1">Custom Event</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>
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
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Options</span> = {
  eventName?: <span class="hljs-built_in">string</span>;
};

<span class="hljs-keyword">function</span> <span class="hljs-title function_">useClickAway</span>(<span class="hljs-params">
  target: Element | Ref&lt;Element | <span class="hljs-literal">undefined</span>&gt;,
  listener: EventListener,
  options?: Options
</span>): <span class="hljs-built_in">void</span>;
</code></pre></div><div class="van-doc-card"><h3 id="params" tabindex="-1">Params</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>target</td><td>Target element, support multiple elements</td><td><em>Element | Ref&lt;Element&gt; | Array&lt;Element | Ref&lt;Element&gt;&gt;</em></td><td>-</td></tr><tr><td>listener</td><td>Callback function when the outside is clicked</td><td><em>EventListener</em></td><td>-</td></tr><tr><td>options</td><td>Options</td><td><em>Options</em></td><td><code>{ eventName: &#39;click&#39; }</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>eventName</td><td>Event name</td><td><em>string</em></td><td><code>click</code></td></tr></tbody></table></div>`,9),p=[l],h={__name:"use-click-away.en-US",setup(c,{expose:s}){return s({frontmatter:{}}),(d,r)=>(a(),n("div",e,p))}};export{h as default};
