import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>Switch</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to switch between open and closed states.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Switch</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Switch</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="loading" tabindex="-1">Loading</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">loading</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-size" tabindex="-1">Custom Size</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;#dcdee0&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-node" tabindex="-1">Custom Node</h3><p>Using <code>node</code> slot to custom the content of the node.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">node</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon-wrapper&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;checked ? &#39;success&#39; : &#39;cross&#39;&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-switch</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.icon-wrapper</span> {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">justify-content</span>: center;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
  }

  <span class="hljs-selector-class">.icon-wrapper</span> <span class="hljs-selector-class">.van-icon-success</span> {
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">32px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--van-blue);
  }

  <span class="hljs-selector-class">.icon-wrapper</span> <span class="hljs-selector-class">.van-icon-cross</span> {
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">32px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--van-gray-<span class="hljs-number">5</span>);
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="async-control" tabindex="-1">Async Control</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;checked&quot;</span> @<span class="hljs-attr">update:model-value</span>=<span class="hljs-string">&quot;onUpdateValue&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onUpdateValue</span> = (<span class="hljs-params">newValue</span>) =&gt; {
      <span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">confirm</span>({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;Confirm&#39;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Are you sure to toggle switch?&#39;</span>,
      }).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
        checked.<span class="hljs-property">value</span> = newValue;
      });
    };

    <span class="hljs-keyword">return</span> {
      checked,
      onUpdateValue,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="inside-a-cell" tabindex="-1">Inside a Cell</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Check status of Switch</td><td><em>ActiveValue | InactiveValue</em></td><td><code>false</code></td></tr><tr><td>loading</td><td>Whether to show loading icon</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disabled</td><td>Whether to disable switch</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>size</td><td>Size of switch</td><td><em>number | string</em></td><td><code>30px</code></td></tr><tr><td>active-color</td><td>Background color when active</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>inactive-color</td><td>Background color when inactive</td><td><em>string</em></td><td><code>white</code></td></tr><tr><td>active-value</td><td>Value when active</td><td><em>any</em></td><td><code>true</code></td></tr><tr><td>inactive-value</td><td>Value when inactive</td><td><em>any</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>Emitted when check status changed</td><td><em>value: any</em></td></tr><tr><td>click</td><td>Emitted when component is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>node <code>v3.5.0</code></td><td>Custom the content of node</td><td>-</td></tr><tr><td>background <code>v3.5.0</code></td><td>Custom the background of switch</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SwitchProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-switch-size</td><td><em>30px</em></td><td>-</td></tr><tr><td>--van-switch-width</td><td><em>2em</em></td><td>-</td></tr><tr><td>--van-switch-height</td><td><em>1em</em></td><td>-</td></tr><tr><td>--van-switch-node-size</td><td><em>1em</em></td><td>-</td></tr><tr><td>--van-switch-node-background-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-switch-node-box-shadow</td><td><em>0 3px 1px 0 rgba(0, 0, 0, 0.05)</em></td><td>-</td></tr><tr><td>--van-switch-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-switch-on-background-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-switch-transition-duration</td><td><em>var(--van-animation-duration-base)</em></td><td>-</td></tr><tr><td>--van-switch-disabled-opacity</td><td><em>var(--van-disabled-opacity)</em></td><td>-</td></tr><tr><td>--van-switch-border</td><td><em>var(--van-border-width-base) solid rgba(0, 0, 0, 0.1)</em></td><td>-</td></tr></tbody></table></div>`,19),c=[l],i={__name:"README",setup(d,{expose:s}){return s({frontmatter:{}}),(o,r)=>(a(),t("div",e,c))}};export{i as default};
