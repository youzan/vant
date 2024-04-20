import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=t(`<h1>List \u5217\u8868</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7011\u5E03\u6D41\u6EDA\u52A8\u52A0\u8F7D\uFF0C\u7528\u4E8E\u5C55\u793A\u957F\u5217\u8868\uFF0C\u5F53\u5217\u8868\u5373\u5C06\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\uFF0C\u4F1A\u89E6\u53D1\u4E8B\u4EF6\u5E76\u52A0\u8F7D\u66F4\u591A\u5217\u8868\u9879\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">List</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">List</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>List \u7EC4\u4EF6\u901A\u8FC7 <code>loading</code> \u548C <code>finished</code> \u4E24\u4E2A\u53D8\u91CF\u63A7\u5236\u52A0\u8F7D\u72B6\u6001\uFF0C\u5F53\u7EC4\u4EF6\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\uFF0C\u4F1A\u89E6\u53D1 <code>load</code> \u4E8B\u4EF6\u5E76\u5C06 <code>loading</code> \u8BBE\u7F6E\u6210 <code>true</code>\u3002\u6B64\u65F6\u53EF\u4EE5\u53D1\u8D77\u5F02\u6B65\u64CD\u4F5C\u5E76\u66F4\u65B0\u6570\u636E\uFF0C\u6570\u636E\u66F4\u65B0\u5B8C\u6BD5\u540E\uFF0C\u5C06 <code>loading</code> \u8BBE\u7F6E\u6210 <code>false</code> \u5373\u53EF\u3002\u82E5\u6570\u636E\u5DF2\u5168\u90E8\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u5219\u76F4\u63A5\u5C06 <code>finished</code> \u8BBE\u7F6E\u6210 <code>true</code> \u5373\u53EF\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-list</span>
  <span class="hljs-attr">v-model:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>
  <span class="hljs-attr">finished-text</span>=<span class="hljs-string">&quot;\u6CA1\u6709\u66F4\u591A\u4E86&quot;</span>
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-list</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> finished = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onLoad</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-comment">// \u5F02\u6B65\u66F4\u65B0\u6570\u636E</span>
      <span class="hljs-comment">// setTimeout \u4EC5\u505A\u793A\u4F8B\uFF0C\u771F\u5B9E\u573A\u666F\u4E2D\u4E00\u822C\u4E3A ajax \u8BF7\u6C42</span>
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
          list.<span class="hljs-property">value</span>.<span class="hljs-title function_">push</span>(list.<span class="hljs-property">value</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>);
        }

        <span class="hljs-comment">// \u52A0\u8F7D\u72B6\u6001\u7ED3\u675F</span>
        loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;

        <span class="hljs-comment">// \u6570\u636E\u5168\u90E8\u52A0\u8F7D\u5B8C\u6210</span>
        <span class="hljs-keyword">if</span> (list.<span class="hljs-property">value</span>.<span class="hljs-property">length</span> &gt;= <span class="hljs-number">40</span>) {
          finished.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
        }
      }, <span class="hljs-number">1000</span>);
    };

    <span class="hljs-keyword">return</span> {
      list,
      onLoad,
      loading,
      finished,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="cuo-wu-ti-shi" tabindex="-1">\u9519\u8BEF\u63D0\u793A</h3><p>\u82E5\u5217\u8868\u6570\u636E\u52A0\u8F7D\u5931\u8D25\uFF0C\u5C06 <code>error</code> \u8BBE\u7F6E\u6210 <code>true</code> \u5373\u53EF\u663E\u793A\u9519\u8BEF\u63D0\u793A\uFF0C\u7528\u6237\u70B9\u51FB\u9519\u8BEF\u63D0\u793A\u540E\u4F1A\u91CD\u65B0\u89E6\u53D1 load \u4E8B\u4EF6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-list</span>
  <span class="hljs-attr">v-model:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">v-model:error</span>=<span class="hljs-string">&quot;error&quot;</span>
  <span class="hljs-attr">error-text</span>=<span class="hljs-string">&quot;\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D&quot;</span>
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-list</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> error = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onLoad</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">fetchSomeThing</span>().<span class="hljs-title function_">catch</span>(<span class="hljs-function">() =&gt;</span> {
        error.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
      });
    };

    <span class="hljs-keyword">return</span> {
      list,
      error,
      onLoad,
      loading,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xia-la-shua-xin" tabindex="-1">\u4E0B\u62C9\u5237\u65B0</h3><p>List \u7EC4\u4EF6\u53EF\u4EE5\u4E0E <a href="#/zh-CN/pull-refresh" target="_blank">PullRefresh</a> \u7EC4\u4EF6\u7ED3\u5408\u4F7F\u7528\uFF0C\u5B9E\u73B0\u4E0B\u62C9\u5237\u65B0\u7684\u6548\u679C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;refreshing&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-list</span>
    <span class="hljs-attr">v-model:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
    <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>
    <span class="hljs-attr">finished-text</span>=<span class="hljs-string">&quot;\u6CA1\u6709\u66F4\u591A\u4E86&quot;</span>
    @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-list</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-pull-refresh</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> finished = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> refreshing = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onLoad</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">if</span> (refreshing.<span class="hljs-property">value</span>) {
          list.<span class="hljs-property">value</span> = [];
          refreshing.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
        }

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
          list.<span class="hljs-property">value</span>.<span class="hljs-title function_">push</span>(list.<span class="hljs-property">value</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>);
        }
        loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;

        <span class="hljs-keyword">if</span> (list.<span class="hljs-property">value</span>.<span class="hljs-property">length</span> &gt;= <span class="hljs-number">40</span>) {
          finished.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
        }
      }, <span class="hljs-number">1000</span>);
    };

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onRefresh</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-comment">// \u6E05\u7A7A\u5217\u8868\u6570\u636E</span>
      finished.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;

      <span class="hljs-comment">// \u91CD\u65B0\u52A0\u8F7D\u6570\u636E</span>
      <span class="hljs-comment">// \u5C06 loading \u8BBE\u7F6E\u4E3A true\uFF0C\u8868\u793A\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001</span>
      loading.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
      <span class="hljs-title function_">onLoad</span>();
    };

    <span class="hljs-keyword">return</span> {
      list,
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:loading</td><td>\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\uFF0C\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u4E0D\u89E6\u53D1 <code>load</code> \u4E8B\u4EF6</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>v-model:error</td><td>\u662F\u5426\u52A0\u8F7D\u5931\u8D25\uFF0C\u52A0\u8F7D\u5931\u8D25\u540E\u70B9\u51FB\u9519\u8BEF\u63D0\u793A\u53EF\u4EE5\u91CD\u65B0\u89E6\u53D1 <code>load</code> \u4E8B\u4EF6</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>finished</td><td>\u662F\u5426\u5DF2\u52A0\u8F7D\u5B8C\u6210\uFF0C\u52A0\u8F7D\u5B8C\u6210\u540E\u4E0D\u518D\u89E6\u53D1 <code>load</code> \u4E8B\u4EF6</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>offset</td><td>\u6EDA\u52A8\u6761\u4E0E\u5E95\u90E8\u8DDD\u79BB\u5C0F\u4E8E offset \u65F6\u89E6\u53D1 <code>load</code> \u4E8B\u4EF6</td><td><em>number | string</em></td><td><code>300</code></td></tr><tr><td>loading-text</td><td>\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u6587\u6848</td><td><em>string</em></td><td><code>\u52A0\u8F7D\u4E2D...</code></td></tr><tr><td>finished-text</td><td>\u52A0\u8F7D\u5B8C\u6210\u540E\u7684\u63D0\u793A\u6587\u6848</td><td><em>string</em></td><td>-</td></tr><tr><td>error-text</td><td>\u52A0\u8F7D\u5931\u8D25\u540E\u7684\u63D0\u793A\u6587\u6848</td><td><em>string</em></td><td>-</td></tr><tr><td>immediate-check</td><td>\u662F\u5426\u5728\u521D\u59CB\u5316\u65F6\u7ACB\u5373\u6267\u884C\u6EDA\u52A8\u4F4D\u7F6E\u68C0\u67E5</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>direction</td><td>\u6EDA\u52A8\u89E6\u53D1\u52A0\u8F7D\u7684\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A <code>up</code></td><td><em>string</em></td><td><code>down</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>load</td><td>\u6EDA\u52A8\u6761\u4E0E\u5E95\u90E8\u8DDD\u79BB\u5C0F\u4E8E offset \u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 List \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>check</td><td>\u68C0\u67E5\u5F53\u524D\u7684\u6EDA\u52A8\u4F4D\u7F6E\uFF0C\u82E5\u5DF2\u6EDA\u52A8\u81F3\u5E95\u90E8\uFF0C\u5219\u4F1A\u89E6\u53D1 load \u4E8B\u4EF6</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ListProps</span>, <span class="hljs-title class_">ListInstance</span>, <span class="hljs-title class_">ListDirection</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>ListInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ListInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> listRef = ref&lt;<span class="hljs-title class_">ListInstance</span>&gt;();

listRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">check</span>();
</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u5217\u8868\u5185\u5BB9</td></tr><tr><td>loading</td><td>\u81EA\u5B9A\u4E49\u5E95\u90E8\u52A0\u8F7D\u4E2D\u63D0\u793A</td></tr><tr><td>finished</td><td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5B8C\u6210\u540E\u7684\u63D0\u793A\u6587\u6848</td></tr><tr><td>error</td><td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5931\u8D25\u540E\u7684\u63D0\u793A\u6587\u6848</td></tr></tbody></table></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-list-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-list-text-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-list-text-line-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-list-loading-icon-size</td><td><em>16px</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="list-de-yun-xing-ji-zhi-shi-shi-me" tabindex="-1">List \u7684\u8FD0\u884C\u673A\u5236\u662F\u4EC0\u4E48\uFF1F</h3><p>List \u4F1A\u76D1\u542C\u6D4F\u89C8\u5668\u7684\u6EDA\u52A8\u4E8B\u4EF6\u5E76\u8BA1\u7B97\u5217\u8868\u7684\u4F4D\u7F6E\uFF0C\u5F53\u5217\u8868\u5E95\u90E8\u4E0E\u53EF\u89C6\u533A\u57DF\u7684\u8DDD\u79BB\u5C0F\u4E8E <code>offset</code> \u65F6\uFF0CList \u4F1A\u89E6\u53D1\u4E00\u6B21 <code>load</code> \u4E8B\u4EF6\u3002</p></div><div class="van-doc-card"><h3 id="wei-shi-me-list-chu-shi-hua-hou-hui-li-ji-chu-fa-load-shi-jian" tabindex="-1">\u4E3A\u4EC0\u4E48 List \u521D\u59CB\u5316\u540E\u4F1A\u7ACB\u5373\u89E6\u53D1 load \u4E8B\u4EF6\uFF1F</h3><p>List \u521D\u59CB\u5316\u540E\u4F1A\u89E6\u53D1\u4E00\u6B21 load \u4E8B\u4EF6\uFF0C\u7528\u4E8E\u52A0\u8F7D\u7B2C\u4E00\u5C4F\u7684\u6570\u636E\uFF0C\u8FD9\u4E2A\u7279\u6027\u53EF\u4EE5\u901A\u8FC7 <code>immediate-check</code> \u5C5E\u6027\u5173\u95ED\u3002</p></div><div class="van-doc-card"><h3 id="wei-shi-me-hui-lian-xu-chu-fa-load-shi-jian" tabindex="-1">\u4E3A\u4EC0\u4E48\u4F1A\u8FDE\u7EED\u89E6\u53D1 load \u4E8B\u4EF6\uFF1F</h3><p>\u5982\u679C\u4E00\u6B21\u8BF7\u6C42\u52A0\u8F7D\u7684\u6570\u636E\u6761\u6570\u8F83\u5C11\uFF0C\u5BFC\u81F4\u5217\u8868\u5185\u5BB9\u65E0\u6CD5\u94FA\u6EE1\u5F53\u524D\u5C4F\u5E55\uFF0CList \u4F1A\u7EE7\u7EED\u89E6\u53D1 <code>load</code> \u4E8B\u4EF6\uFF0C\u76F4\u5230\u5185\u5BB9\u94FA\u6EE1\u5C4F\u5E55\u6216\u6570\u636E\u5168\u90E8\u52A0\u8F7D\u5B8C\u6210\u3002</p><p>\u56E0\u6B64\u4F60\u9700\u8981\u8C03\u6574\u6BCF\u6B21\u83B7\u53D6\u7684\u6570\u636E\u6761\u6570\uFF0C\u7406\u60F3\u60C5\u51B5\u4E0B\u6BCF\u6B21\u8BF7\u6C42\u83B7\u53D6\u7684\u6570\u636E\u6761\u6570\u5E94\u80FD\u591F\u586B\u6EE1\u4E00\u5C4F\u9AD8\u5EA6\u3002</p></div><div class="van-doc-card"><h3 id="loading-he-finished-fen-bie-shi-shi-me-han-yi" tabindex="-1">loading \u548C finished \u5206\u522B\u662F\u4EC0\u4E48\u542B\u4E49\uFF1F</h3><p><code>List</code> \u6709\u4EE5\u4E0B\u4E09\u79CD\u72B6\u6001\uFF0C\u7406\u89E3\u8FD9\u4E9B\u72B6\u6001\u6709\u52A9\u4E8E\u4F60\u6B63\u786E\u5730\u4F7F\u7528 <code>List</code> \u7EC4\u4EF6\uFF1A</p><ul><li>\u975E\u52A0\u8F7D\u4E2D\uFF0C<code>loading</code> \u4E3A <code>false</code>\uFF0C\u6B64\u65F6\u4F1A\u6839\u636E\u5217\u8868\u6EDA\u52A8\u4F4D\u7F6E\u5224\u65AD\u662F\u5426\u89E6\u53D1 <code>load</code> \u4E8B\u4EF6\uFF08\u5217\u8868\u5185\u5BB9\u4E0D\u8DB3\u4E00\u5C4F\u5E55\u65F6\uFF0C\u4F1A\u76F4\u63A5\u89E6\u53D1\uFF09\u3002</li><li>\u52A0\u8F7D\u4E2D\uFF0C<code>loading</code> \u4E3A <code>true</code>\uFF0C\u8868\u793A\u6B63\u5728\u53D1\u9001\u5F02\u6B65\u8BF7\u6C42\uFF0C\u6B64\u65F6\u4E0D\u4F1A\u89E6\u53D1 <code>load</code> \u4E8B\u4EF6\u3002</li><li>\u52A0\u8F7D\u5B8C\u6210\uFF0C<code>finished</code> \u4E3A <code>true</code>\uFF0C\u6B64\u65F6\u4E0D\u4F1A\u89E6\u53D1 <code>load</code> \u4E8B\u4EF6\u3002</li></ul><p>\u5728\u6BCF\u6B21\u8BF7\u6C42\u5B8C\u6BD5\u540E\uFF0C\u9700\u8981\u624B\u52A8\u5C06 <code>loading</code> \u8BBE\u7F6E\u4E3A <code>false</code>\uFF0C\u8868\u793A\u52A0\u8F7D\u7ED3\u675F\u3002</p></div><div class="van-doc-card"><h3 id="shi-yong-float-bu-ju-hou-yi-zhi-chu-fa-jia-zai" tabindex="-1">\u4F7F\u7528 float \u5E03\u5C40\u540E\u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D\uFF1F</h3><p>\u82E5 List \u7684\u5185\u5BB9\u4F7F\u7528\u4E86 float \u5E03\u5C40\uFF0C\u53EF\u4EE5\u5728\u5BB9\u5668\u4E0A\u6DFB\u52A0 <code>van-clearfix</code> \u7C7B\u540D\u6765\u6E05\u9664\u6D6E\u52A8\uFF0C\u4F7F\u5F97 List \u80FD\u6B63\u786E\u5224\u65AD\u5143\u7D20\u4F4D\u7F6E\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-list</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-clearfix&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;float-item&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;float-item&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;float-item&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-list</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zai-html-body-shang-she-zhi-overflow-hou-yi-zhi-chu-fa-jia-zai" tabindex="-1">\u5728 html\u3001body \u4E0A\u8BBE\u7F6E overflow \u540E\u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D\uFF1F</h3><p>\u5982\u679C\u5728 html \u548C body \u6807\u7B7E\u4E0A\u8BBE\u7F6E\u4E86 <code>overflow-x: hidden</code> \u6837\u5F0F\uFF0C\u4F1A\u5BFC\u81F4 List \u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D\u3002</p><pre><code class="language-css"><span class="hljs-selector-tag">html</span>,
<span class="hljs-selector-tag">body</span> {
  <span class="hljs-attribute">overflow-x</span>: hidden;
}
</code></pre><p>\u8FD9\u4E2A\u95EE\u9898\u7684\u539F\u56E0\u662F\u5F53\u5143\u7D20\u8BBE\u7F6E\u4E86 <code>overflow-x: hidden</code> \u6837\u5F0F\u65F6\uFF0C\u8BE5\u5143\u7D20\u7684 <code>overflow-y</code> \u4F1A\u88AB\u6D4F\u89C8\u5668\u8BBE\u7F6E\u4E3A <code>auto</code>\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u503C <code>visible</code>\uFF0C\u5BFC\u81F4 List \u65E0\u6CD5\u6B63\u786E\u5730\u5224\u65AD\u6EDA\u52A8\u5BB9\u5668\u3002\u89E3\u51B3\u65B9\u6CD5\u662F\u53BB\u9664\u8BE5\u6837\u5F0F\uFF0C\u6216\u8005\u5728 html \u548C body \u6807\u7B7E\u4E0A\u6DFB\u52A0 <code>height: 100%</code> \u6837\u5F0F\u3002</p></div><div class="van-doc-card"><h3 id="direction-shu-xing-she-zhi-wei-up-hou-yi-zhi-chu-fa-jia-zai" tabindex="-1">direction \u5C5E\u6027\u8BBE\u7F6E\u4E3A up \u540E\u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D\uFF1F</h3><p>\u8BBE\u7F6E <code>direction</code> \u5C5E\u6027\u4E3A up \u540E\uFF0C\u5F53\u6EDA\u52A8\u6761\u5904\u4E8E\u9875\u9762\u9876\u90E8\u65F6\uFF0C\u5C31\u4F1A\u89E6\u53D1 List \u7EC4\u4EF6\u7684\u52A0\u8F7D\u3002</p><p>\u56E0\u6B64\u5728\u4F7F\u7528\u8BE5\u5C5E\u6027\u65F6\uFF0C\u5EFA\u8BAE\u5728\u6BCF\u6B21\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\u540E\uFF0C\u5C06\u6EDA\u52A8\u6761\u6EDA\u52A8\u81F3\u9875\u9762\u5E95\u90E8\u6216\u975E\u9876\u90E8\u7684\u4F4D\u7F6E\u3002</p></div>`,23),p=[e],r={__name:"README.zh-CN",setup(d,{expose:s}){return s({frontmatter:{}}),(o,i)=>(a(),n("div",l,p))}};export{r as default};
