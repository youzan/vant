import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},p=t(`<h1>Cascader \u7EA7\u8054\u9009\u62E9</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7EA7\u8054\u9009\u62E9\u6846\uFF0C\u7528\u4E8E\u591A\u5C42\u7EA7\u6570\u636E\u7684\u9009\u62E9\uFF0C\u5178\u578B\u573A\u666F\u4E3A\u7701\u5E02\u533A\u9009\u62E9\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Cascader</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Cascader</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u7EA7\u8054\u9009\u62E9\u7EC4\u4EF6\u53EF\u4EE5\u642D\u914D Field \u548C Popup \u7EC4\u4EF6\u4F7F\u7528\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u533A&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cascaderValue&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>
    @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> fieldValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> cascaderValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-comment">// \u9009\u9879\u5217\u8868\uFF0Cchildren \u4EE3\u8868\u5B50\u9009\u9879\uFF0C\u652F\u6301\u591A\u7EA7\u5D4C\u5957</span>
    <span class="hljs-keyword">const</span> options = [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6D59\u6C5F\u7701&#39;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;330000&#39;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u676D\u5DDE\u5E02&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;330100&#39;</span> }],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6C5F\u82CF\u7701&#39;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;320000&#39;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5357\u4EAC\u5E02&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;320100&#39;</span> }],
      },
    ];
    <span class="hljs-comment">// \u5168\u90E8\u9009\u9879\u9009\u62E9\u5B8C\u6BD5\u540E\uFF0C\u4F1A\u89E6\u53D1 finish \u4E8B\u4EF6</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFinish</span> = (<span class="hljs-params">{ selectedOptions }</span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      fieldValue.<span class="hljs-property">value</span> = selectedOptions.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> option.<span class="hljs-property">text</span>).<span class="hljs-title function_">join</span>(<span class="hljs-string">&#39;/&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272</h3><p>\u901A\u8FC7 <code>active-color</code> \u5C5E\u6027\u6765\u8BBE\u7F6E\u9009\u4E2D\u72B6\u6001\u7684\u9AD8\u4EAE\u989C\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cascaderValue&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>
  @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="yi-bu-jia-zai-xuan-xiang" tabindex="-1">\u5F02\u6B65\u52A0\u8F7D\u9009\u9879</h3><p>\u53EF\u4EE5\u76D1\u542C <code>change</code> \u4E8B\u4EF6\u5E76\u52A8\u6001\u8BBE\u7F6E <code>options</code>\uFF0C\u5B9E\u73B0\u5F02\u6B65\u52A0\u8F7D\u9009\u9879\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u533A&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cascaderValue&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
    @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> fieldValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> cascaderValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> options = <span class="hljs-title function_">ref</span>([
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6D59\u6C5F\u7701&#39;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;330000&#39;</span>,
        <span class="hljs-attr">children</span>: [],
      },
    ]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">{ value }</span>) =&gt; {
      <span class="hljs-keyword">if</span> (value === options.<span class="hljs-property">value</span>[<span class="hljs-number">0</span>].<span class="hljs-property">value</span>) {
        <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
          options.<span class="hljs-property">value</span>[<span class="hljs-number">0</span>].<span class="hljs-property">children</span> = [
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u676D\u5DDE\u5E02&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;330100&#39;</span> },
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5B81\u6CE2\u5E02&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;330200&#39;</span> },
          ];
        }, <span class="hljs-number">500</span>);
      }
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFinish</span> = (<span class="hljs-params">{ selectedOptions }</span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      fieldValue.<span class="hljs-property">value</span> = selectedOptions.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> option.<span class="hljs-property">text</span>).<span class="hljs-title function_">join</span>(<span class="hljs-string">&#39;/&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-zi-duan-ming" tabindex="-1">\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D</h3><p>\u901A\u8FC7 <code>field-names</code> \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49 <code>options</code> \u91CC\u7684\u5B57\u6BB5\u540D\u79F0\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;code&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
  <span class="hljs-attr">:field-names</span>=<span class="hljs-string">&quot;fieldNames&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> code = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> fieldNames = {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;name&#39;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;code&#39;</span>,
      <span class="hljs-attr">children</span>: <span class="hljs-string">&#39;items&#39;</span>,
    };
    <span class="hljs-keyword">const</span> options = [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6D59\u6C5F\u7701&#39;</span>,
        <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;330000&#39;</span>,
        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u676D\u5DDE\u5E02&#39;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;330100&#39;</span> }],
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6C5F\u82CF\u7701&#39;</span>,
        <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;320000&#39;</span>,
        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5357\u4EAC\u5E02&#39;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;320100&#39;</span> }],
      },
    ];

    <span class="hljs-keyword">return</span> {
      code,
      options,
      fieldNames,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-xuan-xiang-shang-fang-nei-rong" tabindex="-1">\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u5185\u5BB9</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;code&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">options-top</span>=<span class="hljs-string">&quot;{ tabIndex }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;current-level&quot;</span>&gt;</span>\u5F53\u524D\u4E3A\u7B2C {{ tabIndex }} \u7EA7<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cascader</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.current-level</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span> <span class="hljs-number">16px</span> <span class="hljs-number">0</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> code = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> options = [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6D59\u6C5F\u7701&#39;</span>,
        <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;330000&#39;</span>,
        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u676D\u5DDE\u5E02&#39;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;330100&#39;</span> }],
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6C5F\u82CF\u7701&#39;</span>,
        <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;320000&#39;</span>,
        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5357\u4EAC\u5E02&#39;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;320100&#39;</span> }],
      },
    ];

    <span class="hljs-keyword">return</span> {
      code,
      options,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u9876\u90E8\u6807\u9898</td><td><em>string</em></td><td>-</td></tr><tr><td>value</td><td>\u9009\u4E2D\u9879\u7684\u503C</td><td><em>string | number</em></td><td>-</td></tr><tr><td>options</td><td>\u53EF\u9009\u9879\u6570\u636E\u6E90</td><td><em>CascaderOption[]</em></td><td><code>[]</code></td></tr><tr><td>placeholder</td><td>\u672A\u9009\u4E2D\u65F6\u7684\u63D0\u793A\u6587\u6848</td><td><em>string</em></td><td><code>\u8BF7\u9009\u62E9</code></td></tr><tr><td>active-color</td><td>\u9009\u4E2D\u72B6\u6001\u7684\u9AD8\u4EAE\u989C\u8272</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td>swipeable <code>v3.0.11</code></td><td>\u662F\u5426\u5F00\u542F\u624B\u52BF\u5DE6\u53F3\u6ED1\u52A8\u5207\u6362</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>closeable</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-header <code>v3.4.2</code></td><td>\u662F\u5426\u5C55\u793A\u6807\u9898\u680F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-icon <code>v3.0.10</code></td><td>\u5173\u95ED\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td><td><em>string</em></td><td><code>cross</code></td></tr><tr><td>field-names <code>v3.0.4</code></td><td>\u81EA\u5B9A\u4E49 <code>options</code> \u7ED3\u6784\u4E2D\u7684\u5B57\u6BB5</td><td><em>object</em></td><td><code>{ text: &#39;text&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="cascaderoption-shu-ju-jie-gou" tabindex="-1">CascaderOption \u6570\u636E\u7ED3\u6784</h3><p><code>options</code> \u5C5E\u6027\u662F\u4E00\u4E2A\u7531\u5BF9\u8C61\u6784\u6210\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u4E2A\u53EF\u9009\u9879\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A</p><table><thead><tr><th>\u952E\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>text</td><td>\u9009\u9879\u6587\u5B57\uFF08\u5FC5\u586B\uFF09</td><td><em>string</em></td></tr><tr><td>value</td><td>\u9009\u9879\u5BF9\u5E94\u7684\u503C\uFF08\u5FC5\u586B\uFF09</td><td><em>string | number</em></td></tr><tr><td>color <code>v3.1.0</code></td><td>\u9009\u9879\u6587\u5B57\u989C\u8272</td><td><em>string</em></td></tr><tr><td>children</td><td>\u5B50\u9009\u9879\u5217\u8868</td><td><em>CascaderOption[]</em></td></tr><tr><td>disabled <code>v3.1.2</code></td><td>\u662F\u5426\u7981\u7528\u9009\u9879</td><td><em>boolean</em></td></tr><tr><td>className <code>v3.1.0</code></td><td>\u4E3A\u5BF9\u5E94\u5217\u6DFB\u52A0\u989D\u5916\u7684 class</td><td><em>string | Array | object</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u4E2D\u9879\u53D8\u5316\u65F6\u89E6\u53D1</td><td><em>{ value: string | number, selectedOptions: CascaderOption[], tabIndex: number }</em></td></tr><tr><td>finish</td><td>\u5168\u90E8\u9009\u9879\u9009\u62E9\u5B8C\u6210\u540E\u89E6\u53D1</td><td><em>{ value: string | number, selectedOptions: CascaderOption[], tabIndex: number }</em></td></tr><tr><td>close</td><td>\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>click-tab</td><td>\u70B9\u51FB\u6807\u7B7E\u65F6\u89E6\u53D1</td><td><em>tabIndex: number, title: string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u9876\u90E8\u6807\u9898</td><td>-</td></tr><tr><td>option <code>v3.1.4</code></td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u6587\u5B57</td><td><em>{ option: CascaderOption, selected: boolean }</em></td></tr><tr><td>options-top <code>v3.2.7</code></td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u7684\u5185\u5BB9</td><td><em>{ tabIndex: number }</em></td></tr><tr><td>options-bottom <code>v3.2.8</code></td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0B\u65B9\u7684\u5185\u5BB9</td><td><em>{ tabIndex: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CascaderProps</span>, <span class="hljs-title class_">CascaderOption</span>, <span class="hljs-title class_">CascaderFieldNames</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-cascader-header-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-cascader-header-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-cascader-title-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-cascader-title-line-height</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-cascader-close-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-cascader-close-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-cascader-selected-icon-size</td><td><em>18px</em></td><td>-</td></tr><tr><td>--van-cascader-tabs-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-cascader-active-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-cascader-options-height</td><td><em>384px</em></td><td>-</td></tr><tr><td>--van-cascader-option-disabled-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-cascader-tab-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-cascader-unselected-tab-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr></tbody></table></div>`,17),e=[p],i={__name:"README.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(r,o)=>(a(),n("div",l,e))}};export{i as default};
