import{o as a,a as n,y as l}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},p=l(`<h1>Custom Theme</h1><div class="van-doc-card"><h3 id="deprecated" tabindex="-1">Deprecated</h3><p>This document is deprecated. Vant provides a more convenient <a href="#/en-US/config-provider" target="_blank">ConfigProvider</a> component for theme configuration. Less variables <strong>will be removed in the next major version</strong>.</p></div><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Vant use <a href="http://lesscss.org/" target="_blank">Less</a> as css preprocessor\uFF0Cyou can override the default less variables to custom theme.</p></div><div class="van-doc-card"><h3 id="less-variables" tabindex="-1">Less variables</h3><p>There are some <a href="(https://github.com/vant-ui/vant/blob/3.x/packages/vant/src/style/var.less)" target="_blank">basic variables</a> below, for component less variables, please refer to the documentation of each component, or view the <code>var.less</code> file in the component source directory.</p><pre><code class="language-less"><span class="hljs-comment">// Color Palette</span>
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
</code></pre></div><h2 id="how-to-custom-theme" tabindex="-1">How to custom theme</h2><div class="van-doc-card"><h3 id="step-1-import-less-file" tabindex="-1">Step 1: import less file</h3><p>First you should import the less source file to your project. you can use babel-plugin-import to automatically import or just manually import less file.</p><h4 id="automatically-import-style" tabindex="-1">Automatically import style</h4><p>Configure babel plugin in babel.config.js, if you are using babel6, please manually import less file.</p><pre><code class="language-js"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: [
    [
      <span class="hljs-string">&#39;import&#39;</span>,
      {
        <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#39;vant&#39;</span>,
        <span class="hljs-attr">libraryDirectory</span>: <span class="hljs-string">&#39;es&#39;</span>,
        <span class="hljs-comment">// specify less file path</span>
        <span class="hljs-attr">style</span>: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> <span class="hljs-string">\`<span class="hljs-subst">\${name}</span>/style/less\`</span>,
      },
      <span class="hljs-string">&#39;vant&#39;</span>,
    ],
  ],
};
</code></pre><h4 id="manually-import-style" tabindex="-1">Manually import style</h4><pre><code class="language-js"><span class="hljs-comment">// import all styles</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/lib/index.less&#39;</span>;

<span class="hljs-comment">// import style of single component</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/lib/button/style/less&#39;</span>;
</code></pre></div><div class="van-doc-card"><h3 id="step-2-modify-less-variables" tabindex="-1">Step 2: modify less variables</h3><p>Use <a href="http://lesscss.org/usage/#using-less-in-the-browser-modify-variables" target="_blank">modifyVars</a> provided by less.js to modify less variables\uFF0Cwebpack config for reference:</p><pre><code class="language-js"><span class="hljs-comment">// webpack.config.js</span>
<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">rules</span>: [
    {
      <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\\.less$/</span>,
      <span class="hljs-attr">use</span>: [
        <span class="hljs-comment">// ...other loaders</span>
        {
          <span class="hljs-attr">loader</span>: <span class="hljs-string">&#39;less-loader&#39;</span>,
          <span class="hljs-attr">options</span>: {
            <span class="hljs-attr">lessOptions</span>: {
              <span class="hljs-attr">modifyVars</span>: {
                <span class="hljs-comment">// override with less vars</span>
                <span class="hljs-string">&#39;text-color&#39;</span>: <span class="hljs-string">&#39;#111&#39;</span>,
                <span class="hljs-string">&#39;border-color&#39;</span>: <span class="hljs-string">&#39;#eee&#39;</span>,
                <span class="hljs-comment">// or override with less file</span>
                <span class="hljs-attr">hack</span>: <span class="hljs-string">\`true; @import &quot;your-less-file-path.less&quot;;\`</span>,
              },
            },
          },
        },
      ],
    },
  ],
};
</code></pre><p>If you build a project by vue-cli,it can be configured in <code>vue.config.js</code>:</p><pre><code class="language-js"><span class="hljs-comment">// vue.config.js</span>
<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">css</span>: {
    <span class="hljs-attr">loaderOptions</span>: {
      <span class="hljs-attr">less</span>: {
        <span class="hljs-attr">lessOptions</span>: {
          <span class="hljs-attr">modifyVars</span>: {
            <span class="hljs-comment">// override with less vars</span>
            <span class="hljs-string">&#39;text-color&#39;</span>: <span class="hljs-string">&#39;#111&#39;</span>,
            <span class="hljs-string">&#39;border-color&#39;</span>: <span class="hljs-string">&#39;#eee&#39;</span>,
            <span class="hljs-comment">// or override with less file</span>
            <span class="hljs-attr">hack</span>: <span class="hljs-string">\`true; @import &quot;your-less-file-path.less&quot;;\`</span>,
          },
        },
      },
    },
  },
};
</code></pre></div>`,7),r=[p],j={__name:"theme.en-US",setup(c,{expose:s}){return s({frontmatter:{}}),(t,o)=>(a(),n("div",e,r))}};export{j as default};
