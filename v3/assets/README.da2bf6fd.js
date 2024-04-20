import{o as s,a,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},d=n(`<h1>ActionSheet</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>The pop-up modal panel at the bottom contains multiple options related to the current situation.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ActionSheet</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionSheet</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>Use <code>actions</code> prop to set options of action-sheet.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Basic Usage&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 1&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 2&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 3&#39;</span> },
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">item</span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      <span class="hljs-title class_">Toast</span>(item.<span class="hljs-property">name</span>);
    };

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      onSelect,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="show-cancel-button" tabindex="-1">Show Cancel Button</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>
  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;Cancel&quot;</span>
  <span class="hljs-attr">close-on-click-action</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 1&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 2&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 3&#39;</span> },
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;cancel&#39;</span>);

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      onCancel,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="show-description" tabindex="-1">Show Description</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>
  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;Cancel&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Description&quot;</span>
  <span class="hljs-attr">close-on-click-action</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 1&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 2&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 3&#39;</span>, <span class="hljs-attr">subname</span>: <span class="hljs-string">&#39;Description&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      show,
      actions,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="option-status" tabindex="-1">Option Status</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>
  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;Cancel&quot;</span>
  <span class="hljs-attr">close-on-click-action</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Colored Option&#39;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#ee0a24&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Disabled Option&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Loading Option&#39;</span>, <span class="hljs-attr">loading</span>: <span class="hljs-literal">true</span> },
    ];

    <span class="hljs-keyword">return</span> {
      show,
      actions,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-panel" tabindex="-1">Custom Panel</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>Content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-sheet</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.content</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">16px</span> <span class="hljs-number">16px</span> <span class="hljs-number">160px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:show</td><td>Whether to show ActionSheet</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>actions</td><td>Options</td><td><em>ActionSheetAction[]</em></td><td><code>[]</code></td></tr><tr><td>title</td><td>Title</td><td><em>string</em></td><td>-</td></tr><tr><td>cancel-text</td><td>Text of cancel button</td><td><em>string</em></td><td>-</td></tr><tr><td>description</td><td>Description above the options</td><td><em>string</em></td><td>-</td></tr><tr><td>closeable</td><td>Whether to show close icon</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-icon</td><td>Close icon name</td><td><em>string</em></td><td><code>cross</code></td></tr><tr><td>duration</td><td>Transition duration, unit second</td><td><em>number | string</em></td><td><code>0.3</code></td></tr><tr><td>round</td><td>Whether to show round corner</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlay</td><td>Whether to show overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlay-class</td><td>Custom overlay class</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlay-style</td><td>Custom overlay style</td><td><em>object</em></td><td>-</td></tr><tr><td>lock-scroll</td><td>Whether to lock background scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lazy-render</td><td>Whether to lazy render util appeared</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-popstate</td><td>Whether to close when popstate</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-action</td><td>Whether to close when an action is clicked</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>close-on-click-overlay</td><td>Whether to close when overlay is clicked</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>safe-area-inset-bottom</td><td>Whether to enable bottom safe area adaptation</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>teleport</td><td>Specifies a target element where ActionSheet will be mounted</td><td><em>string | Element</em></td><td>-</td></tr><tr><td>before-close <code>v3.1.4</code></td><td>Callback function before close</td><td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="data-structure-of-actionsheetaction" tabindex="-1">Data Structure of ActionSheetAction</h3><table><thead><tr><th>Key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>name</td><td>Title</td><td><em>string</em></td></tr><tr><td>subname</td><td>Subtitle</td><td><em>string</em></td></tr><tr><td>color</td><td>Text color</td><td><em>string</em></td></tr><tr><td>className</td><td>className for the option</td><td><em>string | Array | object</em></td></tr><tr><td>loading</td><td>Whether to be loading status</td><td><em>boolean</em></td></tr><tr><td>disabled</td><td>Whether to be disabled</td><td><em>boolean</em></td></tr><tr><td>callback</td><td>Callback function after clicked</td><td><em>action: ActionSheetAction</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>select</td><td>Emitted when an option is clicked</td><td><em>action: ActionSheetAction, index: number</em></td></tr><tr><td>cancel</td><td>Emitted when the cancel button is clicked</td><td>-</td></tr><tr><td>open</td><td>Emitted when opening ActionSheet</td><td>-</td></tr><tr><td>close</td><td>Emitted when closing ActionSheet</td><td>-</td></tr><tr><td>opened</td><td>Emitted when ActionSheet is opened</td><td>-</td></tr><tr><td>closed</td><td>Emitted when ActionSheet is closed</td><td>-</td></tr><tr><td>click-overlay</td><td>Emitted when overlay is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>default</td><td>Custom content</td><td></td></tr><tr><td>description</td><td>Custom description above the options</td><td></td></tr><tr><td>cancel <code>v3.0.10</code></td><td>Custom the content of cancel button</td><td></td></tr><tr><td>action <code>v3.4.0</code></td><td>Custom the content of action</td><td><em>{ action: ActionSheetAction, index: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ActionSheetProps</span>, <span class="hljs-title class_">ActionSheetAction</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-action-sheet-max-height</td><td><em>80%</em></td><td>-</td></tr><tr><td>--van-action-sheet-header-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-action-sheet-header-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-action-sheet-description-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-action-sheet-description-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-action-sheet-description-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-action-sheet-item-background</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-action-sheet-item-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-action-sheet-item-line-height</td><td><em>var(--van-line-height-lg)</em></td><td>-</td></tr><tr><td>--van-action-sheet-item-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-action-sheet-item-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-action-sheet-subname-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-action-sheet-subname-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-action-sheet-subname-line-height</td><td><em>var(--van-line-height-sm)</em></td><td>-</td></tr><tr><td>--van-action-sheet-close-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-action-sheet-close-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-action-sheet-close-icon-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-action-sheet-cancel-text-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-action-sheet-cancel-padding-top</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-action-sheet-cancel-padding-color</td><td><em>var(--van-background-color)</em></td><td>-</td></tr><tr><td>--van-action-sheet-loading-icon-size</td><td><em>22px</em></td><td>-</td></tr></tbody></table></div>`,17),l=[d],h={__name:"README",setup(o,{expose:t}){return t({frontmatter:{}}),(p,r)=>(s(),a("div",e,l))}};export{h as default};
