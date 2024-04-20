import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>Rate</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>The rate component is used for rating things.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Rate</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Rate</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-icon" tabindex="-1">Custom Icon</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;like&quot;</span> <span class="hljs-attr">void-icon</span>=<span class="hljs-string">&quot;like-o&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-style" tabindex="-1">Custom Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;25&quot;</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ffd21e&quot;</span>
  <span class="hljs-attr">void-icon</span>=<span class="hljs-string">&quot;star&quot;</span>
  <span class="hljs-attr">void-color</span>=<span class="hljs-string">&quot;#eee&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="half-star" tabindex="-1">Half Star</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">allow-half</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">2.5</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-count" tabindex="-1">Custom Count</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:count</span>=<span class="hljs-string">&quot;6&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="readonly" tabindex="-1">Readonly</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="readonly-half-star" tabindex="-1">Readonly Half Star</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3.3</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="change-event" tabindex="-1">Change Event</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;current value:&#39;</span> + value);
    <span class="hljs-keyword">return</span> {
      value,
      onChange,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Current rate</td><td><em>number</em></td><td>-</td></tr><tr><td>count</td><td>Count</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td>size</td><td>Icon size</td><td><em>number | string</em></td><td><code>20px</code></td></tr><tr><td>gutter</td><td>Icon gutter</td><td><em>number | string</em></td><td><code>4px</code></td></tr><tr><td>color</td><td>Selected color</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td>void-color</td><td>Void color</td><td><em>string</em></td><td><code>#c8c9cc</code></td></tr><tr><td>disabled-color</td><td>Disabled color</td><td><em>string</em></td><td><code>#c8c9cc</code></td></tr><tr><td>icon</td><td>Selected icon</td><td><em>string</em></td><td><code>star</code></td></tr><tr><td>void-icon</td><td>Void icon</td><td><em>string</em></td><td><code>star-o</code></td></tr><tr><td>icon-prefix</td><td>Icon className prefix</td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>allow-half</td><td>Whether to allow half star</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>Whether to be readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disabled</td><td>Whether to disable rate</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>touchable</td><td>Whether to allow select rate by touch gesture</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>Emitted when rate changed</td><td><em>currentValue: number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">RateProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-rate-icon-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-rate-icon-gutter</td><td><em>var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-rate-icon-void-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-rate-icon-full-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-rate-icon-disabled-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr></tbody></table></div>`,19),d=[l],i={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(p,o)=>(a(),t("div",e,d))}};export{i as default};
