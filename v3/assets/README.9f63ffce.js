import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},p=t(`<h1>Badge</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Display a small badge or a red dot to the top-right of its child.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Badge</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Badge</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;Hot&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">dot</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.child</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#f2f3f5</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="max" tabindex="-1">Max</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;20&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;20&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;200&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;99&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">dot</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-content" tabindex="-1">Custom Content</h3><p>Use <code>content</code> slot to custom the content of badge.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;badge-icon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;cross&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;badge-icon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;down&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;badge-icon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.badge-icon</span> {
  <span class="hljs-attribute">display</span>: block;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">10px</span>;
  <span class="hljs-attribute">line-height</span>: <span class="hljs-number">16px</span>;
}
</code></pre></div><div class="van-doc-card"><h3 id="custom-position" tabindex="-1">Custom Position</h3><p>Use <code>position</code> prop to set the position of badge.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top-left&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom-left&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom-right&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="standalone" tabindex="-1">Standalone</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;200&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;99&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>content</td><td>Badge content</td><td><em>number | string</em></td><td>-</td></tr><tr><td>color</td><td>Background color</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td>dot</td><td>Whether to show dot</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>max</td><td>Max value, show <code>{max}+</code> when exceed, only works when content is number</td><td><em>number | string</em></td><td>-</td></tr><tr><td>offset <code>v3.0.5</code></td><td>Offset of badge dot</td><td><em>[number | string, number | string]</em></td><td>-</td></tr><tr><td>show-zero <code>v3.0.10</code></td><td>Whether to show badge when content is zero</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>position <code>v3.2.7</code></td><td>Badge position, can be set to <code>top-left</code> <code>bottom-left</code> <code>bottom-right</code></td><td><em>string</em></td><td><code>top-right</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Default slot</td></tr><tr><td>content</td><td>Custom badge content</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">BadgeProps</span>, <span class="hljs-title class_">BadgePosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-badge-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-badge-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-badge-padding</td><td><em>0 3px</em></td><td>-</td></tr><tr><td>--van-badge-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-badge-font-weight</td><td><em>var(--van-font-weight-bold)</em></td><td>-</td></tr><tr><td>--van-badge-border-width</td><td><em>var(--van-border-width-base)</em></td><td>-</td></tr><tr><td>--van-badge-background-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-badge-dot-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-badge-dot-size</td><td><em>8px</em></td><td>-</td></tr><tr><td>--van-badge-font-family</td><td><em>-apple-system-font, Helvetica Neue, Arial, sans-serif</em></td><td>-</td></tr></tbody></table></div>`,16),e=[p],g={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(o,h)=>(a(),n("div",l,e))}};export{g as default};
