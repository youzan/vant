import{o as t,a,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},d=n(`<h1>ActionSheet \u52A8\u4F5C\u9762\u677F</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5E95\u90E8\u5F39\u8D77\u7684\u6A21\u6001\u9762\u677F\uFF0C\u5305\u542B\u4E0E\u5F53\u524D\u60C5\u5883\u76F8\u5173\u7684\u591A\u4E2A\u9009\u9879\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ActionSheet</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionSheet</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u52A8\u4F5C\u9762\u677F\u901A\u8FC7 <code>actions</code> \u5C5E\u6027\u6765\u5B9A\u4E49\u9009\u9879\uFF0C<code>actions</code> \u5C5E\u6027\u662F\u4E00\u4E2A\u7531\u5BF9\u8C61\u6784\u6210\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u5217\uFF0C\u5BF9\u8C61\u683C\u5F0F\u89C1\u6587\u6863\u4E0B\u65B9\u8868\u683C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u57FA\u7840\u7528\u6CD5&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span> },
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">item</span>) =&gt; {
      <span class="hljs-comment">// \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u70B9\u51FB\u9009\u9879\u65F6\u4E0D\u4F1A\u81EA\u52A8\u6536\u8D77</span>
      <span class="hljs-comment">// \u53EF\u4EE5\u901A\u8FC7 close-on-click-action \u5C5E\u6027\u5F00\u542F\u81EA\u52A8\u6536\u8D77</span>
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      <span class="hljs-title class_">Toast</span>(item.<span class="hljs-property">name</span>);
    };

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      onSelect,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zhan-shi-qu-xiao-an-niu" tabindex="-1">\u5C55\u793A\u53D6\u6D88\u6309\u94AE</h3><p>\u8BBE\u7F6E <code>cancel-text</code> \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u5E95\u90E8\u5C55\u793A\u53D6\u6D88\u6309\u94AE\uFF0C\u70B9\u51FB\u540E\u5173\u95ED\u5F53\u524D\u9762\u677F\u5E76\u89E6\u53D1 <code>cancel</code> \u4E8B\u4EF6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>
  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>
  <span class="hljs-attr">close-on-click-action</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span> },
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u53D6\u6D88&#39;</span>);

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      onCancel,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zhan-shi-miao-shu-xin-xi" tabindex="-1">\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F</h3><p>\u901A\u8FC7 <code>description</code> \u53EF\u4EE5\u5728\u83DC\u5355\u9876\u90E8\u663E\u793A\u63CF\u8FF0\u4FE1\u606F\uFF0C\u901A\u8FC7\u9009\u9879\u7684 <code>subname</code> \u5C5E\u6027\u53EF\u4EE5\u5728\u9009\u9879\u6587\u5B57\u7684\u53F3\u4FA7\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>
  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u4FE1\u606F&quot;</span>
  <span class="hljs-attr">close-on-click-action</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span>, <span class="hljs-attr">subname</span>: <span class="hljs-string">&#39;\u63CF\u8FF0\u4FE1\u606F&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      show,
      actions,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-xiang-zhuang-tai" tabindex="-1">\u9009\u9879\u72B6\u6001</h3><p>\u53EF\u4EE5\u901A\u8FC7 <code>loading</code> \u548C <code>disabled</code> \u5C06\u9009\u9879\u8BBE\u7F6E\u4E3A\u52A0\u8F7D\u72B6\u6001\u6216\u7981\u7528\u72B6\u6001\uFF0C\u6216\u8005\u901A\u8FC7<code>color</code>\u8BBE\u7F6E\u9009\u9879\u7684\u989C\u8272</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>
  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>
  <span class="hljs-attr">close-on-click-action</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u7740\u8272\u9009\u9879&#39;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#ee0a24&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u7981\u7528\u9009\u9879&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u52A0\u8F7D\u9009\u9879&#39;</span>, <span class="hljs-attr">loading</span>: <span class="hljs-literal">true</span> },
    ];

    <span class="hljs-keyword">return</span> {
      show,
      actions,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-mian-ban" tabindex="-1">\u81EA\u5B9A\u4E49\u9762\u677F</h3><p>\u901A\u8FC7\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u9762\u677F\u7684\u5C55\u793A\u5185\u5BB9\uFF0C\u540C\u65F6\u53EF\u4EE5\u4F7F\u7528<code>title</code>\u5C5E\u6027\u5C55\u793A\u6807\u9898\u680F</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-sheet</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.content</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">16px</span> <span class="hljs-number">16px</span> <span class="hljs-number">160px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:show</td><td>\u662F\u5426\u663E\u793A\u52A8\u4F5C\u9762\u677F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>actions</td><td>\u9762\u677F\u9009\u9879\u5217\u8868</td><td><em>ActionSheetAction[]</em></td><td><code>[]</code></td></tr><tr><td>title</td><td>\u9876\u90E8\u6807\u9898</td><td><em>string</em></td><td>-</td></tr><tr><td>cancel-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td>-</td></tr><tr><td>description</td><td>\u9009\u9879\u4E0A\u65B9\u7684\u63CF\u8FF0\u4FE1\u606F</td><td><em>string</em></td><td>-</td></tr><tr><td>closeable</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-icon</td><td>\u5173\u95ED\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td><td><em>string</em></td><td><code>cross</code></td></tr><tr><td>duration</td><td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u7981\u7528\u52A8\u753B</td><td><em>number | string</em></td><td><code>0.3</code></td></tr><tr><td>round</td><td>\u662F\u5426\u663E\u793A\u5706\u89D2</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlay</td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlay-class</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlay-style</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F</td><td><em>object</em></td><td>-</td></tr><tr><td>lock-scroll</td><td>\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lazy-render</td><td>\u662F\u5426\u5728\u663E\u793A\u5F39\u5C42\u65F6\u624D\u6E32\u67D3\u8282\u70B9</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-popstate</td><td>\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-action</td><td>\u662F\u5426\u5728\u70B9\u51FB\u9009\u9879\u540E\u5173\u95ED</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>close-on-click-overlay</td><td>\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>safe-area-inset-bottom</td><td>\u662F\u5426\u5F00\u542F<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D</a></td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>teleport</td><td>\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9\uFF0C\u7B49\u540C\u4E8E Teleport \u7EC4\u4EF6\u7684 <a href="https://v3.cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to \u5C5E\u6027</a></td><td><em>string | Element</em></td><td>-</td></tr><tr><td>before-close <code>v3.1.4</code></td><td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE <code>false</code> \u53EF\u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u8FD4\u56DE Promise</td><td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="action-shu-ju-jie-gou" tabindex="-1">Action \u6570\u636E\u7ED3\u6784</h3><p><code>actions</code> \u5C5E\u6027\u662F\u4E00\u4E2A\u7531\u5BF9\u8C61\u6784\u6210\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u5217\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A</p><table><thead><tr><th>\u952E\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>name</td><td>\u6807\u9898</td><td><em>string</em></td></tr><tr><td>subname</td><td>\u4E8C\u7EA7\u6807\u9898</td><td><em>string</em></td></tr><tr><td>color</td><td>\u9009\u9879\u6587\u5B57\u989C\u8272</td><td><em>string</em></td></tr><tr><td>className</td><td>\u4E3A\u5BF9\u5E94\u5217\u6DFB\u52A0\u989D\u5916\u7684 class</td><td><em>string | Array | object</em></td></tr><tr><td>loading</td><td>\u662F\u5426\u4E3A\u52A0\u8F7D\u72B6\u6001</td><td><em>boolean</em></td></tr><tr><td>disabled</td><td>\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001</td><td><em>boolean</em></td></tr><tr><td>callback</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td><em>action: ActionSheetAction</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>select</td><td>\u70B9\u51FB\u9009\u9879\u65F6\u89E6\u53D1\uFF0C\u7981\u7528\u6216\u52A0\u8F7D\u72B6\u6001\u4E0B\u4E0D\u4F1A\u89E6\u53D1</td><td><em>action: ActionSheetAction, index: number</em></td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>open</td><td>\u6253\u5F00\u9762\u677F\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>close</td><td>\u5173\u95ED\u9762\u677F\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>opened</td><td>\u6253\u5F00\u9762\u677F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>-</td></tr><tr><td>closed</td><td>\u5173\u95ED\u9762\u677F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>-</td></tr><tr><td>click-overlay</td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u9762\u677F\u7684\u5C55\u793A\u5185\u5BB9</td><td>-</td></tr><tr><td>description</td><td>\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848</td><td>-</td></tr><tr><td>cancel <code>v3.0.10</code></td><td>\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u5185\u5BB9</td><td>-</td></tr><tr><td>action <code>v3.4.0</code></td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u5185\u5BB9</td><td><em>{ action: ActionSheetAction, index: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ActionSheetProps</span>, <span class="hljs-title class_">ActionSheetAction</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-action-sheet-max-height</td><td><em>80%</em></td><td>-</td></tr><tr><td>--van-action-sheet-header-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-action-sheet-header-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-action-sheet-description-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-action-sheet-description-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-action-sheet-description-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-action-sheet-item-background</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-action-sheet-item-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-action-sheet-item-line-height</td><td><em>var(--van-line-height-lg)</em></td><td>-</td></tr><tr><td>--van-action-sheet-item-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-action-sheet-item-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-action-sheet-subname-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-action-sheet-subname-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-action-sheet-subname-line-height</td><td><em>var(--van-line-height-sm)</em></td><td>-</td></tr><tr><td>--van-action-sheet-close-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-action-sheet-close-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-action-sheet-close-icon-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-action-sheet-cancel-text-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-action-sheet-cancel-padding-top</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-action-sheet-cancel-padding-color</td><td><em>var(--van-background-color)</em></td><td>-</td></tr><tr><td>--van-action-sheet-loading-icon-size</td><td><em>22px</em></td><td>-</td></tr></tbody></table></div>`,17),l=[d],i={__name:"README.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(p,r)=>(t(),a("div",e,l))}};export{i as default};
