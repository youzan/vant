import{o as t,a as n,y as a}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},d=a(`<h1>useEventListener</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u65B9\u4FBF\u5730\u8FDB\u884C\u4E8B\u4EF6\u7ED1\u5B9A\uFF0C\u5728\u7EC4\u4EF6 <code>mounted</code> \u548C <code>activated</code> \u65F6\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C<code>unmounted</code> \u548C <code>deactivated</code> \u65F6\u89E3\u7ED1\u4E8B\u4EF6\u3002</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useEventListener } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// \u5728 window \u4E0A\u7ED1\u5B9A resize \u4E8B\u4EF6</span>
    <span class="hljs-comment">// \u672A\u6307\u5B9A\u76D1\u542C\u5BF9\u8C61\u65F6\uFF0C\u9ED8\u8BA4\u4F1A\u76D1\u542C window \u7684\u4E8B\u4EF6</span>
    <span class="hljs-title function_">useEventListener</span>(<span class="hljs-string">&#39;resize&#39;</span>, <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;window resize&#39;</span>);
    });

    <span class="hljs-comment">// \u5728 body \u5143\u7D20\u4E0A\u7ED1\u5B9A click \u4E8B\u4EF6</span>
    <span class="hljs-title function_">useEventListener</span>(
      <span class="hljs-string">&#39;click&#39;</span>,
      <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;click body&#39;</span>);
      },
      { <span class="hljs-attr">target</span>: <span class="hljs-variable language_">document</span>.<span class="hljs-property">body</span> }
    );
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Options</span> = {
  target?: <span class="hljs-title class_">EventTarget</span> | <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-title class_">EventTarget</span>&gt;;
  capture?: <span class="hljs-built_in">boolean</span>;
  passive?: <span class="hljs-built_in">boolean</span>;
};

<span class="hljs-keyword">function</span> <span class="hljs-title function_">useEventListener</span>(<span class="hljs-params">
  <span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span>,
  listener: EventListener,
  options?: Options
</span>): <span class="hljs-built_in">void</span>;
</code></pre></div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">\u53C2\u6570</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u76D1\u542C\u7684\u4E8B\u4EF6\u7C7B\u578B</td><td><em>string</em></td><td>-</td></tr><tr><td>listener</td><td>\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570</td><td><em>EventListener</em></td><td>-</td></tr><tr><td>options</td><td>\u53EF\u9009\u7684\u914D\u7F6E\u9879</td><td><em>Options</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>target</td><td>\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5143\u7D20</td><td><em>EventTarget | Ref&lt;EventTarget&gt;</em></td><td><code>window</code></td></tr><tr><td>capture</td><td>\u662F\u5426\u5728\u4E8B\u4EF6\u6355\u83B7\u9636\u6BB5\u89E6\u53D1</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>passive</td><td>\u8BBE\u7F6E\u4E3A <code>true</code> \u65F6\uFF0C\u8868\u793A <code>listener</code> \u6C38\u8FDC\u4E0D\u4F1A\u8C03\u7528 <code>preventDefault</code></td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div>`,8),l=[d],h={__name:"use-event-listener.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(p,i)=>(t(),n("div",e,l))}};export{h as default};
