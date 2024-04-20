import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},p=n(`<h1>Collapse \u6298\u53E0\u9762\u677F</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5C06\u4E00\u7EC4\u5185\u5BB9\u653E\u7F6E\u5728\u591A\u4E2A\u6298\u53E0\u9762\u677F\u4E2D\uFF0C\u70B9\u51FB\u9762\u677F\u7684\u6807\u9898\u53EF\u4EE5\u5C55\u5F00\u6216\u6536\u7F29\u5176\u5185\u5BB9\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Collapse</span>, <span class="hljs-title class_">CollapseItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Collapse</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CollapseItem</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u901A\u8FC7 <code>v-model</code> \u63A7\u5236\u5C55\u5F00\u7684\u9762\u677F\u5217\u8868\uFF0C<code>activeNames</code> \u4E3A\u6570\u7EC4\u683C\u5F0F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;activeNames&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98981&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98982&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    \u6280\u672F\u65E0\u975E\u5C31\u662F\u90A3\u4E9B\u5F00\u53D1\u5B83\u7684\u4EBA\u7684\u5171\u540C\u7075\u9B42\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98983&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
    \u5728\u4EE3\u7801\u9605\u8BFB\u8FC7\u7A0B\u4E2D\u4EBA\u4EEC\u8BF4\u810F\u8BDD\u7684\u9891\u7387\u662F\u8861\u91CF\u4EE3\u7801\u8D28\u91CF\u7684\u552F\u4E00\u6807\u51C6\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeNames = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;1&#39;</span>]);
    <span class="hljs-keyword">return</span> { activeNames };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shou-feng-qin" tabindex="-1">\u624B\u98CE\u7434</h3><p>\u901A\u8FC7 <code>accordion</code> \u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u6700\u591A\u5C55\u5F00\u4E00\u4E2A\u9762\u677F\uFF0C\u6B64\u65F6 <code>activeName</code> \u4E3A\u5B57\u7B26\u4E32\u683C\u5F0F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;activeName&quot;</span> <span class="hljs-attr">accordion</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98981&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98982&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    \u6280\u672F\u65E0\u975E\u5C31\u662F\u90A3\u4E9B\u5F00\u53D1\u5B83\u7684\u4EBA\u7684\u5171\u540C\u7075\u9B42\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98983&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
    \u5728\u4EE3\u7801\u9605\u8BFB\u8FC7\u7A0B\u4E2D\u4EBA\u4EEC\u8BF4\u810F\u8BDD\u7684\u9891\u7387\u662F\u8861\u91CF\u4EE3\u7801\u8D28\u91CF\u7684\u552F\u4E00\u6807\u51C6\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeName = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;1&#39;</span>);
    <span class="hljs-keyword">return</span> { activeName };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">\u7981\u7528\u72B6\u6001</h3><p>\u901A\u8FC7 <code>disabled</code> \u5C5E\u6027\u6765\u7981\u7528\u5355\u4E2A\u9762\u677F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;activeNames&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98981&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98982&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
    \u6280\u672F\u65E0\u975E\u5C31\u662F\u90A3\u4E9B\u5F00\u53D1\u5B83\u7684\u4EBA\u7684\u5171\u540C\u7075\u9B42\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98983&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
    \u5728\u4EE3\u7801\u9605\u8BFB\u8FC7\u7A0B\u4E2D\u4EBA\u4EEC\u8BF4\u810F\u8BDD\u7684\u9891\u7387\u662F\u8861\u91CF\u4EE3\u7801\u8D28\u91CF\u7684\u552F\u4E00\u6807\u51C6\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-biao-ti-nei-rong" tabindex="-1">\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9</h3><p>\u901A\u8FC7 <code>title</code> \u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6807\u9898\u680F\u7684\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;activeNames&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u6807\u98981 <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;question-o&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98982&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span>&gt;</span>
    \u6280\u672F\u65E0\u975E\u5C31\u662F\u90A3\u4E9B\u5F00\u53D1\u5B83\u7684\u4EBA\u7684\u5171\u540C\u7075\u9B42\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeNames = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;1&#39;</span>]);
    <span class="hljs-keyword">return</span> { activeNames };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="quan-bu-zhan-kai-yu-quan-bu-qie-huan" tabindex="-1">\u5168\u90E8\u5C55\u5F00\u4E0E\u5168\u90E8\u5207\u6362</h3><p>\u901A\u8FC7 <code>Collapse</code> \u5B9E\u4F8B\u4E0A\u7684 <code>toggleAll</code> \u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5168\u90E8\u5C55\u5F00\u4E0E\u5168\u90E8\u5207\u6362\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;activeNames&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98981&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98982&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    \u6280\u672F\u65E0\u975E\u5C31\u662F\u90A3\u4E9B\u5F00\u53D1\u5B83\u7684\u4EBA\u7684\u5171\u540C\u7075\u9B42\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98983&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
    \u5728\u4EE3\u7801\u9605\u8BFB\u8FC7\u7A0B\u4E2D\u4EBA\u4EEC\u8BF4\u810F\u8BDD\u7684\u9891\u7387\u662F\u8861\u91CF\u4EE3\u7801\u8D28\u91CF\u7684\u552F\u4E00\u6807\u51C6\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;openAll&quot;</span>&gt;</span>\u5168\u90E8\u5C55\u5F00<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleAll&quot;</span>&gt;</span>\u5168\u90E8\u5207\u6362<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeNames = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;1&#39;</span>]);
    <span class="hljs-keyword">const</span> collapse = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">openAll</span> = (<span class="hljs-params"></span>) =&gt; {
      collapse.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);
    }
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggleAll</span> = (<span class="hljs-params"></span>) =&gt; {
      collapse.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>();
    },

    <span class="hljs-keyword">return</span> {
      activeNames,
      openAll,
      toggleAll,
      collapse,
    };
  },
};
</code></pre><blockquote><p>Tips: \u624B\u98CE\u7434\u6A21\u5F0F\u4E0B\u65E0\u6CD5\u4F7F\u7528 toggleAll \u65B9\u6CD5\u3002</p></blockquote></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="collapse-props" tabindex="-1">Collapse Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u5C55\u5F00\u9762\u677F\u7684 name</td><td>\u624B\u98CE\u7434\u6A21\u5F0F\uFF1A<em>number | string</em><br>\u975E\u624B\u98CE\u7434\u6A21\u5F0F\uFF1A<em>(number | string)[]</em></td><td>-</td></tr><tr><td>accordion</td><td>\u662F\u5426\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>border</td><td>\u662F\u5426\u663E\u793A\u5916\u8FB9\u6846</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="collapse-events" tabindex="-1">Collapse Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u9762\u677F\u65F6\u89E6\u53D1</td><td>activeNames: \u7C7B\u578B\u4E0E v-model \u7ED1\u5B9A\u7684\u503C\u4E00\u81F4</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="collapseitem-props" tabindex="-1">CollapseItem Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u9ED8\u8BA4\u4E3A\u7D22\u5F15\u503C</td><td><em>number | string</em></td><td><code>index</code></td></tr><tr><td>icon</td><td>\u6807\u9898\u680F\u5DE6\u4FA7\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td><td><em>string</em></td><td>-</td></tr><tr><td>size</td><td>\u6807\u9898\u680F\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>large</code></td><td><em>string</em></td><td>-</td></tr><tr><td>title</td><td>\u6807\u9898\u680F\u5DE6\u4FA7\u5185\u5BB9</td><td><em>number | string</em></td><td>-</td></tr><tr><td>value</td><td>\u6807\u9898\u680F\u53F3\u4FA7\u5185\u5BB9</td><td><em>number | string</em></td><td>-</td></tr><tr><td>label</td><td>\u6807\u9898\u680F\u63CF\u8FF0\u4FE1\u606F</td><td><em>number | string</em></td><td>-</td></tr><tr><td>border</td><td>\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>is-link</td><td>\u662F\u5426\u5C55\u793A\u6807\u9898\u680F\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u9762\u677F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly <code>v3.0.12</code></td><td>\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u65E0\u6CD5\u64CD\u4F5C\u9762\u677F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lazy-render <code>v3.4.5</code></td><td>\u662F\u5426\u5728\u9996\u6B21\u5C55\u5F00\u65F6\u624D\u6E32\u67D3\u9762\u677F\u5185\u5BB9</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>title-class</td><td>\u5DE6\u4FA7\u6807\u9898\u989D\u5916\u7C7B\u540D</td><td><em>string</em></td><td>-</td></tr><tr><td>value-class</td><td>\u53F3\u4FA7\u5185\u5BB9\u989D\u5916\u7C7B\u540D</td><td><em>string</em></td><td>-</td></tr><tr><td>label-class</td><td>\u63CF\u8FF0\u4FE1\u606F\u989D\u5916\u7C7B\u540D</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="collapse-fang-fa" tabindex="-1">Collapse \u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 CollapseItem \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>toggleAll <code>v3.5.3</code></td><td>\u5207\u6362\u6240\u6709\u9762\u677F\u5C55\u5F00\u72B6\u6001\uFF0C\u4F20 <code>true</code> \u4E3A\u5168\u90E8\u5C55\u5F00\uFF0C<code>false</code> \u4E3A\u5168\u90E8\u6536\u8D77\uFF0C\u4E0D\u4F20\u53C2\u4E3A\u5168\u90E8\u5207\u6362</td><td><em>options?: boolean | object</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="toggleall-fang-fa-shi-li" tabindex="-1">toggleAll \u65B9\u6CD5\u793A\u4F8B</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> type { <span class="hljs-title class_">CollapseInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> collapseRef = ref&lt;<span class="hljs-title class_">CollapseInstance</span>&gt;();

<span class="hljs-comment">// \u5168\u90E8\u5207\u6362</span>
collapseRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>();
<span class="hljs-comment">// \u5168\u90E8\u5C55\u5F00</span>
collapseRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);
<span class="hljs-comment">// \u5168\u90E8\u6536\u8D77</span>
collapseRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">false</span>);

<span class="hljs-comment">// \u5168\u90E8\u5168\u90E8\u5207\u6362\uFF0C\u5E76\u8DF3\u8FC7\u7981\u7528\u7684\u590D\u9009\u6846</span>
collapseRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>({
  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,
});
<span class="hljs-comment">// \u5168\u90E8\u9009\u4E2D\uFF0C\u5E76\u8DF3\u8FC7\u7981\u7528\u7684\u590D\u9009\u6846</span>
collapseRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>({
  <span class="hljs-attr">expanded</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="collapseitem-fang-fa" tabindex="-1">CollapseItem \u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 CollapseItem \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>toggle</td><td>\u5207\u6362\u9762\u677F\u5C55\u5F00\u72B6\u6001\uFF0C\u4F20 <code>true</code> \u4E3A\u5C55\u5F00\uFF0C<code>false</code> \u4E3A\u6536\u8D77\uFF0C\u4E0D\u4F20\u53C2\u4E3A\u5207\u6362</td><td><em>expand?: boolean</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">CollapseProps</span>,
  <span class="hljs-title class_">CollapseItemProps</span>,
  <span class="hljs-title class_">CollapseItemInstance</span>,
  <span class="hljs-title class_">CollapseToggleAllOptions</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>CollapseItemInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CollapseItemInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> collapseItemRef = ref&lt;<span class="hljs-title class_">CollapseItemInstance</span>&gt;();

collapseItemRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggle</span>();
</code></pre></div><div class="van-doc-card"><h3 id="collapseitem-slots" tabindex="-1">CollapseItem Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9762\u677F\u5185\u5BB9</td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u680F\u5DE6\u4FA7\u5185\u5BB9</td></tr><tr><td>value</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u680F\u53F3\u4FA7\u5185\u5BB9</td></tr><tr><td>label <code>v3.1.1</code></td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u680F\u63CF\u8FF0\u4FE1\u606F</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u680F\u5DE6\u4FA7\u56FE\u6807</td></tr><tr><td>right-icon</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u680F\u53F3\u4FA7\u56FE\u6807</td></tr></tbody></table></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-collapse-item-transition-duration</td><td><em>var(--van-animation-duration-base)</em></td><td>-</td></tr><tr><td>--van-collapse-item-content-padding</td><td><em>var(--van-padding-sm) var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-collapse-item-content-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-collapse-item-content-line-height</td><td><em>1.5</em></td><td>-</td></tr><tr><td>--van-collapse-item-content-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-collapse-item-content-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-collapse-item-title-disabled-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr></tbody></table></div>`,20),e=[p],i={__name:"README.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(o,r)=>(a(),t("div",l,e))}};export{i as default};
