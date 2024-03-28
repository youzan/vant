import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},p=n(`<h1>Notify \u6D88\u606F\u63D0\u793A</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5728\u9875\u9762\u9876\u90E8\u5C55\u793A\u6D88\u606F\u63D0\u793A\uFF0C\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002</p></div><div class="van-doc-card"><h3 id="han-shu-diao-yong" tabindex="-1">\u51FD\u6570\u8C03\u7528</h3><p>Notify \u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8C03\u7528\u540E\u4F1A\u76F4\u63A5\u5728\u9875\u9762\u4E2D\u5F39\u51FA\u76F8\u5E94\u7684\u6D88\u606F\u63D0\u793A\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Notify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title class_">Notify</span>(<span class="hljs-string">&#39;\u901A\u77E5\u5185\u5BB9&#39;</span>);
</code></pre><h4 id="shou-dong-yin-ru-yang-shi" tabindex="-1">\u624B\u52A8\u5F15\u5165\u6837\u5F0F</h4><p>Notify \u7EC4\u4EF6\u662F\u4EE5\u51FD\u6570\u5F62\u5F0F\u63D0\u4F9B\u7684\uFF0C\u5982\u679C\u9879\u76EE\u4E2D\u4F7F\u7528 <code>unplugin-vue-components</code> \u63D2\u4EF6\u6765\u81EA\u52A8\u5F15\u5165\u7EC4\u4EF6\u6837\u5F0F\uFF0C\u5219\u65E0\u6CD5\u6B63\u786E\u8BC6\u522B Notify \u7EC4\u4EF6\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u5F15\u5165 Notify \u7EC4\u4EF6\u7684\u6837\u5F0F\uFF1A</p><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/es/notify/style&#39;</span>;
</code></pre><p>\u4F60\u53EF\u4EE5\u5728\u9879\u76EE\u7684\u5165\u53E3\u6587\u4EF6\u6216\u516C\u5171\u6A21\u5757\u4E2D\u5F15\u5165 Notify \u7EC4\u4EF6\u7684\u6837\u5F0F\uFF0C\u8FD9\u6837\u5728\u4E1A\u52A1\u4EE3\u7801\u4E2D\u4F7F\u7528 Notify \u65F6\uFF0C\u4FBF\u4E0D\u518D\u9700\u8981\u91CD\u590D\u5F15\u5165\u6837\u5F0F\u4E86\u3002</p></div><div class="van-doc-card"><h3 id="zu-jian-diao-yong" tabindex="-1">\u7EC4\u4EF6\u8C03\u7528</h3><p>\u901A\u8FC7\u7EC4\u4EF6\u8C03\u7528 Notify \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F\u8FDB\u884C\u6CE8\u518C\uFF1A</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Notify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-comment">// \u5168\u5C40\u6CE8\u518C</span>
<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Notify</span>);

<span class="hljs-comment">// \u5C40\u90E8\u6CE8\u518C</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [<span class="hljs-title class_">Notify</span>.<span class="hljs-property">Component</span>.<span class="hljs-property">name</span>]: <span class="hljs-title class_">Notify</span>.<span class="hljs-property">Component</span>,
  },
};
</code></pre><p>\u5728 <code>script setup</code> \u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u4F7F\u7528\uFF1A</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">const</span> <span class="hljs-title class_">VanNotify</span> = <span class="hljs-title class_">Notify</span>.<span class="hljs-property">Component</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- \u4E2D\u5212\u7EBF\u547D\u540D --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-notify</span> /&gt;</span>
  <span class="hljs-comment">&lt;!-- \u4E5F\u652F\u6301\u5927\u9A7C\u5CF0\u547D\u540D --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">VanNotify</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-js"><span class="hljs-title class_">Notify</span>(<span class="hljs-string">&#39;\u901A\u77E5\u5185\u5BB9&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="tong-zhi-lei-xing" tabindex="-1">\u901A\u77E5\u7C7B\u578B</h3><p>\u652F\u6301 <code>primary</code>\u3001<code>success</code>\u3001<code>warning</code>\u3001<code>danger</code> \u56DB\u79CD\u901A\u77E5\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A <code>danger</code>\u3002</p><pre><code class="language-js"><span class="hljs-comment">// \u4E3B\u8981\u901A\u77E5</span>
<span class="hljs-title class_">Notify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;primary&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u901A\u77E5\u5185\u5BB9&#39;</span> });

<span class="hljs-comment">// \u6210\u529F\u901A\u77E5</span>
<span class="hljs-title class_">Notify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;success&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u901A\u77E5\u5185\u5BB9&#39;</span> });

<span class="hljs-comment">// \u5371\u9669\u901A\u77E5</span>
<span class="hljs-title class_">Notify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;danger&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u901A\u77E5\u5185\u5BB9&#39;</span> });

<span class="hljs-comment">// \u8B66\u544A\u901A\u77E5</span>
<span class="hljs-title class_">Notify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;warning&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u901A\u77E5\u5185\u5BB9&#39;</span> });
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tong-zhi" tabindex="-1">\u81EA\u5B9A\u4E49\u901A\u77E5</h3><p>\u81EA\u5B9A\u4E49\u6D88\u606F\u901A\u77E5\u7684\u989C\u8272\u3001\u4F4D\u7F6E\u548C\u5C55\u793A\u65F6\u957F\u3002</p><pre><code class="language-js"><span class="hljs-title class_">Notify</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u81EA\u5B9A\u4E49\u989C\u8272&#39;</span>,
  <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#ad0000&#39;</span>,
  <span class="hljs-attr">background</span>: <span class="hljs-string">&#39;#ffe1e1&#39;</span>,
});

<span class="hljs-title class_">Notify</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u81EA\u5B9A\u4E49\u4F4D\u7F6E&#39;</span>,
  <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;bottom&#39;</span>,
});

<span class="hljs-title class_">Notify</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u81EA\u5B9A\u4E49\u65F6\u957F&#39;</span>,
  <span class="hljs-attr">duration</span>: <span class="hljs-number">1000</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="quan-ju-fang-fa" tabindex="-1">\u5168\u5C40\u65B9\u6CD5</h3><p>\u901A\u8FC7 <code>app.use</code> \u5168\u5C40\u6CE8\u518C Notify \u7EC4\u4EF6\u540E\uFF0C\u4F1A\u81EA\u52A8\u5728 app \u7684\u6240\u6709\u5B50\u7EC4\u4EF6\u4E0A\u6302\u8F7D <code>$notify</code> \u65B9\u6CD5\uFF0C\u4FBF\u4E8E\u5728\u7EC4\u4EF6\u5185\u8C03\u7528\u3002</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {
    <span class="hljs-variable language_">this</span>.$notify(<span class="hljs-string">&#39;\u63D0\u793A\u6587\u6848&#39;</span>);
  },
};
</code></pre><blockquote><p>Tips: \u7531\u4E8E setup \u9009\u9879\u4E2D\u65E0\u6CD5\u8BBF\u95EE this\uFF0C\u56E0\u6B64\u4E0D\u80FD\u4F7F\u7528\u4E0A\u8FF0\u65B9\u5F0F\uFF0C\u8BF7\u901A\u8FC7 import \u5F15\u5165\u3002</p></blockquote></div><div class="van-doc-card"><h3 id="zu-jian-diao-yong-1" tabindex="-1">\u7EC4\u4EF6\u8C03\u7528</h3><p>\u5982\u679C\u9700\u8981\u5728 Notify \u5185\u5D4C\u5165\u7EC4\u4EF6\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7EC4\u4EF6\u8C03\u7528\u7684\u65B9\u5F0F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u7EC4\u4EF6\u8C03\u7528&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showNotify&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-notify</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;bell&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-right: 4px;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u901A\u77E5\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-notify</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">showNotify</span> = (<span class="hljs-params"></span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      }, <span class="hljs-number">2000</span>);
    };

    <span class="hljs-keyword">return</span> {
      show,
      showNotify,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>Notify</td><td>\u5C55\u793A\u63D0\u793A</td><td><code>options | message</code></td><td>notify \u5B9E\u4F8B</td></tr><tr><td>Notify.clear</td><td>\u5173\u95ED\u63D0\u793A</td><td>-</td><td><code>void</code></td></tr><tr><td>Notify.setDefaultOptions</td><td>\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5BF9\u6240\u6709 Notify \u751F\u6548</td><td><code>options</code></td><td><code>void</code></td></tr><tr><td>Notify.resetDefaultOptions</td><td>\u91CD\u7F6E\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5BF9\u6240\u6709 Notify \u751F\u6548</td><td>-</td><td><code>void</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>primary</code> <code>success</code> <code>warning</code></td><td><em>NotifyType</em></td><td><code>danger</code></td></tr><tr><td>message</td><td>\u5C55\u793A\u6587\u6848\uFF0C\u652F\u6301\u901A\u8FC7<code>\\n</code>\u6362\u884C</td><td><em>string</em></td><td>-</td></tr><tr><td>duration</td><td>\u5C55\u793A\u65F6\u957F(ms)\uFF0C\u503C\u4E3A 0 \u65F6\uFF0Cnotify \u4E0D\u4F1A\u6D88\u5931</td><td><em>number | string</em></td><td><code>3000</code></td></tr><tr><td>position <code>v3.4.0</code></td><td>\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>bottom</code></td><td><em>NotifyPosition</em></td><td><code>top</code></td></tr><tr><td>color</td><td>\u5B57\u4F53\u989C\u8272</td><td><em>string</em></td><td><code>white</code></td></tr><tr><td>background</td><td>\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td>-</td></tr><tr><td>className</td><td>\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>lockScroll <code>v3.0.7</code></td><td>\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>onClick</td><td>\u70B9\u51FB\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td><em>(event: MouseEvent): void</em></td><td>-</td></tr><tr><td>onOpened</td><td>\u5B8C\u5168\u5C55\u793A\u540E\u7684\u56DE\u8C03\u51FD\u6570</td><td><em>() =&gt; void</em></td><td>-</td></tr><tr><td>onClose</td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td><em>() =&gt; void</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">NotifyType</span>,
  <span class="hljs-title class_">NotifyProps</span>,
  <span class="hljs-title class_">NotifyOptions</span>,
  <span class="hljs-title class_">NotifyPosition</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-notify-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-notify-padding</td><td><em>var(--van-padding-xs) var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-notify-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-notify-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-notify-primary-background-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-notify-success-background-color</td><td><em>var(--van-success-color)</em></td><td>-</td></tr><tr><td>--van-notify-danger-background-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-notify-warning-background-color</td><td><em>var(--van-warning-color)</em></td><td>-</td></tr></tbody></table></div>`,16),d=[p],h={__name:"README.zh-CN",setup(e,{expose:s}){return s({frontmatter:{}}),(o,r)=>(a(),t("div",l,d))}};export{h as default};
