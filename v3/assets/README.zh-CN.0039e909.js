import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=t(`<h1>Uploader \u6587\u4EF6\u4E0A\u4F20</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5C06\u672C\u5730\u7684\u56FE\u7247\u6216\u6587\u4EF6\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\uFF0C\u5E76\u5728\u4E0A\u4F20\u8FC7\u7A0B\u4E2D\u5C55\u793A\u9884\u89C8\u56FE\u548C\u4E0A\u4F20\u8FDB\u5EA6\u3002\u76EE\u524D Uploader \u7EC4\u4EF6\u4E0D\u5305\u542B\u5C06\u6587\u4EF6\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\u7684\u63A5\u53E3\u903B\u8F91\uFF0C\u8BE5\u6B65\u9AA4\u9700\u8981\u81EA\u884C\u5B9E\u73B0\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Uploader</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Uploader</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u6587\u4EF6\u4E0A\u4F20\u5B8C\u6BD5\u540E\u4F1A\u89E6\u53D1 <code>after-read</code> \u56DE\u8C03\u51FD\u6570\uFF0C\u83B7\u53D6\u5230\u5BF9\u5E94\u7684 <code>file</code> \u5BF9\u8C61\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">:after-read</span>=<span class="hljs-string">&quot;afterRead&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">afterRead</span> = (<span class="hljs-params">file</span>) =&gt; {
      <span class="hljs-comment">// \u6B64\u65F6\u53EF\u4EE5\u81EA\u884C\u5C06\u6587\u4EF6\u4E0A\u4F20\u81F3\u670D\u52A1\u5668</span>
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(file);
    };

    <span class="hljs-keyword">return</span> {
      afterRead,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="wen-jian-yu-lan" tabindex="-1">\u6587\u4EF6\u9884\u89C8</h3><p>\u901A\u8FC7 <code>v-model</code> \u53EF\u4EE5\u7ED1\u5B9A\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF0C\u5E76\u5C55\u793A\u6587\u4EF6\u5217\u8868\u7684\u9884\u89C8\u56FE\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">multiple</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([
      { <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg&#39;</span> },
      <span class="hljs-comment">// Uploader \u6839\u636E\u6587\u4EF6\u540E\u7F00\u6765\u5224\u65AD\u662F\u5426\u4E3A\u56FE\u7247\u6587\u4EF6</span>
      <span class="hljs-comment">// \u5982\u679C\u56FE\u7247 URL \u4E2D\u4E0D\u5305\u542B\u7C7B\u578B\u4FE1\u606F\uFF0C\u53EF\u4EE5\u6DFB\u52A0 isImage \u6807\u8BB0\u6765\u58F0\u660E</span>
      { <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://cloud-image&#39;</span>, <span class="hljs-attr">isImage</span>: <span class="hljs-literal">true</span> },
    ]);

    <span class="hljs-keyword">return</span> {
      fileList,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shang-chuan-zhuang-tai" tabindex="-1">\u4E0A\u4F20\u72B6\u6001</h3><p>\u901A\u8FC7 <code>status</code> \u5C5E\u6027\u53EF\u4EE5\u6807\u8BC6\u4E0A\u4F20\u72B6\u6001\uFF0C<code>uploading</code> \u8868\u793A\u4E0A\u4F20\u4E2D\uFF0C<code>failed</code> \u8868\u793A\u4E0A\u4F20\u5931\u8D25\uFF0C<code>done</code> \u8868\u793A\u4E0A\u4F20\u5B8C\u6210\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">:after-read</span>=<span class="hljs-string">&quot;afterRead&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg&#39;</span>,
        <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;uploading&#39;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u4E0A\u4F20\u4E2D...&#39;</span>,
      },
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg&#39;</span>,
        <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;failed&#39;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u4E0A\u4F20\u5931\u8D25&#39;</span>,
      },
    ]);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">afterRead</span> = (<span class="hljs-params">file</span>) =&gt; {
      file.<span class="hljs-property">status</span> = <span class="hljs-string">&#39;uploading&#39;</span>;
      file.<span class="hljs-property">message</span> = <span class="hljs-string">&#39;\u4E0A\u4F20\u4E2D...&#39;</span>;

      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        file.<span class="hljs-property">status</span> = <span class="hljs-string">&#39;failed&#39;</span>;
        file.<span class="hljs-property">message</span> = <span class="hljs-string">&#39;\u4E0A\u4F20\u5931\u8D25&#39;</span>;
      }, <span class="hljs-number">1000</span>);
    };

    <span class="hljs-keyword">return</span> {
      fileList,
      afterRead,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xian-zhi-shang-chuan-shu-liang" tabindex="-1">\u9650\u5236\u4E0A\u4F20\u6570\u91CF</h3><p>\u901A\u8FC7 <code>max-count</code> \u5C5E\u6027\u53EF\u4EE5\u9650\u5236\u4E0A\u4F20\u6587\u4EF6\u7684\u6570\u91CF\uFF0C\u4E0A\u4F20\u6570\u91CF\u8FBE\u5230\u9650\u5236\u540E\uFF0C\u4F1A\u81EA\u52A8\u9690\u85CF\u4E0A\u4F20\u533A\u57DF\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:max-count</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([]);

    <span class="hljs-keyword">return</span> {
      fileList,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xian-zhi-shang-chuan-da-xiao" tabindex="-1">\u9650\u5236\u4E0A\u4F20\u5927\u5C0F</h3><p>\u901A\u8FC7 <code>max-size</code> \u5C5E\u6027\u53EF\u4EE5\u9650\u5236\u4E0A\u4F20\u6587\u4EF6\u7684\u5927\u5C0F\uFF0C\u8D85\u8FC7\u5927\u5C0F\u7684\u6587\u4EF6\u4F1A\u88AB\u81EA\u52A8\u8FC7\u6EE4\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u4FE1\u606F\u53EF\u4EE5\u901A\u8FC7 <code>oversize</code> \u4E8B\u4EF6\u83B7\u53D6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:max-size</span>=<span class="hljs-string">&quot;500 * 1024&quot;</span> @<span class="hljs-attr">oversize</span>=<span class="hljs-string">&quot;onOversize&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onOversize</span> = (<span class="hljs-params">file</span>) =&gt; {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(file);
      <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 500kb&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      onOversize,
    };
  },
};
</code></pre><p>\u5982\u679C\u9700\u8981\u9488\u5BF9\u4E0D\u540C\u7C7B\u578B\u7684\u6587\u4EF6\u6765\u4F5C\u51FA\u4E0D\u540C\u7684\u5927\u5C0F\u9650\u5236\uFF0C\u53EF\u4EE5\u5728 <code>max-size</code> \u5C5E\u6027\u4E2D\u4F20\u5165\u4E00\u4E2A\u51FD\u6570\uFF0C\u5728\u51FD\u6570\u4E2D\u901A\u8FC7 <code>file.type</code> \u533A\u5206\u6587\u4EF6\u7C7B\u578B\uFF0C\u8FD4\u56DE <code>true</code> \u8868\u793A\u8D85\u51FA\u9650\u5236\uFF0C<code>false</code> \u8868\u793A\u672A\u8D85\u51FA\u9650\u5236\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:max-size</span>=<span class="hljs-string">&quot;isOverSize&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">isOverSize</span> = (<span class="hljs-params">file</span>) =&gt; {
      <span class="hljs-keyword">const</span> maxSize = file.<span class="hljs-property">type</span> === <span class="hljs-string">&#39;image/jpeg&#39;</span> ? <span class="hljs-number">500</span> * <span class="hljs-number">1024</span> : <span class="hljs-number">1000</span> * <span class="hljs-number">1024</span>;
      <span class="hljs-keyword">return</span> file.<span class="hljs-property">size</span> &gt;= maxSize;
    };
    <span class="hljs-keyword">return</span> {
      isOverSize,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-shang-chuan-yang-shi" tabindex="-1">\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F</h3><p>\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E0A\u4F20\u533A\u57DF\u7684\u6837\u5F0F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;plus&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u4E0A\u4F20\u6587\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-uploader</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yu-lan-yang-shi" tabindex="-1">\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F</h3><p>\u901A\u8FC7 <code>preview-cover</code> \u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8986\u76D6\u5728\u9884\u89C8\u533A\u57DF\u4E0A\u65B9\u7684\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">preview-cover</span>=<span class="hljs-string">&quot;{ file }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;preview-cover van-ellipsis&quot;</span>&gt;</span>{{ file.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-uploader</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.preview-cover</span> {
    <span class="hljs-attribute">position</span>: absolute;
    <span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">box-sizing</span>: border-box;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">4px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.3</span>);
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yu-lan-da-xiao" tabindex="-1">\u81EA\u5B9A\u4E49\u9884\u89C8\u5927\u5C0F</h3><p>\u901A\u8FC7 <code>preview-size</code> \u5C5E\u6027\u5B9A\u4E49\u9884\u89C8\u56FE\u548C\u4E0A\u4F20\u533A\u57DF\u7684\u5927\u5C0F\u3002</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u4E0D\u6307\u5B9A\u5355\u4F4D\uFF0C\u9ED8\u8BA4\u4E3A px --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">preview-size</span>=<span class="hljs-string">&quot;60&quot;</span> /&gt;</span>
<span class="hljs-comment">&lt;!-- \u6307\u5B9A\u5355\u4F4D\uFF0C\u652F\u6301 rem, vh, vw --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">preview-size</span>=<span class="hljs-string">&quot;5rem&quot;</span> /&gt;</span>
</code></pre><p>\u5C06 <code>preview-size</code> \u8BBE\u7F6E\u4E3A\u6570\u7EC4\u683C\u5F0F\uFF0C\u53EF\u4EE5\u5206\u522B\u8BBE\u7F6E\u5BBD\u9AD8\u3002\u6570\u7EC4\u7B2C\u4E00\u9879\u5BF9\u5E94\u5BBD\u5EA6\uFF0C\u6570\u7EC4\u7B2C\u4E8C\u9879\u5BF9\u5E94\u9AD8\u5EA6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">:preview-size</span>=<span class="hljs-string">&quot;[60, 40]&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="shang-chuan-qian-zhi-chu-li" tabindex="-1">\u4E0A\u4F20\u524D\u7F6E\u5904\u7406</h3><p>\u901A\u8FC7\u4F20\u5165 <code>beforeRead</code> \u51FD\u6570\u53EF\u4EE5\u5728\u4E0A\u4F20\u524D\u8FDB\u884C\u6821\u9A8C\u548C\u5904\u7406\uFF0C\u8FD4\u56DE <code>true</code> \u8868\u793A\u6821\u9A8C\u901A\u8FC7\uFF0C\u8FD4\u56DE <code>false</code> \u8868\u793A\u6821\u9A8C\u5931\u8D25\u3002\u652F\u6301\u8FD4\u56DE <code>Promise</code> \u5BF9 file \u5BF9\u8C61\u8FDB\u884C\u81EA\u5B9A\u4E49\u5904\u7406\uFF0C\u4F8B\u5982\u538B\u7F29\u56FE\u7247\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">:before-read</span>=<span class="hljs-string">&quot;beforeRead&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// \u8FD4\u56DE\u5E03\u5C14\u503C</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeRead</span> = (<span class="hljs-params">file</span>) =&gt; {
      <span class="hljs-keyword">if</span> (file.<span class="hljs-property">type</span> !== <span class="hljs-string">&#39;image/jpeg&#39;</span>) {
        <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u8BF7\u4E0A\u4F20 jpg \u683C\u5F0F\u56FE\u7247&#39;</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
      }
      <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    };

    <span class="hljs-comment">// \u8FD4\u56DE Promise</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">asyncBeforeRead</span> = (<span class="hljs-params">file</span>) =&gt;
      <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
        <span class="hljs-keyword">if</span> (file.<span class="hljs-property">type</span> !== <span class="hljs-string">&#39;image/jpeg&#39;</span>) {
          <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u8BF7\u4E0A\u4F20 jpg \u683C\u5F0F\u56FE\u7247&#39;</span>);
          <span class="hljs-title function_">reject</span>();
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-keyword">const</span> img = <span class="hljs-keyword">new</span> <span class="hljs-title class_">File</span>([<span class="hljs-string">&#39;foo&#39;</span>], <span class="hljs-string">&#39;bar.jpg&#39;</span>, {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;image/jpeg&#39;</span>,
          });
          <span class="hljs-title function_">resolve</span>(img);
        }
      });

    <span class="hljs-keyword">return</span> {
      beforeRead,
      asyncBeforeRead,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-wen-jian-shang-chuan" tabindex="-1">\u7981\u7528\u6587\u4EF6\u4E0A\u4F20</h3><p>\u901A\u8FC7 <code>disabled</code> \u5C5E\u6027\u7981\u7528\u6587\u4EF6\u4E0A\u4F20\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-dan-ge-tu-pian-yu-lan" tabindex="-1">\u81EA\u5B9A\u4E49\u5355\u4E2A\u56FE\u7247\u9884\u89C8</h3><p>\u5728 <code>v-model</code> \u6570\u7EC4\u4E2D\u8BBE\u7F6E\u5355\u4E2A\u9884\u89C8\u56FE\u7247\u5C5E\u6027\uFF0C\u652F\u6301 <code>imageFit</code> <code>deletable</code> <code>previewSize</code> <code>beforeDelete</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">:deletable</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/sand.jpeg&#39;</span>,
        <span class="hljs-attr">deletable</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">beforeDelete</span>: <span class="hljs-function">() =&gt;</span> {
          <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u5220\u9664\u524D\u7F6E\u5904\u7406&#39;</span>);
        },
      },
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg&#39;</span>,
        <span class="hljs-attr">imageFit</span>: <span class="hljs-string">&#39;contain&#39;</span>,
      },
    ]);

    <span class="hljs-keyword">return</span> { fileList };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868</td><td><em>FileListItem[]</em></td><td>-</td></tr><tr><td>accept</td><td>\u5141\u8BB8\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B" target="_blank">\u8BE6\u7EC6\u8BF4\u660E</a></td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td>name</td><td>\u6807\u8BC6\u7B26\uFF0C\u901A\u5E38\u4E3A\u4E00\u4E2A\u552F\u4E00\u7684\u5B57\u7B26\u4E32\u6216\u6570\u5B57\uFF0C\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u7684\u7B2C\u4E8C\u9879\u53C2\u6570\u4E2D\u83B7\u53D6</td><td><em>number | string</em></td><td>-</td></tr><tr><td>preview-size</td><td>\u9884\u89C8\u56FE\u548C\u4E0A\u4F20\u533A\u57DF\u7684\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string | Array</em></td><td><code>80px</code></td></tr><tr><td>preview-image</td><td>\u662F\u5426\u5728\u4E0A\u4F20\u5B8C\u6210\u540E\u5C55\u793A\u9884\u89C8\u56FE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>preview-full-image</td><td>\u662F\u5426\u5728\u70B9\u51FB\u9884\u89C8\u56FE\u540E\u5C55\u793A\u5168\u5C4F\u56FE\u7247\u9884\u89C8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>preview-options</td><td>\u5168\u5C4F\u56FE\u7247\u9884\u89C8\u7684\u914D\u7F6E\u9879\uFF0C\u53EF\u9009\u503C\u89C1 <a href="#/zh-CN/image-preview" target="_blank">ImagePreview</a></td><td><em>object</em></td><td>-</td></tr><tr><td>multiple</td><td>\u662F\u5426\u5F00\u542F\u56FE\u7247\u591A\u9009\uFF0C\u90E8\u5206\u5B89\u5353\u673A\u578B\u4E0D\u652F\u6301</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u6587\u4EF6\u4E0A\u4F20</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly <code>v3.1.5</code></td><td>\u662F\u5426\u5C06\u4E0A\u4F20\u533A\u57DF\u8BBE\u7F6E\u4E3A\u53EA\u8BFB\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>deletable</td><td>\u662F\u5426\u5C55\u793A\u5220\u9664\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-upload</td><td>\u662F\u5426\u5C55\u793A\u4E0A\u4F20\u533A\u57DF</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lazy-load</td><td>\u662F\u5426\u5F00\u542F\u56FE\u7247\u61D2\u52A0\u8F7D\uFF0C\u987B\u914D\u5408 <a href="#/zh-CN/lazyload" target="_blank">Lazyload</a> \u7EC4\u4EF6\u4F7F\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>capture</td><td>\u56FE\u7247\u9009\u53D6\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>camera</code> (\u76F4\u63A5\u8C03\u8D77\u6444\u50CF\u5934)</td><td><em>string</em></td><td>-</td></tr><tr><td>after-read</td><td>\u6587\u4EF6\u8BFB\u53D6\u5B8C\u6210\u540E\u7684\u56DE\u8C03\u51FD\u6570</td><td><em>Function</em></td><td>-</td></tr><tr><td>before-read</td><td>\u6587\u4EF6\u8BFB\u53D6\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE <code>false</code> \u53EF\u7EC8\u6B62\u6587\u4EF6\u8BFB\u53D6\uFF0C<br>\u652F\u6301\u8FD4\u56DE <code>Promise</code></td><td><em>Function</em></td><td>-</td></tr><tr><td>before-delete</td><td>\u6587\u4EF6\u5220\u9664\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE <code>false</code> \u53EF\u7EC8\u6B62\u6587\u4EF6\u8BFB\u53D6\uFF0C<br>\u652F\u6301\u8FD4\u56DE <code>Promise</code></td><td><em>Function</em></td><td>-</td></tr><tr><td>max-size <code>v3.0.17</code></td><td>\u6587\u4EF6\u5927\u5C0F\u9650\u5236\uFF0C\u5355\u4F4D\u4E3A <code>byte</code></td><td><em>number | string | (file: File) =&gt; boolean</em></td><td><code>Infinity</code></td></tr><tr><td>max-count</td><td>\u6587\u4EF6\u4E0A\u4F20\u6570\u91CF\u9650\u5236</td><td><em>number | string</em></td><td><code>Infinity</code></td></tr><tr><td>result-type</td><td>\u6587\u4EF6\u8BFB\u53D6\u7ED3\u679C\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>file</code> <code>text</code></td><td><em>string</em></td><td><code>dataUrl</code></td></tr><tr><td>upload-text</td><td>\u4E0A\u4F20\u533A\u57DF\u6587\u5B57\u63D0\u793A</td><td><em>string</em></td><td>-</td></tr><tr><td>image-fit</td><td>\u9884\u89C8\u56FE\u88C1\u526A\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u89C1 <a href="#/zh-CN/image" target="_blank">Image</a> \u7EC4\u4EF6</td><td><em>string</em></td><td><code>cover</code></td></tr><tr><td>upload-icon</td><td>\u4E0A\u4F20\u533A\u57DF\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td><td><em>string</em></td><td><code>photograph</code></td></tr></tbody></table><blockquote><p>\u6CE8\u610F\uFF1Aaccept\u3001capture \u548C multiple \u4E3A\u6D4F\u89C8\u5668 input \u6807\u7B7E\u7684\u539F\u751F\u5C5E\u6027\uFF0C\u79FB\u52A8\u7AEF\u5404\u79CD\u673A\u578B\u5BF9\u8FD9\u4E9B\u5C5E\u6027\u7684\u652F\u6301\u7A0B\u5EA6\u6709\u6240\u5DEE\u5F02\uFF0C\u56E0\u6B64\u5728\u4E0D\u540C\u673A\u578B\u548C WebView \u4E0B\u53EF\u80FD\u51FA\u73B0\u4E00\u4E9B\u517C\u5BB9\u6027\u95EE\u9898\u3002</p></blockquote></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>oversize</td><td>\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7\u9650\u5236\u65F6\u89E6\u53D1</td><td>\u540C <code>after-read</code></td></tr><tr><td>click-upload <code>v3.1.5</code></td><td>\u70B9\u51FB\u4E0A\u4F20\u533A\u57DF\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-preview</td><td>\u70B9\u51FB\u9884\u89C8\u56FE\u65F6\u89E6\u53D1</td><td>\u540C <code>after-read</code></td></tr><tr><td>close-preview</td><td>\u5173\u95ED\u5168\u5C4F\u56FE\u7247\u9884\u89C8\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>delete</td><td>\u5220\u9664\u6587\u4EF6\u9884\u89C8\u65F6\u89E6\u53D1</td><td>\u540C <code>after-read</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u4E0A\u4F20\u533A\u57DF</td><td>-</td></tr><tr><td>preview-delete <code>v3.5.0</code></td><td>\u81EA\u5B9A\u4E49\u5220\u9664\u6309\u94AE</td><td>-</td></tr><tr><td>preview-cover</td><td>\u81EA\u5B9A\u4E49\u8986\u76D6\u5728\u9884\u89C8\u533A\u57DF\u4E0A\u65B9\u7684\u5185\u5BB9</td><td><em>item: FileListItem</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="hui-diao-can-shu" tabindex="-1">\u56DE\u8C03\u53C2\u6570</h3><p>before-read\u3001after-read\u3001before-delete \u6267\u884C\u65F6\u4F1A\u4F20\u9012\u4EE5\u4E0B\u56DE\u8C03\u53C2\u6570\uFF1A</p><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>file</td><td>file \u5BF9\u8C61</td><td><em>object</em></td></tr><tr><td>detail</td><td>\u989D\u5916\u4FE1\u606F\uFF0C\u5305\u542B name \u548C index \u5B57\u6BB5</td><td><em>object</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="resulttype-ke-xuan-zhi" tabindex="-1">ResultType \u53EF\u9009\u503C</h3><p><code>result-type</code> \u5B57\u6BB5\u8868\u793A\u6587\u4EF6\u8BFB\u53D6\u7ED3\u679C\u7684\u7C7B\u578B\uFF0C\u4E0A\u4F20\u5927\u6587\u4EF6\u65F6\uFF0C\u5EFA\u8BAE\u4F7F\u7528 file \u7C7B\u578B\uFF0C\u907F\u514D\u5361\u987F\u3002</p><table><thead><tr><th>\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>file</td><td>\u7ED3\u679C\u4EC5\u5305\u542B File \u5BF9\u8C61</td></tr><tr><td>text</td><td>\u7ED3\u679C\u5305\u542B File \u5BF9\u8C61\uFF0C\u4EE5\u53CA\u6587\u4EF6\u7684\u6587\u672C\u5185\u5BB9</td></tr><tr><td>dataUrl</td><td>\u7ED3\u679C\u5305\u542B File \u5BF9\u8C61\uFF0C\u4EE5\u53CA\u6587\u4EF6\u5BF9\u5E94\u7684 base64 \u7F16\u7801</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Uploader \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>closeImagePreview</td><td>\u5173\u95ED\u5168\u5C4F\u7684\u56FE\u7247\u9884\u89C8</td><td>-</td><td>-</td></tr><tr><td>chooseFile</td><td>\u4E3B\u52A8\u8C03\u8D77\u6587\u4EF6\u9009\u62E9\uFF0C\u7531\u4E8E\u6D4F\u89C8\u5668\u5B89\u5168\u9650\u5236\uFF0C\u53EA\u6709\u5728\u7528\u6237\u89E6\u53D1\u64CD\u4F5C\u7684\u4E0A\u4E0B\u6587\u4E2D\u8C03\u7528\u624D\u6709\u6548</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">UploaderProps</span>,
  <span class="hljs-title class_">UploaderInstance</span>,
  <span class="hljs-title class_">UploaderResultType</span>,
  <span class="hljs-title class_">UploaderFileListItem</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>UploaderInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">UploaderInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> uploaderRef = ref&lt;<span class="hljs-title class_">UploaderInstance</span>&gt;();

uploaderRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">chooseFile</span>();
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-uploader-size</td><td><em>80px</em></td><td>-</td></tr><tr><td>--van-uploader-icon-size</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-uploader-icon-color</td><td><em>var(--van-gray-4)</em></td><td>-</td></tr><tr><td>--van-uploader-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-uploader-text-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-uploader-upload-background-color</td><td><em>var(--van-gray-1)</em></td><td>-</td></tr><tr><td>--van-uploader-upload-active-color</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-uploader-delete-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-uploader-delete-icon-size</td><td><em>14px</em></td><td>-</td></tr><tr><td>--van-uploader-delete-background-color</td><td><em>rgba(0, 0, 0, 0.7)</em></td><td>-</td></tr><tr><td>--van-uploader-file-background-color</td><td><em>var(--van-background-color)</em></td><td>-</td></tr><tr><td>--van-uploader-file-icon-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-uploader-file-icon-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-uploader-file-name-padding</td><td><em>0 var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-uploader-file-name-margin-top</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-uploader-file-name-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-uploader-file-name-text-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-uploader-mask-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-uploader-mask-background-color</td><td><em>fade(var(--van-gray-8), 88%)</em></td><td>-</td></tr><tr><td>--van-uploader-mask-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-uploader-mask-message-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-uploader-mask-message-line-height</td><td><em>var(--van-line-height-xs)</em></td><td>-</td></tr><tr><td>--van-uploader-loading-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-uploader-loading-icon-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-uploader-disabled-opacity</td><td><em>var(--van-disabled-opacity)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="uploader-zai-bu-fen-an-zhuo-ji-xing-shang-wu-fa-shang-chuan-tu-pian" tabindex="-1">Uploader \u5728\u90E8\u5206\u5B89\u5353\u673A\u578B\u4E0A\u65E0\u6CD5\u4E0A\u4F20\u56FE\u7247\uFF1F</h3><p>Uploader \u91C7\u7528\u4E86 HTML \u539F\u751F\u7684 <code>&lt;input type=&quot;file /&gt;</code> \u6807\u7B7E\u8FDB\u884C\u4E0A\u4F20\uFF0C\u80FD\u5426\u4E0A\u4F20\u53D6\u51B3\u4E8E\u5F53\u524D\u7CFB\u7EDF\u548C\u6D4F\u89C8\u5668\u7684\u517C\u5BB9\u6027\u3002\u5F53\u9047\u5230\u65E0\u6CD5\u4E0A\u4F20\u7684\u95EE\u9898\u65F6\uFF0C\u4E00\u822C\u6709\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\uFF1A</p><ol><li>\u9047\u5230\u4E86\u5B89\u5353 App WebView \u7684\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u9700\u8981\u5728\u5B89\u5353\u539F\u751F\u4EE3\u7801\u4E2D\u8FDB\u884C\u517C\u5BB9\uFF0C\u53EF\u4EE5\u53C2\u8003\u6B64<a href="https://blog.csdn.net/qq_32756581/article/details/112861088" target="_blank">\u6587\u7AE0</a>\u3002</li><li>\u56FE\u7247\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u5728\u5F53\u524D\u7CFB\u7EDF/\u6D4F\u89C8\u5668\u4E2D\u65E0\u6CD5\u8BC6\u522B\uFF0C\u6BD4\u5982 <code>webp</code> \u6216 <code>heic</code> \u683C\u5F0F\u3002</li><li>\u5176\u4ED6\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\u3002</li></ol></div><div class="van-doc-card"><h3 id="pai-zhao-shang-chuan-de-tu-pian-bei-xuan-zhuan-90-du" tabindex="-1">\u62CD\u7167\u4E0A\u4F20\u7684\u56FE\u7247\u88AB\u65CB\u8F6C 90 \u5EA6\uFF1F</h3><p>\u90E8\u5206\u624B\u673A\u5728\u62CD\u7167\u4E0A\u4F20\u65F6\u4F1A\u51FA\u73B0\u56FE\u7247\u88AB\u65CB\u8F6C 90 \u5EA6\u7684\u95EE\u9898\uFF0C\u8FD9\u4E2A\u95EE\u9898\u53EF\u4EE5\u901A\u8FC7 <a href="https://github.com/fengyuanchen/compressorjs" target="_blank">compressorjs</a> \u6216\u5176\u4ED6\u5F00\u6E90\u5E93\u8FDB\u884C\u5904\u7406\u3002</p><p>compressorjs \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u56FE\u7247\u5904\u7406\u5E93\uFF0C\u63D0\u4F9B\u4E86\u56FE\u7247\u538B\u7F29\u3001\u56FE\u7247\u65CB\u8F6C\u7B49\u80FD\u529B\u3002</p><h4 id="shi-li" tabindex="-1">\u793A\u4F8B</h4><p>\u4F7F\u7528 compressorjs \u8FDB\u884C\u5904\u7406\u7684\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B:</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">:before-read</span>=<span class="hljs-string">&quot;beforeRead&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Compressor</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;compressorjs&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeRead</span> = (<span class="hljs-params">file</span>) =&gt;
      <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
        <span class="hljs-comment">// compressorjs \u9ED8\u8BA4\u5F00\u542F checkOrientation \u9009\u9879</span>
        <span class="hljs-comment">// \u4F1A\u5C06\u56FE\u7247\u4FEE\u6B63\u4E3A\u6B63\u786E\u65B9\u5411</span>
        <span class="hljs-keyword">new</span> <span class="hljs-title class_">Compressor</span>(file, {
          <span class="hljs-attr">success</span>: resolve,
          <span class="hljs-title function_">error</span>(<span class="hljs-params">err</span>) {
            <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(err.<span class="hljs-property">message</span>);
          },
        });
      });

    <span class="hljs-keyword">return</span> {
      beforeRead,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shang-chuan-tu-pian-shi-chu-xian-liu-lan-qi-shua-xin-huo-qia-dun-xian-xiang" tabindex="-1">\u4E0A\u4F20\u56FE\u7247\u65F6\u51FA\u73B0\u6D4F\u89C8\u5668\u5237\u65B0\u6216\u5361\u987F\u73B0\u8C61\uFF1F</h3><p>\u8FD9\u79CD\u73B0\u8C61\u4E00\u822C\u662F\u5185\u5B58\u4E0D\u8DB3\u5BFC\u81F4\u7684\uFF0C\u901A\u5E38\u53D1\u751F\u5728\u65E7\u673A\u578B\u4E0A\uFF1B\u4E0A\u4F20\u4E00\u5F20\u8F83\u5927\u7684\u56FE\u7247\u5F15\u8D77\u4E5F\u5F15\u8D77\u6B64\u73B0\u8C61\u3002</p><p>\u4E3A\u4E86\u51CF\u5C11\u8FD9\u79CD\u60C5\u51B5\u7684\u51FA\u73B0\uFF0C\u53EF\u4EE5\u5728\u4E0A\u4F20\u56FE\u7247\u524D\u5BF9\u56FE\u7247\u8FDB\u884C\u538B\u7F29\uFF0C\u538B\u7F29\u65B9\u6CD5\u8BF7\u53C2\u8003\u4E0A\u6587\u4E2D\u63D0\u5230\u7684 <code>compressorjs</code> \u5E93\u3002</p></div><div class="van-doc-card"><h3 id="shang-chuan-heic-heif-ge-shi-de-tu-pian-hou-wu-fa-zhan-shi" tabindex="-1">\u4E0A\u4F20 HEIC/HEIF \u683C\u5F0F\u7684\u56FE\u7247\u540E\u65E0\u6CD5\u5C55\u793A\uFF1F</h3><p>\u76EE\u524D Chrome\u3001Safari \u7B49\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5C55\u793A HEIC/HEIF \u683C\u5F0F\u7684\u56FE\u7247\uFF0C\u56E0\u6B64\u4E0A\u4F20\u540E\u65E0\u6CD5\u5728 Uploader \u7EC4\u4EF6\u4E2D\u8FDB\u884C\u9884\u89C8\u3002</p><p>[HEIF] \u683C\u5F0F\u7684\u517C\u5BB9\u6027\u8BF7\u53C2\u8003 <a href="https://caniuse.com/?search=heic" target="_blank">caniuse</a>\u3002</p></div>`,30),p=[l],h={__name:"README.zh-CN",setup(d,{expose:s}){return s({frontmatter:{}}),(c,o)=>(a(),n("div",e,p))}};export{h as default};
