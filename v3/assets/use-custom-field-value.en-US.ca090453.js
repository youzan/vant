import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=t(`<h1>useCustomFieldValue</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to custom Field value.</p></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>If you want to custom Form items, you can insert your component into the <code>input</code> slot of the Field component, and call the <code>useCustomFieldValue</code> method inside your custom component.</p><h4 id="mycomponent" tabindex="-1">MyComponent</h4><pre><code class="language-js"><span class="hljs-comment">// MyComponent.vue</span>
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useCustomFieldValue } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> myValue = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);

    <span class="hljs-title function_">useCustomFieldValue</span>(<span class="hljs-function">() =&gt;</span> myValue.<span class="hljs-property">value</span>);

    <span class="hljs-keyword">return</span> { myValue };
  },
};
</code></pre><h4 id="form" tabindex="-1">Form</h4><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-form</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;my-field&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Custom Field&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">my-component</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useCustomFieldValue</span>(<span class="hljs-params">customValue: () =&gt; <span class="hljs-built_in">unknown</span></span>): <span class="hljs-built_in">void</span>;
</code></pre></div><div class="van-doc-card"><h3 id="params" tabindex="-1">Params</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>customValue</td><td>Function to get field value</td><td><em>() =&gt; unknown</em></td><td>-</td></tr></tbody></table></div>`,7),p=[l],r={__name:"use-custom-field-value.en-US",setup(o,{expose:s}){return s({frontmatter:{}}),(d,i)=>(a(),n("div",e,p))}};export{r as default};
