import{o as a,a as n,y as l}from"./vue-libs.b44bc779.js";const p={class:"van-doc-markdown-body"},t=l(`<h1>\u5FEB\u901F\u4E0A\u624B</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u901A\u8FC7\u672C\u7AE0\u8282\u4F60\u53EF\u4EE5\u4E86\u89E3\u5230 Vant \u7684\u5B89\u88C5\u65B9\u6CD5\u548C\u57FA\u672C\u4F7F\u7528\u59FF\u52BF\u3002</p></div><h2 id="an-zhuang" tabindex="-1">\u5B89\u88C5</h2><div class="van-doc-card"><h3 id="tong-guo-npm-an-zhuang" tabindex="-1">\u901A\u8FC7 npm \u5B89\u88C5</h3><p>\u5728\u73B0\u6709\u9879\u76EE\u4E2D\u4F7F\u7528 Vant \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>npm</code> \u8FDB\u884C\u5B89\u88C5\uFF1A</p><pre><code class="language-bash"><span class="hljs-comment"># Vue 3 \u9879\u76EE\uFF0C\u5B89\u88C5\u6700\u65B0\u7248 Vant</span>
npm i vant

<span class="hljs-comment"># Vue 2 \u9879\u76EE\uFF0C\u5B89\u88C5 Vant 2</span>
npm i vant@latest-v2
</code></pre><p>\u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>yarn</code> \u6216 <code>pnpm</code> \u8FDB\u884C\u5B89\u88C5\uFF1A</p><pre><code class="language-bash"><span class="hljs-comment"># \u901A\u8FC7 yarn \u5B89\u88C5</span>
yarn add vant

<span class="hljs-comment"># \u901A\u8FC7 pnpm \u5B89\u88C5</span>
pnpm add vant
</code></pre></div><div class="van-doc-card"><h3 id="tong-guo-cdn-an-zhuang" tabindex="-1">\u901A\u8FC7 CDN \u5B89\u88C5</h3><p>\u4F7F\u7528 Vant \u6700\u7B80\u5355\u7684\u65B9\u6CD5\u662F\u76F4\u63A5\u5728 HTML \u6587\u4EF6\u4E2D\u5F15\u5165 CDN \u94FE\u63A5\uFF0C\u4E4B\u540E\u4F60\u53EF\u4EE5\u901A\u8FC7\u5168\u5C40\u53D8\u91CF <code>vant</code> \u8BBF\u95EE\u5230\u6240\u6709\u7EC4\u4EF6\u3002</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u5F15\u5165\u6837\u5F0F\u6587\u4EF6 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span>
  <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span>
  <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/vant@3/lib/index.css&quot;</span>
/&gt;</span>

<span class="hljs-comment">&lt;!-- \u5F15\u5165 Vue \u548C Vant \u7684 JS \u6587\u4EF6 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/vue@3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/vant@3/lib/vant.min.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-comment">// \u5728 #app \u6807\u7B7E\u4E0B\u6E32\u67D3\u4E00\u4E2A\u6309\u94AE\u7EC4\u4EF6</span>
  <span class="hljs-keyword">const</span> app = <span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">createApp</span>({
    <span class="hljs-attr">template</span>: <span class="hljs-string">\`&lt;van-button&gt;\u6309\u94AE&lt;/van-button&gt;\`</span>,
  });
  app.<span class="hljs-title function_">use</span>(vant);

  <span class="hljs-comment">// \u901A\u8FC7 CDN \u5F15\u5165\u65F6\u4E0D\u4F1A\u81EA\u52A8\u6CE8\u518C Lazyload \u7EC4\u4EF6</span>
  <span class="hljs-comment">// \u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F\u624B\u52A8\u6CE8\u518C</span>
  app.<span class="hljs-title function_">use</span>(vant.<span class="hljs-property">Lazyload</span>);

  <span class="hljs-comment">// \u8C03\u7528\u51FD\u6570\u7EC4\u4EF6\uFF0C\u5F39\u51FA\u4E00\u4E2A Toast</span>
  vant.<span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u63D0\u793A&#39;</span>);

  app.<span class="hljs-title function_">mount</span>(<span class="hljs-string">&#39;#app&#39;</span>);
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h4 id="mian-fei-cdn" tabindex="-1">\u514D\u8D39 CDN</h4><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u514D\u8D39 CDN \u670D\u52A1\u6765\u4F7F\u7528 Vant:</p><ul><li><a href="https://www.jsdelivr.com/package/npm/vant" target="_blank">jsdelivr</a></li><li><a href="https://cdnjs.com/libraries/vant" target="_blank">cdnjs</a></li><li><a href="https://unpkg.com/" target="_blank">unpkg</a></li></ul><p>\u6CE8\u610F\uFF1A\u514D\u8D39 CDN \u4E00\u822C\u7528\u4E8E\u5236\u4F5C\u539F\u578B\u6216\u4E2A\u4EBA\u5C0F\u578B\u9879\u76EE\uFF0C\u4E0D\u63A8\u8350\u5728\u4F01\u4E1A\u751F\u4EA7\u73AF\u5883\u4E2D\u4F7F\u7528\u514D\u8D39 CDN\u3002</p><p>\u5BF9\u4E8E\u4F01\u4E1A\u5F00\u53D1\u8005\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u4EE5\u4E0B\u65B9\u5F0F\uFF1A</p><ul><li>\u901A\u8FC7 npm \u5F15\u5165\uFF0C\u5E76\u901A\u8FC7\u6784\u5EFA\u5DE5\u5177\u8FDB\u884C\u6253\u5305</li><li>\u4E0B\u8F7D\u5BF9\u5E94\u6587\u4EF6\uFF0C\u5E76\u6258\u7BA1\u5728\u4F60\u81EA\u5DF1\u7684\u670D\u52A1\u5668\u6216 CDN \u4E0A</li></ul></div><h2 id="shi-li" tabindex="-1">\u793A\u4F8B</h2><div class="van-doc-card"><h3 id="shi-li-gong-cheng" tabindex="-1">\u793A\u4F8B\u5DE5\u7A0B</h3><p>\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684<a href="https://github.com/vant-ui/vant-demo" target="_blank">\u793A\u4F8B\u5DE5\u7A0B</a>\uFF0C\u901A\u8FC7\u793A\u4F8B\u5DE5\u7A0B\u4F60\u53EF\u4EE5\u4E86\u89E3\u5982\u4E0B\u5185\u5BB9\uFF1A</p><ul><li>\u57FA\u4E8E Vite \u548C Vant \u642D\u5EFA\u5E94\u7528</li><li>\u57FA\u4E8E Nuxt \u548C Vant \u642D\u5EFA\u5E94\u7528</li><li>\u57FA\u4E8E Vue CLI \u548C Vant \u642D\u5EFA\u5E94\u7528</li><li>\u914D\u7F6E\u6309\u9700\u5F15\u5165\u7EC4\u4EF6</li><li>\u914D\u7F6E\u57FA\u4E8E Rem \u7684\u9002\u914D\u65B9\u6848</li><li>\u914D\u7F6E\u57FA\u4E8E Viewport \u7684\u9002\u914D\u65B9\u6848</li><li>\u914D\u7F6E\u57FA\u4E8E TypeScript \u7684\u5DE5\u7A0B</li><li>\u914D\u7F6E\u81EA\u5B9A\u4E49\u4E3B\u9898\u8272\u65B9\u6848</li></ul></div><h2 id="yin-ru-zu-jian" tabindex="-1">\u5F15\u5165\u7EC4\u4EF6</h2><div class="van-doc-card"><h3 id="fang-fa-yi.-chang-gui-yong-fa" tabindex="-1">\u65B9\u6CD5\u4E00. \u5E38\u89C4\u7528\u6CD5</h3><p>\u4E0B\u9762\u662F\u4F7F\u7528 Vant \u7EC4\u4EF6\u7684\u7528\u6CD5\u793A\u4F8B\uFF1A</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// 1. \u5F15\u5165\u4F60\u9700\u8981\u7684\u7EC4\u4EF6</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
<span class="hljs-comment">// 2. \u5F15\u5165\u7EC4\u4EF6\u6837\u5F0F</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/lib/index.css&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();

<span class="hljs-comment">// 3. \u6CE8\u518C\u4F60\u9700\u8981\u7684\u7EC4\u4EF6</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>);
</code></pre><p>Vant \u652F\u6301\u591A\u79CD\u7EC4\u4EF6\u6CE8\u518C\u65B9\u5F0F\uFF0C\u9664\u4E86\u5728 app \u4E0A\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u5176\u4ED6\u7684\u65B9\u5F0F\uFF0C\u6BD4\u5982\u5C40\u90E8\u6CE8\u518C\uFF0C\u8BE6\u89C1 <a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a> \u7AE0\u8282\u3002</p><blockquote><p>\u63D0\u793A\uFF1AVant \u9ED8\u8BA4\u652F\u6301 Tree Shaking\uFF0C\u56E0\u6B64\u4F60\u4E0D\u9700\u8981\u914D\u7F6E\u4EFB\u4F55\u63D2\u4EF6\uFF0C\u901A\u8FC7 Tree Shaking \u5373\u53EF\u79FB\u9664\u4E0D\u9700\u8981\u7684 JS \u4EE3\u7801\uFF0C\u4F46 CSS \u6837\u5F0F\u65E0\u6CD5\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u4F18\u5316\uFF0C\u5982\u679C\u9700\u8981\u6309\u9700\u5F15\u5165 CSS \u6837\u5F0F\uFF0C\u8BF7\u53C2\u8003\u4E0B\u9762\u7684\u65B9\u6CD5\u4E8C\u3002</p></blockquote></div><div class="van-doc-card"><h3 id="fang-fa-er.-an-xu-yin-ru-zu-jian-yang-shi" tabindex="-1">\u65B9\u6CD5\u4E8C. \u6309\u9700\u5F15\u5165\u7EC4\u4EF6\u6837\u5F0F</h3><p>\u5728\u57FA\u4E8E <code>vite</code>\u3001<code>webpack</code> \u6216 <code>vue-cli</code> \u7684\u9879\u76EE\u4E2D\u4F7F\u7528 Vant \u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="https://github.com/antfu/unplugin-vue-components" target="_blank">unplugin-vue-components</a> \u63D2\u4EF6\uFF0C\u5B83\u53EF\u4EE5\u81EA\u52A8\u5F15\u5165\u7EC4\u4EF6\uFF0C\u5E76\u6309\u9700\u5F15\u5165\u7EC4\u4EF6\u7684\u6837\u5F0F\u3002</p><p>\u76F8\u6BD4\u4E8E\u5E38\u89C4\u7528\u6CD5\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u6309\u9700\u5F15\u5165\u7EC4\u4EF6\u7684 CSS \u6837\u5F0F\uFF0C\u4ECE\u800C\u51CF\u5C11\u4E00\u90E8\u5206\u4EE3\u7801\u4F53\u79EF\uFF0C\u4F46\u4F7F\u7528\u8D77\u6765\u4F1A\u53D8\u5F97\u7E41\u7410\u4E00\u4E9B\u3002\u5982\u679C\u4E1A\u52A1\u5BF9 CSS \u7684\u4F53\u79EF\u8981\u6C42\u4E0D\u662F\u7279\u522B\u6781\u81F4\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528\u66F4\u7B80\u4FBF\u7684\u5E38\u89C4\u7528\u6CD5\u3002</p><h4 id="1.-an-zhuang-cha-jian" tabindex="-1">1. \u5B89\u88C5\u63D2\u4EF6</h4><pre><code class="language-bash"><span class="hljs-comment"># \u901A\u8FC7 npm \u5B89\u88C5</span>
npm i unplugin-vue-components -D

<span class="hljs-comment"># \u901A\u8FC7 yarn \u5B89\u88C5</span>
yarn add unplugin-vue-components -D

<span class="hljs-comment"># \u901A\u8FC7 pnpm \u5B89\u88C5</span>
pnpm add unplugin-vue-components -D
</code></pre><h4 id="2.-pei-zhi-cha-jian" tabindex="-1">2. \u914D\u7F6E\u63D2\u4EF6</h4><p>\u5982\u679C\u662F\u57FA\u4E8E <code>vite</code> \u7684\u9879\u76EE\uFF0C\u5728 <code>vite.config.js</code> \u6587\u4EF6\u4E2D\u914D\u7F6E\u63D2\u4EF6\uFF1A</p><pre><code class="language-js"><span class="hljs-keyword">import</span> vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vitejs/plugin-vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Components</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;unplugin-vue-components/vite&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">VantResolver</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;unplugin-vue-components/resolvers&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-title function_">vue</span>(),
    <span class="hljs-title class_">Components</span>({
      <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">VantResolver</span>()],
    }),
  ],
};
</code></pre><p>\u5982\u679C\u662F\u57FA\u4E8E <code>vue-cli</code> \u7684\u9879\u76EE\uFF0C\u5728 <code>vue.config.js</code> \u6587\u4EF6\u4E2D\u914D\u7F6E\u63D2\u4EF6\uFF1A</p><pre><code class="language-js"><span class="hljs-keyword">const</span> { <span class="hljs-title class_">VantResolver</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;unplugin-vue-components/resolvers&#39;</span>);
<span class="hljs-keyword">const</span> <span class="hljs-title class_">ComponentsPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;unplugin-vue-components/webpack&#39;</span>);

<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">configureWebpack</span>: {
    <span class="hljs-attr">plugins</span>: [
      <span class="hljs-title class_">ComponentsPlugin</span>({
        <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">VantResolver</span>()],
      }),
    ],
  },
};
</code></pre><p>\u5982\u679C\u662F\u57FA\u4E8E <code>webpack</code> \u7684\u9879\u76EE\uFF0C\u5728 <code>webpack.config.js</code> \u6587\u4EF6\u4E2D\u914D\u7F6E\u63D2\u4EF6\uFF1A</p><pre><code class="language-js"><span class="hljs-keyword">const</span> { <span class="hljs-title class_">VantResolver</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;unplugin-vue-components/resolvers&#39;</span>);
<span class="hljs-keyword">const</span> <span class="hljs-title class_">ComponentsPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;unplugin-vue-components/webpack&#39;</span>);

<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-title class_">ComponentsPlugin</span>({
      <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">VantResolver</span>()],
    }),
  ],
};
</code></pre><h4 id="3.-shi-yong-zu-jian" tabindex="-1">3. \u4F7F\u7528\u7EC4\u4EF6</h4><p>\u5B8C\u6210\u4EE5\u4E0A\u4E24\u6B65\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u5728\u6A21\u677F\u4E2D\u4F7F\u7528 Vant \u7EC4\u4EF6\u4E86\uFF0C<code>unplugin-vue-components</code> \u4F1A\u89E3\u6790\u6A21\u677F\u5E76\u81EA\u52A8\u6CE8\u518C\u5BF9\u5E94\u7684\u7EC4\u4EF6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><h4 id="4.-yin-ru-han-shu-zu-jian-de-yang-shi" tabindex="-1">4. \u5F15\u5165\u51FD\u6570\u7EC4\u4EF6\u7684\u6837\u5F0F</h4><p>Vant \u4E2D\u6709\u4E2A\u522B\u7EC4\u4EF6\u662F\u4EE5\u51FD\u6570\u7684\u5F62\u5F0F\u63D0\u4F9B\u7684\uFF0C\u5305\u62EC <code>Toast</code>\uFF0C<code>Dialog</code>\uFF0C<code>Notify</code> \u548C <code>ImagePreview</code> \u7EC4\u4EF6\u3002\u5728\u4F7F\u7528\u51FD\u6570\u7EC4\u4EF6\u65F6\uFF0C<code>unplugin-vue-components</code> \u65E0\u6CD5\u81EA\u52A8\u5F15\u5165\u5BF9\u5E94\u7684\u6837\u5F0F\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u5F15\u5165\u6837\u5F0F\u3002</p><pre><code class="language-js"><span class="hljs-comment">// Toast</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/es/toast/style&#39;</span>;

<span class="hljs-comment">// Dialog</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/es/dialog/style&#39;</span>;

<span class="hljs-comment">// Notify</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Notify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/es/notify/style&#39;</span>;

<span class="hljs-comment">// ImagePreview</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ImagePreview</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/es/image-preview/style&#39;</span>;
</code></pre><p>\u4F60\u53EF\u4EE5\u5728\u9879\u76EE\u7684\u5165\u53E3\u6587\u4EF6\u6216\u516C\u5171\u6A21\u5757\u4E2D\u5F15\u5165\u4EE5\u4E0A\u7EC4\u4EF6\u7684\u6837\u5F0F\uFF0C\u8FD9\u6837\u5728\u4E1A\u52A1\u4EE3\u7801\u4E2D\u4F7F\u7528\u7EC4\u4EF6\u65F6\uFF0C\u4FBF\u4E0D\u518D\u9700\u8981\u91CD\u590D\u5F15\u5165\u6837\u5F0F\u4E86\u3002</p><blockquote><p>\u63D0\u793A\uFF1A\u5728\u5355\u4E2A\u9879\u76EE\u4E2D\u4E0D\u5E94\u8BE5\u540C\u65F6\u4F7F\u7528\u300C\u5168\u91CF\u5F15\u5165\u300D\u548C\u300C\u6309\u9700\u5F15\u5165\u300D\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u4EE3\u7801\u91CD\u590D\u3001\u6837\u5F0F\u9519\u4E71\u7B49\u95EE\u9898\u3002</p></blockquote></div><h2 id="zai-kuang-jia-zhong-shi-yong" tabindex="-1">\u5728\u6846\u67B6\u4E2D\u4F7F\u7528</h2><div class="van-doc-card"><h3 id="zai-nuxt-3-zhong-shi-yong" tabindex="-1">\u5728 Nuxt 3 \u4E2D\u4F7F\u7528</h3><p>\u5728 Nuxt 3 \u4E2D\u4F7F\u7528 Vant \u65F6\uFF0C\u7531\u4E8E Nuxt 3 \u6846\u67B6\u672C\u8EAB\u7684\u9650\u5236\uFF0C\u9700\u8981\u5728 <code>nuxt.config.ts</code> \u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u914D\u7F6E\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { defineNuxtConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;nuxt&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineNuxtConfig</span>({
  <span class="hljs-attr">experimental</span>: {
    <span class="hljs-attr">externalVue</span>: <span class="hljs-literal">true</span>,
  },
});
</code></pre><p>\u5173\u4E8E\u8BE5\u95EE\u9898\u7684\u80CC\u666F\uFF0C\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0B issue\uFF1A</p><ul><li><a href="https://github.com/nuxt/framework/issues/6761" target="_blank">nuxt/framework#6761</a></li><li><a href="https://github.com/nuxt/framework/issues/4084" target="_blank">nuxt/framework#4084</a></li></ul></div><h2 id="qian-yi-ti-shi" tabindex="-1">\u8FC1\u79FB\u63D0\u793A</h2><div class="van-doc-card"><h3 id="yi-chu-babel-plugin-import" tabindex="-1">\u79FB\u9664 babel-plugin-import</h3><p>\u4ECE Vant 4.0 \u7248\u672C\u5F00\u59CB\uFF0C\u5C06\u4E0D\u518D\u652F\u6301 <code>babel-plugin-import</code>\uFF0C\u8BF7\u79FB\u9664\u9879\u76EE\u4E2D\u4F9D\u8D56\u7684 <code>babel-plugin-import</code> \u63D2\u4EF6\u3002</p><p>\u53EA\u9700\u8981\u5220\u9664 <code>babel.config.js</code> \u4E2D\u7684\u4EE5\u4E0B\u4EE3\u7801\u5373\u53EF\uFF1A</p><pre><code class="language-diff">module.exports = {
  plugins: [
<span class="hljs-deletion">-    [&#39;import&#39;, {</span>
<span class="hljs-deletion">-      libraryName: &#39;vant&#39;,</span>
<span class="hljs-deletion">-      libraryDirectory: &#39;es&#39;,</span>
<span class="hljs-deletion">-      style: true</span>
<span class="hljs-deletion">-    }, &#39;vant&#39;]</span>
  ]
};
</code></pre><h4 id="shou-yi" tabindex="-1">\u6536\u76CA</h4><p>\u79FB\u9664 <code>babel-plugin-import</code> \u6709\u4EE5\u4E0B\u6536\u76CA\uFF1A</p><ul><li>\u4E0D\u518D\u5F3A\u4F9D\u8D56 babel\uFF0C\u9879\u76EE\u53EF\u4EE5\u4F7F\u7528 esbuild\u3001swc \u7B49\u66F4\u9AD8\u6548\u7684\u7F16\u8BD1\u5DE5\u5177\uFF0C\u5927\u5E45\u5EA6\u63D0\u5347\u7F16\u8BD1\u6548\u7387\u3002</li><li>\u4E0D\u518D\u53D7\u5230 <code>babel-plugin-import</code> \u7684 import \u5199\u6CD5\u9650\u5236\uFF0C\u53EF\u4EE5\u4ECE vant \u4E2D\u5BFC\u5165\u9664\u4E86\u7EC4\u4EF6\u4EE5\u5916\u7684\u5176\u4ED6\u5185\u5BB9\uFF0C\u6BD4\u5982 Vant 4 \u4E2D\u65B0\u589E\u7684 <code>showToast</code> \u7B49\u65B9\u6CD5\uFF1A</li></ul><pre><code class="language-ts"><span class="hljs-keyword">import</span> { showToast, showDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div>`,14),e=[t],d={__name:"quickstart.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(i,r)=>(a(),n("div",p,e))}};export{d as default};
