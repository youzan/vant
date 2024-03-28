import{o as a,a as n,y as p}from"./vue-libs.b44bc779.js";const t={class:"van-doc-markdown-body"},l=p(`<h1>\u8FDB\u9636\u7528\u6CD5</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u901A\u8FC7\u672C\u7AE0\u8282\u4F60\u53EF\u4EE5\u4E86\u89E3\u5230 Vant \u7684\u4E00\u4E9B\u8FDB\u9636\u7528\u6CD5\uFF0C\u6BD4\u5982\u7EC4\u4EF6\u63D2\u69FD\u7528\u6CD5\u3001\u591A\u79CD\u6D4F\u89C8\u5668\u9002\u914D\u65B9\u5F0F\u3002</p></div><h2 id="zu-jian-yong-fa" tabindex="-1">\u7EC4\u4EF6\u7528\u6CD5</h2><div class="van-doc-card"><h3 id="zu-jian-zhu-ce" tabindex="-1">\u7EC4\u4EF6\u6CE8\u518C</h3><p>Vant \u652F\u6301\u591A\u79CD\u7EC4\u4EF6\u6CE8\u518C\u65B9\u5F0F\uFF0C\u8BF7\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u9700\u8981\u8FDB\u884C\u9009\u62E9\u3002</p><h4 id="quan-ju-zhu-ce" tabindex="-1">\u5168\u5C40\u6CE8\u518C</h4><p>\u5168\u5C40\u6CE8\u518C\u540E\uFF0C\u4F60\u53EF\u4EE5\u5728 app \u4E0B\u7684\u4EFB\u610F\u5B50\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u6CE8\u518C\u7684 Vant \u7EC4\u4EF6\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();

<span class="hljs-comment">// \u65B9\u5F0F\u4E00. \u901A\u8FC7 app.use \u6CE8\u518C</span>
<span class="hljs-comment">// \u6CE8\u518C\u5B8C\u6210\u540E\uFF0C\u5728\u6A21\u677F\u4E2D\u901A\u8FC7 &lt;van-button&gt; \u6216 &lt;VanButton&gt; \u6807\u7B7E\u6765\u4F7F\u7528\u6309\u94AE\u7EC4\u4EF6</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>);

<span class="hljs-comment">// \u65B9\u5F0F\u4E8C. \u901A\u8FC7 app.component \u6CE8\u518C</span>
<span class="hljs-comment">// \u6CE8\u518C\u5B8C\u6210\u540E\uFF0C\u5728\u6A21\u677F\u4E2D\u901A\u8FC7 &lt;van-button&gt; \u6807\u7B7E\u6765\u4F7F\u7528\u6309\u94AE\u7EC4\u4EF6</span>
app.<span class="hljs-title function_">component</span>(<span class="hljs-title class_">Button</span>.<span class="hljs-property">name</span>, <span class="hljs-title class_">Button</span>);
</code></pre><h4 id="ju-bu-zhu-ce" tabindex="-1">\u5C40\u90E8\u6CE8\u518C</h4><p>\u5C40\u90E8\u6CE8\u518C\u540E\uFF0C\u4F60\u53EF\u4EE5\u5728\u5F53\u524D\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u6CE8\u518C\u7684 Vant \u7EC4\u4EF6\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [<span class="hljs-title class_">Button</span>.<span class="hljs-property">name</span>]: <span class="hljs-title class_">Button</span>,
  },
};
</code></pre><blockquote><p>\u5BF9\u4E8E\u7EC4\u4EF6\u6CE8\u518C\u66F4\u8BE6\u7EC6\u7684\u4ECB\u7ECD\uFF0C\u8BF7\u53C2\u8003 <a href="https://v3.cn.vuejs.org/guide/component-registration.html#%E7%BB%84%E4%BB%B6%E6%B3%A8%E5%86%8C" target="_blank">Vue \u5B98\u65B9\u6587\u6863 - \u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p></blockquote><h4 id="script-setup" tabindex="-1">&lt;script setup&gt;</h4><p>\u5728 <code>&lt;script setup&gt;</code> \u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 Vant \u7EC4\u4EF6\uFF0C\u4E0D\u9700\u8981\u8FDB\u884C\u7EC4\u4EF6\u6CE8\u518C\u3002</p><pre><code class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><h4 id="jsx-tsx" tabindex="-1">JSX/TSX</h4><p>\u5728 JSX \u548C TSX \u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 Vant \u7EC4\u4EF6\uFF0C\u4E0D\u9700\u8981\u8FDB\u884C\u7EC4\u4EF6\u6CE8\u518C\u3002</p><pre><code class="language-jsx"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> /&gt;</span></span>;
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zu-jian-cha-cao" tabindex="-1">\u7EC4\u4EF6\u63D2\u69FD</h3><p>Vant \u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u7EC4\u4EF6\u63D2\u69FD\uFF0C\u901A\u8FC7\u63D2\u69FD\u53EF\u4EE5\u5BF9\u7EC4\u4EF6\u7684\u67D0\u4E00\u90E8\u5206\u8FDB\u884C\u4E2A\u6027\u5316\u5B9A\u5236\u3002\u5982\u679C\u4F60\u5BF9 Vue \u7684\u63D2\u69FD\u4E0D\u592A\u719F\u6089\uFF0C\u53EF\u4EE5\u9605\u8BFB Vue \u5B98\u65B9\u6587\u6863\u4E2D\u7684<a href="https://v3.cn.vuejs.org/guide/component-slots.html" target="_blank">\u63D2\u69FD\u7AE0\u8282</a>\u3002\u4E0B\u9762\u662F\u901A\u8FC7\u63D2\u69FD\u6765\u5B9A\u5236 Checkbox \u56FE\u6807\u7684\u793A\u4F8B\uFF1A</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- \u4F7F\u7528\u7EC4\u4EF6\u63D0\u4F9B\u7684 icon \u63D2\u69FD --&gt;</span>
  <span class="hljs-comment">&lt;!-- \u5C06\u9ED8\u8BA4\u56FE\u6807\u66FF\u6362\u4E3A\u4E2A\u6027\u5316\u56FE\u7247 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.checked ? activeIcon : inactiveIcon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">activeIcon</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&#39;</span>,
      <span class="hljs-attr">inactiveIcon</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png&#39;</span>,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zu-jian-shi-li-fang-fa" tabindex="-1">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</h3><p>Vant \u4E2D\u7684\u8BB8\u591A\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u901A\u8FC7 <a href="https://v3.cn.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> \u6765\u6CE8\u518C\u7EC4\u4EF6\u5F15\u7528\u4FE1\u606F\uFF0C\u5F15\u7528\u4FE1\u606F\u5C06\u4F1A\u6CE8\u518C\u5728\u7236\u7EC4\u4EF6\u7684<code>$refs</code>\u5BF9\u8C61\u4E0A\u3002\u6CE8\u518C\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>this.$refs.xxx</code>\u8BBF\u95EE\u5230\u5BF9\u5E94\u7684\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u5E76\u8C03\u7528\u4E0A\u9762\u7684\u5B9E\u4F8B\u65B9\u6CD5\u3002</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u901A\u8FC7 ref \u5C5E\u6027\u5C06\u7EC4\u4EF6\u7ED1\u5B9A\u5230 this.$refs.checkbox \u4E0A --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;checkbox&quot;</span>&gt;</span> \u590D\u9009\u6846 <span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">checked</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-comment">// \u6CE8\u610F\uFF1A\u7EC4\u4EF6\u6302\u8F7D\u540E\u624D\u80FD\u8BBF\u95EE\u5230 ref \u5BF9\u8C61</span>
  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">checkbox</span>.<span class="hljs-title function_">toggle</span>();
  },
};
</code></pre></div><h2 id="liu-lan-qi-gua-pei" tabindex="-1">\u6D4F\u89C8\u5668\u9002\u914D</h2><div class="van-doc-card"><h3 id="viewport-bu-ju" tabindex="-1">Viewport \u5E03\u5C40</h3><p>Vant \u9ED8\u8BA4\u4F7F\u7528 <code>px</code> \u4F5C\u4E3A\u6837\u5F0F\u5355\u4F4D\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528 <code>viewport</code> \u5355\u4F4D (vw, vh, vmin, vmax)\uFF0C\u63A8\u8350\u4F7F\u7528 <a href="https://github.com/evrone/postcss-px-to-viewport" target="_blank">postcss-px-to-viewport</a> \u8FDB\u884C\u8F6C\u6362\u3002</p><p><a href="https://github.com/evrone/postcss-px-to-viewport" target="_blank">postcss-px-to-viewport</a> \u662F\u4E00\u6B3E PostCSS \u63D2\u4EF6\uFF0C\u7528\u4E8E\u5C06 px \u5355\u4F4D\u8F6C\u5316\u4E3A vw/vh \u5355\u4F4D\u3002</p><h4 id="postcss-postcss-shi-li-pei-zhi" tabindex="-1">PostCSS PostCSS \u793A\u4F8B\u914D\u7F6E</h4><p>\u4E0B\u9762\u63D0\u4F9B\u4E86\u4E00\u4EFD\u57FA\u672C\u7684 PostCSS \u793A\u4F8B\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5728\u6B64\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u6839\u636E\u9879\u76EE\u9700\u6C42\u8FDB\u884C\u4FEE\u6539\u3002</p><pre><code class="language-js"><span class="hljs-comment">// postcss.config.js</span>
<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: {
    <span class="hljs-string">&#39;postcss-px-to-viewport&#39;</span>: {
      <span class="hljs-attr">viewportWidth</span>: <span class="hljs-number">375</span>,
    },
  },
};
</code></pre><blockquote><p>Tips: \u5728\u914D\u7F6E postcss-loader \u65F6\uFF0C\u5E94\u907F\u514D ignore node_modules \u76EE\u5F55\uFF0C\u5426\u5219\u5C06\u5BFC\u81F4 Vant \u6837\u5F0F\u65E0\u6CD5\u88AB\u7F16\u8BD1\u3002</p></blockquote></div><div class="van-doc-card"><h3 id="rem-bu-ju-gua-pei" tabindex="-1">Rem \u5E03\u5C40\u9002\u914D</h3><p>\u5982\u679C\u9700\u8981\u4F7F\u7528 <code>rem</code> \u5355\u4F4D\u8FDB\u884C\u9002\u914D\uFF0C\u63A8\u8350\u4F7F\u7528\u4EE5\u4E0B\u4E24\u4E2A\u5DE5\u5177\uFF1A</p><ul><li><a href="https://github.com/cuth/postcss-pxtorem" target="_blank">postcss-pxtorem</a> \u662F\u4E00\u6B3E PostCSS \u63D2\u4EF6\uFF0C\u7528\u4E8E\u5C06 px \u5355\u4F4D\u8F6C\u5316\u4E3A rem \u5355\u4F4D</li><li><a href="https://github.com/amfe/lib-flexible" target="_blank">lib-flexible</a> \u7528\u4E8E\u8BBE\u7F6E rem \u57FA\u51C6\u503C</li></ul><h4 id="postcss-shi-li-pei-zhi" tabindex="-1">PostCSS \u793A\u4F8B\u914D\u7F6E</h4><p>\u4E0B\u9762\u63D0\u4F9B\u4E86\u4E00\u4EFD\u57FA\u672C\u7684 PostCSS \u793A\u4F8B\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5728\u6B64\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u6839\u636E\u9879\u76EE\u9700\u6C42\u8FDB\u884C\u4FEE\u6539\u3002</p><pre><code class="language-js"><span class="hljs-comment">// postcss.config.js</span>
<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: {
    <span class="hljs-string">&#39;postcss-pxtorem&#39;</span>: {
      <span class="hljs-attr">rootValue</span>: <span class="hljs-number">37.5</span>,
      <span class="hljs-attr">propList</span>: [<span class="hljs-string">&#39;*&#39;</span>],
    },
  },
};
</code></pre><blockquote><p>Tips: \u5728\u914D\u7F6E postcss-pxtorem \u65F6\uFF0C\u540C\u6837\u5E94\u907F\u514D ignore node_modules \u76EE\u5F55\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4 Vant \u6837\u5F0F\u65E0\u6CD5\u88AB\u7F16\u8BD1\u3002</p></blockquote><h4 id="qi-ta-she-ji-gao-chi-cun" tabindex="-1">\u5176\u4ED6\u8BBE\u8BA1\u7A3F\u5C3A\u5BF8</h4><p>\u5982\u679C\u8BBE\u8BA1\u7A3F\u7684\u5C3A\u5BF8\u4E0D\u662F 375\uFF0C\u800C\u662F 750 \u6216\u5176\u4ED6\u5927\u5C0F\uFF0C\u53EF\u4EE5\u5C06 <code>rootValue</code> \u914D\u7F6E\u8C03\u6574\u4E3A:</p><pre><code class="language-js"><span class="hljs-comment">// postcss.config.js</span>
<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: {
    <span class="hljs-comment">// postcss-pxtorem \u63D2\u4EF6\u7684\u7248\u672C\u9700\u8981 &gt;= 5.0.0</span>
    <span class="hljs-string">&#39;postcss-pxtorem&#39;</span>: {
      <span class="hljs-title function_">rootValue</span>(<span class="hljs-params">{ file }</span>) {
        <span class="hljs-keyword">return</span> file.<span class="hljs-title function_">indexOf</span>(<span class="hljs-string">&#39;vant&#39;</span>) !== -<span class="hljs-number">1</span> ? <span class="hljs-number">37.5</span> : <span class="hljs-number">75</span>;
      },
      <span class="hljs-attr">propList</span>: [<span class="hljs-string">&#39;*&#39;</span>],
    },
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zhuo-mian-duan-gua-pei" tabindex="-1">\u684C\u9762\u7AEF\u9002\u914D</h3><p>Vant \u662F\u4E00\u4E2A\u9762\u5411\u79FB\u52A8\u7AEF\u7684\u7EC4\u4EF6\u5E93\uFF0C\u56E0\u6B64\u9ED8\u8BA4\u53EA\u9002\u914D\u4E86\u79FB\u52A8\u7AEF\u8BBE\u5907\uFF0C\u8FD9\u610F\u5473\u7740\u7EC4\u4EF6\u53EA\u76D1\u542C\u4E86\u79FB\u52A8\u7AEF\u7684 <code>touch</code> \u4E8B\u4EF6\uFF0C\u6CA1\u6709\u76D1\u542C\u684C\u9762\u7AEF\u7684 <code>mouse</code> \u4E8B\u4EF6\u3002</p><p>\u5982\u679C\u4F60\u9700\u8981\u5728\u684C\u9762\u7AEF\u4F7F\u7528 Vant\uFF0C\u53EF\u4EE5\u5F15\u5165\u6211\u4EEC\u63D0\u4F9B\u7684 <a href="https://github.com/vant-ui/vant/tree/3.x/packages/vant-touch-emulator" target="_blank">@vant/touch-emulator</a>\uFF0C\u8FD9\u4E2A\u5E93\u4F1A\u5728\u684C\u9762\u7AEF\u81EA\u52A8\u5C06 <code>mouse</code> \u4E8B\u4EF6\u8F6C\u6362\u6210\u5BF9\u5E94\u7684 <code>touch</code> \u4E8B\u4EF6\uFF0C\u4F7F\u5F97\u7EC4\u4EF6\u80FD\u591F\u5728\u684C\u9762\u7AEF\u4F7F\u7528\u3002</p><pre><code class="language-bash"><span class="hljs-comment"># \u5B89\u88C5\u6A21\u5757</span>
npm i @vant/touch-emulator -S
</code></pre><pre><code class="language-js"><span class="hljs-comment">// \u5F15\u5165\u6A21\u5757\u540E\u81EA\u52A8\u751F\u6548</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@vant/touch-emulator&#39;</span>;
</code></pre></div><div class="van-doc-card"><h3 id="di-bu-an-quan-qu-gua-pei" tabindex="-1">\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D</h3><p>iPhone X \u7B49\u673A\u578B\u5E95\u90E8\u5B58\u5728\u5E95\u90E8\u6307\u793A\u6761\uFF0C\u6307\u793A\u6761\u7684\u64CD\u4F5C\u533A\u57DF\u4E0E\u9875\u9762\u5E95\u90E8\u5B58\u5728\u91CD\u5408\uFF0C\u5BB9\u6613\u5BFC\u81F4\u7528\u6237\u8BEF\u64CD\u4F5C\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u9488\u5BF9\u8FD9\u4E9B\u673A\u578B\u8FDB\u884C\u5B89\u5168\u533A\u9002\u914D\u3002Vant \u4E2D\u90E8\u5206\u7EC4\u4EF6\u63D0\u4F9B\u4E86 <code>safe-area-inset-top</code> \u6216 <code>safe-area-inset-bottom</code> \u5C5E\u6027\uFF0C\u8BBE\u7F6E\u8BE5\u5C5E\u6027\u540E\uFF0C\u5373\u53EF\u5728\u5BF9\u5E94\u7684\u673A\u578B\u4E0A\u5F00\u542F\u9002\u914D\uFF0C\u5982\u4E0B\u793A\u4F8B\uFF1A</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u5728 head \u6807\u7B7E\u4E2D\u6DFB\u52A0 meta \u6807\u7B7E\uFF0C\u5E76\u8BBE\u7F6E viewport-fit=cover \u503C --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">meta</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span>
  <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover&quot;</span>
/&gt;</span>

<span class="hljs-comment">&lt;!-- \u5F00\u542F\u9876\u90E8\u5B89\u5168\u533A\u9002\u914D --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span> <span class="hljs-attr">safe-area-inset-top</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- \u5F00\u542F\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span> <span class="hljs-attr">safe-area-inset-bottom</span> /&gt;</span>
</code></pre><img src="https://fastly.jsdelivr.net/npm/@vant/assets/safearea.png"></div>`,11),e=[l],d={__name:"advanced-usage.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(h,r)=>(a(),n("div",t,e))}};export{d as default};
