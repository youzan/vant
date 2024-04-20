import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>Popover</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to display some content on top of another.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Popover</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Popover</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Light Theme<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option 1&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option 2&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option 3&#39;</span> },
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">action</span>) =&gt; <span class="hljs-title class_">Toast</span>(action.<span class="hljs-property">text</span>);

    <span class="hljs-keyword">return</span> {
      actions,
      onSelect,
      showPopover,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="dark-theme" tabindex="-1">Dark theme</h3><p>Using the <code>theme</code> prop to change the style of Popover.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Dark Theme<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option 1&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option 2&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option 3&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      actions,
      showPopover,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="placement" tabindex="-1">Placement</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span> /&gt;</span>
</code></pre><p><code>placement</code> supports the following values:</p><pre><code class="language-bash">top           <span class="hljs-comment"># Top middle</span>
top-start     <span class="hljs-comment"># Top left</span>
top-end       <span class="hljs-comment"># Top right</span>
left          <span class="hljs-comment"># Left middle</span>
left-start    <span class="hljs-comment"># Left top</span>
left-end      <span class="hljs-comment"># Left bottom</span>
right         <span class="hljs-comment"># Right middle</span>
right-start   <span class="hljs-comment"># Right top</span>
right-end     <span class="hljs-comment"># Right bottom</span>
bottom        <span class="hljs-comment"># Bottom middle</span>
bottom-start  <span class="hljs-comment"># Bottom left</span>
bottom-end    <span class="hljs-comment"># Bottom right</span>
</code></pre></div><div class="van-doc-card"><h3 id="show-icon" tabindex="-1">Show Icon</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Show Icon<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option 1&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;add-o&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option 2&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;music-o&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option 3&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;more-o&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      actions,
      showPopover,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="disable-action" tabindex="-1">Disable Action</h3><p>Using the <code>disabled</code> option to disable an action.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Disable Action<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option 1&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option 2&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option 3&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      actions,
      showPopover,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-content" tabindex="-1">Custom Content</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span>
    <span class="hljs-attr">square</span>
    <span class="hljs-attr">clickable</span>
    <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span>
    <span class="hljs-attr">column-num</span>=<span class="hljs-string">&quot;3&quot;</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 240px;&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;i in 6&quot;</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>
      <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Option&quot;</span>
      <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPopover = false&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Custom Content<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">return</span> { showPopover };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:show</td><td>Whether to show Popover</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>actions</td><td>Actions</td><td><em>PopoverAction[]</em></td><td><code>[]</code></td></tr><tr><td>placement</td><td>Placement</td><td><em>PopoverPlacement</em></td><td><code>bottom</code></td></tr><tr><td>theme</td><td>Theme, can be set to <code>dark</code></td><td><em>PopoverTheme</em></td><td><code>light</code></td></tr><tr><td>trigger</td><td>Trigger mode, can be set to <code>manual</code></td><td><em>PopoverTrigger</em></td><td><code>click</code></td></tr><tr><td>duration</td><td>Transition duration, unit second</td><td><em>number | string</em></td><td><code>0.3</code></td></tr><tr><td>offset</td><td>Distance to reference</td><td><em>[number, number]</em></td><td><code>[0, 8]</code></td></tr><tr><td>overlay</td><td>Whether to show overlay</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>overlay-class <code>v3.0.10</code></td><td>Custom overlay class</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlay-style <code>v3.0.10</code></td><td>Custom overlay style</td><td><em>object</em></td><td>-</td></tr><tr><td>show-arrow <code>v3.2.2</code></td><td>Whether to show arrow</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-action</td><td>Whether to close when clicking action</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-outside</td><td>Whether to close when clicking outside</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-overlay <code>v3.0.10</code></td><td>Whether to close when clicking overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>teleport</td><td>Specifies a target element where Popover will be mounted</td><td><em>string | Element</em></td><td><code>body</code></td></tr><tr><td>icon-prefix <code>v3.0.17</code></td><td>Icon className prefix</td><td><em>string</em></td><td><code>van-icon</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="data-structure-of-popoveraction" tabindex="-1">Data Structure of PopoverAction</h3><table><thead><tr><th>Key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>text</td><td>Action Text</td><td><em>string</em></td></tr><tr><td>icon</td><td>Icon</td><td><em>string</em></td></tr><tr><td>color</td><td>Action Color</td><td><em>string</em></td></tr><tr><td>disabled</td><td>Whether to be disabled</td><td><em>boolean</em></td></tr><tr><td>className</td><td>className of the option</td><td><em>string | Array | object</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>select</td><td>Emitted when an action is clicked</td><td><em>action: PopoverAction, index: number</em></td></tr><tr><td>open</td><td>Emitted when opening Popover</td><td>-</td></tr><tr><td>close</td><td>Emitted when closing Popover</td><td>-</td></tr><tr><td>opened</td><td>Emitted when Popover is opened</td><td>-</td></tr><tr><td>closed</td><td>Emitted when Popover is closed</td><td>-</td></tr><tr><td>click-overlay</td><td>Emitted when overlay is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>default</td><td>Custom content</td><td>-</td></tr><tr><td>reference</td><td>Reference Element</td><td>-</td></tr><tr><td>action <code>v3.4.0</code></td><td>Custom the content of option</td><td><em>{ action: PopoverAction, index: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">PopoverProps</span>,
  <span class="hljs-title class_">PopoverTheme</span>,
  <span class="hljs-title class_">PopoverAction</span>,
  <span class="hljs-title class_">PopoverTrigger</span>,
  <span class="hljs-title class_">PopoverPlacement</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-popover-arrow-size</td><td><em>6px</em></td><td>-</td></tr><tr><td>--van-popover-border-radius</td><td><em>var(--van-border-radius-lg)</em></td><td>-</td></tr><tr><td>--van-popover-action-width</td><td><em>128px</em></td><td>-</td></tr><tr><td>--van-popover-action-height</td><td><em>44px</em></td><td>-</td></tr><tr><td>--van-popover-action-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-popover-action-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-popover-action-icon-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-popover-light-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-popover-light-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-popover-light-action-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-popover-dark-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-popover-dark-background-color</td><td><em>#4a4a4a</em></td><td>-</td></tr><tr><td>--van-popover-dark-action-disabled-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr></tbody></table></div>`,18),p=[l],i={__name:"README",setup(o,{expose:s}){return s({frontmatter:{}}),(c,r)=>(a(),t("div",e,p))}};export{i as default};
