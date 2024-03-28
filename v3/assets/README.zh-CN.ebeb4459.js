import{o as t,a,y as n}from"./vue-libs.b44bc779.js";const d={class:"van-doc-markdown-body"},l=n(`<h1>ContactList \u8054\u7CFB\u4EBA\u5217\u8868</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5C55\u793A\u8054\u7CFB\u4EBA\u5217\u8868\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ContactList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ContactList</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-list</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;chosenContactId&quot;</span>
  <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;list&quot;</span>
  <span class="hljs-attr">default-tag-text</span>=<span class="hljs-string">&quot;\u9ED8\u8BA4&quot;</span>
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
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5F20\u4E09&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;13000000000&#39;</span>,
        <span class="hljs-attr">isDefault</span>: <span class="hljs-literal">true</span>,
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;2&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u56DB&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;1310000000&#39;</span>,
      },
    ]);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onAdd</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u65B0\u589E&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onEdit</span> = (<span class="hljs-params">contact</span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u7F16\u8F91&#39;</span> + contact.<span class="hljs-property">id</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">contact</span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u9009\u62E9&#39;</span> + contact.<span class="hljs-property">id</span>);

    <span class="hljs-keyword">return</span> {
      list,
      onAdd,
      onEdit,
      onSelect,
      chosenContactId,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u9009\u4E2D\u8054\u7CFB\u4EBA\u7684 id</td><td><em>number | string</em></td><td>-</td></tr><tr><td>list</td><td>\u8054\u7CFB\u4EBA\u5217\u8868</td><td><em>Contact[]</em></td><td><code>[]</code></td></tr><tr><td>add-text</td><td>\u65B0\u5EFA\u6309\u94AE\u6587\u6848</td><td><em>string</em></td><td><code>\u65B0\u5EFA\u8054\u7CFB\u4EBA</code></td></tr><tr><td>default-tag-text</td><td>\u9ED8\u8BA4\u8054\u7CFB\u4EBA\u6807\u7B7E\u6587\u6848</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>add</td><td>\u70B9\u51FB\u65B0\u589E\u6309\u94AE\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>edit</td><td>\u70B9\u51FB\u7F16\u8F91\u6309\u94AE\u65F6\u89E6\u53D1</td><td><em>contact: Contact\uFF0Cindex: number</em></td></tr><tr><td>select</td><td>\u5207\u6362\u9009\u4E2D\u7684\u8054\u7CFB\u4EBA\u65F6\u89E6\u53D1</td><td><em>contact: Contact\uFF0Cindex: number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="contact-shu-ju-jie-gou" tabindex="-1">Contact \u6570\u636E\u7ED3\u6784</h3><table><thead><tr><th>\u952E\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>id</td><td>\u6BCF\u4F4D\u8054\u7CFB\u4EBA\u7684\u552F\u4E00\u6807\u8BC6</td><td><em>number | string</em></td></tr><tr><td>name</td><td>\u8054\u7CFB\u4EBA\u59D3\u540D</td><td><em>string</em></td></tr><tr><td>tel</td><td>\u8054\u7CFB\u4EBA\u624B\u673A\u53F7</td><td><em>number | string</em></td></tr><tr><td>isDefault</td><td>\u662F\u5426\u4E3A\u9ED8\u8BA4\u8054\u7CFB\u4EBA</td><td><em>boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ContactListItem</span>, <span class="hljs-title class_">ContactListProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-contact-list-edit-icon-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-contact-list-add-button-z-index</td><td><em>999</em></td><td>-</td></tr><tr><td>--van-contact-list-item-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-contact-list-item-radio-icon-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr></tbody></table></div>`,12),e=[l],h={__name:"README.zh-CN",setup(p,{expose:s}){return s({frontmatter:{}}),(r,o)=>(t(),a("div",d,e))}};export{h as default};
