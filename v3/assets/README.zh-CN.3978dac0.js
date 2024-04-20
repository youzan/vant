import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},d=n(`<h1>PasswordInput \u5BC6\u7801\u8F93\u5165\u6846</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5E26\u7F51\u683C\u7684\u8F93\u5165\u6846\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u7528\u4E8E\u8F93\u5165\u5BC6\u7801\u3001\u77ED\u4FE1\u9A8C\u8BC1\u7801\u7B49\u573A\u666F\uFF0C\u901A\u5E38\u4E0E<a href="#/zh-CN/number-keyboard" target="_blank">\u6570\u5B57\u952E\u76D8</a>\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PasswordInput</span>, <span class="hljs-title class_">NumberKeyboard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">PasswordInput</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NumberKeyboard</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u642D\u914D\u6570\u5B57\u952E\u76D8\u7EC4\u4EF6\u6765\u5B9E\u73B0\u5BC6\u7801\u8F93\u5165\u529F\u80FD\u3002</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u5BC6\u7801\u8F93\u5165\u6846 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>
/&gt;</span>
<span class="hljs-comment">&lt;!-- \u6570\u5B57\u952E\u76D8 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;showKeyboard = false&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;123&#39;</span>);
    <span class="hljs-keyword">const</span> showKeyboard = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);

    <span class="hljs-keyword">return</span> {
      value,
      showKeyboard,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-chang-du" tabindex="-1">\u81EA\u5B9A\u4E49\u957F\u5EA6</h3><p>\u901A\u8FC7 <code>length</code> \u5C5E\u6027\u6765\u8BBE\u7F6E\u5BC6\u7801\u957F\u5EA6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:length</span>=<span class="hljs-string">&quot;4&quot;</span>
  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ge-zi-jian-ju" tabindex="-1">\u683C\u5B50\u95F4\u8DDD</h3><p>\u901A\u8FC7 <code>gutter</code> \u5C5E\u6027\u6765\u8BBE\u7F6E\u683C\u5B50\u4E4B\u95F4\u7684\u95F4\u8DDD\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:gutter</span>=<span class="hljs-string">&quot;10&quot;</span>
  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ming-wen-zhan-shi" tabindex="-1">\u660E\u6587\u5C55\u793A</h3><p>\u5C06 <code>mask</code> \u8BBE\u7F6E\u4E3A <code>false</code> \u53EF\u4EE5\u660E\u6587\u5C55\u793A\u8F93\u5165\u7684\u5185\u5BB9\uFF0C\u9002\u7528\u4E8E\u77ED\u4FE1\u9A8C\u8BC1\u7801\u7B49\u573A\u666F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:mask</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ti-shi-xin-xi" tabindex="-1">\u63D0\u793A\u4FE1\u606F</h3><p>\u901A\u8FC7 <code>info</code> \u5C5E\u6027\u8BBE\u7F6E\u63D0\u793A\u4FE1\u606F\uFF0C\u901A\u8FC7 <code>error-info</code> \u5C5E\u6027\u8BBE\u7F6E\u9519\u8BEF\u63D0\u793A\uFF0C\u4F8B\u5982\u5F53\u8F93\u5165\u516D\u4F4D\u65F6\u63D0\u793A\u5BC6\u7801\u9519\u8BEF\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">info</span>=<span class="hljs-string">&quot;\u5BC6\u7801\u4E3A 6 \u4F4D\u6570\u5B57&quot;</span>
  <span class="hljs-attr">:error-info</span>=<span class="hljs-string">&quot;errorInfo&quot;</span>
  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;showKeyboard = false&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;123&#39;</span>);
    <span class="hljs-keyword">const</span> errorInfo = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showKeyboard = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);

    <span class="hljs-title function_">watch</span>(value, <span class="hljs-function">(<span class="hljs-params">newVal</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (newVal.<span class="hljs-property">length</span> === <span class="hljs-number">6</span> &amp;&amp; newVal !== <span class="hljs-string">&#39;123456&#39;</span>) {
        errorInfo.<span class="hljs-property">value</span> = <span class="hljs-string">&#39;\u5BC6\u7801\u9519\u8BEF&#39;</span>;
      } <span class="hljs-keyword">else</span> {
        errorInfo.<span class="hljs-property">value</span> = <span class="hljs-string">&#39;&#39;</span>;
      }
    });

    <span class="hljs-keyword">return</span> {
      value,
      errorInfo,
      showKeyboard,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u5BC6\u7801\u503C</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>info</td><td>\u8F93\u5165\u6846\u4E0B\u65B9\u6587\u5B57\u63D0\u793A</td><td><em>string</em></td><td>-</td></tr><tr><td>error-info</td><td>\u8F93\u5165\u6846\u4E0B\u65B9\u9519\u8BEF\u63D0\u793A</td><td><em>string</em></td><td>-</td></tr><tr><td>length</td><td>\u5BC6\u7801\u6700\u5927\u957F\u5EA6</td><td><em>number | string</em></td><td><code>6</code></td></tr><tr><td>gutter</td><td>\u8F93\u5165\u6846\u683C\u5B50\u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u5982 <code>20px</code> <code>2em</code>\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A<code>px</code></td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>mask</td><td>\u662F\u5426\u9690\u85CF\u5BC6\u7801\u5185\u5BB9</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>focused</td><td>\u662F\u5426\u5DF2\u805A\u7126\uFF0C\u805A\u7126\u65F6\u4F1A\u663E\u793A\u5149\u6807</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u8F93\u5165\u6846\u805A\u7126\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PasswordInputProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-password-input-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-password-input-margin</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-password-input-font-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-password-input-border-radius</td><td><em>6px</em></td><td>-</td></tr><tr><td>--van-password-input-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-password-input-info-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-password-input-info-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-password-input-error-info-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-password-input-dot-size</td><td><em>10px</em></td><td>-</td></tr><tr><td>--van-password-input-dot-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-password-input-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-password-input-cursor-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-password-input-cursor-width</td><td><em>1px</em></td><td>-</td></tr><tr><td>--van-password-input-cursor-height</td><td><em>40%</em></td><td>-</td></tr><tr><td>--van-password-input-cursor-animation-duration</td><td><em>1s</em></td><td>-</td></tr></tbody></table></div>`,15),p=[d],i={__name:"README.zh-CN",setup(e,{expose:s}){return s({frontmatter:{}}),(o,c)=>(a(),t("div",l,p))}};export{i as default};
