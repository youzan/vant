import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=n(`<h1>Switch \u5F00\u5173</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5728\u6253\u5F00\u548C\u5173\u95ED\u72B6\u6001\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Switch</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Switch</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u901A\u8FC7 <code>v-model</code> \u7ED1\u5B9A\u5F00\u5173\u7684\u9009\u4E2D\u72B6\u6001\uFF0C<code>true</code> \u8868\u793A\u5F00\uFF0C<code>false</code> \u8868\u793A\u5173\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">\u7981\u7528\u72B6\u6001</h3><p>\u901A\u8FC7 <code>disabled</code> \u5C5E\u6027\u6765\u7981\u7528\u5F00\u5173\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u5F00\u5173\u4E0D\u53EF\u70B9\u51FB\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jia-zai-zhuang-tai" tabindex="-1">\u52A0\u8F7D\u72B6\u6001</h3><p>\u901A\u8FC7 <code>loading</code> \u5C5E\u6027\u8BBE\u7F6E\u5F00\u5173\u4E3A\u52A0\u8F7D\u72B6\u6001\uFF0C\u52A0\u8F7D\u72B6\u6001\u4E0B\u5F00\u5173\u4E0D\u53EF\u70B9\u51FB\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">loading</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-da-xiao" tabindex="-1">\u81EA\u5B9A\u4E49\u5927\u5C0F</h3><p>\u901A\u8FC7 <code>size</code> \u5C5E\u6027\u81EA\u5B9A\u4E49\u5F00\u5173\u7684\u5927\u5C0F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272</h3><p><code>active-color</code> \u5C5E\u6027\u8868\u793A\u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272\uFF0C<code>inactive-color</code> \u8868\u793A\u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;#dcdee0&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-an-niu" tabindex="-1">\u81EA\u5B9A\u4E49\u6309\u94AE</h3><p>\u901A\u8FC7 <code>node</code> \u63D2\u69FD\u81EA\u5B9A\u4E49\u6309\u94AE\u7684\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">node</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon-wrapper&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;checked ? &#39;success&#39; : &#39;cross&#39;&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-switch</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.icon-wrapper</span> {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">justify-content</span>: center;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
  }

  <span class="hljs-selector-class">.icon-wrapper</span> <span class="hljs-selector-class">.van-icon-success</span> {
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">32px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--van-blue);
  }

  <span class="hljs-selector-class">.icon-wrapper</span> <span class="hljs-selector-class">.van-icon-cross</span> {
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">32px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--van-gray-<span class="hljs-number">5</span>);
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="yi-bu-kong-zhi" tabindex="-1">\u5F02\u6B65\u63A7\u5236</h3><p>\u9700\u8981\u5F02\u6B65\u63A7\u5236\u5F00\u5173\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>modelValue</code> \u5C5E\u6027\u548C <code>update:model-value</code> \u4E8B\u4EF6\u4EE3\u66FF <code>v-model</code>\uFF0C\u5E76\u5728\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u4E2D\u624B\u52A8\u5904\u7406\u5F00\u5173\u72B6\u6001\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;checked&quot;</span> @<span class="hljs-attr">update:model-value</span>=<span class="hljs-string">&quot;onUpdateValue&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onUpdateValue</span> = (<span class="hljs-params">newValue</span>) =&gt; {
      <span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">confirm</span>({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u63D0\u9192&#39;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F&#39;</span>,
      }).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
        checked.<span class="hljs-property">value</span> = newValue;
      });
    };

    <span class="hljs-keyword">return</span> {
      checked,
      onUpdateValue,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="da-pei-dan-yuan-ge-shi-yong" tabindex="-1">\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F00\u5173\u9009\u4E2D\u72B6\u6001</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td>loading</td><td>\u662F\u5426\u4E3A\u52A0\u8F7D\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>size</td><td>\u5F00\u5173\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>30px</code></td></tr><tr><td>active-color</td><td>\u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>inactive-color</td><td>\u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272</td><td><em>string</em></td><td><code>white</code></td></tr><tr><td>active-value</td><td>\u6253\u5F00\u65F6\u5BF9\u5E94\u7684\u503C</td><td><em>any</em></td><td><code>true</code></td></tr><tr><td>inactive-value</td><td>\u5173\u95ED\u65F6\u5BF9\u5E94\u7684\u503C</td><td><em>any</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F00\u5173\u72B6\u6001\u5207\u6362\u65F6\u89E6\u53D1</td><td><em>value: any</em></td></tr><tr><td>click</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>node <code>v3.5.0</code></td><td>\u81EA\u5B9A\u4E49\u6309\u94AE\u7684\u5185\u5BB9</td><td>-</td></tr><tr><td>background <code>v3.5.0</code></td><td>\u81EA\u5B9A\u4E49\u5F00\u5173\u7684\u80CC\u666F\u5185\u5BB9</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SwitchProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-switch-size</td><td><em>30px</em></td><td>-</td></tr><tr><td>--van-switch-width</td><td><em>2em</em></td><td>-</td></tr><tr><td>--van-switch-height</td><td><em>1em</em></td><td>-</td></tr><tr><td>--van-switch-node-size</td><td><em>1em</em></td><td>-</td></tr><tr><td>--van-switch-node-background-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-switch-node-box-shadow</td><td><em>0 3px 1px 0 rgba(0, 0, 0, 0.05)</em></td><td>-</td></tr><tr><td>--van-switch-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-switch-on-background-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-switch-transition-duration</td><td><em>var(--van-animation-duration-base)</em></td><td>-</td></tr><tr><td>--van-switch-disabled-opacity</td><td><em>var(--van-disabled-opacity)</em></td><td>-</td></tr><tr><td>--van-switch-border</td><td><em>var(--van-border-width-base) solid rgba(0, 0, 0, 0.1)</em></td><td>-</td></tr></tbody></table></div>`,19),d=[e],i={__name:"README.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(o,h)=>(a(),t("div",l,d))}};export{i as default};
