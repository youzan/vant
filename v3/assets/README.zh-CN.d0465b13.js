import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},p=t(`<h1>TreeSelect \u5206\u7C7B\u9009\u62E9</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u4ECE\u4E00\u7EC4\u76F8\u5173\u8054\u7684\u6570\u636E\u96C6\u5408\u4E2D\u8FDB\u884C\u9009\u62E9\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TreeSelect</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TreeSelect</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="dan-xuan-mo-shi" tabindex="-1">\u5355\u9009\u6A21\u5F0F</h3><p><code>item</code> \u4E3A\u5206\u7C7B\u663E\u793A\u6240\u9700\u7684\u6570\u636E\uFF0C\u6570\u636E\u683C\u5F0F\u89C1\u4E0B\u65B9\u793A\u4F8B\u3002<code>main-active-index</code> \u8868\u793A\u5DE6\u4FA7\u9AD8\u4EAE\u9009\u9879\u7684\u7D22\u5F15\uFF0C<code>active-id</code> \u8868\u793A\u53F3\u4FA7\u9AD8\u4EAE\u9009\u9879\u7684 id\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tree-select</span>
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
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">1</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">2</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5B81\u6CE2&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
        ],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6C5F\u82CF&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5357\u4EAC&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">4</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u65E0\u9521&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">5</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5F90\u5DDE&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">6</span> },
        ],
      },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u798F\u5EFA&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    ];

    <span class="hljs-keyword">return</span> {
      items,
      activeId,
      activeIndex,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="duo-xuan-mo-shi" tabindex="-1">\u591A\u9009\u6A21\u5F0F</h3><p><code>active-id</code> \u4E3A\u6570\u7EC4\u683C\u5F0F\u65F6\uFF0C\u53EF\u4EE5\u9009\u4E2D\u591A\u4E2A\u53F3\u4FA7\u9009\u9879\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tree-select</span>
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
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">1</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">2</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5B81\u6CE2&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
        ],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6C5F\u82CF&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5357\u4EAC&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">4</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u65E0\u9521&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">5</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5F90\u5DDE&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">6</span> },
        ],
      },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u798F\u5EFA&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    ];

    <span class="hljs-keyword">return</span> {
      items,
      activeId,
      activeIndex,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-nei-rong" tabindex="-1">\u81EA\u5B9A\u4E49\u5185\u5BB9</h3><p>\u901A\u8FC7 <code>content</code> \u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u53F3\u4FA7\u533A\u57DF\u7684\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tree-select</span>
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
      <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5206\u7EC4 1&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5206\u7EC4 2&#39;</span> }],
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="hui-biao-ti-shi" tabindex="-1">\u5FBD\u6807\u63D0\u793A</h3><p>\u8BBE\u7F6E <code>dot</code> \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u56FE\u6807\u53F3\u4E0A\u89D2\u5C55\u793A\u4E00\u4E2A\u5C0F\u7EA2\u70B9\uFF1B\u8BBE\u7F6E <code>badge</code> \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u56FE\u6807\u53F3\u4E0A\u89D2\u5C55\u793A\u76F8\u5E94\u7684\u5FBD\u6807\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tree-select</span>
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
          <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">1</span> },
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">2</span> },
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5B81\u6CE2&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
          ],
          <span class="hljs-attr">dot</span>: <span class="hljs-literal">true</span>,
        },
        {
          <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6C5F\u82CF&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5357\u4EAC&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">4</span> },
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u65E0\u9521&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">5</span> },
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5F90\u5DDE&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">6</span> },
          ],
          <span class="hljs-attr">badge</span>: <span class="hljs-number">5</span>,
        },
      ],
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>items</td><td>\u5206\u7C7B\u663E\u793A\u6240\u9700\u7684\u6570\u636E</td><td><em>TreeSelectItem[]</em></td><td><code>[]</code></td></tr><tr><td>height</td><td>\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A<code>px</code></td><td><em>number | string</em></td><td><code>300</code></td></tr><tr><td>main-active-index</td><td>\u5DE6\u4FA7\u9009\u4E2D\u9879\u7684\u7D22\u5F15</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>active-id</td><td>\u53F3\u4FA7\u9009\u4E2D\u9879\u7684 id\uFF0C\u652F\u6301\u4F20\u5165\u6570\u7EC4</td><td><em>number | string |<br>(number | string)[]</em></td><td><code>0</code></td></tr><tr><td>max</td><td>\u53F3\u4FA7\u9879\u6700\u5927\u9009\u4E2D\u4E2A\u6570</td><td><em>number | string</em></td><td><code>Infinity</code></td></tr><tr><td>selected-icon</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u680F\u9009\u4E2D\u72B6\u6001\u7684\u56FE\u6807</td><td><em>string</em></td><td><code>success</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click-nav</td><td>\u70B9\u51FB\u5DE6\u4FA7\u5BFC\u822A\u65F6\u89E6\u53D1</td><td><em>index: number</em></td></tr><tr><td>click-item</td><td>\u70B9\u51FB\u53F3\u4FA7\u9009\u62E9\u9879\u65F6\u89E6\u53D1</td><td><em>item: TreeSelectChild</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>content</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u533A\u57DF\u5185\u5BB9</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="treeselectitem-shu-ju-jie-gou" tabindex="-1">TreeSelectItem \u6570\u636E\u7ED3\u6784</h3><p><code>TreeSelectItem</code> \u6574\u4F53\u4E3A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u5185\u5305\u542B\u4E00\u7CFB\u5217\u63CF\u8FF0\u5206\u7C7B\u7684\u5BF9\u8C61\uFF0C\u6BCF\u4E2A\u5206\u7C7B\u91CC\uFF0C<code>text</code> \u8868\u793A\u5F53\u524D\u5206\u7C7B\u7684\u540D\u79F0\uFF0C<code>children</code> \u8868\u793A\u5206\u7C7B\u91CC\u7684\u53EF\u9009\u9879\u3002</p><pre><code class="language-js">[
  {
    <span class="hljs-comment">// \u5BFC\u822A\u540D\u79F0</span>
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6240\u6709\u57CE\u5E02&#39;</span>,
    <span class="hljs-comment">// \u5BFC\u822A\u540D\u79F0\u53F3\u4E0A\u89D2\u5FBD\u6807</span>
    <span class="hljs-attr">badge</span>: <span class="hljs-number">3</span>,
    <span class="hljs-comment">// \u662F\u5426\u5728\u5BFC\u822A\u540D\u79F0\u53F3\u4E0A\u89D2\u663E\u793A\u5C0F\u7EA2\u70B9</span>
    <span class="hljs-attr">dot</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-comment">// \u5BFC\u822A\u8282\u70B9\u989D\u5916\u7C7B\u540D</span>
    <span class="hljs-attr">className</span>: <span class="hljs-string">&#39;my-class&#39;</span>,
    <span class="hljs-comment">// \u8BE5\u5BFC\u822A\u4E0B\u6240\u6709\u7684\u53EF\u9009\u9879</span>
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-comment">// \u540D\u79F0</span>
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span>,
        <span class="hljs-comment">// id\uFF0C\u4F5C\u4E3A\u5339\u914D\u9009\u4E2D\u72B6\u6001\u7684\u6807\u8BC6\u7B26</span>
        <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
        <span class="hljs-comment">// \u7981\u7528\u9009\u9879</span>
        <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
      },
    ],
  },
];
</code></pre></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TreeSelectItem</span>, <span class="hljs-title class_">TreeSelectChild</span>, <span class="hljs-title class_">TreeSelectProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-tree-select-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-tree-select-nav-background-color</td><td><em>var(--van-background-color)</em></td><td>-</td></tr><tr><td>--van-tree-select-content-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-tree-select-nav-item-padding</td><td><em>14px var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-tree-select-item-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-tree-select-item-active-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-tree-select-item-disabled-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-tree-select-item-selected-size</td><td><em>16px</em></td><td>-</td></tr></tbody></table></div>`,16),e=[p],j={__name:"README.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(d,h)=>(a(),n("div",l,e))}};export{j as default};
