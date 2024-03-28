import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=t(`<h1>DatetimePicker \u65F6\u95F4\u9009\u62E9</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u65F6\u95F4\u9009\u62E9\u5668\uFF0C\u652F\u6301\u65E5\u671F\u3001\u5E74\u6708\u3001\u65F6\u5206\u7B49\u7EF4\u5EA6\uFF0C\u901A\u5E38\u4E0E<a href="#/zh-CN/popup" target="_blank">\u5F39\u51FA\u5C42</a>\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DatetimePicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">DatetimePicker</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="xuan-ze-nian-yue-ri" tabindex="-1">\u9009\u62E9\u5E74\u6708\u65E5</h3><p>DatetimePicker \u901A\u8FC7 type \u5C5E\u6027\u6765\u5B9A\u4E49\u9700\u8981\u9009\u62E9\u7684\u65F6\u95F4\u7C7B\u578B\uFF0Ctype \u4E3A <code>date</code> \u8868\u793A\u9009\u62E9\u5E74\u6708\u65E5\u3002\u901A\u8FC7 min-date \u548C max-date \u5C5E\u6027\u53EF\u4EE5\u786E\u5B9A\u53EF\u9009\u7684\u65F6\u95F4\u8303\u56F4\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5E74\u6708\u65E5&quot;</span>
  <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>
  <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2021</span>, <span class="hljs-number">0</span>, <span class="hljs-number">17</span>));
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">10</span>, <span class="hljs-number">1</span>),
      currentDate,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-ze-nian-yue" tabindex="-1">\u9009\u62E9\u5E74\u6708</h3><p>\u5C06 type \u8BBE\u7F6E\u4E3A <code>year-month</code> \u5373\u53EF\u9009\u62E9\u5E74\u4EFD\u548C\u6708\u4EFD\u3002\u901A\u8FC7\u4F20\u5165 <code>formatter</code> \u51FD\u6570\uFF0C\u53EF\u4EE5\u5BF9\u9009\u9879\u6587\u5B57\u8FDB\u884C\u683C\u5F0F\u5316\u5904\u7406\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;year-month&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5E74\u6708&quot;</span>
  <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>
  <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
  <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>));

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">type, val</span>) =&gt; {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;year&#39;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>\u5E74\`</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;month&#39;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>\u6708\`</span>;
      }
      <span class="hljs-keyword">return</span> val;
    };

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">10</span>, <span class="hljs-number">1</span>),
      formatter,
      currentDate,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-ze-yue-ri" tabindex="-1">\u9009\u62E9\u6708\u65E5</h3><p>\u5C06 type \u8BBE\u7F6E\u4E3A <code>month-day</code> \u5373\u53EF\u9009\u62E9\u6708\u4EFD\u548C\u65E5\u671F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month-day&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u6708\u65E5&quot;</span>
  <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>
  <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
  <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>));

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">type, val</span>) =&gt; {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;month&#39;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>\u6708\`</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;day&#39;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>\u65E5\`</span>;
      }
      <span class="hljs-keyword">return</span> val;
    };

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">10</span>, <span class="hljs-number">1</span>),
      formatter,
      currentDate,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-ze-shi-jian" tabindex="-1">\u9009\u62E9\u65F6\u95F4</h3><p>\u5C06 type \u8BBE\u7F6E\u4E3A <code>time</code> \u5373\u53EF\u9009\u62E9\u65F6\u95F4\uFF08\u5C0F\u65F6\u548C\u5206\u949F\uFF09\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u65F6\u95F4&quot;</span>
  <span class="hljs-attr">:min-hour</span>=<span class="hljs-string">&quot;10&quot;</span>
  <span class="hljs-attr">:max-hour</span>=<span class="hljs-string">&quot;20&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;12:00&#39;</span>);
    <span class="hljs-keyword">return</span> { currentTime };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-ze-wan-zheng-shi-jian" tabindex="-1">\u9009\u62E9\u5B8C\u6574\u65F6\u95F4</h3><p>\u5C06 type \u8BBE\u7F6E\u4E3A <code>datetime</code> \u5373\u53EF\u9009\u62E9\u5B8C\u6574\u65F6\u95F4\uFF0C\u5305\u62EC\u5E74\u6708\u65E5\u548C\u5C0F\u65F6\u3001\u5206\u949F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datetime&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5B8C\u6574\u65F6\u95F4&quot;</span>
  <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>
  <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>));
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">10</span>, <span class="hljs-number">1</span>),
      currentDate,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-ze-nian-yue-ri-xiao-shi" tabindex="-1">\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6</h3><p>\u5C06 type \u8BBE\u7F6E\u4E3A <code>datehour</code> \u5373\u53EF\u9009\u62E9\u65E5\u671F\u548C\u5C0F\u65F6\uFF0C\u5305\u62EC\u5E74\u6708\u65E5\u548C\u5C0F\u65F6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datehour&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6&quot;</span>
  <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>
  <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>));
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">10</span>, <span class="hljs-number">1</span>),
      currentDate,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-xiang-guo-lu-qi" tabindex="-1">\u9009\u9879\u8FC7\u6EE4\u5668</h3><p>\u901A\u8FC7\u4F20\u5165 <code>filter</code> \u51FD\u6570\uFF0C\u53EF\u4EE5\u5BF9\u9009\u9879\u6570\u7EC4\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u65F6\u95F4\u95F4\u9694\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">:filter</span>=<span class="hljs-string">&quot;filter&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;12:00&#39;</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">filter</span> = (<span class="hljs-params">type, options</span>) =&gt; {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;minute&#39;</span>) {
        <span class="hljs-keyword">return</span> options.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> <span class="hljs-title class_">Number</span>(option) % <span class="hljs-number">5</span> === <span class="hljs-number">0</span>);
      }
      <span class="hljs-keyword">return</span> options;
    };

    <span class="hljs-keyword">return</span> {
      filter,
      currentTime,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-lie-pai-xu" tabindex="-1">\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F&quot;</span>
  <span class="hljs-attr">:columns-order</span>=<span class="hljs-string">&quot;[&#39;month&#39;, &#39;day&#39;, &#39;year&#39;]&quot;</span>
  <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>));

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">type, val</span>) =&gt; {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;year&#39;</span>) {
        <span class="hljs-keyword">return</span> val + <span class="hljs-string">&#39;\u5E74&#39;</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;month&#39;</span>) {
        <span class="hljs-keyword">return</span> val + <span class="hljs-string">&#39;\u6708&#39;</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;day&#39;</span>) {
        <span class="hljs-keyword">return</span> val + <span class="hljs-string">&#39;\u65E5&#39;</span>;
      }
      <span class="hljs-keyword">return</span> val;
    };

    <span class="hljs-keyword">return</span> {
      formatter,
      currentDate,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u65F6\u95F4\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>date</code> <code>time</code> <br> <code>year-month</code> <code>month-day</code> <code>datehour</code></td><td><em>string</em></td><td><code>datetime</code></td></tr><tr><td>title</td><td>\u9876\u90E8\u680F\u6807\u9898</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>confirm-button-text</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td>cancel-button-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td>show-toolbar</td><td>\u662F\u5426\u663E\u793A\u9876\u90E8\u680F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>loading</td><td>\u662F\u5426\u663E\u793A\u52A0\u8F7D\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u65E0\u6CD5\u5207\u6362\u9009\u9879</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>filter</td><td>\u9009\u9879\u8FC7\u6EE4\u51FD\u6570</td><td><em>(type: string, values: string[]) =&gt; string[]</em></td><td>-</td></tr><tr><td>formatter</td><td>\u9009\u9879\u683C\u5F0F\u5316\u51FD\u6570</td><td><em>(type: string, value: string) =&gt; string</em></td><td>-</td></tr><tr><td>columns-order</td><td>\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F\u6570\u7EC4, \u5B50\u9879\u53EF\u9009\u503C\u4E3A<br> <code>year</code>\u3001<code>month</code>\u3001<code>day</code>\u3001<code>hour</code>\u3001<code>minute</code></td><td><em>string[]</em></td><td>-</td></tr><tr><td>item-height</td><td>\u9009\u9879\u9AD8\u5EA6\uFF0C\u652F\u6301 <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> \u5355\u4F4D\uFF0C\u9ED8\u8BA4 <code>px</code></td><td><em>number | string</em></td><td><code>44</code></td></tr><tr><td>visible-item-count</td><td>\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570</td><td><em>number | string</em></td><td><code>6</code></td></tr><tr><td>swipe-duration</td><td>\u5FEB\u901F\u6ED1\u52A8\u65F6\u60EF\u6027\u6EDA\u52A8\u7684\u65F6\u957F\uFF0C\u5355\u4F4D<code>ms</code></td><td><em>number | string</em></td><td><code>1000</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="datepicker-props" tabindex="-1">DatePicker Props</h3><p>\u5F53\u65F6\u95F4\u9009\u62E9\u5668\u7C7B\u578B\u4E3A date \u6216 datetime \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>min-date</td><td>\u53EF\u9009\u7684\u6700\u5C0F\u65F6\u95F4\uFF0C\u7CBE\u786E\u5230\u5206\u949F</td><td><em>Date</em></td><td>\u5341\u5E74\u524D</td></tr><tr><td>max-date</td><td>\u53EF\u9009\u7684\u6700\u5927\u65F6\u95F4\uFF0C\u7CBE\u786E\u5230\u5206\u949F</td><td><em>Date</em></td><td>\u5341\u5E74\u540E</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="timepicker-props" tabindex="-1">TimePicker Props</h3><p>\u5F53\u65F6\u95F4\u9009\u62E9\u5668\u7C7B\u578B\u4E3A time \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>min-hour</td><td>\u53EF\u9009\u7684\u6700\u5C0F\u5C0F\u65F6</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>max-hour</td><td>\u53EF\u9009\u7684\u6700\u5927\u5C0F\u65F6</td><td><em>number | string</em></td><td><code>23</code></td></tr><tr><td>min-minute</td><td>\u53EF\u9009\u7684\u6700\u5C0F\u5206\u949F</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>max-minute</td><td>\u53EF\u9009\u7684\u6700\u5927\u5206\u949F</td><td><em>number | string</em></td><td><code>59</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>value: \u5F53\u524D\u9009\u4E2D\u7684\u65F6\u95F4</td></tr><tr><td>confirm</td><td>\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>value: \u5F53\u524D\u9009\u4E2D\u7684\u65F6\u95F4</td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u6574\u4E2A\u9876\u90E8\u680F\u7684\u5185\u5BB9</td><td>-</td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9</td><td>-</td></tr><tr><td>confirm</td><td>\u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u5185\u5BB9</td><td>-</td></tr><tr><td>cancel</td><td>\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u5185\u5BB9</td><td>-</td></tr><tr><td>option</td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u5185\u5BB9</td><td><em>option: string | object</em></td></tr><tr><td>columns-top</td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u5185\u5BB9</td><td>-</td></tr><tr><td>columns-bottom</td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0B\u65B9\u5185\u5BB9</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 DatetimePicker \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>getPicker</td><td>\u83B7\u53D6 Picker \u5B9E\u4F8B\uFF0C\u7528\u4E8E\u8C03\u7528 Picker \u7684<a href="#/zh-CN/picker#fang-fa" target="_blank">\u5B9E\u4F8B\u65B9\u6CD5</a></td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">DatetimePickerType</span>,
  <span class="hljs-title class_">DatetimePickerProps</span>,
  <span class="hljs-title class_">DatetimePickerInstance</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>DatetimePickerInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">DatetimePickerInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> datetimePickerRef = ref&lt;<span class="hljs-title class_">DatetimePickerInstance</span>&gt;();

datetimePickerRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">getPicker</span>();
</code></pre></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="she-zhi-min-date-huo-max-date-hou-chu-xian-ye-mian-qia-si-de-qing-kuang" tabindex="-1">\u8BBE\u7F6E min-date \u6216 max-date \u540E\u51FA\u73B0\u9875\u9762\u5361\u6B7B\u7684\u60C5\u51B5\uFF1F</h3><p>\u8BF7\u6CE8\u610F\u4E0D\u8981\u5728\u6A21\u677F\u4E2D\u76F4\u63A5\u4F7F\u7528\u7C7B\u4F3C<code>min-date=&quot;new Date()&quot;</code>\u7684\u5199\u6CD5\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4\u6BCF\u6B21\u6E32\u67D3\u7EC4\u4EF6\u65F6\u4F20\u5165\u4E00\u4E2A\u65B0\u7684 Date \u5BF9\u8C61\uFF0C\u800C\u4F20\u5165\u65B0\u7684\u6570\u636E\u4F1A\u89E6\u53D1\u4E0B\u4E00\u6B21\u6E32\u67D3\uFF0C\u4ECE\u800C\u9677\u5165\u6B7B\u5FAA\u73AF\u3002</p><p>\u6B63\u786E\u7684\u505A\u6CD5\u662F\u5C06<code>min-date</code>\u4F5C\u4E3A\u4E00\u4E2A\u6570\u636E\u5B9A\u4E49\u5728<code>data</code>\u51FD\u6570\u4E2D\u3002</p></div><div class="van-doc-card"><h3 id="zai-ios-xi-tong-shang-chu-shi-hua-zu-jian-shi-bai" tabindex="-1">\u5728 iOS \u7CFB\u7EDF\u4E0A\u521D\u59CB\u5316\u7EC4\u4EF6\u5931\u8D25\uFF1F</h3><p>\u5982\u679C\u4F60\u9047\u5230\u4E86\u5728 iOS \u4E0A\u65E0\u6CD5\u6E32\u67D3\u7EC4\u4EF6\u7684\u95EE\u9898\uFF0C\u8BF7\u786E\u8BA4\u5728\u521B\u5EFA Date \u5BF9\u8C61\u65F6\u6CA1\u6709\u4F7F\u7528<code>new Date(&#39;2020-01-01&#39;)</code>\u8FD9\u6837\u7684\u5199\u6CD5\uFF0CiOS \u4E0D\u652F\u6301\u4EE5\u4E2D\u5212\u7EBF\u5206\u9694\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u6B63\u786E\u5199\u6CD5\u662F<code>new Date(&#39;2020/01/01&#39;)</code>\u3002</p><p>\u5BF9\u6B64\u95EE\u9898\u7684\u8BE6\u7EC6\u89E3\u91CA\uFF1A<a href="https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios" target="_blank">stackoverflow</a>\u3002</p></div><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F</h3><p>\u53C2\u89C1<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">\u684C\u9762\u7AEF\u9002\u914D</a>\u3002</p></div><div class="van-doc-card"><h3 id="shi-fou-you-nian-fen-huo-yue-fen-xuan-ze-qi" tabindex="-1">\u662F\u5426\u6709\u5E74\u4EFD\u6216\u6708\u4EFD\u9009\u62E9\u5668\uFF1F</h3><p>\u5982\u679C\u4EC5\u9700\u8981\u9009\u62E9\u5E74\u4EFD\u6216\u8005\u6708\u4EFD\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 <a href="#/zh-CN/picker" target="_blank">Picker \u9009\u62E9\u5668</a> \u7EC4\u4EF6\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u5347\u7EA7\u5230 Vant 4\uFF0C\u5E76\u4F7F\u7528 <a href="https://vant-contrib.gitee.io/vant/v4/#/zh-CN/date-picker" target="_blank">DatePicker \u65E5\u671F\u9009\u62E9</a> \u7EC4\u4EF6\u3002</p></div><div class="van-doc-card"><h3 id="shi-fou-zhi-chi-xuan-ze-miao" tabindex="-1">\u662F\u5426\u652F\u6301\u9009\u62E9\u79D2\uFF1F</h3><p>Vant 3 \u4E2D\u7684 DatetimePicker \u7EC4\u4EF6\u4E0D\u652F\u6301\u9009\u62E9\u79D2\u3002</p><p>\u8BF7\u5347\u7EA7\u5230 Vant 4\uFF0C\u5E76\u4F7F\u7528 <a href="https://vant-contrib.gitee.io/vant/v4/#/zh-CN/time-picker" target="_blank">TimePicker \u65F6\u95F4\u9009\u62E9</a> \u7EC4\u4EF6\u3002</p></div>`,26),p=[l],i={__name:"README.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(d,o)=>(a(),n("div",e,p))}};export{i as default};
