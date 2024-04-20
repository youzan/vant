import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=n(`<h1>Slider \u6ED1\u5757</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u6ED1\u52A8\u8F93\u5165\u6761\uFF0C\u7528\u4E8E\u5728\u7ED9\u5B9A\u7684\u8303\u56F4\u5185\u9009\u62E9\u4E00\u4E2A\u503C\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Slider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Slider</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">50</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u5F53\u524D\u503C\uFF1A&#39;</span> + value);
    <span class="hljs-keyword">return</span> {
      value,
      onChange,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shuang-hua-kuai" tabindex="-1">\u53CC\u6ED1\u5757</h3><p>\u6DFB\u52A0 <code>range</code> \u5C5E\u6027\u5C31\u53EF\u4EE5\u5F00\u542F\u53CC\u6ED1\u5757\u6A21\u5F0F\uFF0C\u786E\u4FDD <code>value</code> \u7684\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">range</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// \u53CC\u6ED1\u5757\u6A21\u5F0F\u65F6\uFF0C\u503C\u5FC5\u987B\u662F\u6570\u7EC4</span>
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>([<span class="hljs-number">10</span>, <span class="hljs-number">50</span>]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u5F53\u524D\u503C\uFF1A&#39;</span> + value);
    <span class="hljs-keyword">return</span> {
      value,
      onChange,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zhi-ding-xuan-ze-fan-wei" tabindex="-1">\u6307\u5B9A\u9009\u62E9\u8303\u56F4</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;-50&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong" tabindex="-1">\u7981\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zhi-ding-bu-chang" tabindex="-1">\u6307\u5B9A\u6B65\u957F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;10&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yang-shi" tabindex="-1">\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">bar-height</span>=<span class="hljs-string">&quot;4px&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-an-niu" tabindex="-1">\u81EA\u5B9A\u4E49\u6309\u94AE</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-button&quot;</span>&gt;</span>{{ value }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-slider</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.custom-button</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">26px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">18px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#ee0a24</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">100px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="chui-zhi-fang-xiang" tabindex="-1">\u5782\u76F4\u65B9\u5411</h3><p>\u8BBE\u7F6E <code>vertical</code> \u5C5E\u6027\u540E\uFF0C\u6ED1\u5757\u4F1A\u5782\u76F4\u5C55\u793A\uFF0C\u4E14\u9AD8\u5EA6\u4E3A 100% \u7236\u5143\u7D20\u9AD8\u5EA6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;150px&#39; }&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">vertical</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
    <span class="hljs-attr">range</span>
    <span class="hljs-attr">vertical</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-left: 100px;&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">50</span>);
    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>([<span class="hljs-number">10</span>, <span class="hljs-number">50</span>]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u5F53\u524D\u503C\uFF1A&#39;</span> + value);
    <span class="hljs-keyword">return</span> {
      value,
      value2,
      onChange,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u8FDB\u5EA6\u767E\u5206\u6BD4\uFF0C\u5728\u53CC\u6ED1\u5757\u6A21\u5F0F\u4E0B\u4E3A\u6570\u7EC4\u683C\u5F0F</td><td><em>number | [number, number]</em></td><td><code>0</code></td></tr><tr><td>max</td><td>\u6700\u5927\u503C</td><td><em>number | string</em></td><td><code>100</code></td></tr><tr><td>min</td><td>\u6700\u5C0F\u503C</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>step</td><td>\u6B65\u957F</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>bar-height</td><td>\u8FDB\u5EA6\u6761\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>2px</code></td></tr><tr><td>button-size</td><td>\u6ED1\u5757\u6309\u94AE\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>24px</code></td></tr><tr><td>active-color</td><td>\u8FDB\u5EA6\u6761\u6FC0\u6D3B\u6001\u989C\u8272</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>inactive-color</td><td>\u8FDB\u5EA6\u6761\u975E\u6FC0\u6D3B\u6001\u989C\u8272</td><td><em>string</em></td><td><code>#e5e5e5</code></td></tr><tr><td>range</td><td>\u662F\u5426\u5F00\u542F\u53CC\u6ED1\u5757\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>reverse <code>v3.2.1</code></td><td>\u662F\u5426\u5C06\u8FDB\u5EA6\u6761\u53CD\u8F6C</td><td><code>false</code></td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u6ED1\u5757</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly <code>v3.0.5</code></td><td>\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u65E0\u6CD5\u4FEE\u6539\u6ED1\u5757\u7684\u503C</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>vertical</td><td>\u662F\u5426\u5782\u76F4\u5C55\u793A</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>update:model-value</td><td>\u8FDB\u5EA6\u53D8\u5316\u65F6\u5B9E\u65F6\u89E6\u53D1</td><td><em>value: number</em></td></tr><tr><td>change</td><td>\u8FDB\u5EA6\u53D8\u5316\u4E14\u7ED3\u675F\u62D6\u52A8\u540E\u89E6\u53D1</td><td><em>value: number</em></td></tr><tr><td>drag-start</td><td>\u5F00\u59CB\u62D6\u52A8\u65F6\u89E6\u53D1</td><td><em>event: TouchEvent</em></td></tr><tr><td>drag-end</td><td>\u7ED3\u675F\u62D6\u52A8\u65F6\u89E6\u53D1</td><td><em>event: TouchEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>button</td><td>\u81EA\u5B9A\u4E49\u6ED1\u5757\u6309\u94AE</td><td><em>{ value: number }</em></td></tr><tr><td>left-button <code>v3.1.3</code></td><td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u6ED1\u5757\u6309\u94AE\uFF08\u53CC\u6ED1\u5757\u6A21\u5F0F\u4E0B\uFF09</td><td><em>{ value: number }</em></td></tr><tr><td>right-button <code>v3.1.3</code></td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u6ED1\u5757\u6309\u94AE\uFF08\u53CC\u6ED1\u5757\u6A21\u5F0F\u4E0B\uFF09</td><td><em>{ value: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SliderProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-slider-active-background-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-slider-inactive-background-color</td><td><em>var(--van-gray-3)</em></td><td>-</td></tr><tr><td>--van-slider-disabled-opacity</td><td><em>var(--van-disabled-opacity)</em></td><td>-</td></tr><tr><td>--van-slider-bar-height</td><td><em>2px</em></td><td>-</td></tr><tr><td>--van-slider-button-width</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-slider-button-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-slider-button-border-radius</td><td><em>50%</em></td><td>-</td></tr><tr><td>--van-slider-button-background-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-slider-button-box-shadow</td><td><em>0 1px 2px rgba(0, 0, 0, 0.5)</em></td><td>-</td></tr></tbody></table></div>`,19),d=[e],i={__name:"README.zh-CN",setup(p,{expose:s}){return s({frontmatter:{}}),(r,o)=>(a(),t("div",l,d))}};export{i as default};
