import{o as s,a as d,y as a}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},n=a(`<h1>AddressList</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Display a list of receiving addresses.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">AddressList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">AddressList</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-address-list</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;chosenAddressId&quot;</span>
  <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;list&quot;</span>
  <span class="hljs-attr">:disabled-list</span>=<span class="hljs-string">&quot;disabledList&quot;</span>
  <span class="hljs-attr">disabled-text</span>=<span class="hljs-string">&quot;The following address is out of range&quot;</span>
  <span class="hljs-attr">default-tag-text</span>=<span class="hljs-string">&quot;Default&quot;</span>
  @<span class="hljs-attr">add</span>=<span class="hljs-string">&quot;onAdd&quot;</span>
  @<span class="hljs-attr">edit</span>=<span class="hljs-string">&quot;onEdit&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> chosenAddressId = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;1&#39;</span>);
    <span class="hljs-keyword">const</span> list = [
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;1&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;John Snow&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;13000000000&#39;</span>,
        <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;Somewhere&#39;</span>,
        <span class="hljs-attr">isDefault</span>: <span class="hljs-literal">true</span>,
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;2&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Ned Stark&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;1310000000&#39;</span>,
        <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;Somewhere&#39;</span>,
      },
    ];
    <span class="hljs-keyword">const</span> disabledList = [
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;3&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Tywin&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;1320000000&#39;</span>,
        <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;Somewhere&#39;</span>,
      },
    ];

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onAdd</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;Add&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onEdit</span> = (<span class="hljs-params">item, index</span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;Edit:&#39;</span> + index);

    <span class="hljs-keyword">return</span> {
      list,
      onAdd,
      onEdit,
      disabledList,
      chosenAddressId,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Id of chosen address</td><td><em>string</em></td><td>-</td></tr><tr><td>list</td><td>Address list</td><td><em>Address[]</em></td><td><code>[]</code></td></tr><tr><td>disabled-list</td><td>Disabled address list</td><td><em>Address[]</em></td><td><code>[]</code></td></tr><tr><td>disabled-text</td><td>Disabled text</td><td><em>string</em></td><td>-</td></tr><tr><td>switchable</td><td>Whether to allow switch address</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>add-button-text</td><td>Add button text</td><td><em>string</em></td><td><code>Add new address</code></td></tr><tr><td>default-tag-text</td><td>Default tag text</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>add</td><td>Emitted when the add button is clicked</td><td>-</td></tr><tr><td>edit</td><td>Emitted when the edit icon of address is clicked</td><td><em>item: Address, index: number</em></td></tr><tr><td>select</td><td>Emitted when an address is selected</td><td><em>item: Address, index: number</em></td></tr><tr><td>edit-disabled</td><td>Emitted when the edit icon of disabled address is clicked</td><td><em>item: Address, index: number</em></td></tr><tr><td>select-disabled</td><td>Emitted when a disabled address is selected</td><td><em>item: Address, index: number</em></td></tr><tr><td>click-item</td><td>Emitted when an address item is clicked</td><td><em>item: Address, index: number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="data-structure-of-address" tabindex="-1">Data Structure of Address</h3><table><thead><tr><th>Key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>id</td><td>Id</td><td><em>number | string</em></td></tr><tr><td>name</td><td>Name</td><td><em>string</em></td></tr><tr><td>tel</td><td>Phone</td><td><em>number | string</em></td></tr><tr><td>address</td><td>Address</td><td><em>string</em></td></tr><tr><td>isDefault</td><td>Is default address</td><td><em>boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>default</td><td>Custom content after list</td><td>-</td></tr><tr><td>top</td><td>Custom content before list</td><td>-</td></tr><tr><td>item-bottom</td><td>Custom content after list item</td><td><em>item: Address</em></td></tr><tr><td>tag <code>v3.0.9</code></td><td>Custom tag of list item</td><td><em>item: Address</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AddressListProps</span>, <span class="hljs-title class_">AddressListAddress</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-address-list-padding</td><td><em>var(--van-padding-sm) var(--van-padding-sm) 80px</em></td><td>-</td></tr><tr><td>--van-address-list-disabled-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-address-list-disabled-text-padding</td><td><em>var(--van-padding-base) * 5 0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-address-list-disabled-text-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-address-list-disabled-text-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-address-list-add-button-z-index</td><td><em>999</em></td><td>-</td></tr><tr><td>--van-address-list-item-padding</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-address-list-item-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-address-list-item-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-address-list-item-font-size</td><td><em>13px</em></td><td>-</td></tr><tr><td>--van-address-list-item-line-height</td><td><em>var(--van-line-height-sm)</em></td><td>-</td></tr><tr><td>--van-address-list-item-radio-icon-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-address-list-edit-icon-size</td><td><em>20px</em></td><td>-</td></tr></tbody></table></div>`,13),l=[n],h={__name:"README",setup(r,{expose:t}){return t({frontmatter:{}}),(p,o)=>(s(),d("div",e,l))}};export{h as default};
