import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>ContactCard</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Display contact information in the form of cards.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ContactCard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ContactCard</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="add-contact" tabindex="-1">Add Contact</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-card</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;add&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onAdd&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onAdd</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;add&#39;</span>);
    <span class="hljs-keyword">return</span> {
      onAdd,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="edit-contact" tabindex="-1">Edit Contact</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-card</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;edit&quot;</span> <span class="hljs-attr">:tel</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;name&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onEdit&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> tel = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;13000000000&#39;</span>);
    <span class="hljs-keyword">const</span> name = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;John Snow&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onEdit</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;edit&#39;</span>);

    <span class="hljs-keyword">return</span> {
      tel,
      name,
      onEdit,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="uneditable" tabindex="-1">Uneditable</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-card</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;edit&quot;</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;John Snow&quot;</span>
  <span class="hljs-attr">tel</span>=<span class="hljs-string">&quot;13000000000&quot;</span>
  <span class="hljs-attr">:editable</span>=<span class="hljs-string">&quot;false&quot;</span>
/&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Can be set to <code>edit</code></td><td><em>string</em></td><td><code>add</code></td></tr><tr><td>name</td><td>Name</td><td><em>string</em></td><td>-</td></tr><tr><td>tel</td><td>Phone</td><td><em>string</em></td><td>-</td></tr><tr><td>add-text</td><td>Add card text</td><td><em>string</em></td><td><code>Add contact info</code></td></tr><tr><td>editable</td><td>Whether to allow editing of contacts</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when component is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ContactCardType</span>, <span class="hljs-title class_">ContactCardProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-contact-card-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-contact-card-add-icon-size</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-contact-card-add-icon-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-contact-card-value-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr></tbody></table></div>`,13),d=[l],h={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(o,r)=>(a(),t("div",e,d))}};export{h as default};
