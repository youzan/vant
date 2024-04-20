import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},p=n(`<h1>SwipeCell \u6ED1\u52A8\u5355\u5143\u683C</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u53EF\u4EE5\u5DE6\u53F3\u6ED1\u52A8\u6765\u5C55\u793A\u64CD\u4F5C\u6309\u94AE\u7684\u5355\u5143\u683C\u7EC4\u4EF6\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">SwipeCell</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SwipeCell</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p><code>SwipeCell</code> \u7EC4\u4EF6\u63D0\u4F9B\u4E86 <code>left</code> \u548C <code>right</code> \u4E24\u4E2A\u63D2\u69FD\uFF0C\u7528\u4E8E\u5B9A\u4E49\u4E24\u4FA7\u6ED1\u52A8\u533A\u57DF\u7684\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u9009\u62E9&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5220\u9664&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6536\u85CF&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-cell</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-nei-rong" tabindex="-1">\u81EA\u5B9A\u4E49\u5185\u5BB9</h3><p><code>SwipeCell</code> \u53EF\u4EE5\u5D4C\u5957\u4EFB\u610F\u5185\u5BB9\uFF0C\u6BD4\u5982\u5D4C\u5957\u4E00\u4E2A\u5546\u54C1\u5361\u7247\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-card</span>
    <span class="hljs-attr">num</span>=<span class="hljs-string">&quot;2&quot;</span>
    <span class="hljs-attr">price</span>=<span class="hljs-string">&quot;2.00&quot;</span>
    <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u4FE1\u606F&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5546\u54C1\u6807\u9898&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;goods-card&quot;</span>
    <span class="hljs-attr">thumb</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5220\u9664&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;delete-button&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-cell</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.goods-card</span> {
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">background-color</span>: @white;
  }

  <span class="hljs-selector-class">.delete-button</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="yi-bu-guan-bi" tabindex="-1">\u5F02\u6B65\u5173\u95ED</h3><p>\u901A\u8FC7\u4F20\u5165 <code>before-close</code> \u56DE\u8C03\u51FD\u6570\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E24\u4FA7\u6ED1\u52A8\u5185\u5BB9\u5173\u95ED\u65F6\u7684\u884C\u4E3A\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-cell</span> <span class="hljs-attr">:before-close</span>=<span class="hljs-string">&quot;beforeClose&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u9009\u62E9&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5220\u9664&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-cell</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// position \u4E3A\u5173\u95ED\u65F6\u70B9\u51FB\u7684\u4F4D\u7F6E</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeClose</span> = (<span class="hljs-params">{ position }</span>) =&gt; {
      <span class="hljs-keyword">switch</span> (position) {
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;left&#39;</span>:
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;cell&#39;</span>:
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;outside&#39;</span>:
          <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;right&#39;</span>:
          <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
            <span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">confirm</span>({
              <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u786E\u5B9A\u5220\u9664\u5417\uFF1F&#39;</span>,
            }).<span class="hljs-title function_">then</span>(resolve);
          });
      }
    };

    <span class="hljs-keyword">return</span> { beforeClose };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u6807\u8BC6\u7B26\uFF0C\u901A\u5E38\u4E3A\u4E00\u4E2A\u552F\u4E00\u7684\u5B57\u7B26\u4E32\u6216\u6570\u5B57\uFF0C\u53EF\u4EE5\u5728\u4E8B\u4EF6\u53C2\u6570\u4E2D\u83B7\u53D6\u5230</td><td><em>number | string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>left-width</td><td>\u6307\u5B9A\u5DE6\u4FA7\u6ED1\u52A8\u533A\u57DF\u5BBD\u5EA6\uFF0C\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>auto</code></td></tr><tr><td>right-width</td><td>\u6307\u5B9A\u53F3\u4FA7\u6ED1\u52A8\u533A\u57DF\u5BBD\u5EA6\uFF0C\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>auto</code></td></tr><tr><td>before-close</td><td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE <code>false</code> \u53EF\u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u8FD4\u56DE Promise</td><td><em>(args) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u6ED1\u52A8</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>stop-propagation</td><td>\u662F\u5426\u963B\u6B62\u6ED1\u52A8\u4E8B\u4EF6\u5192\u6CE1</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u663E\u793A\u7684\u5185\u5BB9</td></tr><tr><td>left</td><td>\u5DE6\u4FA7\u6ED1\u52A8\u533A\u57DF\u7684\u5185\u5BB9</td></tr><tr><td>right</td><td>\u53F3\u4FA7\u6ED1\u52A8\u533A\u57DF\u7684\u5185\u5BB9</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><em>position: &#39;left&#39; | &#39;right&#39; | &#39;cell&#39; | &#39;outside&#39;</em></td></tr><tr><td>open</td><td>\u6253\u5F00\u65F6\u89E6\u53D1</td><td><em>{ name: string | number, position: &#39;left&#39; | &#39;right&#39; }</em></td></tr><tr><td>close</td><td>\u5173\u95ED\u65F6\u89E6\u53D1</td><td><em>{ name: string | number, position: &#39;left&#39; | &#39;right&#39; | &#39;cell&#39; | &#39;outside&#39; }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="beforeclose-can-shu" tabindex="-1">beforeClose \u53C2\u6570</h3><p>beforeClose \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u4E2D\u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A</p><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>name</td><td>\u6807\u8BC6\u7B26</td><td><em>string | number</em></td></tr><tr><td>position</td><td>\u5173\u95ED\u65F6\u7684\u70B9\u51FB\u4F4D\u7F6E</td><td><em>&#39;left&#39; | &#39;right&#39; | &#39;cell&#39; | &#39;outside&#39;</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 SwipeCell \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>open</td><td>\u6253\u5F00\u5355\u5143\u683C\u4FA7\u8FB9\u680F</td><td>position: <code>left | right</code></td><td>-</td></tr><tr><td>close</td><td>\u6536\u8D77\u5355\u5143\u683C\u4FA7\u8FB9\u680F</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">SwipeCellSide</span>,
  <span class="hljs-title class_">SwipeCellProps</span>,
  <span class="hljs-title class_">SwipeCellPosition</span>,
  <span class="hljs-title class_">SwipeCellInstance</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>SwipeCellInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SwipeCellInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> swipeCellRef = ref&lt;<span class="hljs-title class_">SwipeCellInstance</span>&gt;();

swipeCellRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">close</span>();
</code></pre></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F</h3><p>\u53C2\u89C1<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">\u684C\u9762\u7AEF\u9002\u914D</a>\u3002</p></div>`,16),e=[p],i={__name:"README.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(h,r)=>(a(),t("div",l,e))}};export{i as default};
