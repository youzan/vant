import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=n(`<h1>DropdownMenu</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>The menu list that pops down downwards.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DropdownMenu</span>, <span class="hljs-title class_">DropdownItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">DropdownMenu</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">DropdownItem</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;a&#39;</span>);
    <span class="hljs-keyword">const</span> option1 = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> },
    ];
    <span class="hljs-keyword">const</span> option2 = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option A&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option B&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;b&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option C&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;c&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      value1,
      value2,
      option1,
      option2,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-content" tabindex="-1">Custom Content</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch1&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch2&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 5px 16px;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">block</span> <span class="hljs-attr">round</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>&gt;</span>
        Confirm
      <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> item = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> switch1 = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> switch2 = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> options = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Option3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> },
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params"></span>) =&gt; {
      item.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggle</span>();
    };

    <span class="hljs-keyword">return</span> {
      item,
      value,
      switch1,
      switch2,
      options,
      onConfirm,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-active-color" tabindex="-1">Custom Active Color</h3><p>Use <code>active-color</code> prop to custom active color of the title and options.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="expand-direction" tabindex="-1">Expand Direction</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;up&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="dropdownmenu-props" tabindex="-1">DropdownMenu Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>active-color</td><td>Active color of title and option</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td>direction</td><td>Expand direction, can be set to <code>up</code></td><td><em>string</em></td><td><code>down</code></td></tr><tr><td>z-index</td><td>z-index of menu item</td><td><em>number | string</em></td><td><code>10</code></td></tr><tr><td>duration</td><td>Transition duration, unit second</td><td><em>number | string</em></td><td><code>0.2</code></td></tr><tr><td>overlay</td><td>Whether to show overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-overlay</td><td>Whether to close when overlay is clicked</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-outside</td><td>Whether to close when outside is clicked</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="dropdownitem-props" tabindex="-1">DropdownItem Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Value of current option</td><td><em>number | string</em></td><td>-</td></tr><tr><td>title</td><td>Item title</td><td><em>string</em></td><td>Text of selected option</td></tr><tr><td>options</td><td>Options</td><td><em>Option[]</em></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>Whether to disable dropdown item</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lazy-render</td><td>Whether to lazy render util opened</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>title-class</td><td>Title class</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>teleport</td><td>Specifies a target element where DropdownItem will be mounted</td><td><em>string | Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="dropdownitem-events" tabindex="-1">DropdownItem Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted select option and value changed</td><td><em>value: number | string</em></td></tr><tr><td>open</td><td>Emitted when opening menu</td><td>-</td></tr><tr><td>close</td><td>Emitted when closing menu</td><td>-</td></tr><tr><td>opened</td><td>Emitted when menu is opened</td><td>-</td></tr><tr><td>closed</td><td>Emitted when menu is closed</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="dropdownitem-slots" tabindex="-1">DropdownItem Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Content</td></tr><tr><td>title</td><td>Custom title</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="dropdownitem-methods" tabindex="-1">DropdownItem Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get DropdownItem instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>toggle</td><td>Toggle display</td><td><em>show?: boolean</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">DropdownMenuProps</span>,
  <span class="hljs-title class_">DropdownItemProps</span>,
  <span class="hljs-title class_">DropdownItemOption</span>,
  <span class="hljs-title class_">DropdownItemInstance</span>,
  <span class="hljs-title class_">DropdownMenuDirection</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>DropdownItemInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">DropdownItemInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> dropdownItemRef = ref&lt;<span class="hljs-title class_">DropdownItemInstance</span>&gt;();

dropdownItemRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggle</span>();
</code></pre></div><div class="van-doc-card"><h3 id="data-structure-of-option" tabindex="-1">Data Structure of Option</h3><table><thead><tr><th>Key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>text</td><td>Text</td><td><em>string</em></td></tr><tr><td>value</td><td>Value</td><td><em>number | string</em></td></tr><tr><td>icon</td><td>Left icon</td><td><em>string</em></td></tr></tbody></table></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-dropdown-menu-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-box-shadow</td><td><em>0 2px 12px fade(var(--van-gray-7), 12)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-title-font-size</td><td><em>15px</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-title-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-title-active-text-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-title-disabled-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-title-padding</td><td><em>0 var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-title-line-height</td><td><em>var(--van-line-height-lg)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-option-active-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-content-max-height</td><td><em>80%</em></td><td>-</td></tr><tr><td>--van-dropdown-item-z-index</td><td><em>10</em></td><td>-</td></tr></tbody></table></div>`,19),p=[e],i={__name:"README",setup(d,{expose:s}){return s({frontmatter:{}}),(r,c)=>(a(),t("div",l,p))}};export{i as default};
