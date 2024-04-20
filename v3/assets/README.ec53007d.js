import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=t(`<h1>DatetimePicker</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to select time, support date and time dimensions, usually used with the <a href="#/en-US/popup" target="_blank">Popup</a> component.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DatetimePicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">DatetimePicker</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="choose-date" tabindex="-1">Choose Date</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Date&quot;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="choose-year-month" tabindex="-1">Choose Year-Month</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;year-month&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Year-Month&quot;</span>
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
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span> Year\`</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;month&#39;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span> Month\`</span>;
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
</code></pre></div><div class="van-doc-card"><h3 id="choose-month-day" tabindex="-1">Choose Month-Day</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month-day&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Month-Day&quot;</span>
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
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span> Month\`</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;day&#39;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span> Day\`</span>;
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
</code></pre></div><div class="van-doc-card"><h3 id="choose-time" tabindex="-1">Choose Time</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="choose-datetime" tabindex="-1">Choose DateTime</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datetime&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose DateTime&quot;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="choose-datehour" tabindex="-1">Choose DateHour</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datehour&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose DateTime&quot;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="option-filter" tabindex="-1">Option Filter</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Option Filter&quot;</span>
  <span class="hljs-attr">:filter</span>=<span class="hljs-string">&quot;filter&quot;</span>
/&gt;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="columns-order" tabindex="-1">Columns Order</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Columns Order&quot;</span>
  <span class="hljs-attr">:columns-order</span>=<span class="hljs-string">&quot;[&#39;month&#39;, &#39;day&#39;, &#39;year&#39;]&quot;</span>
  <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>));

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">type, val</span>) =&gt; {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;year&#39;</span>) {
        <span class="hljs-keyword">return</span> val + <span class="hljs-string">&#39; Year&#39;</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;month&#39;</span>) {
        <span class="hljs-keyword">return</span> val + <span class="hljs-string">&#39; Month&#39;</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;day&#39;</span>) {
        <span class="hljs-keyword">return</span> val + <span class="hljs-string">&#39; Day&#39;</span>;
      }
      <span class="hljs-keyword">return</span> val;
    };

    <span class="hljs-keyword">return</span> {
      formatter,
      currentDate,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Can be set to <code>date</code> <code>time</code><br> <code>year-month</code> <code>month-day</code> <code>datehour</code></td><td><em>string</em></td><td><code>datetime</code></td></tr><tr><td>title</td><td>Toolbar title</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>confirm-button-text</td><td>Text of confirm button</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td>cancel-button-text</td><td>Text of cancel button</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td>show-toolbar</td><td>Whether to show toolbar</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>loading</td><td>Whether to show loading prompt</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>Whether to be readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>filter</td><td>Option filter</td><td><em>(type: string, values: string[]) =&gt; string[]</em></td><td>-</td></tr><tr><td>formatter</td><td>Option text formatter</td><td><em>(type: string, value: string) =&gt; string</em></td><td>-</td></tr><tr><td>columns-order</td><td>Array for ordering columns, where item can be set to<br> <code>year</code>, <code>month</code>, <code>day</code>, <code>hour</code> and <code>minute</code></td><td><em>string[]</em></td><td>-</td></tr><tr><td>item-height</td><td>Option height, supports <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> unit, default <code>px</code></td><td><em>number | string</em></td><td><code>44</code></td></tr><tr><td>visible-item-count</td><td>Count of visible columns</td><td><em>number | string</em></td><td><code>6</code></td></tr><tr><td>swipe-duration</td><td>Duration of the momentum animation, unit <code>ms</code></td><td><em>number | string</em></td><td><code>1000</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="datepicker-props" tabindex="-1">DatePicker Props</h3><p>Following props are supported when the type is date or datetime</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>min-date</td><td>Min date</td><td><em>Date</em></td><td>Ten years ago on January 1</td></tr><tr><td>max-date</td><td>Max date</td><td><em>Date</em></td><td>Ten years later on December 31</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="timepicker-props" tabindex="-1">TimePicker Props</h3><p>Following props are supported when the type is time</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>min-hour</td><td>Min hour for <code>time</code> type</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>max-hour</td><td>Max hour for <code>time</code> type</td><td><em>number | string</em></td><td><code>23</code></td></tr><tr><td>min-minute</td><td>Max minute for <code>time</code> type</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>max-minute</td><td>Max minute for <code>time</code> type</td><td><em>number | string</em></td><td><code>59</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted when value changed</td><td>value: current value</td></tr><tr><td>confirm</td><td>Emitted when the confirm button is clicked</td><td>value: current value</td></tr><tr><td>cancel</td><td>Emitted when the cancel button is clicked</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>default</td><td>Custom toolbar content</td><td>-</td></tr><tr><td>title</td><td>Custom title</td><td>-</td></tr><tr><td>confirm</td><td>Custom confirm button text</td><td>-</td></tr><tr><td>cancel</td><td>Custom cancel button text</td><td>-</td></tr><tr><td>option</td><td>Custom option content</td><td><em>option: string | object</em></td></tr><tr><td>columns-top</td><td>Custom content above columns</td><td>-</td></tr><tr><td>columns-bottom</td><td>Custom content below columns</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get DatetimePicker instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>getPicker</td><td>get Picker instance</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">DatetimePickerType</span>,
  <span class="hljs-title class_">DatetimePickerProps</span>,
  <span class="hljs-title class_">DatetimePickerInstance</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>DatetimePickerInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">DatetimePickerInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> datetimePickerRef = ref&lt;<span class="hljs-title class_">DatetimePickerInstance</span>&gt;();

datetimePickerRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">getPicker</span>();
</code></pre></div>`,20),p=[l],i={__name:"README",setup(r,{expose:s}){return s({frontmatter:{}}),(o,d)=>(a(),n("div",e,p))}};export{i as default};
