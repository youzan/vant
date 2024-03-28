import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const p={class:"van-doc-markdown-body"},e=t(`<h1>Advanced Usage</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Through this chapter, you can learn about some advanced usages of Vant.</p></div><h2 id="component-usage" tabindex="-1">Component Usage</h2><div class="van-doc-card"><h3 id="component-registration" tabindex="-1">Component Registration</h3><p>Vant supports multiple ways to register components:</p><h4 id="global-registration" tabindex="-1">Global Registration</h4><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();

<span class="hljs-comment">// Method 1. via app.use</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>);

<span class="hljs-comment">// Method 2. Register via app.component</span>
app.<span class="hljs-title function_">component</span>(<span class="hljs-title class_">Button</span>.<span class="hljs-property">name</span>, <span class="hljs-title class_">Button</span>);
</code></pre><h4 id="local-registration" tabindex="-1">Local Registration</h4><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [<span class="hljs-title class_">Button</span>.<span class="hljs-property">name</span>]: <span class="hljs-title class_">Button</span>,
  },
};
</code></pre><blockquote><p>For more information, please refer to <a href="https://v3.vuejs.org/guide/component-registration.html#component-registration" target="_blank">Vue.js - Component Registration</a>\u3002</p></blockquote><h4 id="script-setup" tabindex="-1">&lt;script setup&gt;</h4><p>Vant components can be used directly in <code>&lt;script setup&gt;</code> without component registration.</p><pre><code class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><h4 id="jsx-tsx" tabindex="-1">JSX/TSX</h4><p>Vant components can be used directly in JSX and TSX without component registration.</p><pre><code class="language-jsx"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> /&gt;</span></span>;
  },
};
</code></pre></div><h2 id="browser-adaptation" tabindex="-1">Browser adaptation</h2><div class="van-doc-card"><h3 id="viewport-units" tabindex="-1">Viewport Units</h3><p>Vant uses <code>px</code> unit by default\uFF0Cyou can use tools such as <a href="https://github.com/evrone/postcss-px-to-viewport" target="_blank">postcss--px-to-viewport</a> to transform <code>px</code> unit to viewport units (vw, vh, vmin, vmax).</p><h4 id="postcss-config" tabindex="-1">PostCSS Config</h4><p>PostCSS config example:</p><pre><code class="language-js"><span class="hljs-comment">// postcss.config.js</span>
<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: {
    <span class="hljs-string">&#39;postcss-px-to-viewport&#39;</span>: {
      <span class="hljs-attr">viewportWidth</span>: <span class="hljs-number">375</span>,
    },
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="rem-unit" tabindex="-1">Rem Unit</h3><p>You can use tools such as <code>postcss-pxtorem</code> to transform <code>px</code> unit to <code>rem</code> unit.</p><ul><li><a href="https://github.com/cuth/postcss-pxtorem" target="_blank">postcss-pxtorem</a></li><li><a href="https://github.com/amfe/lib-flexible" target="_blank">lib-flexible</a></li></ul><h4 id="postcss-config-1" tabindex="-1">PostCSS Config</h4><p>PostCSS config example:</p><pre><code class="language-js"><span class="hljs-comment">// postcss.config.js</span>
<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: {
    <span class="hljs-string">&#39;postcss-pxtorem&#39;</span>: {
      <span class="hljs-attr">rootValue</span>: <span class="hljs-number">37.5</span>,
      <span class="hljs-attr">propList</span>: [<span class="hljs-string">&#39;*&#39;</span>],
    },
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-rootvalue" tabindex="-1">Custom rootValue</h3><p>If the size of the design draft is 750 or other sizes, you can adjust the <code>rootValue</code> to:</p><pre><code class="language-js"><span class="hljs-comment">// postcss.config.js</span>
<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: {
    <span class="hljs-comment">// postcss-pxtorem version &gt;= 5.0.0</span>
    <span class="hljs-string">&#39;postcss-pxtorem&#39;</span>: {
      <span class="hljs-title function_">rootValue</span>(<span class="hljs-params">{ file }</span>) {
        <span class="hljs-keyword">return</span> file.<span class="hljs-title function_">indexOf</span>(<span class="hljs-string">&#39;vant&#39;</span>) !== -<span class="hljs-number">1</span> ? <span class="hljs-number">37.5</span> : <span class="hljs-number">75</span>;
      },
      <span class="hljs-attr">propList</span>: [<span class="hljs-string">&#39;*&#39;</span>],
    },
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="adapt-to-pc-browsers" tabindex="-1">Adapt to PC Browsers</h3><p>Vant is a mobile-first component library, if you want to use Vant in PC browsers, you can use the <a href="https://github.com/vant-ui/vant/tree/3.x/packages/vant-touch-emulator" target="_blank">@vant/touch-emulator</a> module. This module will automatically convert the mouse events of the PC browser into the touch events of the mobile browser.</p><pre><code class="language-bash"><span class="hljs-comment"># Install</span>
npm i @vant/touch-emulator -S
</code></pre><pre><code class="language-js"><span class="hljs-comment">// Just import this module, then Vant works in PC browser</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@vant/touch-emulator&#39;</span>;
</code></pre></div>`,9),l=[e],d={__name:"advanced-usage.en-US",setup(o,{expose:s}){return s({frontmatter:{}}),(r,i)=>(a(),n("div",p,l))}};export{d as default};
