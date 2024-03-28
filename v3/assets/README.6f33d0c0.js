import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=t(`<h1>TreeSelect</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to select from a set of related data sets.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TreeSelect</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TreeSelect</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="radio-mode" tabindex="-1">Radio Mode</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tree-select</span>
  <span class="hljs-attr">v-model:active-id</span>=<span class="hljs-string">&quot;activeId&quot;</span>
  <span class="hljs-attr">v-model:main-active-index</span>=<span class="hljs-string">&quot;activeIndex&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeId = <span class="hljs-title function_">ref</span>(<span class="hljs-number">1</span>);
    <span class="hljs-keyword">const</span> activeIndex = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> items = [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Group 1&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Delaware&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">1</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Florida&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">2</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Georqia&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
        ],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Group 2&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Alabama&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">4</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Kansas&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">5</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Louisiana&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">6</span> },
        ],
      },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Group 3&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    ];

    <span class="hljs-keyword">return</span> {
      items,
      activeId,
      activeIndex,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="multiple-mode" tabindex="-1">Multiple Mode</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tree-select</span>
  <span class="hljs-attr">v-model:active-id</span>=<span class="hljs-string">&quot;activeIds&quot;</span>
  <span class="hljs-attr">v-model:main-active-index</span>=<span class="hljs-string">&quot;activeIndex&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeId = <span class="hljs-title function_">ref</span>([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]);
    <span class="hljs-keyword">const</span> activeIndex = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> items = [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Group 1&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Delaware&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">1</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Florida&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">2</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Georqia&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
        ],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Group 2&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Alabama&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">4</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Kansas&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">5</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Louisiana&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">6</span> },
        ],
      },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Group 3&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    ];

    <span class="hljs-keyword">return</span> {
      items,
      activeId,
      activeIndex,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-content" tabindex="-1">Custom Content</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tree-select</span>
  <span class="hljs-attr">v-model:main-active-index</span>=<span class="hljs-string">&quot;activeIndex&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;55vw&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>
      <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;activeIndex === 0&quot;</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>
      <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;activeIndex === 1&quot;</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tree-select</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeIndex = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">return</span> {
      activeIndex,
      <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Group 1&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Group 2&#39;</span> }],
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="show-badge" tabindex="-1">Show Badge</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tree-select</span>
  <span class="hljs-attr">v-model:main-active-index</span>=<span class="hljs-string">&quot;activeIndex&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;55vw&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeIndex = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">return</span> {
      activeIndex,
      <span class="hljs-attr">items</span>: [
        {
          <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Group 1&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Delaware&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">1</span> },
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Florida&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">2</span> },
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Georqia&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
          ],
          <span class="hljs-attr">dot</span>: <span class="hljs-literal">true</span>,
        },
        {
          <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Group 2&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Alabama&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">4</span> },
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Kansas&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">5</span> },
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Louisiana&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">6</span> },
          ],
          <span class="hljs-attr">badge</span>: <span class="hljs-number">5</span>,
        },
      ],
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>items</td><td>Required datasets for the component</td><td><em>TreeSelectItem[]</em></td><td><code>[]</code></td></tr><tr><td>height</td><td>Height</td><td><em>number | string</em></td><td><code>300</code></td></tr><tr><td>main-active-index</td><td>The index of selected parent node</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>active-id</td><td>Id of selected item</td><td><em>number | string |<br>(number | string)[]</em></td><td><code>0</code></td></tr><tr><td>max</td><td>Maximum number of selected items</td><td><em>number | string</em></td><td><code>Infinity</code></td></tr><tr><td>selected-icon</td><td>Selected icon</td><td><em>string</em></td><td><code>success</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click-nav</td><td>Emitted when parent node is selected</td><td><em>index: number</em></td></tr><tr><td>click-item</td><td>Emitted when item is selected</td><td><em>item: TreeSelectChild</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>content</td><td>Custom right content</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="data-structure-of-treeselectitem" tabindex="-1">Data Structure of TreeSelectItem</h3><p><code>TreeSelectItem</code> should be an array contains specified tree objects.</p><p>In every tree object, <code>text</code> property defines <code>id</code> stands for the unique key while the <code>children</code> contains sub-tree objects.</p><pre><code class="language-js">[
  {
    <span class="hljs-comment">// name of the parent node</span>
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Group 1&#39;</span>,
    <span class="hljs-comment">// badge</span>
    <span class="hljs-attr">badge</span>: <span class="hljs-number">3</span>,
    <span class="hljs-comment">// Whether to show red dot</span>
    <span class="hljs-attr">dot</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-comment">// ClassName of parent node</span>
    <span class="hljs-attr">className</span>: <span class="hljs-string">&#39;my-class&#39;</span>,
    <span class="hljs-comment">// leaves of this parent node</span>
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-comment">// name of the leaf node</span>
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Washington&#39;</span>,
        <span class="hljs-comment">// id of the leaf node, component highlights leaf node by comparing the activeId with this.</span>
        <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
        <span class="hljs-comment">// disable options</span>
        <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Baltimore&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
      },
    ],
  },
];
</code></pre></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TreeSelectItem</span>, <span class="hljs-title class_">TreeSelectChild</span>, <span class="hljs-title class_">TreeSelectProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-tree-select-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-tree-select-nav-background-color</td><td><em>var(--van-background-color)</em></td><td>-</td></tr><tr><td>--van-tree-select-content-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-tree-select-nav-item-padding</td><td><em>14px var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-tree-select-item-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-tree-select-item-active-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-tree-select-item-disabled-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-tree-select-item-selected-size</td><td><em>16px</em></td><td>-</td></tr></tbody></table></div>`,16),p=[l],o={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(d,h)=>(a(),n("div",e,p))}};export{o as default};
