import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},c=t(`<h1>Checkbox \u590D\u9009\u6846</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5728\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Checkbox</span>, <span class="hljs-title class_">CheckboxGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Checkbox</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CheckboxGroup</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u901A\u8FC7 <code>v-model</code> \u7ED1\u5B9A\u590D\u9009\u6846\u7684\u52FE\u9009\u72B6\u6001\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">\u7981\u7528\u72B6\u6001</h3><p>\u901A\u8FC7\u8BBE\u7F6E <code>disabled</code> \u5C5E\u6027\u53EF\u4EE5\u7981\u7528\u590D\u9009\u6846\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-xing-zhuang" tabindex="-1">\u81EA\u5B9A\u4E49\u5F62\u72B6</h3><p>\u5C06 <code>shape</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3A <code>square</code>\uFF0C\u590D\u9009\u6846\u7684\u5F62\u72B6\u4F1A\u53D8\u6210\u65B9\u5F62\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272</h3><p>\u901A\u8FC7 <code>checked-color</code> \u5C5E\u6027\u8BBE\u7F6E\u9009\u4E2D\u72B6\u6001\u7684\u56FE\u6807\u989C\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">checked-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-da-xiao" tabindex="-1">\u81EA\u5B9A\u4E49\u5927\u5C0F</h3><p>\u901A\u8FC7 <code>icon-size</code> \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\u7684\u5927\u5C0F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;24px&quot;</span>&gt;</span>\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">\u81EA\u5B9A\u4E49\u56FE\u6807</h3><p>\u901A\u8FC7 <code>icon</code> \u63D2\u69FD\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>slotProps</code> \u5224\u65AD\u662F\u5426\u4E3A\u9009\u4E2D\u72B6\u6001.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  \u81EA\u5B9A\u4E49\u56FE\u6807
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;img-icon&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.checked ? activeIcon : inactiveIcon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.img-icon</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">return</span> {
      checked,
      <span class="hljs-attr">activeIcon</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&#39;</span>,
      <span class="hljs-attr">inactiveIcon</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png&#39;</span>,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-wen-ben-dian-ji" tabindex="-1">\u7981\u7528\u6587\u672C\u70B9\u51FB</h3><p>\u8BBE\u7F6E <code>label-disabled</code> \u5C5E\u6027\u540E\uFF0C\u70B9\u51FB\u56FE\u6807\u4EE5\u5916\u7684\u5185\u5BB9\u4E0D\u4F1A\u89E6\u53D1\u590D\u9009\u6846\u5207\u6362\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">label-disabled</span>&gt;</span>\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="fu-xuan-kuang-zu" tabindex="-1">\u590D\u9009\u6846\u7EC4</h3><p>\u590D\u9009\u6846\u53EF\u4EE5\u4E0E\u590D\u9009\u6846\u7EC4\u4E00\u8D77\u4F7F\u7528\uFF0C\u590D\u9009\u6846\u7EC4\u901A\u8FC7 <code>v-model</code> \u6570\u7EC4\u7ED1\u5B9A\u590D\u9009\u6846\u7684\u52FE\u9009\u72B6\u6001\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>\u590D\u9009\u6846 a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>\u590D\u9009\u6846 b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;a&#39;</span>, <span class="hljs-string">&#39;b&#39;</span>]);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shui-ping-pai-lie" tabindex="-1">\u6C34\u5E73\u6392\u5217</h3><p>\u5C06 <code>direction</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3A <code>horizontal</code> \u540E\uFF0C\u590D\u9009\u6846\u7EC4\u4F1A\u53D8\u6210\u6C34\u5E73\u6392\u5217\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>\u590D\u9009\u6846 a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>\u590D\u9009\u6846 b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xian-zhi-zui-da-ke-xuan-shu" tabindex="-1">\u9650\u5236\u6700\u5927\u53EF\u9009\u6570</h3><p>\u901A\u8FC7 <code>max</code> \u5C5E\u6027\u53EF\u4EE5\u9650\u5236\u590D\u9009\u6846\u7EC4\u7684\u6700\u5927\u53EF\u9009\u6570\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>\u590D\u9009\u6846 a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>\u590D\u9009\u6846 b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>\u590D\u9009\u6846 c<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="quan-xuan-yu-fan-xuan" tabindex="-1">\u5168\u9009\u4E0E\u53CD\u9009</h3><p>\u901A\u8FC7 <code>CheckboxGroup</code> \u5B9E\u4F8B\u4E0A\u7684 <code>toggleAll</code> \u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5168\u9009\u4E0E\u53CD\u9009\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;checkboxGroup&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>\u590D\u9009\u6846 a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>\u590D\u9009\u6846 b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>\u590D\u9009\u6846 c<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;checkAll&quot;</span>&gt;</span>\u5168\u9009<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleAll&quot;</span>&gt;</span>\u53CD\u9009<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> checkboxGroup = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">checkAll</span> = (<span class="hljs-params"></span>) =&gt; {
      checkboxGroup.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);
    }
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggleAll</span> = (<span class="hljs-params"></span>) =&gt; {
      checkboxGroup.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>();
    },

    <span class="hljs-keyword">return</span> {
      checked,
      checkAll,
      toggleAll,
      checkboxGroup,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="da-pei-dan-yuan-ge-zu-jian-shi-yong" tabindex="-1">\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528</h3><p>\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528\u65F6\uFF0C\u9700\u8981\u518D\u5F15\u5165 <code>Cell</code> \u548C <code>CellGroup</code> \u7EC4\u4EF6\uFF0C\u5E76\u901A\u8FC7 <code>Checkbox</code> \u5B9E\u4F8B\u4E0A\u7684 toggle \u65B9\u6CD5\u89E6\u53D1\u5207\u6362\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in list&quot;</span>
      <span class="hljs-attr">clickable</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>
      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;\`\u590D\u9009\u6846 \${item}\`&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggle(index)&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span>
          <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;item&quot;</span>
          <span class="hljs-attr">:ref</span>=<span class="hljs-string">&quot;el =&gt; checkboxRefs[index] = el&quot;</span>
          @<span class="hljs-attr">click.stop</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, onBeforeUpdate } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> checkboxRefs = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggle</span> = (<span class="hljs-params">index</span>) =&gt; {
      checkboxRefs.<span class="hljs-property">value</span>[index].<span class="hljs-title function_">toggle</span>();
    };

    <span class="hljs-title function_">onBeforeUpdate</span>(<span class="hljs-function">() =&gt;</span> {
      checkboxRefs.<span class="hljs-property">value</span> = [];
    });

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">list</span>: [<span class="hljs-string">&#39;a&#39;</span>, <span class="hljs-string">&#39;b&#39;</span>],
      toggle,
      checked,
      checkboxRefs,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="checkbox-props" tabindex="-1">Checkbox Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u662F\u5426\u4E3A\u9009\u4E2D\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>name</td><td>\u6807\u8BC6\u7B26\uFF0C\u901A\u5E38\u4E3A\u4E00\u4E2A\u552F\u4E00\u7684\u5B57\u7B26\u4E32\u6216\u6570\u5B57</td><td><em>any</em></td><td>-</td></tr><tr><td>shape</td><td>\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A <code>square</code></td><td><em>string</em></td><td><code>round</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u590D\u9009\u6846</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>label-disabled</td><td>\u662F\u5426\u7981\u7528\u590D\u9009\u6846\u6587\u672C\u70B9\u51FB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>label-position</td><td>\u6587\u672C\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>left</code></td><td><em>string</em></td><td><code>right</code></td></tr><tr><td>icon-size</td><td>\u56FE\u6807\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>20px</code></td></tr><tr><td>checked-color</td><td>\u9009\u4E2D\u72B6\u6001\u989C\u8272</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>bind-group</td><td>\u662F\u5426\u4E0E\u590D\u9009\u6846\u7EC4\u7ED1\u5B9A</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u6240\u6709\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26</td><td><em>any[]</em></td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u6240\u6709\u590D\u9009\u6846</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>max</td><td>\u6700\u5927\u53EF\u9009\u6570\uFF0C<code>0</code> \u4E3A\u65E0\u9650\u5236</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>direction</td><td>\u6392\u5217\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A <code>horizontal</code></td><td><em>string</em></td><td><code>vertical</code></td></tr><tr><td>icon-size</td><td>\u6240\u6709\u590D\u9009\u6846\u7684\u56FE\u6807\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>20px</code></td></tr><tr><td>checked-color</td><td>\u6240\u6709\u590D\u9009\u6846\u7684\u9009\u4E2D\u72B6\u6001\u989C\u8272</td><td><em>string</em></td><td><code>#1989fa</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="checkbox-events" tabindex="-1">Checkbox Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td><em>checked: boolean</em></td></tr><tr><td>click</td><td>\u70B9\u51FB\u590D\u9009\u6846\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td><em>names: any[]</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="checkbox-slots" tabindex="-1">Checkbox Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u6587\u672C</td><td>-</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td><td><em>{ checked: boolean, disabled: boolean }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="checkboxgroup-fang-fa" tabindex="-1">CheckboxGroup \u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 CheckboxGroup \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>toggleAll</td><td>\u5207\u6362\u6240\u6709\u590D\u9009\u6846\uFF0C\u4F20 <code>true</code> \u4E3A\u9009\u4E2D\uFF0C<code>false</code> \u4E3A\u53D6\u6D88\u9009\u4E2D\uFF0C\u4E0D\u4F20\u53C2\u4E3A\u53D6\u53CD</td><td><em>options?: boolean | object</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="toggleall-fang-fa-shi-li" tabindex="-1">toggleAll \u65B9\u6CD5\u793A\u4F8B</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> type { <span class="hljs-title class_">CheckboxGroupInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> checkboxGroupRef = ref&lt;<span class="hljs-title class_">CheckboxGroupInstance</span>&gt;();

<span class="hljs-comment">// \u5168\u90E8\u53CD\u9009</span>
checkboxGroupRef?.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>();
<span class="hljs-comment">// \u5168\u90E8\u9009\u4E2D</span>
checkboxGroupRef?.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);
<span class="hljs-comment">// \u5168\u90E8\u53D6\u6D88</span>
checkboxGroupRef?.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">false</span>);

<span class="hljs-comment">// \u5168\u90E8\u53CD\u9009\uFF0C\u5E76\u8DF3\u8FC7\u7981\u7528\u7684\u590D\u9009\u6846</span>
checkboxGroupRef?.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>({
  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,
});
<span class="hljs-comment">// \u5168\u90E8\u9009\u4E2D\uFF0C\u5E76\u8DF3\u8FC7\u7981\u7528\u7684\u590D\u9009\u6846</span>
checkboxGroupRef?.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>({
  <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="checkbox-fang-fa" tabindex="-1">Checkbox \u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Checkbox \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>toggle</td><td>\u5207\u6362\u9009\u4E2D\u72B6\u6001\uFF0C\u4F20 <code>true</code> \u4E3A\u9009\u4E2D\uFF0C<code>false</code> \u4E3A\u53D6\u6D88\u9009\u4E2D\uFF0C\u4E0D\u4F20\u53C2\u4E3A\u53D6\u53CD</td><td><em>checked?: boolean</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">CheckboxProps</span>,
  <span class="hljs-title class_">CheckboxShape</span>,
  <span class="hljs-title class_">CheckboxInstance</span>,
  <span class="hljs-title class_">CheckboxLabelPosition</span>,
  <span class="hljs-title class_">CheckboxGroupProps</span>,
  <span class="hljs-title class_">CheckboxGroupInstance</span>,
  <span class="hljs-title class_">CheckboxGroupDirection</span>,
  <span class="hljs-title class_">CheckboxGroupToggleAllOptions</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>CheckboxInstance</code> \u548C <code>CheckboxGroupInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CheckboxInstance</span>, <span class="hljs-title class_">CheckboxGroupInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> checkboxRef = ref&lt;<span class="hljs-title class_">CheckboxInstance</span>&gt;();
<span class="hljs-keyword">const</span> checkboxGroupRef = ref&lt;<span class="hljs-title class_">CheckboxGroupInstance</span>&gt;();

checkboxRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggle</span>();
checkboxGroupRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>();
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-checkbox-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-checkbox-border-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-checkbox-transition-duration</td><td><em>var(--van-animation-duration-fast)</em></td><td>-</td></tr><tr><td>--van-checkbox-label-margin</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-checkbox-label-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-checkbox-checked-icon-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-checkbox-disabled-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-checkbox-disabled-label-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-checkbox-disabled-background-color</td><td><em>var(--van-border-color)</em></td><td>-</td></tr></tbody></table></div>`,28),e=[c],i={__name:"README.zh-CN",setup(p,{expose:s}){return s({frontmatter:{}}),(d,h)=>(a(),n("div",l,e))}};export{i as default};
