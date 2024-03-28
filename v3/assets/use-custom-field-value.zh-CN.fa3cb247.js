import{o as a,a as n,y as l}from"./vue-libs.b44bc779.js";const t={class:"van-doc-markdown-body"},e=l(`<h1>useCustomFieldValue</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u81EA\u5B9A\u4E49 Form \u7EC4\u4EF6\u4E2D\u7684\u8868\u5355\u9879\u3002</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3><p>\u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49\u8868\u5355\u9879\uFF0C\u53EF\u4EE5\u5728 Field \u7EC4\u4EF6\u7684 <code>input</code> \u63D2\u69FD\u4E2D\u63D2\u5165\u4F60\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5E76\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u90E8\u8C03\u7528 <code>useCustomFieldValue</code> \u65B9\u6CD5\u3002</p><h4 id="zi-ding-yi-zu-jian" tabindex="-1">\u81EA\u5B9A\u4E49\u7EC4\u4EF6</h4><p>\u9996\u5148\uFF0C\u5728\u4F60\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\uFF0C\u8C03\u7528 <code>useCustomFieldValue</code> \u65B9\u6CD5\uFF0C\u5E76\u4F20\u5165\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u8FD4\u56DE\u503C\u4E3A\u8868\u5355\u9879\u7684\u503C\u3002</p><pre><code class="language-js"><span class="hljs-comment">// MyComponent.vue</span>
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useCustomFieldValue } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> myValue = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);

    <span class="hljs-comment">// \u6B64\u5904\u4F20\u5165\u7684\u503C\u4F1A\u66FF\u4EE3 Field \u7EC4\u4EF6\u5185\u90E8\u7684 value</span>
    <span class="hljs-title function_">useCustomFieldValue</span>(<span class="hljs-function">() =&gt;</span> myValue.<span class="hljs-property">value</span>);

    <span class="hljs-keyword">return</span> { myValue };
  },
};
</code></pre><h4 id="biao-dan" tabindex="-1">\u8868\u5355</h4><p>\u63A5\u7740\uFF0C\u5728 Form \u7EC4\u4EF6\u4E2D\u5D4C\u5165\u4F60\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5F53\u63D0\u4EA4\u8868\u5355\u65F6\uFF0C\u5373\u53EF\u83B7\u53D6\u5230\u81EA\u5B9A\u4E49\u8868\u5355\u9879\u7684\u503C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-form</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- \u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u8868\u5355\u9879 --&gt;</span>
  <span class="hljs-comment">&lt;!-- \u5F53\u8868\u5355\u63D0\u4EA4\u65F6\uFF0C\u4F1A\u5305\u62EC useCustomFieldValue \u4E2D\u4F20\u5165\u7684\u503C --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;my-field&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u8868\u5355\u9879&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">my-component</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useCustomFieldValue</span>(<span class="hljs-params">customValue: () =&gt; <span class="hljs-built_in">unknown</span></span>): <span class="hljs-built_in">void</span>;
</code></pre></div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">\u53C2\u6570</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>customValue</td><td>\u83B7\u53D6\u8868\u5355\u9879\u503C\u7684\u51FD\u6570</td><td><em>() =&gt; unknown</em></td><td>-</td></tr></tbody></table></div>`,7),p=[e],u={__name:"use-custom-field-value.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(d,h)=>(a(),n("div",t,p))}};export{u as default};
