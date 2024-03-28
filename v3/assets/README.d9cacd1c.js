import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>Slider</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to select a value within a given range.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Slider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Slider</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">50</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;Current value: &#39;</span> + value);
    <span class="hljs-keyword">return</span> {
      value,
      onChange,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="dual-thumb" tabindex="-1">Dual thumb</h3><p>Add <code>range</code> attribute to open dual thumb mode.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">range</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// value must be an Array</span>
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>([<span class="hljs-number">10</span>, <span class="hljs-number">50</span>]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;Current value: &#39;</span> + value);
    <span class="hljs-keyword">return</span> {
      value,
      onChange,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="range" tabindex="-1">Range</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;-50&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="step-size" tabindex="-1">Step size</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;10&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-style" tabindex="-1">Custom style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">bar-height</span>=<span class="hljs-string">&quot;4px&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-button" tabindex="-1">Custom button</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-button&quot;</span>&gt;</span>{{ value }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-slider</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.custom-button</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">26px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">18px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#ee0a24</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">100px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="vertical" tabindex="-1">Vertical</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;150px&#39; }&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">vertical</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
    <span class="hljs-attr">range</span>
    <span class="hljs-attr">vertical</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-left: 100px;&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">50</span>);
    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>([<span class="hljs-number">10</span>, <span class="hljs-number">50</span>]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;Current value: &#39;</span> + value);
    <span class="hljs-keyword">return</span> {
      value,
      value2,
      onChange,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Current value</td><td><em>number | [number, number]</em></td><td><code>0</code></td></tr><tr><td>max</td><td>Max value</td><td><em>number | string</em></td><td><code>100</code></td></tr><tr><td>min</td><td>Min value</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>step</td><td>Step size</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>bar-height</td><td>Height of bar</td><td><em>number | string</em></td><td><code>2px</code></td></tr><tr><td>button-size</td><td>Button size</td><td><em>number | string</em></td><td><code>24px</code></td></tr><tr><td>active-color</td><td>Active color of bar</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>inactive-color</td><td>Inactive color of bar</td><td><em>string</em></td><td><code>#e5e5e5</code></td></tr><tr><td>range</td><td>Whether to enable dual thumb mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>reverse <code>v3.2.1</code></td><td>Whether to reverse slider</td><td><code>false</code></td><td></td></tr><tr><td>disabled</td><td>Whether to disable slider</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly <code>v3.0.5</code></td><td>Whether to be readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>vertical</td><td>Whether to display slider vertically</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>update:model-value</td><td>Emitted when value is changing</td><td><em>value: number</em></td></tr><tr><td>change</td><td>Emitted after value changed</td><td><em>value: number</em></td></tr><tr><td>drag-start</td><td>Emitted when start dragging</td><td><em>event: TouchEvent</em></td></tr><tr><td>drag-end</td><td>Emitted when end dragging</td><td><em>event: TouchEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>button</td><td>Custom button</td><td><em>{ value: number }</em></td></tr><tr><td>left-button <code>v3.1.3</code></td><td>Custom left button in range mode</td><td><em>{ value: number }</em></td></tr><tr><td>right-button <code>v3.1.3</code></td><td>Custom right button in range mode</td><td><em>{ value: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SliderProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-slider-active-background-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-slider-inactive-background-color</td><td><em>var(--van-gray-3)</em></td><td>-</td></tr><tr><td>--van-slider-disabled-opacity</td><td><em>var(--van-disabled-opacity)</em></td><td>-</td></tr><tr><td>--van-slider-bar-height</td><td><em>2px</em></td><td>-</td></tr><tr><td>--van-slider-button-width</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-slider-button-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-slider-button-border-radius</td><td><em>50%</em></td><td>-</td></tr><tr><td>--van-slider-button-background-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-slider-button-box-shadow</td><td><em>0 1px 2px rgba(0, 0, 0, 0.5)</em></td><td>-</td></tr></tbody></table></div>`,19),d=[l],i={__name:"README",setup(p,{expose:s}){return s({frontmatter:{}}),(c,o)=>(a(),t("div",e,d))}};export{i as default};
