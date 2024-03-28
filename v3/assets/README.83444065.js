import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>Lazyload</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>When the page needs to load a large amount of content, delay loading the content outside the visible area of the page to make the page load smoother.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Lazyload</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>);

<span class="hljs-comment">// with options</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>, {
  <span class="hljs-attr">lazyComponent</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;img in imageList&quot;</span> <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;img&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">imageList</span>: [
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
      ],
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="lazyload-background-image" tabindex="-1">Lazyload Background Image</h3><p>Use <code>v-lazy:background-image</code> to set background url, and declare the height of the container.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;img in imageList&quot;</span> <span class="hljs-attr">v-lazy:background-image</span>=<span class="hljs-string">&quot;img&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="lazyload-component" tabindex="-1">Lazyload Component</h3><pre><code class="language-js"><span class="hljs-comment">// set \`lazyComponent\` option</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>, {
  <span class="hljs-attr">lazyComponent</span>: <span class="hljs-literal">true</span>,
});
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">lazy-component</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;img in imageList&quot;</span> <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;img&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">lazy-component</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>loading</td><td>Src of the image while loading</td><td><em>string</em></td><td>-</td></tr><tr><td>error</td><td>Src of the image upon load fail</td><td><em>string</em></td><td>-</td></tr><tr><td>preload</td><td>Proportion of pre-loading height</td><td><em>string</em></td><td>-</td></tr><tr><td>attempt</td><td>Attempts count</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td>listenEvents</td><td>Events that you want vue listen for</td><td><em>string[]</em></td><td><code>scroll</code>...</td></tr><tr><td>adapter</td><td>Dynamically modify the attribute of element</td><td><em>object</em></td><td>-</td></tr><tr><td>filter</td><td>The image&#39;s listener filter</td><td><em>object</em></td><td>-</td></tr><tr><td>lazyComponent</td><td>Lazyload component</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><blockquote><p>See more: <a href="https://github.com/hilongjw/vue-lazyload" target="_blank"> vue-lazyload </a></p></blockquote></div>`,9),o=[l],h={__name:"README",setup(p,{expose:s}){return s({frontmatter:{}}),(c,r)=>(a(),t("div",e,o))}};export{h as default};
