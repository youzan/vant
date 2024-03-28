import{o as a,a as n,y as l}from"./vue-libs.b44bc779.js";const p={class:"van-doc-markdown-body"},e=l(`<h1>\u5B9A\u5236\u4E3B\u9898</h1><div class="van-doc-card"><h3 id="fei-qi-ti-shi" tabindex="-1">\u5E9F\u5F03\u63D0\u793A</h3><p>\u672C\u6587\u6863\u5DF2\u5E9F\u5F03\uFF0CVant \u63D0\u4F9B\u4E86\u66F4\u65B9\u4FBF\u7684 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u5168\u5C40\u914D\u7F6E</a> \u7EC4\u4EF6\u8FDB\u884C\u4E3B\u9898\u914D\u7F6E\u3002\u57FA\u4E8E Less \u53D8\u91CF\u8FDB\u884C\u5B9A\u5236\u7684\u65B9\u5F0F<strong>\u5C06\u5728\u4E0B\u4E2A\u5927\u7248\u672C\u5E9F\u5F03</strong>\u3002</p></div><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>Vant \u63D0\u4F9B\u4E86\u4E00\u5957\u9ED8\u8BA4\u4E3B\u9898\uFF0CCSS \u547D\u540D\u91C7\u7528 BEM \u7684\u98CE\u683C\uFF0C\u65B9\u4FBF\u4F7F\u7528\u8005\u8986\u76D6\u6837\u5F0F\u3002\u5982\u679C\u4F60\u60F3\u5B8C\u5168\u66FF\u6362\u4E3B\u9898\u8272\u6216\u8005\u5176\u4ED6\u6837\u5F0F\uFF0C\u53EF\u4EE5\u6309\u7167\u672C\u6587\u6863\u8FDB\u884C\u4E3B\u9898\u5B9A\u5236\u3002</p></div><div class="van-doc-card"><h3 id="shi-li-gong-cheng" tabindex="-1">\u793A\u4F8B\u5DE5\u7A0B</h3><p>\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u57FA\u4E8E Vue CLI 3 \u7684\u793A\u4F8B\u5DE5\u7A0B\uFF0C\u4ED3\u5E93\u5730\u5740\u4E3A <a href="https://github.com/vant-ui/vant-demo" target="_blank">Vant Demo</a>\uFF0C\u5176\u4E2D\u5305\u542B\u4E86\u5B9A\u5236\u4E3B\u9898\u7684\u57FA\u672C\u914D\u7F6E\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u53C2\u8003\u3002</p></div><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>Vant \u4F7F\u7528\u4E86 <a href="http://lesscss.org/" target="_blank">Less</a> \u5BF9\u6837\u5F0F\u8FDB\u884C\u9884\u5904\u7406\uFF0C\u5E76\u5185\u7F6E\u4E86\u4E00\u4E9B\u6837\u5F0F\u53D8\u91CF\uFF0C\u901A\u8FC7\u66FF\u6362\u6837\u5F0F\u53D8\u91CF\u5373\u53EF\u5B9A\u5236\u4F60\u81EA\u5DF1\u9700\u8981\u7684\u4E3B\u9898\u3002</p><p>\u4E0B\u9762\u662F\u6240\u6709\u7684<a href="https://github.com/vant-ui/vant/blob/3.x/packages/vant/src/style/var.less" target="_blank">\u57FA\u7840\u6837\u5F0F\u53D8\u91CF</a>\uFF0C\u7EC4\u4EF6\u7684\u6837\u5F0F\u53D8\u91CF\u8BF7\u53C2\u8003\u5404\u4E2A\u7EC4\u4EF6\u7684\u6587\u6863\uFF0C\u6216\u67E5\u770B\u7EC4\u4EF6\u6E90\u7801\u76EE\u5F55\u4E0B\u7684 <code>var.less</code> \u6587\u4EF6\u3002</p><pre><code class="language-less"><span class="hljs-comment">// Color Palette</span>
<span class="hljs-variable">@black:</span> <span class="hljs-number">#000</span>;
<span class="hljs-variable">@white:</span> <span class="hljs-number">#fff</span>;
<span class="hljs-variable">@gray-1:</span> <span class="hljs-number">#f7f8fa</span>;
<span class="hljs-variable">@gray-2:</span> <span class="hljs-number">#f2f3f5</span>;
<span class="hljs-variable">@gray-3:</span> <span class="hljs-number">#ebedf0</span>;
<span class="hljs-variable">@gray-4:</span> <span class="hljs-number">#dcdee0</span>;
<span class="hljs-variable">@gray-5:</span> <span class="hljs-number">#c8c9cc</span>;
<span class="hljs-variable">@gray-6:</span> <span class="hljs-number">#969799</span>;
<span class="hljs-variable">@gray-7:</span> <span class="hljs-number">#646566</span>;
<span class="hljs-variable">@gray-8:</span> <span class="hljs-number">#323233</span>;
<span class="hljs-variable">@red:</span> <span class="hljs-number">#ee0a24</span>;
<span class="hljs-variable">@blue:</span> <span class="hljs-number">#1989fa</span>;
<span class="hljs-variable">@orange:</span> <span class="hljs-number">#ff976a</span>;
<span class="hljs-variable">@orange-dark:</span> <span class="hljs-number">#ed6a0c</span>;
<span class="hljs-variable">@orange-light:</span> <span class="hljs-number">#fffbe8</span>;
<span class="hljs-variable">@green:</span> <span class="hljs-number">#07c160</span>;

<span class="hljs-comment">// Gradient Colors</span>
<span class="hljs-variable">@gradient-red:</span> <span class="hljs-built_in">linear-gradient</span>(to right, <span class="hljs-number">#ff6034</span>, <span class="hljs-number">#ee0a24</span>);
<span class="hljs-variable">@gradient-orange:</span> <span class="hljs-built_in">linear-gradient</span>(to right, <span class="hljs-number">#ffd01e</span>, <span class="hljs-number">#ff8917</span>);

<span class="hljs-comment">// Component Colors</span>
<span class="hljs-variable">@text-color:</span> <span class="hljs-variable">@gray-8</span>;
<span class="hljs-variable">@active-color:</span> <span class="hljs-variable">@gray-2</span>;
<span class="hljs-variable">@active-opacity:</span> <span class="hljs-number">0.7</span>;
<span class="hljs-variable">@disabled-opacity:</span> <span class="hljs-number">0.5</span>;
<span class="hljs-variable">@background-color:</span> <span class="hljs-variable">@gray-1</span>;
<span class="hljs-variable">@background-color-light:</span> <span class="hljs-variable">@white</span>;
<span class="hljs-variable">@text-link-color:</span> <span class="hljs-number">#576b95</span>;

<span class="hljs-comment">// Padding</span>
<span class="hljs-variable">@padding-base:</span> <span class="hljs-number">4px</span>;
<span class="hljs-variable">@padding-xs:</span> <span class="hljs-variable">@padding-base</span> * <span class="hljs-number">2</span>;
<span class="hljs-variable">@padding-sm:</span> <span class="hljs-variable">@padding-base</span> * <span class="hljs-number">3</span>;
<span class="hljs-variable">@padding-md:</span> <span class="hljs-variable">@padding-base</span> * <span class="hljs-number">4</span>;
<span class="hljs-variable">@padding-lg:</span> <span class="hljs-variable">@padding-base</span> * <span class="hljs-number">6</span>;
<span class="hljs-variable">@padding-xl:</span> <span class="hljs-variable">@padding-base</span> * <span class="hljs-number">8</span>;

<span class="hljs-comment">// Font</span>
<span class="hljs-variable">@font-size-xs:</span> <span class="hljs-number">10px</span>;
<span class="hljs-variable">@font-size-sm:</span> <span class="hljs-number">12px</span>;
<span class="hljs-variable">@font-size-md:</span> <span class="hljs-number">14px</span>;
<span class="hljs-variable">@font-size-lg:</span> <span class="hljs-number">16px</span>;
<span class="hljs-variable">@font-weight-bold:</span> <span class="hljs-number">500</span>;
<span class="hljs-variable">@line-height-xs:</span> <span class="hljs-number">14px</span>;
<span class="hljs-variable">@line-height-sm:</span> <span class="hljs-number">18px</span>;
<span class="hljs-variable">@line-height-md:</span> <span class="hljs-number">20px</span>;
<span class="hljs-variable">@line-height-lg:</span> <span class="hljs-number">22px</span>;
<span class="hljs-variable">@base-font-family:</span> -apple-system, BlinkMacSystemFont, <span class="hljs-string">&#39;Helvetica Neue&#39;</span>,
  Helvetica, Segoe UI, Arial, Roboto, <span class="hljs-string">&#39;PingFang SC&#39;</span>, <span class="hljs-string">&#39;miui&#39;</span>, <span class="hljs-string">&#39;Hiragino Sans GB&#39;</span>,
  <span class="hljs-string">&#39;Microsoft Yahei&#39;</span>, sans-serif;
<span class="hljs-variable">@price-integer-font-family:</span> Avenir-Heavy, PingFang SC, Helvetica Neue, Arial,
  sans-serif;

<span class="hljs-comment">// Animation</span>
<span class="hljs-variable">@animation-duration-base:</span> <span class="hljs-number">0.3s</span>;
<span class="hljs-variable">@animation-duration-fast:</span> <span class="hljs-number">0.2s</span>;
<span class="hljs-variable">@animation-timing-function-enter:</span> ease-out;
<span class="hljs-variable">@animation-timing-function-leave:</span> ease-in;

<span class="hljs-comment">// Border</span>
<span class="hljs-variable">@border-color:</span> <span class="hljs-variable">@gray-3</span>;
<span class="hljs-variable">@border-width-base:</span> <span class="hljs-number">1px</span>;
<span class="hljs-variable">@border-radius-sm:</span> <span class="hljs-number">2px</span>;
<span class="hljs-variable">@border-radius-md:</span> <span class="hljs-number">4px</span>;
<span class="hljs-variable">@border-radius-lg:</span> <span class="hljs-number">8px</span>;
<span class="hljs-variable">@border-radius-max:</span> <span class="hljs-number">999px</span>;
</code></pre></div><h2 id="ding-zhi-fang-fa" tabindex="-1">\u5B9A\u5236\u65B9\u6CD5</h2><div class="van-doc-card"><h3 id="bu-zou-yi-yin-ru-yang-shi-yuan-wen-jian" tabindex="-1">\u6B65\u9AA4\u4E00 \u5F15\u5165\u6837\u5F0F\u6E90\u6587\u4EF6</h3><p>\u5B9A\u5236\u4E3B\u9898\u65F6\uFF0C\u9700\u8981\u5F15\u5165\u7EC4\u4EF6\u5BF9\u5E94\u7684 Less \u6837\u5F0F\u6587\u4EF6\uFF0C\u652F\u6301\u6309\u9700\u5F15\u5165\u548C\u624B\u52A8\u5F15\u5165\u4E24\u79CD\u65B9\u5F0F\u3002</p><h4 id="an-xu-yin-ru-yang-shi-tui-jian" tabindex="-1">\u6309\u9700\u5F15\u5165\u6837\u5F0F\uFF08\u63A8\u8350\uFF09</h4><p>\u5728 babel.config.js \u4E2D\u914D\u7F6E\u6309\u9700\u5F15\u5165\u6837\u5F0F\u6E90\u6587\u4EF6\uFF0C\u6CE8\u610F babel 6 \u4E0D\u652F\u6301\u6309\u9700\u5F15\u5165\u6837\u5F0F\uFF0C\u8BF7\u624B\u52A8\u5F15\u5165\u6837\u5F0F\u3002</p><pre><code class="language-js"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: [
    [
      <span class="hljs-string">&#39;import&#39;</span>,
      {
        <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#39;vant&#39;</span>,
        <span class="hljs-attr">libraryDirectory</span>: <span class="hljs-string">&#39;es&#39;</span>,
        <span class="hljs-comment">// \u6307\u5B9A\u6837\u5F0F\u8DEF\u5F84</span>
        <span class="hljs-attr">style</span>: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> <span class="hljs-string">\`<span class="hljs-subst">\${name}</span>/style/less\`</span>,
      },
      <span class="hljs-string">&#39;vant&#39;</span>,
    ],
  ],
};
</code></pre><h4 id="shou-dong-yin-ru-yang-shi" tabindex="-1">\u624B\u52A8\u5F15\u5165\u6837\u5F0F</h4><pre><code class="language-js"><span class="hljs-comment">// \u5F15\u5165\u5168\u90E8\u6837\u5F0F</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/lib/index.less&#39;</span>;

<span class="hljs-comment">// \u5F15\u5165\u5355\u4E2A\u7EC4\u4EF6\u6837\u5F0F</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/lib/button/style/less&#39;</span>;
</code></pre></div><div class="van-doc-card"><h3 id="bu-zou-er-xiu-gai-yang-shi-bian-liang" tabindex="-1">\u6B65\u9AA4\u4E8C \u4FEE\u6539\u6837\u5F0F\u53D8\u91CF</h3><p>\u4F7F\u7528 Less \u63D0\u4F9B\u7684 <a href="http://lesscss.org/usage/#using-less-in-the-browser-modify-variables" target="_blank">modifyVars</a> \u5373\u53EF\u5BF9\u53D8\u91CF\u8FDB\u884C\u4FEE\u6539\uFF0C\u4E0B\u9762\u662F\u53C2\u8003\u7684 webpack \u914D\u7F6E\u3002</p><pre><code class="language-js"><span class="hljs-comment">// webpack.config.js</span>
<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">rules</span>: [
    {
      <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\\.less$/</span>,
      <span class="hljs-attr">use</span>: [
        <span class="hljs-comment">// ...\u5176\u4ED6 loader \u914D\u7F6E</span>
        {
          <span class="hljs-attr">loader</span>: <span class="hljs-string">&#39;less-loader&#39;</span>,
          <span class="hljs-attr">options</span>: {
            <span class="hljs-comment">// \u82E5 less-loader \u7248\u672C\u5C0F\u4E8E 6.0\uFF0C\u8BF7\u79FB\u9664 lessOptions \u8FD9\u4E00\u7EA7\uFF0C\u76F4\u63A5\u914D\u7F6E\u9009\u9879\u3002</span>
            <span class="hljs-attr">lessOptions</span>: {
              <span class="hljs-attr">modifyVars</span>: {
                <span class="hljs-comment">// \u76F4\u63A5\u8986\u76D6\u53D8\u91CF</span>
                <span class="hljs-string">&#39;text-color&#39;</span>: <span class="hljs-string">&#39;#111&#39;</span>,
                <span class="hljs-string">&#39;border-color&#39;</span>: <span class="hljs-string">&#39;#eee&#39;</span>,
                <span class="hljs-comment">// \u6216\u8005\u53EF\u4EE5\u901A\u8FC7 less \u6587\u4EF6\u8986\u76D6\uFF08\u6587\u4EF6\u8DEF\u5F84\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\uFF09</span>
                <span class="hljs-attr">hack</span>: <span class="hljs-string">\`true; @import &quot;your-less-file-path.less&quot;;\`</span>,
              },
            },
          },
        },
      ],
    },
  ],
};
</code></pre><p>\u5982\u679C vue-cli \u642D\u5EFA\u7684\u9879\u76EE\uFF0C\u53EF\u4EE5\u5728 <code>vue.config.js</code> \u4E2D\u8FDB\u884C\u914D\u7F6E\u3002</p><pre><code class="language-js"><span class="hljs-comment">// vue.config.js</span>
<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">css</span>: {
    <span class="hljs-attr">loaderOptions</span>: {
      <span class="hljs-attr">less</span>: {
        <span class="hljs-comment">// \u82E5 less-loader \u7248\u672C\u5C0F\u4E8E 6.0\uFF0C\u8BF7\u79FB\u9664 lessOptions \u8FD9\u4E00\u7EA7\uFF0C\u76F4\u63A5\u914D\u7F6E\u9009\u9879\u3002</span>
        <span class="hljs-attr">lessOptions</span>: {
          <span class="hljs-attr">modifyVars</span>: {
            <span class="hljs-comment">// \u76F4\u63A5\u8986\u76D6\u53D8\u91CF</span>
            <span class="hljs-string">&#39;text-color&#39;</span>: <span class="hljs-string">&#39;#111&#39;</span>,
            <span class="hljs-string">&#39;border-color&#39;</span>: <span class="hljs-string">&#39;#eee&#39;</span>,
            <span class="hljs-comment">// \u6216\u8005\u53EF\u4EE5\u901A\u8FC7 less \u6587\u4EF6\u8986\u76D6\uFF08\u6587\u4EF6\u8DEF\u5F84\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\uFF09</span>
            <span class="hljs-attr">hack</span>: <span class="hljs-string">\`true; @import &quot;your-less-file-path.less&quot;;\`</span>,
          },
        },
      },
    },
  },
};
</code></pre></div>`,8),r=[e],j={__name:"theme.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(t,h)=>(a(),n("div",p,r))}};export{j as default};
