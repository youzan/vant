import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=t(`<h1>useRelation</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5EFA\u7ACB\u7236\u5B50\u7EC4\u4EF6\u4E4B\u95F4\u7684\u5173\u8054\u5173\u7CFB\uFF0C\u8FDB\u884C\u6570\u636E\u901A\u4FE1\u548C\u65B9\u6CD5\u8C03\u7528\uFF0C\u57FA\u4E8E <code>provide</code> \u548C <code>inject</code> \u5B9E\u73B0\u3002</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3><p>\u5728\u7236\u7EC4\u4EF6\u4E2D\u4F7F\u7528 <code>useChildren</code> \u5173\u8054\u5B50\u7EC4\u4EF6:</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useChildren } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">RELATION_KEY</span> = <span class="hljs-title class_">Symbol</span>(<span class="hljs-string">&#39;my-relation&#39;</span>);

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> { linkChildren } = <span class="hljs-title function_">useChildren</span>(<span class="hljs-variable constant_">RELATION_KEY</span>);

    <span class="hljs-keyword">const</span> count = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">add</span> = (<span class="hljs-params"></span>) =&gt; {
      count.<span class="hljs-property">value</span>++;
    };

    <span class="hljs-comment">// \u5411\u5B50\u7EC4\u4EF6\u63D0\u4F9B\u6570\u636E\u548C\u65B9\u6CD5</span>
    <span class="hljs-title function_">linkChildren</span>({ add, count });
  },
};
</code></pre><p>\u5728\u5B50\u7EC4\u4EF6\u4E2D\u4F7F\u7528 <code>useParent</code> \u83B7\u53D6\u7236\u7EC4\u4EF6\u63D0\u4F9B\u7684\u6570\u636E\u548C\u65B9\u6CD5:</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { useParent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> { parent } = <span class="hljs-title function_">useParent</span>(<span class="hljs-variable constant_">RELATION_KEY</span>);

    <span class="hljs-comment">// \u8C03\u7528\u7236\u7EC4\u4EF6\u63D0\u4F9B\u7684\u6570\u636E\u548C\u65B9\u6CD5</span>
    <span class="hljs-keyword">if</span> (parent) {
      parent.<span class="hljs-title function_">add</span>();
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(parent.<span class="hljs-property">count</span>.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; 1</span>
    }
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> useParent&lt;T&gt;(<span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">symbol</span>): {
  parent?: T;
  index?: <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">number</span>&gt;;
};

<span class="hljs-keyword">function</span> <span class="hljs-title function_">useChildren</span>(<span class="hljs-params">key: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">symbol</span></span>): {
  <span class="hljs-attr">children</span>: <span class="hljs-title class_">ComponentPublicInstance</span>[];
  <span class="hljs-attr">linkChildren</span>: <span class="hljs-function">(<span class="hljs-params">value: <span class="hljs-built_in">any</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>;
};
</code></pre></div><div class="van-doc-card"><h3 id="useparent-fan-hui-zhi" tabindex="-1">useParent \u8FD4\u56DE\u503C</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>parent</td><td>\u7236\u7EC4\u4EF6\u63D0\u4F9B\u7684\u503C</td><td><em>any</em></td></tr><tr><td>index</td><td>\u5F53\u524D\u7EC4\u4EF6\u5728\u7236\u7EC4\u4EF6\u7684\u6240\u6709\u5B50\u7EC4\u4EF6\u4E2D\u5BF9\u5E94\u7684\u7D22\u5F15\u4F4D\u7F6E</td><td><em>Ref&lt;number&gt;</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="usechildren-fan-hui-zhi" tabindex="-1">useChildren \u8FD4\u56DE\u503C</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>children</td><td>\u5B50\u7EC4\u4EF6\u5217\u8868</td><td><em>ComponentPublicInstance[]</em></td></tr><tr><td>linkChildren</td><td>\u5411\u5B50\u7EC4\u4EF6\u63D0\u4F9B\u503C\u7684\u65B9\u6CD5</td><td><em>(value: any) =&gt; void</em></td></tr></tbody></table></div>`,8),p=[e],h={__name:"use-relation.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(i,o)=>(a(),n("div",l,p))}};export{h as default};
