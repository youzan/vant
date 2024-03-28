import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},p=t(`<h1>Radio</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Single selection among multiple options.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RadioGroup</span>, <span class="hljs-title class_">Radio</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Radio</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">RadioGroup</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>Use <code>v-model</code> to bind the name of checked radio.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;1&#39;</span>);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="horizontal" tabindex="-1">Horizontal</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-shape" tabindex="-1">Custom Shape</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">checked-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">checked-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-icon-size" tabindex="-1">Custom Icon Size</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;24px&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;24px&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-icon" tabindex="-1">Custom Icon</h3><p>Use icon slot to custom icon</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    Radio 1
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;img-icon&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.checked ? activeIcon : inactiveIcon&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    Radio 2
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;img-icon&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.checked ? activeIcon : inactiveIcon&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.img-icon</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;1&#39;</span>);
    <span class="hljs-keyword">return</span> {
      checked,
      <span class="hljs-attr">activeIcon</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&#39;</span>,
      <span class="hljs-attr">inactiveIcon</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png&#39;</span>,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="disable-label-click" tabindex="-1">Disable Label Click</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">label-disabled</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">label-disabled</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="inside-a-cell" tabindex="-1">Inside a Cell</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Radio 1&quot;</span> <span class="hljs-attr">clickable</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;checked = &#39;1&#39;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Radio 2&quot;</span> <span class="hljs-attr">clickable</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;checked = &#39;2&#39;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">RadioProps</span>,
  <span class="hljs-title class_">RadioShape</span>,
  <span class="hljs-title class_">RadioGroupProps</span>,
  <span class="hljs-title class_">RadioLabelPosition</span>,
  <span class="hljs-title class_">RadioGroupDirection</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="radio-props" tabindex="-1">Radio Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>Radio name, usually a unique string or number</td><td><em>any</em></td><td>-</td></tr><tr><td>shape</td><td>Can be set to <code>square</code></td><td><em>string</em></td><td><code>round</code></td></tr><tr><td>disabled</td><td>Whether to disable radio</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>label-disabled</td><td>Whether to disable label click</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>label-position</td><td>Can be set to <code>left</code></td><td><em>string</em></td><td><code>right</code></td></tr><tr><td>icon-size</td><td>Icon size</td><td><em>number | string</em></td><td><code>20px</code></td></tr><tr><td>checked-color</td><td>Checked color</td><td><em>string</em></td><td><code>#1989fa</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="radiogroup-props" tabindex="-1">RadioGroup Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Name of checked radio</td><td><em>any</em></td><td>-</td></tr><tr><td>disabled</td><td>Disable all radios</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>direction</td><td>Direction, can be set to <code>horizontal</code></td><td><em>string</em></td><td><code>vertical</code></td></tr><tr><td>icon-size</td><td>Icon size of all radios</td><td><em>number | string</em></td><td><code>20px</code></td></tr><tr><td>checked-color</td><td>Checked color of all radios</td><td><em>string</em></td><td><code>#1989fa</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="radio-events" tabindex="-1">Radio Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>click</td><td>Emitted when radio is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="radiogroup-events" tabindex="-1">RadioGroup Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>Emitted when value changed</td><td><em>name: string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="radio-slots" tabindex="-1">Radio Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>default</td><td>Custom label</td><td>-</td></tr><tr><td>icon</td><td>Custom icon</td><td><em>{ checked: boolean, disabled: boolean }</em></td></tr></tbody></table></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-radio-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-radio-border-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-radio-transition-duration</td><td><em>var(--van-animation-duration-fast)</em></td><td>-</td></tr><tr><td>--van-radio-label-margin</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-radio-label-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-radio-checked-icon-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-radio-disabled-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-radio-disabled-label-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-radio-disabled-background-color</td><td><em>var(--van-border-color)</em></td><td>-</td></tr></tbody></table></div>`,22),e=[p],i={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(o,r)=>(a(),n("div",l,e))}};export{i as default};
