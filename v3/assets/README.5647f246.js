import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},r=n(`<h1>PasswordInput</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>The PasswordInput component is usually used with <a href="#/en-US/number-keyboard" target="_blank">NumberKeyboard</a> Component.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PasswordInput</span>, <span class="hljs-title class_">NumberKeyboard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">PasswordInput</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NumberKeyboard</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;showKeyboard = false&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;123&#39;</span>);
    <span class="hljs-keyword">const</span> showKeyboard = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);

    <span class="hljs-keyword">return</span> {
      value,
      showKeyboard,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-length" tabindex="-1">Custom Length</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:gutter</span>=<span class="hljs-string">&quot;15&quot;</span>
  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="add-gutter" tabindex="-1">Add Gutter</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:gutter</span>=<span class="hljs-string">&quot;10&quot;</span>
  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="without-mask" tabindex="-1">Without Mask</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:mask</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="hint-error" tabindex="-1">Hint Error</h3><p>Use <code>info</code> to set info message, use <code>error-info</code> prop to set error message.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">info</span>=<span class="hljs-string">&quot;Some tips&quot;</span>
  <span class="hljs-attr">:error-info</span>=<span class="hljs-string">&quot;errorInfo&quot;</span>
  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;showKeyboard = false&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;123&#39;</span>);
    <span class="hljs-keyword">const</span> errorInfo = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showKeyboard = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);

    <span class="hljs-title function_">watch</span>(value, <span class="hljs-function">(<span class="hljs-params">newVal</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (newVal.<span class="hljs-property">length</span> === <span class="hljs-number">6</span> &amp;&amp; newVal !== <span class="hljs-string">&#39;123456&#39;</span>) {
        errorInfo.<span class="hljs-property">value</span> = <span class="hljs-string">&#39;Password Mistake&#39;</span>;
      } <span class="hljs-keyword">else</span> {
        errorInfo.<span class="hljs-property">value</span> = <span class="hljs-string">&#39;&#39;</span>;
      }
    });

    <span class="hljs-keyword">return</span> {
      value,
      errorInfo,
      showKeyboard,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Password value</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>info</td><td>Bottom info</td><td><em>string</em></td><td>-</td></tr><tr><td>error-info</td><td>Bottom error info</td><td><em>string</em></td><td>-</td></tr><tr><td>length</td><td>Maxlength of password</td><td><em>number | string</em></td><td><code>6</code></td></tr><tr><td>gutter</td><td>Gutter of input</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>mask</td><td>Whether to mask value</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>focused</td><td>Whether to show focused cursor</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>focus</td><td>Emitted when input is focused</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PasswordInputProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-password-input-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-password-input-margin</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-password-input-font-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-password-input-border-radius</td><td><em>6px</em></td><td>-</td></tr><tr><td>--van-password-input-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-password-input-info-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-password-input-info-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-password-input-error-info-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-password-input-dot-size</td><td><em>10px</em></td><td>-</td></tr><tr><td>--van-password-input-dot-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-password-input-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-password-input-cursor-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-password-input-cursor-width</td><td><em>1px</em></td><td>-</td></tr><tr><td>--van-password-input-cursor-height</td><td><em>40%</em></td><td>-</td></tr><tr><td>--van-password-input-cursor-animation-duration</td><td><em>1s</em></td><td>-</td></tr></tbody></table></div>`,15),l=[r],i={__name:"README",setup(o,{expose:s}){return s({frontmatter:{}}),(d,c)=>(a(),t("div",e,l))}};export{i as default};
