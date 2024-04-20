import{o as t,a,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>ShareSheet</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>A pop-up sharing panel at the bottom for displaying the action buttons corresponding to each sharing channel, without specific sharing logic.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ShareSheet</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ShareSheet</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Show ShareSheet&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showShare = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Share&quot;</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> options = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;WeChat&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wechat&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Weibo&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;weibo&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Link&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;link&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Poster&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;poster&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Qrcode&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;qrcode&#39;</span> },
    ];

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">option</span>) =&gt; {
      <span class="hljs-title class_">Toast</span>(option.<span class="hljs-property">name</span>);
      showShare.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    };

    <span class="hljs-keyword">return</span> {
      options,
      onSelect,
      showShare,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="multi-line" tabindex="-1">Multi Line</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Share&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> options = [
      [
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;WeChat&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wechat&#39;</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;WeChat Moments&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wechat-moments&#39;</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Weibo&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;weibo&#39;</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;QQ&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;qq&#39;</span> },
      ],
      [
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Link&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;link&#39;</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Poster&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;poster&#39;</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Qrcode&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;qrcode&#39;</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Weapp Qrcode&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;weapp-qrcode&#39;</span> },
      ],
    ];

    <span class="hljs-keyword">return</span> {
      options,
      showShare,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-icon" tabindex="-1">Custom Icon</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> options = [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Name&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-fire.png&#39;</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Name&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-light.png&#39;</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Name&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-water.png&#39;</span>,
      },
    ];

    <span class="hljs-keyword">return</span> {
      options,
      showShare,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="show-description" tabindex="-1">Show Description</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Share&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Description&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> options = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;WeChat&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wechat&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Weibo&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;weibo&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Link&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;link&#39;</span>, <span class="hljs-attr">description</span>: <span class="hljs-string">&#39;Description&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Poster&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;poster&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Qrcode&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;qrcode&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      options,
      showShare,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:show</td><td>Whether to show ShareSheet</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>options</td><td>Share options</td><td><em>Option[]</em></td><td><code>[]</code></td></tr><tr><td>title</td><td>Title</td><td><em>string</em></td><td>-</td></tr><tr><td>cancel-text</td><td>Cancel button text</td><td><em>string</em></td><td><code>&#39;Cancel&#39;</code></td></tr><tr><td>description</td><td>Description</td><td><em>string</em></td><td>-</td></tr><tr><td>duration</td><td>Transition duration, unit second</td><td><em>number | string</em></td><td><code>0.3</code></td></tr><tr><td>round <code>v3.2.6</code></td><td>Whether to show round corner</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlay</td><td>Whether to show overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlay-class</td><td>Custom overlay class</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlay-style</td><td>Custom overlay style</td><td><em>object</em></td><td>-</td></tr><tr><td>lock-scroll</td><td>Whether to lock background scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lazy-render</td><td>Whether to lazy render util appeared</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-popstate</td><td>Whether to close when popstate</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-overlay</td><td>Whether to close when overlay is clicked</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>safe-area-inset-bottom</td><td>Whether to enable bottom safe area adaptation</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>teleport</td><td>Specifies a target element where ShareSheet will be mounted</td><td><em>string | Element</em></td><td>-</td></tr><tr><td>before-close <code>v3.1.4</code></td><td>Callback function before close</td><td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="data-structure-of-option" tabindex="-1">Data Structure of Option</h3><table><thead><tr><th>Key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>name</td><td>Option name</td><td><em>string</em></td></tr><tr><td>description</td><td>Option description</td><td><em>string</em></td></tr><tr><td>icon</td><td>Option icon, can be set to <code>wechat</code> <code>weibo</code> <code>qq</code> <code>link</code> <code>qrcode</code> <code>poster</code> <code>weapp-qrcode</code> <code>wechat-moments</code> or image URL</td><td><em>string</em></td></tr><tr><td>className</td><td>Option className is used to set the class props to the share item</td><td><em>string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>select</td><td>Emitted when an option is clicked</td><td><em>option: Option, index: number</em></td></tr><tr><td>cancel</td><td>Emitted when the cancel button is clicked</td><td>-</td></tr><tr><td>open</td><td>Emitted when opening ShareSheet</td><td>-</td></tr><tr><td>close</td><td>Emitted when closing ShareSheet</td><td>-</td></tr><tr><td>opened</td><td>Emitted when ShareSheet is opened</td><td>-</td></tr><tr><td>closed</td><td>Emitted when ShareSheet is closed</td><td>-</td></tr><tr><td>click-overlay</td><td>Emitted when overlay is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>Custom title</td></tr><tr><td>description</td><td>Custom description</td></tr><tr><td>cancel <code>v3.0.10</code></td><td>Custom the content of cancel button</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">ShareSheetProps</span>,
  <span class="hljs-title class_">ShareSheetOption</span>,
  <span class="hljs-title class_">ShareSheetOptions</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-share-sheet-header-padding</td><td><em>var(--van-padding-sm) var(--van-padding-md) var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-share-sheet-title-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-share-sheet-title-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-share-sheet-title-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-share-sheet-description-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-share-sheet-description-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-share-sheet-description-line-height</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-share-sheet-icon-size</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-share-sheet-option-name-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-share-sheet-option-name-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-share-sheet-option-description-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-share-sheet-option-description-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-share-sheet-cancel-button-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-share-sheet-cancel-button-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-share-sheet-cancel-button-background</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr></tbody></table></div>`,16),d=[l],i={__name:"README",setup(p,{expose:s}){return s({frontmatter:{}}),(o,c)=>(t(),a("div",e,d))}};export{i as default};
