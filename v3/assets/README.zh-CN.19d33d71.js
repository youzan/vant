import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},p=n(`<h1>Popover \u6C14\u6CE1\u5F39\u51FA\u6846</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5F39\u51FA\u5F0F\u7684\u6C14\u6CE1\u83DC\u5355\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Popover</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Popover</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u5F53 Popover \u5F39\u51FA\u65F6\uFF0C\u4F1A\u57FA\u4E8E <code>reference</code> \u63D2\u69FD\u7684\u5185\u5BB9\u8FDB\u884C\u5B9A\u4F4D\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u6D45\u8272\u98CE\u683C<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-comment">// \u901A\u8FC7 actions \u5C5E\u6027\u6765\u5B9A\u4E49\u83DC\u5355\u9009\u9879</span>
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span> },
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">action</span>) =&gt; <span class="hljs-title class_">Toast</span>(action.<span class="hljs-property">text</span>);

    <span class="hljs-keyword">return</span> {
      actions,
      onSelect,
      showPopover,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shen-se-feng-ge" tabindex="-1">\u6DF1\u8272\u98CE\u683C</h3><p>Popover \u652F\u6301\u6D45\u8272\u548C\u6DF1\u8272\u4E24\u79CD\u98CE\u683C\uFF0C\u9ED8\u8BA4\u4E3A\u6D45\u8272\u98CE\u683C\uFF0C\u5C06 <code>theme</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3A <code>dark</code> \u53EF\u5207\u6362\u4E3A\u6DF1\u8272\u98CE\u683C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u6DF1\u8272\u98CE\u683C<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      actions,
      showPopover,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="dan-chu-wei-zhi" tabindex="-1">\u5F39\u51FA\u4F4D\u7F6E</h3><p>\u901A\u8FC7 <code>placement</code> \u5C5E\u6027\u6765\u63A7\u5236\u6C14\u6CE1\u7684\u5F39\u51FA\u4F4D\u7F6E\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span> /&gt;</span>
</code></pre><p><code>placement</code> \u652F\u6301\u4EE5\u4E0B\u503C\uFF1A</p><pre><code class="language-bash">top           <span class="hljs-comment"># \u9876\u90E8\u4E2D\u95F4\u4F4D\u7F6E</span>
top-start     <span class="hljs-comment"># \u9876\u90E8\u5DE6\u4FA7\u4F4D\u7F6E</span>
top-end       <span class="hljs-comment"># \u9876\u90E8\u53F3\u4FA7\u4F4D\u7F6E</span>
left          <span class="hljs-comment"># \u5DE6\u4FA7\u4E2D\u95F4\u4F4D\u7F6E</span>
left-start    <span class="hljs-comment"># \u5DE6\u4FA7\u4E0A\u65B9\u4F4D\u7F6E</span>
left-end      <span class="hljs-comment"># \u5DE6\u4FA7\u4E0B\u65B9\u4F4D\u7F6E</span>
right         <span class="hljs-comment"># \u53F3\u4FA7\u4E2D\u95F4\u4F4D\u7F6E</span>
right-start   <span class="hljs-comment"># \u53F3\u4FA7\u4E0A\u65B9\u4F4D\u7F6E</span>
right-end     <span class="hljs-comment"># \u53F3\u4FA7\u4E0B\u65B9\u4F4D\u7F6E</span>
bottom        <span class="hljs-comment"># \u5E95\u90E8\u4E2D\u95F4\u4F4D\u7F6E</span>
bottom-start  <span class="hljs-comment"># \u5E95\u90E8\u5DE6\u4FA7\u4F4D\u7F6E</span>
bottom-end    <span class="hljs-comment"># \u5E95\u90E8\u53F3\u4FA7\u4F4D\u7F6E</span>
</code></pre></div><div class="van-doc-card"><h3 id="zhan-shi-tu-biao" tabindex="-1">\u5C55\u793A\u56FE\u6807</h3><p>\u5728 <code>actions</code> \u6570\u7EC4\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>icon</code> \u5B57\u6BB5\u6765\u5B9A\u4E49\u9009\u9879\u7684\u56FE\u6807\uFF0C\u652F\u6301\u4F20\u5165\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u5C55\u793A\u56FE\u6807<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;add-o&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;music-o&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;more-o&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      actions,
      showPopover,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-xuan-xiang" tabindex="-1">\u7981\u7528\u9009\u9879</h3><p>\u5728 <code>actions</code> \u6570\u7EC4\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>disabled</code> \u5B57\u6BB5\u6765\u7981\u7528\u67D0\u4E2A\u9009\u9879\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u7981\u7528\u9009\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      actions,
      showPopover,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-nei-rong" tabindex="-1">\u81EA\u5B9A\u4E49\u5185\u5BB9</h3><p>\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u53EF\u4EE5\u5728 Popover \u5185\u90E8\u653E\u7F6E\u4EFB\u610F\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span>&gt;</span>
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
      <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u9009\u9879&quot;</span>
      <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPopover = false&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">return</span> { showPopover };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:show</td><td>\u662F\u5426\u5C55\u793A\u6C14\u6CE1\u5F39\u51FA\u5C42</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>actions</td><td>\u9009\u9879\u5217\u8868</td><td><em>PopoverAction[]</em></td><td><code>[]</code></td></tr><tr><td>placement</td><td>\u5F39\u51FA\u4F4D\u7F6E</td><td><em>PopoverPlacement</em></td><td><code>bottom</code></td></tr><tr><td>theme</td><td>\u4E3B\u9898\u98CE\u683C\uFF0C\u53EF\u9009\u503C\u4E3A <code>dark</code></td><td><em>PopoverTheme</em></td><td><code>light</code></td></tr><tr><td>trigger</td><td>\u89E6\u53D1\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>manual</code></td><td><em>PopoverTrigger</em></td><td><code>click</code></td></tr><tr><td>duration</td><td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u7981\u7528\u52A8\u753B</td><td><em>number | string</em></td><td><code>0.3</code></td></tr><tr><td>offset</td><td>\u51FA\u73B0\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF</td><td><em>[number, number]</em></td><td><code>[0, 8]</code></td></tr><tr><td>overlay</td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>overlay-class <code>v3.0.10</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlay-style <code>v3.0.10</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F</td><td><em>object</em></td><td>-</td></tr><tr><td>show-arrow <code>v3.2.2</code></td><td>\u662F\u5426\u5C55\u793A\u5C0F\u7BAD\u5934</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-action</td><td>\u662F\u5426\u5728\u70B9\u51FB\u9009\u9879\u540E\u5173\u95ED</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-outside</td><td>\u662F\u5426\u5728\u70B9\u51FB\u5916\u90E8\u5143\u7D20\u540E\u5173\u95ED\u83DC\u5355</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-overlay <code>v3.0.10</code></td><td>\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED\u83DC\u5355</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>teleport</td><td>\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9\uFF0C\u7B49\u540C\u4E8E Teleport \u7EC4\u4EF6\u7684 <a href="https://v3.cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to \u5C5E\u6027</a></td><td><em>string | Element</em></td><td><code>body</code></td></tr><tr><td>icon-prefix <code>v3.0.17</code></td><td>\u56FE\u6807\u7C7B\u540D\u524D\u7F00\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">class-prefix \u5C5E\u6027</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="popoveraction-shu-ju-jie-gou" tabindex="-1">PopoverAction \u6570\u636E\u7ED3\u6784</h3><p><code>actions</code> \u5C5E\u6027\u662F\u4E00\u4E2A\u7531\u5BF9\u8C61\u6784\u6210\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u5217\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A</p><table><thead><tr><th>\u952E\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>text</td><td>\u9009\u9879\u6587\u5B57</td><td><em>string</em></td></tr><tr><td>icon</td><td>\u6587\u5B57\u5DE6\u4FA7\u7684\u56FE\u6807\uFF0C\u652F\u6301\u4F20\u5165\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td><td><em>string</em></td></tr><tr><td>color</td><td>\u9009\u9879\u6587\u5B57\u989C\u8272</td><td><em>string</em></td></tr><tr><td>disabled</td><td>\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001</td><td><em>boolean</em></td></tr><tr><td>className</td><td>\u4E3A\u5BF9\u5E94\u9009\u9879\u6DFB\u52A0\u989D\u5916\u7684\u7C7B\u540D</td><td><em>string | Array | object</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>select</td><td>\u70B9\u51FB\u9009\u9879\u65F6\u89E6\u53D1</td><td><em>action: PopoverAction, index: number</em></td></tr><tr><td>open</td><td>\u6253\u5F00\u83DC\u5355\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>close</td><td>\u5173\u95ED\u83DC\u5355\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>opened</td><td>\u6253\u5F00\u83DC\u5355\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>-</td></tr><tr><td>closed</td><td>\u5173\u95ED\u83DC\u5355\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>-</td></tr><tr><td>click-overlay</td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9</td><td>-</td></tr><tr><td>reference</td><td>\u89E6\u53D1 Popover \u663E\u793A\u7684\u5143\u7D20\u5185\u5BB9</td><td>-</td></tr><tr><td>action <code>v3.4.0</code></td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u5185\u5BB9</td><td><em>{ action: PopoverAction, index: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">PopoverProps</span>,
  <span class="hljs-title class_">PopoverTheme</span>,
  <span class="hljs-title class_">PopoverAction</span>,
  <span class="hljs-title class_">PopoverTrigger</span>,
  <span class="hljs-title class_">PopoverPlacement</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-popover-arrow-size</td><td><em>6px</em></td><td>-</td></tr><tr><td>--van-popover-border-radius</td><td><em>var(--van-border-radius-lg)</em></td><td>-</td></tr><tr><td>--van-popover-action-width</td><td><em>128px</em></td><td>-</td></tr><tr><td>--van-popover-action-height</td><td><em>44px</em></td><td>-</td></tr><tr><td>--van-popover-action-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-popover-action-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-popover-action-icon-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-popover-light-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-popover-light-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-popover-light-action-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-popover-dark-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-popover-dark-background-color</td><td><em>#4a4a4a</em></td><td>-</td></tr><tr><td>--van-popover-dark-action-disabled-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="popover-de-dian-ji-shi-jian-wu-fa-zheng-que-chu-fa" tabindex="-1">Popover \u7684\u70B9\u51FB\u4E8B\u4EF6\u65E0\u6CD5\u6B63\u786E\u89E6\u53D1\uFF1F</h3><p>\u8FD9\u79CD\u60C5\u51B5\u901A\u5E38\u662F\u7531\u4E8E\u9879\u76EE\u4E2D\u5F15\u5165\u4E86 <code>fastclick</code> \u5E93\u5BFC\u81F4\u7684\u3002\u5EFA\u8BAE\u79FB\u9664 <code>fastclick</code>\uFF0C\u6216\u8005\u914D\u7F6E <code>fastclick</code> \u7684 <a href="https://github.com/ftlabs/fastclick#advanced" target="_blank">ignore \u89C4\u5219</a>\u3002</p></div>`,20),e=[p],i={__name:"README.zh-CN",setup(o,{expose:s}){return s({frontmatter:{}}),(c,r)=>(a(),t("div",l,e))}};export{i as default};
