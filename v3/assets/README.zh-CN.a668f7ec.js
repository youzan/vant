import{o as t,a as d,y as a}from"./vue-libs.b44bc779.js";const n={class:"van-doc-markdown-body"},e=a(`<h1>AddressList \u5730\u5740\u5217\u8868</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5C55\u793A\u5730\u5740\u4FE1\u606F\u5217\u8868\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">AddressList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">AddressList</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-address-list</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;chosenAddressId&quot;</span>
  <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;list&quot;</span>
  <span class="hljs-attr">:disabled-list</span>=<span class="hljs-string">&quot;disabledList&quot;</span>
  <span class="hljs-attr">disabled-text</span>=<span class="hljs-string">&quot;\u4EE5\u4E0B\u5730\u5740\u8D85\u51FA\u914D\u9001\u8303\u56F4&quot;</span>
  <span class="hljs-attr">default-tag-text</span>=<span class="hljs-string">&quot;\u9ED8\u8BA4&quot;</span>
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
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5F20\u4E09&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;13000000000&#39;</span>,
        <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u6587\u4E09\u8DEF 138 \u53F7\u4E1C\u65B9\u901A\u4FE1\u5927\u53A6 7 \u697C 501 \u5BA4&#39;</span>,
        <span class="hljs-attr">isDefault</span>: <span class="hljs-literal">true</span>,
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;2&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u56DB&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;1310000000&#39;</span>,
        <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A\u83AB\u5E72\u5C71\u8DEF 50 \u53F7&#39;</span>,
      },
    ];
    <span class="hljs-keyword">const</span> disabledList = [
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;3&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u738B\u4E94&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;1320000000&#39;</span>,
        <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u6EE8\u6C5F\u533A\u6C5F\u5357\u5927\u9053 15 \u53F7&#39;</span>,
      },
    ];

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onAdd</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u65B0\u589E\u5730\u5740&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onEdit</span> = (<span class="hljs-params">item, index</span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u7F16\u8F91\u5730\u5740:&#39;</span> + index);

    <span class="hljs-keyword">return</span> {
      list,
      onAdd,
      onEdit,
      disabledList,
      chosenAddressId,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u9009\u4E2D\u5730\u5740\u7684 id</td><td><em>string</em></td><td>-</td></tr><tr><td>list</td><td>\u5730\u5740\u5217\u8868</td><td><em>AddressListAddress[]</em></td><td><code>[]</code></td></tr><tr><td>disabled-list</td><td>\u4E0D\u53EF\u914D\u9001\u5730\u5740\u5217\u8868</td><td><em>AddressListAddress[]</em></td><td><code>[]</code></td></tr><tr><td>disabled-text</td><td>\u4E0D\u53EF\u914D\u9001\u63D0\u793A\u6587\u6848</td><td><em>string</em></td><td>-</td></tr><tr><td>switchable</td><td>\u662F\u5426\u5141\u8BB8\u5207\u6362\u5730\u5740</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>add-button-text</td><td>\u5E95\u90E8\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u65B0\u589E\u5730\u5740</code></td></tr><tr><td>default-tag-text</td><td>\u9ED8\u8BA4\u5730\u5740\u6807\u7B7E\u6587\u5B57</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>add</td><td>\u70B9\u51FB\u65B0\u589E\u6309\u94AE\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>edit</td><td>\u70B9\u51FB\u7F16\u8F91\u6309\u94AE\u65F6\u89E6\u53D1</td><td><em>item: AddressListAddress, index: number</em></td></tr><tr><td>select</td><td>\u5207\u6362\u9009\u4E2D\u7684\u5730\u5740\u65F6\u89E6\u53D1</td><td><em>item: AddressListAddress, index: number</em></td></tr><tr><td>edit-disabled</td><td>\u7F16\u8F91\u4E0D\u53EF\u914D\u9001\u7684\u5730\u5740\u65F6\u89E6\u53D1</td><td><em>item: AddressListAddress, index: number</em></td></tr><tr><td>select-disabled</td><td>\u9009\u4E2D\u4E0D\u53EF\u914D\u9001\u7684\u5730\u5740\u65F6\u89E6\u53D1</td><td><em>item: AddressListAddress, index: number</em></td></tr><tr><td>click-item</td><td>\u70B9\u51FB\u4EFB\u610F\u5730\u5740\u65F6\u89E6\u53D1</td><td><em>item: AddressListAddress, index: number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="addresslistaddress-shu-ju-jie-gou" tabindex="-1">AddressListAddress \u6570\u636E\u7ED3\u6784</h3><table><thead><tr><th>\u952E\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>id</td><td>\u6BCF\u6761\u5730\u5740\u7684\u552F\u4E00\u6807\u8BC6</td><td><em>number | string</em></td></tr><tr><td>name</td><td>\u59D3\u540D</td><td><em>string</em></td></tr><tr><td>tel</td><td>\u624B\u673A\u53F7</td><td><em>number | string</em></td></tr><tr><td>address</td><td>\u8BE6\u7EC6\u5730\u5740</td><td><em>string</em></td></tr><tr><td>isDefault</td><td>\u662F\u5426\u4E3A\u9ED8\u8BA4\u5730\u5740</td><td><em>boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u5728\u5217\u8868\u4E0B\u65B9\u63D2\u5165\u5185\u5BB9</td><td>-</td></tr><tr><td>top</td><td>\u5728\u9876\u90E8\u63D2\u5165\u5185\u5BB9</td><td>-</td></tr><tr><td>item-bottom</td><td>\u5728\u5217\u8868\u9879\u5E95\u90E8\u63D2\u5165\u5185\u5BB9</td><td><em>item: AddressListAddress</em></td></tr><tr><td>tag <code>v3.0.9</code></td><td>\u81EA\u5B9A\u4E49\u5217\u8868\u9879\u6807\u7B7E\u5185\u5BB9</td><td><em>item: AddressListAddress</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AddressListProps</span>, <span class="hljs-title class_">AddressListAddress</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-address-list-padding</td><td><em>var(--van-padding-sm) var(--van-padding-sm) 80px</em></td><td>-</td></tr><tr><td>--van-address-list-disabled-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-address-list-disabled-text-padding</td><td><em>var(--van-padding-base) * 5 0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-address-list-disabled-text-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-address-list-disabled-text-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-address-list-add-button-z-index</td><td><em>999</em></td><td>-</td></tr><tr><td>--van-address-list-item-padding</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-address-list-item-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-address-list-item-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-address-list-item-font-size</td><td><em>13px</em></td><td>-</td></tr><tr><td>--van-address-list-item-line-height</td><td><em>var(--van-line-height-sm)</em></td><td>-</td></tr><tr><td>--van-address-list-item-radio-icon-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-address-list-edit-icon-size</td><td><em>20px</em></td><td>-</td></tr></tbody></table></div>`,13),l=[e],o={__name:"README.zh-CN",setup(r,{expose:s}){return s({frontmatter:{}}),(p,c)=>(t(),d("div",n,l))}};export{o as default};
