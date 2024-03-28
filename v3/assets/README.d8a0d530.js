import{o as t,a,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>NumberKeyboard</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>The NumberKeyboard component can be used with <a href="#/en-US/password-input" target="_blank">PasswordInput</a> component or custom input box components.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NumberKeyboard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NumberKeyboard</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="default-keyboard" tabindex="-1">Default Keyboard</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>Show Keyboard<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>
  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onInput</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title class_">Toast</span>(value);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onDelete</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;delete&#39;</span>);

    <span class="hljs-keyword">return</span> {
      show,
      onInput,
      onDelete,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="keyboard-with-sidebar" tabindex="-1">Keyboard With Sidebar</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;custom&quot;</span>
  <span class="hljs-attr">extra-key</span>=<span class="hljs-string">&quot;.&quot;</span>
  <span class="hljs-attr">close-button-text</span>=<span class="hljs-string">&quot;Close&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>
  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="idnumber-keyboard" tabindex="-1">IdNumber Keyboard</h3><p>Use <code>extra-key</code> prop to set the content of bottom left button.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>
  Show IdNumber Keyboard
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">extra-key</span>=<span class="hljs-string">&quot;X&quot;</span>
  <span class="hljs-attr">close-button-text</span>=<span class="hljs-string">&quot;Close&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>
  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="keyboard-with-title" tabindex="-1">Keyboard With Title</h3><p>Use <code>title</code> prop to set keyboard title.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>
  Show Keyboard With Title
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Keyboard Title&quot;</span>
  <span class="hljs-attr">extra-key</span>=<span class="hljs-string">&quot;.&quot;</span>
  <span class="hljs-attr">close-button-text</span>=<span class="hljs-string">&quot;Close&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>
  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="multiple-extrakey" tabindex="-1">Multiple ExtraKey</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>
  Show Keyboard With Multiple ExtraKey
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;custom&quot;</span>
  <span class="hljs-attr">:extra-key</span>=<span class="hljs-string">&quot;[&#39;00&#39;, &#39;.&#39;]&quot;</span>
  <span class="hljs-attr">close-button-text</span>=<span class="hljs-string">&quot;Close&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>
  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="random-key-order" tabindex="-1">Random Key Order</h3><p>Use <code>random-key-order</code> prop to shuffle the order of keys.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>
  Show Keyboard With Random Key Order
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">random-key-order</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>
  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="bind-value" tabindex="-1">Bind Value</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">clickable</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">:maxlength</span>=<span class="hljs-string">&quot;6&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">return</span> {
      show,
      value,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Current value</td><td><em>string</em></td><td>-</td></tr><tr><td>show</td><td>Whether to show keyboard</td><td><em>boolean</em></td><td>-</td></tr><tr><td>title</td><td>Keyboard title</td><td><em>string</em></td><td>-</td></tr><tr><td>theme</td><td>Keyboard theme, can be set to <code>custom</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>maxlength</td><td>Value maxlength</td><td><em>number | string</em></td><td><code>Infinity</code></td></tr><tr><td>transition</td><td>Whether to show transition animation</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>z-index</td><td>Keyboard z-index</td><td><em>number | string</em></td><td><code>100</code></td></tr><tr><td>extra-key</td><td>Content of bottom left key</td><td><em>string | string[]</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>close-button-text</td><td>Close button text</td><td><em>string</em></td><td>-</td></tr><tr><td>delete-button-text</td><td>Delete button text</td><td><em>string</em></td><td>Delete Icon</td></tr><tr><td>close-button-loading</td><td>Whether to show loading close button in custom theme</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-delete-key</td><td>Whether to show delete button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>blur-on-close <code>v3.0.6</code></td><td>Whether to emit blur event when clicking close button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>hide-on-click-outside</td><td>Whether to hide keyboard when outside is clicked</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>teleport</td><td>Specifies a target element where NumberKeyboard will be mounted</td><td><em>string | Element</em></td><td>-</td></tr><tr><td>safe-area-inset-bottom</td><td>Whether to enable bottom safe area adaptation</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>random-key-order</td><td>Whether to shuffle the order of keys</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>input</td><td>Emitted when a key is pressed</td><td><em>key: string</em></td></tr><tr><td>delete</td><td>Emitted when the delete key is pressed</td><td>-</td></tr><tr><td>close</td><td>Emitted when the close button is clicked</td><td>-</td></tr><tr><td>blur</td><td>Emitted when the close button is clicked or the keyboard is blurred</td><td>-</td></tr><tr><td>show</td><td>Emitted when keyboard is fully displayed</td><td>-</td></tr><tr><td>hide</td><td>Emitted when keyboard is fully hidden</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>delete</td><td>Custom delete key content</td></tr><tr><td>extra-key</td><td>Custom extra key content</td></tr><tr><td>title-left</td><td>Custom title left content</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">NumberKeyboardProps</span>, <span class="hljs-title class_">NumberKeyboardTheme</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-number-keyboard-background-color</td><td><em>var(--van-gray-2)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-key-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-number-keyboard-key-font-size</td><td><em>28px</em></td><td>-</td></tr><tr><td>--van-number-keyboard-key-active-color</td><td><em>var(--van-gray-3)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-key-background-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-delete-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-title-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-title-height</td><td><em>34px</em></td><td>-</td></tr><tr><td>--van-number-keyboard-title-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-close-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-close-color</td><td><em>var(--van-text-link-color)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-close-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-button-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-button-background-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-z-index</td><td><em>100</em></td><td>-</td></tr></tbody></table></div>`,18),d=[l],i={__name:"README",setup(o,{expose:s}){return s({frontmatter:{}}),(p,c)=>(t(),a("div",e,d))}};export{i as default};
