import{o as a,a as n,y as l}from"./vue-libs.b44bc779.js";const t={class:"van-doc-markdown-body"},p=l(`<h1>Form \u8868\u5355</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u6570\u636E\u5F55\u5165\u3001\u6821\u9A8C\uFF0C\u652F\u6301\u8F93\u5165\u6846\u3001\u5355\u9009\u6846\u3001\u590D\u9009\u6846\u3001\u6587\u4EF6\u4E0A\u4F20\u7B49\u7C7B\u578B\uFF0C\u9700\u8981\u4E0E <a href="#/zh-CN/field" target="_blank">Field \u8F93\u5165\u6846</a> \u7EC4\u4EF6\u642D\u914D\u4F7F\u7528\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Form</span>, <span class="hljs-title class_">Field</span>, <span class="hljs-title class_">CellGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Form</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Field</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CellGroup</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u5728\u8868\u5355\u4E2D\uFF0C\u6BCF\u4E2A <a href="#/zh-CN/field" target="_blank">Field \u7EC4\u4EF6</a> \u4EE3\u8868\u4E00\u4E2A\u8868\u5355\u9879\uFF0C\u4F7F\u7528 Field \u7684 <code>rules</code> \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-form</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;username&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;\u7528\u6237\u540D&quot;</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7528\u6237\u540D&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u7528\u6237\u540D&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: true, message: &#39;\u8BF7\u586B\u5199\u7528\u6237\u540D&#39; }]&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;password&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: true, message: &#39;\u8BF7\u586B\u5199\u5BC6\u7801&#39; }]&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 16px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">native-type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
      \u63D0\u4EA4
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> username = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> password = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSubmit</span> = (<span class="hljs-params">values</span>) =&gt; {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;submit&#39;</span>, values);
    };

    <span class="hljs-keyword">return</span> {
      username,
      password,
      onSubmit,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xiao-yan-gui-ze" tabindex="-1">\u6821\u9A8C\u89C4\u5219</h3><p>\u901A\u8FC7 <code>rules</code> \u5B9A\u4E49\u8868\u5355\u6821\u9A8C\u89C4\u5219\uFF0C\u6240\u6709\u53EF\u7528\u5B57\u6BB5\u89C1<a href="#/zh-CN/form#rule-shu-ju-jie-gou" target="_blank">\u4E0B\u65B9\u8868\u683C</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-form</span> @<span class="hljs-attr">failed</span>=<span class="hljs-string">&quot;onFailed&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- \u901A\u8FC7 pattern \u8FDB\u884C\u6B63\u5219\u6821\u9A8C --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;pattern&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u6B63\u5219\u6821\u9A8C&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ pattern, message: &#39;\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9&#39; }]&quot;</span>
    /&gt;</span>
    <span class="hljs-comment">&lt;!-- \u901A\u8FC7 validator \u8FDB\u884C\u51FD\u6570\u6821\u9A8C --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;validator&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u51FD\u6570\u6821\u9A8C&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ validator, message: &#39;\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9&#39; }]&quot;</span>
    /&gt;</span>
    <span class="hljs-comment">&lt;!-- \u901A\u8FC7 validator \u8FD4\u56DE\u9519\u8BEF\u63D0\u793A --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;validatorMessage&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u6821\u9A8C\u51FD\u6570\u8FD4\u56DE\u9519\u8BEF\u63D0\u793A&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ validator: validatorMessage }]&quot;</span>
    /&gt;</span>
    <span class="hljs-comment">&lt;!-- \u901A\u8FC7 validator \u8FDB\u884C\u5F02\u6B65\u51FD\u6570\u6821\u9A8C --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value4&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;asyncValidator&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u5F02\u6B65\u51FD\u6570\u6821\u9A8C&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ validator: asyncValidator, message: &#39;\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9&#39; }]&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 16px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">native-type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
      \u63D0\u4EA4
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> value3 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;abc&#39;</span>);
    <span class="hljs-keyword">const</span> value4 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> pattern = <span class="hljs-regexp">/\\d{6}/</span>;

    <span class="hljs-comment">// \u6821\u9A8C\u51FD\u6570\u8FD4\u56DE true \u8868\u793A\u6821\u9A8C\u901A\u8FC7\uFF0Cfalse \u8868\u793A\u4E0D\u901A\u8FC7</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">validator</span> = (<span class="hljs-params">val</span>) =&gt; <span class="hljs-regexp">/1\\d{10}/</span>.<span class="hljs-title function_">test</span>(val);

    <span class="hljs-comment">// \u6821\u9A8C\u51FD\u6570\u53EF\u4EE5\u76F4\u63A5\u8FD4\u56DE\u4E00\u6BB5\u9519\u8BEF\u63D0\u793A</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">validatorMessage</span> = (<span class="hljs-params">val</span>) =&gt; <span class="hljs-string">\`<span class="hljs-subst">\${val}</span> \u4E0D\u5408\u6CD5\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\`</span>;

    <span class="hljs-comment">// \u6821\u9A8C\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE Promise\uFF0C\u5B9E\u73B0\u5F02\u6B65\u6821\u9A8C</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">asyncValidator</span> = (<span class="hljs-params">val</span>) =&gt;
      <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
        <span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">loading</span>(<span class="hljs-string">&#39;\u9A8C\u8BC1\u4E2D...&#39;</span>);

        <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">clear</span>();
          <span class="hljs-title function_">resolve</span>(val === <span class="hljs-string">&#39;1234&#39;</span>);
        }, <span class="hljs-number">1000</span>);
      });

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFailed</span> = (<span class="hljs-params">errorInfo</span>) =&gt; {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;failed&#39;</span>, errorInfo);
    };

    <span class="hljs-keyword">return</span> {
      value1,
      value2,
      value3,
      value4,
      pattern,
      onFailed,
      validator,
      asyncValidator,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---kai-guan" tabindex="-1">\u8868\u5355\u9879\u7C7B\u578B - \u5F00\u5173</h3><p>\u5728\u8868\u5355\u4E2D\u4F7F\u7528 <a href="#/zh-CN/switch" target="_blank">Switch \u7EC4\u4EF6</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;switch&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5F00\u5173&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---fu-xuan-kuang" tabindex="-1">\u8868\u5355\u9879\u7C7B\u578B - \u590D\u9009\u6846</h3><p>\u5728\u8868\u5355\u4E2D\u4F7F\u7528 <a href="#/zh-CN/checkbox" target="_blank">Checkbox \u7EC4\u4EF6</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u590D\u9009\u6846&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkboxGroup&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u590D\u9009\u6846\u7EC4&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;groupChecked&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u590D\u9009\u6846 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u590D\u9009\u6846 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> groupChecked = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">return</span> {
      checked,
      groupChecked,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---dan-xuan-kuang" tabindex="-1">\u8868\u5355\u9879\u7C7B\u578B - \u5355\u9009\u6846</h3><p>\u5728\u8868\u5355\u4E2D\u4F7F\u7528 <a href="#/zh-CN/radio" target="_blank">Radio \u7EC4\u4EF6</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;radio&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5355\u9009\u6846&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u5355\u9009\u6846 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u5355\u9009\u6846 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;1&#39;</span>);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---bu-jin-qi" tabindex="-1">\u8868\u5355\u9879\u7C7B\u578B - \u6B65\u8FDB\u5668</h3><p>\u5728\u8868\u5355\u4E2D\u4F7F\u7528 <a href="#/zh-CN/stepper" target="_blank">Stepper \u7EC4\u4EF6</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;stepper&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6B65\u8FDB\u5668&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">1</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---ping-fen" tabindex="-1">\u8868\u5355\u9879\u7C7B\u578B - \u8BC4\u5206</h3><p>\u5728\u8868\u5355\u4E2D\u4F7F\u7528 <a href="#/zh-CN/rate" target="_blank">Rate \u7EC4\u4EF6</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BC4\u5206&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---hua-kuai" tabindex="-1">\u8868\u5355\u9879\u7C7B\u578B - \u6ED1\u5757</h3><p>\u5728\u8868\u5355\u4E2D\u4F7F\u7528 <a href="#/zh-CN/slider" target="_blank">Slider \u7EC4\u4EF6</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;slider&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6ED1\u5757&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">50</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---wen-jian-shang-chuan" tabindex="-1">\u8868\u5355\u9879\u7C7B\u578B - \u6587\u4EF6\u4E0A\u4F20</h3><p>\u5728\u8868\u5355\u4E2D\u4F7F\u7528 <a href="#/zh-CN/uploader" target="_blank">Uploader \u7EC4\u4EF6</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;uploader&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u4EF6\u4E0A\u4F20&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>([
      { <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg&#39;</span> },
    ]);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---xuan-ze-qi" tabindex="-1">\u8868\u5355\u9879\u7C7B\u578B - \u9009\u62E9\u5668</h3><p>\u5728\u8868\u5355\u4E2D\u4F7F\u7528 <a href="#/zh-CN/picker" target="_blank">Picker \u7EC4\u4EF6</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;result&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;picker&quot;</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5668&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u70B9\u51FB\u9009\u62E9\u57CE\u5E02&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPicker = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPicker&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span>
    <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;showPicker = false&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> result = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showPicker = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> columns = [<span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>, <span class="hljs-string">&#39;\u5B81\u6CE2&#39;</span>, <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span>, <span class="hljs-string">&#39;\u5609\u5174&#39;</span>, <span class="hljs-string">&#39;\u6E56\u5DDE&#39;</span>];

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
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---shi-jian-xuan-ze-qi" tabindex="-1">\u8868\u5355\u9879\u7C7B\u578B - \u65F6\u95F4\u9009\u62E9\u5668</h3><p>\u5728\u8868\u5355\u4E2D\u4F7F\u7528 <a href="#/zh-CN/datetime-picker" target="_blank">DatetimePicker \u7EC4\u4EF6</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;result&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;datetimePicker&quot;</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65F6\u95F4\u9009\u62E9&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u70B9\u51FB\u9009\u62E9\u65F6\u95F4&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPicker = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPicker&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;showPicker = false&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> result = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showPicker = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">value</span>) =&gt; {
      result.<span class="hljs-property">value</span> = value;
      showPicker.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    };

    <span class="hljs-keyword">return</span> {
      result,
      onConfirm,
      showPicker,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---sheng-shi-qu-xuan-ze-qi" tabindex="-1">\u8868\u5355\u9879\u7C7B\u578B - \u7701\u5E02\u533A\u9009\u62E9\u5668</h3><p>\u5728\u8868\u5355\u4E2D\u4F7F\u7528 <a href="#/zh-CN/area" target="_blank">Area \u7EC4\u4EF6</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;result&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;area&quot;</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u533A\u9009\u62E9&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u70B9\u51FB\u9009\u62E9\u7701\u5E02\u533A&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showArea = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showArea&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-area</span>
    <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;showArea = false&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { areaList } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/area-data&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> result = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showArea = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">areaValues</span>) =&gt; {
      showArea.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      result.<span class="hljs-property">value</span> = areaValues
        .<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> !!item)
        .<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> item.<span class="hljs-property">name</span>)
        .<span class="hljs-title function_">join</span>(<span class="hljs-string">&#39;/&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      result,
      areaList,
      showArea,
      onConfirm,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---ri-li" tabindex="-1">\u8868\u5355\u9879\u7C7B\u578B - \u65E5\u5386</h3><p>\u5728\u8868\u5355\u4E2D\u4F7F\u7528 <a href="#/zh-CN/calendar" target="_blank">Calendar \u7EC4\u4EF6</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;calendar&quot;</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u65E5\u5386&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u70B9\u51FB\u9009\u62E9\u65E5\u671F&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showCalendar = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showCalendar&quot;</span> @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> result = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showCalendar = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">date</span>) =&gt; {
      result.<span class="hljs-property">value</span> = <span class="hljs-string">\`<span class="hljs-subst">\${date.getMonth() + <span class="hljs-number">1</span>}</span>/<span class="hljs-subst">\${date.getDate()}</span>\`</span>;
      showCalendar.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    };

    <span class="hljs-keyword">return</span> {
      result,
      onConfirm,
      showCalendar,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label-width</td><td>\u8868\u5355\u9879 label \u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A<code>px</code></td><td><em>number | string</em></td><td><code>6.2em</code></td></tr><tr><td>label-align</td><td>\u8868\u5355\u9879 label \u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>center</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td>input-align</td><td>\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>center</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td>error-message-align</td><td>\u9519\u8BEF\u63D0\u793A\u6587\u6848\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>center</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td>validate-trigger</td><td>\u8868\u5355\u6821\u9A8C\u89E6\u53D1\u65F6\u673A\uFF0C\u53EF\u9009\u503C\u4E3A <code>onChange</code>\u3001<code>onSubmit</code>\uFF0C\u652F\u6301\u901A\u8FC7\u6570\u7EC4\u540C\u65F6\u8BBE\u7F6E\u591A\u4E2A\u503C\uFF0C\u5177\u4F53\u7528\u6CD5\u89C1\u4E0B\u65B9\u8868\u683C</td><td><em>string | string[]</em></td><td><code>onBlur</code></td></tr><tr><td>colon</td><td>\u662F\u5426\u5728 label \u540E\u9762\u6DFB\u52A0\u5192\u53F7</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u8868\u5355\u4E2D\u7684\u6240\u6709\u8F93\u5165\u6846</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>\u662F\u5426\u5C06\u8868\u5355\u4E2D\u7684\u6240\u6709\u8F93\u5165\u6846\u8BBE\u7F6E\u4E3A\u53EA\u8BFB\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>validate-first</td><td>\u662F\u5426\u5728\u67D0\u4E00\u9879\u6821\u9A8C\u4E0D\u901A\u8FC7\u65F6\u505C\u6B62\u6821\u9A8C</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>scroll-to-error</td><td>\u662F\u5426\u5728\u63D0\u4EA4\u8868\u5355\u4E14\u6821\u9A8C\u4E0D\u901A\u8FC7\u65F6\u6EDA\u52A8\u81F3\u9519\u8BEF\u7684\u8868\u5355\u9879</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-error</td><td>\u662F\u5426\u5728\u6821\u9A8C\u4E0D\u901A\u8FC7\u65F6\u6807\u7EA2\u8F93\u5165\u6846</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-error-message</td><td>\u662F\u5426\u5728\u6821\u9A8C\u4E0D\u901A\u8FC7\u65F6\u5728\u8F93\u5165\u6846\u4E0B\u65B9\u5C55\u793A\u9519\u8BEF\u63D0\u793A</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>submit-on-enter</td><td>\u662F\u5426\u5728\u6309\u4E0B\u56DE\u8F66\u952E\u65F6\u63D0\u4EA4\u8868\u5355</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><blockquote><p>\u8868\u5355\u9879\u7684 API \u53C2\u89C1\uFF1A<a href="#/zh-CN/field#api" target="_blank">Field \u7EC4\u4EF6</a></p></blockquote></div><div class="van-doc-card"><h3 id="rule-shu-ju-jie-gou" tabindex="-1">Rule \u6570\u636E\u7ED3\u6784</h3><p>\u4F7F\u7528 Field \u7684 <code>rules</code> \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\uFF0C\u53EF\u9009\u5C5E\u6027\u5982\u4E0B:</p><table><thead><tr><th>\u952E\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>required</td><td>\u662F\u5426\u4E3A\u5FC5\u9009\u5B57\u6BB5\uFF0C\u5F53\u503C\u4E3A\u7A7A\u503C\u65F6\uFF08\u7A7A\u5B57\u7B26\u4E32\u3001\u7A7A\u6570\u7EC4\u3001<code>false</code>\u3001<code>undefined</code>\u3001<code>null</code> \uFF09\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7</td><td><em>boolean</em></td></tr><tr><td>message</td><td>\u9519\u8BEF\u63D0\u793A\u6587\u6848\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u51FD\u6570\u6765\u8FD4\u56DE\u52A8\u6001\u7684\u6587\u6848\u5185\u5BB9</td><td><em>string | (value, rule) =&gt; string</em></td></tr><tr><td>validator</td><td>\u901A\u8FC7\u51FD\u6570\u8FDB\u884C\u6821\u9A8C\uFF0C\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A Promise \u6765\u8FDB\u884C\u5F02\u6B65\u6821\u9A8C</td><td><em>(value, rule) =&gt; boolean | string | Promise</em></td></tr><tr><td>pattern</td><td>\u901A\u8FC7\u6B63\u5219\u8868\u8FBE\u5F0F\u8FDB\u884C\u6821\u9A8C\uFF0C\u6B63\u5219\u65E0\u6CD5\u5339\u914D\u8868\u793A\u6821\u9A8C\u4E0D\u901A\u8FC7</td><td><em>RegExp</em></td></tr><tr><td>trigger</td><td>\u8BBE\u7F6E\u672C\u9879\u89C4\u5219\u7684\u89E6\u53D1\u65F6\u673A\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E Form \u7EC4\u4EF6\u8BBE\u7F6E\u7684 <code>validate-trigger</code> \u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u4E3A <code>onChange</code>\u3001<code>onBlur</code>\u3001<code>onSubmit</code></td><td><em>string | string[]</em></td></tr><tr><td>formatter</td><td>\u683C\u5F0F\u5316\u51FD\u6570\uFF0C\u5C06\u8868\u5355\u9879\u7684\u503C\u8F6C\u6362\u540E\u8FDB\u884C\u6821\u9A8C</td><td><em>(value, rule) =&gt; any</em></td></tr><tr><td>validateEmpty <code>v3.6.0</code></td><td>\u8BBE\u7F6E <code>validator</code> \u548C <code>pattern</code> \u662F\u5426\u8981\u5BF9\u7A7A\u503C\u8FDB\u884C\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>true</code>\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A <code>false</code> \u6765\u7981\u7528\u8BE5\u884C\u4E3A</td><td><em>boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="validate-trigger-ke-xuan-zhi" tabindex="-1">validate-trigger \u53EF\u9009\u503C</h3><p>\u901A\u8FC7 <code>validate-trigger</code> \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8868\u5355\u6821\u9A8C\u7684\u89E6\u53D1\u65F6\u673A\u3002</p><table><thead><tr><th>\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>onSubmit</td><td>\u4EC5\u5728\u63D0\u4EA4\u8868\u5355\u65F6\u89E6\u53D1\u6821\u9A8C</td></tr><tr><td>onBlur</td><td>\u5728\u63D0\u4EA4\u8868\u5355\u548C\u8F93\u5165\u6846\u5931\u7126\u65F6\u89E6\u53D1\u6821\u9A8C</td></tr><tr><td>onChange</td><td>\u5728\u63D0\u4EA4\u8868\u5355\u548C\u8F93\u5165\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1\u6821\u9A8C</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>submit</td><td>\u63D0\u4EA4\u8868\u5355\u4E14\u9A8C\u8BC1\u901A\u8FC7\u540E\u89E6\u53D1</td><td><em>values: object</em></td></tr><tr><td>failed</td><td>\u63D0\u4EA4\u8868\u5355\u4E14\u9A8C\u8BC1\u4E0D\u901A\u8FC7\u540E\u89E6\u53D1</td><td><em>errorInfo: { values: object, errors: object[] }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Form \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>submit</td><td>\u63D0\u4EA4\u8868\u5355\uFF0C\u4E0E\u70B9\u51FB\u63D0\u4EA4\u6309\u94AE\u7684\u6548\u679C\u7B49\u4EF7</td><td>-</td><td>-</td></tr><tr><td>getValues <code>v3.4.8</code></td><td>\u83B7\u53D6\u6240\u6709\u8868\u5355\u9879\u5F53\u524D\u7684\u503C</td><td>-</td><td><em>Record&lt;string, unknown&gt;</em></td></tr><tr><td>validate</td><td>\u9A8C\u8BC1\u8868\u5355\uFF0C\u652F\u6301\u4F20\u5165\u4E00\u4E2A\u6216\u591A\u4E2A <code>name</code> \u6765\u9A8C\u8BC1\u5355\u4E2A\u6216\u90E8\u5206\u8868\u5355\u9879\uFF0C\u4E0D\u4F20\u5165 <code>name</code> \u65F6\uFF0C\u4F1A\u9A8C\u8BC1\u6240\u6709\u8868\u5355\u9879</td><td><em>name?: string | string[]</em></td><td><em>Promise&lt;void&gt;</em></td></tr><tr><td>resetValidation</td><td>\u91CD\u7F6E\u8868\u5355\u9879\u7684\u9A8C\u8BC1\u63D0\u793A\uFF0C\u652F\u6301\u4F20\u5165\u4E00\u4E2A\u6216\u591A\u4E2A <code>name</code> \u6765\u91CD\u7F6E\u5355\u4E2A\u6216\u90E8\u5206\u8868\u5355\u9879\uFF0C\u4E0D\u4F20\u5165 <code>name</code> \u65F6\uFF0C\u4F1A\u91CD\u7F6E\u6240\u6709\u8868\u5355\u9879</td><td><em>name?: string | string[]</em></td><td>-</td></tr><tr><td>getValidationStatus <code>v3.5.0</code></td><td>\u83B7\u53D6\u6240\u6709\u8868\u5355\u9879\u7684\u6821\u9A8C\u72B6\u6001\uFF0C\u72B6\u6001\u5305\u62EC <code>passed</code>\u3001<code>failed</code>\u3001<code>unvalidated</code></td><td>-</td><td><em>Record&lt;string, FieldValidationStatus&gt;</em></td></tr><tr><td>scrollToField</td><td>\u6EDA\u52A8\u5230\u5BF9\u5E94\u8868\u5355\u9879\u7684\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u6EDA\u52A8\u5230\u9876\u90E8\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20 false \u53EF\u6EDA\u52A8\u81F3\u5E95\u90E8</td><td><em>name: string, alignToTop: boolean</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">FormProps</span>, <span class="hljs-title class_">FormInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>FormInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">FormInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> formRef = ref&lt;<span class="hljs-title class_">FormInstance</span>&gt;();

formRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">submit</span>();
</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u8868\u5355\u5185\u5BB9</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="ru-he-zi-ding-yi-biao-dan-xiang" tabindex="-1">\u5982\u4F55\u81EA\u5B9A\u4E49\u8868\u5355\u9879\uFF1F</h3><p>Vant \u652F\u6301\u5728 Form \u7EC4\u4EF6\u4E2D\u63D2\u5165\u81EA\u5B9A\u4E49\u7684\u8868\u5355\u9879\uFF0C\u5177\u4F53\u7528\u6CD5\u53C2\u89C1 <a href="#/zh-CN/use-custom-field-value" target="_blank">useCustomFieldValue</a>\u3002</p></div>`,27),e=[p],i={__name:"README.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(o,h)=>(a(),n("div",t,e))}};export{i as default};
