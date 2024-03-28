import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},p=t(`<h1>Picker \u9009\u62E9\u5668</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u96C6\u5408\u4F9B\u7528\u6237\u9009\u62E9\uFF0C\u652F\u6301\u5355\u5217\u9009\u62E9\u548C\u591A\u5217\u7EA7\u8054\uFF0C\u901A\u5E38\u4E0E<a href="#/zh-CN/popup" target="_blank">\u5F39\u51FA\u5C42</a>\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Picker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Picker</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><h4 id="xuan-xiang-pei-zhi" tabindex="-1">\u9009\u9879\u914D\u7F6E</h4><p>Picker \u7EC4\u4EF6\u901A\u8FC7 <code>columns</code> \u5C5E\u6027\u914D\u7F6E\u9009\u9879\u6570\u636E\uFF0C<code>columns</code> \u662F\u4E00\u4E2A\u5305\u542B\u5B57\u7B26\u4E32\u6216\u5BF9\u8C61\u7684\u6570\u7EC4\u3002</p><h4 id="ding-bu-lan" tabindex="-1">\u9876\u90E8\u680F</h4><p>\u9876\u90E8\u680F\u5305\u542B\u6807\u9898\u3001\u786E\u8BA4\u6309\u94AE\u548C\u53D6\u6D88\u6309\u94AE\uFF0C\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u89E6\u53D1 <code>confirm</code> \u4E8B\u4EF6\uFF0C\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u89E6\u53D1 <code>cancel</code> \u4E8B\u4EF6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>
  <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [<span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>, <span class="hljs-string">&#39;\u5B81\u6CE2&#39;</span>, <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span>, <span class="hljs-string">&#39;\u7ECD\u5174&#39;</span>, <span class="hljs-string">&#39;\u6E56\u5DDE&#39;</span>, <span class="hljs-string">&#39;\u5609\u5174&#39;</span>, <span class="hljs-string">&#39;\u91D1\u534E&#39;</span>];

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">value, index</span>) =&gt; {
      <span class="hljs-title class_">Toast</span>(<span class="hljs-string">\`\u5F53\u524D\u503C: <span class="hljs-subst">\${value}</span>, \u5F53\u524D\u7D22\u5F15: <span class="hljs-subst">\${index}</span>\`</span>);
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value, index</span>) =&gt; {
      <span class="hljs-title class_">Toast</span>(<span class="hljs-string">\`\u5F53\u524D\u503C: <span class="hljs-subst">\${value}</span>, \u5F53\u524D\u7D22\u5F15: <span class="hljs-subst">\${index}</span>\`</span>);
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u53D6\u6D88&#39;</span>);

    <span class="hljs-keyword">return</span> {
      columns,
      onChange,
      onCancel,
      onConfirm,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="mo-ren-xuan-zhong-xiang" tabindex="-1">\u9ED8\u8BA4\u9009\u4E2D\u9879</h3><p>\u5355\u5217\u9009\u62E9\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>default-index</code> \u5C5E\u6027\u8BBE\u7F6E\u521D\u59CB\u9009\u4E2D\u9879\u7684\u7D22\u5F15\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:default-index</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="duo-lie-xuan-ze" tabindex="-1">\u591A\u5217\u9009\u62E9</h3><p><code>columns</code> \u5C5E\u6027\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8C61\u6570\u7EC4\u7684\u5F62\u5F0F\u914D\u7F6E\u591A\u5217\u9009\u62E9\uFF0C\u5BF9\u8C61\u4E2D\u53EF\u4EE5\u914D\u7F6E\u9009\u9879\u6570\u636E\u3001\u521D\u59CB\u9009\u4E2D\u9879\u7B49\uFF0C\u8BE6\u7EC6\u683C\u5F0F\u89C1<a href="#/zh-CN/picker#column-shu-ju-jie-gou" target="_blank">\u4E0B\u65B9\u8868\u683C</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      <span class="hljs-comment">// \u7B2C\u4E00\u5217</span>
      {
        <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;\u5468\u4E00&#39;</span>, <span class="hljs-string">&#39;\u5468\u4E8C&#39;</span>, <span class="hljs-string">&#39;\u5468\u4E09&#39;</span>, <span class="hljs-string">&#39;\u5468\u56DB&#39;</span>, <span class="hljs-string">&#39;\u5468\u4E94&#39;</span>],
        <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">2</span>,
      },
      <span class="hljs-comment">// \u7B2C\u4E8C\u5217</span>
      {
        <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;\u4E0A\u5348&#39;</span>, <span class="hljs-string">&#39;\u4E0B\u5348&#39;</span>, <span class="hljs-string">&#39;\u665A\u4E0A&#39;</span>],
        <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">1</span>,
      },
    ];

    <span class="hljs-keyword">return</span> { columns };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="ji-lian-xuan-ze" tabindex="-1">\u7EA7\u8054\u9009\u62E9</h3><p>\u4F7F\u7528 <code>columns</code> \u7684 <code>children</code> \u5B57\u6BB5\u53EF\u4EE5\u5B9E\u73B0\u9009\u9879\u7EA7\u8054\u7684\u6548\u679C\u3002\u5982\u679C\u7EA7\u8054\u5C42\u7EA7\u8F83\u591A\uFF0C\u63A8\u8350\u4F7F\u7528 <a href="#/zh-CN/cascader" target="_blank">Cascader \u7EA7\u8054\u9009\u9879\u7EC4\u4EF6</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u897F\u6E56\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u4F59\u676D\u533A&#39;</span> }],
          },
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9E7F\u57CE\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u74EF\u6D77\u533A&#39;</span> }],
          },
        ],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u798F\u5EFA&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u798F\u5DDE&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9F13\u697C\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u53F0\u6C5F\u533A&#39;</span> }],
          },
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u53A6\u95E8&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u601D\u660E\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6D77\u6CA7\u533A&#39;</span> }],
          },
        ],
      },
    ];

    <span class="hljs-keyword">return</span> { columns };
  },
};
</code></pre><blockquote><p>\u7EA7\u8054\u9009\u62E9\u7684\u6570\u636E\u5D4C\u5957\u6DF1\u5EA6\u9700\u8981\u4FDD\u6301\u4E00\u81F4\uFF0C\u5982\u679C\u90E8\u5206\u9009\u9879\u6CA1\u6709\u5B50\u9009\u9879\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7A7A\u5B57\u7B26\u4E32\u8FDB\u884C\u5360\u4F4D\u3002</p></blockquote></div><div class="van-doc-card"><h3 id="jin-yong-xuan-xiang" tabindex="-1">\u7981\u7528\u9009\u9879</h3><p>\u9009\u9879\u53EF\u4EE5\u4E3A\u5BF9\u8C61\u7ED3\u6784\uFF0C\u901A\u8FC7\u8BBE\u7F6E <code>disabled</code> \u6765\u7981\u7528\u8BE5\u9009\u9879\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5B81\u6CE2&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> { columns };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="dong-tai-she-zhi-xuan-xiang" tabindex="-1">\u52A8\u6001\u8BBE\u7F6E\u9009\u9879</h3><p>\u901A\u8FC7 Picker \u4E0A\u7684\u5B9E\u4F8B\u65B9\u6CD5\u53EF\u4EE5\u66F4\u7075\u6D3B\u5730\u63A7\u5236\u9009\u62E9\u5668\uFF0C\u6BD4\u5982\u4F7F\u7528 <code>setColumnValues</code> \u65B9\u6CD5\u5B9E\u73B0\u591A\u5217\u8054\u52A8\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;picker&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> picker = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);

    <span class="hljs-keyword">const</span> cities = {
      \u6D59\u6C5F: [<span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>, <span class="hljs-string">&#39;\u5B81\u6CE2&#39;</span>, <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span>, <span class="hljs-string">&#39;\u5609\u5174&#39;</span>, <span class="hljs-string">&#39;\u6E56\u5DDE&#39;</span>],
      \u798F\u5EFA: [<span class="hljs-string">&#39;\u798F\u5DDE&#39;</span>, <span class="hljs-string">&#39;\u53A6\u95E8&#39;</span>, <span class="hljs-string">&#39;\u8386\u7530&#39;</span>, <span class="hljs-string">&#39;\u4E09\u660E&#39;</span>, <span class="hljs-string">&#39;\u6CC9\u5DDE&#39;</span>],
    };
    <span class="hljs-keyword">const</span> columns = [
      { <span class="hljs-attr">values</span>: <span class="hljs-title class_">Object</span>.<span class="hljs-title function_">keys</span>(cities) },
      { <span class="hljs-attr">values</span>: cities[<span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>] },
    ];

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">values</span>) =&gt; {
      picker.<span class="hljs-property">value</span>.<span class="hljs-title function_">setColumnValues</span>(<span class="hljs-number">1</span>, cities[values[<span class="hljs-number">0</span>]]);
    };

    <span class="hljs-keyword">return</span> {
      picker,
      columns,
      onChange,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jia-zai-zhuang-tai" tabindex="-1">\u52A0\u8F7D\u72B6\u6001</h3><p>\u82E5\u9009\u62E9\u5668\u6570\u636E\u662F\u5F02\u6B65\u83B7\u53D6\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>loading</code> \u5C5E\u6027\u663E\u793A\u52A0\u8F7D\u63D0\u793A\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);

    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      columns.<span class="hljs-property">value</span> = [<span class="hljs-string">&#39;\u9009\u9879&#39;</span>];
      loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    }, <span class="hljs-number">1000</span>);

    <span class="hljs-keyword">return</span> { columns, loading };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="da-pei-dan-chu-ceng-shi-yong" tabindex="-1">\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528</h3><p>\u5728\u5B9E\u9645\u573A\u666F\u4E2D\uFF0CPicker \u901A\u5E38\u4F5C\u4E3A\u7528\u4E8E\u8F85\u52A9\u8868\u5355\u586B\u5199\uFF0C\u53EF\u4EE5\u642D\u914D Popup \u548C Field \u5B9E\u73B0\u8BE5\u6548\u679C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u57CE\u5E02&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u9009\u62E9\u57CE\u5E02&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPicker = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPicker&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span>
    <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;showPicker = false&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [<span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>, <span class="hljs-string">&#39;\u5B81\u6CE2&#39;</span>, <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span>, <span class="hljs-string">&#39;\u7ECD\u5174&#39;</span>, <span class="hljs-string">&#39;\u6E56\u5DDE&#39;</span>, <span class="hljs-string">&#39;\u5609\u5174&#39;</span>, <span class="hljs-string">&#39;\u91D1\u534E&#39;</span>];
    <span class="hljs-keyword">const</span> result = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showPicker = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">value</span>) =&gt; {
      result.<span class="hljs-property">value</span> = value;
      showPicker.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    };

    <span class="hljs-keyword">return</span> {
      result,
      columns,
      onConfirm,
      showPicker,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-columns-de-jie-gou" tabindex="-1">\u81EA\u5B9A\u4E49 Columns \u7684\u7ED3\u6784</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span>
  <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>
  <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
  <span class="hljs-attr">:columns-field-names</span>=<span class="hljs-string">&quot;customFieldName&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      {
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>,
        <span class="hljs-attr">cities</span>: [
          {
            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>,
            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u897F\u6E56\u533A&#39;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u4F59\u676D\u533A&#39;</span> }],
          },
          {
            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span>,
            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u9E7F\u57CE\u533A&#39;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u74EF\u6D77\u533A&#39;</span> }],
          },
        ],
      },
      {
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u798F\u5EFA&#39;</span>,
        <span class="hljs-attr">cities</span>: [
          {
            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u798F\u5DDE&#39;</span>,
            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u9F13\u697C\u533A&#39;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u53F0\u6C5F\u533A&#39;</span> }],
          },
          {
            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u53A6\u95E8&#39;</span>,
            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u601D\u660E\u533A&#39;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u6D77\u6CA7\u533A&#39;</span> }],
          },
        ],
      },
    ];

    <span class="hljs-keyword">const</span> customFieldName = {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;cityName&#39;</span>,
      <span class="hljs-attr">children</span>: <span class="hljs-string">&#39;cities&#39;</span>,
    };

    <span class="hljs-keyword">return</span> {
      columns,
      customFieldName,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>columns</td><td>\u5BF9\u8C61\u6570\u7EC4\uFF0C\u914D\u7F6E\u6BCF\u4E00\u5217\u663E\u793A\u7684\u6570\u636E</td><td><em>Column[]</em></td><td><code>[]</code></td></tr><tr><td>columns-field-names</td><td>\u81EA\u5B9A\u4E49 <code>columns</code> \u7ED3\u6784\u4E2D\u7684\u5B57\u6BB5</td><td><em>object</em></td><td><code>{ text: &#39;text&#39;, values: &#39;values&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>title</td><td>\u9876\u90E8\u680F\u6807\u9898</td><td><em>string</em></td><td>-</td></tr><tr><td>confirm-button-text</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td>cancel-button-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td>toolbar-position</td><td>\u9876\u90E8\u680F\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td>loading</td><td>\u662F\u5426\u663E\u793A\u52A0\u8F7D\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-toolbar</td><td>\u662F\u5426\u663E\u793A\u9876\u90E8\u680F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>allow-html</td><td>\u662F\u5426\u5141\u8BB8\u9009\u9879\u5185\u5BB9\u4E2D\u6E32\u67D3 HTML</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>default-index</td><td>\u5355\u5217\u9009\u62E9\u65F6\uFF0C\u9ED8\u8BA4\u9009\u4E2D\u9879\u7684\u7D22\u5F15</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>item-height</td><td>\u9009\u9879\u9AD8\u5EA6\uFF0C\u652F\u6301 <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> \u5355\u4F4D\uFF0C\u9ED8\u8BA4 <code>px</code></td><td><em>number | string</em></td><td><code>44</code></td></tr><tr><td>visible-item-count</td><td>\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570</td><td><em>number | string</em></td><td><code>6</code></td></tr><tr><td>swipe-duration</td><td>\u5FEB\u901F\u6ED1\u52A8\u65F6\u60EF\u6027\u6EDA\u52A8\u7684\u65F6\u957F\uFF0C\u5355\u4F4D <code>ms</code></td><td><em>number | string</em></td><td><code>1000</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><p>\u5F53\u9009\u62E9\u5668\u6709\u591A\u5217\u65F6\uFF0C\u4E8B\u4EF6\u56DE\u8C03\u53C2\u6570\u4F1A\u8FD4\u56DE\u6570\u7EC4\u3002</p><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1\u3002<br><strong>\u6CE8\u610F\uFF1A\u5F53\u4F20\u5165\u591A\u5217\u6570\u636E\u65F6\uFF0C\u8FD4\u56DE\u503C\u4E3A\u6570\u7EC4\u683C\u5F0F\u3002</strong></td><td><em>currentValue: PickerOption | PickerOption[], currentIndex: number | number[]</em></td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1\u3002<br><strong>\u6CE8\u610F\uFF1A\u5F53\u4F20\u5165\u591A\u5217\u6570\u636E\u65F6\uFF0C\u8FD4\u56DE\u503C\u4E3A\u6570\u7EC4\u683C\u5F0F\u3002</strong></td><td><em>currentValue: PickerOption | PickerOption[], currentIndex: number | number[]</em></td></tr><tr><td>change</td><td>\u9009\u9879\u6539\u53D8\u65F6\u89E6\u53D1\u3002<br><strong>\u6CE8\u610F\uFF1A\u5F53\u4F20\u5165\u591A\u5217\u6570\u636E\u65F6\uFF0C\u8FD4\u56DE\u503C\u4E3A\u6570\u7EC4\u683C\u5F0F\u3002</strong></td><td><em>currentValue: PickerOption | PickerOption[], currentIndex: number | number[]</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>toolbar <code>v3.1.2</code></td><td>\u81EA\u5B9A\u4E49\u6574\u4E2A\u9876\u90E8\u680F\u7684\u5185\u5BB9</td><td>-</td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9</td><td>-</td></tr><tr><td>confirm</td><td>\u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u5185\u5BB9</td><td>-</td></tr><tr><td>cancel</td><td>\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u5185\u5BB9</td><td>-</td></tr><tr><td>option</td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u5185\u5BB9</td><td><em>option: string | object</em></td></tr><tr><td>columns-top</td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u5185\u5BB9</td><td>-</td></tr><tr><td>columns-bottom</td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0B\u65B9\u5185\u5BB9</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="column-shu-ju-jie-gou" tabindex="-1">Column \u6570\u636E\u7ED3\u6784</h3><p>\u5F53\u4F20\u5165\u591A\u5217\u6570\u636E\u65F6\uFF0C<code>columns</code> \u4E3A\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5BF9\u8C61\u914D\u7F6E\u6BCF\u4E00\u5217\uFF0C\u6BCF\u4E00\u5217\u6709\u4EE5\u4E0B <code>key</code>:</p><table><thead><tr><th>\u952E\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>values</td><td>\u5217\u4E2D\u5BF9\u5E94\u7684\u5907\u9009\u503C</td><td><em>Array&lt;string | number&gt;</em></td></tr><tr><td>defaultIndex</td><td>\u521D\u59CB\u9009\u4E2D\u9879\u7684\u7D22\u5F15\uFF0C\u9ED8\u8BA4\u4E3A 0</td><td><em>number</em></td></tr><tr><td>className</td><td>\u4E3A\u5BF9\u5E94\u5217\u6DFB\u52A0\u989D\u5916\u7684\u7C7B\u540D</td><td><em>string | Array | object</em></td></tr><tr><td>children</td><td>\u7EA7\u8054\u9009\u9879</td><td><em>Column</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Picker \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>getValues</td><td>\u83B7\u53D6\u6240\u6709\u5217\u9009\u4E2D\u7684\u503C</td><td>-</td><td>values</td></tr><tr><td>setValues</td><td>\u8BBE\u7F6E\u6240\u6709\u5217\u9009\u4E2D\u7684\u503C</td><td>values</td><td>-</td></tr><tr><td>getIndexes</td><td>\u83B7\u53D6\u6240\u6709\u5217\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u7D22\u5F15</td><td>-</td><td>indexes</td></tr><tr><td>setIndexes</td><td>\u8BBE\u7F6E\u6240\u6709\u5217\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u7D22\u5F15</td><td>indexes</td><td>-</td></tr><tr><td>getColumnValue</td><td>\u83B7\u53D6\u5BF9\u5E94\u5217\u9009\u4E2D\u7684\u503C</td><td>columnIndex</td><td>value</td></tr><tr><td>setColumnValue</td><td>\u8BBE\u7F6E\u5BF9\u5E94\u5217\u9009\u4E2D\u7684\u503C</td><td>columnIndex, value</td><td>-</td></tr><tr><td>getColumnIndex</td><td>\u83B7\u53D6\u5BF9\u5E94\u5217\u9009\u4E2D\u9879\u7684\u7D22\u5F15</td><td>columnIndex</td><td>optionIndex</td></tr><tr><td>setColumnIndex</td><td>\u8BBE\u7F6E\u5BF9\u5E94\u5217\u9009\u4E2D\u9879\u7684\u7D22\u5F15</td><td>columnIndex, optionIndex</td><td>-</td></tr><tr><td>getColumnValues</td><td>\u83B7\u53D6\u5BF9\u5E94\u5217\u4E2D\u6240\u6709\u9009\u9879</td><td>columnIndex</td><td>values</td></tr><tr><td>setColumnValues</td><td>\u8BBE\u7F6E\u5BF9\u5E94\u5217\u4E2D\u6240\u6709\u9009\u9879</td><td>columnIndex, values</td><td>-</td></tr><tr><td>confirm</td><td>\u505C\u6B62\u60EF\u6027\u6EDA\u52A8\u5E76\u89E6\u53D1 confirm \u4E8B\u4EF6</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">PickerProps</span>,
  <span class="hljs-title class_">PickerColumn</span>,
  <span class="hljs-title class_">PickerOption</span>,
  <span class="hljs-title class_">PickerInstance</span>,
  <span class="hljs-title class_">PickerFieldNames</span>,
  <span class="hljs-title class_">PickerObjectColumn</span>,
  <span class="hljs-title class_">PickerObjectOption</span>,
  <span class="hljs-title class_">PickerToolbarPosition</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>PickerInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PickerInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> pickerRef = ref&lt;<span class="hljs-title class_">PickerInstance</span>&gt;();

pickerRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">confirm</span>();
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-picker-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-picker-toolbar-height</td><td><em>44px</em></td><td>-</td></tr><tr><td>--van-picker-title-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-picker-title-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-picker-action-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-picker-action-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-picker-confirm-action-color</td><td><em>var(--van-text-link-color)</em></td><td>-</td></tr><tr><td>--van-picker-cancel-action-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-picker-option-padding</td><td><em>0 var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-picker-option-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-picker-option-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-picker-option-disabled-opacity</td><td><em>0.3</em></td><td>-</td></tr><tr><td>--van-picker-mask-color</td><td><em>linear-gradient</em></td><td>-</td></tr><tr><td>--van-picker-loading-icon-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-picker-loading-mask-color</td><td><em>rgba(255, 255, 255, 0.9)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F</h3><p>\u53C2\u89C1<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">\u684C\u9762\u7AEF\u9002\u914D</a>\u3002</p></div>`,24),e=[p],h={__name:"README.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(r,o)=>(a(),n("div",l,e))}};export{h as default};
