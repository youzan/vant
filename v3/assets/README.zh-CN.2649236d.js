import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>Circle \u73AF\u5F62\u8FDB\u5EA6\u6761</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5706\u73AF\u5F62\u7684\u8FDB\u5EA6\u6761\u7EC4\u4EF6\uFF0C\u652F\u6301\u8FDB\u5EA6\u6E10\u53D8\u52A8\u753B\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Circle</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Circle</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p><code>rate</code> \u5C5E\u6027\u8868\u793A\u8FDB\u5EA6\u6761\u7684\u76EE\u6807\u8FDB\u5EA6\uFF0C<code>v-model:current-rate</code> \u8868\u793A\u52A8\u753B\u8FC7\u7A0B\u4E2D\u7684\u5B9E\u65F6\u8FDB\u5EA6\u3002\u5F53 <code>rate</code> \u53D1\u751F\u53D8\u5316\u65F6\uFF0C<code>v-model:current-rate</code> \u4F1A\u4EE5 <code>speed</code> \u7684\u901F\u5EA6\u53D8\u5316\uFF0C\u76F4\u81F3\u8FBE\u5230 <code>rate</code> \u8BBE\u5B9A\u7684\u503C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;30&quot;</span>
  <span class="hljs-attr">:speed</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;text&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, computed } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentRate = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> text = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> currentRate.<span class="hljs-property">value</span>.<span class="hljs-title function_">toFixed</span>(<span class="hljs-number">0</span>) + <span class="hljs-string">&#39;%&#39;</span>);

    <span class="hljs-keyword">return</span> {
      text,
      currentRate,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="kuan-du-ding-zhi" tabindex="-1">\u5BBD\u5EA6\u5B9A\u5236</h3><p>\u901A\u8FC7 <code>stroke-width</code> \u5C5E\u6027\u6765\u63A7\u5236\u8FDB\u5EA6\u6761\u5BBD\u5EA6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">:stroke-width</span>=<span class="hljs-string">&quot;60&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5BBD\u5EA6\u5B9A\u5236&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="yan-se-ding-zhi" tabindex="-1">\u989C\u8272\u5B9A\u5236</h3><p>\u901A\u8FC7 <code>color</code> \u5C5E\u6027\u6765\u63A7\u5236\u8FDB\u5EA6\u6761\u989C\u8272\uFF0C<code>layer-color</code> \u5C5E\u6027\u6765\u63A7\u5236\u8F68\u9053\u989C\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">layer-color</span>=<span class="hljs-string">&quot;#ebedf0&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u989C\u8272\u5B9A\u5236&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jian-bian-se" tabindex="-1">\u6E10\u53D8\u8272</h3><p><code>color</code> \u5C5E\u6027\u652F\u6301\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u6765\u5B9A\u4E49\u6E10\u53D8\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">:color</span>=<span class="hljs-string">&quot;gradientColor&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6E10\u53D8\u8272&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentRate = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> gradientColor = {
      <span class="hljs-string">&#39;0%&#39;</span>: <span class="hljs-string">&#39;#3fecff&#39;</span>,
      <span class="hljs-string">&#39;100%&#39;</span>: <span class="hljs-string">&#39;#6149f6&#39;</span>,
    };

    <span class="hljs-keyword">return</span> {
      currentRate,
      gradientColor,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="ni-shi-zhen-fang-xiang" tabindex="-1">\u9006\u65F6\u9488\u65B9\u5411</h3><p>\u5C06 <code>clockwise</code> \u8BBE\u7F6E\u4E3A <code>false</code>\uFF0C\u8FDB\u5EA6\u4F1A\u4ECE\u9006\u65F6\u9488\u65B9\u5411\u5F00\u59CB\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">:clockwise</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u9006\u65F6\u9488\u65B9\u5411&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="da-xiao-ding-zhi" tabindex="-1">\u5927\u5C0F\u5B9A\u5236</h3><p>\u901A\u8FC7 <code>size</code> \u5C5E\u6027\u8BBE\u7F6E\u5706\u73AF\u76F4\u5F84\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;120px&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5927\u5C0F\u5B9A\u5236&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="qi-shi-wei-zhi" tabindex="-1">\u8D77\u59CB\u4F4D\u7F6E</h3><p>\u8FDB\u5EA6\u6761\u9ED8\u8BA4\u4ECE\u9876\u90E8\u5F00\u59CB\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>start-position</code> \u5C5E\u6027\u8BBE\u7F6E\u8D77\u59CB\u4F4D\u7F6E\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;\u5DE6\u4FA7&quot;</span>
  <span class="hljs-attr">start-position</span>=<span class="hljs-string">&quot;left&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u53F3\u4FA7&quot;</span>
  <span class="hljs-attr">start-position</span>=<span class="hljs-string">&quot;right&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5E95\u90E8&quot;</span>
  <span class="hljs-attr">start-position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
/&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:current-rate</td><td>\u5F53\u524D\u8FDB\u5EA6</td><td><em>number</em></td><td>-</td></tr><tr><td>rate</td><td>\u76EE\u6807\u8FDB\u5EA6</td><td><em>number | string</em></td><td><code>100</code></td></tr><tr><td>size</td><td>\u5706\u73AF\u76F4\u5F84\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>100px</code></td></tr><tr><td>color</td><td>\u8FDB\u5EA6\u6761\u989C\u8272\uFF0C\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u53EF\u4EE5\u5B9A\u4E49\u6E10\u53D8\u8272</td><td><em>string | object</em></td><td><code>#1989fa</code></td></tr><tr><td>layer-color</td><td>\u8F68\u9053\u989C\u8272</td><td><em>string</em></td><td><code>white</code></td></tr><tr><td>fill</td><td>\u586B\u5145\u989C\u8272</td><td><em>string</em></td><td><code>none</code></td></tr><tr><td>speed</td><td>\u52A8\u753B\u901F\u5EA6\uFF08\u5355\u4F4D\u4E3A rate/s\uFF09</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>text</td><td>\u6587\u5B57</td><td><em>string</em></td><td>-</td></tr><tr><td>stroke-width</td><td>\u8FDB\u5EA6\u6761\u5BBD\u5EA6</td><td><em>number | string</em></td><td><code>40</code></td></tr><tr><td>stroke-linecap</td><td>\u8FDB\u5EA6\u6761\u7AEF\u70B9\u7684\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A <code>square</code> <code>butt</code></td><td><em>string</em></td><td><code>round</code></td></tr><tr><td>clockwise</td><td>\u662F\u5426\u987A\u65F6\u9488\u589E\u52A0</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>start-position <code>v3.2.1</code></td><td>\u8FDB\u5EA6\u8D77\u59CB\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>left</code>\u3001<code>right</code>\u3001<code>bottom</code></td><td><em>CircleStartPosition</em></td><td><code>top</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u6587\u5B57\u5185\u5BB9</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CircleProps</span>, <span class="hljs-title class_">CircleStartPosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-circle-size</td><td><em>100px</em></td><td>-</td></tr><tr><td>--van-circle-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-circle-layer-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-circle-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-circle-text-font-weight</td><td><em>var(--van-font-weight-bold)</em></td><td>-</td></tr><tr><td>--van-circle-text-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-circle-text-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr></tbody></table></div>`,17),r=[l],h={__name:"README.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(p,o)=>(a(),t("div",e,r))}};export{h as default};
