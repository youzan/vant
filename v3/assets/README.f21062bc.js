import{o as t,a,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},d=n(`<h1>ContactList</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to display the contact list.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ContactList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ContactList</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-list</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;chosenContactId&quot;</span>
  <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;list&quot;</span>
  <span class="hljs-attr">default-tag-text</span>=<span class="hljs-string">&quot;default&quot;</span>
  @<span class="hljs-attr">add</span>=<span class="hljs-string">&quot;onAdd&quot;</span>
  @<span class="hljs-attr">edit</span>=<span class="hljs-string">&quot;onEdit&quot;</span>
  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> chosenContactId = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;1&#39;</span>);
    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;1&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;John Snow&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;13000000000&#39;</span>,
        <span class="hljs-attr">isDefault</span>: <span class="hljs-literal">true</span>,
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;2&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Ned Stark&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;1310000000&#39;</span>,
      },
    ]);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onAdd</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;Add&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onEdit</span> = (<span class="hljs-params">contact</span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;Edit&#39;</span> + contact.<span class="hljs-property">id</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">contact</span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;Select&#39;</span> + contact.<span class="hljs-property">id</span>);

    <span class="hljs-keyword">return</span> {
      list,
      onAdd,
      onEdit,
      onSelect,
      chosenContactId,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Id of chosen contact</td><td><em>number | string</em></td><td>-</td></tr><tr><td>list</td><td>Contact list</td><td><em>Contact[]</em></td><td><code>[]</code></td></tr><tr><td>add-text</td><td>Add button text</td><td><em>string</em></td><td><code>Add new contact</code></td></tr><tr><td>default-tag-text</td><td>Default tag text</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>add</td><td>Emitted when the add button is clicked</td><td>-</td></tr><tr><td>edit</td><td>Emitted when the edit button is clicked</td><td><em>contact: Contact, index: number</em></td></tr><tr><td>select</td><td>Emitted when a contact is selected</td><td><em>contact: Contact, index: number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="data-structure-of-contact" tabindex="-1">Data Structure of Contact</h3><table><thead><tr><th>key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>id</td><td>ID</td><td><em>number | string</em></td></tr><tr><td>name</td><td>Name</td><td><em>string</em></td></tr><tr><td>tel</td><td>Phone</td><td><em>string</em></td></tr><tr><td>isDefault</td><td>Is default contact</td><td><em>boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ContactListItem</span>, <span class="hljs-title class_">ContactListProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-contact-list-edit-icon-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-contact-list-add-button-z-index</td><td><em>999</em></td><td>-</td></tr><tr><td>--van-contact-list-item-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-contact-list-item-radio-icon-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr></tbody></table></div>`,12),l=[d],h={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(o,r)=>(t(),a("div",e,l))}};export{h as default};
