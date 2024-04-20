import{o as t,a,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},d=n(`<h1>Toast</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Black semi-transparent pop-up hint in the middle of the page, used for message notification, loading hint, operation result hint and other scenarios.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Toast</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="text" tabindex="-1">Text</h3><pre><code class="language-js"><span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;Some messages&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="loading" tabindex="-1">Loading</h3><pre><code class="language-js"><span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">loading</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Loading...&#39;</span>,
  <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="success-fail" tabindex="-1">Success/Fail</h3><pre><code class="language-js"><span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">success</span>(<span class="hljs-string">&#39;Success&#39;</span>);
<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">fail</span>(<span class="hljs-string">&#39;Fail&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="custom-icon" tabindex="-1">Custom Icon</h3><pre><code class="language-js"><span class="hljs-title class_">Toast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Custom Icon&#39;</span>,
  <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;like-o&#39;</span>,
});

<span class="hljs-title class_">Toast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Custom Image&#39;</span>,
  <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/logo.png&#39;</span>,
});

<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">loading</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Loading...&#39;</span>,
  <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">loadingType</span>: <span class="hljs-string">&#39;spinner&#39;</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="custom-position" tabindex="-1">Custom Position</h3><pre><code class="language-js"><span class="hljs-title class_">Toast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Top&#39;</span>,
  <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>,
});

<span class="hljs-title class_">Toast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Bottom&#39;</span>,
  <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;bottom&#39;</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="update-message" tabindex="-1">Update Message</h3><pre><code class="language-js"><span class="hljs-keyword">const</span> toast = <span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">loading</span>({
  <span class="hljs-attr">duration</span>: <span class="hljs-number">0</span>,
  <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">loadingType</span>: <span class="hljs-string">&#39;spinner&#39;</span>,
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;3 seconds&#39;</span>,
});

<span class="hljs-keyword">let</span> second = <span class="hljs-number">3</span>;
<span class="hljs-keyword">const</span> timer = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {
  second--;
  <span class="hljs-keyword">if</span> (second) {
    toast.<span class="hljs-property">message</span> = <span class="hljs-string">\`<span class="hljs-subst">\${second}</span> seconds\`</span>;
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-built_in">clearInterval</span>(timer);
    <span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">clear</span>();
  }
}, <span class="hljs-number">1000</span>);
</code></pre></div><div class="van-doc-card"><h3 id="global-method" tabindex="-1">Global Method</h3><p>After registering the Toast component through <code>app.use</code>, the <code>$toast</code> method will be automatically mounted on all subcomponents of the app.</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {
    <span class="hljs-variable language_">this</span>.$toast(<span class="hljs-string">&#39;Some messages&#39;</span>);
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="singleton" tabindex="-1">Singleton</h3><p>Toast use singleton mode by default, if you need to pop multiple Toast at the same time, you can refer to the following example:</p><pre><code class="language-js"><span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">allowMultiple</span>();

<span class="hljs-keyword">const</span> toast1 = <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;First Toast&#39;</span>);
<span class="hljs-keyword">const</span> toast2 = <span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">success</span>(<span class="hljs-string">&#39;Second Toast&#39;</span>);

toast1.<span class="hljs-title function_">clear</span>();
toast2.<span class="hljs-title function_">clear</span>();
</code></pre></div><div class="van-doc-card"><h3 id="set-default-options" tabindex="-1">Set Default Options</h3><p>The Toast default configuration can be globally modified with the <code>Toast.setDefaultOptions</code> function.</p><pre><code class="language-js"><span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">setDefaultOptions</span>({ <span class="hljs-attr">duration</span>: <span class="hljs-number">2000</span> });

<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">setDefaultOptions</span>(<span class="hljs-string">&#39;loading&#39;</span>, { <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span> });

<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">resetDefaultOptions</span>();

<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">resetDefaultOptions</span>(<span class="hljs-string">&#39;loading&#39;</span>);
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><table><thead><tr><th>Methods</th><th>Attribute</th><th>Return value</th><th>Description</th></tr></thead><tbody><tr><td>Toast</td><td><code>options | message</code></td><td>toast instance</td><td>Show toast</td></tr><tr><td>Toast.loading</td><td><code>options | message</code></td><td>toast instance</td><td>Show loading toast</td></tr><tr><td>Toast.success</td><td><code>options | message</code></td><td>toast instance</td><td>Show success toast</td></tr><tr><td>Toast.fail</td><td><code>options | message</code></td><td>toast instance</td><td>Show fail toast</td></tr><tr><td>Toast.clear</td><td><code>clearAll: boolean</code></td><td><code>void</code></td><td>Close toast</td></tr><tr><td>Toast.allowMultiple</td><td>-</td><td><code>void</code></td><td>Allow multiple toast at the same time</td></tr><tr><td>Toast.setDefaultOptions</td><td><code>type | options</code></td><td><code>void</code></td><td>Set default options of all toasts</td></tr><tr><td>Toast.resetDefaultOptions</td><td><code>type</code></td><td><code>void</code></td><td>Reset default options of all toasts</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Can be set to <code>loading</code> <code>success</code> <code>fail</code> <code>html</code></td><td><em>ToastType</em></td><td><code>text</code></td></tr><tr><td>position</td><td>Can be set to <code>top</code> <code>middle</code> <code>bottom</code></td><td><em>ToastPosition</em></td><td><code>middle</code></td></tr><tr><td>message</td><td>Message</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>icon</td><td>Custom icon</td><td><em>string</em></td><td>-</td></tr><tr><td>iconSize</td><td>Custom icon size</td><td><em>number | string</em></td><td><code>36px</code></td></tr><tr><td>iconPrefix</td><td>Icon className prefix</td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>overlay</td><td>Whether to show overlay</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>forbidClick</td><td>Whether to forbid click background</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>closeOnClick</td><td>Whether to close after clicked</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>closeOnClickOverlay</td><td>Whether to close when overlay is clicked</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loadingType</td><td>Loading icon type, can be set to <code>spinner</code></td><td><em>string</em></td><td><code>circular</code></td></tr><tr><td>duration</td><td>Toast duration(ms), won&#39;t disappear if value is 0</td><td><em>number</em></td><td><code>2000</code></td></tr><tr><td>className</td><td>Custom className</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlayClass <code>v3.0.4</code></td><td>Custom overlay class</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlayStyle <code>v3.0.4</code></td><td>Custom overlay style</td><td><em>object</em></td><td>-</td></tr><tr><td>onOpened</td><td>Callback function after opened</td><td><em>Function</em></td><td>-</td></tr><tr><td>onClose</td><td>Callback function after close</td><td><em>Function</em></td><td>-</td></tr><tr><td>transition</td><td>Transition, equivalent to <code>name</code> prop of <a href="https://v3.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a></td><td><em>string</em></td><td><code>van-fade</code></td></tr><tr><td>teleport</td><td>Specifies a target element where Toast will be mounted</td><td><em>string | Element</em></td><td><code>body</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ToastType</span>, <span class="hljs-title class_">ToastProps</span>, <span class="hljs-title class_">ToastOptions</span>, <span class="hljs-title class_">ToastPosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-toast-max-width</td><td><em>70%</em></td><td>-</td></tr><tr><td>--van-toast-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-toast-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-toast-loading-icon-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-toast-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-toast-border-radius</td><td><em>var(--van-border-radius-lg)</em></td><td>-</td></tr><tr><td>--van-toast-background-color</td><td><em>fade(var(--van-black), 70%)</em></td><td>-</td></tr><tr><td>--van-toast-icon-size</td><td><em>36px</em></td><td>-</td></tr><tr><td>--van-toast-text-min-width</td><td><em>96px</em></td><td>-</td></tr><tr><td>--van-toast-text-padding</td><td><em>var(--van-padding-xs) var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-toast-default-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-toast-default-width</td><td><em>88px</em></td><td>-</td></tr><tr><td>--van-toast-default-min-height</td><td><em>88px</em></td><td>-</td></tr><tr><td>--van-toast-position-top-distance</td><td><em>20%</em></td><td>-</td></tr><tr><td>--van-toast-position-bottom-distance</td><td><em>20%</em></td><td>-</td></tr></tbody></table></div>`,19),o=[d],h={__name:"README",setup(l,{expose:s}){return s({frontmatter:{}}),(i,p)=>(t(),a("div",e,o))}};export{h as default};
