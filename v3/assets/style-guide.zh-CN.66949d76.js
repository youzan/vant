import{o as a,a as n,y as p}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},t=p(`<h1>\u98CE\u683C\u6307\u5357</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5728\u53C2\u4E0E Vant \u5F00\u53D1\u65F6\uFF0C\u8BF7\u9075\u5B88\u7EA6\u5B9A\u7684\u5355\u6587\u4EF6\u7EC4\u4EF6\u98CE\u683C\u6307\u5357\uFF0C\u6307\u5357\u5185\u5BB9\u8282\u9009\u81EA <a href="https://v3.cn.vuejs.org/style-guide/" target="_blank">Vue \u5B98\u65B9\u98CE\u683C\u6307\u5357</a>\u3002</p></div><div class="van-doc-card"><h3 id="zu-jian-shu-ju" tabindex="-1">\u7EC4\u4EF6\u6570\u636E</h3><p>\u7EC4\u4EF6\u7684 data \u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570\u3002</p><pre><code class="language-js"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">data</span>: {
    <span class="hljs-attr">foo</span>: <span class="hljs-string">&#39;bar&#39;</span>,
  },
};

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">foo</span>: <span class="hljs-string">&#39;bar&#39;</span>,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="dan-wen-jian-zu-jian-wen-jian-ming-cheng" tabindex="-1">\u5355\u6587\u4EF6\u7EC4\u4EF6\u6587\u4EF6\u540D\u79F0</h3><p>\u5355\u6587\u4EF6\u7EC4\u4EF6\u7684\u6587\u4EF6\u540D\u5E94\u8BE5\u8981\u4E48\u59CB\u7EC8\u662F\u5355\u8BCD\u5927\u5199\u5F00\u5934 (PascalCase)\uFF0C\u8981\u4E48\u59CB\u7EC8\u662F\u6A2A\u7EBF\u8FDE\u63A5 (kebab-case)\u3002</p><pre><code>// bad
mycomponent.vue
myComponent.vue

// good
my-component.vue
MyComponent.vue
</code></pre></div><div class="van-doc-card"><h3 id="jin-mi-ou-he-de-zu-jian-ming" tabindex="-1">\u7D27\u5BC6\u8026\u5408\u7684\u7EC4\u4EF6\u540D</h3><p>\u548C\u7236\u7EC4\u4EF6\u7D27\u5BC6\u8026\u5408\u7684\u5B50\u7EC4\u4EF6\u5E94\u8BE5\u4EE5\u7236\u7EC4\u4EF6\u540D\u4F5C\u4E3A\u524D\u7F00\u547D\u540D\u3002</p><pre><code>// bad
components/
|- TodoList.vue
|- TodoItem.vue
\u2514\u2500 TodoButton.vue

// good
components/
|- TodoList.vue
|- TodoListItem.vue
\u2514\u2500 TodoListItemButton.vue
</code></pre></div><div class="van-doc-card"><h3 id="zi-bi-he-zu-jian" tabindex="-1">\u81EA\u95ED\u5408\u7EC4\u4EF6</h3><p>\u5728\u5355\u6587\u4EF6\u7EC4\u4EF6\u4E2D\u6CA1\u6709\u5185\u5BB9\u7684\u7EC4\u4EF6\u5E94\u8BE5\u662F\u81EA\u95ED\u5408\u7684\u3002</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- bad --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">my-component</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">my-component</span>&gt;</span>

<span class="hljs-comment">&lt;!-- good --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">my-component</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="prop-ming-da-xiao-xie" tabindex="-1">Prop \u540D\u5927\u5C0F\u5199</h3><p>\u5728\u58F0\u660E prop \u7684\u65F6\u5019\uFF0C\u5176\u547D\u540D\u5E94\u8BE5\u59CB\u7EC8\u4F7F\u7528 camelCase\uFF0C\u800C\u5728\u6A21\u677F\u4E2D\u5E94\u8BE5\u59CB\u7EC8\u4F7F\u7528 kebab-case\u3002</p><pre><code class="language-js"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">props</span>: {
    <span class="hljs-string">&#39;greeting-text&#39;</span>: <span class="hljs-title class_">String</span>,
  },
};

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">props</span>: {
    <span class="hljs-attr">greetingText</span>: <span class="hljs-title class_">String</span>,
  },
};
</code></pre><pre><code class="language-html"><span class="hljs-comment">&lt;!-- bad --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">welcome-message</span> <span class="hljs-attr">greetingText</span>=<span class="hljs-string">&quot;hi&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- good --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">welcome-message</span> <span class="hljs-attr">greeting-text</span>=<span class="hljs-string">&quot;hi&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zhi-ling-suo-xie" tabindex="-1">\u6307\u4EE4\u7F29\u5199</h3><p>\u6307\u4EE4\u7F29\u5199\uFF0C\u7528 <code>:</code> \u8868\u793A <code>v-bind:</code> \uFF0C\u7528 <code>@</code> \u8868\u793A <code>v-on:</code></p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- bad --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">v-bind:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">v-on:input</span>=<span class="hljs-string">&quot;onInput&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- good --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="props-shun-xu" tabindex="-1">Props \u987A\u5E8F</h3><p>\u6807\u7B7E\u7684 Props \u5E94\u8BE5\u6709\u7EDF\u4E00\u7684\u987A\u5E8F\uFF0C\u4F9D\u6B21\u4E3A\u6307\u4EE4\u3001\u5C5E\u6027\u548C\u4E8B\u4EF6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">my-component</span>
  <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;if&quot;</span>
  <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;ref&quot;</span>
  <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;key&quot;</span>
  <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;text&quot;</span>
  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zu-jian-xuan-xiang-de-shun-xu" tabindex="-1">\u7EC4\u4EF6\u9009\u9879\u7684\u987A\u5E8F</h3><p>\u7EC4\u4EF6\u9009\u9879\u5E94\u8BE5\u6709\u7EDF\u4E00\u7684\u987A\u5E8F\u3002</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;&#39;</span>,

  <span class="hljs-attr">components</span>: {},

  <span class="hljs-attr">props</span>: {},

  <span class="hljs-attr">emits</span>: [],

  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {},

  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {},

  <span class="hljs-attr">computed</span>: {},

  <span class="hljs-attr">watch</span>: {},

  <span class="hljs-title function_">created</span>(<span class="hljs-params"></span>) {},

  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {},

  <span class="hljs-title function_">unmounted</span>(<span class="hljs-params"></span>) {},

  <span class="hljs-attr">methods</span>: {},
};
</code></pre></div><div class="van-doc-card"><h3 id="zu-jian-xuan-xiang-zhong-de-kong-xing" tabindex="-1">\u7EC4\u4EF6\u9009\u9879\u4E2D\u7684\u7A7A\u884C</h3><p>\u7EC4\u4EF6\u9009\u9879\u8F83\u591A\u65F6\uFF0C\u5EFA\u8BAE\u5728\u5C5E\u6027\u4E4B\u95F4\u6DFB\u52A0\u7A7A\u884C\u3002</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">computed</span>: {
    <span class="hljs-title function_">formattedValue</span>(<span class="hljs-params"></span>) {
      <span class="hljs-comment">// ...</span>
    },

    <span class="hljs-title function_">styles</span>(<span class="hljs-params"></span>) {
      <span class="hljs-comment">// ...</span>
    },
  },

  <span class="hljs-attr">methods</span>: {
    <span class="hljs-title function_">onInput</span>(<span class="hljs-params"></span>) {
      <span class="hljs-comment">// ...</span>
    },

    <span class="hljs-title function_">onChange</span>(<span class="hljs-params"></span>) {
      <span class="hljs-comment">// ...</span>
    },
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="dan-wen-jian-zu-jian-ding-ji-biao-qian-de-shun-xu" tabindex="-1">\u5355\u6587\u4EF6\u7EC4\u4EF6\u9876\u7EA7\u6807\u7B7E\u7684\u987A\u5E8F</h3><p>\u5355\u6587\u4EF6\u7EC4\u4EF6\u5E94\u8BE5\u603B\u662F\u8BA9\u9876\u7EA7\u6807\u7B7E\u7684\u987A\u5E8F\u4FDD\u6301\u4E00\u81F4\uFF0C\u4E14\u6807\u7B7E\u4E4B\u95F4\u7559\u6709\u7A7A\u884C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span> ... <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-comment">/* ... */</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-comment">/* ... */</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div>`,12),c=[t],i={__name:"style-guide.zh-CN",setup(e,{expose:s}){return s({frontmatter:{}}),(h,d)=>(a(),n("div",l,c))}};export{i as default};
