import{o as t,a,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>Circle</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Circular progress bar component, and supports gradient color animation.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Circle</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Circle</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;30&quot;</span>
  <span class="hljs-attr">:speed</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;text&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, computed } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentRate = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> text = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> currentRate.<span class="hljs-property">value</span>.<span class="hljs-title function_">toFixed</span>(<span class="hljs-number">0</span>) + <span class="hljs-string">&#39;%&#39;</span>);

    <span class="hljs-keyword">return</span> {
      text,
      currentRate,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-width" tabindex="-1">Custom Width</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">:stroke-width</span>=<span class="hljs-string">&quot;60&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Custom Width&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">layer-color</span>=<span class="hljs-string">&quot;#ebedf0&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Custom Color&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="gradient" tabindex="-1">Gradient</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">:color</span>=<span class="hljs-string">&quot;gradientColor&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Gradient&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentRate = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> gradientColor = {
      <span class="hljs-string">&#39;0%&#39;</span>: <span class="hljs-string">&#39;#3fecff&#39;</span>,
      <span class="hljs-string">&#39;100%&#39;</span>: <span class="hljs-string">&#39;#6149f6&#39;</span>,
    };

    <span class="hljs-keyword">return</span> {
      currentRate,
      gradientColor,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="counter-clockwise" tabindex="-1">Counter Clockwise</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">:clockwise</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Counter Clockwise&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-size" tabindex="-1">Custom Size</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;120px&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Custom Size&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="start-position" tabindex="-1">Start Position</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;Left&quot;</span>
  <span class="hljs-attr">start-position</span>=<span class="hljs-string">&quot;left&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Right&quot;</span>
  <span class="hljs-attr">start-position</span>=<span class="hljs-string">&quot;right&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Bottom&quot;</span>
  <span class="hljs-attr">start-position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
/&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:current-rate</td><td>Current rate</td><td><em>number</em></td><td>-</td></tr><tr><td>rate</td><td>Target rate</td><td><em>number | string</em></td><td><code>100</code></td></tr><tr><td>size</td><td>Circle size</td><td><em>number | string</em></td><td><code>100px</code></td></tr><tr><td>color</td><td>Progress color, passing object to render gradient</td><td><em>string | object</em></td><td><code>#1989fa</code></td></tr><tr><td>layer-color</td><td>Layer color</td><td><em>string</em></td><td><code>white</code></td></tr><tr><td>fill</td><td>Fill color</td><td><em>string</em></td><td><code>none</code></td></tr><tr><td>speed</td><td>Animate speed\uFF08rate/s\uFF09</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>text</td><td>Text</td><td><em>string</em></td><td>-</td></tr><tr><td>stroke-width</td><td>Stroke width</td><td><em>number | string</em></td><td><code>40</code></td></tr><tr><td>stroke-linecap</td><td>Stroke linecap, can be set to <code>square</code> <code>butt</code></td><td><em>string</em></td><td><code>round</code></td></tr><tr><td>clockwise</td><td>Whether to be clockwise</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>start-position <code>v3.2.1</code></td><td>Progress start position, can be set to <code>left</code>\u3001<code>right</code>\u3001<code>bottom</code></td><td><em>CircleStartPosition</em></td><td><code>top</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>custom text content</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CircleProps</span>, <span class="hljs-title class_">CircleStartPosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-circle-size</td><td><em>100px</em></td><td>-</td></tr><tr><td>--van-circle-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-circle-layer-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-circle-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-circle-text-font-weight</td><td><em>var(--van-font-weight-bold)</em></td><td>-</td></tr><tr><td>--van-circle-text-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-circle-text-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr></tbody></table></div>`,17),r=[l],h={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(o,d)=>(t(),a("div",e,r))}};export{h as default};
